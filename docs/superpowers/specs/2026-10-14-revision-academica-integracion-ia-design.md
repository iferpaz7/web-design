# Diseño: Revisión académica integral + integración IA — Diseño Web 2026-2

Fecha: 2026-10-14
Estado: aprobado en chat, pendiente revisión del archivo
Alcance: integral académico (ortografía + bibliografía + metodología + IA)

## 1. Entendimiento acordado

- Curso: Diseño Web para Marketing Digital, ITSAE, período 2026-2.
- 15 sesiones de 120 min (jueves): U1 4 + U2 4 + U3 4 + U4 3. Tras fusión U3T4+U4T1: 17 semanas, 15 temas.
- Curso Classroom nuevo ID `870178538596`. Sync pendiente.
- Herramientas IA: Figma (chat/generación, primero) para diseño de la página de cada estudiante; Framer segundo; Canva menor (assets). Labs en navegador: Gemini + ChatGPT + Claude combinadas.
- Resultado esperado: estándar académico publicable + bloque IA por sesión con prompts listos para copiar/pegar + resguardos anti-plagio.
- Criterio de éxito: `pnpm build` OK (61 páginas, sin `/unidad4/tema4`), CLI parsea 20 materiales (U4: 3), 0 placeholders `[Autor por verificar]`, APA 7 consistente, sin refs rotas U4T3/U4T4.

## 2. Auditoría (fuentes: 4 subagentes, solo lectura)

- Ortografía: 5 críticos + patrones P1-P7. Críticos: `src/data/syllabus.ts:625` (y→e), `:739` (aun→aún), `docs/clases/unidad4/tema1/roadmap-2027-01-14.md:250` (las→los carteles), U2T3 gerundio+adjetivo duplicado (`classroom-2026-11-26.md:11`, `actividad-2026-11-26-copy-persuasivo.md:11`), mes `Junio→junio` (`docs/examenes/clave-bimestre1-2026-06-17.md:181`). Patrones: llamado/a, anglicismos ~330, Mobile-First, unidades `375px→375 px`, min/minutos, página/sitio web, docente.
- Bibliografía: 42 incidencias. Krug 2006 vs 2014 (unificar a 2014 3.ª ed. Anaya), `(s. f.)→(s.f.)`, quitar `Recuperado de`, placeholders U2T1, sin sección APA en U1T4/U4T2/U4T3, orden alfabético roto (U2T4, U3T1, U3T2, U4T1), autoría errónea NN/g 2026, bare URLs Figma/WordPress/Elementor, año inventado PageSpeed 2026. Huecos: WCAG 2.2, tipografía, IA, Figma help/Canva, SEO académico, analítica, CRO, presentación, licencias.
- Metodología: 4 OK, 3 subcargados (U1T1 58/120 min, U2T1 95/120, U2T2 100/120), 6 sobrecargados (U2T4, U3T2, U3T3, U3T4, U4T1, U4T3), 4 refs rotas (U4T3/U4T4 en `roadmap-2027-01-21.md:39,105`, `roadmap-2027-01-28.md:41`, `syllabus.ts:1757`), hueco rúbricas U3/U4 (7 temas sin criterio), 24/31-dic en feriado, HAA sin diseñar en sesiones críticas.
- IA: mapa S1-S15 listo (ver §5).

## 3. Enfoques considerados

1. Bloque IA solo en roadmap (docente). Descartado: no llega al estudiante.
2. Bloque IA en roadmap + prompts en actividad (recomendado y aprobado). Equilibrio docente/estudiante sin sobrecargar sync.
3. Además classroom + web + presentationBlocks. Descartado: sobrecarga sync y build.

## 4. Diseño por capas

### Capa A — Ortografía y estilo

