import React from 'react';
import { BookOpen, Monitor, Zap } from 'lucide-react';

interface StatCardProps {
  iconName: 'BookOpen' | 'Monitor' | 'Zap';
  title: string;
  description: string;
  color?: 'primary' | 'success' | 'accent';
}

/**
 * Componente StatCard - Card para mostrar estadísticas o información destacada
 * Usa design tokens para colores consistentes
 */
const StatCard: React.FC<StatCardProps> = ({
  iconName,
  title,
  description,
  color = 'primary'
}) => {
  // Map icon name to component
  const iconMap = {
    BookOpen,
    Monitor,
    Zap
  };

  const Icon = iconMap[iconName];
  const colorClasses = {
    primary:
      'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400',
    success:
      'bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400',
    accent:
      'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'
  };

  return (
    <div className="text-center">
      <div
        className={`${colorClasses[color]} mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 sm:mb-4 sm:h-16 sm:w-16`}
      >
        <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
      <h3 className="mb-1 text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
        {title}
      </h3>
      <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default StatCard;
