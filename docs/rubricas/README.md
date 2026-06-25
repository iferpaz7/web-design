# Rúbricas del curso — Diseño Web para Marketing Digital

## Automatización con Google Apps Script

La API REST de rúbricas de Google Classroom requiere licencia **Education Plus** para usarse desde el CLI. Sin embargo, **Google Apps Script** corre dentro del ecosistema de Google con los mismos permisos que tienes como docente, sin esa restricción de licencia.

El script `tools/google_classroom/crear_rubricas.gs` crea automáticamente los 5 Google Sheets de rúbrica en tu Drive con el formato exacto que Classroom acepta para "Importar desde Hojas de cálculo".

### Pasos para ejecutar el script

1. Abre [https://script.google.com](https://script.google.com) y crea un proyecto nuevo.
2. Copia y pega el contenido completo de `tools/google_classroom/crear_rubricas.gs`.
3. Haz clic en **Ejecutar** → selecciona la función **`crearTodasLasRubricas`**.
4. Acepta los permisos de Google Drive y Sheets cuando te lo pida.
5. Al terminar verás un diálogo con los enlaces a los 5 Google Sheets creados en tu Drive.

### Adjuntar cada rúbrica a su tarea en Classroom

1. Abre la tarea en Classroom y haz clic en **editar**.
2. En la sección "Rúbrica" → **"+ Rúbrica"** → **"Importar desde Hojas de cálculo"**.
3. Selecciona el Sheet correspondiente según el mapeo de la tabla de abajo.
4. Para las siguientes tareas del **mismo tipo**: usa **"Usar una rúbrica existente"** en lugar de importar de nuevo — Classroom recordará las rúbricas ya creadas.

### Archivo del script

### Archivo del script

`tools/google_classroom/crear_rubricas.gs` — contiene las 5 rúbricas completas y la función `crearTodasLasRubricas()`.

---

| Actividad en Classroom | ID tarea | Rúbrica | Componente sílabo |
|---|---|---|---|
| Actividad: Brief inicial de campaña | 798150892743 | B — Taller práctico | Talleres 30 % |
| Actividad: Ficha comparativa de UX/UI | 798151054081 | A — Taller analítico | Talleres 30 % |
| Actividad: Rediseño guiado del hero | 798150872384 | B — Taller práctico | Talleres 30 % |
| Actividad: Auditoría visual comparativa | 867538046698 | E — Actividad asincrónica | Asincrónico 15 % |
| Actividad: Auditoría de accesibilidad y lectura móvil | 798150945255 | A — Taller analítico | Talleres 30 % |
| Actividad: Ficha de usuario y mensaje central | 798150939940 | B — Taller práctico | Talleres 30 % |
| Actividad: Análisis de páginas de referencia | 867756696168 | E — Actividad asincrónica | Asincrónico 15 % |
| Actividad: Mapa de Secciones Guiado | 798150848759 | C — Proyecto avance | Proyecto 40 % |
| Actividad: Copy persuasivo para tu proyecto | 867536502656 | C — Proyecto avance | Proyecto 40 % |
| Actividad: Prototipo navegable de tu página de campaña | 867657302501 | D — Proyecto cierre | Proyecto 40 % |
| Actividad: Examen Bimestral — Bimestre I | 867758388392 | Evaluación sumativa directa | — |

## Archivos de rúbricas

| Archivo | Rúbrica | Aplica a |
|---|---|---|
| `rubrica-taller-analitico.md` | A — Taller analítico | Ficha comparativa UX/UI, Auditoría visual, Auditoría accesibilidad |
| `rubrica-taller-practico.md` | B — Taller práctico | Brief, Rediseño hero, Ficha de usuario |
| `rubrica-proyecto-avance.md` | C — Proyecto avance | Mapa de secciones, Copy persuasivo |
| `rubrica-proyecto-cierre.md` | D — Proyecto cierre | Prototipo navegable |
| `rubrica-actividad-asincronica.md` | E — Actividad asincrónica | Auditoría visual comparativa, Análisis de páginas |

## Cómo importar en Google Classroom

### Paso 1 — Crear el Google Sheet de cada rúbrica

1. Abre [Google Sheets](https://sheets.google.com) y crea un archivo nuevo.
2. Copia exactamente la fila de encabezado y las filas de datos de la sección "Formato para importar" de cada archivo de rúbrica.
3. La primera fila debe ser el encabezado: `Criterion title`, `Criterion description`, `Level 1 title`, `Level 1 description`, `Level 1 points`, etc.
4. Nombra el archivo con el nombre de la rúbrica para identificarla fácilmente (ej. "Rúbrica A — Taller analítico").

### Paso 2 — Adjuntar la rúbrica a cada tarea

1. Abre Google Classroom y navega a la tarea publicada.
2. Haz clic en los tres puntos (⋮) de la tarea → **Editar tarea**.
3. En la sección de calificación, haz clic en **"Rúbrica"** → **"Importar desde Hojas de cálculo"**.
4. Selecciona el archivo de Google Sheets creado en el Paso 1.
5. Guarda la tarea.

### Paso 3 — Reutilizar la misma rúbrica

Una vez creada la rúbrica en una tarea, Classroom la guarda y puedes reutilizarla en otras tareas del mismo curso con la opción **"Reutilizar rúbrica"** en lugar de importar de nuevo.

## Notas sobre puntaje

Todas las rúbricas tienen puntaje máximo **10 puntos** distribuido en 4 criterios de 2.5 pts cada uno. Classroom calculará el total automáticamente al calificar.

Los niveles de desempeño son:
- **Excelente**: 2.5 pts (100 %)
- **Satisfactorio**: 1.75 pts (70 %)
- **En desarrollo**: 1.0 pts (40 %)
- **Insuficiente**: 0 pts

Este esquema permite que una calificación de 7/10 refleje desempeño consistentemente satisfactorio, alineado con la escala ITSAE.

## Criterio de respaldo bibliográfico institucional

Las rúbricas **C, D y E** incluyen como criterio 4 (C y D) o criterio 3 (E) la evaluación del uso de fuentes de la biblioteca UNACH. Este criterio responde al enfoque institucional del curso: el trabajo autónomo e investigativo del estudiante debe estar sustentado en fuentes verificables, preferentemente del catálogo institucional (eLibro UNACH, VuFind, Digitalia).

**Aplica en:** actividades asincrónicas (HAA), avances de proyecto y entregables de cierre de unidad — donde el estudiante trabaja fuera del aula y tiene tiempo para investigar.

**No aplica en:** talleres en clase (rúbricas A y B), donde el tiempo y el contexto no permiten consulta bibliográfica formal sin distorsionar el objetivo del taller.

**Fuentes aceptadas:** cualquier base de datos accesible desde `catalogobiblio.unach.cl` o `elibro.unach.elogim.com`, incluyendo eLibro, Digitalia, ProQuest, Ebsco y VirtualPro.
