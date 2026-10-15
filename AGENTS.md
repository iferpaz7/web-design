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

# Testing (Vitest + Playwright)
pnpm test             # Run all E2E & component tests via Vitest
pnpm test:e2e         # Run end-to-end tests suite

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

After any change to `src/data/syllabus.ts`, Astro source files, or Markdown documentation, run `pnpm format:check`, `pnpm test`, and `pnpm build` to verify the build succeeds before finishing.

---

## Academic Calendar & Session Schedule

The course operates on an authoritative 15-week teaching schedule spanning **October 15, 2026 to January 28, 2027**, followed by formal term examinations. All class sessions occur on **Thursdays** (120 minutes synchronous).

### Chronological Class Timeline

| Date           | Unit & Topic           | Session Title & Key Activity                                  | Document Path                                   |
| -------------- | ---------------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| **2026-10-15** | Unidad 1, Tema 1       | Presencia digital y estrategia web (+ Evaluación Diagnóstica) | `docs/clases/unidad1/tema1/`                    |
| **2026-10-22** | Unidad 1, Tema 2       | Experiencia de usuario (UX y UI)                              | `docs/clases/unidad1/tema2/`                    |
| **2026-10-29** | Unidad 1, Tema 3       | Jerarquía visual y diseño responsive                          | `docs/clases/unidad1/tema3/`                    |
| **2026-11-05** | Unidad 1, Tema 4       | Accesibilidad web (WCAG) e inclusión digital                  | `docs/clases/unidad1/tema4/`                    |
| **2026-11-12** | Unidad 2, Tema 1       | Buyer personas y mapas de empatía                             | `docs/clases/unidad2/tema1/`                    |
| **2026-11-19** | Unidad 2, Tema 2       | Arquitectura de información y wireframes                      | `docs/clases/unidad2/tema2/`                    |
| **2026-11-26** | Unidad 2, Tema 3       | Copywriting y diseño orientado a conversión                   | `docs/clases/unidad2/tema3/`                    |
| **2026-12-03** | Unidad 2, Tema 4       | Prototipado interactivo en Figma                              | `docs/clases/unidad2/tema4/`                    |
| **2026-12-10** | **Examen Bimestre I**  | Evaluación Parcial (Unidades 1 y 2)                           | `docs/examenes/examen-bimestre1-2026-12-10.md`  |
| **2026-12-17** | Unidad 3, Tema 1       | Herramientas no-code y CMS para marketing                     | `docs/clases/unidad3/tema1/`                    |
| **2026-12-24** | Unidad 3, Tema 2       | Maquetación web responsive y componentes clave                | `docs/clases/unidad3/tema2/`                    |
| **2026-12-31** | Unidad 3, Tema 3       | Formularios de captación e integración con CRM/email          | `docs/clases/unidad3/tema3/`                    |
| **2027-01-07** | Unidad 3, Tema 4       | Optimización de velocidad y auditoría técnica                 | `docs/clases/unidad3/tema4/`                    |
| **2027-01-14** | Unidad 4, Tema 1       | SEO on-page y motores de búsqueda                             | `docs/clases/unidad4/tema1/`                    |
| **2027-01-21** | Unidad 4, Tema 2       | Analítica web y métricas de conversión (GA4)                  | `docs/clases/unidad4/tema2/`                    |
| **2027-01-28** | Unidad 4, Tema 3       | Estrategias de conversión y sustentación de proyectos         | `docs/clases/unidad4/tema3/`                    |
| **2027-02-04** | **Examen Bimestre II** | Evaluación Final Integrador (Unidades 3 y 4)                  | `docs/examenes/examen-bimestre2-2027-02-04.md`  |
| **2027-02-16** | **Supletorio**         | Evaluación de Recuperación / Supletorio                       | `docs/examenes/examen-supletorio-2027-02-16.md` |

### Temporal Integrity Rule

- **No legacy duplicates:** Never re-introduce obsolete dates (e.g., June/August 2026) or duplicate exam files from previous semesters.
- **Cross-document consistency:** When editing or generating roadmaps, classroom guides, assignments, or slides, verify that the date, unit, and topic strictly match the table above.

---

## Pedagogical & Devotional Framework (ITSAE / Educación Adventista)

As an Adventist higher-education institution, ITSAE integrates faith, character, and learning into technical training.

### Zero External Devotional Crawler Rule

- **Strictly Deprecated:** Do NOT scrape, reference, or mention "Nuestro Pan Diario", "Our Daily Bread" (ODB), or generic commercial daily devotionals.
- Every session's spiritual integration must be authentic, academically sound, and doctrinally aligned with Seventh-day Adventist education.

### Devotional Structure for Roadmaps

