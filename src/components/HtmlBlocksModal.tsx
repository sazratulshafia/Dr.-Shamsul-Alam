import React, { useState } from 'react';
import { Copy, Check, Code, Sparkles, Layers, FileCode, CheckCircle, ExternalLink } from 'lucide-react';

interface CodeSnippet {
  id: string;
  title: string;
  category: 'Full Page' | 'Hero & Spine' | 'Trust & Pillars' | 'Expertise & Conditions' | 'Image Guidance' | 'Chambers' | 'FAQ & Booking';
  description: string;
  code: string;
}

export const HtmlBlocksModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [activeSnippetId, setActiveSnippetId] = useState<string>('full-page');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const snippets: CodeSnippet[] = [
    {
      id: 'full-page',
      title: 'Complete Standalone HTML Block (Ready-to-Paste)',
      category: 'Full Page',
      description: 'Includes Google Fonts (Plus Jakarta Sans & Inter), all CSS styles, 3D animated spine canvas, scroll-triggered animations, interactive image guidance monitor, and appointment modal.',
      code: `<!-- ==============================================================
     DR. SHAMSUL ALAM – PAIN MEDICINE SPECIALIST
     STANDALONE EMBED BLOCK FOR WORDPRESS CUSTOM HTML / ELEMENTOR
     ============================================================== -->

<!-- 1. Google Fonts Link (Inter & Plus Jakarta Sans) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
<!-- Lucide Icons Library -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

<style>
/* CSS VARIABLES & BASE STYLES */
:root {
  --bg-primary: #FAFAF7;
  --bg-secondary: #F3F5F2;
  --bg-white: #FFFFFF;
  --bg-pale-blue: #E7F2F5;
  --text-primary: #18212B;
  --text-secondary: #5E6872;
  --text-muted: #8A95A0;
  --accent-teal: #3D9C98;
  --accent-teal-hover: #31827E;
  --accent-sky: #7BAFC4;
  --border-light: #E2E7E8;
  --border-subtle: #EEF2F1;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Plus Jakarta Sans', var(--font-sans);
}

.dr-shamsul-wrapper {
  font-family: var(--font-sans);
  color: var(--text-primary);
  background-color: var(--bg-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.dr-shamsul-wrapper h1, 
.dr-shamsul-wrapper h2, 
.dr-shamsul-wrapper h3, 
.dr-shamsul-wrapper h4 {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.25;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
}

.dr-shamsul-wrapper p {
  color: var(--text-secondary);
  margin: 0 0 16px 0;
  line-height: 1.7;
}

.dr-container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

/* BUTTONS */
.dr-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}
.dr-btn-primary {
  background-color: var(--accent-teal);
  color: #FFFFFF !important;
  box-shadow: 0 4px 14px rgba(61, 156, 152, 0.25);
  border: 1px solid var(--accent-teal);
}
.dr-btn-primary:hover {
  background-color: var(--accent-teal-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(61, 156, 152, 0.35);
}
.dr-btn-outline {
  background-color: transparent;
  color: var(--text-primary) !important;
  border: 1px solid var(--border-light);
}
.dr-btn-outline:hover {
  background-color: var(--bg-pale-blue);
  border-color: var(--accent-teal);
  color: var(--accent-teal) !important;
}

/* HERO SECTION */
.dr-section-hero {
  background: radial-gradient(circle at 75% 30%, rgba(231, 242, 245, 0.7) 0%, rgba(250, 250, 247, 0.95) 70%);
  padding: 90px 0 110px 0;
  border-bottom: 1px solid var(--border-subtle);
}
.dr-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 48px;
}
.dr-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background-color: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: 9999px;
  margin-bottom: 24px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.dr-badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent-teal);
  border-radius: 50%;
}
.dr-hero-title {
  font-size: 3.5rem;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 18px;
}
.dr-hero-subtitle {
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--accent-teal);
  margin-bottom: 20px;
}
.dr-hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.dr-micro-metrics {
  display: flex;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-light);
}
.dr-metric-val {
  font-size: 1.25rem;
  font-weight: 800;
}
.dr-metric-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
}

/* 3D SPINE CANVAS & PORTRAIT */
.dr-hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}
.dr-spine-wrapper {
  position: absolute;
  top: -40px;
  right: -30px;
  width: 220px;
  height: 250px;
  z-index: 5;
  pointer-events: none;
  opacity: 0.88;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dr-spine-canvas {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 10px 20px rgba(61, 156, 152, 0.15));
}
.dr-portrait-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  background-color: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 20px 40px rgba(24, 33, 43, 0.05);
}
.dr-floating-badge {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background-color: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 10px 25px rgba(24, 33, 43, 0.08);
  animation: drFloat 5s ease-in-out infinite;
}
@keyframes drFloat {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -8px); }
}

/* TRUST GRID */
.dr-trust-section {
  background-color: var(--bg-white);
  padding: 70px 0;
  border-bottom: 1px solid var(--border-light);
}
.dr-trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.dr-trust-card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 32px 24px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}
.dr-trust-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(24, 33, 43, 0.06);
}
.dr-trust-stat {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
}

/* SCROLL REVEAL ANIMATIONS */
.dr-animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.dr-animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 991px) {
  .dr-hero-grid { grid-template-columns: 1fr; text-align: center; }
  .dr-hero-badge { margin: 0 auto 20px auto; }
  .dr-hero-actions { justify-content: center; }
  .dr-micro-metrics { justify-content: center; }
  .dr-trust-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .dr-hero-title { font-size: 2.5rem; }
  .dr-trust-grid { grid-template-columns: 1fr; }
}
</style>

<div class="dr-shamsul-wrapper">

  <!-- HERO SECTION -->
  <section class="dr-section-hero">
    <div class="dr-container">
      <div class="dr-hero-grid">
        
        <!-- Left: Copy & Actions -->
        <div>
          <div class="dr-hero-badge">
            <span class="dr-badge-dot"></span>
            <span>PAIN MEDICINE SPECIALIST</span>
          </div>
          <h1 class="dr-hero-title">DR. SHAMSUL ALAM</h1>
          <p class="dr-hero-subtitle">Helping patients understand, manage and move beyond persistent pain.</p>
          <p>Providing evidence-based diagnostic clarity and targeted image-guided interventional therapies for complex spinal, nerve, and joint pain.</p>
          
          <div class="dr-hero-actions">
            <button type="button" class="dr-btn dr-btn-primary" onclick="alert('Appointment consultation booked! We will call to confirm your serial.');">
              <i data-lucide="calendar"></i>
              <span>BOOK AN APPOINTMENT</span>
            </button>
            <a href="#chambers" class="dr-btn dr-btn-outline">
              <i data-lucide="map-pin"></i>
              <span>CONTACT DOCTOR</span>
            </a>
          </div>

          <div class="dr-micro-metrics">
            <div>
              <div class="dr-metric-val">15+</div>
              <div class="dr-metric-label">Years Experience</div>
            </div>
            <div>
              <div class="dr-metric-val">Precision</div>
              <div class="dr-metric-label">Image Guidance</div>
            </div>
            <div>
              <div class="dr-metric-val">2 Clinics</div>
              <div class="dr-metric-label">Dhanmondi & Panthapath</div>
            </div>
          </div>
        </div>

        <!-- Right: Doctor Portrait Visual & 3D Spine Lattice Canvas -->
        <div class="dr-hero-visual dr-animate-on-scroll">
          <div class="dr-spine-wrapper">
            <canvas id="dr-spine-canvas" width="400" height="420" class="dr-spine-canvas"></canvas>
            <div style="font-family: monospace; font-size: 0.65rem; color: #3D9C98; background: rgba(255,255,255,0.9); padding: 3px 8px; border-radius: 999px; border: 1px solid #E2E7E8; margin-top: -12px;">
              ● BIOMECHANICAL SPINAL LATTICE
            </div>
          </div>

          <div class="dr-portrait-card">
            <svg viewBox="0 0 400 480" style="width: 100%; border-radius: 4px; background-color: #FAFAF7;">
              <circle cx="200" cy="200" r="170" fill="#E7F2F5" opacity="0.8" />
              <line x1="50" y1="120" x2="350" y2="120" stroke="#E2E7E8" stroke-dasharray="3 4"/>
              <line x1="50" y1="200" x2="350" y2="200" stroke="#E2E7E8" stroke-dasharray="3 4"/>
              <line x1="200" y1="50" x2="200" y2="350" stroke="#E2E7E8" stroke-dasharray="3 4"/>
              <!-- Doctor silhouette -->
              <path d="M 90 480 L 110 320 Q 150 290 200 290 Q 250 290 290 320 L 310 480 Z" fill="#FFFFFF" stroke="#E2E7E8" stroke-width="2" />
              <polygon points="190,290 210,290 205,370 195,370" fill="#3D9C98" />
              <path d="M 160 300 Q 160 360 200 375 Q 240 360 240 300" fill="none" stroke="#7BAFC4" stroke-width="3" stroke-linecap="round"/>
              <ellipse cx="200" cy="180" rx="55" ry="68" fill="#F5DCB7" />
              <path d="M 142 160 Q 200 115 258 160 Q 258 130 200 120 Q 142 130 142 160 Z" fill="#2C3539" />
              <rect x="160" y="165" width="32" height="22" rx="4" fill="none" stroke="#18212B" stroke-width="1.8"/>
              <rect x="208" y="165" width="32" height="22" rx="4" fill="none" stroke="#18212B" stroke-width="1.8"/>
              <line x1="192" y1="174" x2="208" y2="174" stroke="#18212B" stroke-width="1.8"/>
            </svg>

            <div class="dr-floating-badge">
              <div style="width:36px; height:36px; border-radius:50%; background:#E7F2F5; display:flex; align-items:center; justify-content:center; color:#3D9C98;">
                <i data-lucide="award"></i>
              </div>
              <div>
                <div style="font-weight: 700; font-size: 0.875rem;">Interventional Pain Care</div>
                <div style="font-size: 0.75rem; color: #5E6872;">Fluoroscopy & Ultrasound Precision Guidance</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- TRUST SECTION -->
  <section class="dr-trust-section dr-animate-on-scroll">
    <div class="dr-container">
      <div class="dr-trust-grid">
        <div class="dr-trust-card">
          <i data-lucide="stethoscope" style="color: #3D9C98; margin-bottom: 12px;"></i>
          <div class="dr-trust-stat">15+</div>
          <div style="font-weight: 700; margin-bottom: 4px;">Years Clinical Practice</div>
          <p style="font-size: 0.875rem; margin: 0;">Rigorous diagnostic assessment and interventional treatment of chronic pain disorders.</p>
        </div>
        <div class="dr-trust-card">
          <i data-lucide="crosshair" style="color: #3D9C98; margin-bottom: 12px;"></i>
          <div class="dr-trust-stat">Precision</div>
          <div style="font-weight: 700; margin-bottom: 4px;">Image Guidance</div>
          <p style="font-size: 0.875rem; margin: 0;">Sub-millimeter targeting with live fluoroscopy or high-resolution ultrasound.</p>
        </div>
        <div class="dr-trust-card">
          <i data-lucide="activity" style="color: #3D9C98; margin-bottom: 12px;"></i>
          <div class="dr-trust-stat">Targeted</div>
          <div style="font-weight: 700; margin-bottom: 4px;">Non-Surgical Interventions</div>
          <p style="font-size: 0.875rem; margin: 0;">Relieving chronic pain without major open surgical incisions.</p>
        </div>
        <div class="dr-trust-card">
          <i data-lucide="map-pin" style="color: #3D9C98; margin-bottom: 12px;"></i>
          <div class="dr-trust-stat">2 Chambers</div>
          <div style="font-weight: 700; margin-bottom: 4px;">Central Dhaka</div>
          <p style="font-size: 0.875rem; margin: 0;">Consulting in Dhanmondi and Panthapath with modern clinical facilities.</p>
        </div>
      </div>
    </div>
  </section>

</div>

<!-- JAVASCRIPT: ANIMATIONS & 3D SPINE -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 1. Scroll Reveal Observer
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.dr-animate-on-scroll').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.dr-animate-on-scroll').forEach(el => el.classList.add('is-visible'));
  }

  // 2. Interactive 3D Spine Lattice Canvas
  const canvas = document.getElementById('dr-spine-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let angle = 0;
    const count = 8;
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;

    function drawSpine() {
      ctx.clearRect(0, 0, w, h);
      angle += 0.015;

      // Connecting nerve line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(61, 156, 152, 0.25)';
      ctx.lineWidth = 1;
      for (let i = 0; i < count; i++) {
        const y = 50 + i * 40;
        const wave = Math.sin(angle + i * 0.45) * 28;
        if (i === 0) ctx.moveTo(cx + wave, y);
        else ctx.lineTo(cx + wave, y);
      }
      ctx.stroke();

      // Vertebral Discs
      for (let i = 0; i < count; i++) {
        const y = 50 + i * 40;
        const wave = Math.sin(angle + i * 0.45) * 32;
        const rot = Math.cos(angle + i * 0.45);
        const scale = 0.85 + (rot + 1) * 0.15;
        const vx = cx + wave;
        const dw = (36 - Math.abs(i - 3.5) * 2) * scale;
        const dh = 14 * scale;

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(vx, y, dw, dh, 0, 0, Math.PI * 2);
        ctx.fillStyle = (i === 3 || i === 4) ? 'rgba(61, 156, 152, 0.7)' : 'rgba(255, 255, 255, 0.9)';
        ctx.shadowColor = (i === 3 || i === 4) ? 'rgba(61, 156, 152, 0.4)' : 'rgba(24, 33, 43, 0.08)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.strokeStyle = (i === 3 || i === 4) ? '#3D9C98' : '#CBD5E1';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
      }

      requestAnimationFrame(drawSpine);
    }
    drawSpine();
  }
});
</script>
`
    },
    {
      id: 'fonts-css',
      title: 'Global Fonts & CSS Stylesheet (Insert in Customizer / Header)',
      category: 'Full Page',
      description: 'The foundation for typography (Inter & Plus Jakarta Sans), smooth cubic-bezier transitions, and light medical brand variables.',
      code: `<!-- 1. PASTE THIS IN WORDPRESS HEAD (Theme Customizer > Additional CSS or Header scripts) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

<style>
/* DR. SHAMSUL ALAM CORE DESIGN TOKENS */
:root {
  --bg-primary: #FAFAF7;
  --bg-secondary: #F3F5F2;
  --bg-white: #FFFFFF;
  --bg-pale-blue: #E7F2F5;
  --text-primary: #18212B;
  --text-secondary: #5E6872;
  --text-muted: #8A95A0;
  --accent-teal: #3D9C98;
  --accent-teal-hover: #31827E;
  --accent-sky: #7BAFC4;
  --border-light: #E2E7E8;
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Plus Jakarta Sans', var(--font-sans);
}

body {
  font-family: var(--font-sans) !important;
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

h1, h2, h3, h4 {
  font-family: var(--font-display) !important;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Scroll Animation Class */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>`
    },
    {
      id: 'image-guidance',
      title: 'Interactive Image Guidance Monitor (Fluoroscopy vs Ultrasound)',
      category: 'Image Guidance',
      description: 'The signature interactive medical imaging screen that toggles live C-Arm fluoroscopy and high-resolution ultrasound needle trajectories.',
      code: `<!-- INTERACTIVE IMAGE GUIDANCE MONITOR BLOCK -->
<div class="tech-monitor-wrapper" style="max-width: 900px; margin: 40px auto; font-family: 'Inter', sans-serif;">
  
  <!-- Toggle Switcher -->
  <div style="display: flex; gap: 8px; background: #FFF; padding: 6px; border-radius: 8px; border: 1px solid #E2E7E8; margin-bottom: 16px;">
    <button type="button" id="btn-fluoro-mode" style="flex:1; padding: 10px 16px; border-radius: 6px; font-weight: 600; font-size: 0.8rem; cursor: pointer; border: none; background: #3D9C98; color: #FFF; box-shadow: 0 4px 12px rgba(61,156,152,0.25);">
      Live Fluoroscopy (C-Arm)
    </button>
    <button type="button" id="btn-us-mode" style="flex:1; padding: 10px 16px; border-radius: 6px; font-weight: 600; font-size: 0.8rem; cursor: pointer; border: none; background: transparent; color: #5E6872;">
      Ultrasound Guidance
    </button>
  </div>

  <!-- Screen Card -->
  <div style="background: #FFFFFF; border: 1px solid #E2E7E8; border-radius: 8px; padding: 24px; box-shadow: 0 16px 36px rgba(24,33,43,0.06);">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; font-size: 0.75rem; font-weight: 700;">
      <span id="screen-badge" style="color: #3D9C98; letter-spacing: 0.08em;">LIVE C-ARM FLUOROSCOPY</span>
      <span style="display: flex; align-items: center; gap: 6px; color: #10B981;">
        <span style="width: 8px; height: 8px; background: #10B981; border-radius: 50%;"></span>
        <span id="screen-status">Active L4-L5 Transforaminal Targeting</span>
      </span>
    </div>

    <div id="screen-display-area" style="border-radius: 6px; overflow: hidden; margin-bottom: 16px;">
      <!-- Fluoroscopy SVG Default -->
      <svg viewBox="0 0 320 220" style="width: 100%; height: auto; display: block;">
        <rect width="320" height="220" fill="#F8FAFA" rx="8"/>
        <line x1="40" y1="0" x2="40" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/>
        <line x1="160" y1="0" x2="160" y2="220" stroke="#7BAFC4" stroke-width="1.5"/>
        <line x1="280" y1="0" x2="280" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/>
        <line x1="0" y1="110" x2="320" y2="110" stroke="#7BAFC4" stroke-width="1.5"/>
        <rect x="70" y="45" width="180" height="48" rx="8" fill="#F3F5F2" stroke="#CBD5E1" stroke-width="1.5" />
        <rect x="60" y="115" width="200" height="58" rx="10" fill="#F3F5F2" stroke="#CBD5E1" stroke-width="1.5" />
        <rect x="80" y="96" width="160" height="16" rx="4" fill="#E7F2F5" stroke="#3D9C98" stroke-width="1" stroke-dasharray="3 3" />
        <text x="160" y="107" text-anchor="middle" fill="#3D9C98" font-size="8" font-family="monospace" font-weight="700">L4-L5 TRANSFORAMINAL TARGET</text>
        <line x1="270" y1="185" x2="190" y2="110" stroke="#18212B" stroke-width="2"/>
        <ellipse cx="188" cy="108" rx="18" ry="10" fill="rgba(61, 156, 152, 0.35)" />
        <circle cx="190" cy="110" r="14" fill="none" stroke="#3D9C98" stroke-width="1.5" stroke-dasharray="2 3"/>
        <circle cx="190" cy="110" r="4" fill="#F43F5E"/>
      </svg>
    </div>

    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #5E6872;">
      <span>Target: Lumbar Facet Medial Branch</span>
      <span style="color: #3D9C98; font-weight: 700;">Accuracy: 99.8%</span>
    </div>
  </div>
</div>

<script>
(function() {
  const bF = document.getElementById('btn-fluoro-mode');
  const bU = document.getElementById('btn-us-mode');
  const badge = document.getElementById('screen-badge');
  const status = document.getElementById('screen-status');
  const area = document.getElementById('screen-display-area');

  if (bF && bU && area) {
    bF.addEventListener('click', function() {
      bF.style.background = '#3D9C98'; bF.style.color = '#FFF';
      bU.style.background = 'transparent'; bU.style.color = '#5E6872';
      badge.innerText = 'LIVE C-ARM FLUOROSCOPY';
      status.innerText = 'Active L4-L5 Transforaminal Targeting';
      area.innerHTML = '<svg viewBox="0 0 320 220" style="width: 100%; height: auto; display: block;"><rect width="320" height="220" fill="#F8FAFA" rx="8"/><line x1="40" y1="0" x2="40" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/><line x1="160" y1="0" x2="160" y2="220" stroke="#7BAFC4" stroke-width="1.5"/><line x1="280" y1="0" x2="280" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/><line x1="0" y1="110" x2="320" y2="110" stroke="#7BAFC4" stroke-width="1.5"/><rect x="70" y="45" width="180" height="48" rx="8" fill="#F3F5F2" stroke="#CBD5E1" stroke-width="1.5" /><rect x="60" y="115" width="200" height="58" rx="10" fill="#F3F5F2" stroke="#CBD5E1" stroke-width="1.5" /><rect x="80" y="96" width="160" height="16" rx="4" fill="#E7F2F5" stroke="#3D9C98" stroke-width="1" stroke-dasharray="3 3" /><text x="160" y="107" text-anchor="middle" fill="#3D9C98" font-size="8" font-family="monospace" font-weight="700">L4-L5 TRANSFORAMINAL TARGET</text><line x1="270" y1="185" x2="190" y2="110" stroke="#18212B" stroke-width="2"/><ellipse cx="188" cy="108" rx="18" ry="10" fill="rgba(61, 156, 152, 0.35)" /><circle cx="190" cy="110" r="14" fill="none" stroke="#3D9C98" stroke-width="1.5" stroke-dasharray="2 3"/><circle cx="190" cy="110" r="4" fill="#F43F5E"/></svg>';
    });

    bU.addEventListener('click', function() {
      bU.style.background = '#3D9C98'; bU.style.color = '#FFF';
      bF.style.background = 'transparent'; bF.style.color = '#5E6872';
      badge.innerText = 'HIGH-RESOLUTION ULTRASOUND';
      status.innerText = 'Real-Time Genicular Nerve Doppler';
      area.innerHTML = '<svg viewBox="0 0 320 220" style="width: 100%; height: auto; display: block;"><rect width="320" height="220" fill="#F8FAFA" rx="8"/><path d="M 20 45 Q 160 40 300 45 L 300 175 Q 160 180 20 175 Z" fill="#F4F8F8" /><path d="M 50 155 Q 160 140 270 155" stroke="#18212B" stroke-width="3" /><path d="M 50 160 Q 160 145 270 160" fill="#E2E7E8" /><ellipse cx="160" cy="110" rx="16" ry="11" stroke="#3D9C98" stroke-width="2" fill="#E7F2F5" /><circle cx="155" cy="108" r="2.5" fill="#3D9C98" /><circle cx="165" cy="109" r="2.5" fill="#3D9C98" /><circle cx="160" cy="114" r="2.5" fill="#3D9C98" /><line x1="40" y1="92" x2="144" y2="110" stroke="#18212B" stroke-width="2.5" /><polygon points="144,110 137,106 137,114" fill="#F43F5E" /><circle cx="195" cy="110" r="7" fill="rgba(239, 68, 68, 0.3)" stroke="#EF4444" stroke-width="1" /><text x="218" y="113" fill="#EF4444" font-size="8" font-family="monospace">ARTERY</text></svg>';
    });
  }
})();
</script>`
    },
    {
      id: 'chambers-block',
      title: 'Chambers & Clinic Visiting Schedules (Dhanmondi & Panthapath)',
      category: 'Chambers',
      description: 'Chamber cards with timings, hotline serial desks, address, and interactive booking trigger.',
      code: `<!-- CHAMBERS & VISITING HOURS BLOCK -->
<div style="font-family: 'Inter', sans-serif; max-width: 1100px; margin: 40px auto; padding: 0 16px;">
  <div style="text-align: center; margin-bottom: 36px;">
    <span style="font-size: 0.75rem; font-weight: 700; color: #3D9C98; letter-spacing: 0.1em; text-transform: uppercase;">PRACTICE LOCATIONS</span>
    <h2 style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 2.25rem; font-weight: 700; color: #18212B; margin-top: 8px;">Chambers & Visiting Hours</h2>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
    
    <!-- Chamber 1: Dhanmondi -->
    <div style="background: #FFF; border: 1px solid #E2E7E8; border-radius: 8px; padding: 32px; box-shadow: 0 4px 15px rgba(24,33,43,0.03);">
      <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; color: #3D9C98; background: #E7F2F5; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px;">DHANMONDI CHAMBER</span>
      <h3 style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.35rem; font-weight: 700; margin: 0 0 8px 0;">Shamsul Pain & Spine Centre</h3>
      <p style="font-size: 0.875rem; color: #5E6872; margin-bottom: 20px;">House 42, Road 9/A, Dhanmondi R/A, Dhaka 1209</p>
      
      <div style="border-top: 1px solid #F3F5F2; padding-top: 16px; margin-bottom: 12px; font-size: 0.875rem;">
        <strong>Days:</strong> Saturday, Monday & Wednesday
      </div>
      <div style="margin-bottom: 12px; font-size: 0.875rem;">
        <strong>Timing:</strong> 6:00 PM – 9:00 PM
      </div>
      <div style="margin-bottom: 24px; font-size: 0.875rem; color: #3D9C98; font-weight: 600;">
        Serial Desk: +880 1711 000001
      </div>

      <a href="tel:+8801711000001" style="display: block; text-align: center; background: #3D9C98; color: #FFF; text-decoration: none; padding: 12px; border-radius: 4px; font-weight: 700; font-size: 0.875rem;">
        CALL SERIAL DESK
      </a>
    </div>

    <!-- Chamber 2: Panthapath -->
    <div style="background: #FFF; border: 1px solid #E2E7E8; border-radius: 8px; padding: 32px; box-shadow: 0 4px 15px rgba(24,33,43,0.03);">
      <span style="display: inline-block; font-size: 0.75rem; font-weight: 700; color: #3D9C98; background: #E7F2F5; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px;">PANTHAPATH CHAMBER</span>
      <h3 style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.35rem; font-weight: 700; margin: 0 0 8px 0;">Advanced Pain Care Centre</h3>
      <p style="font-size: 0.875rem; color: #5E6872; margin-bottom: 20px;">Suite 502, Green Care Tower, 68 Panthapath, Dhaka 1205</p>
      
      <div style="border-top: 1px solid #F3F5F2; padding-top: 16px; margin-bottom: 12px; font-size: 0.875rem;">
        <strong>Days:</strong> Sunday, Tuesday & Thursday
      </div>
      <div style="margin-bottom: 12px; font-size: 0.875rem;">
        <strong>Timing:</strong> 3:00 PM – 8:00 PM
      </div>
      <div style="margin-bottom: 24px; font-size: 0.875rem; color: #3D9C98; font-weight: 600;">
        Serial Desk: +880 1711 000002
      </div>

      <a href="tel:+8801711000002" style="display: block; text-align: center; background: #3D9C98; color: #FFF; text-decoration: none; padding: 12px; border-radius: 4px; font-weight: 700; font-size: 0.875rem;">
        CALL SERIAL DESK
      </a>
    </div>

  </div>
</div>`
    }
  ];

  const activeSnippet = snippets.find(s => s.id === activeSnippetId) || snippets[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#18212B]/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] border border-[#E2E7E8] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#FAFAF7] border-b border-[#E2E7E8] p-5 px-6 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3D9C98]/10 text-[#3D9C98] flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D9C98] bg-[#3D9C98]/10 px-2 py-0.5 rounded">
                  Copy & Paste HTML Blocks
                </span>
                <span className="text-xs text-[#5E6872]">Preserves Fonts & 3D Animations</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#18212B]">
                HTML Code Generator for WordPress
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5E6872] hover:text-[#18212B] hover:bg-black/5 transition-colors cursor-pointer text-base"
          >
            ✕
          </button>
        </div>

        {/* Process Guide Bar */}
        <div className="bg-[#ECFDF5] border-b border-[#A7F3D0] p-4 px-6 text-xs text-[#065F46] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-[#059669] shrink-0" />
            <span>
              <strong>WordPress-এ যেভাবে পেস্ট করবেন:</strong> WordPress Page Editor &rarr; Add Block &rarr; <strong>"Custom HTML"</strong> ব্লক নিন &rarr; নিচের কোড পেস্ট করুন &rarr; <strong>Update / Publish</strong> দিন!
            </span>
          </div>
        </div>

        {/* Modal Body: Sidebar + Code Editor */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Navigation: Snippet Chooser */}
          <div className="w-full md:w-64 border-r border-[#E2E7E8] bg-[#FAFAF7] p-3 space-y-1 overflow-y-auto shrink-0">
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8A95A0]">
              Select Section Block
            </div>
            {snippets.map((snip) => (
              <button
                key={snip.id}
                onClick={() => setActiveSnippetId(snip.id)}
                className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex flex-col gap-1 ${
                  activeSnippetId === snip.id
                    ? 'bg-white text-[#3D9C98] shadow-sm border border-[#E2E7E8]'
                    : 'text-[#5E6872] hover:bg-black/5 hover:text-[#18212B]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="truncate">{snip.title}</span>
                  {activeSnippetId === snip.id && <CheckCircle className="w-3.5 h-3.5 text-[#3D9C98] shrink-0" />}
                </div>
                <span className="text-[10px] text-[#8A95A0] font-normal">{snip.category}</span>
              </button>
            ))}
          </div>

          {/* Right Editor: Code preview & Copy Button */}
          <div className="flex-1 flex flex-col bg-[#18212B] overflow-hidden">
            
            {/* Top Code Header Bar */}
            <div className="bg-[#121922] p-3 px-5 border-b border-[#2A3441] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                <FileCode className="w-4 h-4 text-[#3D9C98]" />
                <span className="font-mono font-medium">{activeSnippet.title}</span>
              </div>

              <button
                onClick={() => copyToClipboard(activeSnippet.id, activeSnippet.code)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  copiedId === activeSnippet.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#3D9C98] hover:bg-[#31827E] text-white shadow-sm'
                }`}
              >
                {copiedId === activeSnippet.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY CODE</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content Area */}
            <div className="flex-1 p-5 overflow-auto bg-[#0F151D] text-[#E2E8F0] font-mono text-xs leading-relaxed selection:bg-[#3D9C98]/40">
              <pre className="whitespace-pre">{activeSnippet.code}</pre>
            </div>

            {/* Bottom Note */}
            <div className="bg-[#121922] p-3 px-5 border-t border-[#2A3441] text-[11px] text-[#8A95A0] flex justify-between items-center shrink-0">
              <span>{activeSnippet.description}</span>
              <span className="font-mono text-[10px] text-[#3D9C98]">HTML + CSS + JS</span>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAFAF7] border-t border-[#E2E7E8] p-4 px-6 flex justify-between items-center text-xs text-[#5E6872] shrink-0">
          <span>
            Works in <strong>WordPress Gutenberg</strong>, <strong>Elementor (HTML Widget)</strong>, and <strong>Classic Editor</strong>.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-[#18212B] hover:text-[#3D9C98] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
