/**
 * crear_rubricas.gs
 * Google Apps Script — Diseño Web para Marketing Digital · ITSAE
 *
 * Crea automáticamente cinco hojas de rúbrica en Google Drive con el formato
 * exacto que Google Classroom acepta para "Importar desde Hojas de cálculo".
 *
 * INSTRUCCIONES DE USO:
 * 1. Abre https://script.google.com y crea un proyecto nuevo.
 * 2. Pega este código completo en el editor.
 * 3. Haz clic en "Ejecutar" > selecciona la función "crearTodasLasRubricas".
 * 4. Acepta los permisos de Google Drive y Sheets cuando te lo pida.
 * 5. Al terminar, encontrarás 5 hojas nuevas en tu Google Drive con el
 *    prefijo "[Rúbrica]".
 * 6. En cada tarea de Classroom: botón "Rúbrica" → "Importar desde Hojas de
 *    cálculo" → selecciona la hoja correspondiente según el mapeo al final
 *    de este archivo.
 *
 * MAPEO ACTIVIDAD → RÚBRICA:
 * ─────────────────────────────────────────────────────────────────────────
 * Brief inicial de campaña            → B — Taller práctico
 * Ficha comparativa de UX/UI          → A — Taller analítico
 * Rediseño guiado del hero            → B — Taller práctico
 * Auditoría visual comparativa (HAA)  → E — Actividad asincrónica
 * Auditoría de accesibilidad          → A — Taller analítico
 * Ficha de usuario y mensaje central  → B — Taller práctico
 * Análisis de páginas de ref. (HAA)   → E — Actividad asincrónica
 * Mapa de secciones guiado            → C — Proyecto avance
 * Copy persuasivo para tu proyecto    → C — Proyecto avance
 * Prototipo navegable                 → D — Proyecto cierre
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Una vez creada una rúbrica en Classroom puedes reutilizarla en otras tareas
 * del mismo tipo con "Usar una rúbrica existente".
 */

// ─── Cabecera estándar que Classroom espera ──────────────────────────────────
const HEADERS = [
  'Criterion title',
  'Criterion description',
  'Level 1 title', 'Level 1 description', 'Level 1 points',
  'Level 2 title', 'Level 2 description', 'Level 2 points',
  'Level 3 title', 'Level 3 description', 'Level 3 points',
  'Level 4 title', 'Level 4 description', 'Level 4 points',
];

// ─── Definición de las 5 rúbricas ────────────────────────────────────────────

const RUBRICA_A = {
  nombre: '[Rúbrica] A — Taller analítico',
  criterios: [
    {
      titulo: 'Identificación de problemas',
      descripcion: 'Detecta problemas concretos y los vincula a principios del tema.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Detecta problema concreto vinculado a un principio o criterio revisado en clase.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Detecta el problema pero no vincula al principio correspondiente.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Menciona problemas pero sin claridad ni ejemplos concretos.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No identifica problemas o lo hace de forma tan vaga que no aporta información útil.', puntos: 0 },
      ],
    },
    {
      titulo: 'Análisis o comparación',
      descripcion: 'Compara o analiza los dos casos con observaciones específicas y contrastadas.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Compara los dos casos con observaciones específicas y diferencias concretas señaladas.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Analiza sin contraste claro entre casos; observaciones superficiales.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Describe sin analizar; los casos se tratan de forma independiente sin relación.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Solo lista elementos sin ningún análisis.', puntos: 0 },
      ],
    },
    {
      titulo: 'Propuesta de mejora',
      descripcion: 'La mejora es específica, viable y argumentada con al menos un criterio del tema.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Mejora específica, viable y argumentada con al menos un criterio del tema (UX, WCAG, jerarquía, etc.).', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Mejora pertinente pero sin argumentar o muy general.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Mejora vaga o sin relación con el problema detectado.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No propone mejoras o las que propone son inaplicables o irrelevantes.', puntos: 0 },
      ],
    },
    {
      titulo: 'Coherencia con el tema',
      descripcion: 'Usa vocabulario y conceptos del tema con precisión.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Usa vocabulario y conceptos del tema con precisión en todas las observaciones.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Usa algunos conceptos correctamente pero mezcla con lenguaje informal o impreciso.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Lenguaje mayormente informal; poco dominio de conceptos del tema.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin uso de vocabulario del tema.', puntos: 0 },
      ],
    },
  ],
};

