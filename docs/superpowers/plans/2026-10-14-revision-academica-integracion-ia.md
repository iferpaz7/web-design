# Revisión académica + integración IA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar la revisión académica integral y el bloque IA en las 15 sesiones, con elección de herramienta por el estudiante según su idea.

**Architecture:** 4 capas secuenciales sobre los mismos archivos (orto → biblio → metodología → IA) + verificación final. Secuencial para evitar conflictos de edición en `syllabus.ts` y roadmaps. Sin cambios en `dist/`, credenciales ni `.python_deps/`.

**Tech Stack:** Astro + TypeScript strict, Tailwind v4, Markdown docs, Python CLI (`classroom_cli.py`), Prettier singleQuote/semi/trailingComma none.

**Spec:** `docs/superpowers/specs/2026-10-14-revision-academica-integracion-ia-design.md`

## Global Constraints

- Variables y comentarios en español; `singleQuote: true, semi: true, trailingComma: 'none'`.
- `presentationBlocks` en `src/data/syllabus.ts` es fuente exclusiva de slides; no editar contenido slide en `.astro`.
- Dark mode por clase `dark`; theme key `itsae-theme`.
- Nunca leer ni imprimir `credentials.json`, `token.json`, `classroom.config.json`.
- No tocar `dist/`, `.netlify/`, `.python_deps/`.
- Tras cambiar `src/data/syllabus.ts` o Astro: `pnpm build` debe pasar.
- Corrección docente: la herramienta (Figma / Framer / Canva) la elige el estudiante según su idea; en cada sesión se analiza cuál es la más conveniente con matriz de decisión. Figma es la recomendada por defecto, no impuesta.
- S1 y S4 son anti-IA (evidencia manual).

## Review Focus

- Estudiante pega salida IA como entrega final sin reescribir → cada actividad exige declaración `Borrador IA / Versión propia` y criterio que la invalida.
- Estudiante inventa PageSpeed/GA4/testimonios → exigir captura + URL + periodo en S12-S14.
- Prompt con variables sin ejemplo → cada prompt incluye ejemplo diligenciado con proyecto de ejemplo.
- Cambio ortográfico rompe enlace o ruta → grep de `http`, `unidadN/temaN` tras cada capa.
- Rúbrica nueva no enlazada desde roadmap → cada rúbrica F/G debe tener `Aplica a:` exacto y referencia desde el roadmap correspondiente.

---

### Task 1: Capa A — Ortografía y estilo

**Files:**

- Modify: `src/data/syllabus.ts`
- Modify: `docs/clases/**/roadmap-*.md`, `docs/clases/**/classroom-*.md`, `docs/clases/**/actividad-*.md`
- Modify: `docs/examenes/clave-bimestre1-2026-06-17.md`

**Interfaces:**

- Consumes: nada previo.
- Produces: corpus normalizado (llamado, Mobile-First, unidades SI, min/minutos) para las capas siguientes.

- [ ] **Step 1: Corregir 5 críticos exactos**

En `src/data/syllabus.ts`: `CTA y imagen` → `CTA e imagen`; `y aun así` → `y aún así`. En `docs/clases/unidad4/tema1/roadmap-2027-01-14.md`: `las carteles` → `los carteles`. En `docs/clases/unidad2/tema3/classroom-2026-11-26.md:11` y `actividad-2026-11-26-copy-persuasivo.md:11`: `y coherentes con` → `, en coherencia con`. En `docs/examenes/clave-bimestre1-2026-06-17.md:181`: `Junio 2026` → `junio de 2026`.

- [ ] **Step 2: Normalizar patrones P1+P3**

`¿Las llamadas a la acción` → `¿Los llamados a la acción` (`unidad1/tema4/roadmap-2026-11-05.md:106`); `una llamada a la acción indirecta` → `un llamado a la acción indirecto` (`unidad4/tema1/roadmap-2027-01-14.md:116`). `mobile-first` → `Mobile-First` (`unidad3/tema2/roadmap-2026-12-24.md`, `src/data/syllabus.ts`).

- [ ] **Step 3: Normalizar P4+P5 con script revisado**

Unidades SI con espacio (`375px`→`375 px`, `1440px`→`1440 px`, `44 × 44 px`→`44 × 44 px`, `48px`→`48 px`); `min` solo en tablas/cronogramas, `minutos` en prosa y material estudiantil. Ejecutar por archivo y revisar diff.

- [ ] **Step 4: Glosario P2+P6 (primera mención + resto)**

Definir 1 vez por documento y aplicar: _brief_ (documento de encargo), lista de cotejo, texto (por copy), página de campaña (por landing), adaptable, pie de página, boceto estructural, enlace para compartir, primer pantallazo. `¿Landing o sitio?` → `¿Página de campaña o sitio?` (`src/data/syllabus.ts:1067`). `Internet` → `internet` salvo inicio de frase.

- [ ] **Step 5: Verificar capa A**

