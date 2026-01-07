import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Type,
  Palette,
  MousePointer,
  Sparkles,
  Pin,
  CheckCircle2,
  XCircle,
  BookOpen,
  Target,
  TrendingUp,
  ArrowDown,
  Layers,
  Move,
  ZoomIn,
  Underline,
  Clock,
  Settings,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PresentacionSemana11: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    // Slide 1: Portada
    {
      title: "✨ SEMANA 11 ✨",
      subtitle: "Diseño Web para Marketing Digital & E-Commerce",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">🎨</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400">
            Estilización Avanzada, Tipografía y Efectos Visuales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ITSAE Ecuador | Enero 2026
          </p>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl">
            <p className="text-xl font-semibold flex items-center justify-center gap-2">
              <Target className="w-6 h-6 text-accent-400" />
              Objetivo: Dominar efectos visuales que aumentan conversión y profesionalismo
            </p>
          </div>
          <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
            <span>📅 Enero 2026</span>
            <span>⏱️ 2 horas</span>
            <span>💻 Práctica con Elementor</span>
          </div>
        </div>
      ),
    },
    // Slide 2: ¿Por qué esto importa?
    {
      title: "💡 ¿Por Qué Esto Importa para Tu Negocio?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">+33%</div>
              <p className="text-lg mt-2">Conversión con diseño cohesivo</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">+28%</div>
              <p className="text-lg mt-2">Ventas con hover effects</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">-43%</div>
              <p className="text-lg mt-2">Tasa rebote con menú sticky</p>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              ¿Por qué implementar estos efectos?
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Feedback visual:</strong> Usuarios entienden qué es clickeable
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Profesionalismo:</strong> Diferencia tu sitio de la competencia
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Experiencia:</strong> Navegación más intuitiva y agradable
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Engagement:</strong> Mayor tiempo en página y menos rebote
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    // Slide 3: Agenda del Día
    {
      title: "📋 Agenda de Hoy",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                🎨 Parte Teórica (30 min)
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-accent-500" />
                  Tipografía: El lenguaje silencioso
                </li>
                <li className="flex items-center gap-2">
                  <MousePointer className="w-5 h-5 text-accent-500" />
                  Hover effects: Feedback visual
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-500" />
                  Animaciones: Dirección de atención
                </li>
                <li className="flex items-center gap-2">
                  <Pin className="w-5 h-5 text-accent-500" />
                  Sticky menu: Navegación estratégica
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                💻 Parte Práctica (75 min)
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-accent-500" />
                  Configurar paleta global (15min)
                </li>
                <li className="flex items-center gap-2">
                  <MousePointer className="w-5 h-5 text-accent-500" />
                  Hover en botones (15min)
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent-500" />
                  Hover en cards (25min)
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-500" />
                  Animaciones entrada (25min)
                </li>
                <li className="flex items-center gap-2">
                  <Pin className="w-5 h-5 text-accent-500" />
                  Menú sticky (20min)
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
            <p className="text-xl font-semibold flex items-center justify-center gap-2">
              🎯 <strong>Meta:</strong> Sitio profesional que comunica y convierte
            </p>
          </div>
        </div>
      ),
    },
    // Slide 4: Tipografía
    {
      title: "🔤 Tipografía: Tu Identidad Visual",
      content: (
        <div className="space-y-6">
          <blockquote className="border-l-4 border-accent-500 pl-6 py-2 italic text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-r-xl">
            <p className="text-lg">"La tipografía es el lenguaje visible. Su principal función es comunicar información."</p>
            <cite className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">— Ellen Lupton, <em>Pensar con Tipos</em></cite>
          </blockquote>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Top 5 Google Fonts para Español
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-2xl font-bold text-accent-500">1</span>
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Montserrat:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Diseñada en Argentina, ideal títulos</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-2xl font-bold text-accent-500">2</span>
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Roboto:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Excelente legibilidad, textos largos</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-2xl font-bold text-accent-500">3</span>
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Poppins:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Geométrica, amigable, versátil</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-2xl font-bold text-accent-500">4</span>
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Open Sans:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Blogs, artículos extensos</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2">
                <span className="text-2xl font-bold text-accent-500">5</span>
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Lato:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Múltiples pesos, interfaz completa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong>💡 Regla de Oro:</strong> Máximo 2-3 fuentes por sitio. Mantén jerarquía clara: H1 &gt; H2 &gt; Body
            </p>
          </div>
        </div>
      ),
    },
    // Slide 5: Jerarquía Tipográfica
    {
      title: "📐 Jerarquía Tipográfica",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <span className="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-400">H1: Título Principal</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">32-48px - Captura atención inmediata</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <span className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-300">H2: Subtítulo</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">24-32px - Organiza contenido</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <span className="text-xl md:text-2xl font-medium text-primary-500 dark:text-primary-200">H3: Sección</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">20-24px - Subdivide información</p>
              </div>
              <div>
                <span className="text-base md:text-lg text-gray-700 dark:text-gray-200">Body: Texto cuerpo</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">16-18px - Lectura cómoda</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <strong>⚠️ Error Común:</strong> Usar fuentes menores a 16px en móvil = ilegible
            </p>
          </div>
        </div>
      ),
    },
    // Slide 6: Hover Effects
    {
      title: "👆 Hover Effects: Feedback Visual",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-300">
              En 2025, <strong>TODOS</strong> los sitios profesionales tienen hover effects. Su ausencia señala "sitio amateur".
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">4 Tipos que Aumentan Conversión:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">1. Cambio de Color</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Botón azul → verde al hover</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Impacto: +15-25% clics</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Move className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">2. Elevación/Sombra</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Card "flota" al pasar mouse</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Comunica: "Soy clickeable"</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">3. Zoom/Escala</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Imagen crece ligeramente</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Ideal para: Productos, galería</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Underline className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">4. Subrayado Animado</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Línea que crece bajo link</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Estilo: Sofisticado, moderno</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 7: Animaciones
    {
      title: "✨ Animaciones: Dirección de Atención",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Las 4 Reglas de Oro</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Clock className="w-6 h-6 text-accent-500" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Sutileza:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> 0.3-0.5 segundos máximo</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Target className="w-6 h-6 text-accent-500" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Propósito:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Cada animación debe tener razón</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Layers className="w-6 h-6 text-accent-500" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Consistencia:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Mismo estilo en todo el sitio</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <TrendingUp className="w-6 h-6 text-accent-500" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Performance:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> Máx 3-4 elementos simultáneos</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Motion Effects en Elementor</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl text-center">
              <ArrowDown className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-semibold text-primary-700 dark:text-primary-300">Fade In</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Contenido general</p>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl text-center">
              <ArrowDown className="w-8 h-8 text-primary-600 mx-auto mb-2 rotate-180" />
              <p className="font-semibold text-primary-700 dark:text-primary-300">Fade In Up</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">CTAs importantes</p>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl text-center">
              <ZoomIn className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-semibold text-primary-700 dark:text-primary-300">Zoom In</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ofertas especiales</p>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl text-center">
              <ChevronRight className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-semibold text-primary-700 dark:text-primary-300">Slide In</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Testimonios</p>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl text-center">
            <p className="text-gray-700 dark:text-gray-200">
              ⚙️ <strong>Config óptima:</strong> Duración 500-800ms | Delay 0-200ms | Trigger al 50% viewport
            </p>
          </div>
        </div>
      ),
    },
    // Slide 8: Sticky Menu
    {
      title: "📌 Sticky Menu: Navegación Estratégica",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">-43%</div>
              <p className="text-lg mt-2">Tasa de rebote</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">+31%</div>
              <p className="text-lg mt-2">Páginas vistas</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">+22%</div>
              <p className="text-lg mt-2">Conversiones</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">¿Por Qué Funciona?</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Elimina fricción: usuario no scroll hasta arriba
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Siempre accesible: menú + carrito + contacto visibles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Refuerzo de marca: logo siempre presente
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Mobile-critical: esencial en smartphones
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-xl">
            <p className="flex items-center gap-2">
              💡 <strong>Mejor Práctica:</strong> Transparente inicial → Opaco al scroll con transición 0.3s
            </p>
          </div>
        </div>
      ),
    },
    // Slide 9: Paso 1 - Paleta Global
    {
      title: "⚙️ PASO 1: Configurar Paleta Global (15 min)",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-accent-400 to-accent-500 text-primary-900 p-5 rounded-xl text-center">
            <p className="text-xl font-semibold flex items-center justify-center gap-2">
              🎯 Objetivo: Crear sistema de diseño reutilizable
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Global Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#2C5F8D] text-white p-5 rounded-xl text-center">
              <strong className="text-lg">Primary</strong>
              <p className="text-sm opacity-80 mt-1">Tu color de marca</p>
            </div>
            <div className="bg-[#FF6B00] text-white p-5 rounded-xl text-center">
              <strong className="text-lg">Secondary</strong>
              <p className="text-sm opacity-80 mt-1">Color complementario</p>
            </div>
            <div className="bg-[#2D2D2D] text-white p-5 rounded-xl text-center">
              <strong className="text-lg">Text</strong>
              <p className="text-sm opacity-80 mt-1">Color texto</p>
            </div>
            <div className="bg-[#F4F4F4] text-gray-700 p-5 rounded-xl text-center border border-gray-200">
              <strong className="text-lg">Background</strong>
              <p className="text-sm opacity-80 mt-1">Fondos</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Global Fonts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <strong className="text-primary-700 dark:text-primary-400">Heading:</strong>
              <p className="text-gray-600 dark:text-gray-300">Montserrat Bold (títulos)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <strong className="text-primary-700 dark:text-primary-400">Body:</strong>
              <p className="text-gray-600 dark:text-gray-300">Roboto Regular (cuerpo)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <strong className="text-primary-700 dark:text-primary-400">Accent:</strong>
              <p className="text-gray-600 dark:text-gray-300">Poppins SemiBold (botones)</p>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl text-center">
            <p className="text-gray-700 dark:text-gray-200 font-semibold">
              📍 Elementor → Site Settings → Global Fonts & Colors
            </p>
          </div>
        </div>
      ),
    },
    // Slide 10: Paso 2 - Hover Botones
    {
      title: "👆 PASO 2: Hover Effects en Botones (15 min)",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Configuración:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                Estado Normal
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>• Background: Primary Color</li>
                <li>• Text: Blanco</li>
                <li>• Border Radius: 5px</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                Estado Hover
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>• Background: Más oscuro</li>
                <li>• Transform: translateY(-3px)</li>
                <li>• Box Shadow: 0 8px 16px</li>
                <li>• Transition: 0.3s</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200 text-center">
              <strong>Resultado esperado:</strong> Botón que "salta" al pasar mouse, comunicando claramente que es clickeable
            </p>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Ver Demo Interactivo
            </button>
          </div>
        </div>
      ),
    },
    // Slide 11: Paso 3 - Hover Cards
    {
      title: "🎴 PASO 3: Hover en Cards (25 min)",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Cards interactivas para productos/servicios que aumentan engagement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Estructura</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent-500" />
                  Container (contenedor)
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent-500" />
                  Image (imagen producto)
                </li>
                <li className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-accent-500" />
                  Heading (título)
                </li>
                <li className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-accent-500" />
                  Text (descripción)
                </li>
                <li className="flex items-center gap-2">
                  <MousePointer className="w-5 h-5 text-accent-500" />
                  Button (CTA)
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Effects Hover</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Card se eleva (-10px)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Aparece sombra grande
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Imagen hace zoom (1.1)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Border cambia a Primary
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Transición: 0.4s
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-xl text-center">
            <p className="text-lg">
              📊 <strong>Impacto:</strong> Cards con hover effect aumentan clics en{" "}
              <span className="bg-accent-500 text-primary-900 px-2 py-1 rounded font-bold">27-35%</span>
            </p>
          </div>
        </div>
      ),
    },
    // Slide 12: Paso 4 - Animaciones Entrada
    {
      title: "✨ PASO 4: Animaciones de Entrada (25 min)",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Elementos a Animar</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
              <p className="font-semibold text-primary-700 dark:text-primary-400">Título H1</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fade In Down</p>
              <p className="text-xs text-accent-500 mt-1">(0ms)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
              <p className="font-semibold text-primary-700 dark:text-primary-400">Subtítulo H2</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fade In Up</p>
              <p className="text-xs text-accent-500 mt-1">(200ms)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
              <p className="font-semibold text-primary-700 dark:text-primary-400">Botón CTA</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Zoom In</p>
              <p className="text-xs text-accent-500 mt-1">(400ms)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
              <p className="font-semibold text-primary-700 dark:text-primary-400">Cards</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Slide In Left</p>
              <p className="text-xs text-accent-500 mt-1">(600ms)</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Efecto Cascada</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Los elementos aparecen secuencialmente, dirigiendo la atención del usuario de forma natural:
            </p>
            <div className="flex justify-center items-center gap-2 text-2xl flex-wrap">
              <span className="bg-primary-100 dark:bg-primary-900/30 px-3 py-2 rounded-lg">1️⃣ Título</span>
              <span className="text-gray-400">→</span>
              <span className="bg-primary-100 dark:bg-primary-900/30 px-3 py-2 rounded-lg">2️⃣ Subtítulo</span>
              <span className="text-gray-400">→</span>
              <span className="bg-primary-100 dark:bg-primary-900/30 px-3 py-2 rounded-lg">3️⃣ CTA</span>
              <span className="text-gray-400">→</span>
              <span className="bg-primary-100 dark:bg-primary-900/30 px-3 py-2 rounded-lg">4️⃣ Contenido</span>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl text-center">
            <p className="text-gray-700 dark:text-gray-200 font-semibold">
              📍 Advanced → Motion Effects → Entrance Animation
            </p>
          </div>
        </div>
      ),
    },
    // Slide 13: Paso 5 - Menú Sticky
    {
      title: "📌 PASO 5: Menú Sticky (20 min)",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Configuración Elementor Pro</h3>
          <ol className="space-y-4 text-gray-700 dark:text-gray-200">
            <li className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              Templates → Theme Builder → Header → Add New
            </li>
            <li className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              Diseñar: Logo + Nav Menu + Botón CTA
            </li>
            <li className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              Section → Advanced → Motion Effects
            </li>
            <li className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              Sticky: Top | Offset: 0px | Effects: 100px
            </li>
          </ol>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Efecto Avanzado: Transparente → Opaco</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <strong>Inicial:</strong> Background transparente
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <strong>Al scroll:</strong> Background blanco + sombra
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <strong>Logo:</strong> Se reduce tamaño
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <strong>Transición:</strong> Suave 0.3s
              </li>
            </ul>
          </div>

          <div className="bg-accent-400 p-5 rounded-xl text-center">
            <p className="text-primary-900 font-semibold text-lg">
              ✅ Verifica en Desktop, Tablet y Mobile
            </p>
          </div>
        </div>
      ),
    },
    // Slide 14: Mejores Prácticas
    {
      title: "⭐ Mejores Prácticas & Errores Comunes",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                ✅ HAZ ESTO
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  2-3 fuentes máximo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Hover en TODO clickeable
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Animaciones 500-800ms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Menú sticky con logo + CTA
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Prueba en móvil SIEMPRE
                </li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                ❌ EVITA ESTO
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  5+ fuentes diferentes
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  Animaciones de 2+ seg
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  Efectos inconsistentes
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  Menú sticky muy alto
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  Texto menor a 16px
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-xl text-center">
            <p className="text-xl">
              💡 <strong>Recuerda:</strong> Menos es más. 1 efecto bien hecho &gt; 10 mal ejecutados
            </p>
          </div>
        </div>
      ),
    },
    // Slide 15: Tarea y Cierre
    {
      title: "📝 Tarea Asincrónica (2 horas)",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Checklist para tu Proyecto</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Configurar Global Fonts y Colors
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Aplicar 10+ hover effects en botones y cards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Agregar animaciones de entrada (min 3 secciones)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Crear menú sticky funcional
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Probar en Desktop, Tablet y Mobile
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-accent-400 to-accent-500 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-primary-900 mb-2">🚀 Próxima Clase</h3>
            <p className="text-primary-900 text-lg font-semibold">
              SEMANA 12: Formularios, Plugins y SEO
            </p>
            <p className="text-primary-800 mt-1">
              Donde tu sitio empieza a generar CLIENTES REALES
            </p>
          </div>

          <div className="text-center space-y-4">
            <p className="text-3xl">🎓 <strong>¡Éxito en tu práctica!</strong></p>
            <p className="text-gray-500 dark:text-gray-400 italic">
              El diseño no es decoración, es comunicación estratégica.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      {/* Slide Container */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Decorative Header Bar */}
          <div className="h-2 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600"></div>

          {/* Logo */}
          <div className="absolute top-6 right-8 text-primary-700 dark:text-primary-400 font-bold text-lg z-10">
            ITSAE
          </div>

          {/* Content */}
          <div className="p-6 md:p-12 min-h-[70vh]">
            <h1 className="text-2xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-2">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-accent-600 dark:text-accent-400 font-semibold uppercase tracking-wide mb-6">
                {slides[currentSlide].subtitle}
              </p>
            )}
            <div className="mt-6">{slides[currentSlide].content}</div>
          </div>

          {/* Footer */}
          <div className="px-8 pb-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>
              {currentSlide + 1}/{slides.length}
            </span>
            <span>Semana 11 - Estilización Avanzada</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-50 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:from-primary-700 hover:to-primary-600"
          >
            {currentSlide === slides.length - 1 ? "🎉 Finalizar" : "Siguiente"}
            {currentSlide < slides.length - 1 && <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-accent-500 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresentacionSemana11;
