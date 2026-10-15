import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createSession, BASE_URL, type TestBrowserSession } from './helpers';

describe('Mobile & Responsive E2E Tests', () => {
  let session: TestBrowserSession;

  beforeAll(async () => {
    // 375x812 (iPhone SE / Mobile standard viewport)
    session = await createSession({ viewport: { width: 375, height: 812 } });
  });

  afterAll(async () => {
    await session?.close();
  });

  it('does not produce horizontal viewport overflow on mobile', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    const isOverflowing = await session.page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(isOverflowing).toBe(false);
  });

  it('renders mobile menu toggle and opens navigation drawer', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    const menuButton = session.page
      .locator('button[aria-label="Abrir menú"]')
      .first();
    expect(await menuButton.isVisible()).toBe(true);

    await menuButton.click();
    await session.page.waitForTimeout(300);

    const closeButton = session.page
      .locator('button[aria-label="Cerrar menú"]')
      .first();
    expect(await closeButton.isVisible()).toBe(true);

    const drawerUnitBtn = session.page
      .locator('nav button:has-text("Unidad 1")')
      .last();
    expect(await drawerUnitBtn.isVisible()).toBe(true);
  });
});
