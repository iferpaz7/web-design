import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, Monitor, Palette, Zap, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  label: string;
  href?: string;
  items?: { label: string; href: string; active?: boolean }[];
}

interface NavbarProps {
  currentPath?: string;
}

/**
 * Navbar Component - Sistema de navegación profesional
 * Responsive con menú móvil y dropdown para unidades
 */
const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: 'Inicio',
      href: '/'
    },
    {
      label: 'Unidad 1',
      items: [
        { label: 'Tema 1: Introducción', href: '/unidad1/tema1' },
        { label: 'Tema 2: Principios de Diseño', href: '/unidad1/tema2' },
        { label: 'Tema 3: Arquitectura', href: '/unidad1/tema3' },
        { label: 'Tema 4: UX y Conversión', href: '/unidad1/tema4' }
      ]
    },
    {
      label: 'Unidad 2',
      items: [
        { label: 'Tema 1: Introducción a Figma', href: '/unidad2/tema1' },
        { label: 'Tema 2: Componentes y Design Systems', href: '/unidad2/tema2' },
        { label: 'Tema 3: Prototipos Interactivos y User Flows', href: '/unidad2/tema3' },
        { label: 'Tema 4: Mockups de Alta Fidelidad y Documentación', href: '/unidad2/tema4' }
      ]
    },
    {
      label: 'Unidad 3',
      items: [
        { label: 'Tema 1: WordPress + Elementor', href: '/unidad3/tema1' },
        { label: 'Tema 2: Layouts Responsivos', href: '/unidad3/tema2' },
        { label: 'Tema 3: Estilización Avanzada', href: '/unidad3/tema3' },
        { label: 'Tema 4: Formularios, Plugins y SEO', href: '/unidad3/tema4' }
      ]
    },
    {
      label: 'Unidad 4',
      items: [
        { label: 'Tema 1: WooCommerce - E-Commerce', href: '/unidad4/tema1' },
        { label: 'Tema 2: E-commerce', href: '/unidad4/tema2' },
        { label: 'Tema 3: Analytics', href: '/unidad4/tema3' },
        { label: 'Tema 4: Proyecto Final', href: '/unidad4/tema4' }
      ]
    }
  ];

  const toggleDropdown = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  const isActive = (href: string) => {
    return currentPath === href;
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  ITSAE
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Diseño Web
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 md:flex-1 md:justify-center">
            <a
              href="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Inicio
            </a>

            {navItems.slice(1).map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-1"
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === item.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {item.items && (
                  <div className={`absolute left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-200 ${
                    dropdownOpen === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle - Desktop */}
          <div className="hidden md:flex md:items-center md:ml-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 mt-2">
            <div className="space-y-1 pt-2">
              <a
                href="/"
                onClick={closeMobileMenu}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive('/')
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Inicio
              </a>

              {navItems.slice(1).map((item) => (
                <div key={item.label} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen === item.label && item.items && (
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
