import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

/**
 * Componente Button reutilizable con variantes y estados
 * Sigue los principios de Design System aprendidos en Semana 6
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  disabled = false,
  as = 'button',
  href,
  ...props
}) => {
  // Design Tokens - Variantes de tipo
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-primary-700 dark:text-primary-300 border-2 border-primary-700 dark:border-primary-500',
    accent: 'bg-accent-500 hover:bg-accent-600 dark:bg-accent-600 dark:hover:bg-accent-700 text-white shadow-md hover:shadow-lg',
    success: 'bg-success-500 hover:bg-success-600 dark:bg-success-600 dark:hover:bg-success-700 text-white shadow-md hover:shadow-lg',
    ghost: 'bg-transparent hover:bg-primary-50 dark:hover:bg-gray-700 text-primary-700 dark:text-primary-300'
  };

  // Design Tokens - Tamaños (Sistema de 8px)
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',      // 16px/8px
    md: 'px-6 py-3 text-base',    // 24px/12px
    lg: 'px-8 py-4 text-lg'       // 32px/16px
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
    ${fullWidth ? 'w-full' : ''}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const Component = as === 'a' ? 'a' : 'button';

  return (
    <Component
      className={baseClasses}
      disabled={disabled}
      href={href}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export default Button;
