# Clave de Respuestas y Pauta de Corrección — Bimestre I

## Diseño Web para Marketing Digital

**USO EXCLUSIVO DOCENTE — NO DISTRIBUIR**

**Fecha del examen:** 17 de junio de 2026
**Docente:** Ing. Ivan Paz
**Puntaje total:** 10 puntos

---

## SECCIÓN A — Preguntas Teóricas (6 puntos)

---

### Pregunta 1 — Estrategia digital y conversión (2 puntos)

**Indicadores esperados en la respuesta:**

| Criterio                        | Descripción                                                                                                                                                                                           | Pts |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Diferenciación conceptual clara | Define página informativa (transmite información, sin objetivo de acción inmediata) vs. página de conversión (diseñada para que el usuario realice una acción medible: compra, registro, contacto)    | 0.5 |
| Relación con el embudo          | Ubica la página informativa en etapas de conciencia/interés y la de conversión en decisión/acción                                                                                                     | 0.5 |
| Ejemplo concreto coherente      | Menciona un caso real o simulado con sentido (ej.: "sitio institucional del ITSAE" vs. "landing de inscripciones del ITSAE"; "perfil de empresa en Google" vs. "landing page de campaña en Riobamba") | 0.5 |
| Mención de propuesta de valor   | Conecta la propuesta de valor con la página de conversión y explica su función                                                                                                                        | 0.5 |

**Respuesta de referencia:**
Una página informativa comunica quién es la empresa, qué hace y qué ofrece, pero no orienta al usuario hacia una acción específica en ese momento. Su lugar en el embudo corresponde a las etapas de conciencia e interés. Una página de conversión, en cambio, está estructurada para llevar al usuario a realizar una acción concreta y medible (comprar, registrarse, contactar), y actúa principalmente en las etapas de decisión y acción. La propuesta de valor es el elemento central de la página de conversión: le dice al usuario, desde el primer bloque visible, qué gana si actúa. Por ejemplo: un sitio institucional de una universidad puede informar sobre sus carreras (página informativa), mientras que una landing page de inscripción tiene un único objetivo: que el visitante llene el formulario.

---

### Pregunta 2 — Jerarquía visual, UX y fricción (2 puntos)

**Indicadores esperados:** identificar al menos 4 de los siguientes problemas (0.5 pts por problema bien argumentado con principio + impacto + mejora):

| Problema                                   | Principio violado                                                     | Impacto                                                                                                     | Mejora                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Bajo contraste titular (gris sobre oscuro) | WCAG 1.4.3 — contraste mínimo 4.5:1 / Accesibilidad                   | El usuario no puede leer el mensaje principal; fricción visual inmediata                                    | Cambiar texto a blanco puro o color de alto contraste sobre el fondo; verificar ratio con herramienta WebAIM |
| CTA al pie sin repetición                  | H3 Nielsen (control y libertad) / Heurística de reducción de fricción | El usuario que aún no llegó al final no tiene oportunidad de actuar; abandono probable                      | Colocar CTA principal en el hero section y repetirlo antes del footer                                        |
| Menú con 9 opciones                        | H8 Nielsen (diseño minimalista) / Carga cognitiva                     | Paradoja de la elección: demasiadas opciones paralizan la decisión; el usuario no sabe hacia dónde ir       | Reducir a 3–5 ítems de navegación; agrupar opciones secundarias en dropdown o footer                         |
| Texto desbordado en móvil                  | Diseño responsivo / Mobile-First / Usabilidad móvil                   | El usuario no puede leer sin desplazarse horizontalmente; experiencia degradada en el dispositivo más usado | Aplicar contenedor con max-width y overflow-x: hidden; usar unidades relativas en el CSS                     |
| Botones difíciles de presionar en móvil    | Thumb Zone / Touch Targets (mínimo 44×44px)                           | Fricción táctil: el usuario presiona el elemento equivocado o no logra activar el CTA                       | Aumentar el área táctil del botón a mínimo 44×44px; separar elementos interactivos entre sí                  |
| Fotografía de fondo oscura                 | Jerarquía visual / Principio de contraste y claridad                  | El fondo compite con el texto, reduce legibilidad y no comunica la propuesta de valor                       | Usar overlay semitransparente o cambiar a fondo más neutro que potencie el texto                             |

