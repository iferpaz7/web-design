import React, { useState } from 'react';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { syllabusUnits } from '../data/syllabus';

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
    ...syllabusUnits.map((unit) => ({
      label: `Unidad ${unit.numero}`,
      items: unit.temas.map((tema) => ({
        label: `Tema ${tema.numero}: ${tema.titulo}`,
        href: tema.href
      }))
    }))
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
    <nav className="sticky top-0 z-50 bg-white shadow-lg transition-colors duration-300 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex shrink-0 items-center">
            <a href="/" className="group flex items-center space-x-3">
              <div className="from-primary-600 to-accent-500 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-r">
                <BookOpen className="h-6 w-6 text-white" />
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
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-1">
            <a
              href="/"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Inicio
            </a>

            {navItems.slice(1).map((item) => (
              <div key={item.label} className="group relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${dropdownOpen === item.label ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {item.items && (
                  <div
                    className={`absolute left-0 mt-1 w-64 rounded-lg border border-gray-200 bg-white shadow-xl transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 ${
                      dropdownOpen === item.label
                        ? 'visible opacity-100'
                        : 'invisible opacity-0'
                    }`}
                  >
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold'
                              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
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
          <div className="hidden md:ml-4 md:flex md:items-center">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-2 border-t border-gray-200 pb-4 md:hidden dark:border-gray-700">
            <div className="space-y-1 pt-2">
              <a
                href="/"
                onClick={closeMobileMenu}
                className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  isActive('/')
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                Inicio
              </a>

              {navItems.slice(1).map((item) => (
                <div key={item.label} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${dropdownOpen === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {dropdownOpen === item.label && item.items && (
                    <div className="space-y-1 pl-4">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className={`block rounded-lg px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-semibold'
                              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
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
