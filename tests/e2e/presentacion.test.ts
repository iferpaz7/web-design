import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createSession, BASE_URL, type TestBrowserSession } from './helpers';

describe('Presentation Viewer E2E Tests', () => {
  let session: TestBrowserSession;

  beforeAll(async () => {
    session = await createSession();
  });

  afterAll(async () => {
    await session?.close();
  });

  it('renders slides and navigates forward and backward', async () => {
    await session.page.goto(`${BASE_URL}/presentacion/unidad1/tema1`, {
      waitUntil: 'networkidle'
    });

    // Initial slide counter
    const counter = session.page.locator('text=Diapositiva 1 de 14');
    expect(await counter.isVisible()).toBe(true);

    // Click Next slide
    const nextBtn = session.page.locator('button:has-text("Siguiente")');
    await nextBtn.click();
    await session.page.waitForTimeout(300);

    const counterSlide2 = session.page.locator('text=Diapositiva 2 de 14');
    expect(await counterSlide2.isVisible()).toBe(true);

    // Click Previous slide
    const prevBtn = session.page.locator('button:has-text("Anterior")');
    await prevBtn.click();
    await session.page.waitForTimeout(300);

    expect(await counter.isVisible()).toBe(true);
  });

  it('supports keyboard navigation with ArrowRight and ArrowLeft', async () => {
    await session.page.goto(`${BASE_URL}/presentacion/unidad1/tema1`, {
      waitUntil: 'networkidle'
    });

    // Press ArrowRight
    await session.page.keyboard.press('ArrowRight');
    await session.page.waitForTimeout(300);

    const counterSlide2 = session.page.locator('text=Diapositiva 2 de 14');
    expect(await counterSlide2.isVisible()).toBe(true);

    // Press ArrowLeft
    await session.page.keyboard.press('ArrowLeft');
    await session.page.waitForTimeout(300);

    const counterSlide1 = session.page.locator('text=Diapositiva 1 de 14');
    expect(await counterSlide1.isVisible()).toBe(true);
  });
});
