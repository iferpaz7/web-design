// Script para inicializar el tema antes del render (evita flash)
(function() {
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    const actualTheme = theme === 'system' ? getSystemTheme() : theme;
    
    if (actualTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  // Obtener tema guardado o usar sistema por defecto
  const savedTheme = localStorage.getItem('itsae-theme') || 'system';
  applyTheme(savedTheme);

  // Escuchar cambios en el tema del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    const currentTheme = localStorage.getItem('itsae-theme') || 'system';
    if (currentTheme === 'system') {
      applyTheme('system');
    }
  });
})();