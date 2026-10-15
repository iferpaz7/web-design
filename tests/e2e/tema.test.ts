import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createSession, BASE_URL, type TestBrowserSession } from './helpers';

describe('Topic Detail Page E2E Tests', () => {
  let session: TestBrowserSession;

  beforeAll(async () => {
    session = await createSession();
  });

  afterAll(async () => {
    await session?.close();
  });

  it('renders topic 1.1 content, objectives, and key ideas', async () => {
    await session.page.goto(`${BASE_URL}/unidad1/tema1`, {
      waitUntil: 'networkidle'
    });

    const heading = await session.page.textContent('h1');
    expect(heading).toContain(
      'Rol de la página web en la estrategia de marketing digital'
    );

    const content = await session.page.textContent('main');
    expect(content).toContain('Panorama general');
    expect(content).toContain('Objetivos de aprendizaje');
    expect(content).toContain('Ideas clave del tema');
    expect(content).toContain('Alineación curricular con la Unidad 1');
  });

  it('switches between Guide, Presentation, and Activity tabs', async () => {
    await session.page.goto(`${BASE_URL}/unidad1/tema1`, {
      waitUntil: 'networkidle'
    });

    // Click Activity tab
    const activityTabBtn = session.page.locator('button[data-tab="activity"]');
    await activityTabBtn.click();
    await session.page.waitForTimeout(200);

    const activityView = session.page.locator('[data-topic-view="activity"]');
    expect(await activityView.isVisible()).toBe(true);

    const guideView = session.page.locator('[data-topic-view="guide"]');
    expect(await guideView.isVisible()).toBe(false);

    // Click Guide tab
    const guideTabBtn = session.page.locator('button[data-tab="guide"]');
    await guideTabBtn.click();
    await session.page.waitForTimeout(200);

    expect(await guideView.isVisible()).toBe(true);
    expect(await activityView.isVisible()).toBe(false);
  });

  it('provides navigation links to presentation and print view', async () => {
    await session.page.goto(`${BASE_URL}/unidad1/tema1`, {
      waitUntil: 'networkidle'
    });

    const presentationLink = session.page
      .locator('a[href="/presentacion/unidad1/tema1"]')
      .first();
    expect(await presentationLink.isVisible()).toBe(true);

    const printLink = session.page
      .locator('a[href="/imprimir/unidad1/tema1"]')
      .first();
    expect(await printLink.isVisible()).toBe(true);
  });
});
