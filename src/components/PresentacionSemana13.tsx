import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  CreditCard,
  Package,
  DollarSign,
  Settings,
  Mail,
  Tag,
  TrendingUp,
  Users,
  Truck,
  CheckCircle2,
  Clock,
  XCircle,
  RefreshCw,
  Pause,
  Star,
  Gift,
  MessageSquare,
  Shield,
  BarChart,
  Image,
  FileText,
  AlertCircle,
  Award,
  Zap,
  Target,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PresentacionSemana13: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    // Slide 1: Portada
    {
      title: "🛒 SEMANA 13 🛒",
      subtitle: "WooCommerce - E-Commerce Completo en WordPress",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">🛒</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400">
            WooCommerce
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-300">
            E-Commerce Completo en WordPress
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Unidad 4: Marketing Digital Integrado | ITSAE Ecuador
          </p>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-700 to-purple-500 text-white p-6 rounded-2xl">
            <p className="text-xl font-semibold flex items-center justify-center gap-2">
              <Target className="w-6 h-6 text-accent-400" />
              Capacidad: Crear tiendas online profesionales con WooCommerce, configurar pagos y envíos para Ecuador
            </p>
          </div>
          <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
            <span>📅 20-27 enero 2026</span>
            <span>⏱️ 2 horas</span>
            <span>💻 Práctica con WooCommerce</span>
          </div>
        </div>
      ),
    },

    // Slide 2: ¿Qué es WooCommerce?
    {
      title: "📊 ¿Qué es WooCommerce?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <div className="text-5xl text-center mb-4">📊</div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Plugin #1 de E-Commerce
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>28% de todas las tiendas online usan WooCommerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>+5 millones de instalaciones activas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>100% gratis y código abierto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Compatible con cualquier tema WordPress</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
              <div className="text-5xl text-center mb-4">🇪🇨</div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
                Perfecto para Ecuador
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Acepta pasarelas ecuatorianas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Configurable en USD</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>IVA 15% automático</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Envíos por zonas del país</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">💡 Ventaja clave:</strong> Control total de tu tienda. No pagas comisiones mensuales como Shopify o MercadoLibre.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 3: Instalación
    {
      title: "🚀 Instalación y Configuración",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Instalar Plugin
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Plugins → Añadir nuevo → Buscar "WooCommerce" → Instalar → Activar
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Wizard de Configuración
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  País: Ecuador | Moneda: USD | Impuesto: IVA 15%
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Páginas Automáticas
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Se crean: Tienda, Carrito, Checkout, Mi Cuenta
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Verificar Menú
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Debe aparecer "WooCommerce" en tu panel WordPress
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 4: Tipos de Productos
    {
      title: "📦 Tipos de Productos",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            4 Tipos de Productos en WooCommerce
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Simple</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Un producto, un precio</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold">Ej: Camiseta negra M</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">👟</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Variable</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Con atributos (talla, color)</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold">Ej: Zapatillas (S, M, L)</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Digital</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Descargable, sin envío</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold">Ej: eBook, curso online</p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">
              Componentes esenciales de un producto:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Título descriptivo + SEO
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Precio (normal y oferta)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  SKU único
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Stock y gestión inventario
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Imágenes (mínimo 3)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Descripción larga (150+ palabras)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Descripción corta (50 palabras)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Categorías y etiquetas
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Producto Variable
    {
      title: "🎨 Productos Variables",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Crear Productos con Variaciones
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Paso 1: Crear Atributos</h3>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Atributo: Talla</p>
                <p className="text-gray-700 dark:text-gray-200 mb-3">Valores: S | M | L | XL</p>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <p>☑️ Visible en página</p>
                  <p>☑️ Usado para variaciones</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Atributo: Color</p>
                <p className="text-gray-700 dark:text-gray-200 mb-3">Valores: Negro | Blanco | Azul</p>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <p>☑️ Visible en página</p>
                  <p>☑️ Usado para variaciones</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Paso 2: Generar Variaciones</h3>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                <p className="text-gray-700 dark:text-gray-200 mb-3">
                  Pestaña <strong>Variaciones</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  → "Crear variaciones de todos los atributos"
                </p>
                <p className="text-xl font-bold text-accent-600 dark:text-accent-400">
                  Se crearán: 4 tallas × 3 colores = 12 variaciones
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Paso 3: Configurar c/u</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Precio individual
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    SKU único
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Stock específico
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Imagen de variación
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 6: Pasarelas de Pago
    {
      title: "💳 Pasarelas de Pago",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Métodos de Pago para Ecuador 🇪🇨
          </h3>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="p-4 text-left">Método</th>
                  <th className="p-4 text-left">Ventajas</th>
                  <th className="p-4 text-left">Comisión</th>
                  <th className="p-4 text-left">Recomendación</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">💳 PayPal</td>
                  <td className="p-4">Más usado, acepta tarjetas sin cuenta</td>
                  <td className="p-4">3.49% + $0.49</td>
                  <td className="p-4 text-accent-600 dark:text-accent-400 font-bold">⭐ Esencial</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">🏦 Transferencia</td>
                  <td className="p-4">Sin comisión, bancos ecuatorianos</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-accent-600 dark:text-accent-400 font-bold">⭐ Esencial</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">💵 Contra Entrega</td>
                  <td className="p-4">Genera confianza, ideal Ecuador</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-accent-600 dark:text-accent-400 font-bold">⭐ Muy usado</td>
                </tr>
                <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">🌐 Kushki</td>
                  <td className="p-4">Pasarela ecuatoriana, tarjetas locales</td>
                  <td className="p-4">~3.5% + IVA</td>
                  <td className="p-4">Opcional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">💡 Estrategia recomendada:</strong> Ofrece MÍNIMO 3 métodos de pago para maximizar conversiones. Cada cliente tiene preferencias diferentes.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 7: Configurar PayPal
    {
      title: "💳 Configuración PayPal",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Activar PayPal en WooCommerce
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modo Producción (Real)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <div className="w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-gray-700 dark:text-gray-200">Crea cuenta <strong>PayPal Business</strong> en paypal.com</p>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <div className="w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-gray-700 dark:text-gray-200">WooCommerce → Ajustes → Pagos → Activar PayPal</p>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <div className="w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-gray-700 dark:text-gray-200">Email PayPal: tu email business</p>
                </div>
                <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <div className="w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <p className="text-gray-700 dark:text-gray-200">Desactivar "Modo Sandbox"</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Modo Sandbox (Pruebas)</h3>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl mb-4">
                <p className="font-semibold text-purple-700 dark:text-purple-400 mb-3">Para testear sin dinero real:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                    <span>Ve a developer.paypal.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                    <span>Crea cuentas de prueba</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                    <span>Activa "Modo Sandbox" en WooCommerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                    <span>Usa email de prueba</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-4 rounded-xl">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Título sugerido:</p>
                <p className="text-gray-700 dark:text-gray-200 mb-3">"Paga con PayPal o Tarjeta de Crédito"</p>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Descripción:</p>
                <p className="text-gray-700 dark:text-gray-200">"Pago 100% seguro. Acepta Visa, MasterCard, Discover"</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 8: Envíos Ecuador
    {
      title: "🚚 Envíos Ecuador",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Zonas de Envío para Ecuador
          </h3>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <h3 className="text-xl font-bold bg-purple-100 dark:bg-purple-900/30 p-4 text-purple-700 dark:text-purple-400">
              Estrategia por Regiones
            </h3>
            <table className="w-full">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="p-4 text-left">Zona</th>
                  <th className="p-4 text-left">Provincias</th>
                  <th className="p-4 text-left">Tarifa</th>
                  <th className="p-4 text-left">Tiempo</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">Quito</td>
                  <td className="p-4">Pichincha</td>
                  <td className="p-4 text-2xl font-bold text-accent-600">$3</td>
                  <td className="p-4">1-2 días</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">Guayaquil</td>
                  <td className="p-4">Guayas</td>
                  <td className="p-4 text-2xl font-bold text-accent-600">$4</td>
                  <td className="p-4">2-3 días</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">Sierra Centro</td>
                  <td className="p-4">Tungurahua, Chimborazo, Cotopaxi</td>
                  <td className="p-4 text-2xl font-bold text-accent-600">$5</td>
                  <td className="p-4">2-3 días</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">Costa</td>
                  <td className="p-4">Manabí, Esmeraldas, El Oro</td>
                  <td className="p-4 text-2xl font-bold text-accent-600">$6</td>
                  <td className="p-4">3-4 días</td>
                </tr>
                <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold">Amazonía</td>
                  <td className="p-4">Orellana, Pastaza, Sucumbíos</td>
                  <td className="p-4 text-2xl font-bold text-accent-600">$10</td>
                  <td className="p-4">5-7 días</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
              <p className="text-gray-700 dark:text-gray-200 font-semibold">
                ✓ Envío GRATIS en pedidos sobre $50
              </p>
            </div>
            <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
              <p className="text-gray-700 dark:text-gray-200 font-semibold">
                ✓ Retiro en tienda GRATIS
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 9: Cupones
    {
      title: "🎁 Cupones de Descuento",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Cupones de Descuento Estratégicos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🎉 Primera Compra</h3>
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 my-4">-10%</div>
              <p className="text-gray-700 dark:text-gray-200 mb-2"><strong>Código:</strong> BIENVENIDA10</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Mínimo: $30</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">1 uso por cliente</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🛍️ Black Friday</h3>
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 my-4">-25%</div>
              <p className="text-gray-700 dark:text-gray-200 mb-2"><strong>Código:</strong> BLACK2026</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Solo 29-30 nov</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Uso ilimitado</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🚚 Envío Gratis</h3>
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 my-4">$0</div>
              <p className="text-gray-700 dark:text-gray-200 mb-2"><strong>Código:</strong> ENVIOGRATIS</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Mínimo: $40</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Todo el mes</p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">
              Crear cupón: WooCommerce → Cupones → Añadir cupón
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Código único y memorable
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Tipo: % o cantidad fija
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Fecha de caducidad
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Uso mínimo/máximo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Productos/categorías específicas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Límite por usuario
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 10: Emails Transaccionales
    {
      title: "✉️ Emails Transaccionales",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Comunicación Automatizada
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Emails Automáticos al Cliente</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span>✉️ Pedido recibido (confirmación)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Package className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span>📦 Pedido en proceso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span>✅ Pedido completado</span>
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span>🔄 Pedido reembolsado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span>🔑 Nueva cuenta creada</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span>📝 Nota del pedido (cuando añades comentario)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personalización Clave</h3>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Asunto efectivo:</p>
                <p className="text-gray-700 dark:text-gray-200 mb-4 italic">"¡Tu pedido #{"{order_number}"} está en camino! 🎉"</p>
                
                <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2 mt-4">Texto adicional:</p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-200">
                  <p>Hola {"{customer_first_name}"},</p>
                  <p className="mt-2">¡Gracias por tu compra! Tu pedido llegará en 2-3 días.</p>
                  <p className="mt-2">¿Dudas? WhatsApp: 099 123 4567</p>
                  <p className="mt-2">Equipo [Tu Tienda] ❤️</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">🎨 Plugin recomendado:</strong> YayMail - Editor visual para diseñar emails bonitos sin código
            </p>
          </div>
        </div>
      ),
    },

    // Slide 11: Gestión de Pedidos
    {
      title: "📋 Gestión de Pedidos",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Estados de Pedidos en WooCommerce
          </h3>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="p-4 text-left">Estado</th>
                  <th className="p-4 text-left">Significado</th>
                  <th className="p-4 text-left">Acción Requerida</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    Pendiente de pago
                  </td>
                  <td className="p-4">Pedido recibido, esperando pago</td>
                  <td className="p-4">Esperar confirmación de transferencia</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    Procesando
                  </td>
                  <td className="p-4">Pago confirmado, preparar envío</td>
                  <td className="p-4">Empacar y coordinar courier</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold flex items-center gap-2">
                    <Pause className="w-5 h-5 text-orange-500" />
                    En espera
                  </td>
                  <td className="p-4">Falta stock o información</td>
                  <td className="p-4">Contactar cliente, resolver pendiente</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Completado
                  </td>
                  <td className="p-4">Pedido entregado exitosamente</td>
                  <td className="p-4">Cliente recibió producto</td>
                </tr>
                <tr className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Cancelado
                  </td>
                  <td className="p-4">Pedido cancelado</td>
                  <td className="p-4">Reembolsar si aplicaba</td>
                </tr>
                <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
                  <td className="p-4 font-semibold flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-purple-500" />
                    Reembolsado
                  </td>
                  <td className="p-4">Dinero devuelto al cliente</td>
                  <td className="p-4">Proceso finalizado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">📱 Tip:</strong> Confirma TODOS los pedidos contra entrega por WhatsApp antes de despachar
            </p>
          </div>
        </div>
      ),
    },

    // Slide 12: Optimización Conversión
    {
      title: "🎯 Optimización de Conversión",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            10 Tips para Vender Más con WooCommerce
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">🎯 En la Página de Producto</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Fotos HD (mínimo 1500x1500px)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Video del producto en uso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Descripciones con BENEFICIOS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Urgencia: "Solo quedan 3"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Garantía visible: "30 días devolución"</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">🛒 En el Checkout</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Proceso en 1 sola página</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Opción "comprar como invitado"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Mostrar total con envío ANTES</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Badges de seguridad: 🔒 Pago seguro</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>WhatsApp visible: "¿Ayuda?"</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:transform hover:-translate-y-2 transition-all">
              <Star className="w-12 h-12 mx-auto mb-3 text-accent-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Reviews</h3>
              <p className="text-gray-600 dark:text-gray-300">Activa reseñas de clientes</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:transform hover:-translate-y-2 transition-all">
              <Mail className="w-12 h-12 mx-auto mb-3 text-accent-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Follow-up</h3>
              <p className="text-gray-600 dark:text-gray-300">Recupera carritos abandonados</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:transform hover:-translate-y-2 transition-all">
              <Gift className="w-12 h-12 mx-auto mb-3 text-accent-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Upselling</h3>
              <p className="text-gray-600 dark:text-gray-300">"Otros también compraron..."</p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 13: Ejercicio Práctico
    {
      title: "💻 Ejercicio Práctico",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Ejercicio: Tu Primera Tienda WooCommerce (75 min)
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Instalación (15 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Instalar WooCommerce, configurar para Ecuador, verificar páginas creadas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Crear 5 Productos (20 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  1 simple, 1 variable (tallas), 1 variable (talla+color), 1 digital, 1 en oferta
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Configurar Pagos (20 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  PayPal Sandbox, Transferencia bancaria, Contra entrega
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Envíos y Compra Prueba (20 min)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Crear 3 zonas Ecuador, hacer compra completa de prueba, verificar email
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong className="text-accent-600 dark:text-accent-400">✅ Checkpoint Final:</strong> Tienda con 5 productos, 3 métodos de pago activos, 1 pedido de prueba completado
            </p>
          </div>
        </div>
      ),
    },

    // Slide 14: Tarea
    {
      title: "📚 Tarea",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
            Tarea: Tienda Completa (2 horas)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">📦 Parte 1: Productos (60 min)</h3>
              <p className="font-semibold text-gray-900 dark:text-white mb-3">Crear 15 productos:</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Mínimo 10 productos simples
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Mínimo 3 variables
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Mínimo 2 digitales o agrupados
                </li>
              </ul>
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Cada producto debe tener:</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Descripción larga (150+ palabras)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Descripción corta (50 palabras)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  3+ imágenes de calidad
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Precio, SKU, stock correcto
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">⚙️ Parte 2: Config. (30 min)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    4 pasarelas de pago activas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    5 zonas de envío Ecuador
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    3 cupones estratégicos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    2 emails personalizados
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">🎨 Parte 3: Diseño (20 min)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Diseñar 1 página producto con Elementor
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Galería atractiva
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Productos relacionados
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">✅ Parte 4: Pruebas (10 min)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    2 compras de prueba
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Verificar emails
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 15: Próxima Clase
    {
      title: "🚀 Próxima Clase",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">📈</div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400">
            Semana 14
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-300">
            Optimización de Conversiones (CRO)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Aprenderemos:</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Analizar embudos de conversión</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Reducir abandono de carrito</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>A/B Testing de páginas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Estrategias de urgencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Google Analytics + Hotjar</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Prepara para la clase:</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Instala Google Analytics en tu tienda</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Crea cuenta Hotjar (gratis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Completa mínimo 10 ventas de prueba</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <span>Trae datos para analizar</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-700 to-purple-500 text-white p-6 rounded-2xl mt-8">
            <p className="text-xl font-semibold flex items-center justify-center gap-2">
              <Target className="w-6 h-6 text-accent-400" />
              Objetivo próxima clase: Convertir más visitantes en compradores usando datos y estrategias CRO probadas
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
            ITSAE | WooCommerce Semana 13 | ¡Nos vemos la próxima semana!
          </p>
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
          <span className="text-sm text-purple-700 dark:text-purple-400 font-medium">Diapositiva {currentSlide + 1} de {slides.length}</span>
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

export default PresentacionSemana13;
