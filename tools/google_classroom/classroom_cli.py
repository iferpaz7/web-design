#!/usr/bin/env python3
"""Small Google Classroom CLI for publishing this course content."""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any

try:
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError
except ImportError:  # pragma: no cover - handled at runtime for friendly setup
    Request = None
    Credentials = None
    InstalledAppFlow = None
    build = None
    HttpError = Exception


ROOT = Path(__file__).resolve().parents[2]
DEFAULT_CONFIG = ROOT / "classroom.config.json"
DEFAULT_CREDENTIALS = ROOT / "credentials.json"
DEFAULT_TOKEN = ROOT / "token.json"
DEFAULT_SITE_URL = "https://web-design-itsae.netlify.app"
SYLLABUS_PATH = ROOT / "docs" / "silabo-final-formato-sga.md"
DEFAULT_CLASS_DOC_GLOBS = (
    "docs/clases/**/classroom-*.md",
    "docs/clases/**/actividad-*.md",
)

# Official Classroom scopes as of Google docs updated 2026-04-20.
# classroom.coursework.students already covers managing coursework and grades.
SCOPES = [
    "https://www.googleapis.com/auth/classroom.courses",
    "https://www.googleapis.com/auth/classroom.rosters",
    "https://www.googleapis.com/auth/classroom.coursework.students",
    "https://www.googleapis.com/auth/classroom.coursework.me",
    "https://www.googleapis.com/auth/classroom.courseworkmaterials",
    "https://www.googleapis.com/auth/classroom.announcements",
    "https://www.googleapis.com/auth/classroom.profile.emails",
    "https://www.googleapis.com/auth/classroom.profile.photos",
    "https://www.googleapis.com/auth/classroom.topics",
    # Google Forms + Drive (needed for create-form command)
    "https://www.googleapis.com/auth/forms.body",
    "https://www.googleapis.com/auth/drive.file",
]


@dataclass
class ClassDoc:
    path: Path
    title: str
    subtitle: str
    date: str | None
    unit_number: int | None
    topic_number: int | None
    session_topic: str
    objective: str
    resources: list[dict[str, str]]
    activity_title: str
    activity_body: str
    evidence: str
    site_links: list[str]

    @property
    def topic_name(self) -> str:
        if self.unit_number is None:
            # Detectar si es contenido de bimestre/examen por el título o ruta
            title_lower = (self.title or "").casefold()
            if "bimestre" in title_lower or "examen" in title_lower:
                return "Bimestre I"
            return "General"
        return f"Unidad {self.unit_number}"

    @property
    def display_title(self) -> str:
        if self.subtitle and self.subtitle not in self.title:
            return f"{self.title} - {self.subtitle}"
        return self.title


def fail(message: str, exit_code: int = 1) -> None:
    print(f"Error: {message}", file=sys.stderr)
    raise SystemExit(exit_code)


def read_json(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def load_config(path: Path) -> dict[str, Any]:
    config = read_json(path)
    config.setdefault("site_url", DEFAULT_SITE_URL)
    config.setdefault("credentials_file", str(DEFAULT_CREDENTIALS.relative_to(ROOT)))
    config.setdefault("token_file", str(DEFAULT_TOKEN.relative_to(ROOT)))
    config.setdefault("sync", {})
    config["sync"].setdefault("default_state", "DRAFT")
    config["sync"].setdefault("default_points", 10)
    return config


def resolve_project_path(value: str | Path, base: Path = ROOT) -> Path:
    path = Path(value).expanduser()
    if path.is_absolute():
        return path
    return base / path


def ensure_google_deps() -> None:
    if any(dep is None for dep in (Request, Credentials, InstalledAppFlow, build)):
        fail(
            "faltan dependencias. Instala con: "
            "python3 -m pip install -r tools/google_classroom/requirements.txt"
        )


def classroom_service(args: argparse.Namespace):
    ensure_google_deps()
    config = load_config(args.config)
    credentials_path = resolve_project_path(args.credentials or config["credentials_file"])
    token_path = resolve_project_path(args.token or config["token_file"])

    if not credentials_path.exists():
        fail(
            f"no encuentro {credentials_path}. Descarga tu OAuth Desktop app "
            "desde Google Cloud Console y guárdala como credentials.json."
        )

    credentials = None
    if token_path.exists():
        credentials = Credentials.from_authorized_user_file(str(token_path), SCOPES)

    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(credentials_path), SCOPES)
            credentials = flow.run_local_server(
                port=0,
                open_browser=not args.no_browser,
                browser=args.browser,
                timeout_seconds=args.oauth_timeout,
                authorization_prompt_message=(
                    "Abre este enlace en tu navegador y acepta los permisos:\n{url}\n"
                ),
            )
        token_path.parent.mkdir(parents=True, exist_ok=True)
        token_path.write_text(credentials.to_json(), encoding="utf-8")

    return build("classroom", "v1", credentials=credentials, cache_discovery=False)


def execute(request):
    try:
        return request.execute()
    except HttpError as error:
        details = getattr(error, "content", b"").decode("utf-8", errors="ignore")
        fail(f"Google Classroom API respondió {error}. {details}")


def print_json(data: Any) -> None:
    print(json.dumps(data, indent=2, ensure_ascii=False))


def first_heading(markdown: str, level: int = 1) -> str:
    pattern = rf"^{'#' * level}\s+(.+?)\s*$"
    match = re.search(pattern, markdown, re.MULTILINE)
    return match.group(1).strip() if match else ""


def first_subtitle(markdown: str) -> str:
    ignored = {
        "objetivo de la clase",
        "objetivo de la evaluación",
        "tema de la sesión",
        "recursos de la sesión",
        "recursos de la clase",
        "recursos de repaso",
        "contenidos de la sesión",
        "contenidos evaluados",
        "actividad de la clase",
        "evidencia esperada",
    }
    for match in re.finditer(r"^##\s+(.+?)\s*$", markdown, re.MULTILINE):
        heading = match.group(1).strip()
        normalized = heading.rstrip(":").casefold()
        if normalized in ignored or normalized.startswith("actividad de la clase"):
            return ""
        return heading
    return ""