const RUBRICA_B = {
  nombre: '[Rúbrica] B — Taller práctico',
  criterios: [
    {
      titulo: 'Completitud del entregable',
      descripcion: 'Incluye todos los elementos solicitados en las instrucciones.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Incluye todos los elementos solicitados sin excepción.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Falta un elemento menor pero el entregable es funcional.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Faltan dos o más elementos solicitados.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No responde a las instrucciones o está en blanco.', puntos: 0 },
      ],
    },
    {
      titulo: 'Precisión y especificidad',
      descripcion: 'Los elementos son concretos, específicos y verificables; sin respuestas genéricas.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Todos los elementos son concretos, específicos y verificables.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'La mayoría son específicos pero alguno es genérico o ambiguo.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Los elementos son mayormente genéricos; no distinguen el proyecto del estudiante.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Las respuestas son genéricas o irrelevantes para el proyecto del estudiante.', puntos: 0 },
      ],
    },
    {
      titulo: 'Aplicación de criterios del tema',
      descripcion: 'Aplica las fórmulas, estructuras o criterios del tema vistos en clase.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Aplica correctamente todas las fórmulas y criterios del tema.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Aplica los criterios con errores menores o de forma incompleta.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'No sigue la estructura ni los criterios del tema.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No aplica ningún criterio del tema; la entrega es improvisada.', puntos: 0 },
      ],
    },
    {
      titulo: 'Coherencia interna',
      descripcion: 'Los elementos del entregable son coherentes entre sí sin contradicciones.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Todos los elementos se articulan con coherencia y sin contradicciones.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Hay coherencia general pero algún elemento no encaja bien con los demás.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Hay contradicciones notables entre los elementos del entregable.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'El entregable carece de coherencia interna o sus elementos son incompatibles.', puntos: 0 },
      ],
    },
  ],
};

const RUBRICA_C = {
  nombre: '[Rúbrica] C — Proyecto integrador (avance)',
  criterios: [
    {
      titulo: 'Pertinencia estratégica',
      descripcion: 'Responde al perfil de usuario, objetivo de campaña y mensaje central del proyecto.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Responde directamente al perfil de usuario, objetivo y mensaje central del proyecto integrador.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Responde al proyecto con desfases menores respecto al perfil o mensaje central previo.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Desconectado del perfil de usuario o del objetivo de campaña del proyecto.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin relación con el proyecto integrador; podría ser cualquier proyecto genérico.', puntos: 0 },
      ],
    },
    {
      titulo: 'Aplicación de la estructura del tema',
      descripcion: 'Aplica correctamente los modelos del tema sin omisiones ni errores conceptuales.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Aplica correctamente todos los modelos del tema sin omisiones ni errores conceptuales.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Aplica la estructura con uno o dos errores que no afectan la coherencia general.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Estructura parcialmente aplicada; faltan elementos clave o se aplican incorrectamente.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No aplica la estructura del tema; no hay un modelo reconocible.', puntos: 0 },
      ],
    },
    {
      titulo: 'Claridad y especificidad del contenido',
      descripcion: 'Cada elemento tiene un propósito específico y verificable; sin elementos vagos.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Cada elemento tiene un propósito específico y verificable; nada es vago o genérico.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'La mayoría de elementos son específicos pero uno o dos son genéricos o poco desarrollados.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Varios elementos son vagos o intercambiables; no reflejan el proyecto concreto.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Todos los elementos son genéricos; no reflejan ningún proyecto específico.', puntos: 0 },
      ],
    },
    {
      titulo: 'Calidad de la redacción y presentación',
      descripcion: 'Clara, breve y escaneable; el formato facilita la lectura y revisión del docente.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Redacción clara, breve y escaneable; formato facilita la lectura; sin errores ortográficos relevantes.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Comprensible con algunas redundancias o inconsistencias de formato.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'La redacción dificulta la comprensión o el formato impide identificar los elementos evaluados.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Redacción confusa o entregable sin presentación legible.', puntos: 0 },
      ],
    },
  ],
};