**Nota:** Se aceptan hasta 5 problemas identificados; se evalúan los 4 mejor argumentados.

---

### Pregunta 3 — Arquitectura de la información y contenido persuasivo (2 puntos)

**Parte a) Análisis del mensaje (0.6 pts)**

El mensaje NO funciona como propuesta de valor efectiva. Criterios para justificar:

- **Prueba de los 5 segundos:** no se puede saber en 5 segundos qué ofrece exactamente la empresa ni para quién es.
- **Buyer persona:** el mensaje no está dirigido a nadie en particular ("empresas y emprendedores" es demasiado amplio).
- **Fórmula de propuesta de valor:** no incluye qué hace + para quién + qué problema resuelve + qué la diferencia.
- **Objeciones:** no anticipa ni responde ninguna objeción real del usuario.
- **Características vs. beneficios:** habla de la empresa (5 años, amplia gama), no del beneficio para el usuario.

**Parte b) Reescritura (0.7 pts)**

Ejemplo de respuesta correcta (se aceptan variantes del mismo rubro con coherencia interna):

> "Diseñamos la identidad visual de tu negocio en 7 días para que empieces a vender con marca profesional desde el primer mes."

O en otro rubro:

> "Lleva tu tienda de cajas de regalo a Instagram y WhatsApp: aceptamos pedidos en línea y entregamos en Riobamba el mismo día."

Criterios de evaluación: beneficio claro + audiencia definida + diferenciador o condición concreta + máximo 20 palabras.

**Parte c) Mapa de secciones con orden justificado (0.7 pts)**

Ejemplo de respuesta con patrón AIDA:

| Bloque                                | Posición AIDA |
| ------------------------------------- | ------------- |
| Hero (titular + CTA)                  | Atención      |
| Beneficios (3 puntos clave)           | Interés       |
| Prueba social (testimonios o galería) | Deseo         |
| CTA de cierre                         | Acción        |

Se aceptan mapas con patrón PAS igualmente bien argumentados. Se penaliza si la prueba social aparece antes del hero/beneficios o si no hay CTA en los primeros tres bloques.

---

## SECCIÓN B — Pregunta Práctica (4 puntos)

### Pregunta 4 — Análisis y propuesta de wireframe

#### Parte A — Ficha de usuario y mensaje central (1 punto)

**Respuesta de referencia:**

- **Perfil:** María José, 28 años, madre de familia o amiga organizadora de celebraciones en Riobamba. Trabaja en horario de oficina, usa el celular principalmente en las noches o al mediodía para buscar ideas de regalos originales.
- **Objetivo:** Encontrar una caja de regalo personalizada lista para pedir sin tener que ir a una tienda física.
- **Necesidad:** Quiere que el regalo sea especial y personalizado, pero no tiene tiempo para coordinar múltiples proveedores.
- **Objeción:** "¿Llegará a tiempo para la fecha? ¿Tendrán lo que quiero o serán opciones genéricas?"
- **Momento de entrada:** Puede ser comparativa (ya vio otras opciones en Instagram) o transaccional (ya decidió comprar y busca el proveedor correcto).

**Mensaje central de referencia:**

> "Cajas de regalo personalizadas con entrega en Riobamba — listas en 24 horas para sorprender de verdad."

Criterios: beneficio (personalización + rapidez) + lugar (Riobamba) + diferenciador (24h) + máximo 20 palabras.

#### Parte B — Mapa de secciones (1 punto)

