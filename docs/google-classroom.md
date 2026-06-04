# Google Classroom desde VSCode

Este proyecto incluye un CLI en Python para crear el curso de Google Classroom y publicar las clases de `docs/clases/**/classroom-*.md` como materiales y tareas. También publica los archivos de `docs/clases/**/actividad-*.md` como tareas separadas.

## 1. Configurar Google Cloud

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
```

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

## 5. Crear el curso

```bash
python3 tools/google_classroom/classroom_cli.py create-course
```

El comando imprime el JSON del curso creado. Copia el `id` para los siguientes comandos.

También puedes listar cursos:

```bash
python3 tools/google_classroom/classroom_cli.py list-courses
```

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

Actualizar curso:

```bash
python3 tools/google_classroom/classroom_cli.py update-course COURSE_ID --section "Mayo 2026"
```

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
