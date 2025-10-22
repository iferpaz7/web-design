# Sistema Dark/Light Theme - ITSAE

## Características Implementadas

### 🌓 Modos de Tema
- **Light Mode**: Tema claro por defecto
- **Dark Mode**: Tema oscuro con colores adaptados
- **System Mode**: Detecta automáticamente la preferencia del sistema

### 💾 Persistencia
- **localStorage**: Guarda la preferencia del usuario
- **Clave**: `itsae-theme` (valores: 'light', 'dark', 'system')
- **Persistente**: Se mantiene entre sesiones

### 🚀 Inicialización Sin Flash
- **Script inline**: `/public/theme-init.js` se ejecuta antes del render
- **Previene FOUC**: Flash of Unstyled Content
- **Detección rápida**: Aplica el tema inmediatamente

### 📱 Responsive Design
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid adaptativo**: 1 columna en móvil, 2 en tablet, 3-4 en desktop
- **Tipografía escalable**: Tamaños adaptativos según dispositivo

## Componentes

### ThemeToggle.tsx
```tsx
// Ubicación: src/components/ThemeToggle.tsx
// Funciones:
- Detección del tema del sistema
- Cambio entre modos (light/dark/system)
- Persistencia en localStorage
- Escucha cambios del sistema
- UI con iconos (Sun/Moon/Monitor)
```

### Script de Inicialización
```javascript
// Ubicación: public/theme-init.js
// Funciones:
- Aplicación inmediata del tema
- Prevención de flash
- Escucha de cambios del sistema
```

## Clases Tailwind Utilizadas

### Colores Dark Mode
```css
/* Fondos */
bg-white dark:bg-gray-800
bg-gray-50 dark:bg-gray-700
bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800

/* Texto */
text-gray-900 dark:text-gray-100
text-gray-600 dark:text-gray-400
text-gray-800 dark:text-gray-200

/* Bordes */
border-gray-300 dark:border-gray-600
```

### Responsive Classes
```css
/* Espaciado */
p-4 sm:p-6 lg:p-8
px-4 sm:px-6
py-8 sm:py-12

/* Tipografía */
text-xl sm:text-2xl lg:text-3xl
text-sm sm:text-base

/* Grid */
grid-cols-1 lg:grid-cols-2
grid-cols-2 lg:grid-cols-4

/* Dimensiones */
w-10 h-10 sm:w-12 sm:h-12
```

## Paleta de Colores Dark Mode

### Primarios
```css
primary-50: #f0f7ff (light bg)
primary-100: #e0efff (light accent)
primary-700: #004080 (dark buttons)
primary-800: #003366 (dark headers)
primary-900: #002244 (darkest)
```

### Grises
```css
gray-50: #f9fafb (light bg)
gray-100: #f3f4f6 (light cards)
gray-700: #374151 (dark cards)
gray-800: #1f2937 (dark bg)
gray-900: #111827 (darkest bg)
```

## Uso en Componentes

### Aplicar Dark Mode
```astro
<!-- Fondo adaptativo -->
<div class="bg-white dark:bg-gray-800">

<!-- Texto adaptativo -->
<p class="text-gray-900 dark:text-gray-100">

<!-- Transiciones suaves -->
<div class="transition-colors duration-300">
```

### Responsive + Dark Mode
```astro
<!-- Combinando responsive y dark mode -->
<h1 class="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">

<!-- Grid responsive con dark mode -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
  <div class="bg-white dark:bg-gray-800 p-4 sm:p-6">
```

## Configuración Tailwind

```javascript
// tailwind.config.mjs
export default {
  darkMode: 'class', // Habilita dark mode por clase
  // ... resto de configuración
}
```

## Testing

### Verificar Funcionalidad
1. **Cambio de tema**: Toggle entre light/dark/system
2. **Persistencia**: Recargar página mantiene preferencia
3. **Sistema**: Cambiar tema del OS y verificar modo system
4. **Responsive**: Probar en diferentes tamaños de pantalla
5. **Sin flash**: No debe haber parpadeo al cargar

### Breakpoints de Prueba
- **Mobile**: 375px, 414px
- **Tablet**: 768px, 1024px
- **Desktop**: 1280px, 1920px

## Accesibilidad

### Cumplimiento WCAG
- **Contraste**: Mínimo 4.5:1 en ambos temas
- **Navegación por teclado**: Toggle accesible
- **Screen readers**: Labels apropiados
- **Reducción de movimiento**: Respeta prefers-reduced-motion

### Aria Labels
```tsx
aria-label={`Cambiar a tema ${label.toLowerCase()}`}
title={label}
```

## Performance

### Optimizaciones
- **Script inline**: Evita request adicional
- **CSS-in-JS mínimo**: Solo lógica esencial en React
- **Transiciones eficientes**: GPU-accelerated
- **Lazy loading**: Componentes cargados cuando se necesitan

### Métricas
- **FCP**: First Contentful Paint sin flash
- **LCP**: Largest Contentful Paint optimizado
- **CLS**: Cumulative Layout Shift mínimo