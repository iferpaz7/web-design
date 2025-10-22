# Diseño Web para Marketing - ITSAE

Sitio web de presentaciones para el curso de Diseño Web para Marketing Digital del Instituto Tecnológico Superior Adventista del Ecuador (ITSAE).

## 📚 Estructura del Curso

El curso está organizado en **4 unidades** con **4 temas** cada una:

### Unidad 1: Fundamentos del Diseño Web
- **Tema 1**: Introducción al Diseño Web
- **Tema 2**: Principios de Diseño Visual ✅ (Disponible)
- **Tema 3**: Arquitectura de Información, Accesibilidad y Usabilidad ✅ (Disponible)
- **Tema 4**: Próximamente

### Unidad 2: Experiencia de Usuario (UX/UI)
- **Tema 1**: Principios de UX
- **Tema 2**: Wireframes y Prototipos
- **Tema 3**: Testing y Optimización
- **Tema 4**: Accesibilidad Web

### Unidad 3: Desarrollo y Tecnologías
- **Tema 1**: HTML5 y CSS3
- **Tema 2**: JavaScript y Frameworks
- **Tema 3**: Responsive Design
- **Tema 4**: Performance y SEO

### Unidad 4: Marketing Digital y Conversión
- **Tema 1**: Landing Pages Efectivas
- **Tema 2**: E-commerce y Conversión
- **Tema 3**: Analytics y Métricas
- **Tema 4**: Proyecto Final

## 🚀 Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **React + TypeScript** - Componentes interactivos con tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos
- **TypeScript** - Tipado estático completo

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── PresentacionTema2.tsx
│   │   └── ProximamentePage.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── unidad1/
│   │   │   ├── tema1.astro
│   │   │   ├── tema2.astro
│   │   │   ├── tema3.astro
│   │   │   └── tema4.astro
│   │   ├── unidad2/
│   │   ├── unidad3/
│   │   └── unidad4/
│   └── ...
├── tailwind.config.mjs
├── astro.config.mjs
└── package.json
```

## 🎯 Características

- **Navegación intuitiva** por unidades y temas
- **Presentaciones interactivas** con navegación por slides
- **Diseño responsivo** para todos los dispositivos (mobile-first)
- **Dark/Light Theme** con detección del sistema y persistencia
- **Enlaces a herramientas** útiles para cada tema
- **Accesibilidad WCAG 2.1 AA** completa
- **Código limpio y mantenible** con TypeScript

## 📖 Cómo Agregar Nuevas Presentaciones

1. Crear un nuevo componente React TypeScript (.tsx) en `src/components/`
2. Crear la página Astro correspondiente en `src/pages/unidadX/`
3. Actualizar la página principal si es necesario
4. Usar interfaces TypeScript para tipado seguro
5. Incluir clases dark mode: `bg-white dark:bg-gray-800`
6. Hacer responsive: `text-xl sm:text-2xl lg:text-3xl`

## 🎨 Personalización

Los colores y estilos están definidos en:
- `tailwind.config.mjs` - Configuración de Tailwind con paleta ITSAE y dark mode
- `src/layouts/Layout.astro` - Layout base con soporte de temas
- `PALETA_COLORES.md` - Documentación completa de colores
- `DARK_LIGHT_THEME.md` - Sistema de temas y responsive design
- Cada unidad tiene su propio esquema de colores basado en el primario `#003366`

### 🌓 Sistema de Temas
- **Light/Dark/System**: Tres modos disponibles
- **Persistencia**: localStorage con clave `itsae-theme`
- **Sin flash**: Inicialización antes del render
- **Responsive**: Mobile-first design adaptativo

## 📧 Contacto

Instituto Tecnológico Superior Adventista del Ecuador - ITSAE Ecuador

---

© 2024 ITSAE Ecuador - Todos los derechos reservados