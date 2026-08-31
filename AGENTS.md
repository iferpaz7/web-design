# AGENTS.md

This is the course website for **Diseño Web para Marketing Digital** at ITSAE
(Instituto Tecnológico Superior Adventista del Ecuador), maintained by
**Ing. Ivan Paz**. It is a static Astro site paired with a Python CLI that
publishes content to Google Classroom. All user-facing text is in Spanish.

Published at: <https://web-design-itsae.netlify.app>

---

## Commands

```bash
# Development
pnpm dev              # Astro dev server at localhost:4321
pnpm build            # Production build → dist/
pnpm preview          # Preview production build locally

# Code quality
pnpm lint             # ESLint (flat config)
pnpm lint:fix         # ESLint with auto-fix
pnpm format           # Prettier write
pnpm format:check     # Prettier check (no write)

# Google Classroom CLI
pnpm classroom auth                              # OAuth2 flow → token.json
pnpm classroom list-courses                      # List all courses
pnpm classroom sync-classes COURSE_ID --dry-run  # Preview sync
pnpm classroom sync-classes COURSE_ID            # Create/update materials and tasks
pnpm classroom create-form docs/examenes/examen-YYYY-MM-DD.md  # Generate Google Form from exam
```

**Never run `pnpm classroom delete-course` or `pnpm classroom archive-course`** without explicit confirmation — these are destructive and irreversible.

After any change to `src/data/syllabus.ts` or Astro source files, run `pnpm build` and verify the build succeeds before finishing.

---

## Project structure

```
src/data/syllabus.ts          ← single source of truth for all course content
src/components/               ← Astro + React (TSX) components
src/pages/                    ← Astro file-based routing (static + dynamic)
src/styles/globals.css        ← Tailwind v4 @theme tokens (no tailwind.config.*)
docs/silabo-final-formato-sga.md   ← official syllabus; all prompts and docs anchor to this
docs/clases/unidad{N}/tema{N}/     ← classroom-*.md, actividad-*.md, roadmap-*.md
docs/examenes/                ← exam files (examen-*.md, clave-*.md)
docs/rubricas/                ← grading rubrics
tools/google_classroom/       ← Python CLI source (classroom_cli.py + helpers)
.github/prompts/              ← AI slash command prompts for class preparation
.github/instructions/         ← AI instruction files (itsae-filosofia-docencia)
```

---

## Key data model

`src/data/syllabus.ts` exports `syllabusUnits: SyllabusUnit[]`.

```typescript
interface SyllabusTema {
  numero: number;           // 1–4
  titulo: string;
  href: string;             // '/unidadN/temaN'
  disponible: boolean;
  panorama: string;
  objetivos: string[];
  ideasClave: string[];
  actividad: string;
  evidencia: string;
  herramientas: string[];
  presentationBlocks?: SyllabusPresentationBlock[];  // slide source
}

interface SyllabusUnit {
  numero: number;           // 1–4
  color: 'amber' | 'blue' | 'emerald' | 'purple';  // unit 1–4 in order
  iconName: 'BookOpen' | 'Monitor' | 'Palette' | 'Zap';
  temas: SyllabusTema[];
}
```

`presentationBlocks` is the exclusive source of content for the presentation
slides served at `/presentacion/unidadN/temaN`. Only modify presentation slide
content there — never in the Astro page files.

---

## Code style

- **TypeScript strict mode.** Avoid `any`; use typed interfaces from `syllabus.ts`.
- **`singleQuote: true`, `semi: true`, `trailingComma: 'none'`** (Prettier config).
- Variables and comments in **Spanish** (matches the project language).
- Astro components use `.astro`; interactive islands use `.tsx`.
- Tailwind v4: use `@theme` CSS variables and utility classes — no arbitrary values
  for colors already defined as `--color-primary-*` or `--color-accent-*`.
- Dark mode is class-based (`dark` class on `<html>`). Theme key in `localStorage`: `itsae-theme`.

---

## Docs file conventions

When creating or editing class documents, follow these exact patterns:

| File | Path | Purpose |
|---|---|---|
| Roadmap | `docs/clases/unidad{N}/tema{N}/roadmap-YYYY-MM-DD.md` | Full session plan for the teacher |
| Classroom material | `docs/clases/unidad{N}/tema{N}/classroom-YYYY-MM-DD.md` | Published as Classroom material via CLI |
| Assignment | `docs/clases/unidad{N}/tema{N}/actividad-YYYY-MM-DD.md` | Published as Classroom coursework via CLI |
| Exam | `docs/examenes/examen-YYYY-MM-DD.md` | Parsed by `create-form`; uses `### Pregunta N` headings |
| Answer key | `docs/examenes/clave-YYYY-MM-DD.md` | Teacher reference only, never synced |

The CLI globs `docs/clases/**/classroom-*.md` and `docs/clases/**/actividad-*.md`.
It infers the Classroom topic from the path (`unidad{N}` → `Unidad N`).

Exam files must use `## SECCIÓN` headings and `### Pregunta N — Title (X puntos)` headings
so the `create-form` parser can extract questions correctly.

---

## Python CLI context

- Run with: `PYTHONPATH=.python_deps python3 tools/google_classroom/classroom_cli.py`
  (the `pnpm classroom` alias handles this automatically).
- Vendored Python deps live in `.python_deps/` — do not install globally.
- Sensitive files at root (gitignored): `credentials.json`, `token.json`, `classroom.config.json`.
  Never read or print these values; reference them by name only.
- `classroom.config.example.json` is the safe template to reference.

---

## Boundaries

| Allowed without asking | Ask first | Never touch |
|---|---|---|
| `src/`, `docs/`, `tools/`, `.github/prompts/` | `docs/silabo-final-formato-sga.md` (official syllabus — changes affect all prompts) | `credentials.json`, `token.json`, `classroom.config.json` |
| New `docs/clases/**/` files following the naming convention | `tools/google_classroom/classroom_cli.py` (core CLI — test with `--dry-run` first) | `dist/` (generated, never edit directly) |
| `src/data/syllabus.ts` content updates | `.python_deps/` (vendored, don't modify) | `.netlify/` (Netlify internal) |

---

## Deployment

Netlify auto-deploys on push. Build: `pnpm build` → publishes `dist/`. Node 22.
No GitHub Actions workflows exist in this repo.

---

## Further reading

- `docs/google-classroom.md` — full CLI reference with all flags and examples
- `.github/prompts/preparar-roadmap-clase-completa.prompt.md` — master class preparation workflow
- `.github/instructions/itsae-filosofia-docencia.instructions.md` — institutional tone and language guide (apply when generating any teaching material)
