import React, { useState, useEffect } from 'react';

/**
 * Presentación Semana 15: Email Marketing, Analytics y Publicación Web
 * Componente de presentación interactiva con navegación por slides
 * Usando colores del tema ITSAE con soporte completo para dark/light mode
 */
const PresentacionSemana15: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="w-full h-screen bg-primary-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Slide Container */}
      <div className="w-full h-full relative">
        
        {/* Slide 1: Portada */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-accent-400 dark:text-accent-300 drop-shadow-lg">📧 Email Marketing, Analytics y Publicación Web</h1>
            <p className="text-2xl text-accent-200 dark:text-accent-200 mb-8">Semana 15 - Cierre de Asignatura</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent-300 dark:text-accent-200">🎯 Objetivos de Hoy:</h3>
                <ul className="text-base space-y-1 text-white dark:text-gray-100">
                  <li>• Configurar email marketing profesional</li>
                  <li>• Implementar tracking con GA4 y Meta Pixel</li>
                  <li>• Publicar sitio web en producción</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent-300 dark:text-accent-200">⏱️ Estructura:</h3>
                <ul className="text-base space-y-1 text-white dark:text-gray-100">
                  <li><span className="bg-accent-500 dark:bg-accent-400 text-primary-900 dark:text-primary-800 px-2 py-1 rounded font-bold text-sm">40 min</span> - Mailchimp</li>
                  <li><span className="bg-accent-500 dark:bg-accent-400 text-primary-900 dark:text-primary-800 px-2 py-1 rounded font-bold text-sm">40 min</span> - Analytics</li>
                  <li><span className="bg-accent-500 dark:bg-accent-400 text-primary-900 dark:text-primary-800 px-2 py-1 rounded font-bold text-sm">40 min</span> - Publicación</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-4 left-8 right-8 flex justify-between items-center text-xs text-primary-200 dark:text-primary-300">
              <span className="text-accent-400 dark:text-accent-300 font-bold">ITSAE - Marketing Digital</span>
              <span>Febrero 2026</span>
            </div>
          </div>
        </div>

        {/* Slide 2: Email Marketing - Por qué */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">2/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">💰 ¿Por qué Email Marketing?</h2>
            <div className="text-6xl font-bold text-center text-accent-400 dark:text-accent-300 my-6">$42</div>
            <p className="text-2xl text-center text-accent-200 dark:text-accent-200 mb-8">Por cada $1 invertido</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🎯 Mayor ROI</h4>
                <p className="text-base text-white dark:text-gray-100">4200% de retorno promedio</p>
              </div>
              <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">👥 Tú eres dueño</h4>
                <p className="text-base text-white dark:text-gray-100">No dependes de algoritmos</p>
              </div>
              <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">📈 Conversión 4x mayor</h4>
                <p className="text-base text-white dark:text-gray-100">Vs. redes sociales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Configuración Mailchimp */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">3/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">📧 Configuración Mailchimp</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Paso a Paso:</h3>
                <div className="space-y-3">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">1. Crear cuenta gratuita</p>
                    <p className="text-sm text-white dark:text-gray-100">mailchimp.com - Plan Free (2,000 contactos)</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">2. Verificar dominio</p>
                    <p className="text-sm text-white dark:text-gray-100">Settings → Domains → Add Domain</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">3. Crear audiencia</p>
                    <p className="text-sm text-white dark:text-gray-100">Audience → Create Audience</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">🎯 Datos Importantes</h4>
                <ul className="text-base space-y-2 text-white dark:text-gray-100">
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Plan Free:</span> 2,000 contactos</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Envíos:</span> 10,000/mes</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Automatización:</span> Básica incluida</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Reportes:</span> Completos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: Formularios de Suscripción */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">4/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">📝 Formularios de Suscripción</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Tipos de Formularios:</h3>
                <div className="space-y-3">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🎯 Pop-up</h4>
                    <p className="text-base text-white dark:text-gray-100">Conversión: 3-9%</p>
                    <p className="text-sm text-primary-200 dark:text-primary-300">Mejor para ofertas especiales</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">📄 Inline</h4>
                    <p className="text-base text-white dark:text-gray-100">Conversión: 1-3%</p>
                    <p className="text-sm text-primary-200 dark:text-primary-300">Integrado en contenido</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🔗 Landing Page</h4>
                    <p className="text-base text-white dark:text-gray-100">Conversión: 15-25%</p>
                    <p className="text-sm text-primary-200 dark:text-primary-300">Página dedicada</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">✅ Mejores Prácticas</h4>
                <ul className="text-base space-y-2 text-white dark:text-gray-100">
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Título claro:</span> "Recibe ofertas exclusivas"</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Beneficio:</span> Qué van a recibir</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Frecuencia:</span> "Semanal, sin spam"</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">CTA potente:</span> "Quiero mi descuento"</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Campos mínimos:</span> Solo email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5: Automatizaciones */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 4 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">5/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">🤖 Automatizaciones Esenciales</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-3">👋 Welcome Series</h4>
                <p className="text-sm text-white dark:text-gray-100 mb-2">3-5 emails automáticos</p>
                <ul className="text-xs space-y-1 text-primary-200 dark:text-primary-300">
                  <li>• Email 1: Bienvenida + regalo</li>
                  <li>• Email 2: Historia de marca</li>
                  <li>• Email 3: Productos populares</li>
                  <li>• Email 4: Testimonios</li>
                  <li>• Email 5: Oferta especial</li>
                </ul>
              </div>
              <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-3">🛒 Carrito Abandonado</h4>
                <p className="text-sm text-white dark:text-gray-100 mb-2">Recupera 15-30% ventas</p>
                <ul className="text-xs space-y-1 text-primary-200 dark:text-primary-300">
                  <li>• 1 hora: "¿Olvidaste algo?"</li>
                  <li>• 24 horas: Recordatorio + urgencia</li>
                  <li>• 72 horas: Descuento 10%</li>
                  <li>• 7 días: Última oportunidad</li>
                </ul>
              </div>
              <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-3">🎂 Fechas Especiales</h4>
                <p className="text-sm text-white dark:text-gray-100 mb-2">Personalización avanzada</p>
                <ul className="text-xs space-y-1 text-primary-200 dark:text-primary-300">
                  <li>• Cumpleaños: Descuento especial</li>
                  <li>• Aniversario: Regalo sorpresa</li>
                  <li>• Navidad: Ofertas temáticas</li>
                  <li>• Black Friday: Promociones</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 p-4 rounded-xl">
              <p className="text-accent-400 dark:text-accent-300 font-bold text-lg">💡 Tip Pro: Las automatizaciones generan 320% más ingresos que emails manuales</p>
            </div>
          </div>
        </div>

        {/* Slide 6: Google Analytics 4 */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 5 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">6/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">📊 Google Analytics 4 Setup</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Configuración Básica:</h3>
                <div className="space-y-3">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">1. Crear propiedad GA4</p>
                    <p className="text-sm text-white dark:text-gray-100">analytics.google.com → Admin → Create Property</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">2. Instalar código tracking</p>
                    <p className="text-sm text-white dark:text-gray-100">Plugin GA4 o código manual en header</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">3. Configurar objetivos</p>
                    <p className="text-sm text-white dark:text-gray-100">Conversiones → Events → Mark as conversion</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">🎯 Eventos Clave E-Commerce</h4>
                <ul className="text-base space-y-2 text-white dark:text-gray-100">
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">purchase:</span> Compras completadas</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">add_to_cart:</span> Productos agregados</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">begin_checkout:</span> Inicio checkout</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">view_item:</span> Páginas producto</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">generate_lead:</span> Formularios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 7: Meta Pixel */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 6 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">7/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">📱 Meta Pixel (Facebook/Instagram)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">¿Por qué es crucial?</h3>
                <div className="space-y-4">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🎯 Retargeting</h4>
                    <p className="text-base text-white dark:text-gray-100">Mostrar anuncios a visitantes que no compraron</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">👥 Lookalike</h4>
                    <p className="text-base text-white dark:text-gray-100">Encontrar clientes similares a los actuales</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">📊 Optimización</h4>
                    <p className="text-base text-white dark:text-gray-100">Algoritmo aprende de conversiones reales</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">⚙️ Instalación</h4>
                <div className="space-y-3 text-sm text-white dark:text-gray-100">
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">1.</span> business.facebook.com → Events Manager</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">2.</span> Create Pixel → Copy Pixel ID</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">3.</span> WordPress: Plugin "PixelYourSite"</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">4.</span> Verificar con Facebook Pixel Helper</p>
                </div>
                <div className="mt-4 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 p-3 rounded-lg">
                  <p className="text-accent-400 dark:text-accent-300 font-bold text-sm">💡 Instalar ANTES de hacer publicidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 8: Eventos de Conversión */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 7 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">8/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">🎯 Eventos de Conversión</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Meta Pixel Events:</h3>
                <div className="space-y-3">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">Purchase</p>
                    <p className="text-sm text-white dark:text-gray-100">Compra completada + valor</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">AddToCart</p>
                    <p className="text-sm text-white dark:text-gray-100">Producto agregado al carrito</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">InitiateCheckout</p>
                    <p className="text-sm text-white dark:text-gray-100">Inicio proceso de pago</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">Lead</p>
                    <p className="text-sm text-white dark:text-gray-100">Formulario completado</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">📊 Métricas Importantes</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">ROAS objetivo:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">3:1 mínimo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">CPM promedio:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">$3-8 USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">CTR objetivo:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">1.5%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">Conversión:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">2-5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 9: Hosting y Dominios */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 8 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">9/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">🌐 Hosting y Dominios</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Opciones Recomendadas:</h3>
                <div className="space-y-4">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🚀 SiteGround</h4>
                    <p className="text-sm text-white dark:text-gray-100">Desde $3.99/mes - Optimizado WordPress</p>
                    <p className="text-xs text-primary-200 dark:text-primary-300">SSL gratis, CDN, soporte 24/7</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">⚡ Cloudflare</h4>
                    <p className="text-sm text-white dark:text-gray-100">CDN gratis + seguridad</p>
                    <p className="text-xs text-primary-200 dark:text-primary-300">Acelera sitio globalmente</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🌍 Namecheap</h4>
                    <p className="text-sm text-white dark:text-gray-100">Dominios desde $8.88/año</p>
                    <p className="text-xs text-primary-200 dark:text-primary-300">Privacidad WHOIS incluida</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">✅ Checklist Pre-Launch</h4>
                <ul className="text-base space-y-2 text-white dark:text-gray-100">
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">SSL:</span> Certificado instalado</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Backup:</span> Automático configurado</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">CDN:</span> Cloudflare activo</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Cache:</span> Plugin optimización</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Seguridad:</span> Wordfence instalado</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Analytics:</span> GA4 + Pixel funcionando</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 10: Migración WordPress */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 9 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">10/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">📦 Migración WordPress</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Métodos de Migración:</h3>
                <div className="space-y-4">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🔧 Plugin Duplicator</h4>
                    <p className="text-sm text-white dark:text-gray-100">Método más fácil y confiable</p>
                    <p className="text-xs text-primary-200 dark:text-primary-300">Crea paquete completo del sitio</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">☁️ All-in-One WP Migration</h4>
                    <p className="text-sm text-white dark:text-gray-100">Alternativa simple</p>
                    <p className="text-xs text-primary-200 dark:text-primary-300">Límite 512MB versión gratuita</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">💻 Manual (FTP)</h4>
                    <p className="text-sm text-white dark:text-gray-100">Para sitios grandes</p>
                    <p className="text-xs text-primary-200 dark:text-primary-300">Archivos + Base de datos</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">📋 Proceso Duplicator</h4>
                <div className="space-y-2 text-sm text-white dark:text-gray-100">
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">1.</span> Instalar Duplicator en sitio local</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">2.</span> Crear paquete (archive.zip + installer.php)</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">3.</span> Subir archivos a hosting vía FTP</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">4.</span> Ejecutar installer.php en navegador</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">5.</span> Configurar base de datos</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">6.</span> Actualizar URLs y paths</p>
                  <p><span className="text-accent-400 dark:text-accent-300 font-bold">7.</span> Eliminar archivos instalador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 11: Optimización Performance */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 10 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">11/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">⚡ Optimización Performance</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Plugins Esenciales:</h3>
                <div className="space-y-3">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">WP Rocket</p>
                    <p className="text-sm text-white dark:text-gray-100">Cache + minificación + lazy loading</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">Smush</p>
                    <p className="text-sm text-white dark:text-gray-100">Compresión automática imágenes</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">Cloudflare</p>
                    <p className="text-sm text-white dark:text-gray-100">CDN global + seguridad</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">🎯 Métricas Objetivo</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">PageSpeed Score:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">80+ puntos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">Tiempo carga:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">&lt; 3 segundos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">First Paint:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">&lt; 1.5s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white dark:text-gray-100">LCP:</span>
                    <span className="text-accent-400 dark:text-accent-300 font-bold">&lt; 2.5s</span>
                  </div>
                </div>
                <div className="mt-4 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 p-3 rounded-lg">
                  <p className="text-accent-400 dark:text-accent-300 font-bold text-sm">💡 1 segundo más lento = 7% menos conversiones</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 12: SEO Técnico */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 11 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">12/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">🔍 SEO Técnico Final</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Checklist Técnico:</h3>
                <div className="space-y-3">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">✅ Sitemap XML</p>
                    <p className="text-sm text-white dark:text-gray-100">Yoast genera automáticamente</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">✅ Robots.txt</p>
                    <p className="text-sm text-white dark:text-gray-100">Permitir indexación completa</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">✅ Search Console</p>
                    <p className="text-sm text-white dark:text-gray-100">Verificar propiedad + enviar sitemap</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">✅ Schema Markup</p>
                    <p className="text-sm text-white dark:text-gray-100">Datos estructurados productos</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">🎯 Herramientas Verificación</h4>
                <ul className="text-base space-y-2 text-white dark:text-gray-100">
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">PageSpeed Insights:</span> Performance</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Mobile-Friendly Test:</span> Responsivo</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Rich Results Test:</span> Schema</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">SSL Checker:</span> Certificado</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">GTmetrix:</span> Análisis completo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 13: Monitoreo y Mantenimiento */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 12 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">13/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">📊 Monitoreo y Mantenimiento</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Rutina Semanal:</h3>
                <div className="space-y-3">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">📈 Analytics Review</p>
                    <p className="text-sm text-white dark:text-gray-100">Tráfico, conversiones, páginas top</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">🔄 Backup Check</p>
                    <p className="text-sm text-white dark:text-gray-100">Verificar respaldos automáticos</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">🛡️ Security Scan</p>
                    <p className="text-sm text-white dark:text-gray-100">Wordfence + actualizaciones</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-3 rounded-lg border-l-4 border-accent-400 dark:border-accent-300">
                    <p className="text-accent-400 dark:text-accent-300 font-semibold">⚡ Performance Test</p>
                    <p className="text-sm text-white dark:text-gray-100">PageSpeed + GTmetrix</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">🚨 Alertas Configurar</h4>
                <ul className="text-base space-y-2 text-white dark:text-gray-100">
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Uptime Monitor:</span> UptimeRobot</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">GA4 Alerts:</span> Caída tráfico 20%</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Search Console:</span> Errores indexación</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Email Reports:</span> Semanal automático</li>
                </ul>
                <div className="mt-4 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 p-3 rounded-lg">
                  <p className="text-accent-400 dark:text-accent-300 font-bold text-sm">💡 Prevenir es mejor que reparar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 14: Próximos Pasos */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 13 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">14/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">🚀 Próximos Pasos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Continúa Aprendiendo:</h3>
                <div className="space-y-4">
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">📚 Especialización</h4>
                    <p className="text-sm text-white dark:text-gray-100">E-commerce avanzado, UX/UI, Marketing Automation</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">🎯 Certificaciones</h4>
                    <p className="text-sm text-white dark:text-gray-100">Google Ads, Facebook Blueprint, HubSpot</p>
                  </div>
                  <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 p-4 rounded-xl border-l-4 border-accent-400 dark:border-accent-300">
                    <h4 className="text-accent-400 dark:text-accent-300 text-lg font-semibold mb-2">💼 Práctica Real</h4>
                    <p className="text-sm text-white dark:text-gray-100">Proyectos propios, freelancing, agencia</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-700 bg-opacity-30 dark:bg-primary-800 dark:bg-opacity-40 p-6 rounded-xl">
                <h4 className="text-accent-400 dark:text-accent-300 text-xl font-semibold mb-4">🌟 Tu Futuro Profesional</h4>
                <ul className="text-base space-y-2 text-white dark:text-gray-100">
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Freelancer:</span> $15-50/hora</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Especialista Digital:</span> $800-2000/mes</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Consultor:</span> $50-150/hora</li>
                  <li>• <span className="text-accent-400 dark:text-accent-300 font-bold">Agencia Propia:</span> $3000+/mes</li>
                </ul>
                <div className="mt-4 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 p-3 rounded-lg">
                  <p className="text-accent-400 dark:text-accent-300 font-bold text-sm">💡 El marketing digital nunca para de crecer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 15: Evaluación Final */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 14 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 text-white p-8 flex flex-col justify-center">
            <div className="absolute top-4 right-8 bg-accent-500 bg-opacity-20 dark:bg-accent-400 dark:bg-opacity-30 px-3 py-1 rounded-full text-accent-400 dark:text-accent-300 font-bold text-sm">15/15</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent-400 dark:text-accent-300 border-b-4 border-accent-400 dark:border-accent-300 pb-3">🎓 Evaluación Final - 10 Febrero</h2>
            <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">Proyecto Final (100 puntos):</h3>
            <div className="bg-primary-700 bg-opacity-50 dark:bg-primary-800 dark:bg-opacity-60 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-accent-500 bg-opacity-30 dark:bg-accent-400 dark:bg-opacity-40 text-accent-400 dark:text-accent-300">
                    <th className="p-3 text-left font-semibold">Criterio</th>
                    <th className="p-3 text-left font-semibold">Puntos</th>
                    <th className="p-3 text-left font-semibold">Incluye</th>
                  </tr>
                </thead>
                <tbody className="text-white dark:text-gray-100">
                  <tr className="border-b border-primary-500 dark:border-primary-400">
                    <td className="p-2">Participación</td>
                    <td className="p-2">20%</td>
                    <td className="p-2">Asistencia + ejercicios</td>
                  </tr>
                  <tr className="border-b border-primary-500 dark:border-primary-400">
                    <td className="p-2">Funcionalidad</td>
                    <td className="p-2">25%</td>
                    <td className="p-2">Plugins, forms, SEO, analytics</td>
                  </tr>
                  <tr className="border-b border-primary-500 dark:border-primary-400">
                    <td className="p-2">Diseño Responsivo</td>
                    <td className="p-2">25%</td>
                    <td className="p-2">Móvil, tablet, desktop</td>
                  </tr>
                  <tr className="border-b border-primary-500 dark:border-primary-400">
                    <td className="p-2">Performance</td>
                    <td className="p-2">20%</td>
                    <td className="p-2">PageSpeed ≥80</td>
                  </tr>
                  <tr>
                    <td className="p-2">Publicación</td>
                    <td className="p-2">10%</td>
                    <td className="p-2">Sitio en vivo + docs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-accent-200 dark:text-accent-200">🎉 ¡Lo que ahora sabes hacer!</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ul className="text-base space-y-1 text-white dark:text-gray-100">
                <li>✅ Crear sitios WordPress profesionales</li>
                <li>✅ Diseñar landing pages efectivas</li>
                <li>✅ Optimizar para SEO</li>
                <li>✅ Construir tiendas WooCommerce</li>
              </ul>
              <ul className="text-base space-y-1 text-white dark:text-gray-100">
                <li>✅ Email marketing automatizado</li>
                <li>✅ Tracking con Analytics</li>
                <li>✅ Publicar sitios en producción</li>
                <li>✅ Optimizar para conversión</li>
              </ul>
            </div>
            <div className="absolute bottom-4 left-8 right-8 flex justify-between items-center text-xs text-primary-200 dark:text-primary-300">
              <span className="text-accent-400 dark:text-accent-300 font-bold">ITSAE - ¡Felicitaciones!</span>
              <span>Marketing Digital 2026</span>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Controls - Con soporte dark/light */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-primary-900 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-90 px-4 py-2 rounded-lg border border-accent-500 dark:border-accent-400">
        <button
          onClick={previousSlide}
          className="bg-accent-500 dark:bg-accent-400 text-primary-900 dark:text-primary-800 px-3 py-1 rounded text-sm font-bold hover:bg-accent-400 dark:hover:bg-accent-300 transition-all"
        >
          ◀ Anterior
        </button>
        
        {/* Slide Indicators */}
        <div className="flex gap-1">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === i 
                  ? 'bg-accent-400 dark:bg-accent-300' 
                  : 'bg-primary-300 dark:bg-primary-400 hover:bg-primary-200 dark:hover:bg-primary-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="bg-accent-500 dark:bg-accent-400 text-primary-900 dark:text-primary-800 px-3 py-1 rounded text-sm font-bold hover:bg-accent-400 dark:hover:bg-accent-300 transition-all"
        >
          Siguiente ▶
        </button>
      </div>

      {/* Click Navigation */}
      <div 
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const centerX = rect.width / 2;
          
          if (x > centerX) {
            nextSlide();
          } else {
            previousSlide();
          }
        }}
      />
    </div>
  );
};

export default PresentacionSemana15;