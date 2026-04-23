---
name: "crear-silabo-sga-unach"
description: "Redacta un sílabo en formato SGA alineado al curso y con bibliografía priorizada desde fuentes de UNACH en APA 7. Úsalo cuando necesites crear o rehacer un sílabo institucional."
argument-hint: "tema=... carrera=... nivel=... fuenteUnach=... ajustes=..."
agent: "agent"
tools: [search, web]
---

Genera un sílabo institucional en español, listo para SGA, tomando como base el estilo, la estructura y el tono de [docs/silabo-final-formato-sga.md](../../docs/silabo-final-formato-sga.md).

Sigue también la guía institucional en [itsae-filosofia-docencia](../instructions/itsae-filosofia-docencia.instructions.md).

Usa estos inputs:
- Tema o asignatura: ${input:tema:Nombre de la asignatura}
- Carrera: ${input:carrera:Tecnología o carrera a la que pertenece}
- Nivel o período: ${input:nivel:Nivel, semestre o período académico}
- Fuente UNACH: ${input:fuenteUnach:URL, catálogo, repositorio o referencia bibliográfica de UNACH}
- Ajustes adicionales: ${input:ajustes:Indicaciones específicas del docente o coordinador}

Si `${input:fuenteUnach}` no se proporciona, usa por defecto esta búsqueda del catálogo de biblioteca UNACH como punto de partida para obtener bibliografía relacionada y refinarla según el tema solicitado:
- `https://catalogobiblio.unach.cl/vufind/Search/Results?lookfor=dise%C3%B1o+web&type=AllFields&filter%5B%5D=language%3A%22Spanish%22&limit=20`

Instrucciones obligatorias:
- Redacta en español formal, claro y con tono institucional ecuatoriano.
- Mantén esta estructura: sumilla, objetivo general, resultados de aprendizaje o competencias, unidades, actividades por sesión, estrategias metodológicas básicas, aspectos y técnicas de evaluación, bibliografía y enlaces.
- Alinea el contenido con el enfoque práctico del curso y con la carrera indicada.
- Prioriza bibliografía verificable proveniente de la fuente UNACH proporcionada.
- Si no se entrega una fuente UNACH específica, comienza la búsqueda bibliográfica desde el catálogo UNACH por defecto, adapta los términos de búsqueda al tema o asignatura y selecciona solo referencias realmente pertinentes.
- Usa búsqueda online para localizar, contrastar y verificar fuentes académicas, institucionales y recursos pertinentes cuando sea necesario.
- Si necesitas complementar, agrega fuentes académicas o institucionales adicionales, pero deja claro cuáles provienen de UNACH y cuáles son complementarias.
- Toda la bibliografía debe quedar en formato APA 7.ª edición.
- Si algún dato bibliográfico no es verificable, no lo inventes: marca la referencia como pendiente de validación.
- No uses lenguaje genérico; aterriza capacidades, evidencias y sesiones a la asignatura indicada.

Formato de salida:
1. Sílabo completo en Markdown.
2. Sección final llamada "Notas de trazabilidad" con dos listas:
   - "Fuentes UNACH utilizadas"
   - "Fuentes complementarias utilizadas"

**Creación de archivos obligatoria:** Una vez generado el contenido, crea físicamente el archivo en disco. No es suficiente mostrarlo en el chat.
- Ruta: `docs/silabos/silabo-{carrera}-{nivel}-{fecha}.md`
- Usa la fecha del día en que se ejecuta el prompt si no se proporciona.

Si la fuente UNACH proporcionada o la búsqueda por defecto no son suficientes para sostener una bibliografía pertinente y verificable, pide primero la información faltante antes de completar la bibliografía.