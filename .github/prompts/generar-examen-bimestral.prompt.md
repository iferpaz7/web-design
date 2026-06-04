---
name: "generar-examen-bimestral"
description: "Genera un examen por bimestre con fecha, cantidad de preguntas y balance teórico-práctico. Úsalo para Bimestre I o II según el sílabo."
argument-hint: "bimestre=... fecha=... cantidadPreguntas=... tipo=..."
agent: "agent"
---

Genera un examen bimestral alineado a [docs/silabo-final-formato-sga.md](../../docs/silabo-final-formato-sga.md).

Sigue también la guía institucional en [itsae-filosofia-docencia](../instructions/itsae-filosofia-docencia.instructions.md).

Usa estos inputs:

- Bimestre: ${input:bimestre:I o II}
- Fecha: ${input:fecha:Fecha del examen}
- Cantidad de preguntas: ${input:cantidadPreguntas:Número total de preguntas}
- Tipo de preguntas: ${input:tipo:Teóricas, prácticas o mixtas}
- Nivel de dificultad: ${input:dificultad:Bajo, medio o alto}
- Profesor: ${input:profesor:Nombre del docente}
- Ajustes: ${input:ajustes:Observaciones o restricciones}

Instrucciones obligatorias:

- Si el bimestre es I, evalúa principalmente contenidos de las Unidades 1 y 2.
- Si el bimestre es II, evalúa principalmente contenidos de las Unidades 3 y 4, con posibilidad de integración del proyecto final.
- Distribuye las preguntas según el tipo indicado.
- Si el tipo es teórico, prioriza comprensión, análisis y aplicación conceptual.
- Si el tipo es práctico, prioriza resolución de casos, diseño, evaluación o toma de decisiones.
- Si el tipo es mixto, balancea ambas dimensiones.
- Si necesitas ejemplos, contextos o referencias actuales para casos o preguntas situadas, usa fuentes online confiables y verificables.
- Incluye instrucciones generales, puntaje sugerido y clave de respuestas o pauta de corrección.
- Redacta en español formal y nivel superior.
- Mantén un enfoque ético, profesional y coherente con la formación del ITSAE.

Formato de salida:

1. Encabezado del examen con bimestre, fecha y profesor.
2. Instrucciones generales.
3. Preguntas numeradas.
4. Clave de respuestas o pauta de evaluación.
5. Breve nota final con la trazabilidad temática respecto al sílabo.
6. `salidaGoogleClassroomDocs` — dos archivos separados para Google Classroom (sin incluir las preguntas del examen):

   **Archivo 1 — Material** (`classroom-examen-bimestre${input:bimestre}-${input:fecha}.md`):
   - `# Examen Bimestral — Bimestre ${input:bimestre}: Recursos de repaso`
   - línea breve: `Asignatura: ... | Fecha: ... | Docente: ...`
   - `## Objetivo de la clase` — propósito evaluativo del bimestre.
   - `## Publicación sugerida en Google Classroom` — solo referencia docente; tema (`Bimestre ${input:bimestre}`), estado (`DRAFT`).
   - `## Recursos de la clase` — guías de estudio y materiales de repaso, cada uno bajo `### Nombre del recurso` con `Tipo:`, `Propósito:` y `Enlace: [URL](URL)`.

   **Archivo 2 — Tarea/Assignment** (`actividad-examen-bimestre${input:bimestre}-${input:fecha}.md`):
   - `# Examen Bimestral — Bimestre ${input:bimestre}`
   - línea breve: `Asignatura: ... | Fecha: ... | Docente: ...`
   - `## Objetivo de la clase` — propósito evaluativo del bimestre.
   - `## Publicación sugerida en Google Classroom` — solo referencia docente; tema (`Bimestre ${input:bimestre}`), estado (`DRAFT`), puntaje total.
   - `## Actividad de la clase: Examen Bimestral — Bimestre ${input:bimestre}` — instrucciones generales (duración, modalidad, material permitido). No incluyas las preguntas.
   - `## Evidencia esperada` — descripción de la entrega. Al final incluye `**Criterios:** [distribución de puntaje por sección]`.

- Usa siempre el nombre Google Classroom y evita referirte a otras plataformas de aula virtual.

**Creación de archivos obligatoria:** Una vez generado el contenido, crea físicamente el archivo en disco. No es suficiente mostrarlo en el chat.

- Ruta: `docs/examenes/examen-bimestre${input:bimestre}-${input:fecha}.md`
- Crea también `docs/examenes/clave-bimestre${input:bimestre}-${input:fecha}.md` con la clave de respuestas o pauta de corrección separada (para que el docente la guarde aparte del examen que entrega a los estudiantes).
- Crea además dos archivos en `docs/clases/examenes/` con el contenido de `salidaGoogleClassroomDocs`:
  - `docs/clases/examenes/classroom-examen-bimestre${input:bimestre}-${input:fecha}.md` — material de repaso.
  - `docs/clases/examenes/actividad-examen-bimestre${input:bimestre}-${input:fecha}.md` — tarea/assignment del examen.
- Para sincronizar con Google Classroom: `python3 tools/google_classroom/classroom_cli.py sync-classes [COURSE_ID] --only examenes`

Si el número de preguntas no es coherente con el tipo solicitado, propone una distribución razonable antes de generar el examen.
