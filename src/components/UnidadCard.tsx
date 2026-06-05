import React from 'react';
import { BookOpen, Monitor, Palette, Zap } from 'lucide-react';

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
    }
  > = {
    amber: {
      gradient:
        'from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700',
      text: 'text-amber-100',
      cardBg: 'bg-amber-50 dark:bg-amber-900/20',
      cardText: 'text-amber-800 dark:text-amber-300',
      cardHover: 'hover:bg-amber-100 dark:hover:bg-amber-900/30'
    },
    blue: {
      gradient:
        'from-primary-700 to-primary-600 dark:from-primary-800 dark:to-primary-700',
      text: 'text-primary-100',
      cardBg: 'bg-blue-50 dark:bg-blue-900/20',
      cardText: 'text-blue-800 dark:text-blue-300',
      cardHover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    emerald: {
      gradient:
        'from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800',
      text: 'text-emerald-100',
      cardBg: 'bg-emerald-50 dark:bg-emerald-900/20',
      cardText: 'text-emerald-800 dark:text-emerald-300',
      cardHover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
    },
    purple: {
      gradient:
        'from-purple-600 to-pink-500 dark:from-purple-700 dark:to-pink-600',
      text: 'text-purple-100',
      cardBg: 'bg-purple-50 dark:bg-purple-900/20',
      cardText: 'text-purple-800 dark:text-purple-300',
      cardHover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-800">
      {/* Header con gradiente */}
      <div className={`bg-linear-to-r ${colors.gradient} p-4 sm:p-6`}>
        <Icon className="mb-4 h-10 w-10 text-white sm:h-12 sm:w-12" />
        <div className="mb-1 text-xs font-semibold tracking-wider text-white/70 uppercase">
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
      <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
        {temas.map((tema) => (
          <a
            key={tema.numero}
            href={tema.href}
            className={`block rounded-lg p-3 transition-colors sm:p-4 ${
              tema.disponible
                ? `${colors.cardBg} ${colors.cardHover}`
                : 'bg-gray-100 dark:bg-gray-700'
            } `}
          >
            <h3
              className={`text-sm font-semibold sm:text-base ${
                tema.disponible
                  ? colors.cardText
                  : 'text-gray-500 dark:text-gray-400'
              } `}
            >
              {tema.disponible
                ? `Tema ${tema.numero}: ${tema.titulo}`
                : `Tema ${tema.numero}: Próximamente`}
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              {tema.descripcion}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UnidadCard;
