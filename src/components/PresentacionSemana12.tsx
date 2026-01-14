import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Mail,
  CheckCircle2,
  XCircle,
  BookOpen,
  Target,
  TrendingUp,
  Settings,
  Search,
  Zap,
  Shield,
  BarChart,
  Clock,
  Users,
  MessageSquare,
  Star,
  AlertTriangle,
  Gauge,
  Globe,
  Code,
  Image,
  Smartphone,
  MousePointer,
  Calendar,
  Download,
  Award,
  Phone,
  Upload,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PresentacionSemana12: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    // Slide 1: Portada
    {
      title: "✨ SEMANA 12 ✨",
      subtitle: "Diseño Web para Marketing Digital & E-Commerce",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">📋</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400">
            Formularios, Plugins Esenciales y SEO Técnico
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ITSAE Ecuador | Enero 2026
          </p>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl">
            <p className="text-xl font-semibold flex items-center justify-center gap-2">
              <Target className="w-6 h-6 text-accent-400" />
              Objetivo: Convertir visitantes en clientes con formularios efectivos y SEO optimizado
            </p>
          </div>
          <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
            <span>📅 Enero 2026</span>
            <span>⏱️ 2 horas</span>
            <span>💻 Práctica con Elementor & Plugins</span>
          </div>
        </div>
      ),
    },
    // Slide 2: Objetivos de Aprendizaje
    {
      title: "🎯 Objetivos de Aprendizaje",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <FileText className="w-12 h-12 mx-auto mb-3 text-accent-400" />
              <h3 className="text-xl font-bold mb-2">Formularios</h3>
              <p className="text-sm">Diseñar formularios que convierten</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <Zap className="w-12 h-12 mx-auto mb-3 text-accent-400" />
              <h3 className="text-xl font-bold mb-2">Plugins</h3>
              <p className="text-sm">Seleccionar herramientas esenciales</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <Search className="w-12 h-12 mx-auto mb-3 text-accent-400" />
              <h3 className="text-xl font-bold mb-2">SEO Técnico</h3>
              <p className="text-sm">Optimizar para Google</p>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
              Al finalizar esta clase podrás:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Crear formularios de contacto profesionales con Elementor
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Instalar y configurar plugins esenciales para WordPress
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Optimizar meta tags y estructura para SEO
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                Mejorar Core Web Vitals y velocidad de carga
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    // Slide 3: Importancia de Formularios
    {
      title: "📋 ¿Por Qué los Formularios Son Críticos?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">67%</div>
              <p className="text-lg mt-2">De usuarios abandonan formularios mal diseñados</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">+120%</div>
              <p className="text-lg mt-2">Conversión con formularios optimizados</p>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
              <div className="text-5xl font-extrabold text-accent-400">3-5</div>
              <p className="text-lg mt-2">Campos ideales para máxima conversión</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              El formulario es tu vendedor 24/7
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Punto de contacto principal:</strong> Donde el visitante se convierte en lead
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Captura de datos:</strong> Email, teléfono, necesidades del cliente
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Automatización:</strong> Integra con CRM y email marketing
              </li>
              <li className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <strong>Medición:</strong> Trackea conversiones y optimiza
              </li>
            </ul>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong>💡 Dato clave:</strong> Cada campo adicional reduce conversión en 11%. Pide solo lo esencial.
            </p>
          </div>
        </div>
      ),
    },
    // Slide 4: Principios de Diseño de Formularios
    {
      title: "🎨 Principios de Diseño de Formularios",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                ✅ Buenas Prácticas
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <strong>Mínimo campos:</strong> Solo nombre, email, mensaje
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <strong>Labels claros:</strong> "Tu nombre" mejor que "Nombre"
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <strong>Placeholders útiles:</strong> Ejemplos de qué escribir
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <strong>Botón destacado:</strong> Color primario, texto acción
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <strong>Validación en tiempo real:</strong> Feedback inmediato
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                ❌ Errores Comunes
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <strong>Formularios largos:</strong> +7 campos = abandono
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <strong>CAPTCHA complejo:</strong> Frustra al usuario
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <strong>Sin confirmación:</strong> Usuario no sabe si envió
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <strong>Botón genérico:</strong> "Enviar" vs "Solicitar cotización"
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <strong>No responsive:</strong> Ilegible en móvil
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
            <p className="text-xl font-semibold">
              🎯 Regla de Oro: Cada campo debe justificar su existencia
            </p>
          </div>
        </div>
      ),
    },
    // Slide 5: Tipos de Campos con Elementor
    {
      title: "🔧 Tipos de Campos con Elementor",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Text / Email</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Campos básicos para nombre, email, teléfono</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Uso: Datos de contacto</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Textarea</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Campo largo para mensajes o comentarios</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Uso: Consultas detalladas</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Select / Radio</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Opciones predefinidas para seleccionar</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Uso: Servicios, presupuesto</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Checkbox</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Aceptación de términos o múltiples opciones</p>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mt-2">Uso: GDPR, newsletter</p>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
              Widget Form de Elementor Pro
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              Arrastra el widget "Form" y configura cada campo con:
            </p>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
              <li>• <strong>Type:</strong> Tipo de campo</li>
              <li>• <strong>Label:</strong> Etiqueta visible</li>
              <li>• <strong>Placeholder:</strong> Texto de ejemplo</li>
              <li>• <strong>Required:</strong> Campo obligatorio</li>
              <li>• <strong>Width:</strong> 100%, 50%, 33% (columnas)</li>
            </ul>
          </div>
        </div>
      ),
    },
    // Slide 6: Configuración de Envío
    {
      title: "📧 Configuración de Envío",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Actions After Submit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-primary-600 dark:text-primary-300 mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  1. Email
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• <strong>To:</strong> tu@email.com</li>
                  <li>• <strong>Subject:</strong> Nuevo contacto desde web</li>
                  <li>• <strong>Message:</strong> Usa [field id="nombre"]</li>
                  <li>• <strong>From:</strong> [field id="email"]</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-primary-600 dark:text-primary-300 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  2. Redirect
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Página de agradecimiento</li>
                  <li>• Descarga de PDF</li>
                  <li>• Oferta especial</li>
                  <li>• Tracking de conversión</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-primary-600 dark:text-primary-300 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  3. Webhook
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Integra con Zapier</li>
                  <li>• Conecta con CRM</li>
                  <li>• Automatiza workflows</li>
                  <li>• Sincroniza con Google Sheets</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold text-primary-600 dark:text-primary-300 mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  4. Email 2
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Confirmación al usuario</li>
                  <li>• "Gracias por contactarnos"</li>
                  <li>• Tiempo de respuesta</li>
                  <li>• Próximos pasos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong>💡 Pro Tip:</strong> Siempre envía email de confirmación al usuario. Aumenta confianza y reduce consultas.
            </p>
          </div>
        </div>
      ),
    },
    // Slide 7: Plugins Esenciales de WordPress
    {
      title: "🔌 Plugins Esenciales de WordPress",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-5 rounded-xl">
            <p className="text-lg text-primary-700 dark:text-primary-300">
              <strong>Regla de Oro:</strong> Menos es más. Cada plugin adicional afecta velocidad y seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-accent-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Yoast SEO</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Optimización SEO completa</p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>✓ Meta titles y descriptions</li>
                <li>✓ Análisis de legibilidad</li>
                <li>✓ XML Sitemaps</li>
                <li>✓ Breadcrumbs</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-accent-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Wordfence Security</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Protección contra ataques</p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>✓ Firewall</li>
                <li>✓ Escaneo de malware</li>
                <li>✓ Login security</li>
                <li>✓ Alertas en tiempo real</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-accent-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">WP Rocket</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Caché y optimización</p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>✓ Page caching</li>
                <li>✓ Minificación CSS/JS</li>
                <li>✓ Lazy loading</li>
                <li>✓ CDN integration</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-accent-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Image className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Smush</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Optimización de imágenes</p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>✓ Compresión automática</li>
                <li>✓ Lazy load</li>
                <li>✓ WebP conversion</li>
                <li>✓ Bulk optimization</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-xl text-center">
            <p className="text-lg font-semibold">
              📊 Máximo recomendado: 10-15 plugins activos
            </p>
          </div>
        </div>
      ),
    },
    // Slide 8: Criterios de Selección de Plugins
    {
      title: "✅ Criterios de Selección de Plugins",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Antes de instalar cualquier plugin, verifica:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Calificación:</strong>
                  <p className="text-gray-600 dark:text-gray-300">Mínimo 4.5 estrellas con +1000 reviews</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Clock className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Actualización:</strong>
                  <p className="text-gray-600 dark:text-gray-300">Última actualización hace menos de 3 meses</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Users className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Instalaciones:</strong>
                  <p className="text-gray-600 dark:text-gray-300">+100,000 instalaciones activas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Compatibilidad:</strong>
                  <p className="text-gray-600 dark:text-gray-300">Compatible con tu versión de WordPress</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <MessageSquare className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Soporte:</strong>
                  <p className="text-gray-600 dark:text-gray-300">Respuestas activas en foro de soporte</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Gauge className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-primary-700 dark:text-primary-300">Performance:</strong>
                  <p className="text-gray-600 dark:text-gray-300">No afecta significativamente la velocidad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <strong>⚠️ Señales de Alerta:</strong> Plugin sin actualizar +1 año, calificación baja, pocos usuarios, o muchas quejas de seguridad
            </p>
          </div>
        </div>
      ),
    },
    // Slide 9: SEO Técnico
    {
      title: "🔍 SEO Técnico: Fundamentos",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
            <p className="text-2xl font-bold mb-2">93% del tráfico web viene de Google</p>
            <p className="text-lg">Si no estás en la primera página, no existes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-3">
                <Globe className="w-12 h-12 mx-auto text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-bold text-primary-700 dark:text-primary-400 text-center mb-2">On-Page SEO</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>• Meta titles</li>
                <li>• Meta descriptions</li>
                <li>• Headings (H1-H6)</li>
                <li>• URLs amigables</li>
                <li>• Alt text en imágenes</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-3">
                <Code className="w-12 h-12 mx-auto text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-bold text-primary-700 dark:text-primary-400 text-center mb-2">Technical SEO</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>• Velocidad de carga</li>
                <li>• Mobile-friendly</li>
                <li>• HTTPS/SSL</li>
                <li>• XML Sitemap</li>
                <li>• Robots.txt</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-3">
                <BarChart className="w-12 h-12 mx-auto text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-bold text-primary-700 dark:text-primary-400 text-center mb-2">Content SEO</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>• Keywords relevantes</li>
                <li>• Contenido original</li>
                <li>• Longitud adecuada</li>
                <li>• Enlaces internos</li>
                <li>• Actualización regular</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
              Los 3 Pilares del SEO Técnico
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">1</div>
                <p className="text-gray-700 dark:text-gray-200">Rastreable</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Google puede indexar</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">2</div>
                <p className="text-gray-700 dark:text-gray-200">Rápido</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Carga en &lt;3 segundos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">3</div>
                <p className="text-gray-700 dark:text-gray-200">Mobile-First</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Optimizado para móvil</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 10: Meta Tags Efectivos
    {
      title: "🏷️ Meta Tags Efectivos",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Meta Title (Título SEO)
            </h3>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Ejemplo Correcto:</p>
                <p className="text-gray-700 dark:text-gray-200 font-mono text-sm">
                  Diseño Web Profesional en Ecuador | ITSAE - Desde $299
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  55 caracteres | Incluye keyword + ubicación + beneficio
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Ejemplo Incorrecto:</p>
                <p className="text-gray-700 dark:text-gray-200 font-mono text-sm">
                  Inicio - Mi Sitio Web
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Genérico, sin keywords, no atractivo
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Meta Description
            </h3>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Ejemplo Correcto:</p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  Creamos sitios web profesionales con WordPress y Elementor. Diseño responsive, SEO optimizado y entrega en 15 días. ¡Solicita tu cotización gratis hoy!
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  155 caracteres | Call-to-action + beneficios claros
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Ejemplo Incorrecto:</p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  Bienvenido a nuestro sitio web donde ofrecemos servicios.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Vago, sin keywords, no persuasivo
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong>📏 Límites:</strong> Title 50-60 caracteres | Description 150-160 caracteres
            </p>
          </div>
        </div>
      ),
    },
    // Slide 11: Yoast SEO
    {
      title: "🎯 Yoast SEO: Tu Asistente SEO",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Yoast SEO</h3>
            <p className="text-lg">El plugin SEO más usado del mundo (+5M instalaciones)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Funciones Principales
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <strong>Análisis SEO:</strong> Semáforo verde/amarillo/rojo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <strong>Legibilidad:</strong> Evalúa facilidad de lectura
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <strong>Preview:</strong> Cómo se ve en Google
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <strong>XML Sitemap:</strong> Automático
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <strong>Breadcrumbs:</strong> Navegación estructurada
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Configuración Básica
              </h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent-500">1.</span>
                  <div>
                    <strong>General:</strong> Nombre del sitio y descripción
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent-500">2.</span>
                  <div>
                    <strong>Search Appearance:</strong> Títulos y metas por defecto
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent-500">3.</span>
                  <div>
                    <strong>Social:</strong> Open Graph para redes sociales
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent-500">4.</span>
                  <div>
                    <strong>Tools:</strong> Importar/exportar configuración
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-5 rounded-xl">
            <h3 className="text-lg font-bold text-primary-700 dark:text-primary-400 mb-2">
              Cómo usar Yoast en cada página:
            </h3>
            <ol className="text-gray-700 dark:text-gray-200 space-y-2">
              <li>1. Define tu <strong>Focus Keyword</strong> (palabra clave principal)</li>
              <li>2. Escribe <strong>Meta Title</strong> y <strong>Description</strong> únicos</li>
              <li>3. Sigue las recomendaciones del <strong>semáforo SEO</strong></li>
              <li>4. Apunta a <strong>luz verde</strong> en SEO y Legibilidad</li>
            </ol>
          </div>
        </div>
      ),
    },
    // Slide 12: Core Web Vitals
    {
      title: "⚡ Core Web Vitals: Métricas de Google",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
            <p className="text-xl font-semibold">
              Desde 2021, Google usa Core Web Vitals como factor de ranking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-blue-500">
              <div className="text-center mb-3">
                <Clock className="w-12 h-12 mx-auto text-blue-500" />
              </div>
              <h4 className="font-bold text-primary-700 dark:text-primary-400 text-center mb-2">
                LCP
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                Largest Contentful Paint
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                  <strong>Qué mide:</strong> Tiempo hasta que el contenido principal carga
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ✅ Bueno: &lt; 2.5s
                </p>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                  ⚠️ Mejorar: 2.5-4s
                </p>
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  ❌ Malo: &gt; 4s
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-green-500">
              <div className="text-center mb-3">
                <MousePointer className="w-12 h-12 mx-auto text-green-500" />
              </div>
              <h4 className="font-bold text-primary-700 dark:text-primary-400 text-center mb-2">
                FID
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                First Input Delay
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                  <strong>Qué mide:</strong> Tiempo hasta que el sitio responde a interacción
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ✅ Bueno: &lt; 100ms
                </p>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                  ⚠️ Mejorar: 100-300ms
                </p>
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  ❌ Malo: &gt; 300ms
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-purple-500">
              <div className="text-center mb-3">
                <Gauge className="w-12 h-12 mx-auto text-purple-500" />
              </div>
              <h4 className="font-bold text-primary-700 dark:text-primary-400 text-center mb-2">
                CLS
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                Cumulative Layout Shift
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                  <strong>Qué mide:</strong> Estabilidad visual (elementos que se mueven)
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ✅ Bueno: &lt; 0.1
                </p>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                  ⚠️ Mejorar: 0.1-0.25
                </p>
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  ❌ Malo: &gt; 0.25
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong>🔍 Herramienta:</strong> PageSpeed Insights (pagespeed.web.dev) - Analiza tu sitio gratis
            </p>
          </div>
        </div>
      ),
    },
    // Slide 13: Factores de Velocidad
    {
      title: "🚀 Factores que Afectan la Velocidad",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                ✅ Optimizaciones Clave
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <Image className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Imágenes:</strong> WebP, comprimidas, lazy load
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Caché:</strong> WP Rocket o W3 Total Cache
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Minificación:</strong> CSS/JS comprimidos
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>CDN:</strong> Cloudflare (gratis)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Hosting:</strong> SSD, PHP 8+, HTTP/2
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                ❌ Errores Comunes
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Imágenes pesadas:</strong> PNG de 5MB sin comprimir
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Demasiados plugins:</strong> +20 activos
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Hosting barato:</strong> Compartido sobrecargado
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Sin caché:</strong> Cada visita carga desde cero
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Fuentes externas:</strong> Múltiples Google Fonts
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Impacto de la Velocidad en Conversión
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-2xl font-bold text-red-500">+1s</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">-7% conversión</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-2xl font-bold text-red-500">+2s</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">-15% conversión</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-2xl font-bold text-red-500">+3s</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">32% abandono</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-2xl font-bold text-red-500">+5s</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">90% abandono</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-5 rounded-xl text-center">
            <p className="text-xl font-semibold">
              ⚡ Meta: Carga completa en menos de 3 segundos
            </p>
          </div>
        </div>
      ),
    },
    // Slide 14: Ejercicio Práctico
    {
      title: "💻 Ejercicio Práctico (60 min)",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-accent-400 to-accent-500 text-primary-900 p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Vamos a Implementar Todo</h3>
            <p className="text-lg">Formulario + Plugins + SEO en tu proyecto</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Formulario</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">20 minutos</p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2">
                <li>✓ Crear formulario de contacto</li>
                <li>✓ Campos: nombre, email, mensaje</li>
                <li>✓ Configurar envío a tu email</li>
                <li>✓ Email de confirmación</li>
                <li>✓ Probar funcionamiento</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">Plugins</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">20 minutos</p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2">
                <li>✓ Instalar Yoast SEO</li>
                <li>✓ Instalar Wordfence</li>
                <li>✓ Instalar Smush</li>
                <li>✓ Configuración básica</li>
                <li>✓ Optimizar imágenes</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400">SEO</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">20 minutos</p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2">
                <li>✓ Meta title y description</li>
                <li>✓ Alt text en imágenes</li>
                <li>✓ URLs amigables</li>
                <li>✓ Análisis con Yoast</li>
                <li>✓ Test en PageSpeed</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-5 rounded-xl">
            <p className="text-gray-700 dark:text-gray-200">
              <strong>🎯 Objetivo:</strong> Al finalizar, tu sitio debe tener formulario funcional, plugins esenciales instalados y SEO básico optimizado
            </p>
          </div>
        </div>
      ),
    },
    // Slide 15: Checklist de Verificación
    {
      title: "✅ Checklist de Verificación",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Formularios
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Formulario de contacto funcional
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Máximo 5 campos obligatorios
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Email de confirmación configurado
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Botón con texto de acción claro
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Responsive en móvil
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Plugins
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Yoast SEO instalado y configurado
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Plugin de seguridad activo
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Optimización de imágenes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Máximo 15 plugins totales
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Todos actualizados
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
              <Search className="w-6 h-6" />
              SEO Técnico
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Meta title único en cada página
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Meta description persuasiva
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Alt text en todas las imágenes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ URLs amigables (sin ?p=123)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                ✅ Velocidad &lt; 3 segundos
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    // Slide 16: Tarea Asincrónica
    {
      title: "📝 Tarea Asincrónica (2 horas)",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Optimiza Tu Proyecto Completo</h3>
            <p className="text-lg">Implementa todo lo aprendido en tu sitio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Parte 1: Formularios (45 min)
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">1.</span>
                  <div>Crear formulario de contacto en página dedicada</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">2.</span>
                  <div>Agregar formulario en footer (versión corta)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">3.</span>
                  <div>Configurar emails de confirmación personalizados</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">4.</span>
                  <div>Probar envío y recepción</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">5.</span>
                  <div>Verificar responsive en móvil</div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Parte 2: SEO (45 min)
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">1.</span>
                  <div>Optimizar meta tags de todas las páginas</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">2.</span>
                  <div>Agregar alt text a todas las imágenes</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">3.</span>
                  <div>Configurar URLs amigables</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">4.</span>
                  <div>Optimizar imágenes con Smush</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">5.</span>
                  <div>Test en PageSpeed Insights</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Parte 3: Plugins (30 min)
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Instalar y configurar Yoast SEO
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Instalar Wordfence y hacer escaneo inicial
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Instalar Smush y optimizar todas las imágenes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Revisar y desinstalar plugins innecesarios
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Actualizar todos los plugins a última versión
              </li>
            </ul>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl text-center">
            <p className="text-gray-700 dark:text-gray-200 font-semibold">
              📤 Entregable: URL de tu sitio con formulario funcional y SEO optimizado
            </p>
          </div>
        </div>
      ),
    },
    // Slide 17: Recursos Clave
    {
      title: "📚 Recursos Clave",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Herramientas SEO
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>PageSpeed Insights:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">pagespeed.web.dev</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Search className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Google Search Console:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">search.google.com/search-console</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>GTmetrix:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">gtmetrix.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Ubersuggest:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">neilpatel.com/ubersuggest</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Plugins Recomendados
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Yoast SEO:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">SEO completo (gratis)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Wordfence:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Seguridad (gratis)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Smush:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Optimización imágenes (gratis)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong>WP Rocket:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Caché premium ($49/año)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">
              📖 Documentación Oficial
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-200">
              <div>
                <strong>Elementor Forms:</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">elementor.com/help/form-widget</p>
              </div>
              <div>
                <strong>Yoast SEO:</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">yoast.com/wordpress/plugins/seo</p>
              </div>
              <div>
                <strong>Google SEO Guide:</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">developers.google.com/search/docs</p>
              </div>
              <div>
                <strong>Core Web Vitals:</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">web.dev/vitals</p>
              </div>
            </div>
          </div>

          <div className="bg-accent-100 dark:bg-accent-900/20 border-l-4 border-accent-500 p-5 rounded-xl text-center">
            <p className="text-gray-700 dark:text-gray-200">
              <strong>💡 Tip:</strong> Guarda estos recursos en tus favoritos. Los usarás constantemente.
            </p>
          </div>
        </div>
      ),
    },
    // Slide 18: Próxima Clase
    {
      title: "🚀 Próxima Clase: Semana 13",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl">🎯</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400">
            Integración con Redes Sociales y Analytics
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-700 to-primary-500 text-white p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">¿Qué veremos?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  Google Analytics 4
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Instalación y configuración</li>
                  <li>• Eventos y conversiones</li>
                  <li>• Análisis de tráfico</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Redes Sociales
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Facebook Pixel</li>
                  <li>• Instagram Shopping</li>
                  <li>• Botones de compartir</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <BarChart className="w-10 h-10 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
              <h4 className="font-bold text-primary-700 dark:text-primary-400 mb-2">Medición</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Trackea cada visita y conversión
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <Users className="w-10 h-10 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
              <h4 className="font-bold text-primary-700 dark:text-primary-400 mb-2">Audiencia</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Conoce a tus visitantes
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
              <h4 className="font-bold text-primary-700 dark:text-primary-400 mb-2">Optimización</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mejora basada en datos
              </p>
            </div>
          </div>

          <div className="bg-accent-400 p-6 rounded-2xl">
            <p className="text-primary-900 text-xl font-bold">
              📊 "Lo que no se mide, no se puede mejorar"
            </p>
          </div>
        </div>
      ),
    },
    // Slide 19: Cierre
    {
      title: "🎓 ¡Excelente Trabajo!",
      content: (
        <div className="text-center space-y-8">
          <div className="text-7xl">🎉</div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400">
            Semana 12 Completada
          </h2>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-700 to-primary-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Hoy Aprendiste:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <FileText className="w-10 h-10 mx-auto mb-2" />
                <p className="font-semibold">Formularios</p>
                <p className="text-sm">Que convierten</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <Zap className="w-10 h-10 mx-auto mb-2" />
                <p className="font-semibold">Plugins</p>
                <p className="text-sm">Esenciales</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <Search className="w-10 h-10 mx-auto mb-2" />
                <p className="font-semibold">SEO</p>
                <p className="text-sm">Técnico</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              Recuerda para la Tarea:
            </h3>
            <ul className="text-left space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Implementar formulario de contacto funcional
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Instalar y configurar plugins esenciales
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Optimizar SEO de todas las páginas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                Probar velocidad con PageSpeed Insights
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">
              💪 ¡Tu sitio está cada vez más profesional!
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 italic">
              "Un sitio sin formulario es como una tienda sin puerta de entrada"
            </p>
          </div>

          <div className="bg-gradient-to-r from-accent-400 to-accent-500 p-6 rounded-2xl">
            <p className="text-primary-900 text-xl font-bold">
              📧 ¿Preguntas? Escríbeme por el aula virtual
            </p>
          </div>

          <div className="text-gray-500 dark:text-gray-400">
            <p>ITSAE Ecuador | Enero 2026</p>
            <p className="text-sm mt-2">Diseño Web para Marketing Digital & E-Commerce</p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      {/* Slide Container */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Decorative Header Bar */}
          <div className="h-2 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600"></div>

          {/* Logo */}
          <div className="absolute top-6 right-8 text-primary-700 dark:text-primary-400 font-bold text-lg z-10">
            ITSAE
          </div>

          {/* Content */}
          <div className="p-6 md:p-12 min-h-[70vh]">
            <h1 className="text-2xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 mb-2">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-accent-600 dark:text-accent-400 font-semibold uppercase tracking-wide mb-6">
                {slides[currentSlide].subtitle}
              </p>
            )}
            <div className="mt-6">{slides[currentSlide].content}</div>
          </div>

          {/* Footer */}
          <div className="px-8 pb-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>
              {currentSlide + 1}/{slides.length}
            </span>
            <span>Semana 12 - Formularios, Plugins y SEO</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-50 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:from-primary-700 hover:to-primary-600"
          >
            {currentSlide === slides.length - 1 ? "🎉 Finalizar" : "Siguiente"}
            {currentSlide < slides.length - 1 && <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-accent-500 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresentacionSemana12;
