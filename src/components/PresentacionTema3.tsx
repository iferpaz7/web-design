import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  Users,
  Globe,
  Zap,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const PresentacionTema3: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "Semana 3: Arquitectura de Información, Accesibilidad y Usabilidad",
      subtitle: "ITSAE - Diseño Web para Marketing Digital | 28 octubre - 4 noviembre 2025",
      content: (
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <Home className="w-20 h-20 text-blue-500" />
            <Eye className="w-20 h-20 text-green-500" />
            <Users className="w-20 h-20 text-purple-500" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ¿Cuántas veces has abandonado un sitio web porque NO encontrabas lo
            que buscabas?
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
              Hoy aprenderás a evitar que eso le pase a TUS clientes
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Agenda de Hoy",
      subtitle: "",
      content: (
        <div className="space-y-4 text-lg">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Arquitectura de Información
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Organiza tu contenido para vender más (30 min)
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Accesibilidad Web WCAG 2.1
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Más clientes + Mejor SEO (35 min)
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Usabilidad: Principios de Nielsen
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Sitios fáciles de usar = Más ventas (30 min)
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Ejercicios Prácticos
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Wireframes, auditorías, contraste (45 min)
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "¿Qué es Arquitectura de Información?",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-lg">
            <p className="text-3xl leading-relaxed text-center">
              El arte de{" "}
              <span className="font-bold text-blue-700 dark:text-blue-300">
                organizar el contenido
              </span>{" "}
              de un sitio web para que los usuarios encuentren lo que buscan{" "}
              <span className="font-bold text-blue-700 dark:text-blue-300">
                sin frustrarse
              </span>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-xl">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center border-2 border-green-200 dark:border-green-700">
              <div className="text-4xl font-bold text-green-700 dark:text-green-300 mb-2">
                200%
              </div>
              <div className="text-gray-900 dark:text-gray-100">
                Aumento en conversiones con buena AI
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg text-center border-2 border-red-200 dark:border-red-700">
              <div className="text-4xl font-bold text-red-700 dark:text-red-300 mb-2">
                38%
              </div>
              <div className="text-gray-900 dark:text-gray-100">
                Usuarios abandonan por navegación confusa
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg text-center border-2 border-orange-200 dark:border-orange-700">
              <div className="text-4xl font-bold text-orange-700 dark:text-orange-300 mb-2">
                10-20s
              </div>
              <div className="text-gray-900 dark:text-gray-100">
                Tiempo para decidir quedarse
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Los 4 Pilares de la Arquitectura de Información",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
              1. ORGANIZACIÓN
            </h3>
            <p className="text-xl mb-4 text-gray-900 dark:text-gray-100">
              Cómo agrupas y categorizas tu contenido
            </p>
            <div className="space-y-2 text-lg">
              <div className="flex items-center gap-2">
                <XCircle className="text-red-500" size={20} />
                <span className="text-gray-800 dark:text-gray-200">
                  Productos | Ofertas | Contacto
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-800 dark:text-gray-200">
                  Hombres | Mujeres | Niños
                </span>
              </div>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">
              2. ETIQUETADO
            </h3>
            <p className="text-xl mb-4 text-gray-900 dark:text-gray-100">
              Los nombres en menús y botones
            </p>
            <div className="space-y-2 text-lg">
              <div className="flex items-center gap-2">
                <XCircle className="text-red-500" size={20} />
                <span className="text-gray-800 dark:text-gray-200">
                  Más información
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-800 dark:text-gray-200">
                  Solicita tu Demo Gratis
                </span>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-3xl font-bold mb-4 text-purple-700 dark:text-purple-300">
              3. NAVEGACIÓN
            </h3>
            <p className="text-xl mb-4 text-gray-900 dark:text-gray-100">
              Cómo el usuario se mueve por tu sitio
            </p>
            <div className="text-lg space-y-1 text-gray-800 dark:text-gray-200">
              <div>• Menú principal (máx 7 ítems)</div>
              <div>• Breadcrumbs</div>
              <div>• Búsqueda visible</div>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-3xl font-bold mb-4 text-orange-700 dark:text-orange-300">
              4. BÚSQUEDA
            </h3>
            <p className="text-xl mb-4 text-gray-900 dark:text-gray-100">
              Tu salvavidas cuando la navegación falla
            </p>
            <div className="text-lg space-y-1 text-gray-800 dark:text-gray-200">
              <div>• Autocomplete</div>
              <div>• Tolerancia a errores</div>
              <div>• Filtros inteligentes</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "¿Qué es Accesibilidad Web?",
      subtitle: "WCAG 2.1 AA: Más clientes + Mejor SEO",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900/30 p-8 rounded-lg">
            <p className="text-3xl leading-relaxed text-center">
              Diseñar para que{" "}
              <span className="font-bold text-green-700 dark:text-green-300">
                TODAS
              </span>{" "}
              las personas puedan usar tu sitio, incluyendo personas con
              discapacidades
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">
                ⚖️ LEGAL
              </h3>
              <p className="text-lg text-gray-900 dark:text-gray-100">
                Ecuador: Ley Orgánica de Discapacidades (2012)
              </p>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                Obligatorio para instituciones públicas
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <h3 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-300">
                💰 COMERCIAL
              </h3>
              <p className="text-lg text-gray-900 dark:text-gray-100">
                15% población mundial tiene discapacidad
              </p>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                Ecuador: 1.6 millones personas (CONADIS)
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">
                📈 SEO
              </h3>
              <p className="text-lg text-gray-900 dark:text-gray-100">
                Google prioriza sitios accesibles
              </p>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                Mejor indexación y posicionamiento
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="text-xl font-bold text-yellow-800 dark:text-yellow-200">
              Caso real: Tienda online ecuatoriana → +23% ventas tras
              implementar accesibilidad
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "WCAG 2.1 AA: Los 4 Principios POUR",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
              1. PERCEPTIBLE
            </h3>
            <p className="text-xl mb-3 text-gray-900 dark:text-gray-100">
              El usuario debe poder PERCIBIR el contenido
            </p>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ Contraste de color mínimo</li>
              <li>✓ Texto alternativo en imágenes</li>
              <li>✓ Subtítulos en videos</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">
              2. OPERABLE
            </h3>
            <p className="text-xl mb-3 text-gray-900 dark:text-gray-100">
              El usuario debe poder USAR el sitio
            </p>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ Navegación por teclado</li>
              <li>✓ Suficiente tiempo para leer</li>
              <li>✓ Sin trampas de teclado</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-3xl font-bold mb-4 text-purple-700 dark:text-purple-300">
              3. COMPRENSIBLE
            </h3>
            <p className="text-xl mb-3 text-gray-900 dark:text-gray-100">
              El contenido debe ser FÁCIL DE ENTENDER
            </p>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ Mensajes de error claros</li>
              <li>✓ Estructura con encabezados</li>
              <li>✓ Etiquetas en formularios</li>
            </ul>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-3xl font-bold mb-4 text-orange-700 dark:text-orange-300">
              4. ROBUSTO
            </h3>
            <p className="text-xl mb-3 text-gray-900 dark:text-gray-100">
              Compatible con TECNOLOGÍAS actuales y futuras
            </p>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>✓ HTML semántico correcto</li>
              <li>✓ Compatible con lectores de pantalla</li>
              <li>✓ Código válido</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Tipos de Navegación Esenciales",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-3">
              <Home className="text-blue-700 dark:text-blue-300" size={32} />
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                Navegación Principal (Header)
              </h3>
            </div>
            <p className="text-xl ml-12 text-gray-900 dark:text-gray-100">
              Máximo 5-7 elementos • Siempre visible (sticky)
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-3xl">📍</div>
              <h3 className="text-3xl font-bold text-green-700 dark:text-green-300">
                Breadcrumbs (Migas de pan)
              </h3>
            </div>
            <p className="text-xl ml-12 text-gray-900 dark:text-gray-100">
              Inicio › Hombres › Zapatos › Deportivos › Nike Air Max
            </p>
            <p className="text-lg ml-12 mt-2 text-green-700 dark:text-green-300 font-semibold">
              Reduce tasa de rebote 20%
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-3">
              <Search className="text-purple-700 dark:text-purple-300" size={32} />
              <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-300">Búsqueda</h3>
            </div>
            <p className="text-xl ml-12 text-gray-900 dark:text-gray-100">
              30% de usuarios usa el buscador primero • Debe estar en header
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Wireframing: El Mapa Antes de Construir",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">¿Qué es?</h3>
            <p className="text-xl mb-6 text-gray-800 dark:text-gray-200">
              Boceto en blanco y negro de tu página ANTES de diseñar
            </p>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">¿Por qué hacerlos?</h3>
            <ul className="text-xl space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-800 dark:text-gray-200">Ahorras tiempo y dinero</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-800 dark:text-gray-200">Te enfocas en contenido, no en colores</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-800 dark:text-gray-200">Detectas problemas temprano</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
              Ejemplo de Wireframe
            </h3>
            <div className="bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-600 p-4 space-y-2">
              <div className="border-2 border-gray-400 dark:border-gray-500 p-2 flex justify-between items-center">
                <div className="font-bold text-gray-800 dark:text-gray-200">[LOGO]</div>
                <div className="text-sm text-gray-800 dark:text-gray-200">Inicio | Tienda | Blog</div>
              </div>
              <div className="border-2 border-gray-400 dark:border-gray-500 p-6 text-center">
                <div className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">[Título Grande]</div>
                <div className="text-sm mb-2 text-gray-800 dark:text-gray-200">[Subtítulo]</div>
                <div className="bg-blue-500 text-white py-2 px-4 inline-block">
                  [Botón CTA]
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border-2 border-gray-400 dark:border-gray-500 p-3 text-center text-xs text-gray-800 dark:text-gray-200">
                  [Imagen]<br />Texto
                </div>
                <div className="border-2 border-gray-400 dark:border-gray-500 p-3 text-center text-xs text-gray-800 dark:text-gray-200">
                  [Imagen]<br />Texto
                </div>
                <div className="border-2 border-gray-400 dark:border-gray-500 p-3 text-center text-xs text-gray-800 dark:text-gray-200">
                  [Imagen]<br />Texto
                </div>
              </div>
              <div className="border-2 border-gray-400 dark:border-gray-500 p-2 text-xs text-center text-gray-800 dark:text-gray-200">
                [Footer: Enlaces | Redes | Legal]
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Customer Journey en el Diseño",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              1
            </div>
            <div className="flex-1 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">DESCUBRIMIENTO</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Landing desde Google/Redes → Hero claro con propuesta de valor en 3 segundos
              </p>
              <p className="text-sm mt-1 text-yellow-700 dark:text-yellow-300 italic">
                Ej: "Envíos gratis a toda Ecuador en 24h"
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              2
            </div>
            <div className="flex-1 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">CONSIDERACIÓN</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Explora productos → Filtros fáciles, comparaciones, testimonios
              </p>
              <p className="text-sm mt-1 text-blue-700 dark:text-blue-300 italic">
                CTA suave: "Ver planes" o "Comparar productos"
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              3
            </div>
            <div className="flex-1 bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">DECISIÓN</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Listo para comprar → Checkout simple (máx 3 pasos), señales de confianza
              </p>
              <p className="text-sm mt-1 text-green-700 dark:text-green-300 italic">
                Escudos SSL, logos bancos, garantía de devolución
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              4
            </div>
            <div className="flex-1 bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">RETENCIÓN</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Post-venta → Email de seguimiento, área de cliente, cross-selling
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Regla #1: Contraste de Color Mínimo",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Requisitos WCAG AA</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  Texto Normal (&lt;18pt)
                </div>
                <div className="text-4xl font-bold text-blue-700 dark:text-blue-300">4.5:1</div>
                <div className="text-lg mt-2 text-gray-800 dark:text-gray-200">Relación de contraste mínima</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  Texto Grande (≥18pt)
                </div>
                <div className="text-4xl font-bold text-green-700 dark:text-green-300">3:1</div>
                <div className="text-lg mt-2 text-gray-800 dark:text-gray-200">Relación de contraste mínima</div>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">Herramienta:</p>
              <p className="text-sm text-gray-800 dark:text-gray-200">webaim.org/resources/contrastchecker/</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Ejemplos Visuales</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-red-300 dark:border-red-600">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="text-red-500" size={32} />
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                    FALLA AA
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-100 p-4 rounded">
                  <p className="text-2xl" style={{ color: "#999999" }}>
                    Texto gris claro (#999)
                  </p>
                  <p className="text-sm mt-2 text-gray-800">Contraste: 2.8:1 ❌</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-300 dark:border-green-600">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="text-green-500" size={32} />
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    PASA AA
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-100 p-4 rounded">
                  <p className="text-2xl" style={{ color: "#595959" }}>
                    Texto gris oscuro (#595959)
                  </p>
                  <p className="text-sm mt-2 text-gray-800">Contraste: 7.1:1 ✅</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Regla #2: Texto Alternativo en Imágenes",
      subtitle: "Toda imagen debe tener atributo 'alt' descriptivo",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-3">
                <XCircle className="text-red-500" size={32} />
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">MAL</span>
              </div>
              <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                &lt;img src="zapato.jpg"&gt;
              </code>
              <p className="text-lg mt-3 text-gray-900 dark:text-gray-100">Sin texto alternativo</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-3">
                <XCircle className="text-red-500" size={32} />
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">MAL</span>
              </div>
              <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                &lt;img src="zapato.jpg" alt="imagen"&gt;
              </code>
              <p className="text-lg mt-3 text-gray-900 dark:text-gray-100">Texto genérico no descriptivo</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-green-500" size={32} />
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">BIEN</span>
              </div>
              <code className="block bg-gray-800 text-green-400 p-3 rounded text-xs leading-relaxed">
                &lt;img src="zapato.jpg"<br />
                alt="Zapato deportivo Nike Air Max<br />
                color negro talla 42"&gt;
              </code>
              <p className="text-lg mt-3 text-gray-900 dark:text-gray-100">Descripción completa y útil</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">¿Por qué importa?</h3>
              <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
                <li>• Lectores de pantalla lo leen en voz alta</li>
                <li>• Si imagen no carga, muestra el texto</li>
                <li>• Google indexa para búsqueda de imágenes</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Regla #3: Navegación por Teclado",
      subtitle: "Todo debe funcionar SIN mouse (solo Tab, Enter, Flechas)",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Test Rápido</h3>
            <ol className="text-xl space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <span className="text-gray-900 dark:text-gray-100">Abre tu sitio web</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <span className="text-gray-900 dark:text-gray-100">Presiona Tab repetidamente</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <span className="text-gray-900 dark:text-gray-100">¿Ves un borde azul moviéndose?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <span className="text-gray-900 dark:text-gray-100">¿Puedes hacer clic con Enter?</span>
              </li>
            </ol>
          </div>
          <div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
                Elementos Críticos
              </h3>
              <ul className="text-xl space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span className="text-gray-900 dark:text-gray-100">Menú de navegación</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span className="text-gray-900 dark:text-gray-100">Formularios (cambiar entre campos)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span className="text-gray-900 dark:text-gray-100">Botones de compra</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span className="text-gray-900 dark:text-gray-100">Carrito de compras</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">¿Por qué importa?</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Personas con parálisis, temblores o sin brazos usan solo teclado
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Herramientas de Auditoría",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">🌊 WAVE</h3>
            <p className="text-xl mb-3 text-gray-800 dark:text-gray-200">wave.webaim.org</p>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>• Extensión Chrome/Firefox</li>
              <li>• Detecta errores en rojo</li>
              <li>• Alertas en amarillo</li>
              <li>• Gratis y fácil de usar</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">🔦 Lighthouse</h3>
            <p className="text-xl mb-3 text-gray-800 dark:text-gray-200">Integrado en Chrome</p>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>• Clic derecho → Inspeccionar</li>
              <li>• Pestaña "Lighthouse"</li>
              <li>• Puntaje 0-100</li>
              <li>• Incluye SEO y rendimiento</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">🎨 WebAIM Contrast</h3>
            <p className="text-xl mb-3 text-gray-800 dark:text-gray-200">webaim.org/resources/contrastchecker/</p>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>• Valida contraste de colores</li>
              <li>• Sugiere ajustes automáticos</li>
              <li>• Prueba AA y AAA</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">🔊 Lectores de Pantalla</h3>
            <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
              <li>• NVDA (Windows - gratis)</li>
              <li>• VoiceOver (Mac - Cmd+F5)</li>
              <li>• TalkBack (Android)</li>
              <li>• Prueba tu sitio escuchándolo</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "¿Qué es Usabilidad?",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-900/30 p-8 rounded-lg">
            <p className="text-4xl leading-relaxed text-center font-bold text-purple-800 dark:text-purple-200">
              ¿Tu usuario puede hacer lo que vino a hacer sin frustrarse?
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-500" size={40} />
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">
                  Usabilidad BUENA
                </h3>
              </div>
              <p className="text-xl mb-3 text-gray-900 dark:text-gray-100">
                Objetivo: Comprar zapatos negros talla 42
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                ✓ Lo logra en menos de 2 minutos
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                ✓ Sin confusión ni errores
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                ✓ Sale satisfecho
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="text-red-500" size={40} />
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">
                  Usabilidad MALA
                </h3>
              </div>
              <p className="text-xl mb-3 text-gray-900 dark:text-gray-100">
                Objetivo: Comprar zapatos negros talla 42
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                ✗ Se pierde en el menú
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                ✗ No encuentra su talla
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                ✗ Abandona frustrado
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "10 Principios de Usabilidad de Nielsen (1-5)",
      subtitle: "",
      content: (
        <div className="space-y-3">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Visibilidad del Estado del Sistema
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                El usuario siempre debe saber dónde está y qué está pasando
              </p>
              <p className="text-sm mt-1 text-blue-700 dark:text-blue-300">
                Ej: "Paso 2 de 3" en checkout
              </p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-green-700 dark:text-green-300 flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Relación con el Mundo Real
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">Usa lenguaje familiar, no técnico</p>
              <p className="text-sm mt-1 text-green-700 dark:text-green-300">
                Ej: "Mis imágenes" NO "Repositorio de assets"
              </p>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Control y Libertad del Usuario
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">Permite deshacer y salir fácilmente</p>
              <p className="text-sm mt-1 text-purple-700 dark:text-purple-300">
                Ej: Botón "Eliminar" en carrito con confirmación
              </p>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-orange-700 dark:text-orange-300 flex-shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Consistencia y Estándares
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">No inventes la rueda, usa convenciones</p>
              <p className="text-sm mt-1 text-orange-700 dark:text-orange-300">
                Ej: Logo arriba izquierda, carrito arriba derecha
              </p>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-red-700 dark:text-red-300 flex-shrink-0">5</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">Prevención de Errores</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Mejor prevenir que mostrar mensaje de error
              </p>
              <p className="text-sm mt-1 text-red-700 dark:text-red-300">
                Ej: Calendario para fecha (no campo de texto libre)
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "10 Principios de Usabilidad de Nielsen (6-10)",
      subtitle: "",
      content: (
        <div className="space-y-3">
          <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-teal-700 dark:text-teal-300 flex-shrink-0">6</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Reconocimiento en Lugar de Recordar
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                No obligues al usuario a memorizar información
              </p>
              <p className="text-sm mt-1 text-teal-700 dark:text-teal-300">
                Ej: Guardar dirección de envío para próxima compra
              </p>
            </div>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 flex-shrink-0">7</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Flexibilidad y Eficiencia de Uso
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">Atajos para expertos, fácil para novatos</p>
              <p className="text-sm mt-1 text-indigo-700 dark:text-indigo-300">
                Ej: "Compra rápida" para usuarios recurrentes (1-click)
              </p>
            </div>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-pink-700 dark:text-pink-300 flex-shrink-0">8</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Diseño Estético y Minimalista
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Cada elemento debe tener un propósito. Menos es más
              </p>
              <p className="text-sm mt-1 text-pink-700 dark:text-pink-300">
                Ej: 1 objetivo claro, 1 CTA dominante, diseño limpio
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-300 flex-shrink-0">9</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                Reconocer, Diagnosticar y Recuperarse de Errores
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">Mensajes de error útiles y con solución</p>
              <p className="text-sm mt-1 text-yellow-700 dark:text-yellow-300">
                Ej: "El campo 'Teléfono' debe tener 10 dígitos. Ej: 0987654321"
              </p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex gap-4">
            <div className="text-3xl font-bold text-gray-700 dark:text-gray-300 flex-shrink-0">10</div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">Ayuda y Documentación</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Si es necesario, que sea fácil de encontrar
              </p>
              <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                Ej: FAQ visible en footer, chat en vivo, tooltips
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Testing de Usabilidad",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-6">
              <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                ¿Por qué Testear?
              </h3>
              <ul className="text-xl space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100">Tú NO eres tu usuario (conoces tu sitio de memoria)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100">Test de 5 usuarios detecta 85% de problemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100">1 hora de testing ahorra semanas de rediseño</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-300">
                Test Guerrilla (Sin presupuesto)
              </h3>
              <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
                <li>1. Pide a 3 amigos/familiares que prueben</li>
                <li>2. Obsérvalos en silencio</li>
                <li>3. Anota dónde se confunden</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
              <h3 className="text-3xl font-bold mb-4 text-orange-700 dark:text-orange-300">
                Test de los 5 Segundos
              </h3>
              <ol className="text-xl space-y-3 text-gray-900 dark:text-gray-100">
                <li>1. Muestra tu landing a un usuario</li>
                <li>2. Déjalo ver solo 5 segundos</li>
                <li>3. Quita la pantalla</li>
                <li>4. Pregunta: "¿Qué vende? ¿Cuál era la acción?"</li>
              </ol>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-green-100 dark:bg-green-800 p-3 rounded text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-green-700 dark:text-green-300">ÉXITO</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">Responde correctamente</p>
                </div>
                <div className="bg-red-100 dark:bg-red-800 p-3 rounded text-center">
                  <XCircle className="text-red-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-red-700 dark:text-red-300">FALLO</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">No sabe = simplificar</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">
                Test de Tareas
              </h3>
              <p className="text-lg mb-3 text-gray-900 dark:text-gray-100">
                "Compra unos zapatos negros para hombre"
              </p>
              <ul className="text-lg space-y-2 text-gray-800 dark:text-gray-200">
                <li>• Observa (sin ayudar)</li>
                <li>• Mide tiempo y errores</li>
                <li>• Pregunta: "¿Fue fácil?"</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Ejercicios Prácticos",
      subtitle: "45 minutos • 3 actividades",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border-2 border-blue-500">
            <p className="font-bold text-blue-800 dark:text-blue-300 mb-2">
              📝 Actividad 1: Crear Wireframe (20 min)
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-100">
              Diseña wireframe de landing page con buena arquitectura de
              información
            </p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-500">
            <p className="font-bold text-green-800 dark:text-green-300 mb-2">
              🔍 Actividad 2: Auditoría con WAVE (15 min)
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-100">
              Evaluar accesibilidad de sitios ecuatorianos con herramientas
            </p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border-2 border-purple-500">
            <p className="font-bold text-purple-800 dark:text-purple-300 mb-2">
              ✏️ Actividad 3: Test de Contraste (10 min)
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-100">
              Verificar paleta de colores con WebAIM Contrast Checker
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Actividad 1: Crear Wireframe (20 min)",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Instrucciones</h3>
            <ol className="text-xl space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <span className="text-gray-900 dark:text-gray-100">Elige un producto o servicio (real o ficticio)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <span className="text-gray-900 dark:text-gray-100">Define objetivo: ¿Qué quieres que haga el usuario?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <span className="text-gray-900 dark:text-gray-100">Dibuja wireframe en Figma o papel</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <span className="text-gray-900 dark:text-gray-100">Valida con checklist de usabilidad</span>
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Debe Incluir</h3>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg space-y-2 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-900 dark:text-gray-100">Header con logo y navegación</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-900 dark:text-gray-100">Hero con título y CTA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-900 dark:text-gray-100">3 secciones de contenido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-900 dark:text-gray-100">Testimonios o prueba social</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-900 dark:text-gray-100">CTA final</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-900 dark:text-gray-100">Footer</span>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-4">
              <p className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Herramientas:</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">• Figma (figma.com)</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">• Papel y lápiz</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">• Excalidraw (excalidraw.com)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Actividad 2: Auditoría con WAVE (15 min)",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Sitios a Auditar</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                  Sitio 1: E-commerce
                </h4>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  De Prati, Megamaxi, TÍA, Importadora Tomebamba
                </p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">Elige 1</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">
                  Sitio 2: Servicios Financieros
                </h4>
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  Banco Pichincha, Produbanco, Banco Guayaquil
                </p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">Elige 1</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">
                  Sitio 3: Gobierno
                </h4>
                <p className="text-lg text-gray-900 dark:text-gray-100">gob.ec, IESS, SRI, Registro Civil</p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">Elige 1</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Qué Documentar</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                    <th className="text-left p-2 text-gray-900 dark:text-gray-100">Error/Alerta</th>
                    <th className="text-center p-2 text-gray-900 dark:text-gray-100">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="p-2 text-gray-800 dark:text-gray-200">Contraste bajo</td>
                    <td className="text-center p-2 text-gray-800 dark:text-gray-200">__</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="p-2 text-gray-800 dark:text-gray-200">Imágenes sin alt</td>
                    <td className="text-center p-2 text-gray-800 dark:text-gray-200">__</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <td className="p-2 text-gray-800 dark:text-gray-200">Enlaces vacíos</td>
                    <td className="text-center p-2 text-gray-800 dark:text-gray-200">__</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-gray-800 dark:text-gray-200">Formularios sin label</td>
                    <td className="text-center p-2 text-gray-800 dark:text-gray-200">__</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mt-4 border-l-4 border-orange-500">
              <p className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Entregable:</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Documento con hallazgos + 3 mejoras propuestas
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-4">
              <p className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Herramienta:</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">WAVE extensión (wave.webaim.org)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Actividad 3: Test de Contraste (10 min)",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Instrucciones</h3>
            <ol className="text-xl space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <span className="text-gray-900 dark:text-gray-100">Toma tu paleta de colores (o usa ejemplo)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <span className="text-gray-900 dark:text-gray-100">Ve a WebAIM Contrast Checker</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <span className="text-gray-900 dark:text-gray-100">Prueba todas las combinaciones</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <span className="text-gray-900 dark:text-gray-100">Ajusta colores que fallan</span>
              </li>
            </ol>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-6">
              <p className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Herramienta:</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">webaim.org/resources/contrastchecker/</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Paleta de Ejemplo</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div
                  className="w-24 h-24 rounded-lg"
                  style={{ backgroundColor: "#FF6B35" }}
                ></div>
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">#FF6B35</p>
                  <p className="text-lg text-gray-800 dark:text-gray-200">Naranja (Color primario)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-24 h-24 rounded-lg"
                  style={{ backgroundColor: "#004E89" }}
                ></div>
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">#004E89</p>
                  <p className="text-lg text-gray-800 dark:text-gray-200">Azul (Color secundario)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-24 h-24 rounded-lg border-2 border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: "#FFFFFF" }}
                ></div>
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">#FFFFFF</p>
                  <p className="text-lg text-gray-800 dark:text-gray-200">Blanco (Fondo)</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-4 border-l-4 border-yellow-500">
              <p className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Combinaciones a probar:</p>
              <ul className="text-lg space-y-1 text-gray-800 dark:text-gray-200">
                <li>• Naranja sobre blanco</li>
                <li>• Azul sobre blanco</li>
                <li>• Blanco sobre naranja</li>
                <li>• Blanco sobre azul</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tarea Asincrónica",
      subtitle: "Duración estimada: 1 hora",
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-3 text-indigo-800 dark:text-indigo-200">
              1. Lectura WCAG 2.1 (30 min)
            </h3>
            <p className="text-xl text-gray-900 dark:text-gray-100">
              Lee "Guía Breve de WCAG 2.1" en w3.org/WAI/standards-guidelines/wcag/es
            </p>
            <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
              Identifica 5 criterios que te sorprendieron
            </p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-3 text-purple-800 dark:text-purple-200">
              2. Auditoría 3 Sitios (20 min)
            </h3>
            <p className="text-xl text-gray-900 dark:text-gray-100">
              Audita 3 sitios ecuatorianos con WAVE y documenta hallazgos
            </p>
            <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
              1 e-commerce + 1 banco + 1 gobierno
            </p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-3 text-green-800 dark:text-green-200">
              3. Wireframe de Proyecto (10 min)
            </h3>
            <p className="text-xl text-gray-900 dark:text-gray-100">
              Crea wireframe de tu idea de negocio/producto
            </p>
            <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
              Aplicando todo lo aprendido hoy
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Recursos para Consultar",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-6 text-lg">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">📚 Lectura</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <p className="font-bold text-gray-900 dark:text-gray-100">Guía WCAG 2.1 (Español)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  w3.org/WAI/standards-guidelines/wcag/es
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <p className="font-bold text-gray-900 dark:text-gray-100">10 Heurísticas de Nielsen</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  nngroup.com/articles/ten-usability-heuristics
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  Libro: "No me hagas pensar" - Steve Krug
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Disponible en bibliotecas digitales
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">
              🛠️ Herramientas
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <p className="font-bold text-gray-900 dark:text-gray-100">WAVE</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">wave.webaim.org</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <p className="font-bold text-gray-900 dark:text-gray-100">WebAIM Contrast Checker</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  webaim.org/resources/contrastchecker
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <p className="font-bold text-gray-900 dark:text-gray-100">Figma</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">figma.com</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <p className="font-bold text-gray-900 dark:text-gray-100">Lighthouse (Chrome DevTools)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Integrado en navegador</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Próxima Clase: SEMANA 4",
      subtitle: "Experiencia del Usuario (UX), Psicología de Conversión y Metodología",
      content: (
        <div className="text-center space-y-8">
          <h3 className="text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">📅 SEMANA 4</h3>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-lg">
            <p className="text-3xl mb-4 text-gray-900 dark:text-gray-100">Temas destacados:</p>
            <ul className="text-2xl space-y-3 text-left text-gray-800 dark:text-gray-200">
              <li>• UX centrada en usuario</li>
              <li>• Psicología de compra online</li>
              <li>• ¿Por qué funcionan los botones rojos?</li>
              <li>• Dónde poner testimonios</li>
              <li>• Crear urgencia sin ser desesperado</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Recapitulación del Día",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                Arquitectura de Información
              </h3>
            </div>
            <p className="text-xl ml-16 text-gray-900 dark:text-gray-100">
              Organizar contenido de forma lógica = Más conversiones (hasta +200%)
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-3xl font-bold text-green-700 dark:text-green-300">
                Accesibilidad WCAG 2.1 AA
              </h3>
            </div>
            <p className="text-xl ml-16 text-gray-900 dark:text-gray-100">
              Diseñar para todos = +15% clientes potenciales + Mejor SEO + Cumplimiento legal
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-300">Usabilidad</h3>
            </div>
            <p className="text-xl ml-16 text-gray-900 dark:text-gray-100">
              Sitios fáciles de usar = Menos abandono + Usuarios felices + Más ventas
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Conceptos Clave para Recordar",
      subtitle: "",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg">
            <p className="font-bold text-blue-800 dark:text-blue-200">
              ✅ Un sitio bien organizado, accesible y usable no es un lujo, es
              una NECESIDAD comercial
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg">
            <p className="font-bold text-green-800 dark:text-green-200">
              ✅ Arquitectura de Información = Organizar contenido de forma
              lógica = Más conversiones (hasta +200%)
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-lg">
            <p className="font-bold text-purple-800 dark:text-purple-200">
              ✅ Accesibilidad WCAG 2.1 AA = +15% clientes potenciales + Mejor
              SEO + Cumplimiento legal
            </p>
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/30 p-4 rounded-lg">
            <p className="font-bold text-orange-800 dark:text-orange-200">
              ✅ Usabilidad = Sitios fáciles de usar = Menos abandono + Usuarios
              felices + Más ventas
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "¡Gracias!",
      subtitle: "",
      content: (
        <div className="text-center space-y-8">
          <Globe className="w-32 h-32 mx-auto text-blue-500" />
          <div>
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              ¿Preguntas?
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Recuerden completar la tarea asincrónica
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ¡El diseño accesible y usable comienza hoy!
            </p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>Profesor: ITSAE Ecuador</p>
            <p>Diseño Web para Marketing Digital</p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-primary-100 mt-2 text-sm sm:text-base">
                {slides[currentSlide].subtitle}
              </p>
            )}
          </div>

          <div className="p-4 sm:p-6 lg:p-12 min-h-[400px] sm:min-h-[500px] dark:text-gray-100">
            {slides[currentSlide].content}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between border-t dark:border-gray-600 gap-4 sm:gap-0 transition-colors duration-300">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center space-x-2 order-first sm:order-none">
              <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm sm:text-base">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
              disabled={currentSlide === slides.length - 1}
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="bg-gray-100 dark:bg-gray-600 px-4 sm:px-6 py-3 sm:py-4 flex justify-center space-x-1 sm:space-x-2 overflow-x-auto transition-colors duration-300">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all flex-shrink-0 ${
                  currentSlide === index
                    ? "bg-primary-700 dark:bg-primary-500 w-6 sm:w-8"
                    : "bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400"
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Herramientas útiles */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <a
            href="https://wave.webaim.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 dark:bg-red-600 text-white p-3 sm:p-4 rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition-colors text-center"
          >
            <Eye className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">WAVE</p>
            <p className="text-xs opacity-90">Auditoría accesibilidad</p>
          </a>
          <a
            href="https://webaim.org/resources/contrastchecker/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 dark:bg-blue-600 text-white p-3 sm:p-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-center"
          >
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">WebAIM</p>
            <p className="text-xs opacity-90">Verificador contraste</p>
          </a>
          <a
            href="https://figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 dark:bg-green-600 text-white p-3 sm:p-4 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition-colors text-center"
          >
            <Home className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">Figma</p>
            <p className="text-xs opacity-90">Wireframes y diseño</p>
          </a>
          <a
            href="https://www.nngroup.com/articles/ten-usability-heuristics/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 dark:bg-purple-600 text-white p-3 sm:p-4 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors text-center"
          >
            <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">Nielsen</p>
            <p className="text-xs opacity-90">Principios usabilidad</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentacionTema3;
