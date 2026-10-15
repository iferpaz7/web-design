import React from 'react';
import {
  ArrowUp,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Laptop,
  Layers,
  MapPin,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  institutionName?: string;
  courseName?: string;
  year?: number;
}

/**
 * Componente Footer institucional ITSAE
 * Ocupa todo el ancho de pantalla de forma armónica y equilibrada
 * Estructurado al estilo de portales universitarios y plataformas educativas modernas
 */
const Footer: React.FC<FooterProps> = ({
  institutionName = 'Instituto Tecnológico Superior Adventista del Ecuador',
  courseName = 'Diseño Web para Marketing Digital',
  year = new Date().getFullYear()
}) => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-16 w-full border-t border-slate-200/90 bg-slate-950 text-slate-300 transition-colors duration-300 dark:border-slate-800">
      {/* Pre-footer Banner: Pilares Institucionales y Pedagógicos */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="mx-auto w-full max-w-[1920px] px-4 py-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3.5">
              <div className="bg-primary-900/80 text-primary-300 ring-primary-700/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Educación Adventista
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Formación integral que une rigor técnico, valores éticos y
                  vocación de servicio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950/80 text-emerald-400 ring-1 ring-emerald-800/50">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Aprendizaje Aplicado
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  4 unidades formativas, 15 temas prácticos y 1 proyecto web
                  integrador defendible.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-950/80 text-amber-400 ring-1 ring-amber-800/50">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Inclusión WCAG 2.1
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Compromiso con la accesibilidad universal y rechazo a los
                  patrones oscuros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-950/80 text-purple-400 ring-1 ring-purple-800/50">
                <Laptop className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Publicación No-Code Viable
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Diseño y despliegue con herramientas modernas sin depender de
                  licencias privativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Full-Width Footer Content Grid */}
      <div className="mx-auto w-full max-w-[1920px] px-4 py-12 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 xl:gap-12">
          {/* Columna 1: Identidad Institucional ITSAE */}
          <div className="xl:col-span-1.5 space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="from-primary-600 to-accent-500 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br shadow-md">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="block text-base font-black tracking-tight text-white">
                  ITSAE
                </span>
                <span className="block text-[11px] font-medium text-slate-400">
                  Educación que trasciende
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              {institutionName}. Plataforma académica y formativa oficial para
              la materia de{' '}
              <strong className="font-semibold text-slate-300">
                {courseName}
              </strong>
              .
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="text-accent-400 h-3.5 w-3.5 shrink-0" />
                <span>Km 14 vía Santo Domingo - Quevedo, Ecuador</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span>Acreditado por CACES · Registro Senescyt</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Unidades del Curso */}
          <div>
            <h3 className="text-accent-400 text-xs font-bold tracking-wider uppercase">
              Pénsum por Unidades
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a
                  href="/unidad1/tema1"
                  className="group flex items-center justify-between text-slate-400 transition-colors hover:text-white"
                >
                  <span>Unidad 1: Estrategia Web</span>
                  <span className="group-hover:text-accent-400 text-[10px] text-slate-500">
                    4 temas
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/unidad2/tema1"
                  className="group flex items-center justify-between text-slate-400 transition-colors hover:text-white"
                >
                  <span>Unidad 2: UX/UI y Prototipado</span>
                  <span className="group-hover:text-accent-400 text-[10px] text-slate-500">
                    4 temas
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/unidad3/tema1"
                  className="group flex items-center justify-between text-slate-400 transition-colors hover:text-white"
                >
                  <span>Unidad 3: CMS y Conversión</span>
                  <span className="group-hover:text-accent-400 text-[10px] text-slate-500">
                    4 temas
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/unidad4/tema1"
                  className="group flex items-center justify-between text-slate-400 transition-colors hover:text-white"
                >
                  <span>Unidad 4: SEO y Analítica</span>
                  <span className="group-hover:text-accent-400 text-[10px] text-slate-500">
                    3 temas
                  </span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="/#pensum"
                  className="text-primary-300 hover:text-primary-200 inline-flex items-center gap-1 font-semibold transition-colors"
                >
                  <span>Ver temario detallado</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Evaluaciones y Fechas Clave */}
          <div>
            <h3 className="text-accent-400 text-xs font-bold tracking-wider uppercase">
              Evaluaciones Oficiales
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Calendar className="text-primary-400 mt-0.5 h-3.5 w-3.5 shrink-0" />
                <div>
                  <span className="font-medium text-white">
                    Examen Bimestre I
                  </span>
                  <div className="text-[11px] text-slate-500">
                    10 de diciembre, 2026
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="text-primary-400 mt-0.5 h-3.5 w-3.5 shrink-0" />
                <div>
                  <span className="font-medium text-white">
                    Examen Bimestre II
                  </span>
                  <div className="text-[11px] text-slate-500">
                    04 de febrero, 2027
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="text-primary-400 mt-0.5 h-3.5 w-3.5 shrink-0" />
                <div>
                  <span className="font-medium text-white">
                    Evaluación Supletorio
                  </span>
                  <div className="text-[11px] text-slate-500">
                    16 de febrero, 2027
                  </div>
                </div>
              </li>
              <li className="pt-1">
                <span className="inline-block rounded-md border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-slate-400">
                  Calificación sobre 10 pts
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Ecosistema y Enlaces Externos */}
          <div>
            <h3 className="text-accent-400 text-xs font-bold tracking-wider uppercase">
              Plataformas y Recursos
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a
                  href="https://classroom.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                >
                  <span>Google Classroom ITSAE</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                >
                  <span>Figma Community & Kits</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://sga.itsae.edu.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                >
                  <span>Sistema de Gestión Académica (SGA)</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://itsae.edu.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                >
                  <span>Portal Institucional ITSAE</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                >
                  <span>Pautas WCAG 2.1 (W3C)</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://web-design-itsae.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                >
                  <span>Sitio Web del Curso</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 5: Docencia y Cátedra */}
          <div>
            <h3 className="text-accent-400 text-xs font-bold tracking-wider uppercase">
              Cátedra y Docencia
            </h3>
            <div className="mt-4 space-y-2.5 text-xs text-slate-400">
              <div>
                <a
                  href="https://www.linkedin.com/in/iferpaz7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:text-accent-400 inline-flex items-center gap-1.5 font-semibold text-white transition-colors"
                >
                  <span>Ing. Ivan Paz</span>
                  <ExternalLink className="group-hover:text-accent-400 h-3 w-3 text-slate-400 transition-colors" />
                </a>
                <p className="text-[11px] text-slate-400">
                  Docente titular de cátedra
                </p>
              </div>
              <div>
                <span className="text-slate-300">Carrera:</span>
                <p className="text-[11px] text-slate-400">
                  Marketing y Comercio Electrónico
                </p>
              </div>
              <div>
                <span className="text-slate-300">Modalidad:</span>
                <p className="text-[11px] text-slate-400">
                  Virtual sincrónica · Jueves 120 min
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-800/60 bg-emerald-950/80 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                  <span>Semestre 2026 - 2027</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Filosofía y Botón Scroll Top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs text-slate-400">
              © {year} ITSAE Ecuador · Todos los derechos reservados.
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Diseño Web para Marketing Digital · Tecnología Superior · 100%
              Online
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-slate-500 md:inline">
              Educación para el servicio y la trascendencia
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-white"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
