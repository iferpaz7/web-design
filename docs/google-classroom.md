# Google Classroom desde VSCode

Este proyecto incluye un CLI en Python para crear el curso de Google Classroom y publicar las clases de `docs/clases/**/classroom-*.md` como materiales y tareas. También publica los archivos de `docs/clases/**/actividad-*.md` como tareas separadas.

## Índice de comandos del CLI

| Comando                | Qué hace                                                           |
| ---------------------- | ------------------------------------------------------------------ |
| `print-scopes`         | Imprime los scopes OAuth requeridos                                |
| `auth`                 | Autoriza OAuth y genera `token.json`                               |
| `list-courses`         | Lista cursos                                                       |
| `create-course`        | Crea un curso                                                      |
| `update-course`        | Actualiza campos de un curso                                       |
| `archive-course`       | Archiva un curso                                                   |
| `delete-course`        | Elimina un curso permanentemente                                   |
| `create-material`      | Crea un material de clase (`courseWorkMaterial`)                   |
| `list-materials`       | Lista materiales existentes                                        |
| `delete-material`      | Elimina un material                                                |
| `sync-material-titles` | Renombra materiales existentes según los `classroom-*.md` actuales |
| `create-assignment`    | Crea una tarea/asignación (`courseWork`)                           |
| `list-assignments`     | Lista tareas existentes                                            |
| `create-announcement`  | Publica un anuncio                                                 |
| `list-announcements`   | Lista anuncios existentes                                          |
| `delete-announcement`  | Elimina un anuncio                                                 |
| `sync-classes`         | Sincroniza materiales y tareas en lote desde `docs/clases/**`      |
| `create-form`          | Crea un Google Form desde un examen y lo vincula a Classroom       |

Todos los comandos aceptan `python3 tools/google_classroom/classroom_cli.py COMANDO` o el alias `pnpm classroom COMANDO`.

## Estructura de temas en Google Classroom

Los ítems del curso se organizan por tema en Classroom. El CLI infiere el tema automáticamente del path del archivo:

| Path del archivo                           | Tema en Classroom |
| ------------------------------------------ | ----------------- |
| `docs/clases/unidad1/tema*/classroom-*.md` | Unidad 1          |
| `docs/clases/unidad1/tema*/actividad-*.md` | Unidad 1          |
| `docs/clases/unidad2/tema*/classroom-*.md` | Unidad 2          |
| `docs/clases/unidad2/tema*/actividad-*.md` | Unidad 2          |
| `docs/clases/unidad3/tema*/classroom-*.md` | Unidad 3          |
| `docs/clases/unidad3/tema*/actividad-*.md` | Unidad 3          |
| `docs/clases/unidad4/tema*/classroom-*.md` | Unidad 4          |
| `docs/clases/examenes/classroom-*.md`      | Bimestre I        |
| `docs/clases/examenes/actividad-*.md`      | Bimestre I        |

No es necesario declarar el tema en el Markdown. La lógica está en `ClassDoc.topic_name` del CLI.

Si un ítem ya publicado necesita moverse de tema, usa el script de corrección:

```bash
python3 tools/google_classroom/fix_topics.py --dry-run  # preview
python3 tools/google_classroom/fix_topics.py            # aplicar
```

En Google Cloud Console:

1. Habilita **Google Classroom API**.
2. Crea un cliente OAuth de tipo **Desktop app**.
3. Descarga el JSON y guárdalo en la raíz del repo como `credentials.json`.
4. En la pantalla de consentimiento agrega estos scopes:

```text
https://www.googleapis.com/auth/classroom.courses
https://www.googleapis.com/auth/classroom.rosters
https://www.googleapis.com/auth/classroom.coursework.students
https://www.googleapis.com/auth/classroom.coursework.me
https://www.googleapis.com/auth/classroom.courseworkmaterials
https://www.googleapis.com/auth/classroom.announcements
https://www.googleapis.com/auth/classroom.profile.emails
https://www.googleapis.com/auth/classroom.profile.photos
https://www.googleapis.com/auth/classroom.topics
https://www.googleapis.com/auth/forms.body
https://www.googleapis.com/auth/drive.file
```

Los dos últimos scopes son para el comando `create-form`. También debes habilitar en Google Cloud Console:

- **Google Forms API**
- **Google Drive API**

Después de agregar los scopes nuevos, elimina `token.json` y vuelve a ejecutar `pnpm classroom auth`.

Nota: no uso `classroom.grades` porque ya no aparece en la guía oficial de scopes; Google documenta que `classroom.coursework.students` permite gestionar tareas y calificaciones de clases que enseñas o administras.

## 2. Instalar dependencias

```bash
python3 -m pip install -r tools/google_classroom/requirements.txt
```

