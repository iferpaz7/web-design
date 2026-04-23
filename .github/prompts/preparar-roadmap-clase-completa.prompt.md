---
name: "preparar-roadmap-clase-completa"
description: "Prepara el roadmap maestro de una clase dinámica y memorable, separando la salida para la web, la salida operativa para docs y la salida de recursos para Canvas LMS. Úsalo para planificar una sesión magistral o mixta alineada al sílabo y a la filosofía ITSAE."
argument-hint: "unidad=... tema=... fecha=... profesor=... duracion=..."
agent: "agent"
tools: [search, web, vscode/askQuestion]
---

Prepara el roadmap completo de una clase basada en [docs/silabo-final-formato-sga.md](../../docs/silabo-final-formato-sga.md) y, cuando corresponda, en [src/data/syllabus.ts](../../src/data/syllabus.ts).

Este prompt debe resolver en una sola salida lo que normalmente se haría por separado para:
- desglose temático,
- generación de actividades,
- preparación de presentación,
- adaptación del contenido al sitio web actual del curso,
- generación de una versión docente exportable a `docs`,
- y generación de un Markdown de recursos para subir a Canvas LMS.

Sigue también la guía institucional en [itsae-filosofia-docencia](../instructions/itsae-filosofia-docencia.instructions.md).