| Bloque                | Propósito comunicativo                                   | Contenido propuesto                                              | Acción esperada                         |
| --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------- |
| Hero                  | Capturar atención y comunicar propuesta en 5 seg         | Titular + subtítulo + CTA "Arma tu caja" + foto de caja elegante | Clic en CTA o sigue con scroll          |
| Beneficios (3 íconos) | Convencer de la propuesta de valor frente a alternativas | Personalización, entrega en 24h, precios desde $X                | Interés en seguir leyendo               |
| Galería de ejemplos   | Mostrar lo que pueden pedir; reducir incertidumbre       | 6–9 fotos de cajas pasadas con descripción de ocasión            | Inspira, aumenta el deseo               |
| Prueba social         | Validar que otras personas tuvieron buena experiencia    | 2–3 testimonios con nombre, foto y resultado concreto            | Confía y reduce objeción del plazo      |
| CTA de cierre         | Última oportunidad antes de abandonar                    | Botón "Pedir mi caja ahora" + texto de urgencia suave            | Convierte al usuario rezagado           |
| Footer                | Contacto y acceso alternativo                            | WhatsApp, Instagram, horarios                                    | Comunicación directa si aún tiene dudas |

Justificación AIDA aceptada: hero (Atención) → beneficios (Interés) → galería+social (Deseo) → CTA cierre (Acción).

#### Parte C — Titular, beneficio y CTA (1 punto)

**Titular de referencia:**

> "Cajas de regalo personalizadas en Riobamba — entregamos en 24 horas para que nunca llegues tarde."

**Subtítulo de referencia:**

> "Elige tu estilo, elige los productos, nosotros armamos todo. Sin vueltas, sin estrés."

**Beneficio transformado:**

> **Entrega sin sorpresas**
> Armamos y entregamos tu caja en Riobamba en menos de 24 horas. Nunca más llegues con las manos vacías a una celebración.

**CTA principal (hero):**

> "Arma mi caja ahora" (verbo + posesivo que personaliza + dirección inmediata)

**CTA de cierre:**

> "Quiero sorprender en mi próxima celebración" (verbo + resultado emocional esperado)

#### Parte D — Validación de prototipo (1 punto)

Se aceptan respuestas consistentes con el mapa y el contenido propuestos en las partes anteriores. Criterios de evaluación:

- Las respuestas son coherentes con lo propuesto en A, B y C (no contradictorias).
- Si alguna respuesta es negativa, la mejora propuesta es concreta y aplicable.
- La justificación demuestra comprensión del criterio, no descripción superficial.

**Respuesta de referencia:**

- ✅ Titular visible en 5 seg: sí, está en el hero sin scroll. Justificación: el hero está en el primer bloque, el titular es el elemento de mayor tamaño jerárquico.
- ✅ CTA antes del 3er bloque: sí, está en el hero (bloque 1). Justificación: el CTA principal está en el hero section, primer bloque de la página.
- ✅ Contraste del CTA: sí, propuesto en color de marca contrastante. Justificación: el color del botón debe ser diferente al color dominante del fondo del hero para que destaque por contraste.
- ✅ Jerarquía móvil: sí, siempre que los bloques no tengan múltiples columnas en móvil. Ajuste propuesto: la galería pasa a una sola columna en móvil para que las imágenes sean suficientemente grandes.
- ✅ Flujo navegable: sí, el CTA del hero lleva al formulario de pedido. Justificación: conectar el botón del hero con la pantalla de armado de caja valida el recorrido crítico.

---

## Escala de conversión de puntaje a calificación

| Puntaje | Calificación (sobre 10) |
| ------- | ----------------------- |
| 9.5–10  | 10                      |
| 9.0–9.4 | 9.5                     |
| 8.5–8.9 | 9.0                     |
| 8.0–8.4 | 8.5                     |
| 7.5–7.9 | 8.0                     |
| 7.0–7.4 | 7.5                     |
| 6.5–6.9 | 7.0                     |
| 6.0–6.4 | 6.5                     |
| 5.5–5.9 | 6.0                     |
| < 5.5   | Reprobado               |

---

_Documento de uso exclusivo docente. No compartir con estudiantes._
_Preparado para el Bimestre I — Junio 2026 — Ing. Ivan Paz_