## 3. Crear configuración local

```bash
cp classroom.config.example.json classroom.config.json
```

Edita `classroom.config.json` si quieres cambiar el nombre, sección, aula o estado inicial del curso.

## 4. Autorizar OAuth

```bash
python3 tools/google_classroom/classroom_cli.py auth
```

También puedes reemplazar `python3 tools/google_classroom/classroom_cli.py` por `pnpm classroom` en todos los comandos.

Si VSCode no abre el navegador automáticamente, usa:

```bash
pnpm classroom --no-browser auth
```

Para forzar Chrome:

```bash
pnpm classroom --browser google-chrome auth
```

Se abrirá el navegador, aceptas los permisos y se generará `token.json`.

Si cambias scopes después, elimina `token.json` y vuelve a ejecutar `auth`.

Para ver en cualquier momento la lista de scopes que el CLI solicita:

```bash
pnpm classroom print-scopes
```

### Flags globales

Estos flags aplican a cualquier subcomando y van **antes** del nombre del comando:

| Flag                       | Descripción                                                                  | Valor por defecto                           |
| -------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| `--config PATH`            | Ruta a `classroom.config.json`                                               | `classroom.config.json` en la raíz del repo |
| `--credentials PATH`       | Ruta a `credentials.json`                                                    | `credentials.json` en la raíz del repo      |
| `--token PATH`             | Ruta a `token.json`                                                          | `token.json` en la raíz del repo            |
| `--no-browser`             | No intenta abrir navegador; imprime el enlace OAuth para pegarlo manualmente | `false`                                     |
| `--browser NOMBRE`         | Navegador a usar para el flujo OAuth, ej. `google-chrome`                    | navegador del sistema                       |
| `--oauth-timeout SEGUNDOS` | Segundos a esperar el login OAuth antes de fallar                            | `300`                                       |

Ejemplo combinando flags globales con un comando:

```bash
pnpm classroom --no-browser --oauth-timeout 600 auth
```

## 5. Crear el curso

```bash
python3 tools/google_classroom/classroom_cli.py create-course
```

Toma los valores por defecto de `default_course` en `classroom.config.json` si no pasas flags. Flags disponibles:

| Flag                    | Descripción                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| `--name`                | Nombre del curso (requerido si no está en `classroom.config.json`)                               |
| `--section`             | Sección, ej. "2026-I"                                                                            |
| `--description-heading` | Encabezado de la descripción                                                                     |
| `--description`         | Descripción completa del curso                                                                   |
| `--room`                | Aula o ubicación                                                                                 |
| `--owner-id`            | Propietario del curso. Acepta id numérico, email o `me` (default `me`)                           |
| `--state`               | Estado inicial: `ACTIVE`, `ARCHIVED`, `PROVISIONED`, `DECLINED` o `SUSPENDED` (default `ACTIVE`) |

El comando imprime el JSON del curso creado. Copia el `id` para los siguientes comandos.

También puedes listar cursos:

```bash
python3 tools/google_classroom/classroom_cli.py list-courses
```

Flags de `list-courses`:

| Flag                    | Descripción                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| `--course-state ESTADO` | Filtra por estado. Repetible para varios estados, ej. `--course-state ACTIVE --course-state ARCHIVED` |
| `--json`                | Imprime el resultado completo en JSON en lugar de la tabla resumida                                   |

## 6. Subir clases, materiales y tareas

Prueba primero sin publicar:

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID --dry-run
```

Crea materiales y tareas en borrador:

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID
```

Publica una clase específica:

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID --only unidad2/tema2 --state PUBLISHED
```

Crea solo materiales:

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID --no-assignments
```

Crea solo tareas:

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID --no-materials
```

Agrega anuncios junto con materiales y tareas:

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID --announcements
```

