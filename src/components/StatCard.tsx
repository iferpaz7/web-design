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
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400',
    success: 'bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'
  };

  return (
    <div className="text-center">
      <div className={`${colorClasses[color]} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors duration-300`}>
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base mb-1">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default StatCard;
