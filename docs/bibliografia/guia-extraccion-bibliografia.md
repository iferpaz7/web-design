# Guía de Extracción de Bibliografía UNACH (Playwright)

Esta herramienta automatiza la búsqueda y extracción de referencias bibliográficas en formato **APA 7.ª edición** desde la Biblioteca Virtual UNACH (**eLibro** y **VuFind**) para los 15 temas de la asignatura *Diseño Web para Marketing Digital*.

---

## 1. Requisitos Previos

- Tener instaladas las dependencias del proyecto (`pnpm install`).
- Contar con credenciales activas del portal institucional UNACH / Elogim.
- Entorno de escritorio con servidor gráfico (`DISPLAY=:0` o Wayland).

---

## 2. Flujo de Trabajo

### Paso 1: Inicio de sesión único (Generación de sesión)

Ejecuta en tu terminal:

```bash
pnpm biblio --login
```

1. Se abrirá una ventana de Chromium en tu pantalla con la pasarela **Elogim / UNACH**.
2. Ingresa con tu correo institucional y contraseña.
3. Una vez que ingreses al catálogo o la pantalla principal de eLibro, regresa a la terminal y presiona **ENTER**.
4. Tus cookies y tokens se guardarán de forma segura en el archivo local `.auth_unach.json` (este archivo está excluido en `.gitignore` para proteger tus credenciales).

---

### Paso 2: Búsquedas puntuales por término

Para buscar libros o manuales sobre un concepto específico:

```bash
# Modo desatendido (headless en segundo plano)
pnpm biblio --search "usabilidad web"

# O visualizando la navegación en pantalla
pnpm biblio --search "usabilidad web" --gui
```

El script mostrará en la terminal los libros hallados con título, autor, año, editorial, URL y la cita armada en APA 7.ª edición.

---

### Paso 3: Extracción masiva para los temas del curso

Para extraer referencias estructuradas de los temas:

```bash
# Solo los 5 temas prioritarios que requieren enriquecimiento (U1T4, U2T1, U2T4, U4T2, U4T3)
pnpm biblio --temas prioritarios

# O todos los 15 temas del sílabo
pnpm biblio --temas all
```

Los resultados se guardarán automáticamente en:
`docs/bibliografia/catalogo-unach-temas.json`

---

### Paso 4: Extracción de ficha y tabla de contenidos de un libro específico

Si tienes el enlace directo a un libro en eLibro:

```bash
pnpm biblio --url "https://elibro.unach.elogim.com/es/lc/unach/titulos/XXXXX"
```

Extraerá los metadatos completos (autores, editorial, año, ISBN y resumen/índice).