Actualiza descripción y materiales de ítems que ya existen en lugar de omitirlos (por defecto, `sync-classes` no toca un ítem si detecta un título igual ya creado):

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID --update
```

Fuerza la creación aunque ya exista un ítem con el mismo título (crea un duplicado; usar con cuidado):

```bash
python3 tools/google_classroom/classroom_cli.py sync-classes COURSE_ID --force
```

Todos los flags disponibles de `sync-classes`:

| Flag                    | Descripción                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--only TEXTO`          | Filtra por texto en la ruta, ej. `unidad2/tema2` o `examenes`                                                                                         |
| `--glob PATRÓN`         | Patrón de archivos a sincronizar. Repetible. Default: `classroom-*.md` para materiales y `actividad-*.md` para tareas dentro de `docs/clases/**`      |
| `--state`               | Fuerza el estado (`DRAFT` o `PUBLISHED`) para todos los ítems sincronizados en esta corrida                                                           |
| `--points`              | Sobrescribe el puntaje máximo de las tareas creadas (por defecto usa `sync.default_points` en `classroom.config.json`, o `10` si no está configurado) |
| `--due-date YYYY-MM-DD` | Fecha límite a aplicar a las tareas sincronizadas                                                                                                     |
| `--due-time HH:MM`      | Hora límite a aplicar (requiere `--due-date`)                                                                                                         |
| `--force`               | Crea el ítem aunque ya exista uno con el mismo título                                                                                                 |
| `--update`              | Actualiza descripción y materiales de ítems ya existentes en vez de omitirlos                                                                         |
| `--dry-run`             | Muestra qué se crearía/actualizaría sin llamar a la API                                                                                               |
| `--no-topics`           | No crea ni asigna temas de Classroom por unidad                                                                                                       |
| `--no-materials`        | Omite los archivos `classroom-*.md` (no crea materiales)                                                                                              |
| `--no-assignments`      | Omite los archivos `actividad-*.md` (no crea tareas)                                                                                                  |
| `--announcements`       | Además de materiales y tareas, publica anuncios (si el `.md` los define)                                                                              |

Por defecto el CLI crea temas de Classroom por unidad: `Unidad 1`, `Unidad 2`, etc.

Los nuevos roadmaps deben generar el archivo publicable como:

```text
docs/clases/unidadN/temaN/classroom-YYYY-MM-DD.md
```

El prompt `.github/prompts/preparar-roadmap-clase-completa.prompt.md` ya está alineado con esta estructura.

## Uso desde VSCode

Abre **Terminal > Run Task...** y usa:

- `Classroom: auth`
- `Classroom: list courses`
- `Classroom: create course`
- `Classroom: dry run sync`
- `Classroom: sync drafts`

## Comandos CRUD útiles

Crear material manual:

```bash
python3 tools/google_classroom/classroom_cli.py create-material COURSE_ID \
  --title "Guía Unidad 2 Tema 2" \
  --link https://web-design-itsae.netlify.app/unidad2/tema2
```

Flags de `create-material`:

| Flag            | Descripción                                             |
| --------------- | ------------------------------------------------------- |
| `--title`       | Título del material (requerido)                         |
| `--description` | Descripción del material                                |
| `--link URL`    | Enlace a adjuntar. Repetible para varios enlaces        |
| `--topic-id ID` | Asigna el material a un tema existente por su `topicId` |
| `--state`       | `DRAFT` o `PUBLISHED` (default `DRAFT`)                 |

Crear tarea manual:

```bash
python3 tools/google_classroom/classroom_cli.py create-assignment COURSE_ID \
  --title "Mapa de secciones guiado" \
  --description "Entrega el mapa de secciones de tu página de campaña." \
  --link https://web-design-itsae.netlify.app/unidad2/tema2 \
  --points 10 \
  --due-date 2026-06-05 \
  --due-time 23:59
```

Flags de `create-assignment`:

| Flag                    | Descripción                                          |
| ----------------------- | ---------------------------------------------------- |
| `--title`               | Título de la tarea (requerido)                       |
| `--description`         | Descripción/instrucciones de la tarea                |
| `--link URL`            | Enlace a adjuntar. Repetible para varios enlaces     |
| `--points`              | Puntaje máximo (default `10`)                        |
| `--due-date YYYY-MM-DD` | Fecha límite de entrega                              |
| `--due-time HH:MM`      | Hora límite de entrega (requiere `--due-date`)       |
| `--topic-id ID`         | Asigna la tarea a un tema existente por su `topicId` |
| `--state`               | `DRAFT` o `PUBLISHED` (default `DRAFT`)              |

Publicar un anuncio:

```bash
python3 tools/google_classroom/classroom_cli.py create-announcement COURSE_ID \
  --text "Recuerden entregar el prototipo antes del viernes." \
  --link https://web-design-itsae.netlify.app/unidad2/tema4 \
  --state PUBLISHED
```

Flags de `create-announcement`:

| Flag         | Descripción                                      |
| ------------ | ------------------------------------------------ |
| `--text`     | Contenido del anuncio (requerido)                |
| `--link URL` | Enlace a adjuntar. Repetible para varios enlaces |
| `--state`    | `DRAFT` o `PUBLISHED` (default `DRAFT`)          |

Listar anuncios:

```bash
python3 tools/google_classroom/classroom_cli.py list-announcements COURSE_ID
```

Acepta `--json` para ver el objeto completo en lugar de la tabla resumida (id, estado, primera línea del texto).

Eliminar un anuncio (requiere `--yes` para confirmar, es una eliminación permanente):

```bash
python3 tools/google_classroom/classroom_cli.py delete-announcement COURSE_ID ANNOUNCEMENT_ID --yes
```

