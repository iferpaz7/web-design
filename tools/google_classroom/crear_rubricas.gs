/**
 * crear_rubricas.gs
 * Google Apps Script — Diseño Web para Marketing Digital · ITSAE
 *
 * Crea las rubricas directamente en cada tarea de Classroom usando
 * la API avanzada de Google Classroom desde Apps Script.
 *
 * INSTRUCCIONES:
 * 1. Pega este codigo en Apps Script (script.google.com).
 * 2. En el menu izquierdo: "Servicios" (+) -> busca "Google Classroom API" -> agregar.
 * 3. Guarda con Ctrl+S.
 * 4. Ejecuta primero "verificarElegibilidad" para confirmar que tu cuenta puede crear rubricas.
 * 5. Si es elegible, ejecuta "crearTodasLasRubricas".
 *
 * Si no eres elegible (Education Plus requerido para la API),
 * ejecuta "crearRubricaManual_A" etc. para ver las instrucciones paso a paso.
 *
 * IDs de las tareas (curso 798151026377):
 *   798150892743  Brief inicial de campana           -> Rubrica B
 *   798151054081  Ficha comparativa de UX/UI         -> Rubrica A
 *   798150872384  Rediseno guiado del hero            -> Rubrica B
 *   867538046698  Auditoria visual comparativa        -> Rubrica E
 *   798150945255  Auditoria de accesibilidad          -> Rubrica A
 *   798150939940  Ficha de usuario y mensaje central  -> Rubrica B
 *   867756696168  Analisis de paginas de referencia   -> Rubrica E
 *   798150848759  Mapa de Secciones Guiado            -> Rubrica C
 *   867536502656  Copy persuasivo para tu proyecto    -> Rubrica C
 *   867657302501  Prototipo navegable                 -> Rubrica D
 */

var COURSE_ID = '798151026377';

// Mapeo tarea -> rubrica
var ASIGNACIONES = [
  { id: '798150892743', nombre: 'Brief inicial de campana',          rubrica: 'B' },
  { id: '798151054081', nombre: 'Ficha comparativa de UX/UI',        rubrica: 'A' },
  { id: '798150872384', nombre: 'Rediseno guiado del hero',           rubrica: 'B' },
  { id: '867538046698', nombre: 'Auditoria visual comparativa',       rubrica: 'E' },
  { id: '798150945255', nombre: 'Auditoria de accesibilidad',         rubrica: 'A' },
  { id: '798150939940', nombre: 'Ficha de usuario y mensaje central', rubrica: 'B' },
  { id: '867756696168', nombre: 'Analisis de paginas de referencia',  rubrica: 'E' },
  { id: '798150848759', nombre: 'Mapa de Secciones Guiado',           rubrica: 'C' },
  { id: '867536502656', nombre: 'Copy persuasivo para tu proyecto',   rubrica: 'C' },
  { id: '867657302501', nombre: 'Prototipo navegable',                rubrica: 'D' }
];

// ─── Definicion de criterios por rubrica ─────────────────────────────────────