- Corregir 5 críticos + P1 (2 líneas) + P3 (2 líneas).
- Normalización regex por archivo con revisión: P4 unidades SI (`375 px`, `44 × 44 px`), P5 min solo tablas / minutos en prosa y material estudiantil.
- Glosario: primera mención con equivalente + cursiva; sustituciones: brief→*brief* (documento de encargo), checklist→lista de cotejo, copy→texto, landing→página de campaña, responsive→adaptable, footer→pie de página, wireframe→boceto estructural, share link→enlace para compartir, fold→primer pantallazo.
- Decisión editorial: `llamado a la acción` (masculino, uso ecuatoriano, coincide con sílabo).

### Capa B — Bibliografía APA 7

- Reglas: `(s.f.)`, cursiva `_título_`, sin `Recuperado de`, sin ISBN, sin notas dentro de la entrada, orden alfabético, sufijos -a/-b para mismo autor-año, autor/editor sin espanglish (`Developers Google→Google`).
- Unificar Krug a `Krug, S. (2014). _No me hagas pensar_ (3.ª ed.). Anaya Multimedia.`
- Crear sección APA en U1T4 (WCAG 2.2 + Fernández 2021 + Krug 2014), U4T2 (Google Analytics s.f.-a/b/c + Clifton), U4T3 (mover PageSpeed a Herramientas + Busquets/Gibbons/NN/g video).
- Formalizar: Google Search Central SEO starter, `Google. (s.f.). _About PageSpeed Insights_`, WebAIM con contenedor, Figma help (no homepage), Krause NN/g forms en vez de Popupsmart, Rosenfeld et al. 2015 4.ª ed., Moran et al. 2026 State of UX.
- Nuevas: WCAG 2.2, Moran et al. 2026, Garrett o Rosenfeld, Figma prototyping guide, Krause forms, Clifton analytics, Norman 2013 (clásico fuera de ventana, declarado).
- Añadir guía APA 1 pág. para estudiantes (las rúbricas la exigen).

### Capa C — Metodología, calendario, evaluación

- Corregir 4 refs U4T3/U4T4. Verificar con grep `unidad4/tema4|U4T1|U4T4|2027-01-22`.
- Reequilibrio 120 min: U1T1 Momento 7 a 30 min + Momento 4 diagnóstico 25 min; U2T1 +25 min modelado; U2T2 +20 min revisión pares; U2T4 mínimo 1 vista móvil + escritorio a HAA; U3T2 hero+1 sección (resto HAA); U3T3 ruta contingencia Forms 10 min + E2E a HAA si no completa; U3T4 Fase 1 enlaces+1 herramienta por parejas, evidencia dividida (lista→U3, hipótesis→U4); U4T1 3/5 ajustes a elección + obj.1 a "Evaluar"; U4T3 6-8 expositores + resto video 4 min + plantilla reporte.
- Rúbricas: resolver doble asignación U1T3 (B sincrónica / E asincrónica, quitar línea 6 de A); crear rúbrica F (U3 decisión/maquetación/formularios/auditoría) y G (U4 SEO/medición/sustentación); mover criterio UNACH según `README.md:96` (no en talleres en clase).
- Calendario: U3T2 (24-dic) y U3T3 (31-dic) a async guiado; presencialidad reservada U3T4 (07-ene). U4T3 entrega plantilla reporte (7 días a examen 04-feb).
- HAA explícita en U3T3, U3T4, U4T2, U4T3.

### Capa D — Integración IA (15 sesiones)

- Patrón por sesión: `Bloque IA (10-15 min): prompt en pantalla → ejecución en vivo → 1 voluntario comparte → docente marca qué se acepta y qué se reescribe a mano`. S1/S4: `Bloque anti-IA` (evidencia manual, IA solo explica después).
- Distribución: S3/S8 Figma AI plena; S10 Framer AI plena + Canva asset opcional; S5 combinada ChatGPT→Claude; S7 pipeline triple (enseña a combinar); S2/S6/S9/S11/S14 parcial-crítica; S12/S13/S15 plena con resguardo; S1/S4 sin generación.
- Cada actividad lleva: herramienta + prompt listo (variables `[MI-PROYECTO]`, `[MI-URL]`, `[FICHA]`) + producto esperado + declaración `Borrador IA: [modelo] / Versión final propia: [qué cambié]` + prohibición de inventar métricas (captura + URL + periodo obligatorios).
- `syllabus.ts`: añadir herramientas IA a `herramientas[]` donde aplique; NO tocar `presentationBlocks` salvo correcciones ortográficas puntuales.

