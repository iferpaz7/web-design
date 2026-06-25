"""
fix_topics.py
Reasigna materiales y tareas existentes al tema correcto en Google Classroom.

Lógica de asignación:
  - Materiales "Clase: Unidad N - Tema M - ..."  → tema "Unidad N"
  - Material  "Clase: Bimestre I ..."             → tema "Bimestre I"
  - Tarea     "Actividad: ..."                    → el tema ya está correcto en tareas;
                                                    sólo mueve las que están en "Clases"
  - Examen    "Actividad: Examen Bimestral ..."   → tema "Bimestre I"

Uso:
    python3 tools/google_classroom/fix_topics.py
    python3 tools/google_classroom/fix_topics.py --dry-run
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(ROOT / ".python_deps"))

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

COURSE_ID = "798151026377"
TOKEN = ROOT / "token.json"
SCOPES = [
    "https://www.googleapis.com/auth/classroom.courses",
    "https://www.googleapis.com/auth/classroom.coursework.students",
    "https://www.googleapis.com/auth/classroom.courseworkmaterials",
    "https://www.googleapis.com/auth/classroom.topics",
]


def get_service():
    creds = Credentials.from_authorized_user_file(str(TOKEN), SCOPES)
    return build("classroom", "v1", credentials=creds, cache_discovery=False)


def list_all(request_factory, key):
    items, token = [], None
    while True:
        resp = request_factory(token).execute()
        items.extend(resp.get(key, []))
        token = resp.get("nextPageToken")
        if not token:
            return items


def desired_topic(title: str) -> str:
    """Devuelve el nombre del tema al que debe pertenecer este ítem."""
    # Materiales de clase por unidad
    m = re.search(r"Clase:\s*Unidad\s*(\d+)", title, re.IGNORECASE)
    if m:
        return f"Unidad {m.group(1)}"
    # Bimestre I (material de repaso o examen)
    if re.search(r"bimestre\s*i\b|examen\s*bimestral", title, re.IGNORECASE):
        return "Bimestre I"
    # Actividades por unidad — mantener como están si ya están bien
    m = re.search(r"Unidad\s*(\d+)", title, re.IGNORECASE)
    if m:
        return f"Unidad {m.group(1)}"
    return ""


def ensure_topic(service, name: str, existing_map: dict, dry_run: bool) -> str | None:
    if name in existing_map:
        return existing_map[name]
    if dry_run:
        print(f"  [dry-run] Crearía tema: {name}")
        return None
    created = service.courses().topics().create(
        courseId=COURSE_ID, body={"name": name}
    ).execute()
    tid = created["topicId"]
    existing_map[name] = tid
    print(f"  Tema creado: {name} ({tid})")
    return tid


def run(dry_run: bool):
    service = get_service()

    # Cargar temas existentes
    topics = list_all(
        lambda t: service.courses().topics().list(courseId=COURSE_ID, pageToken=t, pageSize=100),
        "topic",
    )
    topic_map = {t["name"]: t["topicId"] for t in topics}
    topic_id_to_name = {v: k for k, v in topic_map.items()}
    print(f"Temas existentes: {list(topic_map.keys())}")

    # Asegurar que "Bimestre I" existe
    if "Bimestre I" not in topic_map and not dry_run:
        tid = service.courses().topics().create(
            courseId=COURSE_ID, body={"name": "Bimestre I"}
        ).execute()["topicId"]
        topic_map["Bimestre I"] = tid
        print(f"  Tema creado: Bimestre I ({tid})")
    elif "Bimestre I" not in topic_map:
        print("  [dry-run] Crearía tema: Bimestre I")

    # ── Materiales ──────────────────────────────────────────────────────────
    materials = list_all(
        lambda t: service.courses().courseWorkMaterials().list(
            courseId=COURSE_ID, pageToken=t, pageSize=100,
            courseWorkMaterialStates=["DRAFT", "PUBLISHED"],
        ),
        "courseWorkMaterial",
    )
    print(f"\nMateriales a revisar: {len(materials)}")

    for m in materials:
        title = m.get("title", "")
        current_tid = m.get("topicId", "")
        current_name = topic_id_to_name.get(current_tid, "SIN TEMA")
        target_name = desired_topic(title)

        if not target_name:
            print(f"  SKIP (sin regla): {title[:60]}")
            continue
        if current_name == target_name:
            print(f"  OK [{target_name}]: {title[:60]}")
            continue

        target_tid = ensure_topic(service, target_name, topic_map, dry_run)
        if not target_tid:
            print(f"  [dry-run] Movería [{current_name}→{target_name}]: {title[:60]}")
            continue

        if dry_run:
            print(f"  [dry-run] Movería [{current_name}→{target_name}]: {title[:60]}")
        else:
            service.courses().courseWorkMaterials().patch(
                courseId=COURSE_ID,
                id=m["id"],
                updateMask="topicId",
                body={"topicId": target_tid},
            ).execute()
            print(f"  Movido [{current_name}→{target_name}]: {title[:60]}")

    # ── Tareas ───────────────────────────────────────────────────────────────
    works = list_all(
        lambda t: service.courses().courseWork().list(
            courseId=COURSE_ID, pageToken=t, pageSize=100,
            courseWorkStates=["DRAFT", "PUBLISHED"],
        ),
        "courseWork",
    )
    print(f"\nTareas a revisar: {len(works)}")

    for w in works:
        title = w.get("title", "")
        current_tid = w.get("topicId", "")
        current_name = topic_id_to_name.get(current_tid, "SIN TEMA")
        target_name = desired_topic(title)

        if not target_name:
            print(f"  SKIP (sin regla): {title[:60]}")
            continue
        if current_name == target_name:
            print(f"  OK [{target_name}]: {title[:60]}")
            continue

        target_tid = ensure_topic(service, target_name, topic_map, dry_run)
        if not target_tid:
            print(f"  [dry-run] Movería [{current_name}→{target_name}]: {title[:60]}")
            continue

        if dry_run:
            print(f"  [dry-run] Movería [{current_name}→{target_name}]: {title[:60]}")
        else:
            service.courses().courseWork().patch(
                courseId=COURSE_ID,
                id=w["id"],
                updateMask="topicId",
                body={"topicId": target_tid},
            ).execute()
            print(f"  Movido [{current_name}→{target_name}]: {title[:60]}")

    print("\nListo.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="Simula sin escribir en Classroom")
    args = parser.parse_args()
    run(dry_run=args.dry_run)
