import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createSession, BASE_URL, type TestBrowserSession } from './helpers';

describe('Home Page E2E Tests', () => {
  let session: TestBrowserSession;

  beforeAll(async () => {
    session = await createSession();
  });

  afterAll(async () => {
    await session?.close();
  });

  it('renders the course title and primary h1 headline', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    const title = await session.page.title();
    expect(title).toContain('Diseño Web para Marketing');

    const h1 = await session.page.locator('h1').first();
    const h1Text = await h1.textContent();
    expect(h1Text).toContain('Diseño Web para Marketing Digital');

    const ctaButton = await session.page.locator('a[href="#pensum"]').first();
    expect(await ctaButton.isVisible()).toBe(true);
  });

  it('displays the stats summary correctly', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    const statsText = await session.page.textContent('dl');
    expect(statsText).toContain('17');
    expect(statsText).toContain('semanas planificadas');
    expect(statsText).toContain('4');
    expect(statsText).toContain('unidades formativas');
    expect(statsText).toContain('15');
    expect(statsText).toContain('temas del curso');
  });

  it('renders student profile pillars', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    const perfil = await session.page.textContent('#perfil');
    expect(perfil).toContain('Estrategia y Conversión');
    expect(perfil).toContain('Publicación No-Code Viable');
    expect(perfil).toContain('Ética y Accesibilidad (WCAG)');
  });

  it('renders all 4 syllabus unit cards and their topics', async () => {
    await session.page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });

    const pensumText = await session.page.textContent('#pensum');
    expect(pensumText).toContain(
      'Estrategia digital, UX/UI y fundamentos de conversión'
    );
    expect(pensumText).toContain(
      'Arquitectura de la información, contenido persuasivo y prototipado'
    );
    expect(pensumText).toContain(
      'Producción y publicación de la página web con herramientas viables'
    );
    expect(pensumText).toContain(
      'Optimización, medición y proyección profesional'
    );

    const topicLinks = await session.page
      .locator('#pensum a[href*="/unidad"]')
      .count();
    expect(topicLinks).toBe(15);
  });
});
