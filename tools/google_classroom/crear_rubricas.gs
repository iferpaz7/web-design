/**
 * crear_rubricas.gs
 * Google Apps Script — Diseño Web para Marketing Digital · ITSAE
 *
 * Crea 5 hojas de rúbrica en Drive copiando el template oficial de Classroom
 * y rellenándolo con los criterios del curso.
 *
 * INSTRUCCIONES:
 * 1. Borra todo el código de tu proyecto de Apps Script.
 * 2. Pega este archivo completo.
 * 3. Guarda (Ctrl+S).
 * 4. Selecciona "crearTodasLasRubricas" en el dropdown y haz clic en ▶️ Ejecutar.
 * 5. Acepta los permisos cuando te lo pida.
 * 6. Revisa el Log de ejecución para ver los links de las 5 hojas.
 * 7. En cada tarea de Classroom: "+ Rúbrica" → "Importar desde Hojas de cálculo".
 *
 * MAPEO ACTIVIDAD → RÚBRICA:
 *   Brief inicial de campaña            → B — Taller práctico
 *   Ficha comparativa de UX/UI          → A — Taller analítico
 *   Rediseño guiado del hero            → B — Taller práctico
 *   Auditoría visual comparativa (HAA)  → E — Actividad asincrónica
 *   Auditoría de accesibilidad          → A — Taller analítico
 *   Ficha de usuario y mensaje central  → B — Taller práctico
 *   Análisis de páginas de ref. (HAA)   → E — Actividad asincrónica
 *   Mapa de secciones guiado            → C — Proyecto avance
 *   Copy persuasivo para tu proyecto    → C — Proyecto avance
 *   Prototipo navegable                 → D — Proyecto cierre
 */

// Template oficial de Google Classroom Rubric (Alice Keeler)
// Ya tiene las 2 filas ocultas de metadatos que Classroom requiere
var TEMPLATE_ID = '1_CIAczRTEmQaF0qQFSadbiZgUnsa2yK_Xp2WZGT3Ntg';

// ─── Rúbricas ────────────────────────────────────────────────────────────────

var RUBRICA_A = {
  nombre: '[Rubrica] A - Taller analitico',
  criterios: [
    {
      titulo: 'Identificacion de problemas',
      descripcion: 'Detecta problemas concretos y los vincula a principios del tema.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Detecta problema concreto vinculado a un principio o criterio revisado en clase.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Detecta el problema pero no vincula al principio correspondiente.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Menciona problemas pero sin claridad ni ejemplos concretos.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No identifica problemas o lo hace de forma tan vaga que no aporta informacion util.', puntos: 0 }
      ]
    },
    {
      titulo: 'Analisis o comparacion',
      descripcion: 'Compara o analiza los dos casos con observaciones especificas y contrastadas.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Compara los dos casos con observaciones especificas y diferencias concretas senaladas.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Analiza sin contraste claro entre casos; observaciones superficiales.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Describe sin analizar; los casos se tratan de forma independiente sin relacion.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Solo lista elementos sin ningun analisis.', puntos: 0 }
      ]
    },
    {
      titulo: 'Propuesta de mejora',
      descripcion: 'La mejora es especifica, viable y argumentada con al menos un criterio del tema.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Mejora especifica, viable y argumentada con al menos un criterio del tema (UX, WCAG, jerarquia, etc.).', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Mejora pertinente pero sin argumentar o muy general.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Mejora vaga o sin relacion con el problema detectado.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No propone mejoras o las que propone son inaplicables.', puntos: 0 }
      ]
    },
    {
      titulo: 'Coherencia con el tema',
      descripcion: 'Usa vocabulario y conceptos del tema con precision.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Usa vocabulario y conceptos del tema con precision en todas las observaciones.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Usa algunos conceptos correctamente pero mezcla con lenguaje informal.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Lenguaje mayormente informal; poco dominio de conceptos del tema.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin uso de vocabulario del tema.', puntos: 0 }
      ]
    }
  ]
};

var RUBRICA_B = {
  nombre: '[Rubrica] B - Taller practico',
  criterios: [
    {
      titulo: 'Completitud del entregable',
      descripcion: 'Incluye todos los elementos solicitados en las instrucciones.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Incluye todos los elementos solicitados sin excepcion.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Falta un elemento menor pero el entregable es funcional.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Faltan dos o mas elementos solicitados.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No responde a las instrucciones o esta en blanco.', puntos: 0 }
      ]
    },
    {
      titulo: 'Precision y especificidad',
      descripcion: 'Los elementos son concretos, especificos y verificables; sin respuestas genericas.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Todos los elementos son concretos, especificos y verificables.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'La mayoria son especificos pero alguno es generico o ambiguo.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Los elementos son mayormente genericos; no distinguen el proyecto del estudiante.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Las respuestas son genericas o irrelevantes para el proyecto del estudiante.', puntos: 0 }
      ]
    },
    {
      titulo: 'Aplicacion de criterios del tema',
      descripcion: 'Aplica las formulas, estructuras o criterios del tema vistos en clase.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Aplica correctamente todas las formulas y criterios del tema.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Aplica los criterios con errores menores o de forma incompleta.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'No sigue la estructura ni los criterios del tema.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No aplica ningun criterio del tema; la entrega es improvisada.', puntos: 0 }
      ]
    },
    {
      titulo: 'Coherencia interna',
      descripcion: 'Los elementos del entregable son coherentes entre si sin contradicciones.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Todos los elementos se articulan con coherencia y sin contradicciones.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Hay coherencia general pero algun elemento no encaja bien con los demas.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Hay contradicciones notables entre los elementos del entregable.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'El entregable carece de coherencia interna.', puntos: 0 }
      ]
    }
  ]
};

