import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MousePointer, Sparkles, ShoppingCart, TestTube, Share2, CheckCircle } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const PresentacionSemana7: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "🎨 Prototipos Interactivos y User Flows",
      subtitle: "Semana 7 - Diseño Web para Marketing Digital | ITSAE Ecuador | 2-9 Diciembre 2025",
      content: (
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <MousePointer className="w-20 h-20 text-purple-500" />
            <Sparkles className="w-20 h-20 text-blue-500" />
            <ShoppingCart className="w-20 h-20 text-green-500" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">Dar vida a los diseños: De mockups estáticos a experiencias interactivas</p>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">De mockups estáticos a experiencias interactivas</p>
          </div>
        </div>
      )
    },
    {
      title: "🎯 Objetivos de Hoy",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-900 dark:text-gray-100">Crear prototipos interactivos que simulen navegación real</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-900 dark:text-gray-100">Implementar interacciones y animaciones efectivas</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-900 dark:text-gray-100">Diseñar flujos de usuario completos (home → confirmación)</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-900 dark:text-gray-100">Testear prototipos y recopilar feedback</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-900 dark:text-gray-100">Compartir prototipos con clientes y equipos</span>
            </li>
          </ul>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-6 rounded-lg mt-8">
            <p className="font-bold text-yellow-800 dark:text-yellow-200">💡 Dato clave: Arreglar un error después del lanzamiento cuesta 100x más que en fase de prototipo - Forrester Research</p>
          </div>
        </div>
      )
    },
    {
      title: "💼 ¿Por qué son cruciales en Marketing?",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Beneficios de Negocio</h3>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>• Ahorra tiempo y dinero</li>
                <li>• Valida ideas antes de invertir</li>
                <li>• Identifica fricciones en compra</li>
                <li>• Mejora conversiones</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300">Beneficios de Comunicación</h3>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>• Presenta propuestas vivas</li>
                <li>• Documenta comportamientos</li>
                <li>• Facilita feedback de clientes</li>
                <li>• Alinea expectativas</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">Un prototipo interactivo vale más que 100 diapositivas estáticas</p>
          </div>
        </div>
      )
    },
    {
      title: "🖱️ Tipos de Interacciones en E-commerce",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">On Click</h3>
              <p className="text-sm">Navegación, agregar al carrito, confirmar acciones</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">On Hover</h3>
              <p className="text-sm">Previsualización, cambio de imágenes, tooltips</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">On Drag</h3>
              <p className="text-sm">Carruseles, galerías touch, reordenar</p>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg">
            <p className="font-bold text-green-800 dark:text-green-200">Ejemplo: Mercado Libre - Al hacer clic en "Agregar al carrito", el ícono se anima y muestra +1</p>
          </div>
        </div>
      )
    },
    {
      title: "✨ Animaciones que Convierten",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Principios de Animación Efectiva</h3>
            <ul className="space-y-3 text-gray-900 dark:text-gray-100">
              <li><strong>Rápidas:</strong> 200-400ms (no hacer esperar)</li>
              <li><strong>Sutiles:</strong> No distraer de la acción principal</li>
              <li><strong>Con propósito:</strong> Guiar atención, dar feedback, mostrar relaciones</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-lg font-bold mb-2 text-purple-800 dark:text-purple-300">Ease-out</h3>
              <p className="text-gray-900 dark:text-gray-100">Rápido al inicio, lento al final</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">→ Para elementos que entran</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold mb-2 text-green-800 dark:text-green-300">Ease-in</h3>
              <p className="text-gray-900 dark:text-gray-100">Lento al inicio, rápido al final</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">→ Para elementos que salen</p>
            </div>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg text-center">
            <p className="font-bold text-yellow-800 dark:text-yellow-200">⚡ Regla de oro: Deben sentirse instantáneas pero fluidas</p>
          </div>
        </div>
      )
    },
    {
      title: "🛒 User Flow: El Viaje de Compra",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg">
            <p className="text-2xl font-bold text-center">HOME → CATEGORÍA → PRODUCTO → CARRITO → CHECKOUT → CONFIRMACIÓN</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Puntos Críticos de Conversión</h3>
            <ul className="space-y-3 text-gray-900 dark:text-gray-100">
              <li><strong>Home → Categoría:</strong> ¿El usuario encuentra lo que busca?</li>
              <li><strong>Producto → Carrito:</strong> ¿La información es suficiente?</li>
              <li><strong>Carrito → Checkout:</strong> ¿Hay fricciones innecesarias?</li>
              <li><strong>Checkout → Confirmación:</strong> ¿Es claro y confiable?</li>
            </ul>
          </div>
          <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg">
            <p className="font-bold text-red-800 dark:text-red-200">📊 Estadística: 70% de los carritos son abandonados - Baymard Institute</p>
          </div>
        </div>
      )
    },
    {
      title: "🔲 Overlays y Modales",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-300">✅ Cuándo usar modales</h3>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>• Confirmaciones importantes</li>
                <li>• Quick view de productos</li>
                <li>• Login sin cambiar página</li>
                <li>• Captura de email</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-300">❌ Cuándo NO usarlos</h3>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>• Proceso de checkout</li>
                <li>• Información extensa</li>
                <li>• Formularios largos</li>
                <li>• Contenido principal</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg text-center">
            <p className="text-lg font-bold text-blue-800 dark:text-blue-200">Mejor práctica: Los modales deben cerrarse fácilmente (X visible, clic fuera, tecla ESC)</p>
          </div>
        </div>
      )
    },
    {
      title: "🧪 Testing de Prototipos",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300">Qué Testear</h3>
            <ul className="space-y-2 text-gray-900 dark:text-gray-100">
              <li>• ¿Los usuarios encuentran el botón de compra?</li>
              <li>• ¿Entienden cómo agregar al carrito?</li>
              <li>• ¿El proceso de checkout es claro?</li>
              <li>• ¿Las animaciones ayudan o molestan?</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Cómo Recopilar Feedback</h3>
            <ul className="space-y-2 text-gray-900 dark:text-gray-100">
              <li>• Compartir link de Figma con comentarios activos</li>
              <li>• Observar usuarios reales navegando</li>
              <li>• Hacer preguntas específicas</li>
              <li>• Usar herramientas como Maze o UsabilityHub</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "💻 Ejercicio Práctico: TechStore Ecuador",
      subtitle: "Crear prototipo completo de compra de smartphone",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-800 dark:text-blue-300 mb-2">PASO 1 (15 min): Preparar 5 frames</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Home, Detalle Producto, Carrito, Checkout, Confirmación</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
            <p className="font-bold text-purple-800 dark:text-purple-300 mb-2">PASO 2 (20 min): Crear interacciones básicas</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Vincular navegación entre páginas</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-800 dark:text-green-300 mb-2">PASO 3 (20 min): Agregar animaciones</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Hover, feedback visual, transiciones</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-800 dark:text-orange-300 mb-2">PASO 4 (20 min): Scroll y overlays</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Modales, dropdowns, scroll behavior</p>
          </div>
        </div>
      )
    },
    {
      title: "🔧 Configurar Interacciones en Figma",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Pasos Básicos</h3>
            <ul className="space-y-3 text-gray-900 dark:text-gray-100">
              <li><strong>1.</strong> Seleccionar elemento (botón, frame)</li>
              <li><strong>2.</strong> Ir a pestaña "Prototype" (arriba derecha)</li>
              <li><strong>3.</strong> Arrastrar círculo azul hacia destino</li>
              <li><strong>4.</strong> Configurar: Trigger, Action, Animation</li>
            </ul>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg">
            <p className="font-bold text-purple-800 dark:text-purple-200">💡 Tip: Usa "Smart Animate" para transiciones suaves entre frames similares</p>
          </div>
        </div>
      )
    },
    {
      title: "🏆 Mejores Prácticas",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-300">✅ Hacer</h3>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>• Feedback inmediato</li>
                <li>• Progress indicators</li>
                <li>• Validación en tiempo real</li>
                <li>• Loading states</li>
                <li>• Success states</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-300">❌ Evitar</h3>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>• Animaciones largas (&gt;500ms)</li>
                <li>• Demasiados modales</li>
                <li>• Navegación confusa</li>
                <li>• Falta de feedback</li>
                <li>• Overlays sin cerrar</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "📚 Recursos y Bibliografía",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300">Videos Recomendados (YouTube)</h3>
            <ul className="space-y-2 text-gray-900 dark:text-gray-100">
              <li>• "Prototipado en Figma desde cero" - Hola Soy Lau (25 min)</li>
              <li>• "Animaciones profesionales en Figma" - Figma en Español (18 min)</li>
              <li>• "User Flow para e-commerce" - Carlos Jiménez UX (22 min)</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Artículos en Español</h3>
            <ul className="space-y-2 text-gray-900 dark:text-gray-100">
              <li>• Guía completa de prototipado - Domestika</li>
              <li>• Principios de animación para interfaces - UX España</li>
              <li>• Optimizar checkout en e-commerce - Ecommerce News</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "🏠 Tarea Asincrónica (2 horas)",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-bold mb-2 text-blue-800 dark:text-blue-300">1. Ver Tutorial (20 min)</h3>
            <p className="text-gray-900 dark:text-gray-100">"Prototipado en Figma desde cero" - Tomar notas</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-bold mb-3 text-purple-800 dark:text-purple-300">2. Crear Prototipo Completo (80 min)</h3>
            <ul className="space-y-2 text-gray-900 dark:text-gray-100">
              <li>• Mínimo 5 pantallas conectadas</li>
              <li>• Al menos 8 interacciones diferentes</li>
              <li>• 3 animaciones con propósito claro</li>
              <li>• 1 overlay funcional</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-bold mb-2 text-green-800 dark:text-green-300">3. Testing y Refinamiento (20 min)</h3>
            <p className="text-gray-900 dark:text-gray-100">Probar flujo 3 veces, ajustar timings, documentar decisiones</p>
          </div>
        </div>
      )
    },
    {
      title: "📊 Criterios de Evaluación",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">25%</h3>
              <p>Flujo completo</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">25%</h3>
              <p>Interacciones efectivas</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">20%</h3>
              <p>Animaciones sutiles</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-500 to-green-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">15%</h3>
              <p>Feedback visual</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">15%</h3>
              <p>Testing documentado</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🚀 Próxima Clase: Semana 8",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">Mockups de Alta Fidelidad y Documentación</h3>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Temas a Cubrir</h3>
            <ul className="space-y-2 text-gray-900 dark:text-gray-100">
              <li>• Diseños finales pixel-perfect</li>
              <li>• Guías de estilo para desarrolladores</li>
              <li>• Handoff a WordPress/Elementor</li>
              <li>• Documentación de componentes</li>
              <li>• Exportar assets optimizados</li>
            </ul>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg text-center">
            <p className="font-bold text-yellow-800 dark:text-yellow-200">Preparación: Tener prototipo finalizado + instalar plugin "Design Lint"</p>
          </div>
        </div>
      )
    },
    {
      title: "💡 Consejos Finales",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-900 dark:text-gray-100">
              <li><strong>Empieza simple:</strong> No intentes animar todo de una vez</li>
              <li><strong>Observa sitios reales:</strong> Amazon, Mercado Libre, Linio</li>
              <li><strong>Menos es más:</strong> Una animación perfecta vale más que diez mediocres</li>
              <li><strong>Testea temprano:</strong> No esperes a tener todo "perfecto"</li>
              <li><strong>Documenta:</strong> Explica por qué cada interacción existe</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg">
            <p className="text-xl font-bold text-center text-gray-900 dark:text-gray-100">Recuerda: Un prototipo bien diseñado puede salvar semanas de desarrollo y miles de dólares en ajustes post-lanzamiento</p>
          </div>
        </div>
      )
    },
    {
      title: "🎨 ¡Manos a la Obra!",
      subtitle: "",
      content: (
        <div className="text-center space-y-8">
          <Sparkles className="w-32 h-32 mx-auto text-purple-500" />
          <div>
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">A crear prototipos que conviertan</p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">¿Preguntas antes de empezar?</p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>📧 Contacto: Clase de Diseño Web - ITSAE</p>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 text-white p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-purple-100 mt-2 text-sm sm:text-base">{slides[currentSlide].subtitle}</p>
            )}
          </div>
          
          <div className="p-4 sm:p-6 lg:p-12 min-h-[400px] sm:min-h-[500px] dark:text-gray-100">
            {slides[currentSlide].content}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between border-t dark:border-gray-600 gap-4 sm:gap-0 transition-colors duration-300">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
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
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
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
                    ? 'bg-purple-600 dark:bg-purple-500 w-6 sm:w-8'
                    : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400'
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Herramientas útiles */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 dark:bg-purple-600 text-white p-3 sm:p-4 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors text-center"
          >
            <MousePointer className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">Figma</p>
            <p className="text-xs opacity-90">Herramienta de diseño</p>
          </a>
          <a
            href="https://maze.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 dark:bg-blue-600 text-white p-3 sm:p-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-center"
          >
            <TestTube className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">Maze</p>
            <p className="text-xs opacity-90">Testing de prototipos</p>
          </a>
          <a
            href="https://usabilityhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 dark:bg-green-600 text-white p-3 sm:p-4 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition-colors text-center"
          >
            <Share2 className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">UsabilityHub</p>
            <p className="text-xs opacity-90">Feedback de usuarios</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentacionSemana7;
