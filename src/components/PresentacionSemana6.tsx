import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Package, Palette, Layout, Zap, BookOpen, Globe } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const PresentacionSemana6: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "📦 Componentes, Design Tokens y Sistemas de Diseño",
      subtitle: "Semana 6 | Diseño Web para Marketing Digital",
      content: (
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <Package className="w-20 h-20 text-blue-600" />
            <Palette className="w-20 h-20 text-amber-500" />
          <Layout className="w-20 h-20 text-emerald-600" />
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 font-semibold">Profesor: Ing. Ivan Paz</p>
        <p className="text-xl text-gray-600 dark:text-gray-400">25 noviembre - 03 diciembre 2024</p>
        <div className="bg-gradient-to-r from-blue-600 to-amber-500 text-white p-6 rounded-2xl">
            <p className="text-2xl font-bold">El diseño es como LEGO para sitios web</p>
          </div>
        </div>
      )
    },
    {
      title: "🎯 Objetivos de Hoy",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-600">
            <p className="font-bold text-blue-900 dark:text-blue-300 text-xl mb-2">✓ Comprender sistemas de diseño</p>
            <p className="text-gray-700 dark:text-gray-300">Y su impacto en productividad y consistencia de marca</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border-l-4 border-amber-500">
            <p className="font-bold text-amber-900 dark:text-amber-300 text-xl mb-2">✓ Crear componentes reutilizables</p>
            <p className="text-gray-700 dark:text-gray-300">En Figma con variantes y estados interactivos</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border-l-4 border-emerald-600">
            <p className="font-bold text-emerald-900 dark:text-emerald-300 text-xl mb-2">✓ Implementar design tokens</p>
            <p className="text-gray-700 dark:text-gray-300">Para mantener consistencia visual en todo el proyecto</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl border-l-4 border-purple-600">
            <p className="font-bold text-purple-900 dark:text-purple-300 text-xl mb-2">✓ Mejorar sitio ITSAE</p>
            <p className="text-gray-700 dark:text-gray-300">Aplicar sistema de diseño profesional a nuestra institución</p>
          </div>
        </div>
      )
    },
    {
      title: "🧱 ¿Qué es un Sistema de Diseño?",
      subtitle: "Es como LEGO para diseño web",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl border-2 border-red-400">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">❌ SIN Sistema</h3>
              <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                <li>⏱️ 8 horas por landing page</li>
                <li>🎨 12 tonos de azul diferentes</li>
                <li>🔄 Cambiar 47 botones manualmente</li>
                <li>⚠️ Inconsistencias visuales</li>
              </ul>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border-2 border-emerald-500">
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">✅ CON Sistema</h3>
              <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                <li>⚡ 2 horas por landing page</li>
                <li>🎯 Colores consistentes</li>
                <li>✨ 1 cambio, 47 actualizaciones</li>
                <li>🏆 Marca profesional</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-amber-500 text-white p-6 rounded-xl text-center">
            <p className="text-2xl font-bold">75% de reducción en tiempo de diseño</p>
          </div>
        </div>
      )
    },
    {
      title: "🌟 Empresas que Usan Sistemas de Diseño",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-xl text-center shadow-xl">
              <h3 className="text-xl font-bold mb-3">Shopify Polaris</h3>
              <p className="text-emerald-50">1M+ tiendas online usan el mismo sistema</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-xl text-center shadow-xl">
              <h3 className="text-xl font-bold mb-3">Material Design</h3>
              <p className="text-blue-50">Gmail, YouTube, Google Ads</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-6 rounded-xl text-center shadow-xl">
              <h3 className="text-xl font-bold mb-3">Airbnb Design</h3>
              <p className="text-pink-50">Consistencia global en 220+ países</p>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-xl border-2 border-blue-400">
            <p className="text-center text-2xl text-gray-800 dark:text-gray-200">
              <span className="text-4xl">🇪🇨</span> <strong>Ecuador:</strong> De Prati y Megamaxi usan sistemas internos
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border-l-4 border-amber-500">
            <p className="text-xl text-amber-900 dark:text-amber-300">
              <strong>ITSAE</strong> puede tener su propio sistema de diseño con colores institucionales
            </p>
          </div>
        </div>
      )
    },
    {
      title: "⚛️ Design Tokens: Los Átomos del Diseño",
      subtitle: "Decisiones de diseño convertidas en variables reutilizables",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 dark:text-gray-300">Variables que definen la identidad visual de tu marca</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-block px-8 py-4 rounded-xl bg-blue-600 text-white text-xl font-bold shadow-lg">
              Primary Color
            </div>
            <div className="inline-block px-8 py-4 rounded-xl bg-amber-500 text-white text-xl font-bold shadow-lg">
              Accent Color
            </div>
            <div className="inline-block px-8 py-4 rounded-xl bg-emerald-600 text-white text-xl font-bold shadow-lg">
              Success
            </div>
            <div className="inline-block px-8 py-4 rounded-xl bg-red-600 text-white text-xl font-bold shadow-lg">
              Error
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-xl border-2 border-purple-400">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              <strong>Ventaja:</strong> Si cambias el color primario de #003366 a #004080, se actualiza automáticamente en botones, enlaces, headers, íconos, etc.
            </p>
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
            <p className="text-2xl font-bold">¡Un cambio = Actualización global!</p>
          </div>
        </div>
      )
    },
    {
      title: "🎨 Tipos de Design Tokens",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-2 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">🎨 COLOR</h3>
              <div className="space-y-2 text-gray-800 dark:text-gray-200 font-mono text-sm">
                <p>primary: <span className="bg-blue-600 text-white px-2 py-1 rounded">#003366</span></p>
                <p>accent: <span className="bg-amber-500 text-white px-2 py-1 rounded">#FFB81C</span></p>
                <p>success: <span className="bg-emerald-600 text-white px-2 py-1 rounded">#10B981</span></p>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl border-2 border-purple-500">
              <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4">📝 TIPOGRAFÍA</h3>
              <div className="space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>Heading:</strong> Montserrat</p>
                <p><strong>Body:</strong> Open Sans</p>
                <p><strong>H1:</strong> 48px Bold</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border-2 border-emerald-500">
            <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">📏 ESPACIADO (Sistema de 8px)</h3>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-emerald-600 rounded mb-2"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">xs: 8px</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded mb-2"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">sm: 16px</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-600 rounded mb-2"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">md: 24px</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-emerald-600 rounded mb-2"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">lg: 32px</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🔄 Componentes Reutilizables",
      subtitle: "Diseña una vez, usa 1000 veces",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-xl">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Analogía: Plantilla de Email en Mailchimp</p>
            <ul className="space-y-3 text-lg text-gray-800 dark:text-gray-200">
              <li>✓ Diseñas una vez</li>
              <li>✓ La usas 100 veces</li>
              <li>✓ Cambias el logo en la plantilla maestra</li>
              <li>✓ Se actualiza en todos los emails futuros</li>
            </ul>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border-2 border-amber-500 text-center">
            <p className="text-3xl font-bold text-amber-900 dark:text-amber-200">
              Componente Maestro → 50 Instancias
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
              <div className="w-full h-12 bg-blue-600 rounded-lg mb-2"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Botón Primario</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
              <div className="w-full h-12 bg-blue-600 rounded-lg mb-2"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Mismo componente</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
              <div className="w-full h-12 bg-blue-600 rounded-lg mb-2"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Instancia 3</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🔘 Anatomía de un Botón Profesional",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">Variantes de Tipo</h3>
              <div className="space-y-3">
                <div>
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold">Primary</button>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">Acción principal</p>
                </div>
                <div>
                  <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold">Secondary</button>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">Acción secundaria</p>
                </div>
                <div>
                  <button className="w-full px-6 py-3 text-blue-600 font-bold">Ghost</button>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">Acción terciaria</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4">Variantes de Estado</h3>
              <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                <li><strong>Default:</strong> Estado normal</li>
                <li><strong>Hover:</strong> Al pasar el mouse (+5% oscuro)</li>
                <li><strong>Active:</strong> Al hacer clic</li>
                <li><strong>Disabled:</strong> Inactivo (50% opacidad)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border-l-4 border-amber-500">
            <p className="text-xl text-gray-800 dark:text-gray-200">
              <strong>Nomenclatura:</strong> <code className="bg-white dark:bg-gray-700 px-3 py-1 rounded text-amber-700 dark:text-amber-400">Button/Primary/Medium/Hover</code>
            </p>
          </div>
        </div>
      )
    },
    {
      title: "🛒 Componentes Clave para E-commerce",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl border-l-4 border-blue-600">
            <p className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">📦 Product Card</p>
            <p className="text-gray-700 dark:text-gray-300">Imagen, título, precio, rating, botón CTA</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-5 rounded-xl border-l-4 border-emerald-600">
            <p className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-2">🧭 Navigation Menu</p>
            <p className="text-gray-700 dark:text-gray-300">Logo, enlaces principales, carrito, búsqueda</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-5 rounded-xl border-l-4 border-purple-600">
            <p className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">📝 Form Inputs</p>
            <p className="text-gray-700 dark:text-gray-300">Campos con estados de error/success/focus</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-5 rounded-xl border-l-4 border-amber-500">
            <p className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">🪟 Modals</p>
            <p className="text-gray-700 dark:text-gray-300">Newsletter, confirmación de compra, carrito</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl border-l-4 border-gray-600">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-300 mb-2">⬇️ Footer</p>
            <p className="text-gray-700 dark:text-gray-300">Enlaces legales, redes sociales, métodos de pago</p>
          </div>
        </div>
      )
    },
    {
      title: "📚 Library de Figma: Organización Profesional",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-amber-100 dark:from-blue-900/30 dark:to-amber-900/30 p-8 rounded-xl border-2 border-blue-500">
            <p className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">📁 Design System - ITSAE</p>
            <div className="space-y-3 text-lg text-gray-800 dark:text-gray-200 ml-4">
              <p>📂 <strong>01 - Foundations</strong></p>
              <p className="ml-8">→ Colors, Typography, Spacing, Icons</p>
              <p>📂 <strong>02 - Components</strong></p>
              <p className="ml-8">→ Buttons, Forms, Cards, Navigation</p>
              <p>📂 <strong>03 - Patterns</strong></p>
              <p className="ml-8">→ Hero Sections, Grids, Testimonials, CTAs</p>
            </div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border-2 border-emerald-500 text-center">
            <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-200">
              Una agencia puede diseñar 5 landing pages en 1 día
            </p>
          </div>
        </div>
      )
    },
    {
      title: "💻 Ejercicio Práctico (75 min)",
      subtitle: "Sistema de Diseño para ITSAE",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-amber-500 text-white p-6 rounded-xl text-center">
            <p className="text-2xl font-bold mb-2">🎓 Mejoremos juntos el sitio de ITSAE</p>
            <p className="text-blue-50">https://itsae.edu.ec/</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl border-l-4 border-blue-600">
            <p className="font-bold text-blue-900 dark:text-blue-300 text-lg mb-2">Paso 1 (15 min): Design Tokens ITSAE</p>
            <p className="text-gray-700 dark:text-gray-300">Crear paleta oficial: Azul #003366, Dorado #FFB81C, Verde #10B981</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-5 rounded-xl border-l-4 border-amber-500">
            <p className="font-bold text-amber-900 dark:text-amber-300 text-lg mb-2">Paso 2 (20 min): Componente "Button"</p>
            <p className="text-gray-700 dark:text-gray-300">3 tipos (Primary, Secondary, Ghost) × 3 tamaños × 4 estados</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-5 rounded-xl border-l-4 border-emerald-600">
            <p className="font-bold text-emerald-900 dark:text-emerald-300 text-lg mb-2">Paso 3 (20 min): Componente "Career Card"</p>
            <p className="text-gray-700 dark:text-gray-300">Para mostrar carreras: Contabilidad, Marketing, Software, Enfermería</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-5 rounded-xl border-l-4 border-purple-600">
            <p className="font-bold text-purple-900 dark:text-purple-300 text-lg mb-2">Paso 4 (20 min): Hero Section</p>
            <p className="text-gray-700 dark:text-gray-300">Rediseñar portada con componentes creados</p>
          </div>
        </div>
      )
    },
    {
      title: "💰 ROI: Retorno de Inversión",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Agencia SIN Sistema</h3>
              <p className="text-xl mt-4">$500 × 5 landing pages/mes</p>
              <p className="text-5xl font-bold mt-6">= $2,500</p>
              <p className="text-red-100 mt-4">125 horas/mes</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Agencia CON Sistema</h3>
              <p className="text-xl mt-4">$500 × 15 landing pages/mes</p>
              <p className="text-5xl font-bold mt-6">= $7,500</p>
              <p className="text-emerald-100 mt-4">125 horas/mes</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white p-8 rounded-xl text-center">
            <p className="text-4xl font-bold">3X más ingresos con la misma capacidad</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <p className="text-xl text-gray-800 dark:text-gray-200">
              <strong>ITSAE:</strong> Aplicando un sistema de diseño, pueden actualizar todas las páginas de carreras en 1 hora
            </p>
          </div>
        </div>
      )
    },
    {
      title: "🔗 De Figma a WordPress/Shopify",
      subtitle: "Flujo Profesional de Handoff",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Flujo de Trabajo:</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100">Diseñador:</p>
                  <p className="text-gray-700 dark:text-gray-300">Crea componentes en Figma con design tokens</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100">Handoff:</p>
                  <p className="text-gray-700 dark:text-gray-300">Exporta especificaciones (colores HEX, tamaños, espaciados)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100">Desarrollador:</p>
                  <p className="text-gray-700 dark:text-gray-300">Implementa en WordPress/Elementor/Shopify</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100">Resultado:</p>
                  <p className="text-gray-700 dark:text-gray-300">Design tokens → Variables CSS reutilizables</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-2 border-blue-500">
            <p className="font-bold text-xl mb-2 text-blue-900 dark:text-blue-300">🛠 Herramientas:</p>
            <p className="text-gray-800 dark:text-gray-200">Figma Inspect, Zeplin, Avocode, Anima</p>
          </div>
        </div>
      )
    },
    {
      title: "📝 Tarea Asincrónica (2 horas)",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-600">
            <p className="font-bold text-blue-900 dark:text-blue-300 text-xl mb-3">Parte 1 (30 min): Tutorial</p>
            <p className="text-gray-700 dark:text-gray-300">Ver tutorial "Componentes y Variantes en Figma"</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border-l-4 border-amber-500">
            <p className="font-bold text-amber-900 dark:text-amber-300 text-xl mb-3">Parte 2 (30 min): Design Tokens</p>
            <p className="text-gray-700 dark:text-gray-300">Crear design tokens del sitio ITSAE o de una marca ecuatoriana real</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border-l-4 border-emerald-600">
            <p className="font-bold text-emerald-900 dark:text-emerald-300 text-xl mb-3">Parte 3 (60 min): 5 Componentes</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>• Button (con variantes)</li>
              <li>• Input Field (estados)</li>
              <li>• Product/Career Card</li>
              <li>• Navigation Menu</li>
              <li>• Footer</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl border-2 border-purple-500">
            <p className="font-bold text-purple-900 dark:text-purple-300 text-xl mb-2">📦 Entregable:</p>
            <p className="text-gray-700 dark:text-gray-300">Link de Figma con biblioteca organizada profesionalmente</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">(Estructura: Foundations → Components → Patterns)</p>
          </div>
        </div>
      )
    },
    {
      title: "🎓 Conceptos Clave",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl border-l-4 border-blue-600">
            <p className="text-xl font-bold text-blue-900 dark:text-blue-300">Design Tokens = Decisiones reutilizables</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-5 rounded-xl border-l-4 border-amber-500">
            <p className="text-xl font-bold text-amber-900 dark:text-amber-300">Componentes = Elementos maestros</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-5 rounded-xl border-l-4 border-emerald-600">
            <p className="text-xl font-bold text-emerald-900 dark:text-emerald-300">Variantes = Versiones diferentes</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-5 rounded-xl border-l-4 border-purple-600">
            <p className="text-xl font-bold text-purple-900 dark:text-purple-300">Library = Biblioteca compartida</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/30 p-5 rounded-xl border-l-4 border-pink-600">
            <p className="text-xl font-bold text-pink-900 dark:text-pink-300">Nomenclatura = Organización escalable</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center mt-8">
            <p className="text-3xl font-bold italic mb-3">"Los grandes diseñadores crean sistemas, no solo diseños"</p>
            <p className="text-xl text-blue-100">— Brad Frost</p>
          </div>
        </div>
      )
    },
    {
      title: "¡Gracias!",
      subtitle: "",
      content: (
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-6">
            <Package className="w-24 h-24 text-blue-600 animate-bounce" />
            <Palette className="w-24 h-24 text-amber-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <Layout className="w-24 h-24 text-emerald-600 animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
          <div>
            <p className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">¿Preguntas?</p>
            <p className="text-2xl text-gray-600 dark:text-gray-300">Recuerden completar la tarea asincrónica</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 text-white p-8 rounded-2xl">
            <p className="text-3xl font-bold mb-4">¡Diseñemos el futuro de ITSAE!</p>
            <p className="text-xl text-blue-100">Sistema de diseño profesional para educación adventista</p>
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-400 space-y-2">
            <p className="font-bold">Instituto Tecnológico Superior Adventista del Ecuador</p>
            <p>Diseño Web para Marketing Digital</p>
            <p className="text-sm">Marketing y Comercio Electrónico</p>
          </div>
        </div>
      )
    }
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

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-amber-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500 text-white p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <Globe className="w-12 h-12 text-white" />
              <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">ITSAE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-blue-100 mt-3 text-base sm:text-lg">{slides[currentSlide].subtitle}</p>
            )}
          </div>
          
          <div className="p-6 sm:p-8 lg:p-12 min-h-[450px] sm:min-h-[550px] dark:text-gray-100">
            {slides[currentSlide].content}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between border-t dark:border-gray-600 gap-4 sm:gap-0 transition-colors duration-300">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base w-full sm:w-auto justify-center sm:justify-start shadow-lg"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold">Anterior</span>
            </button>
            
            <div className="flex items-center space-x-3 order-first sm:order-none">
              <span className="text-gray-700 dark:text-gray-300 font-bold text-lg">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
            
            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base w-full sm:w-auto justify-center sm:justify-start shadow-lg"
              disabled={currentSlide === slides.length - 1}
            >
              <span className="font-semibold">Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-600 px-6 py-4 flex justify-center space-x-2 overflow-x-auto transition-colors duration-300">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all flex-shrink-0 ${
                  currentSlide === index
                    ? 'bg-blue-600 dark:bg-amber-500 w-10'
                    : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400 w-3'
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Herramientas útiles */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="https://www.figma.com/community/file/1091478088656085135"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all text-center shadow-lg"
          >
            <Palette className="w-10 h-10 mx-auto mb-3" />
            <p className="font-bold text-base">Figma Template</p>
            <p className="text-sm opacity-90">Design System</p>
          </a>
          <a
            href="https://coolors.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all text-center shadow-lg"
          >
            <Zap className="w-10 h-10 mx-auto mb-3" />
            <p className="font-bold text-base">Coolors.co</p>
            <p className="text-sm opacity-90">Paletas</p>
          </a>
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-5 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all text-center shadow-lg"
          >
            <BookOpen className="w-10 h-10 mx-auto mb-3" />
            <p className="font-bold text-base">Google Fonts</p>
            <p className="text-sm opacity-90">Tipografías</p>
          </a>
          <a
            href="https://itsae.edu.ec/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all text-center shadow-lg"
          >
            <Globe className="w-10 h-10 mx-auto mb-3" />
            <p className="font-bold text-base">ITSAE</p>
            <p className="text-sm opacity-90">Sitio a mejorar</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentacionSemana6;
