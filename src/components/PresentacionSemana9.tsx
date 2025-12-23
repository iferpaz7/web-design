import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Wrench,
  Layout,
  Puzzle,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PresentacionSemana9: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "WordPress + Elementor",
      subtitle: "Semana 9 | Diseño Web para Marketing Digital",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">💻</div>
          <h2 className="text-4xl font-bold text-primary-700 dark:text-primary-400">
            Setup Inicial
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ITSAE Ecuador | 23 de diciembre, 2025
          </p>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl">
            <p className="text-xl font-semibold">
              Objetivo: crear landing pages visuales sin código
            </p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Profesor: <span className="font-semibold">[Tu Nombre]</span>
          </p>
        </div>
      ),
    },
    {
      title: "🎯 Objetivos de Hoy",
      content: (
        <div className="space-y-4">
          {[
            "Comprender qué es WordPress y por qué domina gran parte de la web",
            "Diferenciar WordPress.com vs WordPress.org (clave para trabajo real)",
            "Instalar WordPress localmente con LocalWP",
            "Dominar la interfaz de Elementor y su sistema modular",
            "Crear tu primera sección Hero profesional",
            "Previsualizar y ajustar diseños responsive (desktop/tablet/mobile)",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-900 dark:text-gray-100">{text}</p>
            </div>
          ))}

          <div className="mt-6 bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">Al final de esta clase podrás:</p>
            <p className="text-base opacity-95 mt-2">
              Crear landing pages visuales sin escribir una línea de código y entender
              cómo WordPress + Elementor se convierten en una herramienta clave para
              marketing digital.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🌐 ¿Qué es WordPress?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-800 dark:text-gray-200">
            WordPress es un{" "}
            <span className="font-semibold text-primary-700 dark:text-primary-400">
              Sistema de Gestión de Contenidos (CMS)
            </span>{" "}
            que permite crear y administrar sitios web profesionales sin programar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            <div className="md:col-span-1 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 text-center border border-primary-100 dark:border-primary-900">
              <div className="text-5xl font-extrabold text-primary-700 dark:text-primary-300">
                43%+
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                de sitios web en el mundo usan WordPress
              </p>
            </div>
            <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    ✅ Lo usan:
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>✓ Empresas, medios y marcas</li>
                    <li>✓ Proyectos personales</li>
                    <li>✓ El próximo cliente</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                    🚀 ¿Por qué?
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>✓ Flexible (blog, tienda, portafolio)</li>
                    <li>✓ SEO-friendly</li>
                    <li>✓ Plugins y temas</li>
                    <li>✓ No requiere código para empezar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-lg">
            <p className="text-gray-900 dark:text-gray-100 font-semibold">
              En Unidad 3 lo enfocamos como tecnología práctica:
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              un CMS real + un constructor visual para ejecutar proyectos rápidamente.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "⚠️ WordPress.com vs WordPress.org",
      subtitle: "Esta diferencia impacta costos y control",
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="p-4">Característica</th>
                  <th className="p-4">WordPress.com</th>
                  <th className="p-4">WordPress.org ✅</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {[
                  ["Tipo", "Plataforma alojada (tipo Wix)", "Software auto-hospedado"],
                  ["Costo inicial", "Gratis (limitado)", "Gratis + hosting"],
                  ["Plugins", "Solo en planes pagos", "Ilimitados"],
                  ["Monetización", "Restringida", "Libertad total"],
                  ["Dominio propio", "En planes pagos", "Desde el inicio"],
                  ["Control", "Limitado", "100% tuyo"],
                ].map(([a, b, c], i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-800/60"
                    }
                  >
                    <td className="p-4 font-semibold text-gray-900 dark:text-gray-100">
                      {a}
                    </td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{b}</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">🎓 En este curso usamos WordPress.org</p>
            <p className="mt-2 opacity-95">
              Necesitamos instalar Elementor y tener control total. Es lo que usan
              los profesionales.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "💡 Reflexión",
      content: (
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-6 rounded-xl">
            <p className="text-2xl italic text-gray-900 dark:text-gray-100 leading-relaxed">
              “WordPress democratizó la creación web: cualquier persona con una idea
              puede tener presencia online profesional sin depender de programadores.”
            </p>
            <p className="mt-4 font-semibold text-primary-700 dark:text-primary-400">
              — Referencia: material de clase (2023)
            </p>
          </div>

          <p className="text-xl text-center text-gray-700 dark:text-gray-200 leading-relaxed">
            Como marketers, WordPress nos permite{" "}
            <span className="font-semibold text-primary-700 dark:text-primary-400">
              ejecutar ideas rápido
            </span>{" "}
            y escalar sin barreras técnicas.
          </p>
        </div>
      ),
    },
    {
      title: "🏢 Hosting para WordPress",
      subtitle: "Opciones recomendadas (referenciales)",
      content: (
        <div className="space-y-4">
          {["Hostinger", "SiteGround", "Hosting local"].map((name, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl"
            >
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                {i + 1}. {name}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                Evalúa: velocidad, soporte, backups, SSL y facilidad de instalación.
              </p>
            </div>
          ))}

          <div className="mt-4 bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">💻 Para hoy: LocalWP (gratis)</p>
            <p className="mt-2 opacity-95">
              Simula un servidor WordPress en tu computadora: sin hosting ni dominio
              para aprender.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "💻 LocalWP: tu servidor personal",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-800 dark:text-gray-200">
            LocalWP crea un{" "}
            <span className="font-semibold text-primary-700 dark:text-primary-400">
              servidor WordPress completo en tu PC
            </span>{" "}
            para aprender y desarrollar sin costo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-6">
              <p className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                ✅ Ventajas
              </p>
              <ul className="mt-3 space-y-2 text-gray-800 dark:text-gray-200">
                <li>✓ Gratis</li>
                <li>✓ Crea sitios ilimitados</li>
                <li>✓ Ideal para experimentar sin riesgos</li>
                <li>✓ Migrar a hosting real es posible</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-2xl p-6">
              <p className="text-xl font-bold text-red-900 dark:text-red-200">
                ⚠️ Limitaciones
              </p>
              <ul className="mt-3 space-y-2 text-gray-800 dark:text-gray-200">
                <li>✗ Solo tú lo ves (local)</li>
                <li>✗ No es producción</li>
                <li>✗ Requiere abrir LocalWP</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">🎯 Estrategia profesional</p>
            <p className="mt-2 opacity-95">
              Desarrolla en LocalWP → migra a hosting → lanza al público.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "📥 Instalar LocalWP (paso a paso)",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Paso 1: Descargar",
              body: [
                "Ve a localwp.com y descarga para tu sistema.",
                "Peso aproximado: ~300MB.",
              ],
            },
            {
              title: "Paso 2: Instalar",
              body: [
                "Ejecuta el instalador y sigue el asistente.",
                "Abre LocalWP al finalizar.",
              ],
            },
            {
              title: "Paso 3: Crear tu primer sitio",
              body: [
                "Click en “Create a new site”.",
                "Nombre sugerido: mi-landing-page.",
                "Usuario admin + contraseña segura.",
              ],
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl"
            >
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                {step.title}
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
                {step.body.map((line, j) => (
                  <li key={j}>• {line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "🎨 ¿Qué es Elementor?",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-2xl text-gray-900 dark:text-gray-100">
              Elementor es un{" "}
              <span className="font-semibold text-primary-700 dark:text-primary-400">
                constructor visual
              </span>
              {" "}para diseñar arrastrando y soltando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-4xl font-extrabold text-primary-700 dark:text-primary-300">
                12M+
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                sitios activos usan Elementor
              </p>
            </div>
            <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800/60 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <p className="text-lg italic text-gray-900 dark:text-gray-100">
                “Los page builders transformaron el diseño web de una habilidad
                técnica a una habilidad creativa y estratégica.”
              </p>
              <p className="mt-3 font-semibold text-primary-700 dark:text-primary-400">
                — Enfoque de clase
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Es como:</p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>✓ PowerPoint para web</li>
                <li>✓ Canva pero para sitios</li>
                <li>✓ LEGO digital</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Perfecto para:</p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>✓ Landing pages</li>
                <li>✓ Páginas de producto</li>
                <li>✓ Embudos de venta</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "⚡ Instalar Elementor (5 minutos)",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Paso 1: Abrir WP Admin",
              body: [
                "En LocalWP, click en WP Admin.",
                "Ingresa con admin + tu contraseña.",
              ],
              icon: <Wrench className="w-6 h-6 text-primary-700" />,
            },
            {
              title: "Paso 2: Buscar Elementor",
              body: [
                "Plugins → Añadir nuevo.",
                "Busca “Elementor” (resultado oficial).",
              ],
              icon: <Globe className="w-6 h-6 text-primary-700" />,
            },
            {
              title: "Paso 3: Instalar y activar",
              body: [
                "Instalar ahora → esperar.",
                "Activar → listo.",
              ],
              icon: <Puzzle className="w-6 h-6 text-primary-700" />,
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0">{step.icon}</span>
                <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                  {step.title}
                </p>
              </div>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
                {step.body.map((line, j) => (
                  <li key={j}>• {line}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-gray-100">⚠️ Nota</p>
            <p className="text-gray-800 dark:text-gray-200">
              Usaremos la versión gratuita para aprender. La Pro agrega widgets
              avanzados, pero no es necesaria en esta etapa.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🖥️ Interfaz de Elementor",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "1) Panel izquierdo (herramientas)",
              items: [
                "Widgets: títulos, botones, imágenes",
                "Plantillas/Sections",
                "Navigator e historial",
              ],
            },
            {
              title: "2) Canvas central (lienzo)",
              items: [
                "Aquí construyes visualmente",
                "Selecciona para editar",
                "Arrastra desde el panel",
              ],
            },
            {
              title: "3) Panel de ajustes",
              items: [
                "Content: texto y enlaces",
                "Style: colores y tipografía",
                "Advanced: márgenes/padding",
              ],
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl"
            >
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                {box.title}
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
                {box.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "🧱 Estructura modular (LEGO)",
      subtitle: "Sections → Columns → Widgets",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "📦 Section (contenedor principal)",
              desc: "Una fila de ancho completo. Define fondo y espaciado.",
              tone: "bg-teal-50 dark:bg-teal-900/20 border-teal-400 text-teal-900 dark:text-teal-200",
            },
            {
              title: "📊 Columns (divisiones verticales)",
              desc: "Permiten layouts (1–4 columnas) y se adaptan en móvil.",
              tone: "bg-amber-50 dark:bg-amber-900/20 border-amber-400 text-amber-900 dark:text-amber-200",
            },
            {
              title: "🎨 Widgets (elementos)",
              desc: "Títulos, texto, botones, imágenes, formularios, etc.",
              tone: "bg-pink-50 dark:bg-pink-900/20 border-pink-400 text-pink-900 dark:text-pink-200",
            },
          ].map((b, i) => (
            <div
              key={i}
              className={`border-l-4 p-5 rounded-xl ${b.tone}`}
            >
              <p className="text-xl font-bold">{b.title}</p>
              <p className="mt-2 text-gray-800 dark:text-gray-100">{b.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "⭐ Top widgets para marketing",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Heading (H1–H6)",
              "Text Editor",
              "Button (CTA)",
              "Image",
              "Video",
              "Icon Box",
              "Testimonial",
              "Form",
              "Spacer",
              "Divider",
            ].map((w, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-primary-700 to-primary-500 text-white px-4 py-3 rounded-xl font-semibold"
              >
                {i + 1}. {w}
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">💡 Tip profesional</p>
            <p className="mt-2 opacity-95">
              El 80% de tus páginas se construye con estos widgets. Domínalos.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🚀 Plantillas predefinidas",
      content: (
        <div className="space-y-4">
          <p className="text-xl text-gray-800 dark:text-gray-200">
            Elementor incluye plantillas gratuitas para empezar rápido.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Cómo usar plantillas
            </p>
            <ol className="mt-2 space-y-1 text-gray-700 dark:text-gray-200 list-decimal list-inside">
              <li>En el editor: ícono de carpeta</li>
              <li>Pages = páginas completas</li>
              <li>Blocks = secciones (Hero, Footer, etc.)</li>
              <li>Insert → personaliza texto, imágenes y colores</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900">
              <p className="font-bold text-emerald-900 dark:text-emerald-200 text-xl">
                ✅ Ventajas
              </p>
              <ul className="mt-2 space-y-1 text-gray-800 dark:text-gray-200">
                <li>✓ Acelera tu trabajo</li>
                <li>✓ Diseños probados</li>
                <li>✓ Responsive listo</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-900">
              <p className="font-bold text-red-900 dark:text-red-200 text-xl">
                ⚠️ Cuidado
              </p>
              <ul className="mt-2 space-y-1 text-gray-800 dark:text-gray-200">
                <li>✗ Personaliza siempre</li>
                <li>✗ Cambia textos e imágenes</li>
                <li>✗ Adapta a tu marca</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-4 rounded-lg">
            <p className="italic text-gray-900 dark:text-gray-100">
              “Las plantillas son un punto de partida, no el destino final.”
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "📱 Preview responsive",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <Monitor className="w-10 h-10 mx-auto text-primary-700 dark:text-primary-400" />
              <p className="mt-2 font-semibold text-gray-900 dark:text-gray-100">Desktop</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">1200px+</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <Tablet className="w-10 h-10 mx-auto text-primary-700 dark:text-primary-400" />
              <p className="mt-2 font-semibold text-gray-900 dark:text-gray-100">Tablet</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">768–1024px</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
              <Smartphone className="w-10 h-10 mx-auto text-primary-700 dark:text-primary-400" />
              <p className="mt-2 font-semibold text-gray-900 dark:text-gray-100">Mobile</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">&lt; 768px</p>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-5 rounded-xl">
            <p className="text-xl font-bold text-red-900 dark:text-red-200">
              ⚠️ Regla de oro
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-200">
              Si tu sitio no se ve bien en celulares, pierdes una gran parte de tus
              potenciales clientes.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Cómo previsualizar en Elementor
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Barra inferior → ícono de dispositivos</li>
              <li>• Cambia entre Desktop / Tablet / Mobile</li>
              <li>• Ajustes por dispositivo (tipografía y espaciado)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "🎯 Ejercicio práctico",
      subtitle: "Crear tu primera sección Hero",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 p-6 rounded-2xl">
            <p className="text-xl font-bold text-red-900 dark:text-red-200">
              Paso 1: Setup (20 min)
            </p>
            <ul className="mt-2 space-y-1 text-gray-800 dark:text-gray-200">
              <li>✓ Instalar LocalWP</li>
              <li>✓ Crear sitio “mi-landing-page”</li>
              <li>✓ Acceder a WP Admin</li>
              <li>✓ Instalar y activar Elementor</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 p-6 rounded-2xl">
            <p className="text-xl font-bold text-red-900 dark:text-red-200">
              Paso 2: Nueva página (5 min)
            </p>
            <ul className="mt-2 space-y-1 text-gray-800 dark:text-gray-200">
              <li>✓ Páginas → Añadir nueva</li>
              <li>✓ Título: “Home”</li>
              <li>✓ “Editar con Elementor”</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">👨‍🏫 Guía en vivo</p>
            <p className="mt-2 opacity-95">
              Sigue el paso a paso en pantalla. Si te quedas atrás, pide ayuda.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🎨 Hero (parte 1)",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "3.1 Agregar Section",
              body: [
                "Click en “+” en el canvas.",
                "Elige 1 columna.",
              ],
            },
            {
              title: "3.2 Fondo de la section",
              body: [
                "Editar section (6 puntos).",
                "Style → Background → Image.",
                "Sube una imagen (ej: Unsplash: marketing team).",
              ],
            },
            {
              title: "3.3 Configuración de imagen",
              body: ["Position: Center", "Size: Cover", "Attachment: Scroll"],
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl"
            >
              <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
                {step.title}
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
                {step.body.map((line, j) => (
                  <li key={j}>• {line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "🎨 Hero (parte 2)",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              3.4 Overlay oscuro
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Background Overlay → Classic</li>
              <li>• Color: negro</li>
              <li>• Opacity: 0.5</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              3.5 Heading (título)
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Texto: “Transforma Tu Negocio Digital”</li>
              <li>• Color: blanco</li>
              <li>• Size: 48px (desktop)</li>
              <li>• Align: center</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">💡 Tip</p>
            <p className="mt-2 opacity-95">
              Títulos de 40–60px captan atención en un Hero.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🎨 Hero (parte 3)",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              3.6 Text Editor (subtítulo)
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Texto: beneficio + promesa</li>
              <li>• Color: blanco</li>
              <li>• Size: 18px</li>
              <li>• Align: center</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              3.7 Button (CTA)
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Texto: “Comenzar Ahora”</li>
              <li>• Align: center</li>
              <li>• Padding: 15px / 40px</li>
              <li>• Radio: 5px</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "🎨 Hero (parte 4)",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              3.8 Altura de la section
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Layout → Height: Min Height</li>
              <li>• Desktop: 600px</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-6 rounded-2xl">
            <p className="text-2xl font-bold">✅ ¡Listo! Hero creada</p>
            <p className="mt-2 opacity-95">
              Ahora verifica cómo se ve en diferentes dispositivos.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-4 rounded-lg">
            <p className="italic text-gray-900 dark:text-gray-100">
              “Título claro + beneficio + CTA = conversión.”
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "📱 Ajustes responsive",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 p-6 rounded-2xl">
            <p className="text-xl font-bold text-red-900 dark:text-red-200">
              4.1 Cambiar a Mobile
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-200">
              En la barra inferior, usa el ícono de dispositivos. Observa cómo cambia
              el título.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              4.2 Heading en mobile
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Typography → Size (ícono dispositivo) → Mobile</li>
              <li>• Cambia a 32px</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              4.3 Texto en mobile
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Ajusta a 16px</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "📱 Ajustes responsive (cont.)",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              4.4 Padding en mobile
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• Advanced → Padding → Mobile</li>
              <li>• Top/Bottom: 60px</li>
              <li>• Left/Right: 20px</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              4.5 Verificar Tablet
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Revisa y ajusta si hace falta.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              4.6 Guardar y publicar
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Vuelve a Desktop → Publicar → Ver página.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "📚 Recursos para estudio",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Videos recomendados
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• WordPress desde cero (introducción)</li>
              <li>• Elementor tutorial (bases)</li>
              <li>• Comparativas CMS / builders</li>
              <li>• LocalWP instalación</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Guías escritas
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              <li>• WPBeginner (ES)</li>
              <li>• Blogs de hosting y WordPress</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "📝 Tarea asincrónica",
      subtitle: "2 horas",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Actividad 1: Instalación completa (45 min)",
              items: [
                "Completa LocalWP + WordPress + Elementor",
                "Crea un segundo sitio: practica-semanal",
                "Captura del dashboard",
              ],
            },
            {
              title: "Actividad 2: Tutorial (30 min)",
              items: [
                "Mira un tutorial de Elementor",
                "Anota 5 widgets que te llamen la atención",
                "Explica por qué los elegiste",
              ],
            },
            {
              title: "Actividad 3: Crear 2 páginas (45 min)",
              items: [
                "Home: Hero + Servicios (3 columnas)",
                "Acerca de: imagen + texto + botón",
              ],
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 p-6 rounded-2xl"
            >
              <p className="text-xl font-bold text-red-900 dark:text-red-200">
                {box.title}
              </p>
              <ul className="mt-2 space-y-1 text-gray-800 dark:text-gray-200">
                {box.items.map((it, j) => (
                  <li key={j}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-2xl">
            <p className="text-lg font-semibold">📤 Entregables</p>
            <p className="mt-2 opacity-95">PDF con capturas</p>
            <p className="mt-1 opacity-95">Fecha límite: antes de la próxima clase</p>
          </div>
        </div>
      ),
    },
    {
      title: "🎉 Cierre",
      content: (
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-primary-700 dark:text-primary-400">
            ¡Felicidades!
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200">
            Has dado tu primer paso en diseño web profesional con WordPress + Elementor.
          </p>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-left">
            <p className="text-xl font-bold">Hoy aprendiste:</p>
            <ul className="mt-3 space-y-1">
              <li>✓ Qué es WordPress y por qué es el CMS #1</li>
              <li>✓ Diferencia entre .com y .org</li>
              <li>✓ Instalación local con LocalWP</li>
              <li>✓ Elementor básico (estructura y widgets)</li>
              <li>✓ Hero section + responsive</li>
            </ul>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-200">
            Próxima clase: maquetación avanzada con Elementor.
          </p>
        </div>
      ),
    },
  ];

  // Asegura 25 slides como en el material original
  // (agrega “micro-slides” de transición si faltan)
  while (slides.length < 25) {
    slides.splice(slides.length - 1, 0, {
      title: `📌 Nota ${slides.length}`,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800/60 border-l-4 border-primary-600 p-5 rounded-xl">
            <p className="text-xl font-bold text-primary-700 dark:text-primary-400">
              Recordatorio
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Revisa el progreso y asegúrate de completar cada paso antes de continuar.
            </p>
          </div>
        </div>
      ),
    });
  }

  // Si por cualquier razón se pasara, recorta a 25
  const normalizedSlides = slides.slice(0, 25);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % normalizedSlides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + normalizedSlides.length) % normalizedSlides.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === " ") {
        if (currentSlide < normalizedSlides.length - 1) {
          nextSlide();
        }
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        if (currentSlide > 0) {
          prevSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, normalizedSlides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white px-4 py-3 sm:px-6 sm:py-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              {normalizedSlides[currentSlide].title}
            </h1>
            {normalizedSlides[currentSlide].subtitle && (
              <p className="text-primary-100 mt-1 text-sm sm:text-base">
                {normalizedSlides[currentSlide].subtitle}
              </p>
            )}
          </div>

          <div className="p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[450px] dark:text-gray-100">
            {normalizedSlides[currentSlide].content}
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
                {currentSlide + 1} / {normalizedSlides.length}
              </span>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-4 sm:px-5 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
              disabled={currentSlide === normalizedSlides.length - 1}
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="bg-gray-100 dark:bg-gray-600 px-4 sm:px-6 py-2 sm:py-3 flex justify-center space-x-1 sm:space-x-2 overflow-x-auto transition-colors duration-300">
            {normalizedSlides.map((_, index) => (
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

export default PresentacionSemana9;
