import React from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Monitor,
  Palette,
  Zap
} from 'lucide-react';

export type UnidadColor = 'amber' | 'blue' | 'emerald' | 'purple';

interface Tema {
  numero: number;
  titulo: string;
  descripcion: string;
  href: string;
  disponible: boolean;
}

interface UnidadCardProps {
  numero: number;
  titulo: string;
  descripcion: string; // objetivo inspirador de la unidad
  color: UnidadColor;
  iconName: 'BookOpen' | 'Monitor' | 'Palette' | 'Zap';
  temas: Tema[];
}

/**
 * Componente UnidadCard - Card especializado para las unidades del curso
 * Reutilizable con variantes de color según design tokens institucionales
 */
const UnidadCard: React.FC<UnidadCardProps> = ({
  numero,
  titulo,
  descripcion,
  color,
  iconName,
  temas
}) => {
  const iconMap = {
    BookOpen,
    Monitor,
    Palette,
    Zap
  };

  const Icon = iconMap[iconName];

  // Design Tokens - Colores institucionales por unidad
  const colorClasses: Record<
    UnidadColor,
    {
      gradient: string;
      accentBg: string;
      badgeText: string;
      iconRing: string;
    }
  > = {
    amber: {
      gradient: 'from-amber-600 via-amber-700 to-orange-700',
      accentBg: 'bg-amber-500',
      badgeText: 'text-amber-700 dark:text-amber-300',
      iconRing: 'bg-amber-600 dark:bg-amber-500'
    },
    blue: {
      gradient: 'from-sky-700 via-blue-800 to-indigo-900',
      accentBg: 'bg-blue-600',
      badgeText: 'text-blue-700 dark:text-blue-300',
      iconRing: 'bg-blue-600 dark:bg-blue-500'
    },
    emerald: {
      gradient: 'from-emerald-600 via-teal-700 to-emerald-800',
      accentBg: 'bg-emerald-600',
      badgeText: 'text-emerald-700 dark:text-emerald-300',
      iconRing: 'bg-emerald-600 dark:bg-emerald-500'
    },
    purple: {
      gradient: 'from-purple-700 via-indigo-800 to-violet-900',
      accentBg: 'bg-purple-600',
      badgeText: 'text-purple-700 dark:text-purple-300',
      iconRing: 'bg-purple-600 dark:bg-purple-500'
    }
  };

  const colors = colorClasses[color];
  const availableCount = temas.filter((tema) => tema.disponible).length;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/90">
      {/* Header con gradiente institucional */}
      <div
        className={`bg-linear-to-br ${colors.gradient} p-6 text-white sm:p-7`}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 shadow-xs ring-1 ring-white/20 backdrop-blur-xs">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white ring-1 ring-white/25 backdrop-blur-xs">
            {availableCount}/{temas.length} temas activos
          </span>
        </div>
        <div className="mb-1 text-xs font-black tracking-widest text-white/80 uppercase">
          Unidad {numero}
        </div>
        <h2 className="mb-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {titulo}
        </h2>
        <p className="text-sm leading-relaxed text-white/90">{descripcion}</p>
      </div>

      {/* Lista de temas interactiva */}
      <div className="space-y-3 bg-slate-50/50 p-5 sm:p-6 dark:bg-slate-950/40">
        {temas.map((tema) => (
          <a
            key={tema.numero}
            href={tema.href}
            aria-disabled={!tema.disponible}
            className={`group relative flex items-start gap-3.5 rounded-xl border p-4 transition-all duration-200 ${
              tema.disponible
                ? 'hover:border-primary-400 dark:hover:border-primary-600 border-slate-200/80 bg-white hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/90'
                : 'pointer-events-none border-transparent bg-slate-100/70 opacity-60 dark:bg-slate-800/40'
            }`}
          >
            <span
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white shadow-2xs ${
                tema.disponible ? colors.iconRing : 'bg-slate-400'
              }`}
            >
              {tema.disponible ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                tema.numero
              )}
            </span>

            <span className="min-w-0 flex-1">
              <span className="group-hover:text-primary-700 dark:group-hover:text-primary-300 block text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                {tema.disponible
                  ? `Tema ${tema.numero}: ${tema.titulo}`
                  : `Tema ${tema.numero}: Próximamente`}
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
                {tema.descripcion}
              </span>
            </span>

            {tema.disponible && (
              <ArrowRight className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-1 h-4 w-4 shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 dark:text-slate-500" />
            )}
          </a>
        ))}
      </div>
    </article>
  );
};

export default UnidadCard;
