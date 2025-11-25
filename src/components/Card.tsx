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
    default: 'bg-white dark:bg-gray-800 shadow-lg',
    elevated: 'bg-white dark:bg-gray-800 shadow-xl',
    outlined: 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
  };

  // Sistema de espaciado 8px
  const paddingClasses = {
    none: '',
    sm: 'p-4',      // 16px
    md: 'p-6',      // 24px
    lg: 'p-8'       // 32px
  };

  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';

  return (
    <div
      className={`
        rounded-2xl
        transition-all duration-300
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