Usa estos inputs:
- Unidad: ${input:unidad:Unidad del sílabo}
- Tema: ${input:tema:Tema específico a dictar}
- Fecha: ${input:fecha:Fecha de la clase}
- Profesor: ${input:profesor:Nombre completo del docente}
- Duración: ${input:duracion:Duración total de la clase}
- Modalidad: ${input:modalidad:Presencial, virtual o híbrida}
- Tipo de clase: ${input:tipoClase:Magistral, práctica o mixta}
- Nivel de profundidad: ${input:profundidad:Básico, intermedio o avanzado}
- Criterio metodológico principal: ${input:criterio:Investigación autónoma, en contacto con el docente o práctica experimental}
- Cantidad de actividades: ${input:cantidad:Cantidad de actividades o momentos prácticos}
- Modo de salida web: ${input:modoWeb:Solo generar bloques para web, proponer reemplazo del contenido actual o dejar ambos}
- Modo de salida docs: ${input:modoDocs:Generar roadmap completo en markdown, resumen docente o ambos}
- Modo de salida Canvas: ${input:modoCanvas:Generar recursos para Canvas LMS, resumen de recursos o ambos}
- URL base del sitio publicado: ${input:urlBaseSitio:https://... donde está publicada la web del curso}
- Fuentes prioritarias UNACH: ${input:fuenteUnach:URL, catálogo o referencia de biblioteca UNACH}
- Ajustes: ${input:ajustes:Énfasis, restricciones o necesidades específicas}

Si uno o más de los inputs listados anteriormente (excepto Ajustes y Fuentes prioritarias UNACH) no fueron proporcionados al ejecutar el prompt, usa obligatoriamente `#tool:vscode/askQuestion` para solicitar al usuario los parámetros faltantes en una lista breve y clara **antes de generar cualquier contenido**.
Una vez que el usuario complete los datos faltantes, retoma la generación usando esos valores sin reiniciar innecesariamente el resto del trabajo.

Si `fuenteUnach` no se proporciona, usa por defecto esta búsqueda del catálogo de biblioteca UNACH como punto de partida para obtener bibliografía relacionada y refinarla según el tema solicitado:
- `https://catalogobiblio.unach.cl/vufind/Search/Results?lookfor=dise%C3%B1o+web&type=AllFields&filter%5B%5D=language%3A%22Spanish%22&limit=20`

Instrucciones obligatorias para la generación:
- No asumas valores para fecha, profesor, modalidad, duración, `modoWeb`, `modoDocs`, `modoCanvas` o `urlBaseSitio` si no fueron entregados.
- **Creación de archivos obligatoria:** Una vez generado el contenido, crea físicamente los archivos en disco usando las herramientas disponibles. No es suficiente mostrar el contenido como texto en el chat. Usa esta estructura jerárquica:
  - `docs/clases/unidad{n}/tema{m}/roadmap-{fecha}.md` — con el contenido de `salidaDocs`.
  - `docs/clases/unidad{n}/tema{m}/canvas-{fecha}.md` — con el contenido de `salidaCanvasDocs`.
  - Si `modoWeb` indica reemplazo o actualización, edita directamente en `src/data/syllabus.ts` el objeto del tema correspondiente, actualizando los campos `panorama`, `objetivos`, `ideasClave`, `actividad`, `evidencia`, `herramientas` y `presentationBlocks`.
  - Si `modoWeb` es solo convivencia o generación, muestra los bloques TypeScript listos para copiar pero no edites el archivo.
  - **Siempre actualiza `presentationBlocks`** en `src/data/syllabus.ts` para el tema indicado, ya sea como reemplazo o como propuesta comentada junto al bloque actual. La presentación del sitio se deriva de este campo.
- Redacta en español formal, pedagógico e institucional, con enfoque ITSAE.
- Diseña la clase para que sea dinámica, clara, significativa y recordable para los estudiantes.
- Mantén esta secuencia base, adaptándola con criterio al tema y duración:
  1. Bienvenida.
  2. Meditación relacionada con el tema.
  3. Oración inicial.
  4. Introducción.
  5. Desarrollo del tema.
  6. Práctica o actividad aplicada, si corresponde.
  7. Conclusión o cierre conceptual.
  8. Oración final.
  9. Despedida.
- La meditación debe ser breve, pertinente, respetuosa, conectada con el tema y coherente con la filosofía del ITSAE. No la fuerces ni la vuelvas genérica.
- Desglosa el tema en subtemas, conceptos clave, ejemplos, analogías, aplicaciones prácticas y alertas sobre errores comunes.
- Usa búsqueda online para localizar y verificar fuentes académicas, institucionales, artículos, videos, revistas y recursos que fortalezcan la clase magistral.
- Si no se entrega una fuente UNACH específica, comienza la búsqueda bibliográfica desde el catálogo UNACH por defecto, adapta los términos de búsqueda al tema o asignatura y selecciona solo referencias realmente pertinentes para sustentar la clase.
- Prioriza fuentes en este orden:
  1. Biblioteca o repositorios UNACH.
  2. Fuentes institucionales o académicas confiables.
  3. Artículos web especializados.
  4. Videos formativos pertinentes.
  5. Revistas o publicaciones especializadas.
- Diseña actividades coherentes con el criterio metodológico indicado.
- Si el criterio es investigación autónoma, prioriza análisis, síntesis, búsqueda y argumentación.
- Si el criterio es en contacto con el docente, prioriza interacción guiada, discusión, retroalimentación y construcción acompañada.
- Si el criterio es práctica experimental, prioriza ejecución, verificación, prototipado, demostración o resolución aplicada.
- Incluye momentos de participación, preguntas detonantes y estrategias para sostener la atención del grupo.
- Si el tipo de clase es magistral, mantén predominio expositivo sin perder dinamismo.
- Si el tipo de clase es práctica o mixta, incorpora ejercicios o producción estudiantil con tiempos definidos.
- Genera también una presentación de clase lista para exposición, organizada por diapositivas, con contenido breve y notas de apoyo para el docente.
- Genera además una salida compatible con el contenido web actual del curso. Si el usuario lo pide o si `modoWeb` lo indica, entrega bloques listos para escribir, actualizar o reemplazar el contenido actual en la web, priorizando el formato conceptual de [src/data/syllabus.ts](../../src/data/syllabus.ts).
- Genera además una salida en Markdown para Canvas LMS lista para guardarse en `docs/` y luego copiarse o subirse a la plataforma como sección de recursos por clase.
- Separa explícitamente la salida en tres niveles:
   1. `salidaWeb`: contenido estable, reutilizable y apto para estudiantes.
   2. `salidaDocs`: contenido operativo, contextual y fechado para uso docente.
   3. `salidaCanvasDocs`: contenido breve, limpio y publicable como sección de recursos en Canvas LMS.
- Cuando prepares contenido para web, usa una estructura compatible con estos campos:
   - panorama
   - objetivos
   - ideasClave
   - actividad
   - evidencia
   - herramientas
   - presentationBlocks
- En `salidaWeb`, no incluyas elementos volátiles o de ejecución puntual como saludo inicial, oración, meditación, tiempos exactos por bloque, observaciones internas del docente o notas dependientes de una fecha específica.
- En `salidaWeb`, prioriza claridad conceptual, permanencia y reutilización en la guía del tema, la presentación y la versión imprimible.
- En `salidaDocs`, sí incluye la secuencia completa de clase, decisiones pedagógicas, tiempos sugeridos, momentos de apertura y cierre, recomendaciones de conducción, preguntas detonantes y observaciones prácticas para la sesión específica.
- Cuando generes `salidaDocs`, redacta el contenido en formato Markdown listo para guardarse en `docs/`, con título, metadatos básicos de la clase y secciones claramente identificables.
- En `salidaCanvasDocs`, redacta un Markdown breve y ordenado, pensado para publicarse en Canvas LMS como recurso de clase, sin instrucciones internas de conducción docente.
- En `salidaCanvasDocs`, usa texto plano estructurado con encabezados simples, listas y numeración. No uses etiquetas HTML, no uses tablas y no entregues bloques de código.
- En `salidaCanvasDocs`, prioriza un formato fácil de copiar y pegar tanto en Canvas como en un editor HTML o visual, sin necesidad de limpiar etiquetas o rehacer la estructura.
- En `salidaCanvasDocs`, incluye obligatoriamente:
   - objetivo de la clase;
   - lista de recursos con nombre, tipo, propósito breve y enlace;
   - enlace a la presentación alojada en la web del curso;
   - cuando corresponda, enlace a la guía del tema y a la versión imprimible o PDF del tema.
- Si `urlBaseSitio` está disponible, construye enlaces absolutos para la web del curso usando esta base.
- Si `urlBaseSitio` no está disponible, entrega enlaces relativos válidos del sitio y marca que falta convertirlos a URL pública antes de subir a Canvas LMS.
- Para construir los enlaces internos del curso, usa esta lógica:
   - guía del tema: `/unidad{n}/tema{m}`
   - presentación: `/presentacion/unidad{n}/tema{m}`
   - imprimir o PDF: `/imprimir/unidad{n}/tema{m}`
- En `salidaCanvasDocs`, no incluyas bibliografía extensa ni desarrollo completo del roadmap; prioriza usabilidad para el estudiante y facilidad de carga en la plataforma.
- Cuando incluyas enlaces en `salidaCanvasDocs`, preséntalos en una línea visible y simple con esta forma: `Enlace: [URL](URL)`.
- Usa esta ruta para el archivo Canvas: `docs/clases/unidad{n}/tema{m}/canvas-{fecha}.md`.
- Toda bibliografía debe quedar en APA 7.ª edición.
- No inventes referencias. Si falta información bibliográfica, márcala como pendiente de validación.

Formato de salida:
1. Ficha inicial de la clase con:
   - Asignatura
   - Unidad
   - Tema
   - Fecha
   - Profesor
   - Duración
   - Modalidad
   - Tipo de clase
2. Propósito general de la sesión.
3. Objetivos de aprendizaje de la clase.
4. `salidaDocs` en Markdown lista para `docs/`, con:
   - Título del documento
   - Metadatos de la sesión
   - Roadmap completo de la sesión, por momentos, con esta estructura por cada momento:
   - Nombre del momento
   - Tiempo sugerido
   - Objetivo del momento
   - Qué hará el docente
   - Qué harán los estudiantes
   - Recursos o apoyos necesarios
5. Desarrollo temático desglosado:
   - Subtemas
   - Conceptos clave
   - Ejemplos aplicados
   - Errores comunes
6. Actividad o actividades de clase:
   - Nombre
   - Criterio metodológico
   - Instrucciones
   - Evidencia o producto esperado
   - Criterio de evaluación
7. Preguntas detonantes para mantener participación.
8. Recursos sugeridos para clase magistral:
   - Fuente académica principal
   - Recurso web de apoyo
   - Video o recurso audiovisual útil
   - Recurso para profundización docente
9. Presentación lista para clase:
   - Título general
   - Lista de diapositivas numeradas
   - Contenido principal por diapositiva
   - Nota breve del docente por diapositiva
10. `salidaWeb` con bloques listos para el contenido web actual:
   - panorama
   - objetivos
   - ideasClave
   - actividad
   - evidencia
   - herramientas
   - presentationBlocks
11. `salidaCanvasDocs` en Markdown lista para `docs/`, con:
   - Nombre sugerido del archivo
   - Título de la clase o recurso
   - Línea breve con asignatura, fecha y docente
   - Objetivo de la clase
   - Sección de recursos
   - Lista de enlaces de apoyo, incluyendo la presentación de la web del curso
   - Actividad de la clase, si corresponde
   - Evidencia esperada, si corresponde
   - Nota breve si algún enlace quedó relativo y debe convertirse a URL pública
12. Indicación breve de uso:
   - Qué parte conviene publicar en la web
   - Qué parte conviene conservar solo en `docs`
   - Qué parte conviene subir a Canvas LMS
13. Bibliografía en APA 7.ª edición.
14. Recomendación final para el docente sobre cómo hacer que la clase deje mayor recordación en los estudiantes.

Si la fuente UNACH proporcionada o la búsqueda por defecto no son suficientes para sostener la parte académica con bibliografía pertinente y verificable, solicita más datos antes de cerrar la respuesta.

Si `modoWeb` indica reemplazo, redacta los bloques web con criterio de sustitución completa del contenido anterior. Si indica convivencia, redacta los bloques como propuesta ampliada sin asumir reemplazo automático.

Si `modoDocs` pide ambos formatos, entrega primero `salidaDocs` y luego `salidaWeb`. Si pide solo resumen docente, conserva la estructura Markdown pero reduce el detalle operativo a lo esencial.

Si `modoCanvas` pide ambos formatos, entrega `salidaCanvasDocs` completa. Si pide solo resumen de recursos, conserva objetivo y enlaces esenciales.