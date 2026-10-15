// Interactive dark ambient canvas background (atmospheric particle veil & glowing constellation grid)
class ForgeCanvasBg {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180 };
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = 0;
    this.height = 0;
    this.animationId = null;

    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width || window.innerWidth;
    this.height = rect.height || window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  createParticles() {
    this.particles = [];
    // Number of particles proportional to screen area
    const count = Math.floor((this.width * this.height) / 12000);
    const clampedCount = Math.min(Math.max(count, 45), 110);

    for (let i = 0; i < clampedCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 0.6,
        baseAlpha: Math.random() * 0.3 + 0.1,
        alpha: 0.15,
        color: Math.random() > 0.85 ? '#C5A064' : (Math.random() > 0.7 ? '#6b1219' : '#F2F1ED')
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.targetX = e.clientX - rect.left;
      this.mouse.targetY = e.clientY - rect.top;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouse.targetX = -1000;
      this.mouse.targetY = -1000;
    });
  }

  animate() {
    // Smooth lerp mouse
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.1;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.1;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Subtle atmospheric dark vignette
    const grad = this.ctx.createRadialGradient(
      this.width * 0.5, this.height * 0.5, 50,
      this.width * 0.5, this.height * 0.5, Math.max(this.width, this.height) * 0.75
    );
    grad.addColorStop(0, 'rgba(18, 18, 20, 0.4)');
    grad.addColorStop(1, 'rgba(10, 10, 12, 0.95)');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw ambient mouse torch glow
    if (this.mouse.x > -500) {
      const mouseGrad = this.ctx.createRadialGradient(
        this.mouse.x, this.mouse.y, 0,
        this.mouse.x, this.mouse.y, 280
      );
      mouseGrad.addColorStop(0, 'rgba(197, 160, 100, 0.055)');
      mouseGrad.addColorStop(0.5, 'rgba(65, 3, 6, 0.035)');
      mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      this.ctx.fillStyle = mouseGrad;
      this.ctx.fillRect(0, 0, this.width, this.height);
    }

    // Update & draw particles and connecting lines
    const len = this.particles.length;
    for (let i = 0; i < len; i++) {
      const p = this.particles[i];

      // Float movement
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around bounds
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      // Mouse influence
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let alphaMultiplier = 1;

      if (dist < this.mouse.radius) {
        const force = (1 - dist / this.mouse.radius) * 0.015;
        p.x -= dx * force;
        p.y -= dy * force;
        alphaMultiplier = 1 + (1 - dist / this.mouse.radius) * 2;
      }

      // Draw particle dot
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.min(p.baseAlpha * alphaMultiplier, 0.7);
      this.ctx.fill();
      this.ctx.restore();

      // Connect neighbor particles with faint threads
      for (let j = i + 1; j < len; j++) {
        const p2 = this.particles[j];
        const ndx = p.x - p2.x;
        const ndy = p.y - p2.y;
        const ndist = Math.sqrt(ndx * ndx + ndy * ndy);

        if (ndist < 95) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = '#C5A064';
          const lineAlpha = (1 - ndist / 95) * 0.08;
          this.ctx.globalAlpha = lineAlpha;
          this.ctx.lineWidth = 0.6;
          this.ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
