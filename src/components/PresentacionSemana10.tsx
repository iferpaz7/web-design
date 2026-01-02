import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
  Layout,
  Columns,
  Box,
  Type,
  FileText,
  MousePointer,
  Image,
  Play,
  List,
  Grid3X3,
  Eye,
  EyeOff,
  RotateCcw,
  BookOpen,
  Video,
  Wrench,
  ExternalLink,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PresentacionSemana10: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    // Slide 1: Portada
    {
      title: "Layouts Responsivos con Elementor",
      subtitle: "Semana 10 | Diseño Web para Marketing Digital",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">📱</div>
          <h2 className="text-4xl font-bold text-primary-700 dark:text-primary-400">
            Sections, Columns y Widgets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ITSAE Ecuador | Enero 2026
          </p>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl">
            <p className="text-xl font-semibold">
              Objetivo: Dominar layouts responsivos para cualquier dispositivo
            </p>
          </div>
        </div>
      ),
    },
    // Slide 2: ¿Por qué Mobile-First?
    {
      title: "📱 ¿Por qué Diseñar Mobile-First?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-8 rounded-2xl text-center">
            <div className="text-6xl font-extrabold text-accent-400">60%+</div>
            <p className="text-xl mt-2">del tráfico web global viene de móviles</p>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Mobile-First = Priorizar la Experiencia Móvil
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Diseñar primero para la pantalla más pequeña y luego expandir para tablets y desktop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Beneficios para Marketing:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  +64% conversiones móviles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Mejor SEO (Google indexa móvil primero)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Carga más rápida
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Beneficios para UX:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Fuerza a priorizar contenido
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Elimina el desorden
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Experiencia consistente
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 3: Estructura Jerárquica
    {
      title: "🏗️ La Estructura Jerárquica de Elementor",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-2xl text-center font-bold text-primary-700 dark:text-primary-400">
              Section → Column → Widget
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-primary-700 text-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <Layout className="w-8 h-8" />
                <div>
                  <p className="text-xl font-bold">SECTION (Contenedor principal)</p>
                  <p className="text-primary-200">Pisos del edificio</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-600 text-white p-5 rounded-xl ml-8">
              <div className="flex items-center gap-3">
                <Columns className="w-8 h-8" />
                <div>
                  <p className="text-xl font-bold">COLUMN (División horizontal)</p>
                  <p className="text-primary-200">Habitaciones</p>
                </div>
              </div>
            </div>
            <div className="bg-accent-500 text-primary-900 p-5 rounded-xl ml-16">
              <div className="flex items-center gap-3">
                <Box className="w-8 h-8" />
                <div>
                  <p className="text-xl font-bold">WIDGET (Elementos específicos)</p>
                  <p className="text-primary-700">Muebles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-400">
              <strong>Para Marketing:</strong> Esta estructura te permite organizar estratégicamente: 
              Hero → Beneficios → Testimonios → CTA Final
            </p>
          </div>
        </div>
      ),
    },
    // Slide 4: Widgets Esenciales
    {
      title: "🎯 Los 7 Widgets Esenciales para Conversión",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <Type className="w-10 h-10" />, name: "Heading", desc: "Títulos y jerarquía" },
              { icon: <FileText className="w-10 h-10" />, name: "Text Editor", desc: "Contenido persuasivo" },
              { icon: <MousePointer className="w-10 h-10" />, name: "Button", desc: "CTAs efectivos" },
              { icon: <Image className="w-10 h-10" />, name: "Image", desc: "Visual storytelling" },
              { icon: <Play className="w-10 h-10" />, name: "Video", desc: "Demos y testimonios" },
              { icon: <List className="w-10 h-10" />, name: "Icon List", desc: "Beneficios claros" },
            ].map((widget, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-primary-600 text-center"
              >
                <div className="text-primary-700 dark:text-primary-400 flex justify-center mb-3">
                  {widget.icon}
                </div>
                <p className="text-lg font-bold text-primary-700 dark:text-primary-400">
                  {widget.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{widget.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-400 font-medium">
              Cada widget es configurable para Desktop, Tablet y Mobile de forma independiente
            </p>
          </div>
        </div>
      ),
    },
    // Slide 5: Layouts Comunes
    {
      title: "📐 Layouts Comunes para E-commerce y Marketing",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
                1. Hero Full-Width
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Primera impresión, propuesta de valor
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Imagen de fondo impactante
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Título + Subtítulo + CTA
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Above the fold
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
                2. Layout 2 Columnas
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Explicar beneficios con soporte visual
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  50% Imagen | 50% Texto
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Reverse columns en mobile
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Apilamiento automático
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-2">
              3. Grid de 3 Columnas (Cards)
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              <strong>Desktop:</strong> 3 columnas horizontales | <strong>Tablet:</strong> 2 columnas | <strong>Mobile:</strong> 1 columna apilada
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Perfecto para: Servicios, Planes de Precio, Características
            </p>
          </div>
        </div>
      ),
    },
    // Slide 6: Modo Responsive
    {
      title: "🖥️ El Modo Responsive de Elementor",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <Monitor className="w-12 h-12 mx-auto text-primary-700 dark:text-primary-400" />
              <p className="mt-3 text-xl font-bold text-gray-900 dark:text-gray-100">DESKTOP</p>
              <p className="text-gray-600 dark:text-gray-300">&gt; 1024px</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <Tablet className="w-12 h-12 mx-auto text-primary-700 dark:text-primary-400" />
              <p className="mt-3 text-xl font-bold text-gray-900 dark:text-gray-100">TABLET</p>
              <p className="text-gray-600 dark:text-gray-300">768-1024px</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <Smartphone className="w-12 h-12 mx-auto text-primary-700 dark:text-primary-400" />
              <p className="mt-3 text-xl font-bold text-gray-900 dark:text-gray-100">MOBILE</p>
              <p className="text-gray-600 dark:text-gray-300">&lt; 768px</p>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
              Cómo Funciona:
            </h3>
            <ol className="space-y-2 text-gray-700 dark:text-gray-200 list-decimal list-inside">
              <li>Diseña en la vista principal (Desktop o Mobile)</li>
              <li>Cambia a otro dispositivo con los iconos de la barra inferior</li>
              <li>Ajusta valores específicos (se guardan independientemente)</li>
              <li>Repite para cada dispositivo</li>
            </ol>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-400 font-medium">
              Los cambios en un dispositivo NO afectan a los otros (a menos que uses valores relativos como %)
            </p>
          </div>
        </div>
      ),
    },
    // Slide 7: Controles Responsivos
    {
      title: "⚙️ Controles Responsivos Clave",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
                  Column Width:
                </h3>
                <div className="mt-3 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
                  <p>Desktop: 50%</p>
                  <p>Tablet: 50% o 100%</p>
                  <p>Mobile: 100% (automático)</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
                  Padding/Margin:
                </h3>
                <div className="mt-3 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
                  <p>Desktop: 50px</p>
                  <p>Tablet: 30px</p>
                  <p>Mobile: 20px</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
                Visibilidad:
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Tab Advanced → Responsive → Hide On
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-accent-500" />
                  Ocultar sidebar en móvil
                </li>
                <li className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-accent-500" />
                  Mostrar teléfono solo en móvil
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Simplificar formularios
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-accent-500 p-5 rounded-xl flex items-center gap-3">
            <RotateCcw className="w-6 h-6 text-accent-600" />
            <p className="text-lg text-primary-700 dark:text-primary-400 font-medium">
              <strong>Reverse Columns (Mobile):</strong> Cambia el orden de apilamiento en móvil - útil cuando quieres texto antes que imagen
            </p>
          </div>
        </div>
      ),
    },
    // Slide 8: Testing y Optimización
    {
      title: "✅ Testing Exhaustivo: Checklist",
      content: (
        <div className="space-y-4">
          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 flex items-center gap-2">
              <Smartphone className="w-6 h-6" /> Mobile (375px - 414px):
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Texto legible sin zoom (mínimo 16px)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Botones fáciles de tocar (44x44px mínimo)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Sin scroll horizontal
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Contenido prioritario above the fold
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 flex items-center gap-2">
              <Tablet className="w-6 h-6" /> Tablet (768px - 1024px):
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Aprovecha el ancho de pantalla
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Columnas en configuración óptima (2-3)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                No parece móvil estirado
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 flex items-center gap-2">
              <Monitor className="w-6 h-6" /> Desktop (1200px+):
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Contenido no excesivamente ancho (máx 1400px)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Espaciado generoso
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Jerarquía visual clara
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    // Slide 9: Ejercicio Práctico
    {
      title: "🎯 Ejercicio Práctico (75 min)",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-primary-600 text-center">
              <div className="text-4xl mb-3">1️⃣</div>
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                Grid 3 Columnas
              </p>
              <p className="text-gray-600 dark:text-gray-300">Cards de servicios (15 min)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-primary-600 text-center">
              <div className="text-4xl mb-3">2️⃣</div>
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                Hero Section
              </p>
              <p className="text-gray-600 dark:text-gray-300">Full-width con CTA (20 min)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-primary-600 text-center">
              <div className="text-4xl mb-3">3️⃣</div>
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                Layout 2 Cols
              </p>
              <p className="text-gray-600 dark:text-gray-300">Con reverse mobile (20 min)</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
            <p className="text-xl font-bold mb-2">Paso 4: Testing (20 min)</p>
            <p className="text-accent-400 text-lg">Probar en Desktop + Tablet + Mobile</p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-400 font-medium">
              <strong>Objetivo:</strong> Dominar la construcción de layouts que se adaptan perfectamente a cualquier dispositivo
            </p>
          </div>
        </div>
      ),
    },
    // Slide 10: Tarea Asincrónica
    {
      title: "📝 Tarea Asincrónica (2 horas)",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-2">
              Recrear Diseño de Figma en Elementor
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              Tomar el diseño de la Semana 9 y construirlo completamente en Elementor con optimización responsive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Pasos:
              </h3>
              <ol className="space-y-2 text-gray-700 dark:text-gray-200 list-decimal list-inside">
                <li>Analizar diseño Figma (15 min)</li>
                <li>Construir en Elementor (75 min)</li>
                <li>Optimizar responsive (20 min)</li>
                <li>Testing exhaustivo (10 min)</li>
              </ol>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Entregables:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Screenshot Desktop
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Screenshot Tablet
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Screenshot Mobile
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  URL de página en vivo
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-400 font-medium">
              <strong>Formato:</strong> ApellidoNombre_Semana10_ResponsiveDesign.pdf
            </p>
          </div>
        </div>
      ),
    },
    // Slide 11: Próxima Clase
    {
      title: "📅 Próxima Clase: Semana 11",
      content: (
        <div className="space-y-6 text-center">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-accent-400 mb-4">
              Estilización Avanzada, Tipografía y Efectos Visuales
            </h3>
            <ul className="space-y-3 text-left max-w-lg mx-auto text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                Google Fonts y jerarquía tipográfica
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                Hover effects para mejorar UX
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                Micro-animaciones de entrada
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                Sistema de diseño consistente
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-400">
              <strong>Preparación:</strong> Investigar 3 sitios que te gusten y analizar su tipografía y efectos hover
            </p>
          </div>
        </div>
      ),
    },
    // Slide 12: Recursos
    {
      title: "📚 Recursos Recomendados",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Documentación:
                </h3>
                <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-200">
                  <li>• Elementor Docs (español)</li>
                  <li>• CursoWordPress.com</li>
                  <li>• Comunidad WP</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 flex items-center gap-2">
                  <Video className="w-5 h-5" /> Videos YouTube:
                </h3>
                <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-200">
                  <li>• La Máquina del Branding</li>
                  <li>• Gonzalo Navarro</li>
                  <li>• Ferdy Korpershoek</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" /> Lectura:
                </h3>
                <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-200">
                  <li>• HubSpot: "Mobile First"</li>
                  <li>• IONOS: "¿Qué es Mobile First?"</li>
                  <li>• APX School: Buenas prácticas</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 flex items-center gap-2">
                  <Wrench className="w-5 h-5" /> Herramientas:
                </h3>
                <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-200">
                  <li>• Chrome DevTools</li>
                  <li>• Responsinator.com</li>
                  <li>• BrowserStack (trial)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl text-center">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              <strong>Libro recomendado:</strong> "Mobile First" de Luke Wroblewski (2011)
            </p>
          </div>
        </div>
      ),
    },
    // Slide 13: Conceptos Clave
    {
      title: "💡 Conceptos Clave para Recordar",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-primary-600 text-center">
              <Smartphone className="w-12 h-12 mx-auto text-primary-700 dark:text-primary-400 mb-3" />
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                Mobile-First
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                60%+ del tráfico es móvil. No es opcional, es esencial.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-primary-600 text-center">
              <Layout className="w-12 h-12 mx-auto text-primary-700 dark:text-primary-400 mb-3" />
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                Estructura
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Section → Column → Widget. Todo jerárquico.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-primary-600 text-center">
              <Grid3X3 className="w-12 h-12 mx-auto text-primary-700 dark:text-primary-400 mb-3" />
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                Responsive
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Diseñar experiencias óptimas por dispositivo.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
            <p className="text-xl italic">
              "El mejor diseño responsive es aquel que el usuario ni siquiera nota - simplemente funciona perfecto en su dispositivo."
            </p>
          </div>
        </div>
      ),
    },
    // Slide 14: Cierre
    {
      title: "🎉 ¡Gracias!",
      content: (
        <div className="text-center space-y-8">
          <h2 className="text-5xl font-extrabold text-primary-700 dark:text-primary-400">
            Preguntas y Respuestas
          </h2>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-2xl mb-4">
              Recuerda: La práctica hace al maestro
            </p>
            <p className="text-xl text-accent-400">
              Experimenta, prueba, rompe cosas y aprende
            </p>
          </div>

          <p className="text-2xl text-primary-700 dark:text-primary-400 font-bold">
            ITSAE - Instituto Tecnológico Superior Adventista del Ecuador
          </p>
        </div>
      ),
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Slide Container */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 min-h-[600px] relative overflow-hidden">
          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-700 via-accent-500 to-primary-700"></div>

          {/* Logo Area */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-primary-500 rounded-full flex items-center justify-center text-accent-400 font-bold text-xl">
              E
            </div>
            <span className="text-primary-700 dark:text-primary-400 font-bold text-xl">
              ITSAE
            </span>
          </div>

          {/* Slide Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-2">
            {slides[currentSlide].title}
          </h1>
          {slides[currentSlide].subtitle && (
            <p className="text-xl text-accent-600 dark:text-accent-400 mb-6">
              {slides[currentSlide].subtitle}
            </p>
          )}

          {/* Slide Content */}
          <div className="mt-6">{slides[currentSlide].content}</div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>

          <div className="bg-white dark:bg-gray-800 px-5 py-2 rounded-full shadow-md">
            <span className="text-primary-700 dark:text-primary-400 font-semibold">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
          Usa las flechas ← → del teclado para navegar
        </p>
      </div>
    </div>
  );
};

export default PresentacionSemana10;
