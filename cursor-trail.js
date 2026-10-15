// Recreating Forge Automotive's signature interactive cursor image trail
class ForgeCursorTrail {
  constructor(containerEl, imagesData) {
    this.container = containerEl;
    this.images = imagesData || [];
    this.currentIndex = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.threshold = 75; // Distance in px before dropping the next image
    this.maxActiveItems = 7;
    this.activeItems = [];
    this.isEnabled = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!this.container || !this.isEnabled || !this.images.length) return;
    this.init();
  }

  init() {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'forge-trail-wrapper';
    this.container.appendChild(this.wrapper);

    this.container.addEventListener('mousemove', (e) => this.onMouseMove(e), { passive: true });
    this.container.addEventListener('mouseenter', (e) => {
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    }, { passive: true });
  }

  onMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - this.lastX;
    const dy = y - this.lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > this.threshold) {
      this.spawnTrailItem(x, y);
      this.lastX = x;
      this.lastY = y;
    }
  }

  spawnTrailItem(x, y) {
    const data = this.images[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    const item = document.createElement('div');
    item.className = 'forge-trail-card';

    // Randomize slight rotation for luxury organic editorial feel (-8 to +8 deg)
    const randomRot = (Math.random() * 16 - 8).toFixed(1);

    item.innerHTML = `
      <div class="trail-card-inner">
        <img src="${data.img}" alt="${data.title}" draggable="false" />
        <div class="trail-card-caption">
          <span class="trail-tag">FORGE ARCHIVE</span>
          <span class="trail-title">${data.title}</span>
          <span class="trail-sub">${data.genre}</span>
        </div>
      </div>
    `;

    // Center item on cursor
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    item.style.setProperty('--rot', `${randomRot}deg`);

    this.wrapper.appendChild(item);
    this.activeItems.push(item);

    // Trigger enter animation on next frame
    requestAnimationFrame(() => {
      item.classList.add('is-active');
    });

    // Fade out and remove after animation
    setTimeout(() => {
      item.classList.add('is-leaving');
      setTimeout(() => {
        if (item.parentNode) {
          item.parentNode.removeChild(item);
        }
        const idx = this.activeItems.indexOf(item);
        if (idx > -1) this.activeItems.splice(idx, 1);
      }, 700);
    }, 1100);

    // Prune excessive items
    if (this.activeItems.length > this.maxActiveItems) {
      const oldest = this.activeItems.shift();
      if (oldest && !oldest.classList.contains('is-leaving')) {
        oldest.classList.add('is-leaving');
        setTimeout(() => {
          if (oldest.parentNode) oldest.parentNode.removeChild(oldest);
        }, 500);
      }
    }
  }
}
