import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const styles = `
.sem8 * { margin: 0; padding: 0; box-sizing: border-box; }

.sem8 {
  --sem8-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --sem8-card-bg: #ffffff;
  --sem8-text: #1f2937;
  --sem8-muted: #475569;
  --sem8-border: #e2e8f0;
  --sem8-surface: #f8fafc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--sem8-bg);
  overflow-x: hidden;
  padding: 16px 0 32px;
  transition: background 0.3s ease;
}

.dark .sem8 {
  --sem8-bg: linear-gradient(135deg, #0f172a 0%, #0b1220 100%);
  --sem8-card-bg: #0f172a;
  --sem8-text: #e2e8f0;
  --sem8-muted: #cbd5e1;
  --sem8-border: #1f2937;
  --sem8-surface: #111827;
}

.sem8 .slides-wrapper { width: 100%; }

.sem8 .slide-container {
  display: none;
  width: 100%;
  min-height: calc(100vh - 160px);
  padding: 28px 20px;
  align-items: center;
  justify-content: center;
}

.sem8 .slide-container.active { display: flex; }

.sem8 .slide {
  background: var(--sem8-card-bg);
  color: var(--sem8-text);
  width: 96%;
  max-width: 1100px;
  min-height: 78vh;
  border-radius: 18px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.25);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  border: 1px solid var(--sem8-border);
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.sem8 .slide-header {
  border-bottom: 4px solid #667eea;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.sem8 .slide-number {
  color: #667eea;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
}

.sem8 h1 {
  color: var(--sem8-text);
  font-size: 38px;
  font-weight: 750;
  line-height: 1.18;
}

.sem8 h2 {
  color: var(--sem8-muted);
  font-size: 28px;
  font-weight: 700;
  margin: 22px 0 14px;
}

.sem8 h3 {
  color: #667eea;
  font-size: 22px;
  font-weight: 700;
  margin: 18px 0 12px;
}

.sem8 p,
.sem8 li {
  color: var(--sem8-muted);
  font-size: 18px;
  line-height: 1.55;
  margin-bottom: 10px;
}

.sem8 ul,
.sem8 ol { margin-left: 28px; margin-bottom: 14px; }

.sem8 .highlight-box {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-left: 5px solid #667eea;
  padding: 18px;
  margin: 18px 0;
  border-radius: 10px;
}

.dark .sem8 .highlight-box { background: rgba(102, 126, 234, 0.1); }

.sem8 .grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 18px 0;
}

.sem8 .grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin: 18px 0;
}


.sem8 .card {
  background: var(--sem8-surface);
  border: 1.5px solid var(--sem8-border);
  border-radius: 12px;
  padding: 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}

.sem8 .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
}

.sem8 .card h4 {
  color: #667eea;
  font-size: 20px;
  margin-bottom: 10px;
}

.sem8 .emoji { font-size: 40px; display: block; margin-bottom: 12px; }

.sem8 .comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 18px 0;
  font-size: 18px;
}

.sem8 .footer-nav {
  margin: 28px auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
}

.sem8 .slide-counter {
  background: var(--sem8-card-bg);
  padding: 8px 14px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.12);
  color: #667eea;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid var(--sem8-border);
}

.sem8 .controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.sem8 .controls button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
  color: white;
  border: 1px solid #4338ca;
  padding: 11px 18px;
  border-radius: 12px;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(64, 81, 181, 0.22);
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  font-weight: 700;
}


.sem8 .logo {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 14px;
  color: #a0aec0;
  font-weight: 600;
}

.sem8 .breakpoint-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.sem8 .breakpoint-card h4 { color: white; margin-bottom: 10px; }

.sem8 .checklist {
  background: #f0fff4;
  border: 2px solid #68d391;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
}

.dark .sem8 .checklist { background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.35); }

.sem8 .checklist li { list-style: none; padding-left: 30px; position: relative; }
.sem8 .checklist li:before { content: "✓"; position: absolute; left: 0; color: #38a169; font-weight: bold; font-size: 24px; }

@media (max-width: 900px) {
  .sem8 .slide { padding: 32px; }
  .sem8 .grid-2 { grid-template-columns: 1fr; }
  .sem8 .grid-3 { grid-template-columns: 1fr; }
  .sem8 h1 { font-size: 36px; }
  .sem8 h2 { font-size: 28px; }
  .sem8 h3 { font-size: 24px; }
  .sem8 p, .sem8 li { font-size: 18px; }
  .sem8 .footer-nav { flex-direction: column; gap: 12px; }
  .sem8 .controls { width: 100%; }
  .sem8 .controls button { flex: 1; justify-content: center; }
}

@media print {
  .sem8 .controls, .sem8 .slide-counter { display: none; }
  .sem8 .slide-container { display: block !important; page-break-after: always; }
}
`;

