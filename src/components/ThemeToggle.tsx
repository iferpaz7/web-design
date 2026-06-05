import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Detectar tema del sistema
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
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
    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
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
      <div className="flex items-center space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        <div className="h-8 w-8 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-8 w-8 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-8 w-8 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    );
  }

  const themes: { key: Theme; icon: React.ReactNode; label: string }[] = [
    { key: 'light', icon: <Sun className="h-4 w-4" />, label: 'Claro' },
    { key: 'dark', icon: <Moon className="h-4 w-4" />, label: 'Oscuro' },
    { key: 'system', icon: <Monitor className="h-4 w-4" />, label: 'Sistema' }
  ];

  return (
    <div className="flex items-center space-x-1 rounded-lg bg-gray-100 p-1 transition-colors dark:bg-gray-800">
      {themes.map(({ key, icon, label }) => (
        <button
          key={key}
          onClick={() => handleThemeChange(key)}
          className={`flex h-8 w-8 items-center justify-center rounded transition-all duration-200 ${
            theme === key
              ? 'text-primary-700 dark:text-primary-300 bg-white shadow-sm dark:bg-gray-700'
              : 'hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 hover:bg-white/50 dark:text-gray-400 dark:hover:bg-gray-700/50'
          } `}
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
