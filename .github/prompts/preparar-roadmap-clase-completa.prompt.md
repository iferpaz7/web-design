---
description: 'Prepara el roadmap maestro de una clase dinámica y memorable, alineada a la sesión exacta del sílabo SGA. Levanta los inputs del prompt, consulta la tabla de sesiones del sílabo para extraer capacidad, horas y evidencia, y separa la salida para la web, docs y Google Classroom. Úsalo para planificar una sesión magistral o mixta coherente con la asignatura de Diseño Web para Marketing Digital y la filosofía ITSAE.'
argument-hint: 'Inputs obligatorios: unidad (1-4), tema (1-4 dentro de la unidad), fecha, tipoClase, profundidad, criterio, cantidad. Opcionales: fuenteUnach, ajustes.'
---

Prepara el roadmap completo de una clase usando como fuente primaria el sílabo oficial de la asignatura en [docs/silabo-final-formato-sga.md](../../docs/silabo-final-formato-sga.md) y, de manera complementaria cuando el tema ya exista en la web del curso, en [src/data/syllabus.ts](../../src/data/syllabus.ts).

**Antes de generar cualquier contenido**, lee el sílabo completo y localiza la fila de la tabla "Actividades por sesión" que coincida con la **combinación de `unidad` y `tema`** indicadas en los inputs (el número de tema equivale al número de sesión dentro de la unidad, ya que ambos reinician en 1 en cada unidad). Extrae de esa fila:

- El número de tema / sesión dentro de la unidad.
- La capacidad específica declarada en el sílabo para esa fila (campo "Capacidades").
- El tema oficial del sílabo (campo "Tema").
- Las horas presenciales (HP), horas a distancia (HD) y horas autónomas (HAA) correspondientes.
- La unidad a la que pertenece.

Identifica además:

- El resultado de aprendizaje o competencia del sílabo que cubre esta unidad (sección "Resultado de aprendizaje o competencias").
- El detalle e inclusiones temáticas declarados para la unidad correspondiente (sección "Unidades").
- El tipo de evidencia esperada para esa unidad según el sílabo.

Usa estos datos extraídos del sílabo como ancla pedagógica: el objetivo de la sesión, los contenidos, las actividades y la evidencia de la clase deben ser coherentes con la capacidad declarada en esa fila y con el resultado de aprendizaje de la unidad.

Este prompt debe resolver en una sola salida lo que normalmente se haría por separado para:

- desglose temático,
- generación de actividades,
- preparación de presentación,
- adaptación del contenido al sitio web actual del curso,
- generación de una versión docente exportable a `docs`,
- y generación de un Markdown de publicación listo para Google Classroom.

Sigue también la guía institucional en [itsae-filosofia-docencia](../instructions/itsae-filosofia-docencia.instructions.md).

Usa estos inputs:

- Unidad: ${input:unidad:Número de unidad (1-4)}
- Tema: ${input:tema:Número de tema dentro de la unidad (1-4)}
- Fecha: ${input:fecha:Fecha de la clase (YYYY-MM-DD)}
- Profesor: Ing. Ivan Paz
- Duración: 120 min
- Modalidad: virtual
- Tipo de clase: ${input:tipoClase:Magistral, práctica o mixta}
- Nivel de profundidad: ${input:profundidad:Básico, intermedio o avanzado}
- Criterio metodológico principal: ${input:criterio:Investigación autónoma, en contacto con el docente o práctica experimental}
- Cantidad de actividades: ${input:cantidad:Cantidad de actividades o momentos prácticos}
- Modo de salida web: ambos
- Modo de salida docs: ambos
- Modo de salida Google Classroom: ambos
- URL base del sitio publicado: https://web-design-itsae.netlify.app/
- Fuentes prioritarias UNACH: ${input:fuenteUnach:URL, catálogo o referencia de biblioteca UNACH (opcional)}
- Ajustes: ${input:ajustes:Énfasis, restricciones o necesidades específicas (opcional)}

Regla de ejecución del prompt:

- Levanta estos datos desde los inputs del prompt antes de generar cualquier contenido.
- Trata como obligatorios: `unidad`, `tema`, `fecha`, `tipoClase`, `profundidad`, `criterio` y `cantidad`. Los campos `profesor`, `duracion`, `modalidad`, `modoWeb`, `modoDocs`, `modoGoogleClassroom` y `urlBaseSitio` ya tienen valores fijos en este prompt. Los campos `fuenteUnach` y `ajustes` son opcionales.
- No solicites estos datos nuevamente en el chat si ya vienen resueltos por `${input:...}`.
- Si al ejecutarse el prompt algún campo obligatorio quedó vacío, detén la generación y responde únicamente con una lista breve de los campos faltantes para que el usuario vuelva a ejecutar el prompt completándolos.
- Usa `unidad` + `tema` como clave compuesta para localizar la fila exacta en la tabla del sílabo (ej. Unidad 2, Tema 3).

Prioridad de fuentes bibliográficas:

1. Usa como primera fuente la bibliografía oficial de la asignatura listada en el sílabo (sección "Bibliografía"). Estas referencias ya están en APA 7.ª edición y son las que el estudiante debe conocer.
2. Si `fuenteUnach` fue proporcionado, úsalo como segunda fuente.
3. Si `fuenteUnach` no se proporciona, o si el fetch directo del catálogo no devuelve resultados pertinentes al tema, ejecuta el proceso Playwright descrito abajo.
   - Si `fuenteUnach` contiene una URL de eLibro UNACH (`elibro.unach.elogim.com`), inclúyela como segundo argumento del script para extraer sus metadatos y tabla de contenidos.
   - Con la sesión autenticada, el script recorre automáticamente en secuencia: eLibro UNACH (búsqueda por término), el recurso específico si se pasó URL, el catálogo VuFind UNACH y Digitalia UNACH. Una sola apertura de navegador — el usuario se loguea una vez y el script hace el resto.
   - Al terminar, identifica qué resultados y capítulos son pertinentes al tema de la clase, cítalos específicamente (autor, año, cap. N) en la bibliografía y en los recursos de `classroom` y `actividad`, y elimina los archivos temporales.
   - Proceso: guardar como `.tmp_elibro_fetch.cjs` en la raíz del proyecto, ejecutar con `bash -c 'DISPLAY=:0 node .tmp_elibro_fetch.cjs "TERMINO" "URL_OPCIONAL"'`, leer `.tmp_elibro_result.json`, y luego eliminar ambos archivos.