def strip_markdown_links(text: str) -> str:
    return re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)


def first_content_line(text: str) -> str:
    for line in text.splitlines():
        clean = line.strip().strip("*").strip()
        if clean:
            return strip_markdown_links(clean)
    return ""


def section_text(markdown: str, heading: str) -> str:
    pattern = rf"^##\s+{re.escape(heading)}\s*$"
    match = re.search(pattern, markdown, re.MULTILINE | re.IGNORECASE)
    if not match:
        return ""
    start = match.end()
    next_heading = re.search(r"^##\s+", markdown[start:], re.MULTILINE)
    end = start + next_heading.start() if next_heading else len(markdown)
    content = markdown[start:end]
    content = re.split(r"^\s*---\s*$", content, maxsplit=1, flags=re.MULTILINE)[0]
    return content.strip().strip("-").strip()


def find_links(markdown: str) -> list[str]:
    links = re.findall(r"\[[^\]]+\]\((https?://[^)]+)\)", markdown)
    without_markdown_links = re.sub(r"\[[^\]]+\]\([^)]+\)", "", markdown)
    links.extend(re.findall(r"https?://[^\s)]+", without_markdown_links))
    seen: set[str] = set()
    unique: list[str] = []
    for link in links:
        clean = link.rstrip(".,")
        if clean not in seen:
            seen.add(clean)
            unique.append(clean)
    return unique


def parse_resources(markdown: str) -> list[dict[str, str]]:
    resources: list[dict[str, str]] = []
    section = section_text(markdown, "Recursos de la clase") or section_text(
        markdown, "Recursos de la sesión"
    )
    if not section:
        return resources

    blocks = re.split(r"^###\s+", section, flags=re.MULTILINE)
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        title, _, body = block.partition("\n")
        links = find_links(body)
        if links:
            resources.append({"title": strip_markdown_links(title).strip(), "url": links[0]})
    return resources


def parse_unit_topic(path: Path) -> tuple[int | None, int | None]:
    text = str(path)
    match = re.search(r"unidad(\d+)/tema(\d+)", text)
    if not match:
        return None, None
    return int(match.group(1)), int(match.group(2))


def parse_date(markdown: str, path: Path) -> str | None:
    from_name = re.search(r"(\d{4}-\d{2}-\d{2})", path.name)
    if from_name:
        return from_name.group(1)
    match = re.search(r"Fecha:\*\*?\s*([^|\n]+)|Fecha:\s*([^|\n]+)", markdown, re.IGNORECASE)
    if match:
        return (match.group(1) or match.group(2)).strip()
    return None


def official_topic_title(unit_number: int | None, topic_number: int | None) -> str:
    if unit_number is None or topic_number is None or not SYLLABUS_PATH.exists():
        return ""

    target_unit = f"Unidad {unit_number}".casefold()
    for line in SYLLABUS_PATH.read_text(encoding="utf-8").splitlines():
        if not line.startswith("|"):
            continue
        cells = [cell.strip() for cell in line.strip("|").split("|")]
        if len(cells) < 4:
            continue
        if cells[0] == "---" or cells[0].casefold() == "tema":
            continue
        if cells[0] == str(topic_number) and cells[1].casefold() == target_unit:
            return cells[3].strip()
    return ""


def fallback_topic_title(doc: ClassDoc) -> str:
    for candidate in (doc.session_topic, doc.subtitle, doc.title):
        clean = candidate.strip()
        clean = re.sub(r"^Clase\s+[—-]\s+", "", clean, flags=re.IGNORECASE)
        clean = re.sub(r"^Recursos de Clase\s+[—-]\s+", "", clean, flags=re.IGNORECASE)
        clean = re.sub(r"^Diseño Web para Marketing Digital\s*[—-]?\s*", "", clean, flags=re.IGNORECASE)
        clean = re.sub(r"^U\d+\s*/\s*Tema\s*\d+\s*:\s*", "", clean, flags=re.IGNORECASE)
        clean = re.sub(r"^Unidad\s*\d+\s*[—·,/-]*\s*Tema\s*\d+\s*:?\s*", "", clean, flags=re.IGNORECASE)
        clean = clean.strip(" -—·:")
        if clean and not re.fullmatch(r"Unidad\s+\d+,\s*Tema\s+\d+", clean, flags=re.IGNORECASE):
            return clean
    return "Clase"


def class_material_title(doc: ClassDoc) -> str:
    unit = doc.unit_number
    topic = doc.topic_number
    topic_title = (official_topic_title(unit, topic) or fallback_topic_title(doc)).rstrip(".")
    if unit is not None and topic is not None:
        return f"Clase: Unidad {unit} - Tema {topic} - {topic_title}"
    return f"Clase: {topic_title}"


def parse_class_doc(path: Path, site_url: str = DEFAULT_SITE_URL) -> ClassDoc:
    markdown = path.read_text(encoding="utf-8")
    unit_number, topic_number = parse_unit_topic(path)
    activity_section = ""
    activity_title = ""
    for heading in ("Actividad de la clase", "Actividad de la clase: Mapa de Secciones Guiado"):
        activity_section = section_text(markdown, heading)
        if activity_section:
            activity_title = heading
            break
    if not activity_section:
        match = re.search(r"^##\s+(Actividad[^\n]+)", markdown, re.MULTILINE | re.IGNORECASE)
        if match:
            activity_title = match.group(1).strip()
            activity_section = section_text(markdown, activity_title)

    evidence = section_text(markdown, "Evidencia esperada")
    session_topic = first_content_line(section_text(markdown, "Tema de la sesión"))
    links = find_links(markdown)
    return ClassDoc(
        path=path,
        title=first_heading(markdown, 1) or path.stem,
        subtitle=first_subtitle(markdown),
        date=parse_date(markdown, path),
        unit_number=unit_number,
        topic_number=topic_number,
        session_topic=session_topic,
        objective=section_text(markdown, "Objetivo de la clase"),
        resources=parse_resources(markdown),
        activity_title=activity_title or "Actividad de la clase",
        activity_body=activity_section,
        evidence=evidence,
        site_links=[link for link in links if site_url in link],
    )