const slides: React.ReactNode[] = [
  (
    <div className="slide">
      <div className="logo">ITSAE Ecuador</div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="emoji">🎨</div>
        <h1 style={{ marginBottom: '20px' }}>SEMANA 8</h1>
        <h2 style={{ color: '#667eea', marginBottom: '30px' }}>Mockups de Alta Fidelidad y Documentación</h2>
        <p style={{ fontSize: '24px', color: '#718096' }}>Del diseño al desarrollo: preparando tu proyecto para WordPress</p>
        <div style={{ marginTop: '40px', padding: '20px', background: '#f7fafc', borderRadius: '12px' }}>
          <p style={{ fontSize: '20px', margin: 0 }}><strong>Fecha:</strong> 16-23 diciembre 2025</p>
          <p style={{ fontSize: '20px', margin: '10px 0 0 0' }}><strong>Duración:</strong> 2 horas</p>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 2</div>
        <h1>Objetivos de Aprendizaje</h1>
      </div>
      <div className="grid-2" style={{ marginTop: '40px' }}>
        <div className="card">
          <span className="emoji">🎯</span>
          <h4>Diseñar Mockups Completos</h4>
          <p>Crear mockups de alta fidelidad con contenido 100% real, listos para desarrollo</p>
        </div>
        <div className="card">
          <span className="emoji">📱</span>
          <h4>Dominar Responsive Design</h4>
          <p>Diseñar para mobile, tablet y desktop con enfoque mobile-first</p>
        </div>
        <div className="card">
          <span className="emoji">📐</span>
          <h4>Especificar Diseños</h4>
          <p>Documentar colores HEX, tipografía, espaciados y comportamientos</p>
        </div>
        <div className="card">
          <span className="emoji">💼</span>
          <h4>Presentar Profesionalmente</h4>
          <p>Exportar assets y crear presentaciones efectivas para clientes</p>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>💡 Resultado Final</h3>
        <p style={{ margin: 0 }}>Al terminar hoy tendrás un mockup completo, responsive y documentado, listo para convertir a sitio web real en WordPress la próxima semana</p>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 3</div>
        <h1>Wireframe vs Mockup vs Prototipo</h1>
      </div>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Contenido</th>
            <th>Fidelidad</th>
            <th>Cuándo Usar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Wireframe</strong><br />📝</td>
            <td>Cajas grises, Lorem Ipsum, estructura básica</td>
            <td>20-30%</td>
            <td>Fase inicial de conceptualización</td>
          </tr>
          <tr>
            <td><strong>Mockup</strong><br />🎨</td>
            <td>Colores reales, textos reales, diseño completo</td>
            <td>90-95%</td>
            <td>Antes de desarrollo (HOY)</td>
          </tr>
          <tr>
            <td><strong>Prototipo</strong><br />⚡</td>
            <td>Mockup + interacciones y animaciones</td>
            <td>100%</td>
            <td>Testing con usuarios</td>
          </tr>
        </tbody>
      </table>
      <div className="highlight-box" style={{ marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>Analogía para Marketing</h3>
        <ul style={{ marginBottom: 0 }}>
          <li><strong>Wireframe</strong> = Boceto a lápiz de un anuncio</li>
          <li><strong>Mockup</strong> = Diseño final del anuncio en Photoshop</li>
          <li><strong>Prototipo</strong> = Video de cómo el anuncio aparecerá en pantalla</li>
        </ul>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 4</div>
        <h1>Contenido Real: La Clave del Mockup</h1>
      </div>
      <div className="grid-2">
        <div style={{ background: '#fff5f5', border: '3px solid #fc8181', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#e53e3e', marginTop: 0 }}>❌ MAL - Placeholder Genérico</h3>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
            <p style={{ color: '#a0aec0', fontStyle: 'italic' }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
            </p>
            <div style={{ width: '100%', height: '150px', background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a0aec0', marginTop: '15px' }}>
              [Imagen placeholder]
            </div>
          </div>
        </div>
        <div style={{ background: '#f0fff4', border: '3px solid #68d391', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#38a169', marginTop: 0 }}>✅ BIEN - Contenido Real</h3>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
            <p style={{ color: '#2d3748', fontWeight: 600, fontSize: '24px' }}>
              "Aumenta tus ventas online en 30 días con estrategias probadas"
            </p>
            <div style={{ width: '100%', height: '150px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, marginTop: '15px' }}>
              Producto Real + Foto Cliente
            </div>
          </div>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '25px' }}>
        <h3 style={{ marginTop: 0 }}>🎯 Por Qué Importa para Marketing</h3>
        <ul style={{ marginBottom: 0 }}>
          <li>El largo del texto real afecta el diseño (títulos cortos vs. largos)</li>
          <li>Los CTA reales definen la conversión: "Comprar ahora" vs "Enviar"</li>
          <li>El SEO depende del contenido real, no de placeholder</li>
          <li>Las imágenes reales generan conexión emocional con el usuario</li>
        </ul>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 5</div>
        <h1>Responsive Design: 3 Breakpoints Esenciales</h1>
      </div>
      <div className="grid-3">
        <div className="breakpoint-card">
          <span className="emoji">📱</span>
          <h4>MOBILE</h4>
          <p style={{ fontSize: '32px', fontWeight: 700, margin: '10px 0' }}>375px</p>
          <p style={{ fontSize: '18px' }}>65-70% tráfico</p>
          <p style={{ fontSize: '16px', marginTop: '15px', background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '8px' }}>🔥 CRÍTICO</p>
        </div>
        <div className="breakpoint-card">
          <span className="emoji">📱</span>
          <h4>TABLET</h4>
          <p style={{ fontSize: '32px', fontWeight: 700, margin: '10px 0' }}>768px</p>
          <p style={{ fontSize: '18px' }}>5-10% tráfico</p>
          <p style={{ fontSize: '16px', marginTop: '15px', background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '8px' }}>⚠️ MEDIO</p>
        </div>
        <div className="breakpoint-card">
          <span className="emoji">💻</span>
          <h4>DESKTOP</h4>
          <p style={{ fontSize: '32px', fontWeight: 700, margin: '10px 0' }}>1440px</p>
          <p style={{ fontSize: '18px' }}>25-30% tráfico</p>
          <p style={{ fontSize: '16px', marginTop: '15px', background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '8px' }}>✅ IMPORTANTE</p>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>📊 Proceso Mobile-First</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '48px' }}>📱</div>
            <p style={{ margin: '10px 0' }}><strong>PASO 1</strong></p>
            <p>Diseña MOBILE<br />(375px)</p>
          </div>
          <div style={{ fontSize: '48px', color: '#667eea' }}>→</div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '48px' }}>📱</div>
            <p style={{ margin: '10px 0' }}><strong>PASO 2</strong></p>
            <p>Adapta TABLET<br />(768px)</p>
          </div>
          <div style={{ fontSize: '48px', color: '#667eea' }}>→</div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '48px' }}>💻</div>
            <p style={{ margin: '10px 0' }}><strong>PASO 3</strong></p>
            <p>Optimiza DESKTOP<br />(1440px)</p>
          </div>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 6</div>
        <h1>Sistema de Colores: HEX y Documentación</h1>
      </div>
      <h3>Ejemplo de Paleta Documentada</h3>
      <div className="color-palette">
        <div className="color-sample" style={{ background: '#FF6B35' }}>
          <span>Primario</span>
          <span style={{ fontSize: '12px', marginTop: '5px' }}>#FF6B35</span>
        </div>
        <div className="color-sample" style={{ background: '#004E89' }}>
          <span>Secundario</span>
          <span style={{ fontSize: '12px', marginTop: '5px' }}>#004E89</span>
        </div>
        <div className="color-sample" style={{ background: '#F7B801' }}>
          <span>Acento</span>
          <span style={{ fontSize: '12px', marginTop: '5px' }}>#F7B801</span>
        </div>
        <div className="color-sample" style={{ background: '#1A1A1A' }}>
          <span>Texto</span>
          <span style={{ fontSize: '12px', marginTop: '5px' }}>#1A1A1A</span>
        </div>
        <div className="color-sample" style={{ background: '#666666' }}>
          <span>Gris</span>
          <span style={{ fontSize: '12px', marginTop: '5px' }}>#666666</span>
        </div>
        <div className="color-sample" style={{ background: '#F8F9FA', color: '#2d3748', border: '2px solid #e2e8f0' }}>
          <span>Fondo</span>
          <span style={{ fontSize: '12px', marginTop: '5px' }}>#F8F9FA</span>
        </div>
      </div>
      <div className="grid-2" style={{ marginTop: '30px' }}>
        <div className="card">
          <h4>🎨 Por Qué Usar HEX</h4>
          <ul>
            <li>Estándar universal web</li>
            <li>6 caracteres = millones de colores</li>
            <li>Compatible con WordPress/CSS</li>
            <li>Fácil de copiar y pegar</li>
          </ul>
        </div>
        <div className="card">
          <h4>📝 Cómo Extraer en Figma</h4>
          <ol>
            <li>Seleccionar elemento</li>
            <li>Panel derecho → Fill</li>
            <li>Código HEX visible</li>
            <li>Copiar y documentar</li>
          </ol>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '25px' }}>
        <p style={{ margin: 0 }}><strong>💡 Tip:</strong> Limita tu paleta a 5-6 colores principales para mantener coherencia visual. Más colores = diseño confuso.</p>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 7</div>
        <h1>Tipografía: Google Fonts y Especificaciones</h1>
      </div>
      <div className="grid-2">
        <div className="card" style={{ background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)' }}>
          <h4>🔤 Regla de Oro</h4>
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#667eea', margin: '20px 0' }}>Máximo 2 fuentes</p>
          <ul>
            <li><strong>1 para títulos</strong> (Bold, impactante)</li>
            <li><strong>1 para cuerpo</strong> (Legible, neutral)</li>
          </ul>
        </div>
        <div className="card">
          <h4>📐 Ejemplo de Specs</h4>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
            <p style={{ fontSize: '36px', fontWeight: 700, margin: '10px 0', lineHeight: 1.2 }}>H1 Montserrat Bold</p>
            <p style={{ fontSize: '18px', color: '#718096', margin: 0 }}>48px, line-height 1.2, #1A1A1A</p>
            <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
            <p style={{ fontSize: '24px', fontWeight: 600, margin: '10px 0' }}>H2 Montserrat SemiBold</p>
            <p style={{ fontSize: '18px', color: '#718096', margin: 0 }}>36px, line-height 1.3, #1A1A1A</p>
            <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
            <p style={{ fontSize: '18px', margin: '10px 0', lineHeight: 1.6 }}>Body Open Sans Regular - 18px, line-height 1.6</p>
          </div>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '25px' }}>
        <h3 style={{ marginTop: 0 }}>🌐 Google Fonts Recomendadas</h3>
        <div className="grid-2">
          <div>
            <p><strong>Para Títulos:</strong></p>
            <ul style={{ marginBottom: 0 }}>
              <li>Montserrat</li>
              <li>Poppins</li>
              <li>Raleway</li>
              <li>Oswald</li>
            </ul>
          </div>
          <div>
            <p><strong>Para Cuerpo:</strong></p>
            <ul style={{ marginBottom: 0 }}>
              <li>Open Sans</li>
              <li>Roboto</li>
              <li>Lato</li>
              <li>Source Sans Pro</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 8</div>
        <h1>Sistema de Espaciado: Múltiplos de 8px</h1>
      </div>
      <div style={{ background: '#f7fafc', padding: '30px', borderRadius: '12px', marginTop: '20px' }}>
        <h3 style={{ marginTop: 0, textAlign: 'center' }}>📏 Escala de Espaciado Consistente</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
          {[{ size: 4, text: 'Espacio mínimo (entre texto e ícono)' }, { size: 8, text: 'Espacio pequeño (entre elementos relacionados)' }, { size: 16, text: 'Espacio medio (entre secciones de un card)' }, { size: 24, text: 'Espacio grande (entre componentes)' }, { size: 32, text: 'Espacio muy grande (entre secciones de página)' }, { size: 48, text: 'Espacio extra grande (padding de hero section)' }].map((item) => (
            <div key={item.size} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: `${item.size}px`, height: '40px', background: '#667eea' }}></div>
              <span style={{ fontWeight: 700, minWidth: '60px' }}>{item.size}px</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '25px' }}>
        <p style={{ margin: 0 }}><strong>💡 Por Qué Múltiplos de 8:</strong> Crea ritmo visual consistente, facilita desarrollo en grillas CSS, y asegura alineación perfecta en todos los dispositivos.</p>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 9</div>
        <h1>Design Handoff: Del Diseño a WordPress</h1>
      </div>
      <h3>¿Qué es el Handoff? 🤝</h3>
      <p>Es el proceso de <strong>entregar el diseño al desarrollador</strong> (o a ti mismo) con toda la información necesaria para replicarlo perfectamente en WordPress + Elementor.</p>
      <div className="grid-2" style={{ marginTop: '30px' }}>
        <div className="card">
          <h4>📦 Qué Incluir</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>Mockups finales (3 breakpoints)</li>
            <li>Paleta de colores HEX</li>
            <li>Especificaciones tipografía</li>
            <li>Assets exportados (imágenes, íconos)</li>
            <li>Comportamientos (hover, focus)</li>
            <li>Notas de interacción</li>
          </ul>
        </div>
        <div className="card">
          <h4>⚙️ Estados a Documentar</h4>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Normal:</strong> Apariencia por defecto</li>
            <li><strong>Hover:</strong> Al pasar el mouse</li>
            <li><strong>Focus:</strong> Al hacer click en campo</li>
            <li><strong>Error:</strong> Validación fallida</li>
            <li><strong>Success:</strong> Acción completada</li>
            <li><strong>Disabled:</strong> Elemento inactivo</li>
          </ul>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '25px' }}>
        <h4 style={{ marginTop: 0 }}>📋 Ejemplo: Botón CTA Documentado</h4>
        <div className="grid-2" style={{ marginTop: '15px' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px' }}>
            <p style={{ fontWeight: 700, marginBottom: '10px' }}>NORMAL</p>
            <p style={{ margin: '5px 0', fontSize: '18px' }}>Background: #FF6B35</p>
            <p style={{ margin: '5px 0', fontSize: '18px' }}>Texto: #FFFFFF, 18px Bold</p>
            <p style={{ margin: '5px 0', fontSize: '18px' }}>Sombra: 0px 4px 12px rgba(255,107,53,0.3)</p>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px' }}>
            <p style={{ fontWeight: 700, marginBottom: '10px' }}>HOVER</p>
            <p style={{ margin: '5px 0', fontSize: '18px' }}>Background: #E85A2A</p>
            <p style={{ margin: '5px 0', fontSize: '18px' }}>Sombra: 0px 6px 16px rgba(255,107,53,0.5)</p>
            <p style={{ margin: '5px 0', fontSize: '18px' }}>Transición: 0.3s ease</p>
          </div>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 10</div>
        <h1>Exportación de Assets desde Figma</h1>
      </div>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Uso</th>
            <th>Cuándo Exportar</th>
            <th>Ventaja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>SVG</strong></td>
            <td>Íconos, logos</td>
            <td>Gráficos vectoriales</td>
            <td>Escalable sin perder calidad</td>
          </tr>
          <tr>
            <td><strong>PNG</strong></td>
            <td>Screenshots, elementos con transparencia</td>
            <td>Necesitas fondo transparente</td>
            <td>Soporta transparencia</td>
          </tr>
          <tr>
            <td><strong>JPG</strong></td>
            <td>Fotografías, imágenes hero</td>
            <td>Fotos sin transparencia</td>
            <td>Peso menor que PNG</td>
          </tr>
          <tr>
            <td><strong>PDF</strong></td>
            <td>Presentación completa</td>
            <td>Mostrar diseño al cliente</td>
            <td>Profesional y fácil compartir</td>
          </tr>
        </tbody>
      </table>
      <div className="highlight-box" style={{ marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>🔍 ¿Por Qué Exportar a 2x?</h3>
        <ul style={{ marginBottom: 0 }}>
          <li>Las pantallas modernas (Retina, smartphones) tienen el doble de píxeles</li>
          <li>Una imagen 1440px a 2x = 2880px (se ve nítida en pantallas HD)</li>
          <li>WordPress ajustará automáticamente el tamaño según dispositivo</li>
          <li>Previene imágenes pixeladas o borrosas</li>
        </ul>
      </div>
      <div className="card" style={{ marginTop: '25px', background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)' }}>
        <h4>⚡ Tip Rápido: Exportar desde Figma</h4>
        <ol style={{ marginBottom: 0, fontSize: '20px' }}>
          <li>Seleccionar elemento en Figma</li>
          <li>Panel derecho → Export → clic en "+"</li>
          <li>Elegir formato (SVG/PNG/JPG) y escala (2x)</li>
          <li>Nombrar: "hero-section-desktop@2x.jpg"</li>
          <li>Click "Export"</li>
        </ol>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 11</div>
        <h1>Estructura de Landing Page Efectiva</h1>
      </div>
      <div style={{ background: '#f7fafc', padding: '25px', borderRadius: '12px' }}>
        <div className="card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h4 style={{ color: 'white', margin: 0 }}>1️⃣ HERO SECTION (Primera Pantalla)</h4>
          <ul style={{ margin: '10px 0 0 0', color: 'white' }}>
            <li>Headline potente + Subheadline con valor</li>
            <li>CTA primario visible</li>
            <li>Imagen/video hero de alta calidad</li>
          </ul>
        </div>
        <div className="card" style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: 0 }}>2️⃣ PROBLEMA/BENEFICIOS (150-200px)</h4>
          <p style={{ margin: '5px 0 0 0' }}>3-4 beneficios clave con ícono + texto | Grilla 3 columnas (desktop)</p>
        </div>
        <div className="card" style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: 0 }}>3️⃣ CÓMO FUNCIONA (200-250px)</h4>
          <p style={{ margin: '5px 0 0 0' }}>Proceso en 3-4 pasos numerados | Cada paso: ícono + título + descripción</p>
        </div>
        <div className="card" style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: 0 }}>4️⃣ TESTIMONIOS/PRUEBA SOCIAL (200px)</h4>
          <p style={{ margin: '5px 0 0 0' }}>2-3 testimonios con foto, nombre y resultado | Cards con fondo claro</p>
        </div>
        <div className="card" style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: 0 }}>5️⃣ CTA FINAL (150px)</h4>
          <p style={{ margin: '5px 0 0 0' }}>Headline urgencia/beneficio + Botón CTA grande + Garantía</p>
        </div>
        <div className="card" style={{ background: '#2d3748', color: 'white' }}>
          <h4 style={{ color: 'white', margin: 0 }}>6️⃣ FOOTER (80-100px)</h4>
          <p style={{ margin: '5px 0 0 0', color: 'white' }}>Links legales + Redes sociales + Copyright</p>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 12</div>
        <h1>Ejercicio Práctico (75 minutos)</h1>
      </div>
      <div className="grid-2">
        <div className="card" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
          <span className="emoji">⏱️</span>
          <h4 style={{ color: 'white' }}>PASO 1 (20 min)</h4>
          <p style={{ color: 'white' }}>Crear mockup COMPLETO de landing page</p>
          <ul style={{ color: 'white', margin: 0 }}>
            <li>Hero + 3 secciones + footer</li>
            <li>Contenido 100% real</li>
            <li>Desktop 1440px</li>
          </ul>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
          <span className="emoji">📱</span>
          <h4 style={{ color: 'white' }}>PASO 2 (15 min)</h4>
          <p style={{ color: 'white' }}>Diseñar versión mobile</p>
          <ul style={{ color: 'white', margin: 0 }}>
            <li>Frame 375px</li>
            <li>Todo apilado verticalmente</li>
            <li>Botones mínimo 48px alto</li>
          </ul>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white' }}>
          <span className="emoji">📐</span>
          <h4 style={{ color: 'white' }}>PASO 3 (15 min)</h4>
          <p style={{ color: 'white' }}>Agregar especificaciones</p>
          <ul style={{ color: 'white', margin: 0 }}>
            <li>Colores HEX documentados</li>
            <li>Tipografía con tamaños</li>
            <li>Espaciados anotados</li>
          </ul>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', color: 'white' }}>
          <span className="emoji">📤</span>
          <h4 style={{ color: 'white' }}>PASO 4 (25 min)</h4>
          <p style={{ color: 'white' }}>Exportar y crear PDF</p>
          <ul style={{ color: 'white', margin: 0 }}>
            <li>Assets a 2x (SVG, PNG, JPG)</li>
            <li>Presentación PDF profesional</li>
            <li>Organizar en carpetas</li>
          </ul>
        </div>
      </div>
      <div className="checklist" style={{ marginTop: '30px' }}>
        <h3 style={{ marginTop: 0, color: '#38a169' }}>✅ Checklist de Calidad</h3>
        <ul style={{ margin: 0 }}>
          <li>Contenido 100% real (textos, imágenes, datos)</li>
          <li>Jerarquía visual clara (lo importante se ve primero)</li>
          <li>CTA visible y repetido estratégicamente</li>
          <li>Espaciado consistente (múltiplos de 8px)</li>
          <li>Contraste de colores accesible</li>
        </ul>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 13</div>
        <h1>Recursos Gratuitos para tu Mockup</h1>
      </div>
      <div className="grid-2">
        <div>
          <h3>📸 Imágenes Gratis</h3>
          <div className="card" style={{ marginBottom: '15px' }}>
            <h4>Unsplash</h4>
            <p style={{ margin: 0, fontSize: '18px' }}>unsplash.com<br />Millones de fotos de alta calidad</p>
          </div>
          <div className="card" style={{ marginBottom: '15px' }}>
            <h4>Pexels</h4>
            <p style={{ margin: 0, fontSize: '18px' }}>pexels.com/es-es<br />Videos e imágenes gratuitas</p>
          </div>
          <div className="card">
            <h4>Pixabay</h4>
            <p style={{ margin: 0, fontSize: '18px' }}>pixabay.com/es<br />+2M imágenes libres</p>
          </div>
        </div>
        <div>
          <h3>🎨 Herramientas de Diseño</h3>
          <div className="card" style={{ marginBottom: '15px' }}>
            <h4>Coolors.co</h4>
            <p style={{ margin: 0, fontSize: '18px' }}>Generador de paletas<br />Códigos HEX automáticos</p>
          </div>
          <div className="card" style={{ marginBottom: '15px' }}>
            <h4>Google Fonts</h4>
            <p style={{ margin: 0, fontSize: '18px' }}>fonts.google.com<br />1000+ fuentes gratis para web</p>
          </div>
          <div className="card">
            <h4>Remove.bg</h4>
            <p style={{ margin: 0, fontSize: '18px' }}>Quitar fondos automático<br />Ideal para fotos productos</p>
          </div>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '25px' }}>
        <h4 style={{ marginTop: 0 }}>⚡ Optimización de Imágenes</h4>
        <p style={{ margin: 0 }}><strong>TinyPNG (tinypng.com):</strong> Comprime imágenes PNG/JPG hasta 70% sin perder calidad visible. ¡Esencial antes de subir a WordPress!</p>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 14</div>
        <h1>Presentación Profesional al Cliente</h1>
      </div>
      <h3>📊 Estructura de Presentación PDF</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '25px' }}>
        {[
          { icon: '📄', page: 'PÁGINA 1', text: 'Portada con logo', color: '#667eea' },
          { icon: '🎯', page: 'PÁGINA 2', text: 'Objetivo y público', color: '#764ba2' },
          { icon: '💻', page: 'PÁGINA 3', text: 'Mockup Desktop', color: '#667eea' },
          { icon: '📱', page: 'PÁGINA 4', text: 'Mockup Mobile', color: '#764ba2' },
          { icon: '🎨', page: 'PÁGINA 5', text: 'Style Guide', color: '#764ba2' },
          { icon: '🧠', page: 'PÁGINA 6', text: 'Decisiones UX', color: '#667eea' },
          { icon: '📋', page: 'PÁGINA 7', text: 'Especificaciones', color: '#764ba2' },
          { icon: '🚀', page: 'PÁGINA 8', text: 'Próximos pasos', color: '#667eea' }
        ].map((item) => (
          <div key={item.page} style={{ background: item.color, color: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px' }}>{item.icon}</div>
            <p style={{ fontSize: '16px', fontWeight: 700, margin: '10px 0 5px' }}>{item.page}</p>
            <p style={{ fontSize: '14px', margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="highlight-box" style={{ marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>💡 Ejemplo de Slide "Decisiones de UX"</h3>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
          <p style={{ fontWeight: 700, marginBottom: '10px' }}>POR QUÉ FUNCIONA ESTE DISEÑO:</p>
          <ul style={{ margin: 0, fontSize: '18px' }}>
            <li>✅ Formulario corto (3 campos) - reduce fricción en 40%</li>
            <li>✅ Testimonios con fotos reales - aumenta confianza en 60%</li>
            <li>✅ CTA repetido 3 veces - múltiples oportunidades de conversión</li>
            <li>✅ Mobile-first - 70% del tráfico viene de celular</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 15</div>
        <h1>❌ Errores Comunes a Evitar</h1>
      </div>
      <div className="grid-2">
        <div style={{ background: '#fff5f5', border: '3px solid #fc8181', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#e53e3e', marginTop: 0 }}>❌ ERROR 1</h3>
          <p style={{ fontWeight: 700, marginBottom: '10px' }}>Diseñar solo desktop primero</p>
          <p style={{ margin: 0, fontSize: '18px' }}>Resultado: Mobile se ve mal y tienes que rediseñar todo</p>
        </div>
        <div style={{ background: '#f0fff4', border: '3px solid #68d391', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#38a169', marginTop: 0 }}>✅ CORRECTO</h3>
          <p style={{ fontWeight: 700, marginBottom: '10px' }}>Diseñar mobile-first</p>
          <p style={{ margin: 0, fontSize: '18px' }}>Resultado: Fácil expansión a tablet y desktop</p>
        </div>
        <div style={{ background: '#fff5f5', border: '3px solid #fc8181', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#e53e3e', marginTop: 0 }}>❌ ERROR 2</h3>
          <p style={{ fontWeight: 700, marginBottom: '10px' }}>CTA largo: "Haz click aquí para descargar"</p>
          <p style={{ margin: 0, fontSize: '18px' }}>Resultado: Botón muy grande, poco impacto visual</p>
        </div>
        <div style={{ background: '#f0fff4', border: '3px solid #68d391', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#38a169', marginTop: 0 }}>✅ CORRECTO</h3>
          <p style={{ fontWeight: 700, marginBottom: '10px' }}>CTA corto: "Descargar ahora"</p>
          <p style={{ margin: 0, fontSize: '18px' }}>Resultado: Directo, accionable y visualmente limpio</p>
        </div>
        <div style={{ background: '#fff5f5', border: '3px solid #fc8181', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#e53e3e', marginTop: 0 }}>❌ ERROR 3</h3>
          <p style={{ fontWeight: 700, marginBottom: '10px' }}>Exportar imágenes a 1x</p>
          <p style={{ margin: 0, fontSize: '18px' }}>Resultado: Imágenes pixeladas en smartphones</p>
        </div>
        <div style={{ background: '#f0fff4', border: '3px solid #68d391', borderRadius: '12px', padding: '25px' }}>
          <h3 style={{ color: '#38a169', marginTop: 0 }}>✅ CORRECTO</h3>
          <p style={{ fontWeight: 700, marginBottom: '10px' }}>Exportar siempre a 2x</p>
          <p style={{ margin: 0, fontSize: '18px' }}>Resultado: Imágenes nítidas en pantallas Retina</p>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 16</div>
        <h1>📝 Tarea Asincrónica (2 horas)</h1>
      </div>
      <h2>Entregable: Mockup Completo + Documentación</h2>
      <div className="grid-3" style={{ marginTop: '25px' }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)' }}>
          <span className="emoji">🎨</span>
          <h4>Parte 1 (1h)</h4>
          <p style={{ margin: 0, fontSize: '18px' }}><strong>Finalizar Mockup:</strong><br />• Desktop (1440px) completo<br />• Mobile (375px) adaptado<br />• Tablet (768px) opcional<br />• Contenido 100% real</p>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)' }}>
          <span className="emoji">📋</span>
          <h4>Parte 2 (30min)</h4>
          <p style={{ margin: 0, fontSize: '18px' }}><strong>Documento Specs:</strong><br />• Colores HEX<br />• Tipografía + tamaños<br />• Sistema espaciado<br />• Comportamientos</p>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)' }}>
          <span className="emoji">📤</span>
          <h4>Parte 3 (30min)</h4>
          <p style={{ margin: 0, fontSize: '18px' }}><strong>Exportar Assets:</strong><br />• Mockups PNG 2x<br />• Iconos SVG<br />• Imágenes JPG 2x<br />• Presentación PDF</p>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>📁 Estructura de Carpetas</h3>
        <div style={{ background: '#2d3748', color: 'white', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', marginTop: '15px' }}>
          <p style={{ margin: '5px 0', color: 'white' }}>📁 Entrega-Semana8-TuNombre/</p>
          <p style={{ margin: '5px 0 5px 20px', color: 'white' }}>├─ 📁 mockups/</p>
          <p style={{ margin: '5px 0 5px 40px', color: 'white' }}>│  ├─ desktop.png</p>
          <p style={{ margin: '5px 0 5px 40px', color: 'white' }}>│  ├─ mobile.png</p>
          <p style={{ margin: '5px 0 5px 40px', color: 'white' }}>│  └─ tablet.png</p>
          <p style={{ margin: '5px 0 5px 20px', color: 'white' }}>├─ 📁 assets/</p>
          <p style={{ margin: '5px 0 5px 40px', color: 'white' }}>│  ├─ 📁 iconos/ (SVG)</p>
          <p style={{ margin: '5px 0 5px 40px', color: 'white' }}>│  └─ 📁 imagenes/ (JPG 2x)</p>
          <p style={{ margin: '5px 0 5px 20px', color: 'white' }}>├─ 📁 documentacion/</p>
          <p style={{ margin: '5px 0 5px 40px', color: 'white' }}>│  ├─ specs.pdf</p>
          <p style={{ margin: '5px 0 5px 40px', color: 'white' }}>│  └─ presentacion.pdf</p>
          <p style={{ margin: '5px 0 5px 20px', color: 'white' }}>└─ 📄 figma-link.txt</p>
        </div>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="slide-header">
        <div className="slide-number">SEMANA 8 - SLIDE 17</div>
        <h1>🚀 Próxima Semana: WordPress + Elementor</h1>
      </div>
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div className="emoji" style={{ fontSize: '120px', marginBottom: '30px' }}>💻➡️🌐</div>
        <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Del Diseño a la Web Real</h2>
        <p style={{ fontSize: '26px', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
          Convertiremos tu mockup de Figma en un sitio web funcional usando <strong>WordPress + Elementor</strong> (sin escribir código)
        </p>
      </div>
      <div className="grid-2" style={{ marginTop: '40px' }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h3 style={{ color: 'white', marginTop: 0 }}>📋 Lo Que Necesitarás</h3>
          <ul style={{ color: 'white', margin: 0 }}>
            <li>Tu mockup finalizado (lo usaremos como guía)</li>
            <li>Cuenta de hosting o LocalWP instalado</li>
            <li>WordPress fresco (lo instalaremos juntos)</li>
            <li>Ganas de ver tu diseño cobrar vida 🎉</li>
          </ul>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
          <h3 style={{ color: 'white', marginTop: 0 }}>🎯 Qué Lograremos</h3>
          <ul style={{ color: 'white', margin: 0 }}>
            <li>Instalar y configurar WordPress + Elementor</li>
            <li>Replicar tu mockup pixel-perfect</li>
            <li>Hacer tu sitio responsive automático</li>
            <li>Publicar tu primera landing page real</li>
          </ul>
        </div>
      </div>
      <div className="highlight-box" style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, color: '#667eea' }}>🔑 Concepto Clave</h2>
        <p style={{ fontSize: '24px', margin: '20px 0 0 0' }}>
          <strong>Tu mockup es el plano</strong> 📐<br />
          <strong>WordPress+Elementor es la construcción</strong> 🏗️<br />
          <strong>Sin necesidad de código</strong> 🚫💻
        </p>
      </div>
    </div>
  ),
  (
    <div className="slide">
      <div className="logo">ITSAE Ecuador</div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="emoji" style={{ fontSize: '100px' }}>🎨✅</div>
        <h1 style={{ margin: '30px 0 20px', fontSize: '56px', color: '#667eea' }}>¡Excelente Trabajo!</h1>
        <p style={{ fontSize: '28px', maxWidth: '900px', lineHeight: 1.6, marginBottom: '40px' }}>
          Hoy aprendiste a crear mockups profesionales de alta fidelidad con contenido real y documentación completa
        </p>
        <div className="checklist" style={{ maxWidth: '700px', textAlign: 'left' }}>
          <h3 style={{ marginTop: 0, color: '#38a169' }}>✅ Hoy Lograste</h3>
          <ul style={{ margin: 0 }}>
            <li>Entender wireframe vs mockup vs prototipo</li>
            <li>Diseñar con contenido 100% real</li>
            <li>Dominar responsive design (mobile-first)</li>
            <li>Especificar colores, tipografía y espaciados</li>
            <li>Exportar assets listos para WordPress</li>
          </ul>
        </div>
        <div style={{ marginTop: '50px', padding: '30px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '20px', color: 'white' }}>
          <p style={{ fontSize: '32px', fontWeight: 700, margin: 0, color: 'white' }}>
            📅 Próxima Clase: WordPress + Elementor
          </p>
          <p style={{ fontSize: '22px', margin: '15px 0 0', color: 'white' }}>
            Tu diseño cobrará vida en la web 🚀
          </p>
        </div>
        <p style={{ fontSize: '20px', color: '#718096', marginTop: '40px' }}>
          ¿Preguntas? ¡Ahora es el momento! 🙋‍♂️🙋‍♀️
        </p>
      </div>
    </div>
  )
];

const PresentacionSemana8: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = slides.length;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const previousSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const renderedSlides = useMemo(
    () =>
      slides.map((content, index) => (
        <div key={index} className={`slide-container ${index === currentSlide ? 'active' : ''}`}>
          {content}
        </div>
      )),
    [currentSlide]
  );

  return (
    <div className="sem8">
      <style>{styles}</style>
      <div className="slides-wrapper">{renderedSlides}</div>
      <div className="footer-nav">
        <div className="controls">
          <button onClick={previousSlide} disabled={currentSlide === 0} aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
            <span>Anterior</span>
          </button>
          <div className="slide-counter">
            <span>{currentSlide + 1}</span> / <span>{totalSlides}</span>
          </div>
          <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} aria-label="Siguiente">
            <span>Siguiente</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentacionSemana8;
