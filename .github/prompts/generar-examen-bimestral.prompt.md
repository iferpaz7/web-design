---
name: 'generar-examen-bimestral'
description: 'Genera un examen por bimestre con fecha, cantidad de preguntas y balance teórico-práctico. Úsalo para Bimestre I o II según el sílabo.'
argument-hint: 'bimestre=... fecha=... cantidadPreguntas=... tipo=...'
agent: 'agent'
---

Genera un examen bimestral alineado a [docs/silabo-final-formato-sga.md](../../docs/silabo-final-formato-sga.md).

Sigue también la guía institucional en [itsae-filosofia-docencia](../instructions/itsae-filosofia-docencia.instructions.md).

Usa estos inputs:

- Bimestre: ${input:bimestre:I o II}
- Fecha: ${input:fecha:Fecha del examen (YYYY-MM-DD)}
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
6. `salidaGoogleClassroomDocs` — dos archivos separados para Google Classroom (sin incluir las preguntas del examen), siguiendo la estructura canónica del proyecto:

---

## Estructura canónica de `classroom-examen-bimestre${input:bimestre}-${input:fecha}.md`

```
# Bimestre ${input:bimestre} — Examen bimestral: Recursos de repaso

**Asignatura:** Diseño Web para Marketing Digital
**Fecha:** DD de mes de YYYY
**Docente:** [Nombre del docente]

---

## Objetivo de la evaluación

[Propósito evaluativo del bimestre en un párrafo breve.]

---

## Contenidos evaluados

1. [Primer tema o unidad evaluada.]
2. [Segundo tema.]
3. [...]

---

## Recursos de repaso

### Guía Unidad N — Nombre del tema

Tipo: Guía de estudio en línea
Propósito: [Propósito breve de repaso.]
Enlace: [https://web-design-itsae.netlify.app/unidadN/temaN](https://web-design-itsae.netlify.app/unidadN/temaN)

### [Recurso adicional si aplica]

Tipo: [Tipo]
Propósito: [Propósito breve.]
Enlace: [URL](URL)

---

_Todos los enlaces apuntan al sitio publicado del curso en https://web-design-itsae.netlify.app/. Si algún enlace no carga, consulta directamente al docente._
```

Reglas del archivo `classroom-examen-bimestre${input:bimestre}-${input:fecha}.md`:

- El H1 identifica el bimestre y el propósito del material (repaso).
- Metadatos en tres líneas separadas con negrita. Fecha en formato "DD de mes de YYYY".
- Separadores `---` entre secciones principales.
- `## Contenidos evaluados` — lista numerada de temas o unidades que entran en el examen.
- `## Recursos de repaso` — enlaces a las guías del sitio del curso relevantes para el bimestre, con `Tipo:`, `Propósito:` y `Enlace:`.
- **No incluir** `## Publicación sugerida en Google Classroom` en este archivo.
- **No incluir** instrucciones del examen ni puntaje; eso va en el archivo de actividad.

---

## Estructura canónica de `actividad-examen-bimestre${input:bimestre}-${input:fecha}.md`

```
# Actividad de la clase: Examen Bimestral — Bimestre ${input:bimestre}

**Asignatura:** Diseño Web para Marketing Digital
**Fecha:** DD de mes de YYYY
**Docente:** [Nombre del docente]

---

## Objetivo de la evaluación

[Propósito evaluativo del bimestre, igual que en el material.]

---

## Publicación sugerida en Google Classroom

- **Tema:** Bimestre ${input:bimestre}
- **Estado:** DRAFT
- **Tipo:** Tarea / Asignación
- **Puntaje sugerido:** [Puntaje total del examen]

---

## Actividad de la clase: Examen Bimestral — Bimestre ${input:bimestre}

[Instrucciones generales: duración, modalidad, material permitido, forma de entrega. No incluyas las preguntas del examen aquí.]

---

## Evidencia esperada

[Descripción de qué debe entregar el estudiante: respuestas escritas, documento, etc.]

**Criterios:** [distribución de puntaje por sección o tipo de pregunta].
```

Reglas del archivo `actividad-examen-bimestre${input:bimestre}-${input:fecha}.md`:

- El H1 usa `# Actividad de la clase:` para que el CLI lo parsee correctamente y genere el título `"Actividad: Examen Bimestral — Bimestre N"` en Google Classroom.
- Metadatos en tres líneas separadas con negrita. Fecha en formato "DD de mes de YYYY".
- Separadores `---` entre secciones principales.
- `## Publicación sugerida en Google Classroom` como lista de viñetas con negrita — **solo en este archivo**, no en el classroom.
- `## Actividad de la clase: Examen Bimestral — Bimestre N` — el H2 debe coincidir con el H1 para que el CLI lo detecte. Contiene únicamente las instrucciones generales del examen (duración, modalidad, qué material está permitido, cómo entregar). **No incluyas las preguntas**.
- `**Criterios:**` al final de `## Evidencia esperada` con la distribución de puntaje.
- **No incluir** la lista de recursos de repaso; eso va en el archivo classroom.

---

**Creación de archivos obligatoria:** Una vez generado el contenido, crea físicamente los archivos en disco. No es suficiente mostrarlo en el chat.

- `docs/examenes/examen-bimestre${input:bimestre}-${input:fecha}.md` — examen completo con preguntas.
- `docs/examenes/clave-bimestre${input:bimestre}-${input:fecha}.md` — clave de respuestas o pauta de corrección separada (para que el docente la guarde aparte).
- `docs/clases/examenes/classroom-examen-bimestre${input:bimestre}-${input:fecha}.md` — material de repaso para Google Classroom.
- `docs/clases/examenes/actividad-examen-bimestre${input:bimestre}-${input:fecha}.md` — tarea/assignment del examen para Google Classroom.

Para sincronizar con Google Classroom:

```
pnpm classroom sync-classes COURSE_ID --only examenes
```

Para actualizar ítems ya existentes en Classroom:

```
pnpm classroom sync-classes COURSE_ID --only examenes --update
```

Usa siempre el nombre Google Classroom y evita referirte a otras plataformas de aula virtual.

Si el número de preguntas no es coherente con el tipo solicitado, propone una distribución razonable antes de generar el examen.