Every `roadmap-YYYY-MM-DD.md` includes an integrated devotional section containing four mandatory components:

1. **Pasaje Bíblico Textual:** An explicit scripture passage (Reina-Valera 1960 or NVI) addressing principles such as stewardship, integrity, order, empathy, honesty, or diligence.
2. **Cita Canónica Adventista (Elena G. de White / Filosofía ITSAE):** Direct citation from recognized Adventist educational or philosophical works (e.g., _La Educación_, _El Ministerio de Curación_, _Palabras de Vida del Gran Maestro_, _Mensajes para los Jóvenes_, _Consejos sobre Mayordomía Cristiana_, _Obreros Evangélicos_, _El Deseado de Todas las Gentes_).
3. **Puente Pedagógico a la Técnica:** A direct, substantive analogy connecting the spiritual principle to the specific web design and marketing topic of the day. Examples:
   - _WCAG Web Accessibility_ ↔ Levítico 19:14 (No poner tropiezo ante el ciego; inclusión digital).
   - _Information Architecture & Navigation_ ↔ Isaías 40:3 (Sendas derechas; rechazo a dark patterns y engaños de conversión).
   - _Visual Hierarchy & Layout_ ↔ 1 Corintios 14:40 (Dios de orden; claridad visual que respeta la atención del usuario).
   - _Digital Analytics (GA4)_ ↔ Proverbios 11:1 (Pesa cabal y balanza justa; métricas reales vs. métricas de vanidad).
   - _Technical Audits & Testing_ ↔ Salmo 139:23-24 (Humildad para auditar y perfeccionar la obra técnica).
4. **Oración Inicial:** A brief, contextualized opening prayer seeking divine wisdom, ethical discernment, and a spirit of Christian service.

---

## Project Structure

```
src/data/syllabus.ts          ← single source of truth for all course content
src/components/               ← Astro + React (TSX) components
src/pages/                    ← Astro file-based routing (static + dynamic)
src/styles/globals.css        ← Tailwind v4 @theme tokens (no tailwind.config.*)
docs/silabo-final-formato-sga.md   ← official syllabus; all prompts and docs anchor to this
docs/clases/unidad{N}/tema{N}/     ← classroom-*.md, actividad-*.md, roadmap-*.md
docs/clases/examenes/         ← classroom-*.md and actividad-*.md for term exams
docs/examenes/                ← official exam files (examen-*.md, clave-*.md)
docs/rubricas/                ← grading rubrics for coursework and projects
docs/bibliografia/            ← UNACH library references and bibliography extraction tools
tools/google_classroom/       ← Python CLI source (classroom_cli.py + helpers)
tests/e2e/                    ← Vitest + Playwright E2E test suites
vitest.config.ts              ← Vitest configuration with preview server globalSetup
.github/skills/               ← AI skills for roadmap, syllabus, and exam workflows
.github/instructions/         ← AI instruction files (itsae-filosofia-docencia)
```

---

## Key Data Model

`src/data/syllabus.ts` exports `syllabusUnits: SyllabusUnit[]`.

```typescript
interface SyllabusTema {
  numero: number; // 1–4
  titulo: string;
  href: string; // '/unidadN/temaN'
  disponible: boolean;
  panorama: string;
  objetivos: string[];
  ideasClave: string[];
  actividad: string;
  evidencia: string;
  herramientas: string[];
  presentationBlocks?: SyllabusPresentationBlock[]; // slide source
}

interface SyllabusUnit {
  numero: number; // 1–4
  color: 'amber' | 'blue' | 'emerald' | 'purple'; // unit 1–4 in order
  iconName: 'BookOpen' | 'Monitor' | 'Palette' | 'Zap';
  temas: SyllabusTema[];
}
```

`presentationBlocks` is the exclusive source of content for the presentation
slides served at `/presentacion/unidadN/temaN`. Only modify presentation slide
content there — never in the Astro page files.

---

## Code Style

- **TypeScript strict mode.** Avoid `any`; use typed interfaces from `syllabus.ts`.
- **`singleQuote: true`, `semi: true`, `trailingComma: 'none'`** (Prettier config).
- Variables and comments in **Spanish** (matches the project language).
- Astro components use `.astro`; interactive islands use `.tsx`.
- Tailwind v4: use `@theme` CSS variables and utility classes — no arbitrary values
  for colors already defined as `--color-primary-*` or `--color-accent-*`.
- Dark mode is class-based (`dark` class on `<html>`). Theme key in `localStorage`: `itsae-theme`.

---

## Docs File Conventions

When creating or editing class documents, follow these exact patterns:

| File                  | Path                                                                           | Purpose                                                                    |
| --------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Roadmap               | `docs/clases/unidad{N}/tema{N}/roadmap-YYYY-MM-DD.md`                          | Full session plan for the teacher (devotional, minute-by-minute, pedagogy) |
| Classroom material    | `docs/clases/unidad{N}/tema{N}/classroom-YYYY-MM-DD.md`                        | Published as Classroom material via CLI                                    |
| Graded assignment     | `docs/clases/unidad{N}/tema{N}/actividad-YYYY-MM-DD-*.md`                      | Published as Classroom coursework (e.g. 10 points)                         |
| Diagnostic assignment | `docs/clases/unidad{N}/tema{N}/actividad-YYYY-MM-DD-evaluacion-diagnostica.md` | Published as unrated Classroom coursework (0 points)                       |
| Exam material         | `docs/clases/examenes/classroom-examen-*.md`                                   | Classroom material guiding exam instructions                               |
| Exam assignment       | `docs/clases/examenes/actividad-examen-*.md`                                   | Classroom coursework submission portal for exams                           |
| Exam questions        | `docs/examenes/examen-YYYY-MM-DD.md`                                           | Parsed by `create-form`; uses `### Pregunta N` headings                    |
| Answer key            | `docs/examenes/clave-YYYY-MM-DD.md`                                            | Teacher reference only, never synced                                       |

### Roadmap Structure Standard

All session roadmaps (`roadmap-YYYY-MM-DD.md`) must follow this pedagogical structure:

1. **Encabezado y Metadatos:** Unidad, Tema, Fecha, Duración (120 min), Modalidad (Virtual sincrónica).
2. **Devocional Integrado:** Texto Bíblico, Cita Adventista (Elena G. de White), Conexión técnica y Oración.
3. **Objetivos de Aprendizaje:** Alineados con el sílabo SGA oficial.
4. **Cronograma Minuto a Minuto:** Fases secuenciales (Apertura, Desarrollo conceptual, Taller guiado, Puesta en común).
5. **Recursos y Herramientas:** Enlaces a presentaciones (`/presentacion/unidadN/temaN`), guías, bibliografía UNACH y software.
6. **Actividad y Evidencia:** Indicaciones claras y referencia al archivo `actividad-*.md`.
7. **`## Próxima sesión`:** Bloque final que anticipa el contenido de la siguiente clase para asegurar continuidad.

### Assignment Point Conventions

- **Graded Assignments:** Indicate `**Puntaje sugerido:** 10 puntos` (or rubric equivalent).
- **Diagnostic Assessments:** Indicate `**Puntaje sugerido:** 0 puntos (sin calificación)`. The Python CLI detects this pattern and automatically creates the coursework item with `maxPoints: 0.0` or as unrated.

---

## Python CLI Context

- Run with: `PYTHONPATH=.python_deps python3 tools/google_classroom/classroom_cli.py`
  (the `pnpm classroom` alias handles this automatically).
- Vendored Python deps live in `.python_deps/` — do not install globally.
- Sensitive files at root (gitignored): `credentials.json`, `token.json`, `classroom.config.json`.
  Never read or print these values; reference them by name only.
- `classroom.config.example.json` is the safe template to reference.
- **Sync behavior:**
  - Topic mapping: `unidad{N}` → `Unidad N`; `docs/clases/examenes` → `Bimestre I` or `Bimestre II`.
  - Links: Markdown URLs and course website links are extracted and attached as native Classroom materials.
  - Safe preview: Always test batch operations with `--dry-run` before syncing live courses.

---

## Boundaries

| Allowed without asking                                      | Ask first                                                                           | Never touch                                               |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `src/`, `docs/`, `tools/`, `.github/skills/`                | `docs/silabo-final-formato-sga.md` (official syllabus — changes affect all prompts) | `credentials.json`, `token.json`, `classroom.config.json` |
| New `docs/clases/**/` files following the naming convention | `tools/google_classroom/classroom_cli.py` (core CLI — test with `--dry-run` first)  | `dist/` (generated, never edit directly)                  |
| `src/data/syllabus.ts` content updates                      | `.python_deps/` (vendored, don't modify)                                            | `.netlify/` (Netlify internal)                            |

---

## Deployment

Netlify auto-deploys on push. Build: `pnpm build` → publishes `dist/`. Node 22.
No GitHub Actions workflows exist in this repo.

---

## Further Reading

- `docs/google-classroom.md` — full CLI reference with all flags, options, and scopes
- `.github/skills/preparar-roadmap-clase-completa/SKILL.md` — master class preparation workflow
- `.github/instructions/itsae-filosofia-docencia.instructions.md` — institutional tone and language guide (apply when generating any teaching material)
- `docs/silabo-final-formato-sga.md` — official institutional syllabus and academic competencies