Run: `pnpm prettier --check src/data/syllabus.ts`
Expected: PASS. Run: `grep -rn 'CTA y imagen\|y aun así\|las carteles\|Junio 2026\|mobile-first' src docs --include='*.md' --include='*.ts' || echo LIMPIO_A`
Expected: `LIMPIO_A`.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "fix(contenido): ortografía y estilo académico 2026-2"
```

### Task 2: Capa B — Bibliografía APA 7 + guía estudiante

**Files:**

- Modify: `docs/clases/**/roadmap-*.md` (listas APA)
- Modify: `docs/silabo-final-formato-sga.md:81-94` (solo si el docente confirma; es documento oficial)
- Create: `docs/guia-apa-estudiante.md`

**Interfaces:**

- Consumes: corpus normalizado de Task 1.
- Produces: listas APA válidas y guía de 1 pág. exigida por rúbricas.

- [ ] **Step 1: Reglas mecánicas globales**

`(s. f.)` → `(s.f.)`; quitar `Recuperado de `; cursiva `_` (no `*`); quitar ISBN y notas dentro de la entrada (`_(Referencia del sílabo.)_`, `_(Pendiente…)_` fuera de la lista); ordenar alfabéticamente (U2T4, U3T1, U3T2, U4T1); sufijos `-a/-b` para doble `Figma Inc. (s.f.)`.

- [ ] **Step 2: Unificar Krug + Google + NN/g**

Todo el repo a `Krug, S. (2014). _No me hagas pensar: Una aproximación a la usabilidad en la web_ (3.ª ed.). Anaya Multimedia.` `Developers Google` → `Google`; `web.dev. (s.f.). *Web Vitals*` → `Google. (s.f.). _Web Vitals_. web.dev. URL`; `Nielsen, J. (1994, actualizado…)` → `Nielsen, J. (2024, 30 de enero). _10 usability heuristics…_. Nielsen Norman Group. URL`; NN/g 2026 → `Moran, K., Budiu, R., & Gibbons, S. (2026, 16 de enero). _State of UX 2026…_`.

- [ ] **Step 3: Resolver placeholders y huecos**

U2T1 `[Autor por verificar]` → verificar en eLibro o eliminar. Crear sección APA en U1T4 (WCAG 2.2 `https://www.w3.org/TR/WCAG22/` + Fernández 2021 + Krug 2014), U4T2 (Google Analytics s.f.-a/b/c), U4T3 (mover PageSpeed a Herramientas). Bare URLs → entradas `Autor. (s.f.). _Título_. URL` (Figma help, WordPress.org, Elementor, Tally, Framer unificado).

- [ ] **Step 4: Crear `docs/guia-apa-estudiante.md`**

1 pág.: formato libro/web/herramienta con 3 ejemplos copiables + cómo citar eLibro (editorial real, no eLibro) + error común `Recuperado de`.

- [ ] **Step 5: Verificar capa B**

Run: `grep -rn 'Recuperado de\|(s. f.)\|Autor por verificar\|Developers Google\|2026). _About PageSpeed' docs --include='*.md' || echo LIMPIO_B`
Expected: `LIMPIO_B`.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "fix(biblio): normalizar APA 7 y guía estudiante"
```

### Task 3: Capa C — Metodología, calendario y rúbricas

**Files:**

- Modify: `docs/clases/**/roadmap-*.md` (tiempos, objetivos, HAA, refs)
- Modify: `src/data/syllabus.ts` (`syllabus.ts:1757` U4T3→U4T2)
- Modify: `docs/rubricas/rubrica-taller-analitico.md`, `docs/rubricas/rubrica-actividad-asincronica.md`
- Create: `docs/rubricas/rubrica-f-unidad3.md`, `docs/rubricas/rubrica-g-unidad4.md`

**Interfaces:**

- Consumes: Tasks 1-2.
- Produces: sesiones en 120 min reales, evaluación completa U3/U4, calendario viable.

- [ ] **Step 1: Corregir 4 refs rotas**

`docs/clases/unidad4/tema2/roadmap-2027-01-21.md:39` U4T3→U4T2; `:105` U4T4→U4T3; `docs/clases/unidad4/tema3/roadmap-2027-01-28.md:41` U4T4→U4T3; `src/data/syllabus.ts:1757` U4T3→U4T2. Añadir objetivos numerados U1T3 espejo de `syllabus.ts:254-259`; U1T4 "Auditar"→"Aplicar lista de cotejo"; U4T1 obj.1 "Comprender"→"Evaluar"; U4T2 declarar dato de prueba manual con periodo.

- [ ] **Step 2: Reequilibrar 120 min + HAA**

U1T1 Momento 7 a 30 min + Momento 4 diagnóstico 25 min; U2T1 +25 min modelado; U2T2 +20 min revisión pares; U2T4 mínimo móvil + escritorio a HAA (ajustar rúbrica D); U3T2 hero+1 sección (resto HAA); U3T3 contingencia Forms 10 min + E2E a HAA; U3T4 Fase 1 por parejas + evidencia dividida (lista→U3, hipótesis→U4); U4T1 3/5 ajustes a elección; U4T3 6-8 expositores + resto video 4 min + plantilla reporte. HAA explícita en U3T3, U3T4, U4T2, U4T3.

- [ ] **Step 3: Calendario feriado**

U3T2 (2026-12-24) y U3T3 (2026-12-31) a async guiado con entrega; reservar presencialidad U3T4 (2027-01-07). Actualizar classroom/actividad con nota de modalidad.

- [ ] **Step 4: Rúbricas F/G + fix doble asignación**

Quitar línea 6 de rúbrica A (U1T3 a E); crear F (U3: decisión, maquetación, formularios, auditoría) y G (U4: SEO, medición, sustentación) con `Aplica a:` exacto y criterio UNACH según `README.md:96`; enlazar desde cada roadmap.

- [ ] **Step 5: Verificar capa C**

Run: `grep -rn 'unidad4/tema4\|U4T4\|2027-01-22\|presentación de U4T3' docs src --include='*.md' --include='*.ts' || echo LIMPIO_C`
Expected: `LIMPIO_C`. Run: `pnpm build 2>&1 | tail -3`
Expected: `61 page(s) built`, sin `/unidad4/tema4`.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "fix(metodologia): reequilibrio 120min, rúbricas U3/U4 y calendario"
```