const RUBRICA_D = {
  nombre: '[Rúbrica] D — Proyecto integrador (cierre de unidad)',
  criterios: [
    {
      titulo: 'Completitud del prototipo',
      descripcion: 'Incluye hero+CTA, beneficios, prueba social, segundo CTA y vistas móvil (375px) y escritorio (1440px).',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Hero con titular y CTA, beneficios, prueba social, segundo CTA antes del footer, y vistas móvil+escritorio presentes.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Mayoría de elementos presentes; falta uno menor (solo una vista o falta prueba social).', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Faltan dos o más elementos obligatorios; prototipo claramente incompleto.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No incluye los elementos mínimos evaluables o no hay entregable.', puntos: 0 },
      ],
    },
    {
      titulo: 'Flujo navegable hero → CTA → destino',
      descripcion: 'El CTA del hero conecta con el formulario o pantalla de contacto; el recorrido funciona sin confusión.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'CTA del hero conecta con formulario o contacto mediante interacción básica; recorrido fluye sin confusión.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Flujo presente con una interrupción menor; CTA presente pero no conectado, o destino solo indicado.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Flujo incompleto o confuso; el usuario no puede seguir el recorrido sin adivinar.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin flujo navegable; solo imagen estática sin recorrido indicado.', puntos: 0 },
      ],
    },
    {
      titulo: 'Coherencia con el proyecto integrador',
      descripcion: 'Refleja fielmente el mapa de secciones (U2T2) y el copy (U2T3) de las entregas previas.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Refleja fielmente el mapa de secciones y el copy de las entregas previas del proyecto integrador.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Sigue el proyecto con desfases menores (sección reordenada o copy levemente diferente).', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'No sigue el mapa de secciones ni el copy del proyecto; parece un diseño diferente.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin relación con las entregas previas del proyecto integrador.', puntos: 0 },
      ],
    },
    {
      titulo: 'Nota de validación con criterio propio',
      descripcion: 'Describe qué confirmó el prototipo, un ajuste realizado y reflexión propia sobre el recorrido.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Describe qué confirmó sobre el recorrido del usuario, menciona ajuste realizado y muestra criterio propio (no solo describe lo que hizo).', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Nota presente con ajuste mencionado pero descriptiva más que reflexiva.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Nota superficial ("todo quedó bien") o sin mencionar ningún ajuste realizado.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No hay nota de validación.', puntos: 0 },
      ],
    },
  ],
};