function getCriterios(tipoRubrica) {
  var niveles_base = [
    { title: 'Excelente',     description: 'Cumple el criterio con precision y coherencia en todos sus elementos.', points: 2.5 },
    { title: 'Satisfactorio', description: 'Cumple el criterio con errores menores o elementos levemente incompletos.', points: 1.75 },
    { title: 'En desarrollo', description: 'Cumple el criterio de forma parcial; hay elementos importantes faltantes o incorrectos.', points: 1.0 },
    { title: 'Insuficiente',  description: 'No cumple el criterio o el entregable esta en blanco.', points: 0 }
  ];

  if (tipoRubrica === 'A') {
    return [
      { title: 'Identificacion de problemas',
        description: 'Detecta problemas concretos y los vincula a principios del tema.',
        levels: [
          { title: 'Excelente',     description: 'Detecta problema concreto vinculado a un principio o criterio revisado en clase.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Detecta el problema pero no vincula al principio correspondiente.', points: 1.75 },
          { title: 'En desarrollo', description: 'Menciona problemas pero sin claridad ni ejemplos concretos.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No identifica problemas o lo hace de forma tan vaga que no aporta informacion util.', points: 0 }
        ]
      },
      { title: 'Analisis o comparacion',
        description: 'Compara o analiza los dos casos con observaciones especificas y contrastadas.',
        levels: [
          { title: 'Excelente',     description: 'Compara los dos casos con observaciones especificas y diferencias concretas senaladas.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Analiza sin contraste claro entre casos; observaciones superficiales.', points: 1.75 },
          { title: 'En desarrollo', description: 'Describe sin analizar; los casos se tratan de forma independiente sin relacion.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Solo lista elementos sin ningun analisis.', points: 0 }
        ]
      },
      { title: 'Propuesta de mejora',
        description: 'La mejora es especifica, viable y argumentada con al menos un criterio del tema.',
        levels: [
          { title: 'Excelente',     description: 'Mejora especifica, viable y argumentada con al menos un criterio del tema.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Mejora pertinente pero sin argumentar o muy general.', points: 1.75 },
          { title: 'En desarrollo', description: 'Mejora vaga o sin relacion con el problema detectado.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No propone mejoras o las que propone son inaplicables.', points: 0 }
        ]
      },
      { title: 'Coherencia con el tema',
        description: 'Usa vocabulario y conceptos del tema con precision.',
        levels: [
          { title: 'Excelente',     description: 'Usa vocabulario y conceptos del tema con precision en todas las observaciones.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Usa algunos conceptos correctamente pero mezcla con lenguaje informal.', points: 1.75 },
          { title: 'En desarrollo', description: 'Lenguaje mayormente informal; poco dominio de conceptos del tema.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Sin uso de vocabulario del tema.', points: 0 }
        ]
      }
    ];
  }

  if (tipoRubrica === 'B') {
    return [
      { title: 'Completitud del entregable',
        description: 'Incluye todos los elementos solicitados en las instrucciones.',
        levels: [
          { title: 'Excelente',     description: 'Incluye todos los elementos solicitados sin excepcion.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Falta un elemento menor pero el entregable es funcional.', points: 1.75 },
          { title: 'En desarrollo', description: 'Faltan dos o mas elementos solicitados.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No responde a las instrucciones o esta en blanco.', points: 0 }
        ]
      },
      { title: 'Precision y especificidad',
        description: 'Los elementos son concretos, especificos y verificables; sin respuestas genericas.',
        levels: [
          { title: 'Excelente',     description: 'Todos los elementos son concretos, especificos y verificables.', points: 2.5 },
          { title: 'Satisfactorio', description: 'La mayoria son especificos pero alguno es generico o ambiguo.', points: 1.75 },
          { title: 'En desarrollo', description: 'Los elementos son mayormente genericos; no distinguen el proyecto del estudiante.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Las respuestas son genericas o irrelevantes para el proyecto del estudiante.', points: 0 }
        ]
      },
      { title: 'Aplicacion de criterios del tema',
        description: 'Aplica las formulas, estructuras o criterios del tema vistos en clase.',
        levels: [
          { title: 'Excelente',     description: 'Aplica correctamente todas las formulas y criterios del tema.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Aplica los criterios con errores menores o de forma incompleta.', points: 1.75 },
          { title: 'En desarrollo', description: 'No sigue la estructura ni los criterios del tema.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No aplica ningun criterio del tema; la entrega es improvisada.', points: 0 }
        ]
      },
      { title: 'Coherencia interna',
        description: 'Los elementos del entregable son coherentes entre si sin contradicciones.',
        levels: [
          { title: 'Excelente',     description: 'Todos los elementos se articulan con coherencia y sin contradicciones.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Hay coherencia general pero algun elemento no encaja bien con los demas.', points: 1.75 },
          { title: 'En desarrollo', description: 'Hay contradicciones notables entre los elementos del entregable.', points: 1.0 },
          { title: 'Insuficiente',  description: 'El entregable carece de coherencia interna.', points: 0 }
        ]
      }
    ];
  }

  if (tipoRubrica === 'C') {
    return [
      { title: 'Pertinencia estrategica',
        description: 'Responde al perfil de usuario, objetivo de campana y mensaje central del proyecto.',
        levels: [
          { title: 'Excelente',     description: 'Responde directamente al perfil de usuario, objetivo y mensaje central del proyecto integrador.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Responde al proyecto con desfases menores respecto al perfil o mensaje central previo.', points: 1.75 },
          { title: 'En desarrollo', description: 'Desconectado del perfil de usuario o del objetivo de campana del proyecto.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Sin relacion con el proyecto integrador; podria ser cualquier proyecto generico.', points: 0 }
        ]
      },
      { title: 'Aplicacion de la estructura del tema',
        description: 'Aplica correctamente los modelos del tema sin omisiones ni errores conceptuales.',
        levels: [
          { title: 'Excelente',     description: 'Aplica correctamente todos los modelos del tema sin omisiones ni errores conceptuales.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Aplica la estructura con uno o dos errores que no afectan la coherencia general.', points: 1.75 },
          { title: 'En desarrollo', description: 'Estructura parcialmente aplicada; faltan elementos clave o se aplican incorrectamente.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No aplica la estructura del tema; no hay un modelo reconocible.', points: 0 }
        ]
      },
      { title: 'Claridad y especificidad del contenido',
        description: 'Cada elemento tiene un proposito especifico y verificable; sin elementos vagos.',
        levels: [
          { title: 'Excelente',     description: 'Cada elemento tiene un proposito especifico y verificable; nada es vago o generico.', points: 2.5 },
          { title: 'Satisfactorio', description: 'La mayoria de elementos son especificos pero uno o dos son genericos o poco desarrollados.', points: 1.75 },
          { title: 'En desarrollo', description: 'Varios elementos son vagos o intercambiables; no reflejan el proyecto concreto.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Todos los elementos son genericos; no reflejan ningun proyecto especifico.', points: 0 }
        ]
      },
      { title: 'Respaldo bibliografico institucional',
        description: 'Cita al menos una fuente de la biblioteca UNACH que sustente una decision concreta del entregable, en APA 7.a o referencia verificable.',
        levels: [
          { title: 'Excelente',     description: 'Fuente institucional UNACH citada; sustenta una decision concreta del entregable; conexion explicita con el contenido.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Fuente institucional UNACH citada pero la conexion con el entregable es debil o la referencia esta incompleta.', points: 1.75 },
          { title: 'En desarrollo', description: 'Solo fuentes externas no institucionales; sin recurrir a biblioteca UNACH.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Sin fuentes citadas o fuente no existente o no verificable.', points: 0 }
        ]
      }
    ];
  }

  if (tipoRubrica === 'D') {
    return [
      { title: 'Completitud del prototipo',
        description: 'Incluye hero+CTA, beneficios, prueba social, segundo CTA y vistas movil y escritorio.',
        levels: [
          { title: 'Excelente',     description: 'Hero+CTA, beneficios, prueba social, segundo CTA antes del footer, vistas movil 375px y escritorio 1440px presentes.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Mayoria de elementos presentes; falta uno menor (solo una vista o falta prueba social).', points: 1.75 },
          { title: 'En desarrollo', description: 'Faltan dos o mas elementos obligatorios; prototipo claramente incompleto.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No incluye los elementos minimos evaluables o no hay entregable.', points: 0 }
        ]
      },
      { title: 'Flujo navegable hero-CTA-destino',
        description: 'El CTA del hero conecta con el formulario o pantalla de contacto sin confusion.',
        levels: [
          { title: 'Excelente',     description: 'CTA del hero conecta con formulario o contacto mediante interaccion basica; recorrido fluye sin confusion.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Flujo presente con una interrupcion menor; CTA existe pero no conectado, o destino solo indicado.', points: 1.75 },
          { title: 'En desarrollo', description: 'Flujo incompleto o confuso; el usuario no puede seguir el recorrido sin adivinar.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Sin flujo navegable; solo imagen estatica sin recorrido indicado.', points: 0 }
        ]
      },
      { title: 'Coherencia con el proyecto integrador',
        description: 'Refleja fielmente el mapa de secciones y el copy de las entregas previas.',
        levels: [
          { title: 'Excelente',     description: 'Refleja fielmente el mapa de secciones y el copy de las entregas previas del proyecto integrador.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Sigue el proyecto con desfases menores (seccion reordenada o copy levemente diferente).', points: 1.75 },
          { title: 'En desarrollo', description: 'No sigue el mapa de secciones ni el copy del proyecto; parece un diseno diferente.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Sin relacion con las entregas previas del proyecto integrador.', points: 0 }
        ]
      },
      { title: 'Respaldo bibliografico institucional',
        description: 'Cita al menos una fuente de la biblioteca UNACH que justifique una decision de diseno del prototipo, en APA 7.a o referencia verificable.',
        levels: [
          { title: 'Excelente',     description: 'Fuente institucional UNACH citada; justifica una decision de diseno o estructura del prototipo; conexion explicita.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Fuente institucional UNACH citada pero la conexion con las decisiones del prototipo es debil o la referencia incompleta.', points: 1.75 },
          { title: 'En desarrollo', description: 'Solo fuentes externas no institucionales; sin recurrir a biblioteca UNACH.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Sin fuentes citadas o fuente no existente o no verificable.', points: 0 }
        ]
      }
    ];
  }

  if (tipoRubrica === 'E') {
    return [
      { title: 'Identificacion del usuario o mensaje implicito',
        description: 'Describe con precision el usuario implicito o problema central de la pagina analizada.',
        levels: [
          { title: 'Excelente',     description: 'Descripcion especifica del usuario implicito o problema; refleja lectura cuidadosa de la pagina analizada.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Descripcion pertinente pero superficial o poco diferenciada del caso.', points: 1.75 },
          { title: 'En desarrollo', description: 'Descripcion generica; podria aplicar a cualquier pagina del sector.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No identifica usuario, problema ni mensaje central, o la respuesta esta en blanco.', points: 0 }
        ]
      },
      { title: 'Analisis con evidencia concreta',
        description: 'El analisis se ancla en elementos concretos y observables de la pagina analizada.',
        levels: [
          { title: 'Excelente',     description: 'Analisis anclado en elementos concretos de la pagina (titular, posicion del CTA, colores, etc.).', points: 2.5 },
          { title: 'Satisfactorio', description: 'Menciona elementos de la pagina pero sin especificar como o donde aparecen.', points: 1.75 },
          { title: 'En desarrollo', description: 'Analisis especulativo o no basado en elementos observables de la pagina.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Solo descripcion o transcripcion del contenido; sin analisis real.', points: 0 }
        ]
      },
      { title: 'Respaldo bibliografico institucional',
        description: 'Cita al menos una fuente de la biblioteca UNACH pertinente al tema, en APA 7.a o referencia verificable.',
        levels: [
          { title: 'Excelente',     description: 'Fuente institucional UNACH (eLibro, VuFind, Digitalia) citada correctamente; sustenta directamente el analisis o mejora propuesta.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Fuente institucional UNACH citada pero la conexion con el analisis es debil o la referencia esta incompleta.', points: 1.75 },
          { title: 'En desarrollo', description: 'Cita fuente externa no institucional como unico respaldo; sin recurrir a biblioteca UNACH.', points: 1.0 },
          { title: 'Insuficiente',  description: 'Sin fuentes citadas o fuente no existente o no verificable.', points: 0 }
        ]
      },
      { title: 'Entrega y formato',
        description: 'Entregada antes de la proxima sesion respondiendo todos los puntos solicitados.',
        levels: [
          { title: 'Excelente',     description: 'Entregada antes de la proxima sesion; responde los cuatro puntos con claridad y sin ambiguedad.', points: 2.5 },
          { title: 'Satisfactorio', description: 'Entregada a tiempo pero falta algun punto o alguna respuesta es muy breve.', points: 1.75 },
          { title: 'En desarrollo', description: 'Entregada con retraso o faltan dos o mas puntos solicitados.', points: 1.0 },
          { title: 'Insuficiente',  description: 'No entregada o entregada vacia.', points: 0 }
        ]
      }
    ];
  }

  return [];
}

