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
    descripcion: 'Comprende cómo una página web organiza la atención, la comprensión y la acción del usuario.',
    color: 'amber',
    iconName: 'BookOpen',
    capacidad: 'Comprender el rol de la página web dentro de una campaña y estructurarla para guiar la atención, la comprensión y la acción del usuario.',
    evidencia: 'Brief de campaña, mapa de estructura y lista de cotejo de calidad.',
    temas: [
      {
        numero: 1,
        titulo: 'Rol de la página web en la estrategia de marketing digital y en el embudo de conversión',
        descripcion: 'Cómo una página de campaña se conecta con objetivos, públicos y decisiones medibles.',
        href: '/unidad1/tema1',
        disponible: true,
        panorama: 'Este tema introduce la lógica estratégica del curso: una página web no es una pieza aislada, sino una solución digital que debe responder a objetivos concretos de captación, interacción o conversión. El análisis parte de la relación entre objetivo, mensaje, audiencia y acción esperada.',
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
        actividad: 'Elabora un brief corto de campaña que incluya objetivo, público, propuesta de valor y acción principal esperada.',
        evidencia: 'Brief inicial de la página web con objetivo y público definidos.',
        herramientas: ['Brief de campaña', 'Mapa simple del embudo de conversión', 'Benchmark de páginas de referencia'],
        presentationBlocks: [
          {
            title: 'Marco estratégico para explicar el tema',
            items: [
              'Visibilidad: la página web permite presencia continua y amplía el alcance del mensaje.',
              'Credibilidad: una interfaz profesional funciona como señal inmediata de confianza.',
              'Conversión: toda página debe orientar una acción medible, no solo informar.'
            ]
          },
          {
            title: 'Proceso base de creación de la página web',
            items: [
              'Planeación: objetivo, público, propuesta de valor y alcance.',
              'Análisis: competencia, necesidades del usuario y contenido disponible.',
              'Diseño, implementación y mantenimiento: la calidad de la página web depende de revisar cada fase, no solo del resultado visual.'
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo: 'Principios de UX/UI aplicados a páginas de campaña y experiencias digitales',
        descripcion: 'Criterios para diseñar interfaces claras, útiles y coherentes con el comportamiento del usuario.',
        href: '/unidad1/tema2',
        disponible: true,
        panorama: 'La experiencia de usuario organiza la interacción; la interfaz da forma visible a esa experiencia. Este tema se centra en principios de jerarquía, consistencia, contraste y orientación visual aplicados a páginas de campaña.',
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
        actividad: 'Analiza dos páginas de referencia y compara cómo resuelven navegación, jerarquía y llamados a la acción.',
        evidencia: 'Ficha comparativa de criterios UX/UI aplicados.',
        herramientas: ['Heurísticas de usabilidad', 'Referentes visuales', 'Notas de evaluación UX'],
        presentationBlocks: [
          {
            title: 'Heurísticas con impacto medible',
            items: [
              'Cambios pequeños en interfaz pueden alterar la respuesta: en casos de referencia, un CTA más claro puede elevar la conversión de forma significativa.',
              'El espacio en blanco no es relleno: mejora comprensión, orden visual y lectura rápida.',
              'La lectura digital suele seguir patrones de escaneo como el modelo F, por eso importa qué aparece primero.'
            ]
          },
          {
            title: 'Checklist rápido de interfaz',
            items: [
              '¿El llamado a la acción principal destaca claramente por contraste?',
              '¿El usuario entiende qué hacer sin leer toda la pantalla?',
              '¿La jerarquía visual prioriza tarea y no decoración?'
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo: 'Jerarquía visual, tipografía, color y composición para comunicar y persuadir',
        descripcion: 'Recursos visuales para destacar prioridades, reforzar mensajes y guiar decisiones.',
        href: '/unidad1/tema3',
        disponible: true,
        panorama: 'La jerarquía visual organiza la lectura y orienta la atención. Este tema trabaja composición, contraste, tipografía y color como recursos para comunicar con intención y reforzar una propuesta de valor.',
        objetivos: [
          'Organizar visualmente una interfaz según prioridades de lectura.',
          'Usar tipografía y color para reforzar claridad y coherencia.',
          'Aplicar principios de composición a bloques de contenido.'
        ],
        ideasClave: [
          'Lo importante debe ser visible antes de que el usuario lea en profundidad.',
          'Tipografía y color no decoran: comunican y ordenan.',
          'Una composición clara reduce carga cognitiva.'
        ],
        actividad: 'Rediseña el hero de una página de campaña y justifica su jerarquía visual.',
        evidencia: 'Boceto o esquema visual con decisiones de composición justificadas.',
        herramientas: ['Paleta base de marca', 'Escala tipográfica', 'Wireframe de hero section'],
        presentationBlocks: [
          {
            title: 'Indicadores de fricción que conviene explicar',
            items: [
              'Una arquitectura confusa aumenta abandono porque el usuario no entiende dónde está ni qué sigue.',
              'La accesibilidad no es un extra ético solamente: mejora comprensión, alcance y calidad percibida.',
              'Los primeros segundos de lectura definen si el usuario profundiza o se retira.'
            ]
          },
          {
            title: 'Marco de auditoría útil para clase',
            items: [
              'Usa heurísticas de Nielsen como referencia para revisar orientación, consistencia y control del usuario.',
              'Evalúa contraste, tamaño tipográfico y secuencia de lectura antes de discutir estilo.',
              'La composición debe responder a prioridades de lectura, no al gusto personal.'
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo: 'Usabilidad, accesibilidad y lectura móvil como criterios de calidad',
        descripcion: 'Buenas prácticas para que la experiencia sea comprensible, inclusiva y efectiva en distintos dispositivos.',
        href: '/unidad1/tema4',
        disponible: true,
        panorama: 'La calidad de una página web también se mide por su facilidad de uso, su accesibilidad y su comportamiento en móvil. Este tema introduce criterios mínimos para revisar legibilidad, navegación, contraste y adaptación a pantallas pequeñas.',
        objetivos: [
          'Aplicar criterios básicos de usabilidad y accesibilidad.',
          'Evaluar lectura y navegación en móvil.',
          'Construir una lista de cotejo para revisión de calidad.'
        ],
        ideasClave: [
          'Una página útil debe poder leerse y recorrerse con facilidad.',
          'La accesibilidad mejora la experiencia de todas las personas usuarias.',
          'Móvil ya no es opcional: es parte central del diseño.'
        ],
        actividad: 'Revisa un prototipo o página existente con una lista de cotejo de calidad visual, legibilidad y accesibilidad.',
        evidencia: 'Lista de cotejo aplicada con observaciones y mejoras sugeridas.',
        herramientas: ['Checklist de usabilidad', 'Revisión en móvil', 'Criterios básicos de accesibilidad'],
        presentationBlocks: [
          {
            title: 'Móvil y calidad percibida',
            items: [
              'El tráfico móvil suele ser mayoritario; por eso la lectura y la navegación deben validarse primero en pantallas pequeñas.',
              'Diseñar mobile-first obliga a priorizar contenido, espaciado y acción principal.',
              'Una página accesible y legible reduce fricción para todas las personas usuarias, no solo para casos especiales.'
            ]
          },
          {
            title: 'Lista corta de control antes de publicar',
            items: [
              'Contraste suficiente entre texto y fondo.',
              'Botones y enlaces fáciles de pulsar en móvil.',
              'Mensajes, navegación y CTA comprensibles en menos de una pantalla.'
            ]
          }
        ]
      }
    ]
  },
  {
    numero: 2,
    titulo: 'Arquitectura de la información, contenido persuasivo y prototipado',
    descripcion: 'Traduce la propuesta de valor en estructura, mensaje y prototipos validables antes de publicar.',
    color: 'blue',
    iconName: 'Monitor',
    capacidad: 'Diseñar el recorrido del usuario y traducir la propuesta de valor en una estructura clara, persuasiva y validable antes de publicar.',
    evidencia: 'Contenido final por secciones y prototipo navegable o maqueta visual validable.',
    temas: [
      {
        numero: 1,
        titulo: 'Segmentación, intención del usuario y enfoque del mensaje',
        descripcion: 'Definición del público, sus necesidades y el ángulo de comunicación más pertinente.',
        href: '/unidad2/tema1',
        disponible: true,
        panorama: 'El contenido solo funciona cuando responde a una intención concreta. Este tema organiza el mensaje desde el perfil del usuario, sus motivaciones, objeciones y el momento en que entra en contacto con la propuesta.',
        objetivos: [
          'Definir el perfil del usuario y su intención principal.',
          'Priorizar la propuesta de valor más relevante para ese perfil.',
          'Elegir un enfoque de mensaje claro y diferenciado.'
        ],
        ideasClave: [
          'No se comunica igual a todos los públicos ni en todos los momentos.',
          'La propuesta de valor debe responder a una necesidad concreta.',
          'El mensaje central guía el resto del contenido.'
        ],
        actividad: 'Construye una ficha de usuario con objetivo, necesidad, objeción y promesa principal.',
        evidencia: 'Perfil de usuario y mensaje central de la página web.',
        herramientas: ['Ficha de audiencia', 'Mapa de empatía', 'Propuesta de valor'],
        presentationBlocks: [
          {
            title: 'Preguntas filtro para definir mensaje',
            items: [
              '¿Quién es la persona usuaria y en qué momento de decisión entra a la página?',
              '¿Qué objeción principal debe resolverse antes de pedir una acción?',
              '¿Qué promesa concreta y verificable puede sostener el contenido?'
            ]
          },
          {
            title: 'Heurística de enfoque',
            items: [
              'Si el mensaje intenta hablarle a todo el mundo, pierde claridad y fuerza.',
              'El usuario decide muy rápido si una página le sirve; por eso el enfoque debe aparecer de inmediato.',
              'La promesa central debe poder resumirse en una frase breve y entendible.'
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo: 'Organización de contenidos por bloques, secciones y recorrido del usuario',
        descripcion: 'Estructuración del contenido para que el usuario avance con lógica y sin fricción.',
        href: '/unidad2/tema2',
        disponible: true,
        panorama: 'Una buena arquitectura de la información permite decidir qué mostrar primero, cómo agrupar contenidos y en qué orden presentar beneficios, evidencia y llamados a la acción. Este tema organiza el recorrido del usuario por bloques funcionales.',
        objetivos: [
          'Ordenar contenidos por prioridad y función comunicativa.',
          'Diseñar el recorrido del usuario por secciones.',
          'Construir una estructura lógica para una página de campaña.'
        ],
        ideasClave: [
          'El orden del contenido modifica la comprensión y la respuesta del usuario.',
          'Cada bloque debe cumplir una función concreta dentro del recorrido.',
          'La arquitectura reduce desorden y mejora claridad.'
        ],
        actividad: 'Diseña un wireframe estructural con las secciones principales de la página y su propósito.',
        evidencia: 'Mapa de secciones o wireframe funcional.',
        herramientas: ['Wireframe', 'Mapa de contenido', 'Secuencia narrativa por bloques'],
        presentationBlocks: [
          {
            title: 'Arquitectura que convierte',
            items: [
              'Una mala navegación incrementa abandono porque obliga al usuario a pensar demasiado.',
              'La regla de los 3 clics ayuda a revisar si el contenido importante está demasiado enterrado.',
              'El orden de las secciones cambia comprensión, confianza y respuesta.'
            ]
          },
          {
            title: 'Secuencia útil de bloques',
            items: [
              'Hero: propuesta de valor y acción principal.',
              'Beneficios y prueba social: reducen riesgo percibido.',
              'Cierre con CTA: convierte la lectura en respuesta.'
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo: 'Redacción de titulares, beneficios, prueba social y llamados a la acción',
        descripcion: 'Construcción de textos breves, claros y persuasivos para cada bloque clave.',
        href: '/unidad2/tema3',
        disponible: true,
        panorama: 'La persuasión en una página depende en gran parte del lenguaje. Este tema trabaja titulares, beneficios, prueba social y llamados a la acción como elementos que reducen incertidumbre y orientan la respuesta del usuario.',
        objetivos: [
          'Redactar titulares claros y alineados a una propuesta de valor.',
          'Transformar características en beneficios comprensibles.',
          'Construir llamados a la acción concretos y visibles.'
        ],
        ideasClave: [
          'El usuario primero busca claridad, luego profundidad.',
          'Los beneficios deben hablar del resultado para la persona usuaria.',
          'La prueba social ayuda a reducir riesgo percibido.'
        ],
        actividad: 'Escribe el contenido de un hero, una sección de beneficios y un CTA final para tu proyecto.',
        evidencia: 'Borrador de contenidos por secciones.',
        herramientas: ['Plantilla de copy', 'Banco de CTA', 'Ejemplos de prueba social'],
        presentationBlocks: [
          {
            title: 'Criterios de copy persuasivo',
            items: [
              'Convierte características en beneficios: explica el resultado para la persona usuaria, no solo la función.',
              'La prueba social reduce riesgo y acelera la decisión cuando el mensaje principal ya es claro.',
              'Un CTA fuerte usa verbo, beneficio y dirección concreta de la acción.'
            ]
          },
          {
            title: 'Errores comunes del mensaje',
            items: [
              'Titulares ambiguos que suenan bonitos pero no dicen qué se ofrece.',
              'Bloques extensos sin jerarquía ni subtítulos.',
              'Llamados a la acción genéricos que no explican el siguiente paso.'
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo: 'Prototipado de baja y media fidelidad con herramientas visuales y criterios de marca',
        descripcion: 'Conversión de la estructura y el contenido en una maqueta navegable y presentable.',
        href: '/unidad2/tema4',
        disponible: true,
        panorama: 'El prototipo permite validar estructura, contenido y dirección visual antes de publicar. Este tema se concentra en transformar el esquema de contenidos en una propuesta visual navegable con criterios de marca y consistencia.',
        objetivos: [
          'Pasar de wireframe a maqueta visual con criterios de marca.',
          'Preparar un prototipo que pueda revisarse y mejorarse.',
          'Detectar ajustes antes de la fase de publicación.'
        ],
        ideasClave: [
          'Prototipar ahorra tiempo, errores y retrabajo en publicación.',
          'La fidelidad visual debe responder al objetivo de validación.',
          'Una maqueta útil es aquella que puede discutirse y corregirse.'
        ],
        actividad: 'Construye un prototipo navegable de tu página con estructura, copy y estilo base.',
        evidencia: 'Prototipo navegable o maqueta visual validable.',
        herramientas: ['Figma o herramienta equivalente', 'Guía de marca básica', 'Checklist de revisión visual'],
        presentationBlocks: [
          {
            title: 'Disciplina de prototipado',
            items: [
              'Prototipar primero evita corregir problemas caros cuando ya se está publicando.',
              'El sistema de 8 px ayuda a mantener ritmo visual y consistencia entre bloques.',
              'Conviene validar tres vistas mínimas: móvil, tablet y escritorio.'
            ]
          },
          {
            title: 'Por qué Figma sigue siendo útil',
            items: [
              'El mercado laboral suele pedir prototipos y handoff claros; por eso el dominio de herramientas visuales sigue siendo transferible.',
              'Un mockup bien hecho permite discutir marca, estructura y prioridad sin distraerse con la tecnología final.',
              'La fidelidad media suele ser suficiente para validar recorrido y propuesta de valor.'
            ]
          }
        ]
      }
    ]
  },
  {
    numero: 3,
    titulo: 'Producción y publicación de la página web con herramientas viables',
    descripcion: 'Publica una página funcional con herramientas accesibles, coherencia visual y rutas de conversión simples.',
    color: 'emerald',
    iconName: 'Palette',
    capacidad: 'Construir y publicar una página web funcional mediante herramientas accesibles, cuidando lectura móvil, coherencia visual y cumplimiento del objetivo de campaña.',
    evidencia: 'Página web publicada o compartible y formulario o mecanismo de conversión funcional.',
    temas: [
      {
        numero: 1,
        titulo: 'Publicación de páginas en entornos de baja fricción: nube, constructores visuales y CMS accesibles',
        descripcion: 'Selección de ruta de publicación según viabilidad técnica, tiempo y objetivo del proyecto.',
        href: '/unidad3/tema1',
        disponible: true,
        panorama: 'La publicación de la página web no debe depender de barreras técnicas innecesarias. Este tema compara rutas viables como WordPress en la nube, constructores visuales y otras herramientas accesibles para asegurar ejecución realista.',
        objetivos: [
          'Comparar rutas de publicación según complejidad y alcance.',
          'Elegir una herramienta viable para el contexto del curso.',
          'Justificar la selección de una ruta de implementación.'
        ],
        ideasClave: [
          'La herramienta debe servir al objetivo, no desplazarlo.',
          'Una ruta viable reduce bloqueo y mejora continuidad del proyecto.',
          'Publicar con criterio es más importante que publicar con complejidad.'
        ],
        actividad: 'Elige la ruta de publicación de tu proyecto y susténtala con criterios de viabilidad, tiempo y funcionalidad.',
        evidencia: 'Plan breve de implementación y herramienta seleccionada.',
        herramientas: ['WordPress en nube', 'Carrd', 'Canva', 'Google Sites', 'Framer u otra opción validada'],
        presentationBlocks: [
          {
            title: 'Criterios para elegir plataforma',
            items: [
              'La plataforma debe responder a tiempo, complejidad y control requerido, no a moda tecnológica.',
              'WordPress sigue siendo una ruta fuerte por flexibilidad y ecosistema, pero no siempre es la mejor si el objetivo es una landing simple.',
              'Probar primero en un entorno seguro evita publicar errores en producción.'
            ]
          },
          {
            title: 'Decisión mínima viable',
            items: [
              'Más control implica más configuración.',
              'Menos fricción implica menor personalización.',
              'La mejor ruta es la que permite publicar bien dentro del contexto del curso.'
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo: 'Maquetación por secciones y adaptación a dispositivos: móvil, tablet y escritorio',
        descripcion: 'Construcción visual de la página web con prioridad en lectura, ritmo y adaptación responsive.',
        href: '/unidad3/tema2',
        disponible: true,
        panorama: 'Una vez definida la ruta de publicación, el siguiente paso es maquetar la página web por secciones y asegurar que su lectura funcione correctamente en distintos tamaños de pantalla. El foco está en ritmo visual, espaciado y adaptación responsive.',
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
        actividad: 'Maqueta las secciones principales de tu página web y documenta ajustes clave para versión móvil.',
        evidencia: 'Avance funcional de la página con adaptación responsive.',
        herramientas: ['Constructor visual o CMS elegido', 'Vista previa móvil', 'Guía de espaciado y jerarquía'],
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
        titulo: 'Formularios, captura de contactos y rutas de conversión simples',
        descripcion: 'Integración de mecanismos de respuesta medible: formularios, botones o enlaces de acción.',
        href: '/unidad3/tema3',
        disponible: true,
        panorama: 'La página web debe facilitar una acción concreta. Este tema trabaja formularios, botones y rutas de conversión simples para que la página no solo informe, sino que también permita registrar una respuesta útil para marketing.',
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
        actividad: 'Integra un formulario o mecanismo de contacto y verifica su funcionamiento de extremo a extremo.',
        evidencia: 'Prueba funcional de conversión con capturas o registro de verificación.',
        herramientas: ['Formulario nativo o embebido', 'Botones de acción', 'Google Forms o Tally', 'Registro de pruebas'],
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
        titulo: 'Revisión de calidad antes de publicar: enlaces, legibilidad, carga y recursos',
        descripcion: 'Control final de la página web antes de entregarla o compartirla como producto funcional.',
        href: '/unidad3/tema4',
        disponible: true,
        panorama: 'Antes de presentar la página web, es necesario revisar enlaces, legibilidad, recursos visuales, tiempos de carga y coherencia general. Este tema consolida la etapa de control de calidad con criterios prácticos y verificables.',
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
        actividad: 'Ejecuta una revisión final con lista de cotejo y aplica correcciones antes de publicar o entregar.',
        evidencia: 'Página web publicada o compartible con observaciones corregidas.',
        herramientas: ['Lista de verificación final', 'Prueba de enlaces', 'Revisión en móvil y escritorio'],
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
    descripcion: 'Evalúa, mejora y sustenta la página web con criterios de conversión, visibilidad y medición básica.',
    color: 'purple',
    iconName: 'Zap',
    capacidad: 'Evaluar el desempeño de la página web y proponer mejoras con base en objetivos, métricas y criterios de presentación profesional.',
    evidencia: 'Versión optimizada de la página web y reporte ejecutivo de mejoras con medición básica.',
    temas: [
      {
        numero: 1,
        titulo: 'Principios de optimización orientada a la conversión',
        descripcion: 'Criterios para detectar oportunidades de mejora en claridad, estructura y llamados a la acción.',
        href: '/unidad4/tema1',
        disponible: true,
        panorama: 'Optimizar no significa rehacer todo, sino identificar qué elementos generan más fricción o menor respuesta. Este tema revisa principios básicos de optimización orientada a la conversión para tomar decisiones de mejora con criterio.',
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
        actividad: 'Realiza una auditoría breve de la página web y prioriza tres mejoras de alto impacto.',
        evidencia: 'Lista priorizada de mejoras con justificación.',
        herramientas: ['Checklist CRO básico', 'Matriz impacto-esfuerzo', 'Capturas antes y después'],
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
        titulo: 'Fundamentos de visibilidad, estructura SEO y rendimiento básico',
        descripcion: 'Ajustes elementales para que la página web sea encontrable, legible y técnicamente más sólida.',
        href: '/unidad4/tema2',
        disponible: true,
        panorama: 'La página web debe ser comprensible para usuarios y ordenada para buscadores. Este tema aborda títulos, estructura, legibilidad, textos alternativos y mejoras de rendimiento básico sin exigir configuraciones avanzadas.',
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
        actividad: 'Ajusta títulos, descripciones, textos alternativos y recursos pesados de tu página web.',
        evidencia: 'Registro de ajustes aplicados a SEO y rendimiento básico.',
        herramientas: ['Revisión de headings', 'PageSpeed Insights', 'Checklist SEO on-page'],
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
        titulo: 'Medición básica del comportamiento, conversiones e interpretación de datos',
        descripcion: 'Lectura inicial de señales de uso y respuesta para tomar decisiones de mejora.',
        href: '/unidad4/tema3',
        disponible: true,
        panorama: 'Medir permite decidir con evidencia. Este tema introduce una aproximación básica a indicadores de comportamiento, conversiones y observación de resultados para construir una mejora razonada de la página web.',
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
        actividad: 'Elabora un reporte breve con observaciones sobre comportamiento, conversiones o pruebas realizadas.',
        evidencia: 'Borrador de reporte ejecutivo de resultados y oportunidades.',
        herramientas: ['Registro de interacciones', 'GA4 o analítica básica si aplica', 'Tabla simple de hallazgos'],
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
        titulo: 'Iteración de la página web, presentación final y argumentación de mejoras',
        descripcion: 'Cierre del proyecto con ajustes finales, sustentación y enfoque profesional.',
        href: '/unidad4/tema4',
        disponible: true,
        panorama: 'El cierre del curso exige revisar, optimizar y presentar la página web como una solución justificada. Este tema prepara la entrega final y la argumentación de decisiones de diseño, contenido, publicación y mejora.',
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
        actividad: 'Prepara la entrega final de la página web y una exposición breve que resuma decisiones, mejoras y resultados.',
        evidencia: 'Página web optimizada y reporte ejecutivo final.',
        herramientas: ['Guion de presentación', 'Versión final publicada o compartible', 'Reporte ejecutivo de mejoras'],
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
