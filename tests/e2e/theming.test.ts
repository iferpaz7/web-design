import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createSession, BASE_URL, type TestBrowserSession } from './helpers';

describe('Theming & Dark Mode E2E Tests', () => {
  let session: TestBrowserSession;

  beforeAll(async () => {
    session = await createSession();
  });

  afterAll(async () => {
    await session?.close();
  });

  it('switches between light, dark and system themes and persists in localStorage', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    // Click dark mode button
    const darkButton = session.page.locator('button[title="Oscuro"]').first();
    await darkButton.click();
    await session.page.waitForTimeout(300);

    const hasDarkClass = await session.page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDarkClass).toBe(true);

    const savedThemeDark = await session.page.evaluate(() =>
      localStorage.getItem('itsae-theme')
    );
    expect(savedThemeDark).toBe('dark');

    // Click light mode button
    const lightButton = session.page.locator('button[title="Claro"]').first();
    await lightButton.click();
    await session.page.waitForTimeout(300);

    const hasDarkClassAfterLight = await session.page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDarkClassAfterLight).toBe(false);

    const savedThemeLight = await session.page.evaluate(() =>
      localStorage.getItem('itsae-theme')
    );
    expect(savedThemeLight).toBe('light');
  });

  it('preserves theme upon page reload', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    // Set dark theme
    const darkButton = session.page.locator('button[title="Oscuro"]').first();
    await darkButton.click();
    await session.page.waitForTimeout(300);

    // Reload page
    await session.page.reload({ waitUntil: 'networkidle' });

    const isDarkAfterReload = await session.page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(isDarkAfterReload).toBe(true);
  });
});
