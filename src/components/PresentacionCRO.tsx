import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  TrendingUp,
  Target,
  CheckCircle2,
  Star,
  Clock,
  Users,
  CreditCard,
  Package,
  Mail,
  Gift,
  BarChart,
  Zap,
  AlertCircle,
  Award,
  DollarSign,
  Settings,
  Tag,
  Truck,
  XCircle,
  RefreshCw,
  MessageSquare,
  Shield,
  Image,
  FileText
} from "lucide-react";

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PresentacionCRO: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    // Slide 1: Portada
    {
      title: "🚀 UNIDAD 4 - TEMA 2 🚀",
      subtitle: "CRO: Optimización de Conversiones para E-Commerce",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">💰</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400">
            CRO: Conversion Rate Optimization
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-300">
            Pequeños Cambios = Grandes Incrementos en Ventas
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Unidad 4: Marketing Digital y Conversión | ITSAE Ecuador
          </p>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-700 to-purple-500 text-white p-6 rounded-2xl">
            <p className="text-xl font-semibold flex items-center justify-center gap-2">
              <Target className="w-6 h-6 text-accent-400" />
              Capacidad: Optimizar tasas de conversión en e-commerce, reducir abandono de carrito y aumentar ventas
            </p>
          </div>
          <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
            <span>📅 27 enero - 3 febrero 2026</span>
            <span>⏱️ 2 horas</span>
            <span>💻 Práctica con CRO</span>
          </div>
        </div>
      ),
    },

    // Slide 2: ¿Qué es CRO?
    {
      title: "🎯 ¿Qué es CRO?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <div className="text-5xl text-center mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Conversion Rate Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Optimización de la Tasa de Conversión
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl font-mono text-lg text-center">
                <strong>Tasa de Conversión = (Conversiones / Visitantes) × 100</strong>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <div className="text-5xl text-center mb-4">📊</div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Ejemplo Real
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>1,000 visitantes al mes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>20 compras → <strong>2% conversión</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Con CRO: 60 compras → <strong>6% conversión</strong></span>
                </li>
                <li className="bg-accent-100 dark:bg-accent-900/30 p-2 rounded-lg font-bold text-accent-700 dark:text-accent-300">
                  ¡Triplicaste ventas con el mismo tráfico!
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 3: Métricas Clave
    {
      title: "📊 Métricas Clave en E-Commerce",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                1. Tasa de Conversión
              </h3>
              <div className="text-6xl font-bold text-accent-600 dark:text-accent-400 mb-4">2-3%</div>
              <p className="text-xl text-gray-700 dark:text-gray-200">Promedio global e-commerce</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                2. Abandono de Carrito
              </h3>
              <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">69.8%</div>
              <p className="text-xl text-gray-700 dark:text-gray-200">De usuarios abandonan sin comprar</p>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-6 rounded-xl">
            <p className="text-xl text-gray-700 dark:text-gray-200 text-center">
              <strong className="text-accent-600 dark:text-accent-400">
                ¡Esto significa que estás perdiendo $70 de cada $100 potenciales!
              </strong>
            </p>
          </div>
        </div>
      ),
    },

    // Slide 4: Razones de Abandono
    {
      title: "❌ Por Qué Abandonan los Clientes",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="p-4 text-left">Razón</th>
                  <th className="p-4 text-left">Porcentaje</th>
                  <th className="p-4 text-left">Solución</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4">Costos extra inesperados</td>
                  <td className="p-4 font-bold text-2xl text-red-600">48%</td>
                  <td className="p-4">Mostrar envío ANTES del checkout</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4">Obligados a crear cuenta</td>
                  <td className="p-4 font-bold text-2xl text-red-600">24%</td>
                  <td className="p-4">Permitir compra como invitado</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4">Proceso de pago muy largo</td>
                  <td className="p-4 font-bold text-2xl text-red-600">21%</td>
                  <td className="p-4">Reducir campos del formulario</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4">No confían en dar datos</td>
                  <td className="p-4 font-bold text-2xl text-red-600">18%</td>
                  <td className="p-4">Badges de seguridad y SSL</td>
                </tr>
                <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4">Errores en el sitio web</td>
                  <td className="p-4 font-bold text-2xl text-red-600">17%</td>
                  <td className="p-4">Testing y optimización técnica</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">💡 La buena noticia:</strong> Todos estos problemas tienen solución y son oportunidades de mejora
            </p>
          </div>
        </div>
      ),
    },

    // Slide 5: Página de Producto Optimizada
    {
      title: "🛍️ Página de Producto que Convierte",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
                Elementos Esenciales:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  4-6 imágenes HD con zoom
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Descripción con beneficios
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Reseñas y testimonios
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Urgencia y escasez
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Trust badges y garantías
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Información de envío clara
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Impacto del Zoom
              </h3>
              <div className="text-6xl font-bold text-accent-600 dark:text-accent-400 mb-4">+9%</div>
              <p className="text-xl text-gray-700 dark:text-gray-200">
                Incremento en conversiones según Amazon
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 6: Social Proof
    {
      title: "⭐ El Poder de la Prueba Social",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-8xl font-bold text-accent-600 dark:text-accent-400 mb-4">93%</div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8">
              De consumidores lee reseñas antes de comprar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Productos con reseñas venden
              </h3>
              <div className="text-6xl font-bold text-accent-600 dark:text-accent-400 mb-4">+18%</div>
              <p className="text-xl text-gray-700 dark:text-gray-200">
                más que productos sin reseñas
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                Tipos de Prueba Social:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-500" />
                  Reseñas de clientes (5 estrellas)
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-500" />
                  "15 personas viendo este producto"
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-accent-500" />
                  "María de Quito compró hace 2 horas"
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-500" />
                  Certificaciones y premios
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">🔑 Clave:</strong> Mostrar incluso reseñas negativas (4/5 estrellas) aumenta credibilidad
            </p>
          </div>
        </div>
      ),
    },

    // Slide 7: Urgencia y Escasez
    {
      title: "⏰ Urgencia y Escasez",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
                Ejemplos Efectivos:
              </h3>
              <ul className="space-y-4 text-xl text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-red-500" />
                  "Solo quedan 3 unidades"
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-500" />
                  "15 personas viendo este producto ahora"
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  "Oferta termina en 4 horas"
                </li>
                <li className="flex items-center gap-3">
                  <Package className="w-6 h-6 text-purple-500" />
                  "Últimas tallas disponibles"
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Impacto Psicológico
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                La escasez activa el <strong>miedo a perderse algo (FOMO)</strong>
              </p>
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 text-center">
                +15% conversiones
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-xl">
            <p className="text-xl text-gray-700 dark:text-gray-200">
              <AlertCircle className="w-6 h-6 text-red-500 inline mr-2" />
              <strong>ADVERTENCIA ÉTICA:</strong> NUNCA usar escasez falsa. Los clientes descubren el engaño y pierdes credibilidad permanentemente.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 8: Checkout Optimizado
    {
      title: "🛒 Checkout: Donde Mueren las Ventas",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Impacto de Campos Extra
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">
                Cada campo adicional reduce conversiones en:
              </p>
              <div className="text-6xl font-bold text-red-600 dark:text-red-400">11%</div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
                Campos ESENCIALES:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Nombre completo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Email
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Teléfono
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Dirección de envío
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Método de pago
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">💡 Regla de oro:</strong> Si no es absolutamente necesario para completar la compra, NO lo pidas
            </p>
          </div>
        </div>
      ),
    },

    // Slide 9: Guest Checkout
    {
      title: "👤 Guest Checkout: Compra Sin Registro",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-8xl font-bold text-red-600 dark:text-red-400 mb-4">24%</div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8">
              De usuarios abandona si OBLIGAN a crear cuenta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">
                ❌ Estrategia INCORRECTA
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-lg">
                "Debes crear una cuenta para continuar"
              </p>
              <p className="text-red-600 dark:text-red-400 font-bold mt-2">
                = 24% de abandono inmediato
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
                ✅ Estrategia CORRECTA
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                <p>1. Permitir compra como invitado</p>
                <p>2. DESPUÉS de comprar exitosamente:</p>
                <p className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-lg font-semibold">
                  "¿Quieres crear cuenta? Tu pedido ya está guardado"
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 10: Carritos Abandonados
    {
      title: "💰 Recuperación de Carritos Abandonados",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4 text-center">
              El Dinero que Estás Dejando en la Mesa:
            </h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl font-mono text-lg text-center">
              <p>Si vendes $1,000/mes con 30% conversión,</p>
              <p>estás PERDIENDO potencialmente <strong className="text-red-600">$2,333</strong></p>
              <p>en carritos abandonados</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Secuencia de Emails:
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <p className="font-bold text-gray-900 dark:text-white">1 hora después:</p>
                  <p className="text-gray-700 dark:text-gray-200">Recordatorio amable (sin descuento)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <p className="font-bold text-gray-900 dark:text-white">24 horas:</p>
                  <p className="text-gray-700 dark:text-gray-200">Cupón 5-10% OFF</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <p className="font-bold text-gray-900 dark:text-white">72 horas:</p>
                  <p className="text-gray-700 dark:text-gray-200">Descuento mayor (15% OFF)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Tasa de Recuperación
              </h3>
              <div className="text-6xl font-bold text-accent-600 dark:text-accent-400 mb-4">10-15%</div>
              <p className="text-xl text-gray-700 dark:text-gray-200">
                De carritos abandonados se recuperan
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 11: A/B Testing
    {
      title: "🧪 A/B Testing Básico",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Elementos para Testar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Botones:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>• Color (verde vs naranja vs rojo)</li>
                <li>• Texto ("Comprar" vs "Añadir al Carrito")</li>
                <li>• Tamaño (pequeño vs grande)</li>
                <li>• Ubicación (arriba vs abajo)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Headlines:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>• Características vs Beneficios</li>
                <li>• Cortos vs Largos</li>
                <li>• Con números vs Sin números</li>
                <li>• Preguntas vs Afirmaciones</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500">
              <Image className="w-12 h-12 mx-auto mb-3 text-accent-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Imágenes</h3>
              <p className="text-gray-600 dark:text-gray-300">Producto vs Lifestyle</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500">
              <FileText className="w-12 h-12 mx-auto mb-3 text-accent-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Formularios</h3>
              <p className="text-gray-600 dark:text-gray-300">Campos largos vs cortos</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500">
              <DollarSign className="w-12 h-12 mx-auto mb-3 text-accent-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Precios</h3>
              <p className="text-gray-600 dark:text-gray-300">$99 vs $99.00</p>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200 text-center">
              <strong className="text-accent-600 dark:text-accent-400">⚡ Regla de Oro:</strong> Cambiar UNA variable a la vez. Mínimo 1000 visitantes por variación.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 12: Plugins Esenciales
    {
      title: "🔌 Plugins Esenciales para CRO",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Herramientas Recomendadas para Ecuador
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl border-l-4 border-accent-500">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">
                1. YITH WooCommerce Wishlist (GRATIS)
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Lista de deseos. Recupera intención de compra futura. Emails automáticos cuando baja el precio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl border-l-4 border-accent-500">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">
                2. NotificationX (GRATIS)
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                "María de Guayaquil compró hace 5 minutos" - Prueba social en tiempo real. Aumenta urgencia.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl border-l-4 border-accent-500">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">
                3. Abandoned Cart Lite (GRATIS)
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Recupera carritos con emails automáticos y cupones. Configurable para Ecuador.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl border-l-4 border-accent-500">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">
                4. TrustPulse (PREMIUM)
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Notificaciones de compras reales. Más avanzado que NotificationX. $5/mes.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 13: Métodos de Pago Ecuador
    {
      title: "💳 Métodos de Pago para Ecuador",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Optimización de Pagos para Conversión 🇪🇨
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Esenciales:</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Transferencia bancaria (más usado)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Depósito bancario
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Pago contra entrega (COD)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  PayPhone (popular en Ecuador)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Datafast/Placetopay (tarjetas)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  PayPal (internacional)
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Impacto en Conversión:
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                <p><strong>1 método:</strong> 100% conversión base</p>
                <p><strong>2 métodos:</strong> +15% conversión</p>
                <p><strong>3 métodos:</strong> +25% conversión</p>
                <p><strong>4+ métodos:</strong> +35% conversión</p>
              </div>
              <div className="text-center mt-4">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">
                  Más opciones = Más ventas
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">🔑 Clave:</strong> Mostrar logos de métodos ANTES del checkout. Genera confianza y reduce abandono.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 14: Ejercicio Práctico
    {
      title: "💻 Ejercicio Práctico de Hoy",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Optimización CRO en Tu Tienda (75 min)
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Optimizar 3 Productos (15 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Agregar urgencia, social proof, mejores imágenes con zoom, descripciones con beneficios
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Simplificar Checkout (20 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Reducir campos, activar guest checkout, mostrar total con envío
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Carrito Abandonado (20 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Instalar plugin Abandoned Cart Lite y configurar secuencia de emails
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Cupón de Recuperación (20 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Crear cupón VUELVE10 con 10% descuento, configurar notificaciones sociales
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">✅ Checkpoint Final:</strong> 3 productos optimizados, checkout simplificado, plugin de recuperación activo, 1 cupón creado
            </p>
          </div>
        </div>
      ),
    },

    // Slide 15: Cierre
    {
      title: "🎯 Recordar Siempre",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
                Principios CRO:
              </h3>
              <ul className="space-y-4 text-xl text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                  <span>CRO es un <strong>proceso continuo</strong>, no un evento único</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Empieza con cambios de <strong>mayor impacto</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Mide TODO - Si no mides, no sabes si funciona</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                  <span>En Ecuador: <strong>Confianza es mayor a Diseño bonito</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Mobile primero (75% tráfico desde celular)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Próxima Clase
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">
                Unidad 4 - Tema 3
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Analytics y Métricas Avanzadas
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4 leading-relaxed">
              "No necesitas tráfico millonario.<br />
              Necesitas convertir mejor<br />
              el tráfico que ya tienes."
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              ITSAE | CRO - Unidad 4 Tema 2 | ¡Nos vemos la próxima clase!
            </p>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Slide Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 pt-8">
        <div className="flex justify-end mb-4">
          <span className="text-sm text-purple-700 dark:text-purple-400 font-medium">
            Diapositiva {currentSlide + 1} de {slides.length}
          </span>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 min-h-[600px] transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-700 dark:text-purple-400">
            {slides[currentSlide].title}
          </h2>
          {slides[currentSlide].subtitle && (
            <h3 className="text-xl md:text-2xl mb-6 text-purple-600 dark:text-purple-300">
              {slides[currentSlide].subtitle}
            </h3>
          )}
          <div className="mt-6">{slides[currentSlide].content}</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-purple-700 hover:bg-accent-500 disabled:bg-gray-400 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Diapositiva anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-purple-700 hover:bg-accent-500 disabled:bg-gray-400 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Siguiente diapositiva"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PresentacionCRO;