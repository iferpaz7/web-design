import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Palette, Type, Layout, Zap, Star } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const PresentacionTema2: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "Principios de Diseño Visual y Psicología Aplicada al E-Commerce",
      subtitle: "Semana 2 - ITSAE | Diseño Web para Marketing",
      content: (
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <Palette className="w-20 h-20 text-purple-500" />
            <Type className="w-20 h-20 text-blue-500" />
            <Layout className="w-20 h-20 text-green-500" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">¿Por qué dos tiendas que venden lo mismo tienen resultados diferentes?</p>
          <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">El diseño es comunicación estratégica</p>
          </div>
        </div>
      )
    },
    {
      title: "Agenda de Hoy",
      subtitle: "",
      content: (
        <div className="space-y-4 text-lg">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Principios Fundamentales de Diseño</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Contraste, jerarquía, equilibrio, espaciado</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Psicología del Color</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cómo los colores influyen en las decisiones de compra</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Tipografía para Web</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Serif vs Sans-serif, jerarquía, legibilidad</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Ejercicios Prácticos</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Paletas, análisis, diseño de card</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "1. CONTRASTE - El Imán Visual",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-900 dark:text-gray-100">La diferencia visual que hace que un elemento destaque sobre otro</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-4 border-red-500 p-6 rounded-lg bg-white dark:bg-gray-700">
              <p className="text-center mb-4 font-bold text-red-600 dark:text-red-400">❌ MAL EJEMPLO</p>
              <div className="bg-white dark:bg-gray-100 p-4">
                <p className="text-gray-400 mb-4">Producto increíble aquí</p>
                <button className="bg-gray-300 text-gray-400 px-6 py-2 rounded w-full">Comprar</button>
              </div>
              <p className="text-sm mt-2 text-center text-gray-700 dark:text-gray-300">Botón invisible, bajo contraste</p>
            </div>
            <div className="border-4 border-green-500 p-6 rounded-lg bg-white dark:bg-gray-700">
              <p className="text-center mb-4 font-bold text-green-600 dark:text-green-400">✅ BUEN EJEMPLO</p>
              <div className="bg-white dark:bg-gray-100 p-4">
                <p className="text-gray-800 mb-4 font-semibold">Producto increíble aquí</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded w-full font-bold hover:bg-orange-600">COMPRAR AHORA</button>
              </div>
              <p className="text-sm mt-2 text-center text-gray-700 dark:text-gray-300">Botón destacado, alto contraste</p>
            </div>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
            <p className="font-bold text-yellow-800 dark:text-yellow-200">📊 Dato clave: Amazon aumentó conversiones 14% con su botón amarillo</p>
          </div>
        </div>
      )
    },
    {
      title: "2. JERARQUÍA VISUAL - El Mapa de Lectura",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-900 dark:text-gray-100">El orden en que el ojo humano recorre la página</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <p className="font-bold mb-4 text-gray-900 dark:text-gray-100">Patrón F de Lectura Web</p>
            <div className="relative bg-white dark:bg-gray-100 p-8 rounded">
              <div className="absolute top-8 left-8 right-32 h-3 bg-red-500 opacity-70"></div>
              <div className="absolute top-20 left-8 right-48 h-3 bg-red-400 opacity-70"></div>
              <div className="absolute top-8 left-8 bottom-8 w-3 bg-red-300 opacity-70"></div>
              <div className="text-center pt-16">
                <p className="text-sm text-gray-600">Los usuarios leen en forma de F</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-900 dark:text-gray-100">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
              <p className="font-bold mb-2">Zona Caliente (más vista):</p>
              <ul className="space-y-1">
                <li>• Logo (superior izquierda)</li>
                <li>• Menú superior</li>
                <li>• Título principal</li>
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded">
              <p className="font-bold mb-2">Aplicación E-Commerce:</p>
              <ul className="space-y-1">
                <li>• CTA en zona visible</li>
                <li>• Beneficios lado izquierdo</li>
                <li>• Imágenes grandes arriba</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. ESPACIADO (Whitespace) - El Respiro Visual",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
            <p className="font-bold text-lg text-purple-800 dark:text-purple-200">Aumenta comprensión en 20% - Wichita State University</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-red-500 p-3 bg-white dark:bg-gray-700">
              <p className="text-center mb-2 text-red-600 dark:text-red-400 font-bold">Recargado ❌</p>
              <div className="bg-white dark:bg-gray-100 p-2 space-y-1">
                <p className="text-xs leading-tight text-gray-800">Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto</p>
                <button className="bg-blue-500 text-white px-2 py-1 text-xs w-full">Comprar</button>
                <p className="text-xs leading-tight text-gray-800">Más información aquí y más texto</p>
              </div>
            </div>
            <div className="border-2 border-green-500 p-3 bg-white dark:bg-gray-700">
              <p className="text-center mb-2 text-green-600 dark:text-green-400 font-bold">Con Espacio ✅</p>
              <div className="bg-white dark:bg-gray-100 p-4 space-y-4">
                <p className="text-sm text-gray-800">Texto legible con espacio para respirar</p>
                <button className="bg-blue-500 text-white px-4 py-2 text-sm w-full rounded">Comprar</button>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <p className="font-bold text-gray-900 dark:text-gray-100">Ejemplos de marcas:</p>
            <p className="text-gray-800 dark:text-gray-200">🔸 Mercado Libre: Información densa</p>
            <p className="text-gray-800 dark:text-gray-200">🔸 Apple: Minimalismo y espacio</p>
          </div>
        </div>
      )
    },
    {
      title: "4. PROPORCIÓN 60-30-10",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">La regla de oro para paletas efectivas</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-32 h-20 bg-gray-100 dark:bg-gray-600 border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center font-bold text-gray-900 dark:text-gray-100">60%</div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Color Dominante</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Fondo, base del sitio</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 h-20 bg-blue-500 flex items-center justify-center font-bold text-white">30%</div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Color Secundario</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Secciones, bloques</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 h-20 bg-orange-500 flex items-center justify-center font-bold text-white">10%</div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Color de Acento</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">CTAs, enlaces importantes</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border-2 border-amber-300 dark:border-amber-600">
            <p className="font-bold mb-2 text-amber-800 dark:text-amber-200">Ejemplo: Tienda de Café</p>
            <p className="text-amber-700 dark:text-amber-300">60% Blanco/Beige + 30% Café Oscuro + 10% Verde (CTA)</p>
          </div>
        </div>
      )
    },
    {
      title: "PSICOLOGÍA DEL COLOR",
      subtitle: "90% de decisiones de compra están influenciadas por el color",
      content: (
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-500 dark:border-red-400">
            <p className="font-bold text-red-700 dark:text-red-300 mb-2">🔴 ROJO</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Urgencia, pasión, energía</p>
            <p className="text-xs mt-2 text-gray-700 dark:text-gray-300">Uso: Ofertas, descuentos, clearance</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">Ej: Coca-Cola, YouTube</p>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border-2 border-blue-500 dark:border-blue-400">
            <p className="font-bold text-blue-700 dark:text-blue-300 mb-2">🔵 AZUL</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Confianza, seguridad</p>
            <p className="text-xs mt-2 text-gray-700 dark:text-gray-300">Uso: Bancos, tech, salud</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">Ej: Facebook, PayPal</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-500 dark:border-green-400">
            <p className="font-bold text-green-700 dark:text-green-300 mb-2">🟢 VERDE</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Salud, naturaleza</p>
            <p className="text-xs mt-2 text-gray-700 dark:text-gray-300">Uso: Orgánicos, eco, finanzas</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">Ej: WhatsApp, Whole Foods</p>
          </div>
          <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg border-2 border-orange-500 dark:border-orange-400">
            <p className="font-bold text-orange-700 dark:text-orange-300 mb-2">🟠 NARANJA</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Acción, entusiasmo</p>
            <p className="text-xs mt-2 text-gray-700 dark:text-gray-300">Uso: CTAs, suscripciones</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">Ej: Amazon (botón)</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg border-2 border-yellow-500 dark:border-yellow-400">
            <p className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">🟡 AMARILLO</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">Optimismo, claridad</p>
            <p className="text-xs mt-2 text-gray-700 dark:text-gray-300">Uso: Atención, avisos</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">Ej: McDonald, IKEA</p>
          </div>
          <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-lg border-2 border-gray-700 dark:border-gray-300 text-white dark:text-gray-900">
            <p className="font-bold mb-2">⚫ NEGRO</p>
            <p className="font-semibold">Elegancia, lujo</p>
            <p className="text-xs mt-2 text-gray-300 dark:text-gray-700">Uso: Moda, premium</p>
            <p className="text-xs text-gray-300 dark:text-gray-700">Ej: Chanel, Apple</p>
          </div>
        </div>
      )
    }
  ];

  // Slides adicionales de la presentación original
  const additionalSlides: Slide[] = [
    {
      title: "Colores por Nicho de Mercado",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-800 dark:text-green-300">🥗 Comida Saludable</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Verde + Blanco + Naranja</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Razón: Naturaleza + Energía</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-800 dark:text-blue-300">💻 Tecnología</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Azul + Gris + Cyan/Verde</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Razón: Confianza + Innovación</p>
          </div>
          <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">👗 Moda/Lujo</p>
            <p className="text-sm">Negro + Blanco + Dorado</p>
            <p className="text-xs text-gray-300 dark:text-gray-700">Razón: Elegancia + Exclusividad</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold text-yellow-800 dark:text-yellow-300">🧸 Infantil</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Amarillo + Azul Cielo + Rojo</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Razón: Alegría + Seguridad</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-blue-600">
            <p className="font-bold text-blue-800 dark:text-blue-300">💰 Finanzas</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">Azul Oscuro + Verde + Blanco</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Razón: Confianza + Crecimiento</p>
          </div>
        </div>
      )
    },
    {
      title: "ACCESIBILIDAD - Ratio de Contraste",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="font-bold text-lg mb-2">WCAG - Estándares Web</p>
            <p>Web Content Accessibility Guidelines</p>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border-2 border-gray-300">
              <p className="font-bold mb-2">Texto Normal</p>
              <p className="text-2xl">Mínimo: 4.5:1</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-gray-300">
              <p className="font-bold mb-2">Texto Grande</p>
              <p className="text-2xl">Mínimo: 3:1</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
              <p className="font-bold mb-2">AAA (Ideal)</p>
              <p className="text-2xl">7:1</p>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="font-bold">🛠 Herramienta:</p>
            <p className="text-sm">WebAIM Contrast Checker</p>
            <p className="text-xs text-gray-600">webaim.org/resources/contrastchecker</p>
          </div>
        </div>
      )
    },
    {
      title: "TIPOGRAFÍA PARA WEB",
      subtitle: "95% del contenido web es texto",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-400">
              <p className="font-bold text-amber-800 mb-3">SERIF</p>
              <p className="text-sm mb-2">Con patitas decorativas</p>
              <p className="text-xs text-gray-600">Sensación: Tradicional, elegante</p>
              <p className="text-xs mt-2">Uso: Blogs largos, marcas clásicas</p>
              <p className="text-xs font-bold mt-2">Ej: Times, Merriweather</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-400">
              <p className="font-bold text-blue-800 mb-3">SANS-SERIF</p>
              <p className="text-sm mb-2">Sin decoraciones</p>
              <p className="text-xs text-gray-600">Sensación: Moderna, limpia</p>
              <p className="text-xs mt-2">Uso: Web, apps, interfaces</p>
              <p className="text-xs font-bold mt-2">Ej: Arial, Roboto, Open Sans</p>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
            <p className="font-bold mb-2">✅ Regla de Oro E-Commerce:</p>
            <p className="text-sm">• Títulos: Sans-serif (impacto)</p>
            <p className="text-sm">• Cuerpo: Sans-serif (web legible)</p>
            <p className="text-sm">• Botones: Sans-serif + Negrita</p>
          </div>
        </div>
      )
    },
    {
      title: "EJERCICIOS PRÁCTICOS",
      subtitle: "35 minutos de práctica aplicada",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-500">
            <p className="font-bold text-purple-800 mb-2">📝 Actividad 1: Paletas Estratégicas (12 min)</p>
            <p className="text-sm">Crear 3 paletas en Coolors.co:</p>
            <ul className="text-sm space-y-1 mt-2">
              <li>• Smoothies orgánicos</li>
              <li>• Joyería de lujo</li>
              <li>• Software/App</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500">
            <p className="font-bold text-blue-800 mb-2">🔍 Actividad 2: Análisis Sitio Ecuatoriano (15 min)</p>
            <p className="text-sm">Evaluar jerarquía, contraste, colores y tipografía</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
            <p className="font-bold text-green-800 mb-2">✏️ Actividad 3: Diseño Card Papel (8 min)</p>
            <p className="text-sm">Dibujar card de producto con jerarquía clara</p>
          </div>
        </div>
      )
    },
    {
      title: "Conceptos Clave para Recordar",
      subtitle: "",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-4 rounded-lg">
            <p className="font-bold text-orange-800">✅ El diseño no es decoración, es estrategia de conversión</p>
          </div>
          <div className="bg-gradient-to-r from-red-100 to-red-50 p-4 rounded-lg">
            <p className="font-bold text-red-800">✅ Cada color genera una emoción que puede ayudar o perjudicar</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg">
            <p className="font-bold text-blue-800">✅ La jerarquía visual guía al cliente hacia la compra</p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-4 rounded-lg">
            <p className="font-bold text-purple-800">✅ El contraste hace que los CTAs sean imposibles de ignorar</p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-4 rounded-lg">
            <p className="font-bold text-green-800">✅ El espacio en blanco es claridad ganada</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-4 rounded-lg">
            <p className="font-bold text-indigo-800">✅ La tipografía correcta = sitio profesional vs amateur</p>
          </div>
        </div>
      )
    },
    {
      title: "¡Gracias!",
      subtitle: "",
      content: (
        <div className="text-center space-y-8">
          <Star className="w-32 h-32 mx-auto text-yellow-500" />
          <div>
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">¿Preguntas?</p>
            <p className="text-xl text-gray-600 dark:text-gray-300">Recuerden completar la tarea asincrónica</p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">¡El diseño que convierte comienza hoy!</p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>Profesor: Ing. Ivan Paz</p>
            <p>Diseño Web para Marketing Digital</p>
          </div>
        </div>
      )
    }
  ];

  const allSlides: Slide[] = [...slides, ...additionalSlides];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">{allSlides[currentSlide].title}</h1>
            {allSlides[currentSlide].subtitle && (
              <p className="text-primary-100 mt-2 text-sm sm:text-base">{allSlides[currentSlide].subtitle}</p>
            )}
          </div>
          
          <div className="p-4 sm:p-6 lg:p-12 min-h-[400px] sm:min-h-[500px] dark:text-gray-100">
            {allSlides[currentSlide].content}
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
                {currentSlide + 1} / {allSlides.length}
              </span>
            </div>
            
            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
              disabled={currentSlide === allSlides.length - 1}
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-600 px-4 sm:px-6 py-3 sm:py-4 flex justify-center space-x-1 sm:space-x-2 overflow-x-auto transition-colors duration-300">
            {allSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all flex-shrink-0 ${
                  currentSlide === index
                    ? 'bg-primary-700 dark:bg-primary-500 w-6 sm:w-8'
                    : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400'
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Herramientas útiles */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <a
            href="https://coolors.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 dark:bg-purple-600 text-white p-3 sm:p-4 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors text-center"
          >
            <Palette className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">Coolors.co</p>
            <p className="text-xs opacity-90">Generador de paletas</p>
          </a>
          <a
            href="https://webaim.org/resources/contrastchecker/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 dark:bg-blue-600 text-white p-3 sm:p-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-center"
          >
            <Eye className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">WebAIM</p>
            <p className="text-xs opacity-90">Verificador de contraste</p>
          </a>
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 dark:bg-green-600 text-white p-3 sm:p-4 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition-colors text-center"
          >
            <Type className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">Google Fonts</p>
            <p className="text-xs opacity-90">Tipografías web</p>
          </a>
          <a
            href="https://color.adobe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 dark:bg-orange-600 text-white p-3 sm:p-4 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 transition-colors text-center"
          >
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
            <p className="font-semibold text-sm sm:text-base">Adobe Color</p>
            <p className="text-xs opacity-90">Explorar colores</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentacionTema2;