import {
  chromium,
  type Browser,
  type Page,
  type BrowserContext
} from 'playwright';

export const BASE_URL = 'http://localhost:4321';

export interface TestBrowserSession {
  browser: Browser;
  context: BrowserContext;
  page: Page;
  close: () => Promise<void>;
}

export async function createSession(options?: {
  viewport?: { width: number; height: number };
  colorScheme?: 'light' | 'dark' | 'no-preference';
}): Promise<TestBrowserSession> {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: options?.viewport ?? { width: 1280, height: 800 },
    colorScheme: options?.colorScheme ?? 'light'
  });
  const page = await context.newPage();

  return {
    browser,
    context,
    page,
    close: async () => {
      await context.close();
      await browser.close();
    }
  };
}
