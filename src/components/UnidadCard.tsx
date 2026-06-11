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
 * Reutilizable con variantes de color según design tokens
 */
const UnidadCard: React.FC<UnidadCardProps> = ({
  numero,
  titulo,
  descripcion,
  color,
  iconName,
  temas
}) => {
  // Map icon name to component
  const iconMap = {
    BookOpen,
    Monitor,
    Palette,
    Zap
  };

  const Icon = iconMap[iconName];
  // Design Tokens - Colores por unidad
  const colorClasses: Record<
    UnidadColor,
    {
      gradient: string;
      text: string;
      cardBg: string;
      cardText: string;
      cardHover: string;
      ring: string;
    }
  > = {
    amber: {
      gradient:
        'from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700',
      text: 'text-amber-100',
      cardBg: 'bg-amber-50 dark:bg-amber-900/20',
      cardText: 'text-amber-800 dark:text-amber-300',
      cardHover: 'hover:bg-amber-100 dark:hover:bg-amber-900/30',
      ring: 'bg-amber-500'
    },
    blue: {
      gradient:
        'from-primary-700 to-primary-600 dark:from-primary-800 dark:to-primary-700',
      text: 'text-primary-100',
      cardBg: 'bg-blue-50 dark:bg-blue-900/20',
      cardText: 'text-blue-800 dark:text-blue-300',
      cardHover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
      ring: 'bg-primary-600'
    },
    emerald: {
      gradient:
        'from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800',
      text: 'text-emerald-100',
      cardBg: 'bg-emerald-50 dark:bg-emerald-900/20',
      cardText: 'text-emerald-800 dark:text-emerald-300',
      cardHover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30',
      ring: 'bg-emerald-600'
    },
    purple: {
      gradient:
        'from-purple-600 to-pink-500 dark:from-purple-700 dark:to-pink-600',
      text: 'text-purple-100',
      cardBg: 'bg-purple-50 dark:bg-purple-900/20',
      cardText: 'text-purple-800 dark:text-purple-300',
      cardHover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
      ring: 'bg-purple-600'
    }
  };

  const colors = colorClasses[color];
  const availableCount = temas.filter((tema) => tema.disponible).length;

  return (
    <article className="hover:border-primary-200 dark:hover:border-primary-800 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-gray-800">
      {/* Header con gradiente */}
      <div className={`bg-linear-to-r ${colors.gradient} p-5 sm:p-6`}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
            {availableCount}/{temas.length} temas
          </span>
        </div>
        <div className="mb-1 text-xs font-semibold tracking-wider text-white/75 uppercase">
          Unidad {numero}
        </div>
        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
          {titulo}
        </h2>
        <p
          className={`${colors.text} text-sm leading-relaxed opacity-90 sm:text-sm`}
        >
          {descripcion}
        </p>
      </div>

      {/* Lista de temas */}
      <div className="space-y-3 p-4 sm:p-5">
        {temas.map((tema) => (
          <a
            key={tema.numero}
            href={tema.href}
            aria-disabled={!tema.disponible}
            className={`group flex items-start gap-3 rounded-lg border p-3 transition-all sm:p-4 ${
              tema.disponible
                ? `${colors.cardBg} ${colors.cardHover} border-transparent hover:border-current`
                : 'pointer-events-none border-transparent bg-gray-100 dark:bg-gray-700'
            } `}
          >
            <span
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${tema.disponible ? colors.ring : 'bg-gray-400'}`}
            >
              {tema.disponible ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                tema.numero
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={`block text-sm font-semibold sm:text-base ${
                  tema.disponible
                    ? colors.cardText
                    : 'text-gray-500 dark:text-gray-400'
                } `}
              >
                {tema.disponible
                  ? `Tema ${tema.numero}: ${tema.titulo}`
                  : `Tema ${tema.numero}: Próximamente`}
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400">
                {tema.descripcion}
              </span>
            </span>
            {tema.disponible && (
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            )}
          </a>
        ))}
      </div>
    </article>
  );
};

export default UnidadCard;
