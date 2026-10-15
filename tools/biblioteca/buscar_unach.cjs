#!/usr/bin/env node
/**
 * tools/biblioteca/buscar_unach.cjs
 *
 * Herramienta de automatización basada en Playwright para consultar el catálogo
 * de biblioteca institucional UNACH (eLibro) y extraer referencias
 * bibliográficas estructuradas en APA 7.ª edición para las clases de Diseño Web.
 *
 * Uso:
 *   node tools/biblioteca/buscar_unach.cjs --login
 *   node tools/biblioteca/buscar_unach.cjs --search "usabilidad web"
 *   node tools/biblioteca/buscar_unach.cjs --temas [prioritarios|all|u1t4,u2t1,...]
 *   node tools/biblioteca/buscar_unach.cjs --url "https://elibro.unach.elogim.com/es/lc/unach/titulos/XXXXX/"
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const AUTH_FILE = path.resolve(process.cwd(), '.auth_unach.json');
const OUTPUT_FILE = path.resolve(process.cwd(), 'docs/bibliografia/catalogo-unach-temas.json');

// Mapeo temático de los 15 temas de la asignatura con términos optimizados para eLibro UNACH
const TEMAS_CONFIG = {
  u1t1: {
    unidad: 1,
    tema: 1,
    titulo: 'Rol de la página web en la estrategia de marketing digital y en el embudo de conversión',
    query: 'marketing__digital',
    href: '/unidad1/tema1'
  },
  u1t2: {
    unidad: 1,
    tema: 2,
    titulo: 'Principios de UX/UI aplicados a páginas de campaña y experiencias digitales',
    query: 'diseno__interfaces',
    href: '/unidad1/tema2'
  },
  u1t3: {
    unidad: 1,
    tema: 3,
    titulo: 'Jerarquía visual, tipografía, color y composición para comunicar y persuadir',
    query: 'tipografia',
    href: '/unidad1/tema3'
  },
  u1t4: {
    unidad: 1,
    tema: 4,
    titulo: 'Usabilidad, accesibilidad y lectura móvil como criterios de calidad',
    query: 'usabilidad__web',
    href: '/unidad1/tema4',
    prioritario: true
  },
  u2t1: {
    unidad: 2,
    tema: 1,
    titulo: 'Arquitectura de la información, wireframing y flujo del usuario en la página',
    query: 'arquitectura__informacion',
    href: '/unidad2/tema1',
    prioritario: true
  },
  u2t2: {
    unidad: 2,
    tema: 2,
    titulo: 'Organización de contenidos por bloques, secciones y recorrido del usuario',
    query: 'diseno__interaccion',
    href: '/unidad2/tema2'
  },
  u2t3: {
    unidad: 2,
    tema: 3,
    titulo: 'Redacción de titulares, beneficios, prueba social y llamados a la acción',
    query: 'comunicacion__digital',
    href: '/unidad2/tema3'
  },
  u2t4: {
    unidad: 2,
    tema: 4,
    titulo: 'Prototipado de baja y media fidelidad con herramientas visuales y criterios de marca',
    query: 'diseno__interfaces',
    href: '/unidad2/tema4',
    prioritario: true
  },
  u3t1: {
    unidad: 3,
    tema: 1,
    titulo: 'Selección de plataforma y configuración inicial del proyecto web',
    query: 'desarrollo__web',
    href: '/unidad3/tema1'
  },
  u3t2: {
    unidad: 3,
    tema: 2,
    titulo: 'Maquetación por secciones y adaptación a dispositivos: móvil, tablet y escritorio',
    query: 'desarrollo__web',
    href: '/unidad3/tema2'
  },
  u3t3: {
    unidad: 3,
    tema: 3,
    titulo: 'Formularios, captura de contactos y rutas de conversión simples',
    query: 'comercio__electronico',
    href: '/unidad3/tema3'
  },
  u3t4: {
    unidad: 3,
    tema: 4,
    titulo: 'Auditoría integral de calidad y conversión: cierre de producción y apertura de optimización',
    query: 'usabilidad__web',
    href: '/unidad3/tema4'
  },
  u4t1: {
    unidad: 4,
    tema: 1,
    titulo: 'Publicación, dominio y fundamentos de visibilidad en buscadores (SEO)',
    query: 'posicionamiento__web',
    href: '/unidad4/tema1'
  },
  u4t2: {
    unidad: 4,
    tema: 2,
    titulo: 'Medición básica del comportamiento, conversiones e interpretación de datos',
    query: 'analitica__web',
    href: '/unidad4/tema2',
    prioritario: true
  },
  u4t3: {
    unidad: 4,
    tema: 3,
    titulo: 'Iteración de la página web, presentación final y argumentación de mejoras',
    query: 'marketing__digital',
    href: '/unidad4/tema3',
    prioritario: true
  }
};

function formatApa7(item) {
  const author = item.author ? item.author.trim() : 'Autor corporativo';
  const year = item.year ? `(${item.year})` : '(s. f.)';
  const title = item.title ? `*${item.title.trim()}*` : '*Sin título*';
  const publisher = item.publisher ? `${item.publisher.trim()}.` : '';
  const url = item.url ? item.url : '';
  return `${author} ${year}. ${title}. ${publisher} ${url}`.trim();
}

function promptEnter(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(message, () => {
      rl.close();
      resolve();
    });
  });
}

async function loginFlow() {
  console.log('\n======================================================');
  console.log('   INICIANDO SESIÓN EN BIBLIOTECA INSTITUCIONAL UNACH  ');
  console.log('======================================================\n');
  console.log('1. Se abrirá una ventana de Chromium en tu pantalla.');
  console.log('2. Ingresa tus credenciales institucionales UNACH en Elogim.');
  console.log('3. Cuando estés dentro de eLibro o veas el catálogo:');
  console.log('   REGRESA A ESTA TERMINAL Y PRESIONA ENTER.\n');

  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized', '--no-sandbox']
  });

  const context = await browser.newContext({
    viewport: null
  });

  const page = await context.newPage();
  try {
    await page.goto('https://unach.elogim.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  } catch (err) {
    console.warn('Nota de navegación:', err.message);
  }

  await promptEnter('👉 Presiona [ENTER] aquí después de iniciar sesión y ver el catálogo...');

  await context.storageState({ path: AUTH_FILE });
  console.log(`\n✅ Sesión guardada exitosamente en: ${AUTH_FILE}`);
  console.log('Ahora puedes ejecutar consultas automáticas sin necesidad de volver a iniciar sesión.\n');

  await browser.close();
}

async function getBrowserContext(headless = true) {
  const browser = await chromium.launch({
    headless,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let context;
  if (fs.existsSync(AUTH_FILE)) {
    console.log(`ℹ️  Cargando credenciales de sesión desde: ${AUTH_FILE}`);
    context = await browser.newContext({ storageState: AUTH_FILE });
  } else {
    console.warn('⚠️  No se encontró .auth_unach.json. Si el catálogo requiere SSO, ejecuta primero:');
    console.warn('    node tools/biblioteca/buscar_unach.cjs --login\n');
    context = await browser.newContext();
  }

  return { browser, context };
}

async function searchElibro(page, rawQuery) {
  // Normalizar término para eLibro (separado por __)
  const normalizedQuery = rawQuery
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '__')
    .replace(/_{3,}/g, '__');

  const url = `https://elibro.unach.elogim.com/es/lc/unach/busqueda_filtrada?fs_q=${encodeURIComponent(normalizedQuery)}&prev=fs`;
  console.log(`   [eLibro UNACH] Consultando: ${url}`);

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
    await page.waitForTimeout(2000);

    const items = await page.evaluate(() => {
      const results = [];
      const links = Array.from(document.querySelectorAll('a[href*="/titulos/"]'));

      for (const link of links) {
        const rawTitle = link.innerText ? link.innerText.trim().replace(/\s+/g, ' ') : '';
        if (!rawTitle || rawTitle.length < 5) continue;

        // Limpiar parámetros de rastreo en el enlace
        const cleanHref = link.href.split('?')[0];
        if (results.some((r) => r.url === cleanHref || r.title === rawTitle)) continue;

        // Extraer texto del contenedor padre para metadatos
        const container = link.closest('div.row, div.col, li, tr') || link.parentElement;
        const containerText = container ? container.innerText.trim().replace(/\n+/g, ' | ') : '';

        const authorMatch = containerText.match(/Autores:\s*([^|]+)/i);
        const publisherMatch = containerText.match(/Editorial:\s*([^|]+)/i);
        const yearMatch = containerText.match(/Año de Edición:\s*(\d{4})/i);
        const isbnMatch = containerText.match(/ISBN:\s*([^|]+)/i);

        results.push({
          title: rawTitle,
          author: authorMatch ? authorMatch[1].trim() : null,
          publisher: publisherMatch ? publisherMatch[1].trim() : null,
          year: yearMatch ? yearMatch[1].trim() : null,
          isbn: isbnMatch ? isbnMatch[1].trim() : null,
          url: cleanHref,
          catalogo: 'eLibro UNACH'
        });
      }

      return results.slice(0, 5);
    });

    return items;
  } catch (error) {
    console.error(`   ❌ Error en eLibro: ${error.message}`);
    return [];
  }
}

async function scrapeBookDetails(page, bookUrl) {
  console.log(`\nExtrayendo metadatos de: ${bookUrl}`);
  await page.goto(bookUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const titleEl = document.querySelector('h1, h2.title, .titulo-detalle');
    const containerText = document.body.innerText;

    const authorMatch = containerText.match(/Autores?:\s*([^\n|]+)/i);
    const publisherMatch = containerText.match(/Editorial:\s*([^\n|]+)/i);
    const yearMatch = containerText.match(/Año de Edición:\s*(\d{4})/i);
    const isbnMatch = containerText.match(/ISBN:\s*([^\n|]+)/i);

    return {
      title: titleEl ? titleEl.innerText.trim().replace(/\s+/g, ' ') : null,
      author: authorMatch ? authorMatch[1].trim() : null,
      year: yearMatch ? yearMatch[1].trim() : null,
      publisher: publisherMatch ? publisherMatch[1].trim() : null,
      isbn: isbnMatch ? isbnMatch[1].trim() : null,
      url: window.location.href.split('?')[0]
    };
  });

  return data;
}

async function executeSearch(query, headless = true) {
  const { browser, context } = await getBrowserContext(headless);
  const page = await context.newPage();

  console.log(`\n🔍 Búsqueda para: "${query}"`);
  const elibroResults = await searchElibro(page, query);

  console.log(`\n📋 Encontrados ${elibroResults.length} títulos en eLibro UNACH:`);
  elibroResults.forEach((item, idx) => {
    console.log(`\n[${idx + 1}] ${item.title}`);
    console.log(`    Autor:     ${item.author || 'N/A'}`);
    console.log(`    Editorial: ${item.publisher || 'N/A'}`);
    console.log(`    Año:       ${item.year || 'N/A'}`);
    console.log(`    ISBN:      ${item.isbn || 'N/A'}`);
    console.log(`    URL:       ${item.url || 'N/A'}`);
    console.log(`    APA 7:     ${formatApa7(item)}`);
  });

  await browser.close();
  return elibroResults;
}

async function executeTemas(targets = 'prioritarios', headless = true) {
  const { browser, context } = await getBrowserContext(headless);
  const page = await context.newPage();

  const resultsByTema = fs.existsSync(OUTPUT_FILE)
    ? JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'))
    : {};

  const keys = Object.keys(TEMAS_CONFIG).filter((key) => {
    if (targets === 'all') return true;
    if (targets === 'prioritarios') return TEMAS_CONFIG[key].prioritario;
    return targets.split(',').map((s) => s.trim().toLowerCase()).includes(key);
  });

  console.log(`\n🚀 Ejecutando búsqueda para ${keys.length} temas seleccionados:`);

  for (const key of keys) {
    const config = TEMAS_CONFIG[key];
    console.log(`\n▶ [${key.toUpperCase()}] ${config.titulo}`);
    console.log(`  Consulta eLibro: "${config.query}"`);

    const items = await searchElibro(page, config.query);
    await page.waitForTimeout(1500); // cortesía entre peticiones

    const formattedItems = items.map((it) => ({
      ...it,
      apa7: formatApa7(it)
    }));

    resultsByTema[key] = {
      unidad: config.unidad,
      tema: config.tema,
      titulo: config.titulo,
      href: config.href,
      query: config.query,
      updatedAt: new Date().toISOString(),
      items: formattedItems
    };

    console.log(`  ✅ Hallados ${formattedItems.length} libros en catálogo`);
    formattedItems.slice(0, 2).forEach((it, i) => {
      console.log(`     (${i + 1}) ${it.apa7}`);
    });
  }

  // Guardar archivo JSON estructurado
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(resultsByTema, null, 2), 'utf8');
  console.log(`\n💾 Resultados consolidados guardados en:\n   ${OUTPUT_FILE}\n`);

  await browser.close();
}

// ---------------------------------------------------------
// CLI Argument Dispatcher
// ---------------------------------------------------------
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
Uso de buscar_unach.cjs:
  node tools/biblioteca/buscar_unach.cjs --login
      Abre el navegador interactivo para iniciar sesión en eLibro/Elogim UNACH
      y guarda las credenciales en .auth_unach.json.

  node tools/biblioteca/buscar_unach.cjs --search "<término>" [--gui]
      Busca un término específico en eLibro UNACH.
      Usa --gui para ver el navegador mientras consulta.

  node tools/biblioteca/buscar_unach.cjs --temas [prioritarios|all|u1t4,u2t1,...] [--gui]
      Recorre los temas configurados del curso, extrae referencias
      y las guarda en docs/bibliografia/catalogo-unach-temas.json.

  node tools/biblioteca/buscar_unach.cjs --url "<url_elibro>"
      Extrae los metadatos y ficha de un libro específico de eLibro.
`);
    process.exit(0);
  }

  const isGui = args.includes('--gui');
  const headless = !isGui;

  if (args.includes('--login')) {
    await loginFlow();
    return;
  }

  const searchIdx = args.indexOf('--search');
  if (searchIdx !== -1 && args[searchIdx + 1]) {
    await executeSearch(args[searchIdx + 1], headless);
    return;
  }

  const temasIdx = args.indexOf('--temas');
  if (temasIdx !== -1) {
    const val = args[temasIdx + 1] && !args[temasIdx + 1].startsWith('--')
      ? args[temasIdx + 1]
      : 'prioritarios';
    await executeTemas(val, headless);
    return;
  }

  const urlIdx = args.indexOf('--url');
  if (urlIdx !== -1 && args[urlIdx + 1]) {
    const { browser, context } = await getBrowserContext(headless);
    const page = await context.newPage();
    const details = await scrapeBookDetails(page, args[urlIdx + 1]);
    console.log('\nDetalles del libro:');
    console.log(JSON.stringify(details, null, 2));
    console.log('\nCita APA 7:');
    console.log(formatApa7(details));
    await browser.close();
    return;
  }

  console.log('Comando no reconocido. Ejecuta con --help para ver las opciones.');
}

main().catch((err) => {
  console.error('\n❌ Error inesperado:', err);
  process.exit(1);
});
