import React from 'react';

interface FooterProps {
  institutionName?: string;
  courseName?: string;
  year?: number;
}

/**
 * Componente Footer reutilizable
 * Usa design tokens para consistencia visual
 */
const Footer: React.FC<FooterProps> = ({
  institutionName = "Instituto Tecnológico Superior Adventista del Ecuador",
  courseName = "Diseño Web para Marketing Digital",
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 dark:from-gray-950 dark:to-gray-900 text-white py-8 sm:py-12 mt-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
          {/* Institución */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent-400">
              ITSAE
            </h3>
            <p className="text-sm sm:text-base text-primary-200 dark:text-gray-300">
              {institutionName}
            </p>
          </div>

          {/* Curso */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent-400">
              Curso
            </h3>
            <p className="text-sm sm:text-base text-primary-200 dark:text-gray-300">
              {courseName}
            </p>
            <p className="text-xs sm:text-sm text-primary-300 dark:text-gray-400 mt-2">
              Marketing y Comercio Electrónico
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent-400">
              Recursos
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a 
                  href="https://www.figma.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-200 dark:text-gray-300 hover:text-accent-400 transition-colors"
                >
                  Figma
                </a>
              </li>
              <li>
                <a 
                  href="https://itsae.edu.ec" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-200 dark:text-gray-300 hover:text-accent-400 transition-colors"
                >
                  ITSAE Ecuador
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary-700 dark:border-gray-800 text-center">
          <p className="text-xs sm:text-sm text-primary-300 dark:text-gray-400">
            © {year} ITSAE Ecuador - Todos los derechos reservados
          </p>
          <p className="text-xs text-primary-400 dark:text-gray-500 mt-2">
            Diseñado con sistema de componentes reutilizables
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