var RUBRICA_C = {
  nombre: '[Rubrica] C - Proyecto integrador (avance)',
  criterios: [
    {
      titulo: 'Pertinencia estrategica',
      descripcion: 'Responde al perfil de usuario, objetivo de campana y mensaje central del proyecto.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Responde directamente al perfil de usuario, objetivo y mensaje central del proyecto integrador.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Responde al proyecto con desfases menores respecto al perfil o mensaje central previo.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Desconectado del perfil de usuario o del objetivo de campana del proyecto.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin relacion con el proyecto integrador; podria ser cualquier proyecto generico.', puntos: 0 }
      ]
    },
    {
      titulo: 'Aplicacion de la estructura del tema',
      descripcion: 'Aplica correctamente los modelos del tema sin omisiones ni errores conceptuales.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Aplica correctamente todos los modelos del tema sin omisiones ni errores conceptuales.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Aplica la estructura con uno o dos errores que no afectan la coherencia general.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Estructura parcialmente aplicada; faltan elementos clave o se aplican incorrectamente.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No aplica la estructura del tema; no hay un modelo reconocible.', puntos: 0 }
      ]
    },
    {
      titulo: 'Claridad y especificidad del contenido',
      descripcion: 'Cada elemento tiene un proposito especifico y verificable; sin elementos vagos.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Cada elemento tiene un proposito especifico y verificable; nada es vago o generico.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'La mayoria de elementos son especificos pero uno o dos son genericos o poco desarrollados.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Varios elementos son vagos o intercambiables; no reflejan el proyecto concreto.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Todos los elementos son genericos; no reflejan ningun proyecto especifico.', puntos: 0 }
      ]
    },
    {
      titulo: 'Calidad de la redaccion y presentacion',
      descripcion: 'Clara, breve y escaneable; el formato facilita la lectura y revision del docente.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Redaccion clara, breve y escaneable; formato facilita la lectura; sin errores ortograficos relevantes.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Comprensible con algunas redundancias o inconsistencias de formato.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'La redaccion dificulta la comprension o el formato impide identificar los elementos evaluados.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Redaccion confusa o entregable sin presentacion legible.', puntos: 0 }
      ]
    }
  ]
};

var RUBRICA_D = {
  nombre: '[Rubrica] D - Proyecto integrador (cierre de unidad)',
  criterios: [
    {
      titulo: 'Completitud del prototipo',
      descripcion: 'Incluye hero+CTA, beneficios, prueba social, segundo CTA y vistas movil y escritorio.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Hero+CTA, beneficios, prueba social, segundo CTA antes del footer, vistas movil (375px) y escritorio (1440px) presentes.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Mayoria de elementos presentes; falta uno menor (solo una vista o falta prueba social).', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Faltan dos o mas elementos obligatorios; prototipo claramente incompleto.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No incluye los elementos minimos evaluables o no hay entregable.', puntos: 0 }
      ]
    },
    {
      titulo: 'Flujo navegable hero-CTA-destino',
      descripcion: 'El CTA del hero conecta con el formulario o pantalla de contacto sin confusion.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'CTA del hero conecta con formulario o contacto mediante interaccion basica; recorrido fluye sin confusion.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Flujo presente con una interrupcion menor; CTA existe pero no conectado, o destino solo indicado.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Flujo incompleto o confuso; el usuario no puede seguir el recorrido sin adivinar.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin flujo navegable; solo imagen estatica sin recorrido indicado.', puntos: 0 }
      ]
    },
    {
      titulo: 'Coherencia con el proyecto integrador',
      descripcion: 'Refleja fielmente el mapa de secciones (U2T2) y el copy (U2T3) de las entregas previas.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Refleja fielmente el mapa de secciones y el copy de las entregas previas del proyecto integrador.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Sigue el proyecto con desfases menores (seccion reordenada o copy levemente diferente).', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'No sigue el mapa de secciones ni el copy del proyecto; parece un diseno diferente.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin relacion con las entregas previas del proyecto integrador.', puntos: 0 }
      ]
    },
    {
      titulo: 'Nota de validacion con criterio propio',
      descripcion: 'Describe que confirmo el prototipo, un ajuste realizado y reflexion propia sobre el recorrido.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Describe que confirmo sobre el recorrido, menciona ajuste realizado y muestra criterio propio.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Nota presente con ajuste mencionado pero descriptiva mas que reflexiva.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Nota superficial o sin mencionar ningun ajuste realizado.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No hay nota de validacion.', puntos: 0 }
      ]
    }
  ]
};

