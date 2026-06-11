import React from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Componente Card reutilizable
 * Implementa sistema de espaciado de 8px
 */
const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = false,
  padding = 'md'
}) => {
  // Design Tokens - Variantes
  const variantClasses: Record<CardVariant, string> = {
    default:
      'border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-gray-800',
    elevated:
      'border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-gray-800',
    outlined:
      'border border-slate-300 bg-white dark:border-slate-600 dark:bg-gray-800'
  };

  // Sistema de espaciado 8px
  const paddingClasses = {
    none: '',
    sm: 'p-4', // 16px
    md: 'p-6', // 24px
    lg: 'p-8' // 32px
  };

  const hoverClasses = hover
    ? 'hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg dark:hover:border-primary-800'
    : '';

  return (
    <div
      className={`rounded-lg transition-all duration-300 ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className} `}
    >
      {children}
    </div>
  );
};

export default Card;
