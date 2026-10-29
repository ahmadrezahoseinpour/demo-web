import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 60;

    // Resize canvas
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Create particles
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.clientWidth;
        this.y = Math.random() * canvas.clientHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#667eea' : '#f093fb';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.clientWidth ||
            this.y < 0 || this.y > canvas.clientHeight) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#667eea';
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Background Canvas */}
      <div className="hero-canvas" aria-hidden="true">
        <canvas ref={canvasRef} className="hero-particles" />
      </div>

      {/* Mesh Gradients */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-blob blob-1" />
        <div className="mesh-blob blob-2" />
        <div className="mesh-blob blob-3" />
        <div className="mesh-blob blob-4" />
      </div>

      {/* Grid Pattern */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge reveal animate-fade-in-up">
            <span className="badge badge-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Trusted by 500+ Brands Worldwide
            </span>
          </div>

          {/* Title */}
          <h1 id="hero-title" className="hero-title reveal animate-fade-in-up stagger-1">
            Digital Marketing That{' '}
            <span className="highlight">Drives Revenue</span>{' '}
            <br />
            <span className="highlight-sub">Not Just Traffic</span>
          </h1>

          {/* Description */}
          <p className="hero-description reveal animate-fade-in-up stagger-2">
            We combine data-driven strategy with creative excellence to deliver measurable growth.
            SEO, PPC, Social Media, Content & more — all under one roof.
          </p>

          {/* Actions */}
          <div className="hero-actions reveal animate-fade-in-up stagger-3">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Start Your Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/portfolio" className="btn btn-outlined btn-lg">
              <span>View Our Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust reveal animate-fade-in-up stagger-4">
            <div className="trust-logos" aria-label="Trusted by">
              <span className="trust-label">Trusted by industry leaders:</span>
              <div className="logo-row">
                {['TechFlow', 'DataCorp', 'CloudScale', 'FitLife', 'DevTools', 'ShopSmart'].map((name, i) => (
                  <span key={name} className="trust-logo" style={{ transitionDelay: `${i * 50}ms` }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats reveal animate-fade-in-up stagger-5">
            <div className="stat">
              <div className="stat-value" data-count="500">0</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat">
              <div className="stat-value" data-count="50">0</div>
              <div className="stat-label">M$ Revenue Generated</div>
            </div>
            <div className="stat">
              <div className="stat-value" data-count="98">0</div>
              <div className="stat-label">% Client Retention</div>
            </div>
            <div className="stat">
              <div className="stat-value" data-count="24">0</div>
              <div className="stat-label">/7 Support</div>
            </div>
          </div>
        </div>

        {/* Visual - Interactive Dashboard */}
        <div className="hero-visual reveal animate-slide-in-right stagger-3">
          <div className="hero-dashboard">
            {/* Dashboard Header */}
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="dashboard-tabs">
                <button className="tab active" data-tab="overview">Overview</button>
                <button className="tab" data-tab="traffic">Traffic</button>
                <button className="tab" data-tab="conversion">Conversion</button>
              </div>
            </div>

            {/* Chart Area */}
            <div className="dashboard-chart">
              <svg viewBox="0 0 400 280" className="chart-svg" aria-hidden="true">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="50%" stopColor="#f093fb" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Grid lines */}
                <g stroke="#rgba(255,255,255,0.05)" strokeWidth="0.5">
                  <line x1="40" y1="40" x2="360" y2="40" />
                  <line x1="40" y1="110" x2="360" y2="110" />
                  <line x1="40" y1="180" x2="360" y2="180" />
                  <line x1="40" y1="250" x2="360" y2="250" />
                </g>
                {/* Area */}
                <path
                  className="chart-area"
                  d="M40,250 C80,230 120,170 160,180 C200,190 240,130 280,140 C320,150 360,110 360,110 L360,250 Z"
                  fill="url(#areaGradient)"
                />
                {/* Line */}
                <path
                  className="chart-line"
                  d="M40,250 C80,230 120,170 160,180 C200,190 240,130 280,140 C320,150 360,110 360,110"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />
                {/* Data points */}
                <g>
                  <circle cx="40" cy="250" r="6" fill="#667eea" className="data-point" />
                  <circle cx="100" cy="230" r="6" fill="#f093fb" className="data-point" />
                  <circle cx="160" cy="180" r="6" fill="#764ba2" className="data-point" />
                  <circle cx="220" cy="130" r="6" fill="#667eea" className="data-point" />
                  <circle cx="280" cy="140" r="6" fill="#f093fb" className="data-point" />
                  <circle cx="340" cy="110" r="6" fill="#764ba2" className="data-point" />
                </g>
              </svg>
            </div>

            {/* Metrics */}
            <div className="dashboard-metrics">
              <div className="metric">
                <div className="metric-icon" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div className="metric-content">
                  <span className="metric-value">+156%</span>
                  <span className="metric-label">Organic Traffic</span>
                </div>
                <span className="metric-trend positive">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  +23% vs last month
                </span>
              </div>
              <div className="metric">
                <div className="metric-icon" style={{ background: 'linear-gradient(135deg, #f093fb, #667eea)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="metric-content">
                  <span className="metric-value">+89%</span>
                  <span className="metric-label">Conversion Rate</span>
                </div>
                <span className="metric-trend positive">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  +12% vs last month
                </span>
              </div>
              <div className="metric">
                <div className="metric-icon" style={{ background: 'linear-gradient(135deg, #34C759, #30D158)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div className="metric-content">
                  <span className="metric-value">-42%</span>
                  <span className="metric-label">Cost Per Lead</span>
                </div>
                <span className="metric-trend positive">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  -18% vs last month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}