## 5. Mapa IA por sesión (resumen; prompts completos en informe del subagente)

| Sesión        | IA principal                           | Entrega                      |
| ------------- | -------------------------------------- | ---------------------------- |
| S1 U1T1 Brief | anti-IA (ChatGPT comparador posterior) | Brief manual                 |
| S2 U1T2       | Claude critica ficha                   | Ficha + mejora               |
| S3 U1T3       | Figma AI variantes hero                | Boceto + captura anotada     |
| S4 U1T4       | anti-IA (Gemini explica después)       | Checklist en celular         |
| S5 U2T1       | ChatGPT genera → Claude itera          | Ficha + mensaje ≤20 palabras |
| S6 U2T2       | Claude critica orden                   | Mapa 5-6 bloques             |
| S7 U2T3       | Gemini→ChatGPT→Claude                  | Titular + beneficios + CTAs  |
| S8 U2T4       | Figma AI gris                          | Share link + nota            |
| S9 U3T1       | Gemini cuestiona (no elige)            | Ficha decisión               |
| S10 U3T2      | Framer AI + Canva asset                | 3 secciones + 2 ajustes      |
| S11 U3T3      | Gemini microcopy                       | Form + capturas E2E          |
| S12 U3T4      | Claude hipótesis                       | Lista + hipótesis            |
| S13 U4T1      | Gemini SEO                             | Checklist + antes/después    |
| S14 U4T2      | Claude medición honesta                | Matriz 6 campos              |
| S15 U4T3      | ChatGPT jurado + Claude pulidor        | Guion 4 min                  |

## 6. Archivos tocados

- `src/data/syllabus.ts` (5 críticos + herramientas IA + refs U4T2 + glosario).
- `docs/silabo-final-formato-sga.md` (tabla 15 temas ya actualizada; Krug 2014; declarar B1/B2 si aplica — pedir confirmación, es documento oficial).
- 15× `docs/clases/**/roadmap-*.md` + `actividad-*.md` (bloque IA + prompts + reequilibrio + APA).
- `docs/clases/**/classroom-*.md` (solo correcciones orto/refs, sin bloque IA salvo próxima-sesión).
- `docs/rubricas/` (nueva F/G + fix doble asignación + guía APA).
- Este spec. No `dist/`, no credenciales, no `.python_deps/`.

## 7. Verificación

- `pnpm build` OK; `pnpm prettier --check src/data/syllabus.ts`; parser CLI 20 materiales; grep `unidad4/tema4|U4T4|2027-01-22|\[Autor por verificar\]|Recuperado de|Developers Google` vacío.
- No `sync-classes` sin `--dry-run` previo.

## 8. Riesgos

- Sílabo oficial: cambio de 16→15 temas diverge del institucional; documentar como adaptación 2026-2 con acta.
- 24/31-dic async: requiere aviso a coordinación.
- Rúbricas nuevas cambian evaluación: publicar antes del B2.

## Self-review del spec

- Placeholders: ninguno (`[MI-X]` son variables intencionales de prompts, no TBD).
- Consistencia: 15 temas / 17 semanas / U4 3 temas en todo el doc; enfoque 2 en §3 y §4-D coinciden.
- Alcance: una sola implementación por capas en commits separados; no incluye sync Classroom.
- Ambigüedad: `async guiado 24/31-dic` significa material + entrega sin videollamada; `HAA` = trabajo autónomo con producto definido.
