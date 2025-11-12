import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Brain,
  TrendingUp,
  FileText,
  BarChart3,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

const PresentacionTema4: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slides: Slide[] = [
    {
      title: "SEMANA 4",
      subtitle: "Experiencia del Usuario (UX), Psicología de Conversión y Metodología de Diseño - ITSAE",
      content: (
        <div className="text-center space-y-8 pt-20">
          <Target className="w-24 h-24 mx-auto text-blue-500" />
          <h1 className="text-5xl font-bold text-blue-700 dark:text-blue-300">SEMANA 4</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300">
            Experiencia del Usuario (UX),<br />
            Psicología de Conversión<br />
            y Metodología de Diseño
          </h2>
          <div className="mt-12 text-gray-600 dark:text-gray-400 text-lg">
            <p><strong>ITSAE - Ecuador</strong></p>
            <p>Marketing Digital y Comercio Electrónico</p>
            <p className="mt-6">11-18 Noviembre | 2 horas</p>
          </div>
        </div>
      ),
    },
    {
      title: "🎯 Objetivos de Hoy",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Al finalizar esta clase, podrás:
            </h2>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
                1. Diferenciar UX y UI
              </strong>
              <p className="text-gray-700 dark:text-gray-300">
                Entender cómo cada una impacta en las conversiones de tu sitio
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
                2. Aplicar Psicología de Conversión
              </strong>
              <p className="text-gray-700 dark:text-gray-300">
                Usar 6 principios psicológicos para aumentar ventas
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
                3. Crear un Brief Profesional
              </strong>
              <p className="text-gray-700 dark:text-gray-300">
                Documentar proyectos como lo hacen los profesionales
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
                4. Medir con KPIs
              </strong>
              <p className="text-gray-700 dark:text-gray-300">
                Saber si tu diseño realmente funciona
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
                5. Usar Design Thinking
              </strong>
              <p className="text-gray-700 dark:text-gray-300">
                Aplicar metodología para resolver problemas de e-commerce
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "UX vs UI",
      subtitle: "La diferencia que cambia todo",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-t-4 border-blue-500">
              <div className="text-4xl mb-4 text-center">🤔</div>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                UX - User Experience
              </h3>
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-3">CÓMO FUNCIONA</p>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li>• La experiencia total</li>
                <li>• Navegación intuitiva</li>
                <li>• Velocidad de carga</li>
                <li>• Proceso de compra</li>
                <li>• Usabilidad</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-t-4 border-purple-500">
              <div className="text-4xl mb-4 text-center">🎨</div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                UI - User Interface
              </h3>
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-3">CÓMO SE VE</p>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li>• Colores y tipografía</li>
                <li>• Botones y elementos</li>
                <li>• Diseño visual</li>
                <li>• Imágenes</li>
                <li>• Espacios</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
            <strong className="text-green-800 dark:text-green-200">
              🎯 Regla de oro:
            </strong>{" "}
            <span className="text-gray-800 dark:text-gray-200">
              UX = El viaje completo | UI = Lo que ves en cada paso
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Ejemplo: El Restaurante",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">
                🤔 UX (Experiencia)
              </h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200 leading-relaxed">
                <li>• Ubicación del local</li>
                <li>• Tiempo de espera</li>
                <li>• Amabilidad del personal</li>
                <li>• Temperatura del lugar</li>
                <li>• Sabor de la comida</li>
                <li>• Facilidad para pedir</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-4">
                🎨 UI (Interfaz)
              </h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200 leading-relaxed">
                <li>• Diseño del menú</li>
                <li>• Colores de las paredes</li>
                <li>• Presentación de platos</li>
                <li>• Uniformes del personal</li>
                <li>• Decoración</li>
                <li>• Vajilla</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
            <strong className="text-yellow-800 dark:text-yellow-200">⚠️ Importante:</strong>{" "}
            <span className="text-gray-800 dark:text-gray-200">
              Puedes tener el mejor diseño (UI) del mundo, pero si la experiencia (UX) es mala, la
              gente NO volverá.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "💰 ¿Por qué importa para conversiones?",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 my-4">400%</div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Aumento de conversiones con buen UX/UI
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">
                Casos reales de éxito:
              </h3>
              <div className="space-y-2">
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">Airbnb</strong>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Mejoró fotos (UI) → Ingresos se DUPLICARON
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">Amazon</strong>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Redujo carga 0.1 seg (UX) → +1% ventas
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-2">
                En Ecuador:
              </h3>
              <div className="space-y-2">
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500">
                  <strong className="text-green-700 dark:text-green-300 block mb-1 text-sm">78%</strong>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Abandonan por proceso complicado (UX)
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500">
                  <strong className="text-green-700 dark:text-green-300 block mb-1 text-sm">85%</strong>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Desconfían de diseño poco profesional (UI)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "🧠 Psicología del Consumidor",
      subtitle: "El secreto de las conversiones",
      content: (
        <div className="space-y-6">
          <div className="text-center bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <p className="text-2xl text-blue-800 dark:text-blue-200 leading-relaxed">
              "No vendemos productos.<br />
              Vendemos <span className="font-bold bg-yellow-200 dark:bg-yellow-800 px-2 rounded">EMOCIONES</span> y resolvemos <span className="font-bold bg-yellow-200 dark:bg-yellow-800 px-2 rounded">PROBLEMAS</span>"
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">
              Los 6 Principios que Mueven Ventas:
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-4xl mb-2">⏰</div>
                <strong className="text-gray-900 dark:text-gray-100">FOMO</strong>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-4xl mb-2">🔥</div>
                <strong className="text-gray-900 dark:text-gray-100">URGENCIA</strong>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-4xl mb-2">⭐</div>
                <strong className="text-gray-900 dark:text-gray-100">SOCIAL PROOF</strong>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-4xl mb-2">💎</div>
                <strong className="text-gray-900 dark:text-gray-100">ESCASEZ</strong>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-4xl mb-2">🎁</div>
                <strong className="text-gray-900 dark:text-gray-100">RECIPROCIDAD</strong>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-4xl mb-2">👨‍⚕️</div>
                <strong className="text-gray-900 dark:text-gray-100">AUTORIDAD</strong>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1. FOMO",
      subtitle: "Fear Of Missing Out - Miedo a Perderse Algo",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-4">⏰</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">¿Qué es?</h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              El temor a que otros aprovechen una oportunidad que <strong>TÚ</strong> perderás.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-3">
              Cómo aplicarlo en Ecuador:
            </h3>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-green-500">
                "Solo quedan 3 unidades en Quito"
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-green-500">
                "Esta oferta termina en 2 horas"
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-green-500">
                "15 personas están viendo este producto AHORA"
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-green-500">
                "Envío GRATIS solo HOY para Quito y Guayaquil"
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. Urgencia + 3. Social Proof",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-t-4 border-orange-500">
            <div className="text-4xl mb-4 text-center">🔥</div>
            <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">
              URGENCIA
            </h3>
            <p className="font-bold text-gray-900 dark:text-gray-100 mb-3">La presión del tiempo</p>
            <div className="space-y-2 mb-4">
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-orange-500 text-sm">
                Contadores regresivos
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-orange-500 text-sm">
                "Oferta válida hasta viernes"
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-orange-500 text-sm">
                "Últimas 24 horas"
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded border-l-4 border-yellow-500 mt-4">
              <strong className="text-yellow-800 dark:text-yellow-200 text-sm">
                ⚠️ CUIDADO:
              </strong>{" "}
              <span className="text-sm text-gray-800 dark:text-gray-200">
                La urgencia debe ser REAL. Si mientes, pierdes credibilidad.
              </span>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-t-4 border-blue-500">
            <div className="text-4xl mb-4 text-center">⭐</div>
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
              SOCIAL PROOF
            </h3>
            <p className="font-bold text-gray-900 dark:text-gray-100 mb-3">
              "Si otros lo hacen, debe ser bueno"
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
                Testimonios con foto real
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
                ★★★★★ (234 reseñas)
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
                "1,200 ecuatorianos ya compraron"
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border-l-4 border-green-500 mt-4">
              <strong className="text-green-800 dark:text-green-200 text-sm">📊 DATO:</strong>{" "}
              <span className="text-sm text-gray-800 dark:text-gray-200">
                88% confía en reseñas online
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "4. Escasez + 5. Reciprocidad",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-t-4 border-purple-500">
            <div className="text-4xl mb-4 text-center">💎</div>
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">
              ESCASEZ
            </h3>
            <p className="font-bold text-gray-900 dark:text-gray-100 mb-3">
              "Hay poco, actúa rápido"
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                Los humanos valoramos más lo que es DIFÍCIL de conseguir.
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-purple-500 text-sm">
                "Última talla M"
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-purple-500 text-sm">
                "Solo 5 cupos"
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-purple-500 text-sm">
                Stock bajo visible
              </div>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-t-4 border-green-500">
            <div className="text-4xl mb-4 text-center">🎁</div>
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
              RECIPROCIDAD
            </h3>
            <p className="font-bold text-gray-900 dark:text-gray-100 mb-3">
              "Me diste algo, te devuelvo el favor"
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                Cuando recibes algo GRATIS, sientes obligación de devolver.
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                Envío gratis primera compra
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                Ebook gratuito
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                Consultoría 15 min gratis
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "6. AUTORIDAD",
      subtitle: '"Si un experto lo dice, debe ser cierto"',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍⚕️</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg text-center">
            <p className="text-xl text-gray-800 dark:text-gray-200">
              Confiamos en personas con{" "}
              <span className="font-bold bg-yellow-200 dark:bg-yellow-800 px-2 rounded">
                CREDENCIALES
              </span>{" "}
              y{" "}
              <span className="font-bold bg-yellow-200 dark:bg-yellow-800 px-2 rounded">
                EXPERIENCIA
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">🎓 Expertos</strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                "Recomendado por el Dr. Juan Pérez"
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">
                🏆 Certificaciones
              </strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">Sellos y badges visibles</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">⏰ Experiencia</strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                "Más de 10 años en el mercado"
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">🏢 Clientes</strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Logos de empresas importantes
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "⚠️ FRICCIÓN",
      subtitle: "El enemigo silencioso de las ventas",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 text-center">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">
              Fricción = Cualquier obstáculo que hace que el usuario PIENSE o DUDE
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                ❌ MAL - Alta Fricción
              </h3>
              <div className="space-y-2">
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-red-500 text-sm">
                  15 campos en formulario
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-red-500 text-sm">
                  Checkout de 5 páginas
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-red-500 text-sm">
                  Costos ocultos
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-red-500 text-sm">
                  Obligar crear cuenta
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-red-500 text-sm">
                  Página lenta (+3 seg)
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-red-500 text-sm">
                  Un solo método de pago
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-t-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                ✅ BIEN - Baja Fricción
              </h3>
              <div className="space-y-2">
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                  3-5 campos esenciales
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                  Máximo 3 pasos
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                  Precios claros
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                  "Comprar como invitado"
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                  Carga rápida
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500 text-sm">
                  Múltiples pagos
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "💳 Checkout Óptimo para Ecuador",
      subtitle: "",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 text-center">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              LA REGLA DE ORO:
            </h3>
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 my-4">3</div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Máximo 3 pasos para completar compra
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">Paso 1</strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Datos del cliente (nombre, email, teléfono)
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">Paso 2</strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Dirección y método de envío
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">Paso 3</strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">Pago y confirmación</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-2">
                Métodos de pago
              </strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                PayPhone, Kushki, Tarjetas, Contra entrega
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
            <strong className="text-yellow-800 dark:text-yellow-200">🎯 DATO CLAVE:</strong>{" "}
            <span className="text-gray-800 dark:text-gray-200">
              Reducir 1 campo puede aumentar conversiones hasta 120%
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "💡 Design Thinking",
      subtitle: "Metodología Profesional",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-600 dark:bg-blue-800 text-white p-8 rounded-lg text-center">
            <div className="text-3xl font-bold mb-4">El Proceso de 5 Fases</div>
            <div className="text-xl leading-relaxed">
              1️⃣ EMPATIZAR → 2️⃣ DEFINIR → 3️⃣ IDEAR → 4️⃣ PROTOTIPAR → 5️⃣ TESTEAR
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
            <strong className="text-green-800 dark:text-green-200">🎯 Objetivo:</strong>{" "}
            <span className="text-gray-800 dark:text-gray-200">
              Resolver problemas pensando PRIMERO en el usuario, no en ti
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "5 Fases del Design Thinking",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
              1️⃣ EMPATIZAR
            </strong>
            <p className="text-gray-700 dark:text-gray-300">
              ¿Qué necesita REALMENTE mi cliente ecuatoriano?
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
              2️⃣ DEFINIR
            </strong>
            <p className="text-gray-700 dark:text-gray-300">
              ¿Cuál es EL problema principal a resolver?
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
              3️⃣ IDEAR
            </strong>
            <p className="text-gray-700 dark:text-gray-300">
              ¿Cómo podríamos solucionar esto? (Brainstorming)
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
              4️⃣ PROTOTIPAR
            </strong>
            <p className="text-gray-700 dark:text-gray-300">
              ¿Cómo se vería la solución? (Diseño en Figma)
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">
              5️⃣ TESTEAR
            </strong>
            <p className="text-gray-700 dark:text-gray-300">
              ¿Funciona realmente? (Probar con usuarios)
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "📋 El BRIEF del Cliente",
      subtitle: "El documento que lo cambia TODO",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">
              ¿Qué es un BRIEF?
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              El documento estratégico que responde:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">¿QUÉ?</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">vamos a diseñar</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">¿PARA QUIÉN?</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">lo diseñamos</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">¿POR QUÉ?</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">lo necesitan</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">¿CÓMO?</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">mediremos éxito</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg border-l-4 border-yellow-500">
            <strong className="text-yellow-800 dark:text-yellow-200">⚠️ IMPORTANTE:</strong>{" "}
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Sin brief = Diseñar a ciegas = FRACASO
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Las 10 Preguntas del Brief",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>1.</strong> ¿Objetivo del sitio?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>2.</strong> ¿Cliente ideal?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>3.</strong> ¿Qué problema resuelve?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>4.</strong> ¿Propuesta de valor única?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>5.</strong> ¿Competencia directa?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>6.</strong> ¿Acción deseada?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>7.</strong> ¿Tono de comunicación?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>8.</strong> ¿Elementos técnicos?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>9.</strong> ¿Presupuesto?
          </div>
          <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500 text-sm">
            <strong>10.</strong> ¿KPIs a medir?
          </div>
        </div>
      ),
    },
    {
      title: "📊 KPIs - ¿Funciona el diseño?",
      subtitle: "Key Performance Indicators",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center border-l-4 border-blue-500">
            <p className="text-gray-800 dark:text-gray-200">
              Son las{" "}
              <span className="font-bold bg-yellow-200 dark:bg-yellow-800 px-2 rounded">
                métricas específicas
              </span>{" "}
              que te dicen si tu sitio está cumpliendo su objetivo
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-t-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">
                📈 Los 8 KPIs Esenciales
              </h3>
              <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <li>• Tasa de Conversión</li>
                <li>• Tasa de Rebote</li>
                <li>• Tiempo en Página</li>
                <li>• Páginas por Sesión</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border-t-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-2 invisible">
                .
              </h3>
              <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <li>• Tráfico por Fuente</li>
                <li>• Abandono de Carrito</li>
                <li>• Costo por Adquisición</li>
                <li>• Valor de Vida del Cliente</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1️⃣ Tasa de Conversión",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">¿Qué es?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              % de visitantes que completan el objetivo
            </p>
          </div>
          <div className="bg-blue-600 dark:bg-blue-800 text-white p-3 rounded-lg text-center font-mono">
            (Conversiones ÷ Visitantes) × 100
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">Ejemplo:</h3>
              <div className="text-sm text-gray-800 dark:text-gray-200">
                📊 1,000 visitantes
                <br />
                💰 30 ventas
                <br />
                <strong className="text-blue-700 dark:text-blue-300">= 3% de conversión</strong>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-2">
                ¿Qué es bueno?
              </h3>
              <div className="text-sm text-gray-800 dark:text-gray-200">
                ✅ Landing pages: 5-15%
                <br />
                ✅ E-commerce: 2-5%
                <br />
                ✅ Formularios: 10-20%
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2️⃣ Tasa de Rebote",
      subtitle: "Bounce Rate",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center border-l-4 border-blue-500">
            <p className="text-gray-800 dark:text-gray-200">
              % de personas que entran y se van <strong>sin hacer NADA</strong>
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300">
              ¿Qué es bueno?
            </h3>
            <div className="space-y-2">
              <div className="bg-green-100 dark:bg-green-800 p-3 rounded-lg">
                <strong className="text-green-800 dark:text-green-200">26-40%</strong> = Excelente
                ✅
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                <strong className="text-yellow-800 dark:text-yellow-200">41-55%</strong> = Promedio
                🟡
              </div>
              <div className="bg-red-100 dark:bg-red-800 p-3 rounded-lg">
                <strong className="text-red-800 dark:text-red-200">56-70%</strong> = Alta ⚠️
              </div>
              <div className="bg-red-600 dark:bg-red-700 text-white p-3 rounded-lg">
                <strong>70%+</strong> = PROBLEMAS GRAVES ❌
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "🛠️ Herramientas para Medir",
      subtitle: "",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-3">
              🆓 GRATIS
            </h3>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500">
                <strong className="text-green-700 dark:text-green-300 block mb-1 text-sm">
                  Google Analytics 4
                </strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">La más completa</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500">
                <strong className="text-green-700 dark:text-green-300 block mb-1 text-sm">
                  Google Search Console
                </strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">Para SEO</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500">
                <strong className="text-green-700 dark:text-green-300 block mb-1 text-sm">
                  Microsoft Clarity
                </strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Mapas de calor ilimitados
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-green-500">
                <strong className="text-green-700 dark:text-green-300 block mb-1 text-sm">Hotjar</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">Versión gratis limitada</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">
              💰 DE PAGO
            </h3>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">
                  Shopify Analytics
                </strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">Incluido con Shopify</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">Landingi</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">Especializado en LP</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">HubSpot</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">Suite completa</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1 text-sm">SEMrush</strong>
                <p className="text-xs text-gray-700 dark:text-gray-300">SEO + Analytics</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "¡Hora de Practicar!",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl mb-2">✏️</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">
              3 Actividades (50 min)
            </h2>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1">
                  Actividad 1 (15 min)
                </strong>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Crear brief simple de un negocio real
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1">
                  Actividad 2 (20 min)
                </strong>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Analizar landing page ecuatoriana: identificar elementos psicológicos
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
                <strong className="text-blue-700 dark:text-blue-300 block mb-1">
                  Actividad 3 (15 min)
                </strong>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Grupo: redesign mental de checkout para reducir fricción
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border-l-4 border-green-500">
            <strong className="text-green-800 dark:text-green-200">🎯 Objetivo:</strong>{" "}
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Aplicar TODO lo aprendido hoy en casos reales
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Tarea Asincrónica",
      subtitle: "2 horas",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl mb-2">🏠</div>
          </div>
          <div className="space-y-2">
            <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-1">
                1. Leer artículo (30 min)
              </strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                "Psicología de conversión en web" - SEOCOM
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-1">
                2. Brief completo (60 min)
              </strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Para tu proyecto final con TODOS los detalles
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300 block mb-1">
                3. Análisis comparativo (30 min)
              </strong>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Identificar 5 elementos psicológicos en 3 landing pages
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg border-l-4 border-yellow-500">
            <strong className="text-yellow-800 dark:text-yellow-200">⚠️ MUY IMPORTANTE:</strong>{" "}
            <span className="text-sm text-gray-800 dark:text-gray-200">
              El brief será la base de tu proyecto final
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "🎯 Conclusiones Clave",
      subtitle: "",
      content: (
        <div className="space-y-2.5">
          <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-1">
              1. UX + UI = Conversiones
            </strong>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Ambas son esenciales, trabajan juntas
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-1">
              2. Psicología mueve ventas
            </strong>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              FOMO, urgencia, social proof, escasez, reciprocidad, autoridad
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-1">
              3. Fricción mata conversiones
            </strong>
            <p className="text-sm text-gray-700 dark:text-gray-300">Menos clics = Más ventas</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-1">
              4. Design Thinking te hace PRO
            </strong>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Empatizar → Definir → Idear → Prototipar → Testear
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
            <strong className="text-blue-700 dark:text-blue-300 block mb-1">
              5. Sin medición, no hay mejora
            </strong>
            <p className="text-sm text-gray-700 dark:text-gray-300">Los KPIs te dicen la verdad</p>
          </div>
        </div>
      ),
    },
    {
      title: "Próxima Clase",
      subtitle: "SEMANA 5",
      content: (
        <div className="text-center space-y-4 pt-4">
          <div className="text-4xl mb-3">🎨</div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3">
              Introducción a Figma y Herramientas Básicas
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Diseño de interfaz, herramientas esenciales y primeros diseños
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg border-l-4 border-yellow-500 max-w-xl mx-auto">
            <strong className="text-yellow-800 dark:text-yellow-200 block mb-2">📝 Traer:</strong>
            <div className="text-left text-sm text-gray-800 dark:text-gray-200 space-y-1">
              ✅ Laptop con Figma instalado
              <br />
              ✅ Brief completado de tu proyecto
              <br />
              ✅ Ganas de diseñar
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "¡Gracias!",
      subtitle: "¿Preguntas?",
      content: (
        <div className="text-center space-y-4 pt-6">
          <div className="text-5xl mb-3">🙏</div>
          <div className="mt-8 text-gray-600 dark:text-gray-400">
            <p><strong>ITSAE - Ecuador</strong></p>
            <p>Marketing Digital y Comercio Electrónico</p>
            <p className="mt-6 text-blue-600 dark:text-blue-400 text-xl">
              "El diseño no es solo cómo se ve.
              <br />
              Es cómo FUNCIONA"
            </p>
            <p className="mt-3 text-gray-500 dark:text-gray-500">- Steve Jobs</p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => prev < slides.length - 1 ? prev + 1 : prev);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => prev > 0 ? prev - 1 : prev);
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

          <div className="p-4 sm:p-6 lg:p-6 min-h-[320px] sm:min-h-[380px] dark:text-gray-100">
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
      </div>
    </div>
  );
};

export default PresentacionTema4;