```js
// .tmp_elibro_fetch.cjs
// Uso: node .tmp_elibro_fetch.cjs "termino de búsqueda" "url_elibro_opcional"
const { chromium } = require('playwright');
const fs = require('fs');

const searchTerm = process.argv[2] || 'diseño web';
const elibroUrl  = process.argv[3] || null;

const CATALOGS = [
  {
    name: 'eLibro UNACH — búsqueda',
    url: `https://elibro.unach.elogim.com/es/lc/unach/buscar/?q=${encodeURIComponent(searchTerm)}&lang=es`,
    extract: () => {
      const items = [];
      document.querySelectorAll('.titulo-resultado, .result-item, h2 a, .titulo a').forEach(el => {
        const text = el.innerText?.trim();
        if (text && text.length > 5) items.push({ title: text, href: el.href || null });
      });
      return { source: 'eLibro búsqueda', results: items.slice(0, 10), rawText: document.body.innerText.substring(0, 3000) };
    }
  },
  ...(elibroUrl ? [{
    name: 'eLibro UNACH — recurso específico',
    url: elibroUrl,
    extract: () => ({
      source: 'eLibro recurso',
      title: document.querySelector('h1')?.innerText?.trim() || null,
      author: document.querySelector('.autor, .author, [itemprop="author"]')?.innerText?.trim() || null,
      year: document.querySelector('.anio, .year, [itemprop="datePublished"]')?.innerText?.trim() || null,
      publisher: document.querySelector('.editorial, .publisher, [itemprop="publisher"]')?.innerText?.trim() || null,
      isbn: document.querySelector('.isbn, [itemprop="isbn"]')?.innerText?.trim() || null,
      toc: document.body.innerText.substring(0, 4000)
    })
  }] : []),
  {
    name: 'Catálogo VuFind UNACH',
    url: `https://catalogobiblio.unach.cl/vufind/Search/Results?lookfor=${encodeURIComponent(searchTerm)}&type=AllFields&filter[]=language:"Spanish"&limit=10`,
    extract: () => {
      const items = [];
      document.querySelectorAll('.result h2 a, .result .title a, .result a[href*="Record"]').forEach(el => {
        const text = el.innerText?.trim();
        if (text && text.length > 5) items.push({ title: text, href: el.href || null });
      });
      return { source: 'VuFind UNACH', results: items.slice(0, 10), rawText: document.body.innerText.substring(0, 3000) };
    }
  },
  {
    name: 'Digitalia UNACH',
    url: `https://www.digitaliapublishing.com/a/unach/search?q=${encodeURIComponent(searchTerm)}&lang=es`,
    extract: () => {
      const items = [];
      document.querySelectorAll('.book-title, .titulo, h3 a, .result-title a').forEach(el => {
        const text = el.innerText?.trim();
        if (text && text.length > 5) items.push({ title: text, href: el.href || null });
      });
      return { source: 'Digitalia', results: items.slice(0, 10), rawText: document.body.innerText.substring(0, 2000) };
    }
  }
];

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const results = {};

  // Login único en eLibro
  const loginPage = await context.newPage();
  await loginPage.goto('https://elibro.unach.elogim.com/es/lc/unach/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('\n>>> Inicia sesión con tu correo institucional UNACH.');
  console.log('>>> Cuando estés dentro del catálogo, presiona ENTER aquí.\n');
  await new Promise(r => { process.stdin.resume(); process.stdin.once('data', r); });
  await loginPage.close();

  // Recorrer catálogos en la misma sesión autenticada
  for (const catalog of CATALOGS) {
    console.log(`\nConsultando: ${catalog.name} ...`);
    const page = await context.newPage();
    try {
      await page.goto(catalog.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(2000);
      results[catalog.name] = await page.evaluate(catalog.extract);
      console.log(`  OK — ${JSON.stringify(results[catalog.name]).substring(0, 120)}...`);
    } catch (e) {
      results[catalog.name] = { source: catalog.name, error: e.message };
      console.log(`  ERROR: ${e.message}`);
    }
    await page.close();
  }

  fs.writeFileSync('.tmp_elibro_result.json', JSON.stringify(results, null, 2));
  console.log('\nResultados guardados en .tmp_elibro_result.json');
  await browser.close();
  process.exit(0);
})();
```

4. Complementa con fuentes web especializadas, videos y recursos digitales solo cuando las anteriores no cubran el tema con suficiente profundidad.

Instrucciones obligatorias para la generación:

- No asumas valores para `fecha` si no fue entregada. Los campos `profesor`, `duracion`, `modalidad`, `modoWeb`, `modoDocs`, `modoGoogleClassroom` y `urlBaseSitio` ya tienen valores fijos en este prompt.
- Considera que `unidad`, `tema`, `sesion`, `fecha`, `tipoClase`, `profundidad`, `criterio` y `cantidad` deben entrar por los inputs del prompt y deben estar resueltos antes de continuar.
- El objetivo de aprendizaje de la clase debe ser una redacción operativa de la capacidad declarada en el sílabo para esa sesión, no una elaboración libre desconectada del documento oficial.
- Las actividades deben estar alineadas al porcentaje y tipo de evaluación del sílabo (proyectos 40 %, talleres 30 %, actividades asincrónicas 15 %, participación 15 %). Especifica en la ficha de cada actividad a qué componente de evaluación contribuye.
- La evidencia propuesta para la clase debe ser coherente con la evidencia declarada para la unidad en el sílabo. Si la clase es la última de la unidad o la que cierra una entrega, prioriza que la actividad cierre o adelante esa evidencia.
- Las estrategias metodológicas deben alinearse a las declaradas en el sílabo: cognitivas (análisis de casos, comparación de referentes, discusión guiada, resolución de problemas), aplicativas (prototipado, maquetación, publicación, revisión de desempeño) y formativas (autorregulación, colaboración, ética digital, retroalimentación).
- Cuando corresponda, incluye en la secuencia de clase un momento de retroalimentación sobre la sesión anterior, alineado a la lógica de progresión temática del sílabo.
- Al inicio de la `salidaDocs`, indica explícitamente: número de sesión, capacidad del sílabo para esa sesión, resultado de aprendizaje de la unidad al que contribuye, tipo de evidencia esperada para la unidad y horas (HD/HP/HAA) según el sílabo.
- Antes de proponer contenido nuevo para la clase o para la web, revisa el tema correspondiente en `src/data/syllabus.ts` y toma sus topics actuales como línea base pedagógica y conceptual.
- Si el tema ya existe en el contenido web actual, genera la clase como una mejora, ampliación o refinamiento de esos topics existentes, preservando la coherencia con `panorama`, `objetivos`, `ideasClave`, `actividad`, `evidencia`, `herramientas` y `presentationBlocks` salvo que el usuario pida un reemplazo explícito.
- Si detectas vacíos, desactualización o baja profundidad en los topics actuales, fortalécelos sin romper la estructura conceptual del tema ni la continuidad del curso.
- Si el tema solicitado no existe todavía en `src/data/syllabus.ts`, entonces sí construye la propuesta desde el sílabo y deja claro que se trata de contenido nuevo para incorporar al sitio.
- **Creación de archivos obligatoria:** Una vez generado el contenido, crea físicamente los archivos en disco usando las herramientas disponibles. No es suficiente mostrar el contenido como texto en el chat. Usa esta estructura jerárquica:
  - `docs/clases/unidad${input:unidad}/tema${input:tema}/roadmap-${input:fecha}.md` — con el contenido de `salidaDocs`.
  - `docs/clases/unidad${input:unidad}/tema${input:tema}/classroom-${input:fecha}.md` — con el contenido del **material** de `salidaGoogleClassroomDocs`.
  - `docs/clases/unidad${input:unidad}/tema${input:tema}/actividad-${input:fecha}.md` — con el contenido de la **tarea/assignment** de `salidaGoogleClassroomDocs`.
  - El roadmap generado es automáticamente accesible como página imprimible en el sitio en la ruta `/imprimir/roadmap/unidad${input:unidad}/tema${input:tema}/roadmap-${input:fecha}` gracias al componente `RoadmapImpresion.astro` y la ruta dinámica `src/pages/imprimir/roadmap/[...slug].astro`. Incluye este enlace en el archivo `classroom-${input:fecha}.md`.
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
- Antes de redactar la meditación, busca en línea la devoción de Nuestro Pan Diario correspondiente a la fecha de la clase en esta URL: `https://nuestropandiario.org/{año}/{mes}/{dia}/{slug}` — usa la fecha del input `fecha` para construir la URL base `https://nuestropandiario.org/{año}/{mes}/{dia}/` y localiza el artículo del día. Si el tema de esa devoción guarda relación con el tema de la clase (por concepto, valor, metáfora o aplicación práctica), extiende la meditación citando o parafraseando ese contenido con su referencia bíblica, e indica al docente la conexión. Si el tema de la devoción no guarda relación directa con la clase, igual incorpora al final de la meditación un versículo bíblico pertinente al tema, breve y aplicable, junto con una oración de una sola frase que lo conecte con el aprendizaje del día.
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
- El contenido de la presentación de clase va **exclusivamente** en el campo `presentationBlocks` de `src/data/syllabus.ts` para el tema indicado. No lo dupliques en `salidaDocs` ni en el roadmap Markdown. La presentación en la web del curso se construye desde ese campo y es la fuente única.
- Genera además una salida compatible con el contenido web actual del curso. Si el usuario lo pide o si `modoWeb` lo indica, entrega bloques listos para escribir, actualizar o reemplazar el contenido actual en la web, priorizando el formato conceptual de [src/data/syllabus.ts](../../src/data/syllabus.ts) y reutilizando como base los topics que ya existan para ese tema.
- Genera además una salida en Markdown para Google Classroom lista para guardarse en `docs/` y luego publicarse con el CLI `pnpm classroom sync-classes COURSE_ID` (equivalente a `python3 tools/google_classroom/classroom_cli.py sync-classes`). Para actualizar ítems existentes usa `pnpm classroom sync-classes COURSE_ID --update`.
- Separa explícitamente la salida en tres niveles:
  1. `salidaWeb`: contenido estable, reutilizable y apto para estudiantes.
  2. `salidaDocs`: contenido operativo, contextual y fechado para uso docente.
  3. `salidaGoogleClassroomDocs`: **dos archivos separados** para Google Classroom:
     - `classroom-${input:fecha}.md` — solo el **material** (recursos, objetivo, enlaces). El CLI lo sube como `courseWorkMaterial`.
     - `actividad-${input:fecha}.md` — solo la **tarea/assignment** (instrucciones, evidencia, criterios). El CLI lo sube como `courseWork`.
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
- En `salidaWeb`, cuando el tema ya exista en la web, presenta la propuesta como mejora editorial y pedagógica de los topics actuales, no como reinvención desconectada del contenido ya publicado, excepto si el usuario solicita reemplazo total.
- En `salidaDocs`, sí incluye la secuencia completa de clase, decisiones pedagógicas, tiempos sugeridos, momentos de apertura y cierre, recomendaciones de conducción, preguntas detonantes y observaciones prácticas para la sesión específica.
- Cuando generes `salidaDocs`, redacta el contenido en formato Markdown listo para guardarse en `docs/`, con título, metadatos básicos de la clase y secciones claramente identificables.
- En `salidaGoogleClassroomDocs`, usa texto plano estructurado con encabezados simples, listas y numeración. No uses etiquetas HTML, no uses tablas y no entregues bloques de código.
- En `salidaGoogleClassroomDocs`, prioriza una estructura estable para lectura automática: objetivo, recursos, actividad y evidencia deben quedar en secciones separadas; los criterios de evaluación van al final de `## Evidencia esperada` precedidos de `**Criterios:**`.