def material_items(urls: list[str]) -> list[dict[str, Any]]:
    return [{"link": {"url": url}} for url in urls[:20]]


def due_date_body(value: str | None) -> dict[str, int] | None:
    if not value:
        return None
    match = re.fullmatch(r"(\d{4})-(\d{2})-(\d{2})", value)
    if not match:
        fail("usa --due-date con formato YYYY-MM-DD")
    year, month, day = match.groups()
    return {"year": int(year), "month": int(month), "day": int(day)}


def due_time_body(value: str | None) -> dict[str, int] | None:
    if not value:
        return None
    match = re.fullmatch(r"(\d{1,2}):(\d{2})", value)
    if not match:
        fail("usa --due-time con formato HH:MM")
    hours, minutes = map(int, match.groups())
    if not (0 <= hours <= 23 and 0 <= minutes <= 59):
        fail("usa --due-time entre 00:00 y 23:59")
    return {"hours": hours, "minutes": minutes}


def list_all(request_factory, response_key: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    page_token = None
    while True:
        response = execute(request_factory(page_token))
        items.extend(response.get(response_key, []))
        page_token = response.get("nextPageToken")
        if not page_token:
            return items


def find_by_title(items: list[dict[str, Any]], title: str) -> dict[str, Any] | None:
    normalized = title.strip().casefold()
    for item in items:
        item_title = item.get("title") or item.get("name") or ""
        if item_title.strip().casefold() == normalized:
            return item
    return None


def class_doc_paths(patterns: list[str]) -> list[Path]:
    candidates: list[Path] = []
    seen: set[Path] = set()
    for pattern in patterns:
        for path in sorted(ROOT.glob(pattern)):
            if path not in seen:
                candidates.append(path)
                seen.add(path)
    return candidates


def topic_id_for_name(service, course_id: str, name: str, create: bool, dry_run: bool) -> str | None:
    topics = list_all(
        lambda token: service.courses()
        .topics()
        .list(courseId=course_id, pageToken=token, pageSize=100),
        "topic",
    )
    existing = find_by_title(topics, name)
    if existing:
        return existing["topicId"]
    if not create:
        return None
    if dry_run:
        print(f"[dry-run] Crear tema: {name}")
        return None
    created = execute(service.courses().topics().create(courseId=course_id, body={"name": name}))
    print(f"Tema creado: {created.get('name')} ({created.get('topicId')})")
    return created.get("topicId")


def class_material_body(doc: ClassDoc, state: str, topic_id: str | None) -> dict[str, Any]:
    urls = [resource["url"] for resource in doc.resources] or doc.site_links
    body: dict[str, Any] = {
        "title": class_material_title(doc),
        "description": "\n\n".join(
            part
            for part in [
                f"Fecha: {doc.date}" if doc.date else "",
                doc.objective,
                "Recursos disponibles para revisar la clase.",
            ]
            if part
        ),
        "state": state,
        "materials": material_items(urls),
    }
    if topic_id:
        body["topicId"] = topic_id
    return body


def class_assignment_body(
    doc: ClassDoc,
    state: str,
    topic_id: str | None,
    points: float,
    due_date: str | None,
    due_time: str | None,
) -> dict[str, Any]:
    description = "\n\n".join(
        part
        for part in [
            doc.activity_body,
            f"Evidencia esperada:\n{doc.evidence}" if doc.evidence else "",
        ]
        if part
    )
    clean_activity_title = doc.activity_title.replace("Actividad de la clase:", "").strip()
    if not clean_activity_title or clean_activity_title.casefold() == "actividad de la clase":
        clean_activity_title = doc.display_title
    body: dict[str, Any] = {
        "title": f"Actividad: {clean_activity_title}",
        "description": description or f"Actividad asociada a {doc.display_title}.",
        "state": state,
        "workType": "ASSIGNMENT",
        "maxPoints": points,
        "materials": material_items(doc.site_links),
    }
    due_date_value = due_date_body(due_date)
    due_time_value = due_time_body(due_time)
    if due_date_value:
        body["dueDate"] = due_date_value
    if due_time_value:
        body["dueTime"] = due_time_value
    if topic_id:
        body["topicId"] = topic_id
    return body


def announcement_body(doc: ClassDoc, state: str, topic_id: str | None) -> dict[str, Any]:
    links = doc.site_links[:3]
    text = f"Nueva clase disponible: {doc.display_title}"
    if doc.objective:
        text += f"\n\nObjetivo:\n{doc.objective}"
    body: dict[str, Any] = {
        "text": text,
        "state": state,
        "materials": material_items(links),
    }
    if topic_id:
        body["topicId"] = topic_id
    return body


def find_by_announcement_text(items: list[dict[str, Any]], text: str) -> dict[str, Any] | None:
    normalized_first_line = text.strip().splitlines()[0].casefold()
    for item in items:
        item_first_line = item.get("text", "").strip().splitlines()[0].casefold()
        if item_first_line == normalized_first_line:
            return item
    return None


def cmd_print_scopes(_: argparse.Namespace) -> None:
    for scope in SCOPES:
        print(scope)


def cmd_auth(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    execute(service.courses().list(pageSize=1))
    print("OAuth listo. token.json fue creado/actualizado correctamente.")


def cmd_list_courses(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    kwargs: dict[str, Any] = {"pageSize": 100}
    if args.course_state:
        kwargs["courseStates"] = args.course_state
    courses = list_all(
        lambda token: service.courses().list(pageToken=token, **kwargs),
        "courses",
    )
    if args.json:
        print_json(courses)
        return
    for course in courses:
        print(
            f"{course.get('id')}\t{course.get('courseState')}\t"
            f"{course.get('name')}\t{course.get('section', '')}"
        )


def cmd_create_course(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    config = load_config(args.config)
    defaults = config.get("default_course", {})
    body = {
        "name": args.name or defaults.get("name"),
        "section": args.section or defaults.get("section"),
        "descriptionHeading": args.description_heading
        or defaults.get("descriptionHeading")
        or defaults.get("name"),
        "description": args.description or defaults.get("description"),
        "room": args.room or defaults.get("room"),
        "ownerId": args.owner_id or defaults.get("ownerId") or "me",
        "courseState": args.state or defaults.get("courseState") or "ACTIVE",
    }
    body = {key: value for key, value in body.items() if value}
    if not body.get("name"):
        fail("indica --name o configura default_course.name en classroom.config.json")
    created = execute(service.courses().create(body=body))
    print_json(created)


def cmd_update_course(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    body = {
        "name": args.name,
        "section": args.section,
        "descriptionHeading": args.description_heading,
        "description": args.description,
        "room": args.room,
        "courseState": args.state,
    }
    body = {key: value for key, value in body.items() if value is not None}
    if not body:
        fail("no hay campos para actualizar")
    updated = execute(
        service.courses().patch(
            id=args.course_id,
            updateMask=",".join(body.keys()),
            body=body,
        )
    )
    print_json(updated)


def cmd_archive_course(args: argparse.Namespace) -> None:
    args.state = "ARCHIVED"
    args.name = args.section = args.description_heading = args.description = args.room = None
    cmd_update_course(args)


def cmd_delete_course(args: argparse.Namespace) -> None:
    if not args.yes:
        fail("este comando elimina permanentemente. Repite con --yes si estás seguro.")
    service = classroom_service(args)
    execute(service.courses().delete(id=args.course_id))
    print(f"Curso eliminado: {args.course_id}")


def cmd_create_material(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    body: dict[str, Any] = {
        "title": args.title,
        "description": args.description or "",
        "state": args.state,
        "materials": material_items(args.link),
    }
    if args.topic_id:
        body["topicId"] = args.topic_id
    created = execute(
        service.courses()
        .courseWorkMaterials()
        .create(courseId=args.course_id, body=body)
    )
    print_json(created)


def cmd_create_assignment(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    body: dict[str, Any] = {
        "title": args.title,
        "description": args.description or "",
        "state": args.state,
        "workType": "ASSIGNMENT",
        "maxPoints": args.points,
        "materials": material_items(args.link),
    }
    due_date_value = due_date_body(args.due_date)
    due_time_value = due_time_body(args.due_time)
    if due_date_value:
        body["dueDate"] = due_date_value
    if due_time_value:
        body["dueTime"] = due_time_value
    if args.topic_id:
        body["topicId"] = args.topic_id
    created = execute(
        service.courses().courseWork().create(courseId=args.course_id, body=body)
    )
    print_json(created)


def cmd_create_announcement(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    body: dict[str, Any] = {
        "text": args.text,
        "state": args.state,
        "materials": material_items(args.link),
    }
    created = execute(
        service.courses().announcements().create(courseId=args.course_id, body=body)
    )
    print_json(created)


def cmd_list_announcements(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    announcements = list_all(
        lambda token: service.courses()
        .announcements()
        .list(
            courseId=args.course_id,
            pageToken=token,
            pageSize=100,
            announcementStates=["DRAFT", "PUBLISHED"],
        ),
        "announcements",
    )
    if args.json:
        print_json(announcements)
        return
    for announcement in announcements:
        first_line = announcement.get("text", "").strip().splitlines()[0]
        print(f"{announcement.get('id')}\t{announcement.get('state')}\t{first_line}")


def cmd_delete_announcement(args: argparse.Namespace) -> None:
    if not args.yes:
        fail("este comando elimina un anuncio. Repite con --yes si estás seguro.")
    service = classroom_service(args)
    execute(
        service.courses()
        .announcements()
        .delete(courseId=args.course_id, id=args.announcement_id)
    )
    print(f"Anuncio eliminado: {args.announcement_id}")


def cmd_list_materials(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    materials = list_all(
        lambda token: service.courses()
        .courseWorkMaterials()
        .list(
            courseId=args.course_id,
            pageToken=token,
            pageSize=100,
            courseWorkMaterialStates=["DRAFT", "PUBLISHED"],
        ),
        "courseWorkMaterial",
    )
    if args.json:
        print_json(materials)
        return
    for material in materials:
        print(f"{material.get('id')}\t{material.get('state')}\t{material.get('title')}")


def cmd_delete_material(args: argparse.Namespace) -> None:
    if not args.yes:
        fail("este comando elimina un material. Repite con --yes si estás seguro.")
    service = classroom_service(args)
    execute(
        service.courses()
        .courseWorkMaterials()
        .delete(courseId=args.course_id, id=args.material_id)
    )
    print(f"Material eliminado: {args.material_id}")


def material_urls_from_body(body: dict[str, Any]) -> set[str]:
    urls: set[str] = set()
    for material in body.get("materials", []):
        url = material.get("link", {}).get("url")
        if url:
            urls.add(url)
    return urls


def cmd_sync_material_titles(args: argparse.Namespace) -> None:
    service = None if args.dry_run else classroom_service(args)
    config = load_config(args.config)
    docs = class_doc_paths(args.glob or ["docs/clases/**/classroom-*.md"])
    if args.only:
        docs = [path for path in docs if args.only in str(path)]
    if not docs:
        fail("no encontré materiales classroom-*.md para sincronizar títulos")

    existing_materials: list[dict[str, Any]] = []
    if service:
        existing_materials = list_all(
            lambda token: service.courses()
            .courseWorkMaterials()
            .list(
                courseId=args.course_id,
                pageToken=token,
                pageSize=100,
                courseWorkMaterialStates=["DRAFT", "PUBLISHED"],
            ),
            "courseWorkMaterial",
        )

    for path in docs:
        doc = parse_class_doc(path, site_url=config.get("site_url", DEFAULT_SITE_URL))
        desired_title = class_material_title(doc)
        desired_urls = material_urls_from_body(class_material_body(doc, "DRAFT", None))
        match = None
        for material in existing_materials:
            current_urls = material_urls_from_body(material)
            if desired_urls & current_urls:
                match = material
                break

        if args.dry_run:
            print(f"[dry-run] {path}: {desired_title}")
            continue
        if not match:
            print(f"No encontré material existente para: {desired_title}")
            continue
        current_title = match.get("title", "")
        if current_title == desired_title:
            print(f"Título ya correcto: {desired_title}")
            continue
        updated = execute(
            service.courses()
            .courseWorkMaterials()
            .patch(
                courseId=args.course_id,
                id=match["id"],
                updateMask="title",
                body={"title": desired_title},
            )
        )
        print(f"Renombrado: {current_title} -> {updated.get('title')}")


def cmd_list_assignments(args: argparse.Namespace) -> None:
    service = classroom_service(args)
    assignments = list_all(
        lambda token: service.courses()
        .courseWork()
        .list(
            courseId=args.course_id,
            pageToken=token,
            pageSize=100,
            courseWorkStates=["DRAFT", "PUBLISHED"],
        ),
        "courseWork",
    )
    if args.json:
        print_json(assignments)
        return
    for assignment in assignments:
        print(f"{assignment.get('id')}\t{assignment.get('state')}\t{assignment.get('title')}")


def cmd_sync_classes(args: argparse.Namespace) -> None:
    service = None if args.dry_run else classroom_service(args)
    config = load_config(args.config)
    sync_config = config.get("sync", {})
    state = args.state or sync_config.get("default_state", "DRAFT")
    points = args.points if args.points is not None else sync_config.get("default_points", 10)

    patterns = args.glob or list(DEFAULT_CLASS_DOC_GLOBS)
    docs = class_doc_paths(patterns)
    if args.only:
        docs = [path for path in docs if args.only in str(path)]
    if not docs:
        fail(f"no encontré clases con glob: {', '.join(patterns)}")

    existing_materials: list[dict[str, Any]] = []
    existing_work: list[dict[str, Any]] = []
    existing_announcements: list[dict[str, Any]] = []
    if service and (not args.force or args.update):
        existing_materials = list_all(
            lambda token: service.courses()
            .courseWorkMaterials()
            .list(
                courseId=args.course_id,
                pageToken=token,
                pageSize=100,
                courseWorkMaterialStates=["DRAFT", "PUBLISHED"],
            ),
            "courseWorkMaterial",
        )
        existing_work = list_all(
            lambda token: service.courses()
            .courseWork()
            .list(
                courseId=args.course_id,
                pageToken=token,
                pageSize=100,
                courseWorkStates=["DRAFT", "PUBLISHED"],
            ),
            "courseWork",
        )
        existing_announcements = list_all(
            lambda token: service.courses()
            .announcements()
            .list(
                courseId=args.course_id,
                pageToken=token,
                pageSize=100,
                announcementStates=["DRAFT", "PUBLISHED"],
            ),
            "announcements",
        )

    for path in docs:
        doc = parse_class_doc(path, site_url=config.get("site_url", DEFAULT_SITE_URL))
        is_material_file = path.name.startswith("classroom-")
        is_assignment_file = path.name.startswith("actividad-")
        topic_id = None
        if args.topics:
            if service:
                topic_id = topic_id_for_name(
                    service, args.course_id, doc.topic_name, create=True, dry_run=args.dry_run
                )
            else:
                print(f"[dry-run] Usar/crear tema: {doc.topic_name}")

        if args.materials and is_material_file:
            body = class_material_body(doc, state, topic_id)
            existing = find_by_title(existing_materials, body["title"])
            if existing and args.update:
                update_mask = "title,description"
                if args.dry_run:
                    print_json({"update_material": {"id": existing.get("id"), "body": body}})
                else:
                    updated = execute(
                        service.courses()
                        .courseWorkMaterials()
                        .patch(
                            courseId=args.course_id,
                            id=existing["id"],
                            updateMask=update_mask,
                            body=body,
                        )
                    )
                    print(f"Material actualizado: {updated.get('title')} ({updated.get('id')})")
            elif existing and not args.force:
                print(f"Omitido material existente: {body['title']}")
            elif args.dry_run:
                print_json({"create_material": body})
            else:
                created = execute(
                    service.courses()
                    .courseWorkMaterials()
                    .create(courseId=args.course_id, body=body)
                )
                print(f"Material creado: {created.get('title')} ({created.get('id')})")

        if args.assignments and is_assignment_file:
            body = class_assignment_body(
                doc,
                state,
                topic_id,
                points=float(points),
                due_date=args.due_date,
                due_time=args.due_time,
            )
            existing = find_by_title(existing_work, body["title"])
            if existing and args.update:
                update_mask = "title,description,maxPoints"
                if args.dry_run:
                    print_json({"update_assignment": {"id": existing.get("id"), "body": body}})
                else:
                    updated = execute(
                        service.courses()
                        .courseWork()
                        .patch(
                            courseId=args.course_id,
                            id=existing["id"],
                            updateMask=update_mask,
                            body=body,
                        )
                    )
                    print(f"Tarea actualizada: {updated.get('title')} ({updated.get('id')})")
            elif existing and not args.force:
                print(f"Omitida tarea existente: {body['title']}")
            elif args.dry_run:
                print_json({"create_assignment": body})
            else:
                created = execute(
                    service.courses().courseWork().create(courseId=args.course_id, body=body)
                )
                print(f"Tarea creada: {created.get('title')} ({created.get('id')})")

        if args.announcements and is_material_file:
            body = announcement_body(doc, state, None)
            existing = find_by_announcement_text(existing_announcements, body["text"])
            if existing and not args.force:
                print(f"Omitido anuncio existente: {body['text'].splitlines()[0]}")
            elif args.dry_run:
                print_json({"create_announcement": body})
            else:
                created = execute(
                    service.courses().announcements().create(courseId=args.course_id, body=body)
                )
                print(f"Anuncio creado: {created.get('id')}")


# ---------------------------------------------------------------------------
# Google Forms helpers
# ---------------------------------------------------------------------------

@dataclass
class ExamQuestion:
    index: int           # 1-based display number
    title: str           # e.g. "Pregunta 1 — Estrategia digital y conversión"
    points: str          # e.g. "2 puntos"
    context: str         # blockquote / situación hipotética, may be empty
    body: str            # full question text (sans title line)
    section: str         # "SECCIÓN A" or "SECCIÓN B"


def _strip_md_formatting(text: str) -> str:
    """Remove bold markers, inline code and leading list chars for plain-text fields."""
    text = re.sub(r"\*\*(.+?)\*\*", r"\1", text)
    text = re.sub(r"`(.+?)`", r"\1", text)
    text = re.sub(r"^[-*]\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\d+\.\s+", "", text, flags=re.MULTILINE)
    return text.strip()


def parse_exam_markdown(path: Path) -> tuple[str, str, list[ExamQuestion]]:
    """Return (form_title, form_description, questions) from an examen-*.md file."""
    markdown = path.read_text(encoding="utf-8")

    # Form title: first H1
    title = first_heading(markdown, 1) or path.stem

    # Description: instructions block (## Instrucciones generales)
    instructions = section_text(markdown, "Instrucciones generales")
    puntaje_block = section_text(markdown, "Puntaje total: 10 puntos") or ""
    description = _strip_md_formatting(
        "\n\n".join(part for part in [instructions, puntaje_block] if part)
    )

    questions: list[ExamQuestion] = []
    current_section = ""

    # Split on ### headings — each is a question or sub-section header
    blocks = re.split(r"^(#{1,3} .+)$", markdown, flags=re.MULTILINE)

    i = 0
    while i < len(blocks):
        block = blocks[i].strip()
        # Track current SECCIÓN (## SECCIÓN A / ## SECCIÓN B)
        if re.match(r"^## SECCI[ÓO]N", block, re.IGNORECASE):
            current_section = re.sub(r"^##\s+", "", block).strip()
            i += 1
            continue

        # Each ### block is a question
        if block.startswith("### "):
            heading = re.sub(r"^###\s+", "", block).strip()
            body_text = blocks[i + 1].strip() if i + 1 < len(blocks) else ""
            i += 2

            # Extract points from heading, e.g. "(2 puntos)"
            points_match = re.search(r"\((\d+\s*puntos?)\)", heading, re.IGNORECASE)
            points = points_match.group(1) if points_match else ""

            # Extract blockquote context (lines starting with >) as a separate field
            context_lines = []
            body_lines = []
            for line in body_text.splitlines():
                if line.strip().startswith(">"):
                    context_lines.append(line.strip().lstrip(">").strip())
                else:
                    body_lines.append(line)
            context = "\n".join(context_lines).strip()
            body = _strip_md_formatting("\n".join(body_lines).strip())

            # Only add blocks that look like numbered questions
            if re.search(r"Pregunta\s+\d+", heading, re.IGNORECASE):
                q_index = len(questions) + 1
                questions.append(
                    ExamQuestion(
                        index=q_index,
                        title=heading,
                        points=points,
                        context=context,
                        body=body,
                        section=current_section,
                    )
                )
        else:
            i += 1

    return title, description, questions


def _forms_service(args: argparse.Namespace):
    """Build a Google Forms API service client reusing the same OAuth credentials."""
    ensure_google_deps()
    config = load_config(args.config)
    credentials_path = resolve_project_path(args.credentials or config["credentials_file"])
    token_path = resolve_project_path(args.token or config["token_file"])

    if not credentials_path.exists():
        fail(
            f"no encuentro {credentials_path}. Descarga tu OAuth Desktop app "
            "desde Google Cloud Console y guárdala como credentials.json."
        )

    credentials = None
    if token_path.exists():
        credentials = Credentials.from_authorized_user_file(str(token_path), SCOPES)

    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(credentials_path), SCOPES)
            credentials = flow.run_local_server(
                port=0,
                open_browser=not args.no_browser,
                browser=args.browser,
                timeout_seconds=args.oauth_timeout,
                authorization_prompt_message=(
                    "Abre este enlace en tu navegador y acepta los permisos:\n{url}\n"
                ),
            )
        token_path.parent.mkdir(parents=True, exist_ok=True)
        token_path.write_text(credentials.to_json(), encoding="utf-8")

    return build("forms", "v1", credentials=credentials, cache_discovery=False)


def _build_form_requests(questions: list[ExamQuestion]) -> list[dict[str, Any]]:
    """
    Build the batchUpdate requests list that populates the form with:
    - One section break per SECCIÓN change
    - One paragraph (long-answer) text item per question
    The Form API uses an index-based insert; we build them in reverse order
    so that inserting at index 0 each time preserves the final order.
    """
    requests: list[dict[str, Any]] = []
    location_index = 0  # tracks where each item lands after all inserts

    # Group by section to insert section breaks
    seen_sections: list[str] = []

    for q in questions:
        # Insert a section-break header the first time we see a section
        if q.section and q.section not in seen_sections:
            seen_sections.append(q.section)
            requests.append({
                "createItem": {
                    "item": {
                        "title": q.section,
                        "pageBreakItem": {},
                    },
                    "location": {"index": location_index},
                }
            })
            location_index += 1

        # Build the full question description
        parts: list[str] = []
        if q.points:
            parts.append(f"[{q.points}]")
        if q.context:
            parts.append(f"Contexto:\n{q.context}")
        if q.body:
            parts.append(q.body)
        description = "\n\n".join(parts)

        requests.append({
            "createItem": {
                "item": {
                    "title": q.title,
                    "description": description,
                    "questionItem": {
                        "question": {
                            "required": True,
                            "textQuestion": {
                                "paragraph": True,   # long-answer text box
                            },
                        }
                    },
                },
                "location": {"index": location_index},
            }
        })
        location_index += 1

    return requests


def cmd_create_form(args: argparse.Namespace) -> None:
    """
    Parse an examen-*.md file, create a Google Form with one long-answer question
    per exam question, then optionally link the form to a Classroom assignment.
    """
    exam_path = Path(args.exam_file).expanduser()
    if not exam_path.exists():
        fail(f"no encuentro el archivo de examen: {exam_path}")

    title, description, questions = parse_exam_markdown(exam_path)
    if not questions:
        fail("no se encontraron preguntas en el archivo de examen. Verifica el formato (### Pregunta N).")

    if args.dry_run:
        print(f"[dry-run] Título del form: {title}")
        print(f"[dry-run] Preguntas encontradas: {len(questions)}")
        for q in questions:
            print(f"  [{q.section}] {q.title} ({q.points})")
        return

    forms = _forms_service(args)

    # Step 1 — create the form shell (title only; description goes via batchUpdate)
    created_form = execute(
        forms.forms().create(body={"info": {"title": title, "documentTitle": title}})
    )
    form_id = created_form["formId"]
    responder_url = created_form.get("responderUri", f"https://docs.google.com/forms/d/{form_id}/viewform")
    edit_url = f"https://docs.google.com/forms/d/{form_id}/edit"
    print(f"Form creado: {title}")
    print(f"  Editar : {edit_url}")
    print(f"  Enlace para estudiantes: {responder_url}")

    # Step 2 — set description and add all questions via batchUpdate
    update_requests: list[dict[str, Any]] = []

    # Update form description
    if description:
        update_requests.append({
            "updateFormInfo": {
                "info": {"description": description},
                "updateMask": "description",
            }
        })

    # Add a "Nombre completo" text field at index 0 so responses are identifiable
    update_requests.append({
        "createItem": {
            "item": {
                "title": "Nombre completo",
                "description": "Escribe tu nombre y apellido completos.",
                "questionItem": {
                    "question": {
                        "required": True,
                        "textQuestion": {"paragraph": False},
                    }
                },
            },
            "location": {"index": 0},
        }
    })

    # Add exam questions (offset index by 1 because "Nombre" is at 0)
    for i, req in enumerate(_build_form_requests(questions)):
        create_item = req.get("createItem", {})
        if "location" in create_item:
            create_item["location"]["index"] += 1  # shift past "Nombre" field
        update_requests.append(req)

    execute(forms.forms().batchUpdate(formId=form_id, body={"requests": update_requests}))
    print(f"  {len(questions)} preguntas agregadas al form.")

    # Step 3 — optionally attach the form link to an existing Classroom assignment
    if args.course_id and args.assignment_id:
        classroom = classroom_service(args)
        existing_work = execute(
            classroom.courses()
            .courseWork()
            .get(courseId=args.course_id, id=args.assignment_id)
        )
        current_materials = existing_work.get("materials", [])
        # Avoid duplicates
        existing_urls = {
            m.get("link", {}).get("url", "") for m in current_materials
        }
        if responder_url not in existing_urls:
            current_materials.append({
                "link": {
                    "url": responder_url,
                    "title": f"{title} — Formulario de respuestas",
                }
            })
        # Strategy: delete the old assignment and recreate it with the form link included.
        execute(
            classroom.courses()
            .courseWork()
            .delete(courseId=args.course_id, id=args.assignment_id)
        )

        new_body: dict[str, Any] = {
            "title": existing_work.get("title", title),
            "workType": "ASSIGNMENT",
            "state": existing_work.get("state", "DRAFT"),
            "maxPoints": existing_work.get("maxPoints", 10),
            "materials": current_materials,
        }
        # Preserve optional fields if present
        for field in ("description", "topicId", "dueDate", "dueTime", "scheduledTime"):
            if field in existing_work:
                new_body[field] = existing_work[field]

        created_work = execute(
            classroom.courses().courseWork().create(courseId=args.course_id, body=new_body)
        )
        new_assignment_id = created_work.get("id", "")
        print(
            f"  Form vinculado a tarea Classroom: {created_work.get('title')} "
            f"({new_assignment_id})"
        )

    # Step 4 — write the form URL back into the exam markdown as a footer comment
    _write_form_url_to_exam(exam_path, responder_url, edit_url)

    print("\nListo. Activa las respuestas y cambia el estado a PUBLISHED cuando estés listo.")


def _write_form_url_to_exam(exam_path: Path, responder_url: str, edit_url: str) -> None:
    """Append the generated form URLs as a metadata block at the end of the exam markdown."""
    content = exam_path.read_text(encoding="utf-8")
    marker = "<!-- google-form"
    if marker in content:
        # Replace existing block
        content = re.sub(
            r"<!-- google-form.*?-->",
            f"<!-- google-form\nresponder: {responder_url}\neditar: {edit_url}\n-->",
            content,
            flags=re.DOTALL,
        )
    else:
        content += (
            f"\n\n<!-- google-form\n"
            f"responder: {responder_url}\n"
            f"editar: {edit_url}\n"
            f"-->\n"
        )
    exam_path.write_text(content, encoding="utf-8")
    print(f"  URLs guardadas en {exam_path.name}")


def add_common_args(parser: argparse.ArgumentParser) -> None:
    parser.add_argument(
        "--config",
        type=Path,
        default=DEFAULT_CONFIG,
        help="Ruta a classroom.config.json",
    )
    parser.add_argument("--credentials", help="Ruta a credentials.json")
    parser.add_argument("--token", help="Ruta a token.json")
    parser.add_argument(
        "--no-browser",
        action="store_true",
        help="No intenta abrir navegador; imprime el enlace OAuth.",
    )
    parser.add_argument(
        "--browser",
        help="Navegador a usar para OAuth, ej. google-chrome.",
    )
    parser.add_argument(
        "--oauth-timeout",
        type=int,
        default=300,
        help="Segundos para esperar el login OAuth.",
    )


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Administra Google Classroom desde este repo."
    )
    add_common_args(parser)
    subparsers = parser.add_subparsers(dest="command", required=True)

    scopes = subparsers.add_parser("print-scopes", help="Imprime scopes OAuth requeridos")
    scopes.set_defaults(func=cmd_print_scopes)

    auth = subparsers.add_parser("auth", help="Autoriza OAuth y crea token.json")
    auth.set_defaults(func=cmd_auth)

    list_courses = subparsers.add_parser("list-courses", help="Lista cursos")
    list_courses.add_argument("--course-state", action="append")
    list_courses.add_argument("--json", action="store_true")
    list_courses.set_defaults(func=cmd_list_courses)

    create_course = subparsers.add_parser("create-course", help="Crea un curso")
    create_course.add_argument("--name")
    create_course.add_argument("--section")
    create_course.add_argument("--description-heading")
    create_course.add_argument("--description")
    create_course.add_argument("--room")
    create_course.add_argument("--owner-id", default="me")
    create_course.add_argument("--state", default="ACTIVE")
    create_course.set_defaults(func=cmd_create_course)

    update_course = subparsers.add_parser("update-course", help="Actualiza un curso")
    update_course.add_argument("course_id")
    update_course.add_argument("--name")
    update_course.add_argument("--section")
    update_course.add_argument("--description-heading")
    update_course.add_argument("--description")
    update_course.add_argument("--room")
    update_course.add_argument("--state")
    update_course.set_defaults(func=cmd_update_course)

    archive_course = subparsers.add_parser("archive-course", help="Archiva un curso")
    archive_course.add_argument("course_id")
    archive_course.set_defaults(func=cmd_archive_course)

    delete_course = subparsers.add_parser("delete-course", help="Elimina un curso")
    delete_course.add_argument("course_id")
    delete_course.add_argument("--yes", action="store_true")
    delete_course.set_defaults(func=cmd_delete_course)

    material = subparsers.add_parser("create-material", help="Crea material de clase")
    material.add_argument("course_id")
    material.add_argument("--title", required=True)
    material.add_argument("--description")
    material.add_argument("--link", action="append", default=[])
    material.add_argument("--topic-id")
    material.add_argument("--state", default="DRAFT", choices=["DRAFT", "PUBLISHED"])
    material.set_defaults(func=cmd_create_material)

    assignment = subparsers.add_parser("create-assignment", help="Crea tarea/asignación")
    assignment.add_argument("course_id")
    assignment.add_argument("--title", required=True)
    assignment.add_argument("--description")
    assignment.add_argument("--link", action="append", default=[])
    assignment.add_argument("--points", type=float, default=10)
    assignment.add_argument("--due-date")
    assignment.add_argument("--due-time")
    assignment.add_argument("--topic-id")
    assignment.add_argument("--state", default="DRAFT", choices=["DRAFT", "PUBLISHED"])
    assignment.set_defaults(func=cmd_create_assignment)

    announcement = subparsers.add_parser("create-announcement", help="Publica anuncio")
    announcement.add_argument("course_id")
    announcement.add_argument("--text", required=True)
    announcement.add_argument("--link", action="append", default=[])
    announcement.add_argument("--state", default="DRAFT", choices=["DRAFT", "PUBLISHED"])
    announcement.set_defaults(func=cmd_create_announcement)

    list_announcements = subparsers.add_parser("list-announcements", help="Lista anuncios")
    list_announcements.add_argument("course_id")
    list_announcements.add_argument("--json", action="store_true")
    list_announcements.set_defaults(func=cmd_list_announcements)

    delete_announcement = subparsers.add_parser("delete-announcement", help="Elimina anuncio")
    delete_announcement.add_argument("course_id")
    delete_announcement.add_argument("announcement_id")
    delete_announcement.add_argument("--yes", action="store_true")
    delete_announcement.set_defaults(func=cmd_delete_announcement)

    list_materials = subparsers.add_parser("list-materials", help="Lista materiales")
    list_materials.add_argument("course_id")
    list_materials.add_argument("--json", action="store_true")
    list_materials.set_defaults(func=cmd_list_materials)

    delete_material = subparsers.add_parser("delete-material", help="Elimina material")
    delete_material.add_argument("course_id")
    delete_material.add_argument("material_id")
    delete_material.add_argument("--yes", action="store_true")
    delete_material.set_defaults(func=cmd_delete_material)

    sync_material_titles = subparsers.add_parser(
        "sync-material-titles",
        help="Normaliza títulos de materiales existentes desde classroom-*.md",
    )
    sync_material_titles.add_argument("course_id")
    sync_material_titles.add_argument("--glob", action="append")
    sync_material_titles.add_argument("--only")
    sync_material_titles.add_argument("--dry-run", action="store_true")
    sync_material_titles.set_defaults(func=cmd_sync_material_titles)

    list_assignments = subparsers.add_parser("list-assignments", help="Lista tareas")
    list_assignments.add_argument("course_id")
    list_assignments.add_argument("--json", action="store_true")
    list_assignments.set_defaults(func=cmd_list_assignments)

    sync = subparsers.add_parser(
        "sync-classes",
        help="Sincroniza materiales desde classroom-*.md y tareas desde actividad-*.md en docs/clases/",
    )
    sync.add_argument("course_id")
    sync.add_argument(
        "--glob",
        action="append",
        help="Patrón de archivos a sincronizar. Por defecto classroom-*.md (materiales) y actividad-*.md (tareas).",
    )
    sync.add_argument("--only", help="Filtra por texto en la ruta, ej. unidad2/tema2")
    sync.add_argument("--state", choices=["DRAFT", "PUBLISHED"])
    sync.add_argument("--points", type=float)
    sync.add_argument("--due-date")
    sync.add_argument("--due-time")
    sync.add_argument("--force", action="store_true", help="Crea aunque ya exista un título igual")
    sync.add_argument("--update", action="store_true", help="Actualiza descripción y materiales de ítems existentes en lugar de omitirlos")
    sync.add_argument("--dry-run", action="store_true")
    sync.add_argument("--no-topics", dest="topics", action="store_false")
    sync.add_argument("--no-materials", dest="materials", action="store_false")
    sync.add_argument("--no-assignments", dest="assignments", action="store_false")
    sync.add_argument("--announcements", action="store_true")
    sync.set_defaults(func=cmd_sync_classes, topics=True, materials=True, assignments=True)

    create_form = subparsers.add_parser(
        "create-form",
        help="Crea un Google Form desde un archivo examen-*.md y lo vincula a Classroom",
    )
    create_form.add_argument("exam_file", help="Ruta al archivo examen-*.md")
    create_form.add_argument(
        "--course-id",
        help="ID del curso Classroom al que vincular el form (opcional)",
    )
    create_form.add_argument(
        "--assignment-id",
        help="ID de la tarea Classroom donde adjuntar el enlace del form (opcional)",
    )
    create_form.add_argument(
        "--dry-run",
        action="store_true",
        help="Muestra las preguntas que se crearían sin llamar a la API",
    )
    create_form.set_defaults(func=cmd_create_form)

    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