var RUBRICA_E = {
  nombre: '[Rubrica] E - Actividad asincronica (HAA)',
  criterios: [
    {
      titulo: 'Identificacion del usuario o mensaje implicito',
      descripcion: 'Describe con precision el usuario implicito o problema central de la pagina analizada.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Descripcion especifica del usuario implicito o problema; refleja lectura cuidadosa de la pagina analizada.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Descripcion pertinente pero superficial o poco diferenciada del caso.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Descripcion generica; podria aplicar a cualquier pagina del sector.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No identifica usuario, problema ni mensaje central, o la respuesta esta en blanco.', puntos: 0 }
      ]
    },
    {
      titulo: 'Analisis con evidencia concreta',
      descripcion: 'El analisis se ancla en elementos concretos y observables de la pagina analizada.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Analisis anclado en elementos concretos de la pagina (titular, posicion del CTA, colores, etc.).', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Menciona elementos de la pagina pero sin especificar como o donde aparecen.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Analisis especulativo o no basado en elementos observables de la pagina.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Solo descripcion o transcripcion del contenido; sin analisis real.', puntos: 0 }
      ]
    },
    {
      titulo: 'Argumentacion con criterios del tema',
      descripcion: 'La mejora o criterio detectado esta fundamentado con principios o conceptos del tema.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Mejora o criterio fundamentado con al menos un principio o concepto del tema.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Mejora o criterio existe pero sin argumentar con conceptos del tema.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Mejora vaga o sin relacion con el analisis previo.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'Sin propuesta de mejora ni criterio detectado.', puntos: 0 }
      ]
    },
    {
      titulo: 'Entrega y formato',
      descripcion: 'Entregada antes de la proxima sesion respondiendo todos los puntos solicitados con claridad.',
      niveles: [
        { titulo: 'Excelente', descripcion: 'Entregada antes de la proxima sesion; responde los cuatro puntos solicitados con claridad y sin ambiguedad.', puntos: 2.5 },
        { titulo: 'Satisfactorio', descripcion: 'Entregada a tiempo pero falta algun punto o alguna respuesta es muy breve.', puntos: 1.75 },
        { titulo: 'En desarrollo', descripcion: 'Entregada con retraso o faltan dos o mas puntos solicitados.', puntos: 1 },
        { titulo: 'Insuficiente', descripcion: 'No entregada o entregada vacia.', puntos: 0 }
      ]
    }
  ]
};

// ─── Función principal ────────────────────────────────────────────────────────

function crearTodasLasRubricas() {
  var rubricas = [RUBRICA_A, RUBRICA_B, RUBRICA_C, RUBRICA_D, RUBRICA_E];

  for (var i = 0; i < rubricas.length; i++) {
    var url = crearHojaRubrica(rubricas[i]);
    Logger.log('OK: ' + rubricas[i].nombre + ' -> ' + url);
  }

  Logger.log('Listo. Usa cada sheet en Classroom: "+ Rubrica" > "Importar desde Hojas de calculo".');
}

// ─── Crear hoja copiando el template oficial ─────────────────────────────────

function crearHojaRubrica(rubrica) {
  // Copiar el template oficial (ya tiene las filas ocultas de metadatos)
  var copiedFile = DriveApp.getFileById(TEMPLATE_ID).makeCopy(rubrica.nombre);
  var ss = SpreadsheetApp.openById(copiedFile.getId());
  var sheet = ss.getActiveSheet();

  // Limpiar las filas de ejemplo del template (filas 3 en adelante)
  var lastRow = sheet.getLastRow();
  if (lastRow >= 3) {
    sheet.getRange(3, 1, lastRow - 2, sheet.getLastColumn()).clearContent();
  }

  // Insertar criterios desde la fila 3
  // Columna A = titulo criterio, B = descripcion criterio
  // Columnas C+ = titulo nivel, descripcion nivel, puntos (grupos de 3, orden descendente)
  var fila = 3;
  for (var c = 0; c < rubrica.criterios.length; c++) {
    var criterio = rubrica.criterios[c];
    var rowData = [criterio.titulo, criterio.descripcion];

    // Niveles en orden DESCENDENTE de puntos (requerido por Classroom)
    var niveles = criterio.niveles.slice().sort(function(a, b) { return b.puntos - a.puntos; });
    for (var n = 0; n < niveles.length; n++) {
      rowData.push(niveles[n].titulo, niveles[n].descripcion, niveles[n].puntos);
    }

    sheet.getRange(fila, 1, 1, rowData.length).setValues([rowData]);
    fila++;
  }

  return ss.getUrl();
}
