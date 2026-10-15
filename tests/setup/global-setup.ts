import { execSync } from 'child_process';
import http from 'http';

const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;

function isServerUp(): Promise<boolean> {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL, (res) => {
      resolve(Boolean(res.statusCode && res.statusCode < 500));
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

export async function setup() {
  const up = await isServerUp();
  let startedByUs = false;

  if (!up) {
    console.log('[global-setup] Starting Astro preview server...');
    execSync(`pnpm preview --background --port ${PORT}`, { stdio: 'ignore' });
    startedByUs = true;

    for (let i = 0; i < 40; i++) {
      if (await isServerUp()) {
        console.log('[global-setup] Astro preview server is ready.');
        break;
      }
      await new Promise((r) => setTimeout(r, 250));
    }
  }

  return async () => {
    if (startedByUs) {
      console.log('[global-setup] Stopping Astro preview server...');
      try {
        execSync('pnpm preview stop', { stdio: 'ignore' });
      } catch {
        // ignore
      }
    }
  };
}