---

## Estructura canónica de `classroom-${input:fecha}.md`

Este archivo es el **material de clase** que el CLI sube como `courseWorkMaterial`. Sigue esta estructura exacta:

```
# Unidad ${input:unidad}, Tema ${input:tema} — Nombre oficial del tema

**Asignatura:** Diseño Web para Marketing Digital
**Fecha:** DD de mes de YYYY
**Docente:** Ing. Ivan Paz

---

## Objetivo de la clase

[Redacción operativa del objetivo, párrafo breve.]

---

## Contenidos de la sesión

1. [Primer contenido o subtema tratado.]
2. [Segundo contenido.]
3. [...]

---

## Recursos de la clase

### Presentación de la sesión

Tipo: Presentación interactiva en línea
Propósito: [Propósito breve.]
Enlace: [URL completa](URL completa)

### Guía del tema

Tipo: Guía de estudio en línea
Propósito: [Propósito breve.]
Enlace: [URL completa](URL completa)

### Versión imprimible del tema

Tipo: Documento imprimible
Propósito: [Propósito breve.]
Enlace: [URL completa](URL completa)

### Roadmap docente imprimible

Tipo: Guía docente
Propósito: [Propósito breve.]
Enlace: [URL completa](URL completa)

---

## Recursos de apoyo

### [Nombre del recurso externo 1]

Tipo: [Tipo]
Propósito: [Propósito breve.]
Enlace: [URL](URL)   ← omitir si es solo bibliografía sin URL pública

### [Nombre del recurso externo 2 / Bibliografía]

Tipo: [Tipo]
Propósito: [Propósito breve.]

---

## Próxima sesión    ← incluir solo si hay una sesión siguiente en la unidad

[Una o dos frases describiendo el tema de la próxima clase y qué material traer.]

---

_Todos los enlaces apuntan al sitio publicado del curso en https://web-design-itsae.netlify.app/. Si algún enlace no carga, consulta directamente al docente._
```