Listar materiales existentes:

```bash
python3 tools/google_classroom/classroom_cli.py list-materials COURSE_ID
```

Acepta `--json` para ver el objeto completo en lugar de la tabla resumida (id, estado, título).

Eliminar un material (requiere `--yes` para confirmar, es una eliminación permanente):

```bash
python3 tools/google_classroom/classroom_cli.py delete-material COURSE_ID MATERIAL_ID --yes
```

Listar tareas existentes:

```bash
python3 tools/google_classroom/classroom_cli.py list-assignments COURSE_ID
```

Acepta `--json` para ver el objeto completo. Útil para obtener el `ASSIGNMENT_ID` que necesita `create-form --assignment-id`.

Normalizar títulos de materiales ya publicados para que coincidan con el título que generaría `sync-classes` a partir de los archivos `classroom-*.md` actuales (útil después de renombrar un tema o corregir un `classroom-*.md`):

```bash
python3 tools/google_classroom/classroom_cli.py sync-material-titles COURSE_ID --dry-run
python3 tools/google_classroom/classroom_cli.py sync-material-titles COURSE_ID
```

Flags de `sync-material-titles`:

| Flag            | Descripción                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| `--glob PATRÓN` | Patrón de archivos a considerar. Repetible. Default: `docs/clases/**/classroom-*.md` |
| `--only TEXTO`  | Filtra por texto en la ruta, ej. `unidad2/tema2`                                     |
| `--dry-run`     | Muestra los cambios sin aplicarlos                                                   |

El comando busca, para cada `classroom-*.md`, un material existente cuyos enlaces coincidan con los del archivo, y si el título difiere lo actualiza vía `patch`. No crea materiales nuevos.

Actualizar curso:

```bash
python3 tools/google_classroom/classroom_cli.py update-course COURSE_ID --section "Mayo 2026"
```

Solo se envían los campos que pases; el resto queda sin cambios. Flags disponibles:

| Flag                    | Descripción                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| `--name`                | Nuevo nombre del curso                                                      |
| `--section`             | Nueva sección                                                               |
| `--description-heading` | Nuevo encabezado de descripción                                             |
| `--description`         | Nueva descripción                                                           |
| `--room`                | Nueva aula o ubicación                                                      |
| `--state`               | Nuevo estado: `ACTIVE`, `ARCHIVED`, `PROVISIONED`, `DECLINED` o `SUSPENDED` |

Archivar curso:

```bash
python3 tools/google_classroom/classroom_cli.py archive-course COURSE_ID
```

Eliminar curso:

```bash
python3 tools/google_classroom/classroom_cli.py delete-course COURSE_ID --yes
```

## Referencias oficiales

- Scopes de Classroom: https://developers.google.com/workspace/classroom/guides/auth
- Quickstart Python: https://developers.google.com/workspace/classroom/quickstart/python
- Referencia REST: https://developers.google.com/workspace/classroom/reference/rest
- Google Forms API: https://developers.google.com/forms/api/reference/rest

## Crear un Google Form desde el examen

El comando `create-form` lee un archivo `docs/examenes/examen-*.md` y genera automáticamente
un Google Form con una pregunta de texto largo por cada pregunta del examen, organizado
en secciones (Sección A / Sección B) y con un campo de nombre al inicio.

### Requisitos previos (una sola vez)

1. En [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Library:
   - Activa **Google Forms API**
   - Activa **Google Drive API**
2. En la pantalla de consentimiento OAuth agrega los scopes:
   - `https://www.googleapis.com/auth/forms.body`
   - `https://www.googleapis.com/auth/drive.file`
3. Elimina `token.json` y vuelve a autorizar:
   ```bash
   pnpm classroom auth
   ```

### Uso básico — solo crear el form

```bash
pnpm classroom create-form docs/examenes/examen-bimestre1-2026-06-17.md
```

Imprime los URLs del form (para editar y para estudiantes) y los guarda en el mismo
archivo `.md` como comentario al final.

### Dry-run — ver preguntas sin crear nada

```bash
pnpm classroom create-form docs/examenes/examen-bimestre1-2026-06-17.md --dry-run
```

### Crear y vincular automáticamente a la tarea en Classroom

Necesitas el `COURSE_ID` y el `ASSIGNMENT_ID` de la tarea. Para obtener el assignment ID:

```bash
pnpm classroom list-assignments 798151026377
```

Luego:

```bash
pnpm classroom create-form docs/examenes/examen-bimestre1-2026-06-17.md \
  --course-id 798151026377 \
  --assignment-id ASSIGNMENT_ID
```

El form queda adjunto en la tarea de Classroom y los estudiantes lo verán directamente
al abrir la actividad.