### Task 4: Capa D — Bloque IA con elección del estudiante

**Files:**

- Modify: `docs/clases/**/roadmap-*.md` (bloque IA 10-15 min o anti-IA)
- Modify: `docs/clases/**/actividad-*.md` (prompt listo + declaración + criterio)
- Modify: `src/data/syllabus.ts` (`herramientas[]` + mención IA donde aplique; no tocar `presentationBlocks` salvo orto)

**Interfaces:**

- Consumes: Tasks 1-3 (textos y tiempos finales).
- Produces: IA integrada sin imponer herramienta.

- [ ] **Step 1: Insertar bloque en 15 roadmaps**

Tras actividad principal, antes del cierre: `Bloque IA (10-15 min): prompt en pantalla → ejecución en vivo → 1 voluntario comparte → docente marca qué se acepta y qué se reescribe a mano`. S1/S4: `Bloque anti-IA` (evidencia manual; IA solo explica después). No alterar suma total 120 min (recortar 5 min de socialización previa donde aplique).

- [ ] **Step 2: Prompts en 13 actividades (S1/S4 sin prompt generador)**

S2 Claude crítico; S3 Figma AI + alternativa Framer/Canva; S5 ChatGPT→Claude; S6 Claude orden; S7 pipeline Gemini→ChatGPT→Claude; S8 Figma AI gris; S9 Gemini cuestiona; S10 Framer AI + Canva asset (con nota "si tu idea pide otra herramienta, justifícalo con la matriz"); S11 Gemini microcopy; S12 Claude hipótesis; S13 Gemini SEO; S14 Claude medición; S15 ChatGPT jurado + Claude pulidor. Cada prompt con variables `[MI-PROYECTO]`, `[MI-URL]`, `[FICHA]` + 1 ejemplo diligenciado + modelo sugerido y alternativa.

- [ ] **Step 3: Matriz de decisión de herramienta (elección del estudiante)**

En U3T1 (roadmap + actividad + `syllabus.ts` herramientas): tabla Figma vs Framer vs Canva vs WordPress/Carrd (tiempo, control diseño, formularios, SEO, costo, curva) + 3 preguntas incómodas + regla: el estudiante elige y justifica; la IA no elige por él. Replicar nota de 2 líneas en S3/S8/S10: "Si tu idea pide otra herramienta, usa la matriz U3T1 y declara tu elección".

- [ ] **Step 4: Resguardos**

Declaración obligatoria S5-S15: `Borrador IA: [modelo] / Versión final propia: [qué cambié]`. Prohibido entrega final pegada (S7/S12/S14) y cifras sin captura+URL+periodo (S12-S14). Share link/URL verificable; capturas IA solas no valen.

- [ ] **Step 5: Verificar capa D**

Run: `grep -rln 'Bloque IA\|Bloque anti-IA' docs/clases --include='roadmap-*.md' | wc -l`
Expected: `15`. Run: `grep -rln 'Borrador IA' docs/clases --include='actividad-*.md' | wc -l`
Expected: `>=11`.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat(ia): bloque IA y prompts por sesión con elección del estudiante"
```

### Task 5: Verificación final

**Files:** ninguno (solo comandos).

- [ ] **Step 1: Build + formato + CLI**

Run: `pnpm build 2>&1 | tail -3` → 61 páginas. Run: `pnpm prettier --check src/data/syllabus.ts` → PASS. Run: parser CLI (20 materiales, U4: 3). Run: `grep -rn 'unidad4/tema4\|U4T4\|Autor por verificar\|Recuperado de' docs src --include='*.md' --include='*.ts' || echo FINAL_LIMPIO` → `FINAL_LIMPIO`.

- [ ] **Step 2: Reporte al docente**

Listar commits, páginas build, conteo CLI y pendientes (sync `--dry-run`, reemplazo placeholders Teams/PDF).
