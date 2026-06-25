export type UnitColor = 'amber' | 'blue' | 'emerald' | 'purple';
export type IconName = 'BookOpen' | 'Monitor' | 'Palette' | 'Zap';

export interface SyllabusPresentationBlock {
  title: string;
  items: string[];
}

export interface SyllabusTema {
  numero: number;
  titulo: string;
  descripcion: string;
  href: string;
  disponible: boolean;
  panorama: string;
  objetivos: string[];
  ideasClave: string[];
  actividad: string;
  evidencia: string;
  herramientas: string[];
  presentationBlocks?: SyllabusPresentationBlock[];
}

export interface SyllabusUnit {
  numero: number;
  titulo: string;
  descripcion: string;
  color: UnitColor;
  iconName: IconName;
  capacidad: string;
  evidencia: string;
  temas: SyllabusTema[];
}

export const syllabusUnits: SyllabusUnit[] = [
  {
    numero: 1,
    titulo: 'Estrategia digital, UX/UI y fundamentos de conversión',
    descripcion:
      'Comprende cómo una página web organiza la atención, la comprensión y la acción del usuario.',
    color: 'amber',
    iconName: 'BookOpen',
    capacidad:
      'Comprender el rol de la página web dentro de una campaña y estructurarla para guiar la atención, la comprensión y la acción del usuario.',
    evidencia:
      'Brief de campaña, mapa de estructura y lista de cotejo de calidad.',
    temas: [
      {
        numero: 1,
        titulo:
          'Rol de la página web en la estrategia de marketing digital y en el embudo de conversión',
        descripcion:
          'Cómo una página de campaña se conecta con objetivos, públicos y decisiones medibles.',
        href: '/unidad1/tema1',
        disponible: true,
        panorama:
          'Este tema introduce la lógica estratégica del curso: una página web no es una pieza aislada, sino una solución digital que debe responder a objetivos concretos de captación, interacción o conversión. El análisis parte de la relación entre objetivo, mensaje, audiencia y acción esperada.',
        objetivos: [
          'Reconocer el papel de la página web dentro de una estrategia de marketing digital.',
          'Relacionar objetivos de campaña con acciones medibles del usuario.',
          'Distinguir entre una página informativa y una página orientada a conversión.'
        ],
        ideasClave: [
          'Toda página debe responder a un objetivo principal y a una audiencia definida.',
          'La conversión depende de claridad, pertinencia y dirección de la acción.',
          'El diseño web es una herramienta estratégica, no solo estética.'
        ],
        actividad:
          'Elabora un brief corto de campaña que incluya objetivo, público, propuesta de valor y acción principal esperada.',
        evidencia:
          'Brief inicial de la página web con objetivo y público definidos.',
        herramientas: [
          'Brief de campaña',
          'Mapa simple del embudo de conversión',
          'Benchmark de páginas de referencia'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Por qué una página web existe dentro de una campaña de marketing digital.',
              'El embudo de conversión y sus etapas fundamentales.',
              'Diferencia entre página informativa y página orientada a conversión.',
              'Formular el primer brief de campaña del curso.'
            ]
          },
          {
            title: '¿Para qué existe una página web?',
            items: [
              'No es decoración digital: es una herramienta con un objetivo concreto y medible.',
              'Toda página debe responder: ¿a quién va dirigida?, ¿para qué existe? y ¿qué debe hacer el usuario?',
              'Cada elemento de la página comunica algo; nada debería estar ahí sin propósito estratégico.'
            ]
          },
          {
            title: 'La página web como activo estratégico',
            items: [
              'Visibilidad: presencia continua y verificable, no efímera como una publicación en redes.',
              'Credibilidad: una interfaz profesional funciona como señal inmediata de confianza para el usuario.',
              'Conversión: toda página debe orientar al usuario hacia una acción medible, no solo informar o mostrar.'
            ]
          },
          {
            title: 'El embudo de conversión',
            items: [
              'Conciencia: el usuario se entera de que la marca existe.',
              'Interés y decisión: el usuario evalúa si la propuesta le sirve.',
              'Acción: el usuario completa el objetivo de la campaña (compra, registro, contacto).'
            ]
          },
          {
            title: 'Informativa vs. orientada a conversión',
            items: [
              'Una página informativa presenta; una página de conversión guía hacia una acción específica.',
              'El objetivo define el tipo de página; el tipo de página define su estructura y contenido.',
              'Tener página web no es suficiente: debe tener un objetivo claro y un destino para el tráfico de campaña.'
            ]
          },
          {
            title: 'El brief de campaña',
            items: [
              'Negocio o proyecto, objetivo principal, público objetivo y acción esperada: los cuatro elementos del brief.',
              'Sin brief, el diseño no tiene dirección ni criterio de evaluación.',
              'Este documento es el inicio del proyecto integrador del curso.'
            ]
          },
          {
            title: 'Actividad: Tu primer brief',
            items: [
              'Piensa en un negocio real: el tuyo, el de un familiar, o uno inventado para el curso.',
              'Escribe en el chat: Negocio → Objetivo → Público → Acción esperada del usuario.',
              'Este es el primer documento de tu proyecto integrador del semestre.'
            ]
          },
          {
            title: 'Ideas clave y cierre',
            items: [
              'Toda página responde a un objetivo y a una audiencia definida.',
              'La conversión depende de claridad, pertinencia y dirección de la acción hacia el usuario.',
              'Próxima sesión: Principios de UX/UI aplicados a páginas de campaña y experiencias digitales.'
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo:
          'Principios de UX/UI aplicados a páginas de campaña y experiencias digitales',
        descripcion:
          'Criterios para diseñar interfaces claras, útiles y coherentes con el comportamiento del usuario.',
        href: '/unidad1/tema2',
        disponible: true,
        panorama:
          'La experiencia de usuario organiza la interacción; la interfaz da forma visible a esa experiencia. Este tema se centra en principios de jerarquía, consistencia, contraste y orientación visual aplicados a páginas de campaña.',
        objetivos: [
          'Identificar principios básicos de UX y UI aplicables a páginas web.',
          'Relacionar la estructura visual con la facilidad de uso.',
          'Detectar problemas de interfaz que aumentan la fricción.'
        ],
        ideasClave: [
          'La interfaz debe facilitar la tarea del usuario, no distraerla.',
          'La consistencia visual mejora comprensión y confianza.',
          'Una buena experiencia reduce esfuerzo y mejora conversión.'
        ],
        actividad:
          'Analiza dos páginas de referencia y compara cómo resuelven navegación, jerarquía y llamados a la acción.',
        evidencia: 'Ficha comparativa de criterios UX/UI aplicados.',
        herramientas: [
          'Heurísticas de usabilidad',
          'Referentes visuales',
          'Notas de evaluación UX'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Identificar principios básicos de UX y UI aplicables a páginas web de campaña.',
              'Relacionar la estructura visual con la facilidad de uso y la respuesta esperada del usuario.',
              'Detectar problemas de interfaz que generan fricción y proponer mejoras concretas.'
            ]
          },
          {
            title: 'UX vs. UI: dos dimensiones inseparables',
            items: [
              'UX (User Experience) es cómo se siente usar algo: si el recorrido es claro, cómodo y sin fricción.',
              'UI (User Interface) es lo que el usuario ve e interactúa: botones, colores, tipografía y estructura visual.',
              'Analogía: UX es el viaje en automóvil; UI es el tablero y los controles. Ambas son inseparables en una página de campaña.'
            ]
          },
          {
            title: '5 principios UX para páginas de campaña',
            items: [
              'Claridad: el usuario entiende la propuesta de valor en menos de 5 segundos sin leer todo el texto.',
              'Consistencia: elementos visuales y textuales coherentes reducen carga cognitiva y generan confianza.',
              'Jerarquía visual: lo más importante domina visualmente; el CTA debe ser lo más visible de la pantalla.',
              'Retroalimentación: el sistema confirma cada acción del usuario (carga, envío, error).',
              'Reducción de fricción: cada paso innecesario es una oportunidad de abandono.'
            ]
          },
          {
            title: 'Heurísticas de Nielsen aplicadas a campañas',
            items: [
              'Visibilidad del estado del sistema: el usuario siempre sabe en qué parte del proceso está.',
              'Consistencia y estándares: no inventar convenciones sin razón; seguir patrones que el usuario ya conoce.',
              'Diseño estético y minimalista: cada elemento extra compite con el importante; menos es más en páginas de campaña.',
              'Prevención de errores: diseñar para que el usuario no falle, no para recuperarse después del error.'
            ]
          },
          {
            title: 'Fricción, escaneo y conversión',
            items: [
              'Fricción UX: todo lo que retrasa, confunde o desanima al usuario antes de completar la acción deseada.',
              'El patrón F de escaneo: el usuario lee horizontalmente en la cima y luego baja verticalmente; coloca lo importante primero.',
              'Un formulario más corto convierte mejor: cada campo adicional reduce la probabilidad de completarlo.'
            ]
          },
          {
            title: 'Checklist rápido de interfaz',
            items: [
              '¿El llamado a la acción principal destaca claramente por contraste con el resto de la pantalla?',
              '¿El usuario puede entender qué hacer sin tener que leer toda la pantalla?',
              '¿La jerarquía visual prioriza la tarea principal y no la decoración?',
              '¿La página funciona y se lee bien en dispositivo móvil?'
            ]
          },
          {
            title: 'Actividad: Ficha comparativa UX/UI',
            items: [
              'Abre las dos páginas de campaña indicadas y analiza cada una con los criterios del tema.',
              'Evalúa: claridad del CTA, jerarquía visual, consistencia del diseño y fricción percibida al navegar.',
              'Identifica un problema UX concreto por página y propone una mejora argumentada en los principios revisados.'
            ]
          },
          {
            title: 'Cierre y proyección',
            items: [
              'Aprendimos: UX vs. UI, 5 principios de experiencia, heurísticas de Nielsen, fricción y patrón de escaneo.',
              'Próxima sesión: Jerarquía visual, tipografía, color y composición para comunicar y persuadir.',
              'Reflexión: ¿Si pudieras mejorar solo un elemento de una página web, cuál sería y por qué?'
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo:
          'Jerarquía visual, tipografía, color y composición para comunicar y persuadir',
        descripcion:
          'Recursos visuales para destacar prioridades, reforzar mensajes y guiar decisiones del usuario.',
        href: '/unidad1/tema3',
        disponible: true,
        panorama:
          'La jerarquía visual organiza la lectura y orienta la atención antes de que el usuario lea una sola palabra. Este tema trabaja composición, contraste, tipografía y color como recursos para comunicar con intención y reforzar una propuesta de valor. En una página de campaña, ordenar lo importante de lo secundario puede ser la diferencia entre una conversión y un abandono.',
        objetivos: [
          'Organizar visualmente una interfaz según prioridades de lectura y acción.',
          'Usar tipografía con criterio comunicativo: escala, peso y legibilidad como herramientas.',
          'Aplicar color de forma estratégica para comunicar, orientar y reforzar la identidad de marca.',
          'Componer un hero section con jerarquía clara y justificar sus decisiones de diseño.'
        ],
        ideasClave: [
          'Lo importante debe ser visible antes de que el usuario lea en profundidad.',
          'Tipografía y color no decoran: comunican y ordenan la lectura.',
          'Una composición clara reduce carga cognitiva y mejora la conversión.',
          'Cuando todo destaca, nada destaca: la jerarquía requiere decisiones de sacrificio.'
        ],
        actividad:
          'Rediseña el hero section de una página de campaña con problemas de jerarquía y justifica al menos tres decisiones visuales tomadas.',
        evidencia:
          'Boceto o esquema visual con decisiones de composición justificadas en relación con el objetivo de campaña.',
        herramientas: [
          'Paleta base de marca',
          'Escala tipográfica',
          'Wireframe de hero section',
          'Ficha de auditoría visual'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Comprender qué es jerarquía visual y por qué organiza la lectura antes de que el usuario lea una palabra.',
              'Usar tipografía y color como herramientas de comunicación, no solo de estética.',
              'Aplicar principios de composición al hero section de una página de campaña.',
              'Justificar decisiones de diseño visual con criterios claros y verificables.'
            ]
          },
          {
            title: 'Jerarquía visual: el orden que guía la mirada',
            items: [
              'El usuario no lee una página web: la escanea en fracciones de segundo. La jerarquía decide qué ve primero.',
              'Los cinco factores que crean jerarquía: tamaño, contraste, peso, posición y espacio en blanco.',
              'Flujo visual previsible: el patrón F y el patrón Z determinan cómo recorre el usuario una pantalla.',
              'Regla práctica: si todo destaca, nada destaca. La jerarquía exige decisiones de sacrificio.'
            ]
          },
          {
            title: 'Espacio en blanco: el elemento invisible que organiza',
            items: [
              'El espacio en blanco no es espacio vacío: es separador, respiración y señal de calidad.',
              'Agrupar elementos relacionados y separar los distintos crea orden sin necesidad de palabras.',
              'Las páginas cargadas visualmente generan estrés cognitivo; las páginas con espacio transmiten confianza.',
              'Pregunta clave: ¿cada elemento en tu pantalla tiene espacio suficiente para ser visto con claridad?'
            ]
          },
          {
            title: 'Tipografía: comunicar con la forma de las letras',
            items: [
              'La tipografía no es decoración: el tipo, el tamaño y el peso de la fuente son mensajes en sí mismos.',
              'Escala tipográfica: diferencia clara entre título (H1), subtítulo (H2) y cuerpo de texto evita confusión.',
              'Legibilidad primero: una fuente elegante que nadie puede leer en pantalla es un obstáculo, no un recurso.',
              'Límite práctico: no más de dos familias tipográficas en una misma pantalla. Más es ruido visual.'
            ]
          },
          {
            title: 'Color: señal, emoción y coherencia de marca',
            items: [
              'El color comunica antes de que el usuario lea: temperatura (frío/cálido), urgencia, confianza, acción.',
              'Contraste de color: texto oscuro sobre fondo claro es el mínimo indispensable de legibilidad.',
              'El color de marca debe reservarse para los elementos de mayor importancia, no aplicarse en todo.',
              'Paleta práctica: un color principal, uno de apoyo y uno de acción (CTA). Tres es suficiente.'
            ]
          },
          {
            title: 'El hero section: anatomía de la primera pantalla',
            items: [
              'El hero es lo primero que ve el usuario: debe comunicar quién eres, qué ofreces y qué hacer en segundos.',
              'Elementos esenciales: titular (propuesta de valor), subtítulo de apoyo, CTA principal, imagen o fondo contextual.',
              'El CTA debe ser el elemento visualmente más diferenciado de la pantalla por contraste y posición.',
              'Regla de tres: si el hero necesita más de tres mensajes distintos, está intentando hacer demasiado.'
            ]
          },
          {
            title: 'Errores comunes que destruyen la jerarquía',
            items: [
              'Todo en negrita o mayúsculas: cuando todo es énfasis, nada lo es.',
              'CTA del mismo color que otros elementos: el botón de acción se pierde en el ruido visual.',
              'Imagen grande sin texto jerárquico encima: la imagen domina pero el mensaje no llega.',
              'Más de cuatro colores distintos en una sección: el ojo no sabe dónde ir primero.'
            ]
          },
          {
            title: 'Actividad: Rediseña el hero con criterio',
            items: [
              'Observa el hero presentado: identifica qué no tiene jerarquía, qué tipografía falla y qué color sobra.',
              'Propón una versión mejorada: boceto, esquema escrito o herramienta digital. Tienes 12 minutos.',
              'Comparte en el chat una sola decisión que tomaste y por qué la tomaste.',
              'Criterio: aplica al menos dos principios del tema con coherencia en el objetivo de campaña.'
            ]
          },
          {
            title: 'Ideas clave y cierre',
            items: [
              'Lo importante debe ser visible antes de que el usuario lea en profundidad.',
              'Tipografía y color no decoran: comunican y ordenan.',
              'Una composición clara reduce carga cognitiva y mejora la conversión.',
              'Próxima sesión: Usabilidad, accesibilidad y lectura móvil como criterios de calidad.'
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo:
          'Usabilidad, accesibilidad y lectura móvil como criterios de calidad',
        descripcion:
          'Buenas prácticas para que la experiencia sea comprensible, inclusiva y efectiva en distintos dispositivos.',
        href: '/unidad1/tema4',
        disponible: true,
        panorama:
          'La calidad de una página web no solo se mide por su estética, sino por su facilidad de uso, su accesibilidad y su comportamiento real en pantallas móviles. En un entorno "Mobile-First", preparar la interacción es como preparar la buena tierra para el usuario: eliminando fricciones, cuidando contrastes y priorizando accesibilidad universal.',
        objetivos: [
          'Aplicar criterios básicos de usabilidad e interactividad sin fricción.',
          'Evaluar lectura y navegación en móvil bajo principios Mobile-First.',
          'Auditar un producto visual usando checklist de calidad técnica y accesibilidad.'
        ],
        ideasClave: [
          'Las interfaces útiles reducen al máximo la decisión cognitiva.',
          'La accesibilidad beneficia a todos los usuarios; la claridad no es un favor, es un deber ético.',
          'Móvil ya no es una opción de diseño adicional, debe ser el territorio principal auditado.'
        ],
        actividad:
          'La Buena Tierra Digital: Inspecciona con tu celular y un checklist una maqueta/web para detectar problemas de legibilidad, contraste y barreras de accesibilidad.',
        evidencia:
          'Lista de cotejo aplicada con observaciones, bloqueos detectados y mejoras sugeridas.',
        herramientas: [
          'Checklist de usabilidad (10 puntos)',
          'Revisión técnica en Smartphone',
          'Criterios de contraste (W3C/WCAG)'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Entender la relación vital entre calidad técnica, usabilidad y experiencia.',
              'Auditar interfaces con visión Mobile-First y empatía al usuario.',
              'Realizar nuestro check-up preventivo de calidad (cierre de unidad).'
            ]
          },
          {
            title: 'Usabilidad Mínima Viable',
            items: [
              'No exijas pensar de más al usuario: la interfaz debe ser autoevidente.',
              'Emplea las convenciones: menús, logos y estructuras donde el usuario ya sabe buscarlas.',
              'Consistencia: reduce la carga de aprendizaje al unificar estilos de botones y enlaces.'
            ]
          },
          {
            title: 'Mobile-First (Móvil no es accesorio)',
            items: [
              'Aceptar el volumen de tráfico: tu contenido se consumirá en su gran mayoría por pantallas de 6 pulgadas.',
              'Diseñar primero la versión apilada te obliga a editar, priorizar y reducir lo que es meramente cosmético.',
              'Las áreas táctiles y márgenes importan. "Pulsable por un pulgar".'
            ]
          },
          {
            title: 'Diseño Inclusivo: Accesibilidad, el "Buen Terreno"',
            items: [
              'Preparar un terreno digital libre de tropiezos para capacidades visuales y cognitivas diversas.',
              'Altos contrastes (WCAG), texto nunca menor a 16px.',
              'Legibilidad como acto de respeto: no complique lo que puede ser claro.'
            ]
          },
          {
            title: 'Taller: Auditoría de Accesibilidad',
            items: [
              'Revisaremos una base de componentes o prototipo utilizando una Matriz de 10 puntos provista por el docente.',
              'Valida con tu celular y socializa qué resulta frustrante de leer o utilizar en este demo.',
              'Marca mejoras para nuestra próxima unidad de construcción real.'
            ]
          }
        ]
      }
    ]
  },
  {
    numero: 2,
    titulo:
      'Arquitectura de la información, contenido persuasivo y prototipado',
    descripcion:
      'Traduce la propuesta de valor en estructura, mensaje y prototipos validables antes de publicar.',
    color: 'blue',
    iconName: 'Monitor',
    capacidad:
      'Diseñar el recorrido del usuario y traducir la propuesta de valor en una estructura clara, persuasiva y validable antes de publicar.',
    evidencia:
      'Contenido final por secciones y prototipo navegable o maqueta visual validable.',
    temas: [
      {
        numero: 1,
        titulo: 'Segmentación, intención del usuario y enfoque del mensaje',
        descripcion:
          'Definición del público, sus necesidades y el ángulo de comunicación más pertinente.',
        href: '/unidad2/tema1',
        disponible: true,
        panorama:
          'El contenido solo funciona cuando responde a una intención concreta. Este tema organiza el mensaje desde el perfil del usuario: quién es, qué motivaciones tiene, qué objeciones enfrenta y en qué momento entra en contacto con la propuesta. Un mensaje preciso no es un mensaje para todos; es un mensaje que la persona correcta reconoce de inmediato como relevante para ella.',
        objetivos: [
          'Construir un perfil de usuario documentando su objetivo, necesidad, objeción y contexto de entrada.',
          'Identificar la intención de visita dominante y relacionarla con la estructura del contenido.',
          'Formular la propuesta de valor en términos de beneficio para el usuario, no de características del producto.',
          'Redactar el mensaje central de la página en una sola frase verificable y diferenciada.'
        ],
        ideasClave: [
          'No se comunica igual a todos los públicos ni en todos los momentos: segmentar es enfocar para resonar.',
          'La intención de visita define qué debe decir la página y dónde debe estar el llamado a la acción.',
          'La propuesta de valor traduce características en beneficios concretos para el usuario.',
          'El mensaje central es el ancla de todo el contenido que vendrá: una frase que el usuario reconocería como escrita para él.'
        ],
        actividad:
          'Construye una ficha de usuario con perfil, objetivo, necesidad, objeción principal y momento de entrada. Luego redacta el mensaje central de tu página en una sola frase de máximo 20 palabras.',
        evidencia:
          'Ficha de usuario completa con mensaje central redactado. Primer insumo de contenido del proyecto integrador de la Unidad 2.',
        herramientas: [
          'Ficha de audiencia',
          'Mapa de empatía',
          'Propuesta de valor',
          'Buyer persona'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Definir quién es el usuario de tu página: perfil, motivaciones y objeciones reales.',
              'Identificar con qué intención llega el usuario y qué espera encontrar.',
              'Formular la propuesta de valor como beneficio concreto, no como lista de características.',
              'Redactar el mensaje central que guiará el contenido de toda la Unidad 2.'
            ]
          },
          {
            title: '¿Por qué importa conocer a tu usuario?',
            items: [
              'Un mensaje que intenta hablarle a todos, en la práctica no le habla a nadie.',
              'El usuario llega con una pregunta o problema ya formulado: la página que lo responde de inmediato convierte mejor.',
              'Cuanto más específico es el perfil, más reconocible resulta el mensaje para quien importa.'
            ]
          },
          {
            title: 'Segmentación: enfocar para resonar',
            items: [
              'Segmentar no es excluir: es decidir con quién vale la pena hablar con claridad y profundidad.',
              'Variables clave: demográficas (quién es), psicográficas (qué valora), conductuales (cómo actúa) y contextuales (cuándo y desde dónde llega).',
              'Diferencia entre público objetivo y buyer persona: el primero es un grupo; el segundo tiene nombre, historia y motivaciones propias.',
              'Error frecuente: "hombres y mujeres de 18 a 65 años interesados en el producto." Tan amplio que no orienta ninguna decisión de contenido.'
            ]
          },
          {
            title: 'Intención del usuario: los cuatro tipos',
            items: [
              'Informativa: quiere entender o aprender. ("¿Qué es el marketing de contenidos?")',
              'Transaccional: está listo para actuar. ("Contratar diseño web en Riobamba")',
              'Comparativa: está evaluando opciones. ("Mejor plataforma de ecommerce para Ecuador")',
              'De confirmación: casi decide y busca validación final. ("Opiniones sobre Shopify Ecuador")',
              'Clave: la intención dominante define la posición del CTA, el tono del mensaje y la secuencia de secciones.'
            ]
          },
          {
            title: 'Propuesta de valor: de característica a beneficio',
            items: [
              'Fórmula: [qué hace] + [para quién] + [qué problema resuelve] + [qué la diferencia].',
              '❌ "Somos una empresa comprometida con la calidad y el servicio." (No dice nada útil al usuario.)',
              '✅ "Diseñamos tu tienda en línea en 7 días y empiezas a vender desde el primer mes, sin conocimientos técnicos."',
              'Prueba de los 5 segundos: si el usuario no entiende tu propuesta de valor en 5 segundos, el diseño falló antes que el contenido.'
            ]
          },
          {
            title: 'Preguntas filtro para definir el mensaje',
            items: [
              '¿Quién es la persona usuaria y en qué momento de decisión entra a la página?',
              '¿Qué objeción principal debe resolverse antes de pedir una acción?',
              '¿Qué promesa concreta y verificable puede sostener el contenido de la página?'
            ]
          },
          {
            title: 'Heurística de enfoque',
            items: [
              'Si el mensaje intenta hablarle a todo el mundo, pierde claridad y fuerza.',
              'El usuario decide muy rápido si una página le sirve; por eso el enfoque debe aparecer de inmediato.',
              'La promesa central debe poder resumirse en una frase breve, verificable y entendible sin contexto adicional.'
            ]
          },
          {
            title: 'Mapa de empatía: ver desde los ojos del usuario',
            items: [
              'Qué piensa y siente: sus miedos, aspiraciones y frustraciones principales.',
              'Qué ve: el entorno, los referentes, lo que le ofrecen otras páginas similares.',
              'Qué dice y hace: cómo se expresa sobre el problema, qué acciones ya tomó antes de llegar.',
              'Qué le duele y qué gana: las objeciones reales y el resultado que espera obtener.'
            ]
          },
          {
            title: 'Actividad: Ficha de usuario y mensaje central',
            items: [
              'Abre el brief de tu proyecto de la Unidad 1 y completa la ficha de usuario.',
              'Define: perfil del usuario, objetivo, necesidad principal, objeción más probable y momento de entrada.',
              'Redacta el mensaje central de tu página en una sola frase (máximo 20 palabras).',
              'Criterio: el mensaje debe ser concreto, diferenciado y reconocible por el usuario que definiste.'
            ]
          },
          {
            title: 'Ideas clave y proyección',
            items: [
              'Segmentar es enfocar para resonar: el usuario correcto, en el momento correcto, con el mensaje correcto.',
              'La intención de visita define la estructura; la propuesta de valor define el contenido; el mensaje central los ancla a ambos.',
              'Próxima sesión: Unidad 2, Tema 2 — tomaremos esta ficha de usuario y construiremos la arquitectura de secciones de la página.'
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo:
          'Organización de contenidos por bloques, secciones y recorrido del usuario',
        descripcion:
          'Estructuración del contenido para que el usuario avance con lógica y sin fricción hacia la acción esperada.',
        href: '/unidad2/tema2',
        disponible: true,
        panorama:
          'La arquitectura de la información decide qué ve el usuario primero, qué sigue después y qué acción se le pide al final. Una página de campaña no es una acumulación de secciones: es un recorrido diseñado con criterio, donde cada bloque tiene una función concreta y un lugar justificado. Este tema organiza la estructura del contenido desde el perfil del usuario y el objetivo de conversión, aplicando patrones verificados como AIDA y el principio de la pirámide invertida. Una arquitectura bien construida reduce fricción, aumenta comprensión y convierte más.',
        objetivos: [
          'Identificar los bloques funcionales de una página de campaña y su propósito comunicativo específico.',
          'Ordenar secciones aplicando patrones de recorrido verificados como AIDA y PAS.',
          'Justificar el orden de cada bloque en relación con el perfil de usuario y el objetivo de la campaña.',
          'Construir un mapa de secciones propio como insumo estructural del proyecto integrador.'
        ],
        ideasClave: [
          'El orden del contenido no es arbitrario: responde a la lógica del usuario, no a la preferencia del diseñador.',
          'Cada bloque de la página debe cumplir una función comunicativa concreta dentro del recorrido del usuario.',
          'Una buena arquitectura reduce fricción: el usuario avanza sin tener que pensar demasiado en qué hacer.',
          'La pirámide invertida coloca lo más importante primero: propuesta de valor antes que detalles.',
          'Un mapa de secciones claro es la base del prototipado; sin arquitectura definida, el prototipo será desordenado.',
          'El primer CTA debe aparecer antes del tercer bloque; si el usuario llega al footer sin una oportunidad de actuar, la arquitectura falló.'
        ],
        actividad:
          'Construye el mapa de secciones de tu página de campaña: define 5-6 bloques, declara el propósito comunicativo de cada uno, indica el contenido principal y justifica el orden según el perfil de tu usuario.',
        evidencia:
          'Mapa de secciones con 5-6 bloques definidos, función de cada bloque declarada, contenido principal indicado y orden justificado en relación con el perfil de usuario. Segundo insumo del proyecto integrador de la Unidad 2.',
        herramientas: [
          'Mapa de secciones (papel, Figma o Google Docs)',
          'Plantilla de bloques funcionales',
          'Patrón AIDA',
          'Patrón PAS',
          'Wireframe estructural básico'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Identificar los bloques funcionales de una página de campaña y su propósito comunicativo.',
              'Ordenar secciones con patrones de recorrido verificados: AIDA y PAS.',
              'Justificar el orden de cada bloque en relación con el perfil de usuario.',
              'Construir el mapa de secciones de tu página de campaña como insumo del proyecto integrador.'
            ]
          },
          {
            title: '¿Qué es la arquitectura de la información?',
            items: [
              'Es el mapa que le dice al usuario dónde está, qué puede hacer y qué encontrará si sigue avanzando.',
              'No es sobre colores ni tipografía: es sobre estructura, orden y función comunicativa.',
              'Las páginas que convierten tienen recorridos claros, no solo diseños bonitos.',
              'Steve Krug en "No me hagas pensar": la mejor arquitectura es la que el usuario no necesita pensar para seguir.'
            ]
          },
          {
            title: 'Los seis bloques funcionales de una página de campaña',
            items: [
              'Hero: comunica quién eres y qué ofreces en 3-5 segundos. Titular, subtítulo, CTA y imagen contextual.',
              'Beneficios: ¿por qué elegirte? Responde objeciones anticipadas en formato visual (3-4 puntos).',
              'Prueba social: testimonios, logos, números. Reduce el riesgo percibido del usuario.',
              'Detalle: explica en profundidad para los usuarios que siguen explorando después de ver lo esencial.',
              'CTA de cierre: el último llamado antes de que el usuario abandone. Directo y contextual.',
              'Footer: contacto, redes, navegación secundaria. No convierte directamente, pero retiene y orienta.'
            ]
          },
          {
            title: 'Patrones de recorrido: AIDA y PAS',
            items: [
              'AIDA: Atención → Interés → Deseo → Acción. El esquema narrativo clásico de campaña.',
              'PAS: Problema → Agitación → Solución. Más directo; útil para páginas de respuesta rápida.',
              'El usuario toma en promedio 50 ms para decidir si la página le interesa: la arquitectura no puede depender de que lea todo.',
              'Usa AIDA cuando el usuario necesita ser convencido; usa PAS cuando el usuario ya reconoce su problema.'
            ]
          },
          {
            title: 'La pirámide invertida del contenido',
            items: [
              'Lo más importante va primero: mensaje central, propuesta de valor y CTA principal — visibles sin hacer scroll.',
              'Luego el contexto: beneficios, explicación y evidencia de soporte para quienes siguen leyendo.',
              'Al final los detalles: especificaciones, política de privacidad y footer.',
              'Error frecuente: enterrar la propuesta de valor en el tercer bloque para "construir contexto". El usuario no espera ni lee en orden.'
            ]
          },
          {
            title: 'Regla práctica: el primer CTA',
            items: [
              'El primer llamado a la acción debe aparecer antes de que el usuario termine de ver el tercer bloque.',
              'No es necesario que esté en el hero, pero sí en la zona de decisión inicial.',
              'Si el usuario llega al footer sin haber visto una oportunidad de actuar, la arquitectura falló.',
              'El CTA tardío no es modestia del diseñador: es una oportunidad de conversión desperdiciada.'
            ]
          },
          {
            title: 'Errores comunes de arquitectura',
            items: [
              'Múltiples mensajes principales en el hero: el usuario no sabe qué hacer primero.',
              'CTA ausente o tardío: el usuario lee y sale sin haber tenido la oportunidad de actuar.',
              'Bloques sin propósito definido: secciones que se ven bien pero no cumplen función comunicativa.',
              'Estructura por intuición del diseñador, no por lógica del usuario: tiene sentido para quien diseñó, no para quien llega.',
              'Prueba social antes que la propuesta de valor: el usuario aún no sabe qué le estás ofreciendo.'
            ]
          },
          {
            title: 'Actividad: Mapa de Secciones Guiado',
            items: [
              'Abre tu ficha de usuario y el mensaje central redactado en la sesión anterior.',
              'Define 5-6 secciones para tu página. Para cada una: nombre, propósito comunicativo, contenido principal y acción esperada.',
              'Ordena las secciones y justifica el orden en relación con el perfil de tu usuario.',
              'Criterio: el mapa debe tener al menos un CTA en los tres primeros bloques y el orden debe seguir una lógica verificable.'
            ]
          },
          {
            title: 'Ideas clave y proyección',
            items: [
              'El orden no es arbitrario: responde a la lógica del usuario, no al gusto del diseñador.',
              'Cada bloque debe cumplir una función concreta; si no la cumple, no debería estar.',
              'Un mapa de secciones claro es la base del prototipado: sin arquitectura, el prototipo será desordenado.',
              'Próxima sesión: Unidad 2, Tema 3 — redactaremos el contenido persuasivo de cada sección definida hoy.'
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo:
          'Redacción de titulares, beneficios, prueba social y llamados a la acción',
        descripcion:
          'Textos breves, claros y persuasivos para cada sección clave de la página de campaña.',
        href: '/unidad2/tema3',
        disponible: true,
        panorama:
          'Una página de campaña puede tener buena estructura y diseño, pero si el texto no comunica con claridad la propuesta de valor, el usuario abandona sin actuar. Este tema trabaja los cuatro elementos textuales que más influyen en la decisión del usuario: el titular que sintetiza la promesa, los beneficios que transforman características en resultados, la prueba social que reduce el riesgo percibido y el llamado a la acción que orienta el paso siguiente. Redactar con criterio persuasivo no es manipular: es comunicar con honestidad lo que la propuesta puede hacer por el usuario.',
        objetivos: [
          'Redactar titulares que comuniquen la propuesta de valor de forma clara y diferenciada.',
          'Transformar características del producto o servicio en beneficios comprensibles para el usuario.',
          'Seleccionar y ubicar prueba social de forma estratégica dentro del recorrido de la página.',
          'Construir llamados a la acción específicos con verbo, beneficio y dirección concreta.'
        ],
        ideasClave: [
          'El titular es la primera promesa visible: si no funciona en 5 segundos, el resto no importa.',
          'Un beneficio que no describe el resultado del usuario es solo una característica disfrazada.',
          'La prueba social va después de la propuesta de valor, nunca antes: el usuario primero necesita entender qué le ofreces.',
          'Un CTA sin verbo concreto y resultado claro es un botón de esperanza, no una instrucción.',
          'Tres a cuatro beneficios bien redactados convierten más que una lista de quince características.'
        ],
        actividad:
          'Con acompañamiento del docente, redacta el titular, subtítulo, tres beneficios clave y los dos CTAs principales de tu proyecto integrador, usando la ficha de usuario y el mapa de secciones como base.',
        evidencia:
          'Borrador de copy con titular, subtítulo, tres beneficios y dos CTAs redactados para las secciones clave del proyecto. Insumo directo de la evidencia de la Unidad 2 (contenido final por secciones).',
        herramientas: [
          'Ficha de usuario (insumo U2T1)',
          'Mapa de secciones (insumo U2T2)',
          'Plantilla de copy por secciones',
          'Google Docs o herramienta de edición de texto'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Redactar titulares que comunican la propuesta de valor en 5 segundos o menos.',
              'Transformar características en beneficios concretos usando la fórmula vista en clase.',
              'Ubicar la prueba social de forma estratégica dentro del recorrido de la página.',
              'Construir CTAs específicos con verbo, beneficio y dirección concreta para tu proyecto.'
            ]
          },
          {
            title:
              'Puente con la sesión anterior (Arquitectura de la información)',
            items: [
              'Pregunta de enlace: ¿cuál es el propósito comunicativo del hero section en el mapa de secciones que construiste?',
              'El mapa define qué bloques existen; el copy define qué dice cada uno.',
              'Sin arquitectura clara, el copy puede ser brillante y aun así perderse en el desorden.'
            ]
          },
          {
            title: 'El titular: la primera promesa visible',
            items: [
              'El titular es el elemento más leído de toda la página. Si no funciona, el usuario no sigue.',
              'Fórmula: [beneficio principal] + [para quién] + [diferenciador o condición].',
              'Prueba de los 5 segundos: si el usuario no puede responder "¿qué ofrece esta página?" en 5 segundos, el titular falló.',
              '❌ "Somos una empresa comprometida con la calidad." → ✅ "Tu tienda en línea lista en 7 días. Sin conocimientos técnicos."'
            ]
          },
          {
            title: 'El subtítulo: ampliar sin repetir',
            items: [
              'El subtítulo amplía el titular con contexto: ¿para quién exactamente? ¿qué obtienes? ¿por qué ahora?',
              'No repite lo mismo con otras palabras: agrega información útil o especifica la promesa.',
              'Regla práctica: si el subtítulo puede eliminarse sin perder información esencial, no agrega valor.'
            ]
          },
          {
            title:
              'Características vs. beneficios: la diferencia que convierte',
            items: [
              'Característica: lo que el producto tiene o hace. Beneficio: lo que el usuario gana, logra o deja de sufrir.',
              'Fórmula: "[Característica] te permite [beneficio concreto para el usuario]."',
              '❌ "Diseño responsivo." → ✅ "Tu tienda se ve perfecta en el celular de tu cliente."',
              'Incluye 3-4 beneficios clave; más de cinco genera ruido y diluye el mensaje.'
            ]
          },
          {
            title: 'Prueba social: cómo el usuario decide que puede confiar',
            items: [
              'Tipos: testimonios con nombre y resultado, números verificables, logos de aliados, historia de usuario antes/después.',
              'Posición estratégica: va después de la propuesta de valor inicial, nunca antes.',
              '❌ "Excelente servicio, muy recomendado." → ✅ "Lancé mi tienda en 9 días y en el primer mes tuve 18 pedidos. — María Cárdenas, Riobamba."',
              'Un testimonio sin nombre, sin foto y sin resultado concreto no genera confianza: genera sospecha.'
            ]
          },
          {
            title: 'CTA: anatomía de un llamado que funciona',
            items: [
              'El CTA es una instrucción, no una sugerencia: debe ser directo, visible y contextual.',
              'Anatomía: verbo de acción + beneficio o resultado + condición o urgencia (opcional).',
              '❌ "Haz clic aquí." / "Enviar." / "Más información." → ✅ "Agenda tu consulta gratuita." / "Quiero mi tienda en 7 días."',
              'Un CTA que no dice cuál es el siguiente paso concreto no es un CTA: es un botón de esperanza.'
            ]
          },
          {
            title: 'Errores comunes de copy persuasivo',
            items: [
              'Titular que habla de la empresa, no del beneficio para el usuario.',
              'Beneficios redactados como características sin transformar ("tenemos diseño responsivo").',
              'Prueba social sin nombre ni resultado concreto ("muy recomendado").',
              'CTA genérico que no describe el siguiente paso ("haz clic aquí").',
              'Prueba social antes de la propuesta de valor: el usuario aún no sabe qué le estás ofreciendo.'
            ]
          },
          {
            title: 'Actividad guiada: copy de tu proyecto',
            items: [
              'Abre tu ficha de usuario (U2T1) y tu mapa de secciones (U2T2). Tenlos visibles mientras escribes.',
              'Redacta: titular del hero, subtítulo, tres beneficios en formato título + descripción breve, CTA principal y CTA de cierre.',
              'Comparte tu titular en el chat para recibir retroalimentación del docente en tiempo real.',
              'El docente acompaña el proceso: da retroalimentación puntual y sistematiza errores y aciertos observados.'
            ]
          },
          {
            title: 'Criterios de evaluación del taller',
            items: [
              'El titular comunica propuesta de valor con diferenciador en dos líneas o menos.',
              'Los tres beneficios están formulados como resultado para el usuario, no como características.',
              'Los CTAs tienen verbo de acción, beneficio concreto y dirección explícita.',
              'El contenido es coherente con la ficha de usuario y el mapa de secciones del proyecto.',
              'Componente de evaluación: talleres y ejercicios aplicados (30 %) y participación activa (15 %).'
            ]
          },
          {
            title: 'Ideas clave y proyección',
            items: [
              'El titular es la primera promesa visible; si no funciona, el resto no importa.',
              'Un beneficio que no describe el resultado del usuario es solo una característica disfrazada.',
              'La prueba social va después de la propuesta de valor, no antes.',
              'Próxima sesión: Prototipado de baja y media fidelidad — tomaremos este copy y le daremos forma visual.'
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo:
          'Prototipado de baja y media fidelidad con herramientas visuales y criterios de marca',
        descripcion:
          'Conversión de la estructura y el contenido en una maqueta navegable y presentable.',
        href: '/unidad2/tema4',
        disponible: true,
        panorama:
          'Prototipar no es diseñar: es validar. Este tema cierra la Unidad 2 convirtiendo el mapa de secciones y el copy persuasivo en un prototipo navegable de baja o media fidelidad. El foco está en verificar que la estructura comunica, que el recorrido fluye y que el CTA es visible antes de invertir tiempo en producción. Un prototipo bien construido permite corregir en segundos lo que en producción costaría horas.',
        objetivos: [
          'Distinguir entre los tres niveles de fidelidad y elegir el adecuado al objetivo de validación.',
          'Construir un prototipo navegable aplicando el mapa de secciones y el copy del proyecto integrador.',
          'Verificar que la jerarquía del hero, la visibilidad del CTA y la fluidez del recorrido funcionan en vista móvil.',
          'Generar un share link o archivo exportable listo para revisión y retroalimentación.'
        ],
        ideasClave: [
          'Prototipar ahorra tiempo, errores y retrabajo: lo que se corrige en boceto no se rehace en producción.',
          'La fidelidad del prototipo debe responder al objetivo de validación, no a la presión de verse terminado.',
          'El flujo crítico hero → CTA → destino es el mínimo navegable que debe funcionar antes de publicar.',
          'Un checklist de validación aplicado al prototipo revela problemas que el ojo acostumbrado no ve.'
        ],
        actividad:
          'Usando tu mapa de secciones (U2T2) y el copy redactado (U2T3), construye un prototipo navegable de baja o media fidelidad con frames para móvil (375 px) y escritorio (1440 px). Conecta el CTA del hero con el formulario o sección de contacto, aplica el checklist de validación y documenta al menos un ajuste realizado.',
        evidencia:
          'Share link público del prototipo o imagen exportada de las vistas móvil y escritorio, más una nota de validación de 2 a 3 líneas respondiendo qué confirmó el prototipo y qué cambiarías antes de publicar.',
        herramientas: [
          'Figma o herramienta equivalente',
          'Guía de marca básica',
          'Checklist de revisión visual'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Traducir el mapa de secciones y el copy persuasivo en un prototipo navegable de baja o media fidelidad.',
              'Verificar jerarquía del hero, visibilidad del CTA y fluidez del recorrido en vista móvil.',
              'Generar share link o exportación lista para revisión y retroalimentación antes de pasar a producción.'
            ]
          },
          {
            title: 'Los tres niveles de fidelidad',
            items: [
              'Baja fidelidad: estructura y flujo. Papel, boceto o Balsamiq. Se usa para decidir qué va dónde sin invertir tiempo en estética.',
              'Media fidelidad: estructura + jerarquía visual en escala de grises. Figma sin colores. Valida recorrido antes de colorear.',
              'Alta fidelidad: diseño final + interacción completa. Solo cuando la estructura ya está validada.',
              'Regla: la fidelidad debe responder al objetivo de validación, no a la presión de "que se vea bien".'
            ]
          },
          {
            title: 'Por qué prototipar ahorra tiempo',
            items: [
              'Un cambio estructural en boceto tarda 2 minutos. El mismo cambio en Figma con colores aplicados puede tomar 20.',
              'El prototipo hace visible lo que la imaginación no detecta: secciones mal ordenadas, CTAs enterrados, jerarquías confusas.',
              'Los errores que no se corrigen en prototipo se pagan en producción y en retrabajo.',
              'Quien prepara bien el terreno antes de construir cosecha resultados — la misma lógica aplica al diseño web.'
            ]
          },
          {
            title: 'Anatomía de un wireframe de landing',
            items: [
              'Hero: titular, subtítulo, CTA principal, imagen o fondo. Es lo primero que ve el usuario; debe comunicar en 5 segundos.',
              'Beneficios: 3–4 puntos en paralelo o lista. Cada beneficio responde a una objeción del usuario.',
              'Prueba social: testimonios, logos, estadísticas. Valida la propuesta antes de pedir la acción.',
              'Segundo CTA: antes del footer. Si el usuario llegó hasta aquí, está listo para actuar.',
              'Regla crítica: el primer CTA debe aparecer antes del tercer bloque; si hay que desplazarse demasiado, la arquitectura falló.'
            ]
          },
          {
            title: 'Sistema de 8px y grilla móvil',
            items: [
              'El sistema de 8px establece que márgenes, rellenos y espaciados sean múltiplos de 8: 8, 16, 24, 32, 48.',
              'Activa la grilla en Figma: 4 columnas para móvil (375px) y 12 columnas para escritorio (1440px).',
              'El espaciado inconsistente se percibe como desorden aunque el contenido sea bueno.',
              'Usar grilla no es rigidez: es el equivalente visual de escribir con buena ortografía.'
            ]
          },
          {
            title: 'Flujo navegable mínimo',
            items: [
              'Hotspot mínimo: el CTA del hero debe conectar con la pantalla del formulario o acción esperada.',
              'Flujo crítico a validar: Entrada → Hero → Primer CTA → Formulario/Confirmación.',
              'En Figma: modo Prototype, flecha entre frames, transición simple. No hace falta animar todo.',
              'Pregunta de validación: ¿un usuario que no conoce tu proyecto completaría el recorrido sin confundirse?'
            ]
          },
          {
            title: 'Checklist de validación rápida',
            items: [
              '¿El titular del hero se entiende en 5 segundos sin desplazarse?',
              '¿El CTA principal aparece antes del tercer bloque de contenido?',
              '¿El contraste del CTA lo diferencia visualmente de los demás elementos de la pantalla?',
              '¿En vista móvil la jerarquía se mantiene y el texto es legible sin zoom?',
              '¿El flujo hero → CTA → destino funciona sin confusión ni pantallas huérfanas?'
            ]
          },
          {
            title: 'Actividad: Prototipo navegable de tu campaña',
            items: [
              'Abre tu mapa de secciones (Tema 2) y el copy redactado (Tema 3).',
              'Crea frame móvil 375px y escritorio 1440px. Construye en escala de grises; sin colores de marca aún.',
              'Conecta el CTA principal del hero con el frame de formulario o contacto.',
              'Aplica el checklist. Ajusta al menos un elemento al ver el prototipo completo.',
              'Entrega: share link público de Figma o imágenes exportadas de ambas vistas + nota de validación de 2–3 líneas.'
            ]
          },
          {
            title: 'Cierre de la Unidad 2',
            items: [
              'Lo que construiste hoy es la maqueta que publicarás en la Unidad 3. Si el prototipo es sólido, la producción será más rápida.',
              'Un prototipo que "valida algo" vale más que uno que "se ve bien".',
              'Próxima sesión — Unidad 3: Publicación en nube, constructores visuales y CMS accesibles.'
            ]
          }
        ]
      }
    ]
  },
  {
    numero: 3,
    titulo:
      'Producción y publicación de la página web con herramientas viables',
    descripcion:
      'Publica una página funcional con herramientas accesibles, coherencia visual y rutas de conversión simples.',
    color: 'emerald',
    iconName: 'Palette',
    capacidad:
      'Construir y publicar una página web funcional mediante herramientas accesibles, cuidando lectura móvil, coherencia visual y cumplimiento del objetivo de campaña.',
    evidencia:
      'Página web publicada o compartible y formulario o mecanismo de conversión funcional.',
    temas: [
      {
        numero: 1,
        titulo:
          'Publicación de páginas en entornos de baja fricción: nube, constructores visuales y CMS accesibles',
        descripcion:
          'Selección de ruta de publicación según viabilidad técnica, tiempo y objetivo del proyecto.',
        href: '/unidad3/tema1',
        disponible: true,
        panorama:
          'La publicación de la página web no depende de la herramienta más compleja, sino de la más viable. Este tema trabaja la decisión de publicación como un acto estratégico: comparar WordPress con constructor visual, plataformas de baja fricción como Framer o Carrd, y CMS simplificados, para elegir la ruta que permita avanzar sin bloqueos técnicos innecesarios. Una página publicada con criterio supera siempre a un proyecto técnico sofisticado que nunca llega a publicarse.',
        objetivos: [
          'Comparar al menos tres rutas de publicación según complejidad técnica, tiempo de inicio y tipo de proyecto.',
          'Seleccionar la herramienta más viable para el proyecto integrador con criterios documentados.',
          'Redactar un plan de implementación con herramienta elegida, justificación, pasos iniciales y riesgo identificado.'
        ],
        ideasClave: [
          'La herramienta debe servir al objetivo del proyecto, no desplazarlo ni complicarlo innecesariamente.',
          'Una ruta de publicación viable reduce el bloqueo técnico y garantiza la continuidad del proyecto.',
          'Publicar con criterio es más valioso que publicar con complejidad: viabilidad sobre sofisticación.',
          'La decisión de herramienta define el ritmo de toda la Unidad 3; elegir bien ahora evita retrabajo después.'
        ],
        actividad:
          'Completa la ficha de decisión con la herramienta elegida para tu proyecto integrador, justificando la selección con tres criterios de la matriz de clase, identificando el riesgo principal y definiendo los dos primeros pasos concretos de configuración.',
        evidencia:
          'Ficha de decisión con herramienta seleccionada, justificación documentada en tres criterios, riesgo identificado y pasos iniciales definidos.',
        herramientas: [
          'WordPress + Elementor',
          'Framer',
          'Carrd',
          'Google Sites',
          'Canva Sites',
          'Matriz de criterios de selección'
        ],
        presentationBlocks: [
          {
            title: 'Objetivo de la sesión',
            items: [
              'Comparar las rutas de publicación viables para el proyecto integrador.',
              'Elegir la herramienta más adecuada según tiempo, complejidad y objetivo de campaña.',
              'Redactar un plan de implementación con criterios documentados y pasos iniciales definidos.'
            ]
          },
          {
            title: 'Del prototipo a la URL real',
            items: [
              'Tienes el mapa de secciones, el copy y el prototipo validado. Ahora toca la pregunta más práctica del semestre: ¿con qué herramienta lo publicas?',
              'Una ruta de publicación es la combinación de herramienta + configuración + alojamiento que hace que tu página esté disponible para el usuario real.',
              'La decisión de hoy define el ritmo de toda la Unidad 3. Elegir bien ahora evita bloqueos después.'
            ]
          },
          {
            title: 'Ruta A — WordPress con constructor visual',
            items: [
              'Control total: diseño, plugins, SEO técnico, formularios avanzados y sitios multipágina.',
              'Requiere: hosting, dominio, instalación de WordPress y configuración del tema.',
              'Tiempo de inicio estimado: 2–4 horas para un usuario sin experiencia previa.',
              'Mejor para: proyectos con múltiples páginas, blog, tienda o formularios complejos.',
              'Riesgo principal: curva de aprendizaje técnico puede bloquear el avance si no se gestiona con tiempo.'
            ]
          },
          {
            title: 'Ruta B — Constructores de baja fricción (Framer, Carrd)',
            items: [
              'Sin instalación: el sitio vive en la plataforma. Inicio en 30–90 minutos.',
              'Framer: diseño con libertad total, CMS integrado, SEO incluido, colaboración en tiempo real.',
              'Carrd: la opción más rápida para una landing de una sola sección.',
              'Mejor para: landing pages de campaña, portfolios, páginas de una sola entrega.',
              'Riesgo principal: menor control sobre SEO técnico avanzado y migraciones futuras.'
            ]
          },
          {
            title: 'Ruta C — Google Sites / CMS simplificado',
            items: [
              'Cero fricción técnica. Útil para validar ideas rápido o presentar un borrador funcional a un cliente.',
              'Mejor para: MVP de presencia digital, bocetos funcionales, escalón de inicio antes de migrar.',
              'Limitación clara: no apto para proyectos de campaña con conversión real; no tiene formularios avanzados ni SEO técnico.'
            ]
          },
          {
            title: 'Matriz de decisión: elige con criterio',
            items: [
              'Tiempo de inicio: WordPress = Alto / Framer-Carrd = Bajo / Google Sites = Muy bajo.',
              'Control de diseño: WordPress = Alto / Framer = Medio-alto / Google Sites = Bajo.',
              'SEO técnico: WordPress = Avanzado / Framer = Intermedio / Google Sites = Mínimo.',
              'Costo inicial: todos tienen versión gratuita o de bajo costo para comenzar.',
              'Regla de oro: elige la herramienta que te permita publicar bien dentro del tiempo del semestre.'
            ]
          },
          {
            title: 'Publicar con criterio vale más que publicar con complejidad',
            items: [
              'Una landing publicada en Carrd que comunica bien su propuesta de valor supera a un WordPress abandonado a mitad de configuración.',
              'El objetivo no es demostrar destreza técnica: es publicar una página que cumpla su objetivo de campaña.',
              'La herramienta más viable es la que le permite al proyecto crecer, no la más sofisticada del mercado.'
            ]
          },
          {
            title: 'Pasos mínimos para iniciar',
            items: [
              'WordPress: hosting → instalación → tema ligero (Astra o Hello Elementor) → constructor → primera página en blanco.',
              'Framer: cuenta gratuita → plantilla base o lienzo en blanco → hero section inicial.',
              'Carrd: cuenta → nueva página → sección de inicio con titular y CTA.',
              'En todos los casos: configura primero; diseña después. El orden importa.'
            ]
          },
          {
            title: 'Actividad: Plan de implementación',
            items: [
              'Abre tu prototipo de la Unidad 2 y evalúa: ¿cuántas páginas? ¿Hay formulario? ¿Landing o sitio?',
              'Completa la ficha de decisión: herramienta elegida, tres criterios de justificación, riesgo principal y cómo lo mitigarás.',
              'Escribe en el chat: herramienta elegida + una frase de justificación en menos de 20 palabras.',
              'Componente de evaluación: talleres y ejercicios aplicados (30 %).'
            ]
          },
          {
            title: 'Ideas clave y proyección',
            items: [
              'La herramienta debe servir al objetivo del proyecto, no desplazarlo.',
              'Una ruta viable reduce el bloqueo y mejora la continuidad del proyecto integrador.',
              'Tarea asincrónica: crea tu cuenta y configura el entorno básico antes de la próxima sesión.',
              'Próxima sesión — Unidad 3, Tema 2: Maquetación por secciones y adaptación responsive.'
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo:
          'Maquetación por secciones y adaptación a dispositivos: móvil, tablet y escritorio',
        descripcion:
          'Construcción visual de la página web con prioridad en lectura, ritmo y adaptación responsive.',
        href: '/unidad3/tema2',
        disponible: true,
        panorama:
          'Una vez definida la ruta de publicación, el siguiente paso es maquetar la página web por secciones y asegurar que su lectura funcione correctamente en distintos tamaños de pantalla. El foco está en ritmo visual, espaciado y adaptación responsive.',
        objetivos: [
          'Construir la página por bloques según el prototipo validado.',
          'Ajustar espaciado, jerarquía y alineación en móvil y escritorio.',
          'Mantener consistencia visual entre secciones.'
        ],
        ideasClave: [
          'Responsive no es encoger; es reorganizar con intención.',
          'La maquetación debe respetar la jerarquía definida en el prototipo.',
          'La claridad visual depende de ritmo, alineación y contraste.'
        ],
        actividad:
          'Maqueta las secciones principales de tu página web y documenta ajustes clave para versión móvil.',
        evidencia: 'Avance funcional de la página con adaptación responsive.',
        herramientas: [
          'Constructor visual o CMS elegido',
          'Vista previa móvil',
          'Guía de espaciado y jerarquía'
        ],
        presentationBlocks: [
          {
            title: 'Responsive con criterio',
            items: [
              'Responsive no es encoger: es reorganizar para mantener lectura y acción principal.',
              'La prioridad móvil suele justificarse porque gran parte del tráfico llega desde teléfonos.',
              'Jerarquía, espaciado y alineación deben revisarse por vista, no asumirse automáticos.'
            ]
          },
          {
            title: 'Modelo útil de maquetación',
            items: [
              'Sección: bloque funcional del mensaje.',
              'Columna: organiza relaciones visuales y jerarquía.',
              'Elemento: pieza concreta que debe mantener claridad y consistencia.'
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo:
          'Formularios, captura de contactos y rutas de conversión simples',
        descripcion:
          'Integración de mecanismos de respuesta medible: formularios, botones o enlaces de acción.',
        href: '/unidad3/tema3',
        disponible: true,
        panorama:
          'La página web debe facilitar una acción concreta. Este tema trabaja formularios, botones y rutas de conversión simples para que la página no solo informe, sino que también permita registrar una respuesta útil para marketing.',
        objetivos: [
          'Configurar un mecanismo funcional de conversión o contacto.',
          'Diseñar llamados a la acción claros y visibles.',
          'Verificar que la respuesta del usuario pueda registrarse correctamente.'
        ],
        ideasClave: [
          'La conversión necesita una acción visible y una fricción mínima.',
          'No toda conversión es compra: también puede ser contacto, registro o consulta.',
          'La prueba funcional es parte del diseño.'
        ],
        actividad:
          'Integra un formulario o mecanismo de contacto y verifica su funcionamiento de extremo a extremo.',
        evidencia:
          'Prueba funcional de conversión con capturas o registro de verificación.',
        herramientas: [
          'Formulario nativo o embebido',
          'Botones de acción',
          'Google Forms o Tally',
          'Registro de pruebas'
        ],
        presentationBlocks: [
          {
            title: 'Conversión simple, pero medible',
            items: [
              'Los formularios con demasiados campos elevan abandono; en escenarios iniciales conviene priorizar entre 3 y 5 datos realmente útiles.',
              'No toda conversión es compra: contacto, registro, descarga o WhatsApp también pueden ser objetivos válidos.',
              'El CTA debe estar visible y el recorrido completo debe probarse de punta a punta.'
            ]
          },
          {
            title: 'Heurísticas de captura',
            items: [
              'Los formatos más invasivos pueden captar más, pero deben justificarse por contexto.',
              'Una acción principal visible suele rendir mejor que varias acciones compitiendo al mismo tiempo.',
              'La confirmación posterior a la acción también forma parte de la experiencia.'
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo:
          'Revisión de calidad antes de publicar: enlaces, legibilidad, carga y recursos',
        descripcion:
          'Control final de la página web antes de entregarla o compartirla como producto funcional.',
        href: '/unidad3/tema4',
        disponible: true,
        panorama:
          'Antes de presentar la página web, es necesario revisar enlaces, legibilidad, recursos visuales, tiempos de carga y coherencia general. Este tema consolida la etapa de control de calidad con criterios prácticos y verificables.',
        objetivos: [
          'Aplicar una revisión final de calidad visual y funcional.',
          'Corregir errores de enlace, contraste, lectura o carga básica.',
          'Preparar la página web para su entrega o socialización.'
        ],
        ideasClave: [
          'La calidad se verifica, no se asume.',
          'Detalles pequeños pueden afectar confianza y conversión.',
          'Una revisión final ordenada mejora la presentación profesional.'
        ],
        actividad:
          'Ejecuta una revisión final con lista de cotejo y aplica correcciones antes de publicar o entregar.',
        evidencia:
          'Página web publicada o compartible con observaciones corregidas.',
        herramientas: [
          'Lista de verificación final',
          'Prueba de enlaces',
          'Revisión en móvil y escritorio'
        ],
        presentationBlocks: [
          {
            title: 'Umbrales mínimos de salida',
            items: [
              'Los enlaces deben funcionar y la lectura móvil debe validarse en condiciones reales.',
              'HTTPS, tiempos de carga razonables y coherencia visual elevan confianza antes incluso del contenido profundo.',
              'Una revisión final ordenada evita que errores pequeños arruinen la percepción profesional del proyecto.'
            ]
          },
          {
            title: 'Checklist útil de prepublicación',
            items: [
              'Probar navegación y CTA principales.',
              'Comprobar formularios, recursos visuales y textos visibles.',
              'Verificar versión móvil, escritorio y legibilidad general.'
            ]
          }
        ]
      }
    ]
  },
  {
    numero: 4,
    titulo: 'Optimización, medición y proyección profesional',
    descripcion:
      'Evalúa, mejora y sustenta la página web con criterios de conversión, visibilidad y medición básica.',
    color: 'purple',
    iconName: 'Zap',
    capacidad:
      'Evaluar el desempeño de la página web y proponer mejoras con base en objetivos, métricas y criterios de presentación profesional.',
    evidencia:
      'Versión optimizada de la página web y reporte ejecutivo de mejoras con medición básica.',
    temas: [
      {
        numero: 1,
        titulo: 'Principios de optimización orientada a la conversión',
        descripcion:
          'Criterios para detectar oportunidades de mejora en claridad, estructura y llamados a la acción.',
        href: '/unidad4/tema1',
        disponible: true,
        panorama:
          'Optimizar no significa rehacer todo, sino identificar qué elementos generan más fricción o menor respuesta. Este tema revisa principios básicos de optimización orientada a la conversión para tomar decisiones de mejora con criterio.',
        objetivos: [
          'Detectar puntos de fricción en una página ya construida.',
          'Priorizar mejoras según impacto esperado.',
          'Relacionar ajustes visuales y de contenido con conversión.'
        ],
        ideasClave: [
          'Se mejora primero lo que más impacta en claridad y acción.',
          'Optimizar implica observar, comparar y justificar cambios.',
          'La conversión mejora cuando disminuye la fricción.'
        ],
        actividad:
          'Realiza una auditoría breve de la página web y prioriza tres mejoras de alto impacto.',
        evidencia: 'Lista priorizada de mejoras con justificación.',
        herramientas: [
          'Checklist CRO básico',
          'Matriz impacto-esfuerzo',
          'Capturas antes y después'
        ],
        presentationBlocks: [
          {
            title: 'Marco básico de CRO',
            items: [
              'La tasa de conversión se calcula como conversiones divididas para visitas, multiplicado por 100.',
              'Optimizar primero puede rendir más que atraer más tráfico si la página web ya pierde usuarios por fricción.',
              'La matriz impacto-esfuerzo ayuda a decidir qué mejorar primero.'
            ]
          },
          {
            title: 'Señales de oportunidad',
            items: [
              'CTA poco visible o ambiguo.',
              'Demasiadas decisiones en una sola pantalla.',
              'Mensaje principal débil o sin prueba social suficiente.'
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo:
          'Fundamentos de visibilidad, estructura SEO y rendimiento básico',
        descripcion:
          'Ajustes elementales para que la página web sea encontrable, legible y técnicamente más sólida.',
        href: '/unidad4/tema2',
        disponible: true,
        panorama:
          'La página web debe ser comprensible para usuarios y ordenada para buscadores. Este tema aborda títulos, estructura, legibilidad, textos alternativos y mejoras de rendimiento básico sin exigir configuraciones avanzadas.',
        objetivos: [
          'Aplicar criterios básicos de SEO on-page y estructura semántica.',
          'Revisar elementos que impactan legibilidad y rendimiento.',
          'Incorporar mejoras técnicas básicas sin aumentar la complejidad del proyecto.'
        ],
        ideasClave: [
          'La visibilidad comienza con una estructura clara y bien nombrada.',
          'El rendimiento percibido afecta experiencia y permanencia.',
          'SEO básico y calidad editorial trabajan juntos.'
        ],
        actividad:
          'Ajusta títulos, descripciones, textos alternativos y recursos pesados de tu página web.',
        evidencia: 'Registro de ajustes aplicados a SEO y rendimiento básico.',
        herramientas: [
          'Revisión de headings',
          'PageSpeed Insights',
          'Checklist SEO on-page'
        ],
        presentationBlocks: [
          {
            title: 'SEO técnico y rendimiento en lenguaje claro',
            items: [
              'Rastreo, indexación y estructura son la base para que la página web sea encontrable.',
              'Cada segundo extra de carga puede afectar permanencia y conversión.',
              'Core Web Vitals como LCP, INP y CLS ayudan a traducir rendimiento técnico a experiencia percibida.'
            ]
          },
          {
            title: 'Ajustes mínimos con más retorno',
            items: [
              'Headings claros y bien jerarquizados.',
              'Imágenes optimizadas y textos alternativos útiles.',
              'Revisión básica en PageSpeed antes de dar por terminada la página web.'
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo:
          'Medición básica del comportamiento, conversiones e interpretación de datos',
        descripcion:
          'Lectura inicial de señales de uso y respuesta para tomar decisiones de mejora.',
        href: '/unidad4/tema3',
        disponible: true,
        panorama:
          'Medir permite decidir con evidencia. Este tema introduce una aproximación básica a indicadores de comportamiento, conversiones y observación de resultados para construir una mejora razonada de la página web.',
        objetivos: [
          'Identificar indicadores simples de comportamiento y conversión.',
          'Relacionar métricas básicas con oportunidades de mejora.',
          'Redactar observaciones claras a partir de datos y pruebas.'
        ],
        ideasClave: [
          'No se necesita analítica avanzada para comenzar a mejorar.',
          'Los datos deben leerse en función del objetivo de la página web.',
          'Medir sirve para decidir, no solo para registrar.'
        ],
        actividad:
          'Elabora un reporte breve con observaciones sobre comportamiento, conversiones o pruebas realizadas.',
        evidencia:
          'Borrador de reporte ejecutivo de resultados y oportunidades.',
        herramientas: [
          'Registro de interacciones',
          'GA4 o analítica básica si aplica',
          'Tabla simple de hallazgos'
        ],
        presentationBlocks: [
          {
            title: 'Métricas que sí ayudan a decidir',
            items: [
              'En analítica básica importa más entender comportamiento y respuesta que coleccionar números.',
              'GA4 trabaja por eventos; esto facilita leer acciones como clics, formularios o conversiones.',
              'Los embudos permiten ubicar dónde se pierde la mayor parte del recorrido del usuario.'
            ]
          },
          {
            title: 'Lectura mínima de datos',
            items: [
              'Relaciona cada dato con el objetivo de la página web.',
              'Identifica una oportunidad, no diez a la vez.',
              'Convierte la observación en una recomendación accionable.'
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo:
          'Iteración de la página web, presentación final y argumentación de mejoras',
        descripcion:
          'Cierre del proyecto con ajustes finales, sustentación y enfoque profesional.',
        href: '/unidad4/tema4',
        disponible: true,
        panorama:
          'El cierre del curso exige revisar, optimizar y presentar la página web como una solución justificada. Este tema prepara la entrega final y la argumentación de decisiones de diseño, contenido, publicación y mejora.',
        objetivos: [
          'Consolidar la versión final de la página web.',
          'Sustentar decisiones de mejora con argumentos claros.',
          'Presentar el proyecto con criterio profesional y académico.'
        ],
        ideasClave: [
          'Presentar bien también es parte del diseño.',
          'Una mejora vale más cuando se puede justificar.',
          'El proyecto final debe evidenciar proceso, no solo resultado.'
        ],
        actividad:
          'Prepara la entrega final de la página web y una exposición breve que resuma decisiones, mejoras y resultados.',
        evidencia: 'Página web optimizada y reporte ejecutivo final.',
        herramientas: [
          'Guion de presentación',
          'Versión final publicada o compartible',
          'Reporte ejecutivo de mejoras'
        ],
        presentationBlocks: [
          {
            title: 'Secuencia recomendada para cerrar el proyecto',
            items: [
              'Prototipo validado antes de la publicación final.',
              'Página web publicada o compartible con rutas de conversión funcionales.',
              'Cierre con medición básica, mejoras justificadas y defensa clara del proceso.'
            ]
          },
          {
            title: 'Umbrales de calidad para la entrega',
            items: [
              'Versión final consistente entre diseño, mensaje y objetivo.',
              'Pruebas de funcionamiento, legibilidad y desempeño básicas completadas.',
              'Presentación breve que explique decisiones, mejoras y resultados sin depender de material externo.'
            ]
          }
        ]
      }
    ]
  }
];
