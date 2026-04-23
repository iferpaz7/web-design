---
name: "imprimir-tema-clase"
description: "Genera un tema listo para impresión o PDF con fecha y nombre del profesor. Úsalo para entregar o archivar material de clase."
argument-hint: "unidad=... tema=... fecha=... profesor=..."
agent: "agent"
tools: [search, web]
---

Genera una versión lista para impresión de un tema del curso, tomando como base [docs/silabo-final-formato-sga.md](../../docs/silabo-final-formato-sga.md) y [src/data/syllabus.ts](../../src/data/syllabus.ts).

Sigue también la guía institucional en [itsae-filosofia-docencia](../instructions/itsae-filosofia-docencia.instructions.md).

Usa estos inputs:
- Unidad: ${input:unidad:Unidad del sílabo}
- Tema: ${input:tema:Tema a imprimir}
- Fecha: ${input:fecha:Fecha de la clase}
- Profesor: ${input:profesor:Nombre completo del docente}
- Modalidad: ${input:modalidad:Presencial, virtual o híbrida}
- Ajustes: ${input:ajustes:Indicaciones adicionales}

Instrucciones obligatorias:
- Redacta un material formal, limpio y listo para exportar a PDF.
- Incluye encabezado institucional con asignatura, unidad, tema, fecha y docente.
- Organiza el contenido en: propósito, objetivos, desarrollo del tema, conceptos clave, ejemplo aplicado, actividad sugerida, bibliografía y observaciones.
- Usa lenguaje claro, académico y apto para impresión.
- No generes formato de diapositivas; genera formato de guía o ficha de clase.
- Usa búsqueda online cuando sea necesario para complementar con fuentes y recursos actualizados, verificables y útiles para la clase.
- La bibliografía debe quedar en APA 7.ª edición.

Formato de salida:
- Documento en Markdown con títulos claros.
- Bloque inicial con:
  - Asignatura
  - Unidad
  - Tema
  - Fecha
  - Profesor
- Cierre con bibliografía y una línea de espacio para firma o validación docente.
- Incluye una subsección breve de "Recursos sugeridos para ampliación" cuando existan fuentes online pertinentes.