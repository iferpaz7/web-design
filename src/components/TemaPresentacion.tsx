import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import type { SyllabusTema, SyllabusUnit } from '../data/syllabus';

interface TemaPresentacionProps {
  unit: SyllabusUnit;
  tema: SyllabusTema;
  mode?: 'embedded' | 'standalone';
}

interface Slide {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const themeByColor = {
  amber: {
    shell: 'from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800',
    hero: 'from-amber-600 to-orange-500 dark:from-amber-700 dark:to-orange-600',
    panel: 'bg-amber-50 dark:bg-amber-950/20 border-amber-400',
    accentText: 'text-amber-700 dark:text-amber-300',
    badge: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200'
  },
  blue: {
    shell: 'from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800',
    hero: 'from-blue-700 to-cyan-600 dark:from-blue-800 dark:to-cyan-700',
    panel: 'bg-blue-50 dark:bg-blue-950/20 border-blue-400',
    accentText: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200'
  },
  emerald: {
    shell: 'from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800',
    hero: 'from-emerald-700 to-teal-600 dark:from-emerald-800 dark:to-teal-700',
    panel: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-400',
    accentText: 'text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200'
  },
  purple: {
    shell: 'from-purple-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800',
    hero: 'from-purple-700 to-fuchsia-600 dark:from-purple-800 dark:to-fuchsia-700',
    panel: 'bg-purple-50 dark:bg-purple-950/20 border-purple-400',
    accentText: 'text-purple-700 dark:text-purple-300',
    badge: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200'
  }
} as const;

const TemaPresentacion: React.FC<TemaPresentacionProps> = ({ unit, tema, mode = 'embedded' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const styles = themeByColor[unit.color];
  const isStandalone = mode === 'standalone';

  const continuity = useMemo(() => {
    const nextTema = unit.temas.find((item) => item.numero === tema.numero + 1);
    if (nextTema) {
      return `Siguiente tema: ${nextTema.titulo}.`;
    }

    if (unit.numero < 4) {
      return `Este tema cierra la Unidad ${unit.numero}. El siguiente paso es avanzar a la Unidad ${unit.numero + 1}.`;
    }

    return 'Este tema cierra la última unidad y prepara la entrega final y la evaluación bimestral.';
  }, [tema.numero, unit.numero, unit.temas]);

  const teachingSlides = useMemo(() => (
    tema.presentationBlocks?.map((block) => ({
      title: block.title,
      subtitle: 'Bloque didáctico migrado al sílabo central',
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item, index) => (
            <div key={item} className={`rounded-2xl border p-5 ${styles.panel}`}>
              <div className="flex items-start gap-4">
                <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${styles.badge}`}>
                  {index + 1}
                </span>
                <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">{item}</p>
              </div>
            </div>
          ))}
        </div>
      )
    })) ?? []
  ), [styles.badge, styles.panel, tema.presentationBlocks]);

  const slides: Slide[] = useMemo(() => [
    {
      title: tema.titulo,
      subtitle: `Unidad ${unit.numero} · Tema ${tema.numero}`,
      content: (
        <div className="text-center space-y-6">
          <div className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${styles.badge}`}>
            Modo presentacion web
          </div>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">{tema.panorama}</p>
          <div className="grid gap-4 md:grid-cols-3 text-left">
            <div className={`rounded-2xl border p-5 ${styles.panel}`}>
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Unidad</p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-white">{unit.titulo}</p>
            </div>
            <div className={`rounded-2xl border p-5 ${styles.panel}`}>
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Resultado esperado</p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-white">{tema.evidencia}</p>
            </div>
            <div className={`rounded-2xl border p-5 ${styles.panel}`}>
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Actividad central</p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-white">{tema.actividad}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Objetivos de aprendizaje',
      subtitle: 'Lo que debe quedar claro al finalizar la sesion',
      content: (
        <div className="space-y-4">
          {tema.objetivos.map((objetivo, index) => (
            <div key={objetivo} className={`rounded-2xl border p-5 ${styles.panel}`}>
              <div className="flex items-start gap-4">
                <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${styles.badge}`}>
                  {index + 1}
                </span>
                <p className="text-lg text-gray-800 dark:text-gray-200">{objetivo}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Ideas clave',
      subtitle: 'Conceptos que deben dirigir la explicacion',
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          {tema.ideasClave.map((idea) => (
            <div key={idea} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <p className={`mb-3 text-sm font-semibold uppercase tracking-wide ${styles.accentText}`}>Clave didactica</p>
              <p className="text-lg text-gray-800 dark:text-gray-200">{idea}</p>
            </div>
          ))}
        </div>
      )
    },
    ...teachingSlides,
    {
      title: 'Relacion con la unidad',
      subtitle: 'Como se conecta este tema con el resultado formativo',
      content: (
        <div className="grid gap-5 lg:grid-cols-2">
          <div className={`rounded-2xl border p-6 ${styles.panel}`}>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Capacidad de la unidad</p>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-200">{unit.capacidad}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Evidencia de la unidad</p>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-200">{unit.evidencia}</p>
          </div>
        </div>
      )
    },
    {
      title: 'Actividad y evidencia',
      subtitle: 'Que se hace en clase y que se espera como producto',
      content: (
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <p className={`mb-3 text-sm font-semibold uppercase tracking-wide ${styles.accentText}`}>Actividad sugerida</p>
            <p className="text-lg text-gray-800 dark:text-gray-200">{tema.actividad}</p>
          </div>
          <div className={`rounded-2xl border p-6 ${styles.panel}`}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Criterio de evidencia</p>
            <p className="text-lg text-gray-800 dark:text-gray-200">{tema.evidencia}</p>
          </div>
        </div>
      )
    },
    {
      title: 'Herramientas de trabajo',
      subtitle: 'Recursos y apoyos que hacen viable la clase',
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          {tema.herramientas.map((herramienta) => (
            <div key={herramienta} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-base text-gray-800 dark:text-gray-200">{herramienta}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Cierre y continuidad',
      subtitle: 'Como enlazar la sesion con el resto del curso',
      content: (
        <div className="space-y-5">
          <div className={`rounded-2xl border p-6 ${styles.panel}`}>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Este tema forma parte del sílabo actualizado del curso y mantiene una secuencia de trabajo centrada en estrategia, prototipado, publicacion viable y mejora continua.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <p className={`mb-3 text-sm font-semibold uppercase tracking-wide ${styles.accentText}`}>Proximo paso</p>
            <p className="text-lg text-gray-800 dark:text-gray-200">{continuity}</p>
          </div>
        </div>
      )
    }
  ], [continuity, styles.accentText, styles.badge, styles.panel, teachingSlides, tema.actividad, tema.evidencia, tema.herramientas, tema.ideasClave, tema.objetivos, tema.panorama, tema.titulo, unit.capacidad, unit.evidencia, unit.numero, unit.titulo]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }

      if (event.key.toLowerCase() === 'f') {
        void toggleFullscreen();
      }

      if (event.key === 'Home') {
        setCurrentSlide(0);
      }

      if (event.key === 'End') {
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => document.removeEventListener('fullscreenchange', syncFullscreen);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  };

  const current = slides[currentSlide];

  return (
    <div className={`${isStandalone ? 'min-h-[calc(100vh-10rem)]' : 'min-h-195'} rounded-[28px] bg-linear-to-br ${styles.shell} shadow-2xl transition-colors duration-300`}>
      <div className={`bg-linear-to-r ${styles.hero} rounded-t-[28px] px-5 py-4 text-white sm:px-8 sm:py-5`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Unidad {unit.numero} · Tema {tema.numero}</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{current.title}</h2>
            {current.subtitle && <p className="mt-2 text-sm text-white/80 sm:text-base">{current.subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            {isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Diapositiva {currentSlide + 1} de {slides.length}</p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            <span className="rounded-full bg-white/70 px-3 py-1 dark:bg-gray-800/70">Flechas: navegar</span>
            {isStandalone && <span className="rounded-full bg-white/70 px-3 py-1 dark:bg-gray-800/70">F: pantalla completa</span>}
            {isStandalone && <span className="rounded-full bg-white/70 px-3 py-1 dark:bg-gray-800/70">Home/End: inicio y cierre</span>}
          </div>
        </div>

        <div className={`${isStandalone ? 'min-h-[60vh]' : 'min-h-130'} rounded-3xl border border-white/60 bg-white/80 p-5 shadow-lg backdrop-blur dark:border-gray-700/60 dark:bg-gray-900/80 sm:p-8`}>
          {current.content}
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-gray-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${currentSlide === index ? 'w-10 bg-gray-900 dark:bg-white' : 'w-3 bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-gray-900"
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemaPresentacion;