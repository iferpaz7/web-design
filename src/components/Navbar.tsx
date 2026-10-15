import React, { useState } from 'react';
import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';
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
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-xs backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex shrink-0 items-center">
            <a href="/" className="group flex items-center space-x-3">
              <div className="from-primary-700 to-accent-500 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br shadow-sm transition-transform duration-200 group-hover:scale-105">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="block text-base leading-tight font-black tracking-tight text-slate-900 sm:text-lg dark:text-white">
                  ITSAE
                </span>
                <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Diseño Web · Marketing
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-1">
            <a
              href="/"
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                isActive('/')
                  ? 'bg-primary-50 text-primary-800 ring-primary-100 dark:bg-primary-900/30 dark:text-primary-200 dark:ring-primary-800 ring-1'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'
              }`}
            >
              Inicio
            </a>

            {navItems.slice(1).map((item) => (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={dropdownOpen === item.label}
                  className="flex items-center space-x-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen === item.label ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {item.items && (
                  <div
                    className={`absolute left-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl transition-all duration-200 dark:border-slate-800 dark:bg-slate-900 ${
                      dropdownOpen === item.label
                        ? 'visible scale-100 opacity-100'
                        : 'pointer-events-none invisible scale-95 opacity-0'
                    }`}
                  >
                    <div className="space-y-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setDropdownOpen(null)}
                          className={`block rounded-lg px-3 py-2 text-sm leading-snug transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-primary-50 text-primary-800 dark:bg-primary-900/40 dark:text-primary-200 font-semibold'
                              : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/80'
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

          {/* Mobile controls: Theme toggle + Hamburger */}
          <div className="flex items-center space-x-1.5 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200/80 pt-3 pb-5 md:hidden dark:border-slate-800/80">
            <div className="space-y-1.5">
              <a
                href="/"
                onClick={closeMobileMenu}
                className={`block rounded-lg px-4 py-2.5 text-base font-semibold transition-colors ${
                  isActive('/')
                    ? 'bg-primary-50 text-primary-800 dark:bg-primary-900/40 dark:text-primary-200'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                Inicio
              </a>

              {navItems.slice(1).map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-200/60 dark:border-slate-800/60"
                >
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={dropdownOpen === item.label}
                    className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${dropdownOpen === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {dropdownOpen === item.label && item.items && (
                    <div className="space-y-1 bg-slate-50/70 px-3 pt-1 pb-3 dark:bg-slate-900/70">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className={`block rounded-md px-3 py-2 text-xs leading-normal transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-primary-100 text-primary-900 dark:bg-primary-900/50 dark:text-primary-200 font-bold'
                              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
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
