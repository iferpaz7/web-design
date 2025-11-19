import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PresentacionFigma: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "Introducción a Figma",
      subtitle: "Diseño Web para Marketing Digital",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">🎨</div>
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            Semana 5
          </h2>
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Introducción a Figma y Herramientas Básicas
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ITSAE - Ecuador | 18-25 noviembre 2025
          </p>
          <div className="mt-8 text-lg text-gray-700 dark:text-gray-300">
            <p>👨‍🏫 Diseño Web para estudiantes de Marketing Digital</p>
            <p>⏱️ Duración: 2 horas | 🎯 Modalidad: Práctica</p>
          </div>
        </div>
      ),
    },
    {
      title: "Objetivos de Hoy",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Al finalizar esta clase podrás:
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: "🎯",
                text: "Navegar con confianza en la interfaz de Figma",
              },
              {
                icon: "📱",
                text: "Crear diseños en 3 tamaños: móvil, tablet, desktop",
              },
              { icon: "📂", text: "Organizar proyectos profesionalmente" },
              { icon: "📐", text: "Aplicar sistema de grid de 8px" },
              {
                icon: "💡",
                text: "Entender por qué Figma es clave en marketing digital",
              },
            ].map((obj, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
              >
                <span className="text-3xl">{obj.icon}</span>
                <span className="text-lg flex-1 pt-1 text-gray-900 dark:text-gray-100">
                  {obj.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "¿Por qué Figma?",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Figma es el estándar de la industria
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
                🏢 Lo usan:
              </h4>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li>✓ Airbnb (+30% conversiones)</li>
                <li>✓ Uber, Twitter, Microsoft</li>
                <li>✓ En Ecuador: Kushki, Tipti, Cuy Games</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
                💰 Ventajas para ti:
              </h4>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li>⚡ Mockups en 20 min vs 2 días</li>
                <li>🤝 Colaboración en tiempo real</li>
                <li>🎁 100% Gratis para estudiantes</li>
                <li>☁️ En la nube (no descargar)</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mt-6">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              📊 Dato Ecuador (LinkedIn 2024):
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              "Figma aparece en el 78% de ofertas laborales de diseño digital"
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Interfaz de Figma",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Los 5 Paneles Esenciales
          </h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
            <div className="border-2 border-gray-400 dark:border-gray-500 rounded-lg overflow-hidden">
              <div className="bg-gray-300 dark:bg-gray-600 p-2 text-center font-bold border-b-2 border-gray-400 dark:border-gray-500 text-gray-900 dark:text-gray-100">
                TOOLBAR (Herramientas)
              </div>
              <div className="flex h-96">
                <div className="w-1/5 bg-gray-200 dark:bg-gray-600 border-r-2 border-gray-400 dark:border-gray-500 p-3">
                  <div className="font-bold mb-2 text-gray-900 dark:text-gray-100">
                    LAYERS
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="bg-white dark:bg-gray-800 p-1 rounded text-gray-900 dark:text-gray-100">
                      📄 Página 1
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-1 rounded ml-2 text-gray-900 dark:text-gray-100">
                      📱 Frame
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-1 rounded ml-4 text-gray-900 dark:text-gray-100">
                      🟦 Button
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 flex items-center justify-center border-r-2 border-gray-400 dark:border-gray-500">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      CANVAS
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      (Área de trabajo)
                    </p>
                  </div>
                </div>
                <div className="w-1/5 bg-gray-200 dark:bg-gray-600 p-3">
                  <div className="font-bold mb-2 text-gray-900 dark:text-gray-100">
                    PROPERTIES
                  </div>
                  <div className="text-xs space-y-2">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100">
                      Width: 375px
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100">
                      Height: 812px
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100">
                      Fill: #FF6B35
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Herramientas Básicas",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Tus 5 Herramientas Esenciales
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                key: "V",
                name: "Selection",
                desc: "Seleccionar y mover",
                icon: "👆",
              },
              { key: "F", name: "Frame", desc: "Crear lienzos", icon: "🖼️" },
              {
                key: "R",
                name: "Rectangle",
                desc: "Botones y cajas",
                icon: "⬜",
              },
              { key: "T", name: "Text", desc: "Títulos y textos", icon: "✏️" },
              {
                key: "Ctrl+Shift+K",
                name: "Image",
                desc: "Insertar fotos",
                icon: "🖼️",
              },
            ].map((tool, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{tool.icon}</span>
                  <div>
                    <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {tool.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {tool.desc}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm font-mono text-center mt-2 text-gray-900 dark:text-gray-100">
                  {tool.key}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 mt-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              💡 Tip de Productividad:
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              Memoriza estos atajos. Diseñarás 5x más rápido.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Sistema Grid 8px",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            El Secreto del Diseño Profesional
          </h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              ¿Por qué 8px?
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              El 95% de pantallas usan píxeles en múltiplos de 8. Apple, Google
              y Microsoft lo usan como estándar.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              Espaciados Recomendados:
            </h4>
            <div className="space-y-3">
              {[
                { label: "Entre botón y texto", value: "16px (2 cuadros)" },
                { label: "Entre secciones", value: "40px (5 cuadros)" },
                { label: "Márgenes laterales móvil", value: "16-24px" },
                { label: "Altura de botón", value: "48px (6 cuadros)" },
                {
                  label: "Padding botón",
                  value: "16px vertical, 24px horizontal",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-50 dark:bg-gray-600 p-3 rounded"
                >
                  <span className="text-gray-700 dark:text-gray-200">
                    {item.label}:
                  </span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mt-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              ✅ Regla de Oro:
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              TODO debe alinearse a múltiplos de 8px (8, 16, 24, 32, 40, 48...)
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Botones que Convierten",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Anatomía de un Botón Efectivo
          </h3>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-bold shadow-lg">
                Comprar Ahora
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    Tamaño:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">
                    200px × 48px
                  </span>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    Color:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">
                    #FF6B35 (naranja)
                  </span>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    Texto:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">
                    16px Bold
                  </span>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    Radius:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">8px</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              🔥 Dato de Conversión:
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Botones naranjas/rojos tienen 21% más clics que azules en
              e-commerce (CXL Institute)
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              🎯 Buenas Prácticas:
            </p>
            <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
              <li>
                ✓ Usa verbos de acción: "Comprar", "Descargar", "Registrarse"
              </li>
              <li>✓ Crea contraste con el fondo</li>
              <li>✓ Deja espacio alrededor (mínimo 24px)</li>
              <li>✓ Haz que sea el elemento más llamativo</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Jerarquía Tipográfica",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Tamaños que Funcionan
          </h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 space-y-4">
            <div className="space-y-3">
              <div className="border-b pb-3">
                <div className="text-4xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                  H1: Título Principal
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Móvil: 28-32px | Desktop: 48-64px
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Uso: Promesa principal de la página
                </div>
              </div>
              <div className="border-b pb-3">
                <div className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                  H2: Subtítulos
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Móvil: 20-24px | Desktop: 32-40px
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Uso: Dividir secciones
                </div>
              </div>
              <div className="border-b pb-3">
                <div className="text-lg mb-1 text-gray-900 dark:text-gray-100">
                  Body: Cuerpo de texto
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Móvil: 16-18px | Desktop: 18-20px
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Uso: Descripciones y párrafos
                </div>
              </div>
              <div>
                <div className="text-base font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  Botones
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Móvil: 14-16px | Desktop: 16-18px
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Uso: Calls-to-action
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              📊 Principio de Marketing:
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              El 80% de usuarios solo leen el título. Si no comunica beneficio
              claro en 3 segundos, pierdes la venta.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Responsive Design",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Los 3 Tamaños Esenciales
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-center">
              <Smartphone className="w-12 h-12 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                📱 Mobile
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 my-2">
                375px
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                iPhone estándar
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded py-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                65% usuarios Ecuador
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-center">
              <Tablet className="w-12 h-12 mx-auto mb-2 text-green-600 dark:text-green-400" />
              <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                📱 Tablet
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 my-2">
                768px
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                iPad estándar
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 rounded py-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                15% usuarios Ecuador
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-center">
              <Monitor className="w-12 h-12 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
              <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                💻 Desktop
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 my-2">
                1440px
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Laptop HD
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded py-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                20% usuarios Ecuador
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 mt-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              📱 Mobile First:
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              Siempre diseña primero para móvil. Es más fácil expandir que
              reducir. El 65% de tu tráfico viene de teléfonos.
            </p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
            Fuente: StatCounter Ecuador 2024
          </div>
        </div>
      ),
    },
    {
      title: "Nomenclatura Profesional",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Cómo Nombrar como un Pro
          </h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
            <div className="mb-4">
              <p className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
                Estructura:
              </p>
              <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-center text-lg text-gray-900 dark:text-gray-100">
                TipoElemento_Descripción_Estado
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-bold mb-3 text-red-600 dark:text-red-400">
                  ❌ Nombres Malos:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-red-50 dark:bg-red-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    Rectangle 1
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    Group 5
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    Text
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    Frame 23
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-green-600 dark:text-green-400">
                  ✅ Nombres Buenos:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    Hero_Background
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    CTA_Button_Primary
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    Headline_H1_Promo
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded text-gray-900 dark:text-gray-100">
                    Mobile_375_Homepage
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              💡 Beneficio Real:
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              Cuando tu landing page tenga 200 elementos, encontrar
              "Button_CTA_Primary" toma 2 segundos vs. buscar "Rectangle 87" que
              toma 5 minutos.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Recursos Gratuitos",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Imágenes e Iconos Profesionales
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
                📸 Imágenes Gratis:
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Unsplash
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    unsplash.com
                  </div>
                  <div className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                    ✓ Fotos profesionales de alta calidad
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Pexels
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    pexels.com
                  </div>
                  <div className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                    ✓ Más variedad, ideal productos
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Pixabay
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    pixabay.com
                  </div>
                  <div className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                    ✓ Ilustraciones y vectores
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
                🎨 Iconos Gratis:
              </h4>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Heroicons
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    heroicons.com
                  </div>
                  <div className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                    ✓ Simplista y profesional
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Font Awesome
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    fontawesome.com
                  </div>
                  <div className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                    ✓ Miles de iconos
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Figma Community
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Buscar "Icon pack"
                  </div>
                  <div className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                    ✓ Duplicar directo a tu archivo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-400 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              ⚠️ Optimización Web:
            </p>
            <ul className="text-sm space-y-1 mt-2 text-gray-800 dark:text-gray-200">
              <li>
                • Peso máximo: <strong>300KB</strong> por imagen
              </li>
              <li>
                • Formato: <strong>JPG</strong> para fotos, <strong>PNG</strong>{" "}
                para logos
              </li>
              <li>
                • Resolución: <strong>2x</strong> para pantallas retina
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Ejercicio Práctico",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            🎯 Tu Primera Landing Page
          </h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-blue-500 shadow-lg">
            <h4 className="font-bold text-xl mb-4 text-center text-gray-900 dark:text-gray-100">
              Crear Hero Section Responsivo
            </h4>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  📱 Paso 1: Mobile (375px)
                </p>
                <ul className="text-sm space-y-1 ml-4 text-gray-800 dark:text-gray-200">
                  <li>• Frame de 375px × 812px</li>
                  <li>• Imagen hero de Unsplash (375px × 250px)</li>
                  <li>• Título: "¡30% de Descuento Solo Hoy!" (32px, Bold)</li>
                  <li>• Botón: "Comprar Ahora" (200px × 48px, #FF6B35)</li>
                  <li>• Aplicar grid de 8px</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  📱 Paso 2: Tablet (768px)
                </p>
                <ul className="text-sm space-y-1 ml-4 text-gray-800 dark:text-gray-200">
                  <li>• Duplicar frame mobile → 768px</li>
                  <li>• Título: 40px</li>
                  <li>• Botón: 240px × 48px</li>
                  <li>• Imagen: 768px × 400px</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  💻 Paso 3: Desktop (1440px)
                </p>
                <ul className="text-sm space-y-1 ml-4 text-gray-800 dark:text-gray-200">
                  <li>• Duplicar frame tablet → 1440px</li>
                  <li>• Título: 56px</li>
                  <li>• Botón: 280px × 56px</li>
                  <li>• Imagen: 1440px × 600px</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              ⏱️ Tiempo estimado: 45 minutos
            </p>
            <p className="text-sm mt-1 text-gray-800 dark:text-gray-200">
              ¡No te preocupes por la perfección! Lo importante es practicar.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Tarea Asincrónica",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            📚 Para la Próxima Clase
          </h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">📺</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    1. Ver Tutorial Oficial Figma
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Duración: 25 minutos
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    youtube.com → Buscar "Figma tutorial español principiantes"
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🎨</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    2. Crear Hero Section Completo
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    3 frames con contenido real
                  </p>
                  <ul className="text-xs space-y-1 mt-2 ml-4 text-gray-700 dark:text-gray-400">
                    <li>• Hero section con imagen, título y CTA</li>
                    <li>• Product card con precio y descripción</li>
                    <li>• Footer con redes sociales</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">📤</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    3. Exportar y Comparar
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Exportar como PNG y analizar con sitio real
                  </p>
                  <p className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                    Busca un e-commerce ecuatoriano y compara tu diseño
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 mt-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              ⏱️ Tiempo total: 2 horas
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Entrega: Compartir link de Figma antes de la próxima clase
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Próxima Clase",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            📅 Semana 6 Preview
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-lg border-2 border-blue-300 dark:border-blue-600">
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Componentes, Design Tokens y Sistemas de Diseño
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  🧩 Aprenderás:
                </p>
                <ul className="text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <li>✓ Crear componentes reutilizables</li>
                  <li>✓ Variants para múltiples estados</li>
                  <li>✓ Auto-layout para diseños flexibles</li>
                  <li>✓ Design tokens (colores, tipografías)</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  💼 Harás:
                </p>
                <ul className="text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <li>✓ Biblioteca de componentes completa</li>
                  <li>✓ Sistema de diseño básico</li>
                  <li>✓ Botones con 3 estados</li>
                  <li>✓ Cards de productos reutilizables</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              🚀 Prepárate:
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              La próxima clase llevarás tu diseño al siguiente nivel. Los
              componentes te ahorrarán 80% del tiempo de diseño.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Resumen y Cierre",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            ¡Felicidades!
          </h2>
          <h3 className="text-2xl text-gray-900 dark:text-gray-100">
            Ahora sabes usar Figma
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-8 text-left">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
                ✅ Hoy lograste:
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>✓ Navegar la interfaz de Figma</li>
                <li>✓ Crear diseños responsivos</li>
                <li>✓ Aplicar grid de 8px</li>
                <li>✓ Organizar profesionalmente</li>
                <li>✓ Compartir con clientes</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
                🎯 Próximos pasos:
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li>1. Completar tarea asincrónica</li>
                <li>2. Ver tutorial complementario</li>
                <li>3. Practicar 30 min diarios</li>
                <li>4. Traer preguntas a clase 6</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-lg text-gray-700 dark:text-gray-300">
            <p className="font-semibold">💬 Preguntas: ivan.paz@itsae.edu.ec</p>
            <p className="text-sm mt-2">
              📱 Link de Figma para práctica: <a href="https://figma.com" target="_blank"> Ir Figma</a>{" "}
            </p>
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

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        if (currentSlide < slides.length - 1) {
          nextSlide();
        }
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        if (currentSlide > 0) {
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white px-4 py-3 sm:px-6 sm:py-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-primary-100 mt-1 text-sm sm:text-base">
                {slides[currentSlide].subtitle}
              </p>
            )}
          </div>

          <div className="p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[450px] dark:text-gray-100">
            {slides[currentSlide].content}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between border-t dark:border-gray-600 gap-3 sm:gap-0 transition-colors duration-300">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-4 sm:px-5 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
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
              className="flex items-center space-x-2 px-4 sm:px-5 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
              disabled={currentSlide === slides.length - 1}
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="bg-gray-100 dark:bg-gray-600 px-4 sm:px-6 py-2 sm:py-3 flex justify-center space-x-1 sm:space-x-2 overflow-x-auto transition-colors duration-300">
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
      </div>
    </div>
  );
};

export default PresentacionFigma;