// ─── Verificar elegibilidad ───────────────────────────────────────────────────

function verificarElegibilidad() {
  try {
    var url = 'https://classroom.googleapis.com/v1/userProfiles/me/checkUserCapability?capability=CREATE_RUBRIC&previewVersion=V1_20240930_PREVIEW';
    var options = {
      method: 'get',
      headers: { 'Authorization': 'Bearer ' + ScriptApp.getOAuthToken() },
      muteHttpExceptions: true
    };
    var response = UrlFetchApp.fetch(url, options);
    var code = response.getResponseCode();
    var body = JSON.parse(response.getContentText());
    Logger.log('Status: ' + code);
    Logger.log('Response: ' + JSON.stringify(body));
    if (body.allowed) {
      Logger.log('ELEGIBLE: puedes crear rubricas via API. Ejecuta crearTodasLasRubricas().');
    } else {
      Logger.log('NO ELEGIBLE: requiere licencia Education Plus para la API.');
      Logger.log('Usa crearRubricaManualmente() para instrucciones de creacion manual.');
    }
  } catch(e) {
    Logger.log('Error al verificar: ' + e.toString());
  }
}

// ─── Crear rubricas via API REST ──────────────────────────────────────────────

function crearTodasLasRubricas() {
  var token = ScriptApp.getOAuthToken();
  var errores = [];

  for (var i = 0; i < ASIGNACIONES.length; i++) {
    var asig = ASIGNACIONES[i];
    var criterios = getCriterios(asig.rubrica);

    var body = JSON.stringify({ criteria: criterios });
    var url = 'https://classroom.googleapis.com/v1/courses/' + COURSE_ID + '/courseWork/' + asig.id + '/rubrics';
    var options = {
      method: 'post',
      contentType: 'application/json',
      headers: { 'Authorization': 'Bearer ' + token },
      payload: body,
      muteHttpExceptions: true
    };

    var response = UrlFetchApp.fetch(url, options);
    var code = response.getResponseCode();
    var responseBody = response.getContentText();

    if (code === 200 || code === 201) {
      Logger.log('OK [' + asig.rubrica + '] ' + asig.nombre);
    } else {
      var err = 'ERROR ' + code + ' [' + asig.rubrica + '] ' + asig.nombre + ': ' + responseBody.substring(0, 150);
      Logger.log(err);
      errores.push(err);
    }

    Utilities.sleep(500); // evitar rate limit
  }

  if (errores.length === 0) {
    Logger.log('Todas las rubricas creadas correctamente.');
  } else {
    Logger.log(errores.length + ' errores. Ver log arriba.');
  }
}

