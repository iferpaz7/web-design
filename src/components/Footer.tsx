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
  institutionName = 'Instituto Tecnológico Superior Adventista del Ecuador',
  courseName = 'Diseño Web para Marketing Digital',
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="from-primary-900 to-primary-800 mt-12 bg-gradient-to-r py-8 text-white transition-colors duration-300 sm:py-12 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 text-center sm:gap-8 md:grid-cols-3 md:text-left">
          {/* Institución */}
          <div>
            <h3 className="text-accent-400 mb-3 text-lg font-bold sm:text-xl">
              ITSAE
            </h3>
            <p className="text-primary-200 text-sm sm:text-base dark:text-gray-300">
              {institutionName}
            </p>
          </div>

          {/* Curso */}
          <div>
            <h3 className="text-accent-400 mb-3 text-lg font-bold sm:text-xl">
              Curso
            </h3>
            <p className="text-primary-200 text-sm sm:text-base dark:text-gray-300">
              {courseName}
            </p>
            <p className="text-primary-300 mt-2 text-xs sm:text-sm dark:text-gray-400">
              Marketing y Comercio Electrónico
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-accent-400 mb-3 text-lg font-bold sm:text-xl">
              Recursos
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://www.figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-accent-400 transition-colors dark:text-gray-300"
                >
                  Figma
                </a>
              </li>
              <li>
                <a
                  href="https://itsae.edu.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-accent-400 transition-colors dark:text-gray-300"
                >
                  ITSAE Ecuador
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-primary-700 mt-8 border-t pt-6 text-center dark:border-gray-800">
          <p className="text-primary-300 text-xs sm:text-sm dark:text-gray-400">
            © {year} ITSAE Ecuador - Todos los derechos reservados
          </p>
          <p className="text-primary-400 mt-2 text-xs dark:text-gray-500">
            Diseño Web para Marketing Digital · 100% Online
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
