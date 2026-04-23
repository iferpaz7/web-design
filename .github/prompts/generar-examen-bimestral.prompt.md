---
name: "generar-examen-bimestral"
description: "Genera un examen por bimestre con fecha, cantidad de preguntas y balance teórico-práctico. Úsalo para Bimestre I o II según el sílabo."
argument-hint: "bimestre=... fecha=... cantidadPreguntas=... tipo=..."
agent: "agent"
tools: [search, web]
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

Si el número de preguntas no es coherente con el tipo solicitado, propone una distribución razonable antes de generar el examen.