const RUBRICA_E = {
  nombre: '[Rúbrica] E — Actividad asincrónica (HAA)',
  criterios: [
    {
      titulo: 'Identificación del usuario o mensaje implícito',
      descripcion: 'Describe con precisión el usuario implícito o problema central de la página analizada.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Descripción específica del usuario implícito o problema; refleja lectura cuidadosa de la página analizada.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Descripción pertinente pero superficial o poco diferenciada del caso.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Descripción genérica; podría aplicar a cualquier página del sector.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No identifica usuario, problema ni mensaje central, o la respuesta está en blanco.', puntos: 0 },
      ],
    },
    {
      titulo: 'Análisis con evidencia concreta',
      descripcion: 'El análisis se ancla en elementos concretos y observables de la página analizada.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Análisis anclado en elementos concretos de la página (titular, posición del CTA, colores, etc.); observación directa verificable.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Menciona elementos de la página pero sin especificar cómo o dónde aparecen.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Análisis especulativo o no basado en elementos observables de la página.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Solo descripción o transcripción del contenido; sin análisis real.', puntos: 0 },
      ],
    },
    {
      titulo: 'Argumentación con criterios del tema',
      descripcion: 'La mejora o criterio detectado está fundamentado con principios o conceptos del tema.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Mejora o criterio fundamentado con al menos un principio o concepto del tema (intención de visita, jerarquía, mensaje central, objeción, etc.).', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Mejora o criterio existe pero sin argumentar con conceptos del tema.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Mejora vaga o sin relación con el análisis previo.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin propuesta de mejora ni criterio detectado.', puntos: 0 },
      ],
    },
    {
      titulo: 'Entrega y formato',
      descripcion: 'Entregada antes de la próxima sesión respondiendo todos los puntos solicitados con claridad.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Entregada antes de la próxima sesión sincrónica; responde los cuatro puntos solicitados con claridad y sin ambigüedad.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Entregada a tiempo pero falta algún punto o alguna respuesta es muy breve.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Entregada con retraso o faltan dos o más puntos solicitados.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No entregada o entregada vacía.', puntos: 0 },
      ],
    },
  ],
};

// ─── Función principal ────────────────────────────────────────────────────────

/**
 * Punto de entrada. Crea los 5 Google Sheets de rúbrica en tu Drive.
 * Ejecuta esta función desde el menú "Ejecutar" del editor de Apps Script.
 */
function crearTodasLasRubricas() {
  const rubricas = [RUBRICA_A, RUBRICA_B, RUBRICA_C, RUBRICA_D, RUBRICA_E];
  const urls = [];

  for (const rubrica of rubricas) {
    const url = crearHojaRubrica(rubrica);
    urls.push({ nombre: rubrica.nombre, url });
    Logger.log(`✅ ${rubrica.nombre} → ${url}`);
  }

  // Muestra un resumen en un diálogo
  let mensaje = 'Rúbricas creadas en Google Drive:\n\n';
  for (const { nombre, url } of urls) {
    mensaje += `• ${nombre}\n  ${url}\n\n`;
  }
  SpreadsheetApp.getUi().alert('Rúbricas creadas', mensaje, SpreadsheetApp.getUi().ButtonSet.OK);
}

// ─── Función de creación de una hoja ────────────────────────────────────────

/**
 * Crea un Google Sheet con el formato que Classroom requiere para importar.
 * @param {object} rubrica - Objeto con nombre y criterios de la rúbrica.
 * @returns {string} URL del Google Sheet creado.
 */
function crearHojaRubrica(rubrica) {
  // Crear la hoja
  const ss = SpreadsheetApp.create(rubrica.nombre);
  const sheet = ss.getActiveSheet();
  sheet.setName('Rúbrica');

  // Fila de cabecera
  sheet.appendRow(HEADERS);

  // Una fila por criterio
  for (const criterio of rubrica.criterios) {
    const fila = [criterio.titulo, criterio.descripcion];

    // Hasta 4 niveles (Classroom acepta máx. 10, pero usamos 4)
    for (let i = 0; i < 4; i++) {
      const nivel = criterio.niveles[i];
      if (nivel) {
        fila.push(nivel.titulo, nivel.descripcion, nivel.puntos);
      } else {
        fila.push('', '', '');
      }
    }

    sheet.appendRow(fila);
  }

  // Formato visual: cabecera en negrita, columnas anchas
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4a86e8');
  headerRange.setFontColor('#ffffff');

  // Ajustar anchos de columna
  sheet.setColumnWidth(1, 220);  // Criterion title
  sheet.setColumnWidth(2, 280);  // Criterion description
  for (let col = 3; col <= HEADERS.length; col += 3) {
    sheet.setColumnWidth(col, 160);      // Level title
    sheet.setColumnWidth(col + 1, 300);  // Level description
    sheet.setColumnWidth(col + 2, 80);   // Level points
  }

  // Congelar la primera fila
  sheet.setFrozenRows(1);

  // Devolver la URL
  return ss.getUrl();
}