// ─── Instrucciones para creacion manual ──────────────────────────────────────

function crearRubricaManualmente() {
  Logger.log('=== INSTRUCCIONES PARA CREAR RUBRICAS MANUALMENTE ===');
  Logger.log('');
  Logger.log('Para cada tarea en Classroom:');
  Logger.log('1. Abre la tarea y haz clic en los tres puntos (...)');
  Logger.log('2. Selecciona "Editar"');
  Logger.log('3. En la seccion de calificacion, haz clic en "+ Rubrica"');
  Logger.log('4. Selecciona "Crear nuevo"');
  Logger.log('5. Ingresa los 4 criterios con sus 4 niveles y puntajes:');
  Logger.log('   - Excelente: 2.5 pts');
  Logger.log('   - Satisfactorio: 1.75 pts');
  Logger.log('   - En desarrollo: 1.0 pts');
  Logger.log('   - Insuficiente: 0 pts');
  Logger.log('   Total: 10 pts por rubrica');
  Logger.log('');
  Logger.log('Despues de crear la primera rubrica de cada tipo,');
  Logger.log('usa "Usar una rubrica existente" para las siguientes tareas del mismo tipo.');
  Logger.log('');
  Logger.log('MAPEO:');
  for (var i = 0; i < ASIGNACIONES.length; i++) {
    Logger.log('  ' + ASIGNACIONES[i].nombre + ' -> Rubrica ' + ASIGNACIONES[i].rubrica);
  }
}
