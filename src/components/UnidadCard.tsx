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
  descripcion: string;
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
  const colorClasses: Record<UnidadColor, {
    gradient: string;
    text: string;
    cardBg: string;
    cardText: string;
    cardHover: string;
  }> = {
    amber: {
      gradient: 'from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700',
      text: 'text-amber-100',
      cardBg: 'bg-amber-50 dark:bg-amber-900/20',
      cardText: 'text-amber-800 dark:text-amber-300',
      cardHover: 'hover:bg-amber-100 dark:hover:bg-amber-900/30'
    },
    blue: {
      gradient: 'from-primary-700 to-primary-600 dark:from-primary-800 dark:to-primary-700',
      text: 'text-primary-100',
      cardBg: 'bg-blue-50 dark:bg-blue-900/20',
      cardText: 'text-blue-800 dark:text-blue-300',
      cardHover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    emerald: {
      gradient: 'from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800',
      text: 'text-emerald-100',
      cardBg: 'bg-emerald-50 dark:bg-emerald-900/20',
      cardText: 'text-emerald-800 dark:text-emerald-300',
      cardHover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
    },
    purple: {
      gradient: 'from-purple-600 to-pink-500 dark:from-purple-700 dark:to-pink-600',
      text: 'text-purple-100',
      cardBg: 'bg-purple-50 dark:bg-purple-900/20',
      cardText: 'text-purple-800 dark:text-purple-300',
      cardHover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header con gradiente */}
      <div className={`bg-gradient-to-r ${colors.gradient} p-4 sm:p-6`}>
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold text-white">Unidad {numero}</h2>
        <p className={`${colors.text} text-sm sm:text-base`}>{titulo}</p>
      </div>

      {/* Lista de temas */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {temas.map((tema) => (
          <a
            key={tema.numero}
            href={tema.href}
            className={`
              block p-3 sm:p-4 rounded-lg transition-colors
              ${tema.disponible 
                ? `${colors.cardBg} ${colors.cardHover}`
                : 'bg-gray-100 dark:bg-gray-700'
              }
            `}
          >
            <h3 className={`
              font-semibold text-sm sm:text-base
              ${tema.disponible 
                ? colors.cardText
                : 'text-gray-500 dark:text-gray-400'
              }
            `}>
              {tema.disponible ? tema.titulo : `Tema ${tema.numero}: Próximamente`}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {tema.descripcion}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UnidadCard;
