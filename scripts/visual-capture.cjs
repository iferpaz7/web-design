const { chromium } = require('playwright');
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR =
  process.argv[2] || path.join(__dirname, '../dist/screenshots/initial');

function waitForServer(url, timeoutMs = 20000) {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http
        .get(url, (res) => {
          if (res.statusCode && res.statusCode < 500) {
            resolve();
          } else {
            retry();
          }
        })
        .on('error', retry);
    };

    const retry = () => {
      if (Date.now() - startTime > timeoutMs) {
        reject(new Error(`Timeout waiting for server at ${url}`));
      } else {
        setTimeout(check, 300);
      }
    };

    check();
  });
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('Starting preview server...');
  const server = spawn('pnpm', ['preview', '--port', String(PORT)], {
    stdio: 'pipe',
    detached: false
  });

  server.stdout.on('data', (d) => process.stdout.write(`[server] ${d}`));
  server.stderr.on('data', (d) => process.stderr.write(`[server error] ${d}`));

  try {
    await waitForServer(BASE_URL);
    console.log(`Server is ready at ${BASE_URL}`);

    const browser = await chromium.launch({ headless: true });

    const viewports = [
      { name: 'desktop', width: 1280, height: 800 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];

    const pages = [
      { path: '/', name: 'home' },
      { path: '/unidad1/tema1', name: 'tema1' },
      { path: '/presentacion/unidad1/tema1', name: 'presentacion1' }
    ];

    const themes = ['light', 'dark'];

    for (const theme of themes) {
      for (const vp of viewports) {
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
          colorScheme: theme === 'dark' ? 'dark' : 'light'
        });
        const page = await context.newPage();

        for (const p of pages) {
          const url = `${BASE_URL}${p.path}`;
          console.log(
            `Capturing ${p.name} [${theme}, ${vp.name}] at ${url}...`
          );
          await page.goto(url, { waitUntil: 'networkidle' });

          // Set theme explicitly via localStorage and html class
          await page.evaluate((t) => {
            localStorage.setItem('itsae-theme', t);
            if (t === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }, theme);
          await page.waitForTimeout(400);

          const screenshotPath = path.join(
            OUTPUT_DIR,
            `${p.name}-${theme}-${vp.name}.png`
          );
          await page.screenshot({
            path: screenshotPath,
            fullPage: p.name !== 'presentacion1'
          });
          console.log(`Saved screenshot: ${screenshotPath}`);
        }

        await context.close();
      }
    }

    await browser.close();
    console.log('Screenshots capture complete!');
  } finally {
    console.log('Stopping preview server...');
    server.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error('Capture failed:', err);
  process.exit(1);
});
