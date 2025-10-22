import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Detectar tema del sistema
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  // Aplicar tema al DOM
  const applyTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const actualTheme = newTheme === 'system' ? getSystemTheme() : newTheme;

    if (actualTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Inicializar tema desde localStorage o sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('itsae-theme') as Theme;
    const initialTheme = savedTheme || 'system';
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);

    // Escuchar cambios en el tema del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // Cambiar tema
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('itsae-theme', newTheme);
    applyTheme(newTheme);
  };

  // No renderizar hasta que esté montado (evita hidration mismatch)
  if (!mounted) {
    return (
      <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>
    );
  }

  const themes: { key: Theme; icon: React.ReactNode; label: string }[] = [
    { key: 'light', icon: <Sun className="w-4 h-4" />, label: 'Claro' },
    { key: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Oscuro' },
    { key: 'system', icon: <Monitor className="w-4 h-4" />, label: 'Sistema' }
  ];

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 transition-colors">
      {themes.map(({ key, icon, label }) => (
        <button
          key={key}
          onClick={() => handleThemeChange(key)}
          className={`
            flex items-center justify-center w-8 h-8 rounded transition-all duration-200
            ${theme === key 
              ? 'bg-white dark:bg-gray-700 text-primary-700 dark:text-primary-300 shadow-sm' 
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-gray-700/50'
            }
          `}
          title={label}
          aria-label={`Cambiar a tema ${label.toLowerCase()}`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;