Reglas del archivo `classroom-${input:fecha}.md`:

- El H1 sigue el patrón: `# Unidad N, Tema N — Nombre oficial del tema`.
- Los metadatos van en tres líneas separadas con negrita: `**Asignatura:**`, `**Fecha:**`, `**Docente:**`. La fecha en formato "DD de mes de YYYY" (no YYYY-MM-DD).
- Separadores `---` entre cada sección principal.
- `## Contenidos de la sesión` es una lista numerada de los temas o subtemas tratados en clase. Incluirla siempre.
- `## Recursos de la clase` contiene únicamente los cuatro recursos internos del curso (presentación, guía, imprimible, roadmap). Cada uno con `### Nombre`, `Tipo:`, `Propósito:` y `Enlace:`.
- `## Recursos de apoyo` contiene bibliografía del sílabo y recursos externos (artículos, herramientas, videos). Mismo formato de subencabezado con `Tipo:`, `Propósito:` y `Enlace:` cuando aplique.
- `## Próxima sesión` se incluye cuando existe una sesión siguiente en la misma unidad. Omitir si es la última sesión de la unidad.
- Nota de pie estándar al final.
- **No incluir** `## Publicación sugerida en Google Classroom` en este archivo.
- **No incluir** instrucciones de actividad ni evidencia; eso va en `actividad-${input:fecha}.md`.

---

## Estructura canónica de `actividad-${input:fecha}.md`

Este archivo es la **tarea/assignment** que el CLI sube como `courseWork`. Sigue esta estructura exacta:

```
# Actividad de la clase: Nombre operativo de la actividad
   ← Para actividades asincrónicas usar: # Actividad asincrónica: Nombre

**Asignatura:** Diseño Web para Marketing Digital
**Fecha:** DD de mes de YYYY
**Docente:** Ing. Ivan Paz

---

## Objetivo de la clase
   ← Para actividades asincrónicas: ## Objetivo de la actividad

[Redacción operativa del objetivo, igual que en el classroom.]
   ← Para actividades asincrónicas: objetivo específico de la tarea fuera de clase.

> Esta es una actividad asincrónica (HAA). Se desarrolla fuera del horario de clase y se entrega antes de la siguiente sesión.
   ← Incluir solo si la actividad es asincrónica (HAA).

---

## Publicación sugerida en Google Classroom

- **Tema:** Unidad ${input:unidad}
- **Estado:** DRAFT
- **Tipo:** Tarea / Asignación
- **Puntaje sugerido:** 10

---

## Recursos de apoyo

### Presentación de la sesión

Tipo: Presentación interactiva en línea
Propósito: [Propósito breve orientado a la actividad.]
Enlace: [URL completa](URL completa)

### Guía del tema

Tipo: Guía de estudio en línea
Propósito: [Propósito breve.]
Enlace: [URL completa](URL completa)

### Versión imprimible del tema

Tipo: Documento imprimible
Propósito: [Propósito breve.]
Enlace: [URL completa](URL completa)

### Roadmap docente imprimible

Tipo: Guía docente
Propósito: [Propósito breve.]
Enlace: [URL completa](URL completa)

### [Recursos adicionales específicos de la actividad, si aplica]

Tipo: [Tipo]
Propósito: [Propósito breve.]
Enlace: [URL](URL)

---

## Actividad de la clase: Nombre operativo de la actividad
   ← Para actividades asincrónicas: ## Actividad de la clase: Nombre

[Párrafo introductorio breve de contexto, si corresponde.]

1. **[Paso 1 en negrita]:** instrucción concreta.
2. **[Paso 2 en negrita]:** instrucción concreta.
3. [...]

---

## Evidencia esperada

[Descripción en una o dos frases de qué debe entregar el estudiante.]

**Criterios:** [criterio 1], [criterio 2], [criterio 3 y siguientes].
   ← Para criterios más extensos usar lista con guion:
**Criterios:**
- [Criterio 1.]
- [Criterio 2.]
- [...]
```

Reglas del archivo `actividad-${input:fecha}.md`:

- El H1 usa `# Actividad de la clase:` para actividades sincrónicas y `# Actividad asincrónica:` para tareas HAA.
- Los metadatos van en tres líneas separadas con negrita. La fecha en formato "DD de mes de YYYY".
- Separadores `---` entre secciones principales.
- `## Objetivo de la clase` usa el mismo objetivo que el classroom. Para actividades asincrónicas usar `## Objetivo de la actividad` con objetivo propio de la tarea, seguido de la nota HAA en blockquote.
- `## Publicación sugerida en Google Classroom` es lista de viñetas con negrita: `**Tema:**`, `**Estado:**`, `**Tipo:**`, `**Puntaje sugerido:**`. Se incluye **solo en este archivo**, no en el classroom.
- `## Recursos de apoyo` contiene los recursos necesarios para que el estudiante realice la actividad: siempre incluir presentación, guía, imprimible y roadmap del tema. Agregar recursos adicionales específicos si la actividad lo requiere (herramientas, checklist, etc.).
- `## Actividad de la clase: Nombre` — el nombre en el H2 debe coincidir con el H1. El CLI parsea este H2 para extraer el título de la tarea.
- Las instrucciones van numeradas. Los títulos de cada paso van en negrita cuando son sustantivos (ej. `**Titular del hero section:**`).
- `## Evidencia esperada` cierra siempre con `**Criterios:**` seguido de lista o párrafo breve.
- **No incluir** la lista de recursos de clase ni la sección `## Contenidos de la sesión`; eso va en `classroom-${input:fecha}.md`.
- **No incluir** sección `## Próxima sesión`.

---

Reglas adicionales para `salidaGoogleClassroomDocs`:

- Usa texto plano estructurado. No uses etiquetas HTML, tablas ni bloques de código.
- El CLI parsea el H2 `## Actividad de la clase: Nombre` para extraer el título de la tarea. El CLI elimina el prefijo `"Actividad de la clase:"` y antepone `"Actividad: "`, resultando en `"Actividad: Nombre"` en Google Classroom. Usa este H2 exacto.
- Cuando incluyas enlaces en estos archivos, preséntalos con esta forma: `Enlace: [URL completa](URL completa)`.
- Si `urlBaseSitio` está disponible, construye enlaces absolutos usando esa base. Para construir los enlaces internos del curso:
  - guía del tema: `${urlBaseSitio}/unidad${input:unidad}/tema${input:tema}`
  - presentación: `${urlBaseSitio}/presentacion/unidad${input:unidad}/tema${input:tema}`
  - imprimible: `${urlBaseSitio}/imprimir/unidad${input:unidad}/tema${input:tema}`
  - roadmap docente: `${urlBaseSitio}/imprimir/roadmap/unidad${input:unidad}/tema${input:tema}/roadmap-${input:fecha}`
- No incluyas bibliografía extensa ni desarrollo completo del roadmap; prioriza usabilidad para el estudiante.
- Usa siempre el nombre Google Classroom y evita referirte a otras plataformas de aula virtual.

---

- Toda bibliografía debe quedar en APA 7.ª edición.
- No inventes referencias. Si falta información bibliográfica, márcala como pendiente de validación.

Formato de salida:

1. Ficha inicial de la clase con:
   - Asignatura
   - Unidad
   - Tema
   - Número de sesión (según sílabo)
   - Tema oficial del sílabo para esa sesión
   - Capacidad declarada en el sílabo para esa sesión
   - Resultado de aprendizaje de la unidad al que contribuye
   - Tipo de evidencia esperada para la unidad
   - Horas: HD / HP / HAA (según tabla del sílabo)
   - Fecha
   - Profesor
   - Duración
   - Modalidad
   - Tipo de clase
   - Componentes de evaluación que cubre la clase (proyectos / talleres / participación / asincrónico)
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
   - Referencia de la bibliografía oficial del sílabo más pertinente al tema de la sesión
   - Fuente académica complementaria (UNACH u otra fuente confiable)
   - Recurso web de apoyo
   - Video o recurso audiovisual útil
   - Recurso para profundización docente
   - Enlace o recurso oficial listado en el sílabo (sección "Enlaces de Internet") si aplica al tema
9. Nota sobre la presentación: el contenido de las diapositivas se genera dentro del campo `presentationBlocks` de `salidaWeb` y se escribe en `src/data/syllabus.ts`. La URL de la presentación en la web es `https://web-design-itsae.netlify.app/presentacion/unidad${input:unidad}/tema${input:tema}`.
10. `salidaWeb` con bloques listos para el contenido web actual:
    - panorama
    - objetivos
    - ideasClave
    - actividad
    - evidencia
    - herramientas
    - presentationBlocks
11. `salidaGoogleClassroomDocs` en Markdown, dos archivos separados listos para `docs/`:

    **Archivo 1 — Material** (`classroom-${input:fecha}.md`): siguiendo la estructura canónica definida arriba.

    **Archivo 2 — Tarea/Assignment** (`actividad-${input:fecha}.md`): siguiendo la estructura canónica definida arriba.

12. Indicación breve de uso:
    - Qué parte conviene publicar en la web
    - Qué parte conviene conservar solo en `docs`
    - Qué parte conviene sincronizar con Google Classroom usando `pnpm classroom sync-classes COURSE_ID`
    - Recordar que para actualizar ítems ya existentes en Classroom se usa `pnpm classroom sync-classes COURSE_ID --update`

13. Bibliografía en APA 7.ª edición.
14. Recomendación final para el docente sobre cómo hacer que la clase deje mayor recordación en los estudiantes.

Si la fuente UNACH proporcionada o la búsqueda por defecto no son suficientes para sostener la parte académica con bibliografía pertinente y verificable, solicita más datos antes de cerrar la respuesta.

Si `modoWeb` indica reemplazo, redacta los bloques web con criterio de sustitución completa del contenido anterior. Si indica convivencia, redacta los bloques como propuesta ampliada sin asumir reemplazo automático.

Si `modoDocs` pide ambos formatos, entrega primero `salidaDocs` y luego `salidaWeb`. Si pide solo resumen docente, conserva la estructura Markdown pero reduce el detalle operativo a lo esencial.

Si `modoGoogleClassroom` pide ambos formatos, entrega `salidaGoogleClassroomDocs` completa. Si pide solo resumen de recursos, conserva objetivo, recursos enlazados, actividad y evidencia esenciales.
