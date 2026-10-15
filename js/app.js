// ==========================================================================
// FORGE GAMES ATELIER - CORE INTERACTION & ANIMATION ENGINE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Preloader Dialog Simulation
  initPreloader();

  // 2. Ambient Fluid Background Canvas
  const canvasEl = document.getElementById('ambient-canvas');
  if (canvasEl && typeof ForgeCanvasBg !== 'undefined') {
    new ForgeCanvasBg(canvasEl);
  }

  // 3. Signature Interactive Cursor Game Trail
  const trailLayer = document.getElementById('trail-layer');
  if (trailLayer && typeof ForgeCursorTrail !== 'undefined' && FORGE_DATA && FORGE_DATA.trailImages) {
    new ForgeCursorTrail(trailLayer, FORGE_DATA.trailImages);
  }

  // 4. Publisher Infinite Marquee
  initMarquee();

  // 5. Sticky Approach Chapters (01, 02, 03)
  initApproachChapters();

  // 6. Services Section with Vertical Clip-Path Wipe
  initServicesWipe();

  // 7. 3-Way Masterpiece Spread ("Ordinary Ends Here")
  initThreeGameSpread();

  // 8. Live Video Games Catalog Grid & Filters
  initLiveStore();

  // 9. Shopping Cart Drawer System
  initCartSystem();

  // 10. Game Inspection Modal
  initGameModal();

  // 11. Header & Fullscreen Navigation
  initHeaderAndNav();
});

/* 1. PRELOADER */
function initPreloader() {
  const loader = document.getElementById('intro-loader');
  const fill = document.getElementById('intro-progress-fill');
  const num = document.getElementById('intro-progress-num');
  if (!loader || !fill || !num) return;

  let progress = 0;
  const timer = setInterval(() => {
    progress += Math.floor(Math.random() * 9) + 4;
    if (progress > 100) progress = 100;

    fill.style.transform = `scaleX(${progress / 100})`;
    num.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(timer);
      setTimeout(() => {
        loader.classList.add('is-hidden');
      }, 400);
    }
  }, 40);
}

/* 2. INFINITE TICKER MARQUEE */
function initMarquee() {
  const track1 = document.getElementById('marquee-track-1');
  const track2 = document.getElementById('marquee-track-2');
  if (!track1 || !FORGE_DATA.marqueeStudios) return;

  const html = FORGE_DATA.marqueeStudios.map(studio => `
    <div class="marquee-item">
      <span class="marquee-name">${studio.name}</span>
      <span class="marquee-sub">${studio.sub}</span>
    </div>
  `).join('');

  track1.innerHTML = html;
  if (track2) track2.innerHTML = html;
}

/* 3. STICKY APPROACH CHAPTERS */
function initApproachChapters() {
  const column = document.getElementById('approach-steps-column');
  const slides = document.querySelectorAll('.approach-slide');
  if (!column || !FORGE_DATA.approachSteps) return;

  column.innerHTML = FORGE_DATA.approachSteps.map((step, idx) => `
    <div class="approach-step-card ${idx === 0 ? 'is-active' : ''}" data-step-idx="${idx}">
      <div class="step-number-tag">${step.num} <span>/ ${step.total}</span></div>
      <h3 class="step-card-title">${step.title}</h3>
      <p class="step-card-body">${step.description}</p>
      <a href="#store-section" class="forge-cta-button" style="padding: 1.2rem 2.8rem;">
        <span>
          <span>V</span><span>i</span><span>e</span><span>w</span><span>&nbsp;</span><span>T</span><span>i</span><span>t</span><span>l</span><span>e</span><span>s</span>
        </span>
        <i></i>
      </a>
    </div>
  `).join('');

  const stepCards = document.querySelectorAll('.approach-step-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.getAttribute('data-step-idx'), 10);
        stepCards.forEach((c, i) => c.classList.toggle('is-active', i === idx));
        slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      }
    });
  }, { threshold: 0.55 });

  stepCards.forEach(card => observer.observe(card));
}

/* 4. SERVICES ACCORDION WITH VERTICAL CLIP-PATH WIPE */
function initServicesWipe() {
  const itemsCol = document.getElementById('services-items-column');
  const viewport = document.getElementById('services-wipe-viewport');
  const titleDisplay = document.getElementById('wipe-title-display');
  const numDisplay = document.getElementById('wipe-number-display');
  if (!itemsCol || !viewport || !FORGE_DATA.storeCategories) return;

  // Render left column cards
  itemsCol.innerHTML = FORGE_DATA.storeCategories.map((cat, idx) => `
    <div class="service-card-block" data-service-idx="${idx}">
      <span class="service-label-tag">CATEGORY ${String(idx + 1).padStart(2, '0')} // ${cat.subtitle}</span>
      <h3 class="service-main-title">${cat.title}</h3>
      <p class="service-main-desc">${cat.description}</p>
      <div class="service-feature-tags">
        ${cat.tags.map(t => `<span class="service-mini-tag">${t}</span>`).join('')}
      </div>
      <div class="service-cost-tag">${cat.priceFrom}</div>
      <a href="#store-section" class="forge-cta-button" style="margin-top: 1rem;">
        <span>
          <span>B</span><span>r</span><span>o</span><span>w</span><span>s</span><span>e</span><span>&nbsp;</span><span>G</span><span>e</span><span>n</span><span>r</span><span>e</span>
        </span>
        <i></i>
      </a>
    </div>
  `).join('');

  // Render right wipe images
  FORGE_DATA.storeCategories.forEach((cat, idx) => {
    const img = document.createElement('img');
    img.src = cat.image;
    img.alt = cat.title;
    img.className = `services-wipe-img ${idx === 0 ? 'is-active' : ''}`;
    img.dataset.wipeIdx = idx;
    viewport.appendChild(img);
  });

  const blocks = document.querySelectorAll('.service-card-block');
  const wipeImgs = document.querySelectorAll('.services-wipe-img');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.getAttribute('data-service-idx'), 10);
        wipeImgs.forEach((img, i) => {
          if (i <= idx) {
            img.classList.add('is-active');
          } else {
            img.classList.remove('is-active');
          }
        });

        const activeCat = FORGE_DATA.storeCategories[idx];
        if (titleDisplay) titleDisplay.textContent = activeCat.title;
        if (numDisplay) numDisplay.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(FORGE_DATA.storeCategories.length).padStart(2, '0')}`;
      }
    });
  }, { threshold: 0.5 });

  blocks.forEach(b => observer.observe(b));
}

/* 5. 3-WAY GAME SPREAD ("Ordinary Ends Here") */
function initThreeGameSpread() {
  const spreadStage = document.getElementById('three-game-spread');
  if (!spreadStage) return;

  const cards = Array.from(spreadStage.querySelectorAll('.spread-game-card'));
  let order = [0, 1, 2]; // center, left, right

  function updateSpreadLayout() {
    cards.forEach(c => c.classList.remove('card-center', 'card-left', 'card-right'));
    if (cards[order[0]]) cards[order[0]].classList.add('card-center');
    if (cards[order[1]]) cards[order[1]].classList.add('card-left');
    if (cards[order[2]]) cards[order[2]].classList.add('card-right');
  }

  // Click card to make center
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.buy-game-quick-btn')) return;
      if (order[0] !== idx) {
        if (order[1] === idx) {
          order = [order[1], order[2], order[0]];
        } else {
          order = [order[2], order[0], order[1]];
        }
        updateSpreadLayout();
      }
    });
  });

  const prevBtn = document.getElementById('spread-prev-btn');
  const nextBtn = document.getElementById('spread-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      order = [order[1], order[2], order[0]];
      updateSpreadLayout();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      order = [order[2], order[0], order[1]];
      updateSpreadLayout();
    });
  }

  // Parallax Spread on scroll
  window.addEventListener('scroll', () => {
    const rect = spreadStage.getBoundingClientRect();
    const winHeight = window.innerHeight;
    if (rect.top < winHeight && rect.bottom > 0) {
      const progress = (winHeight - rect.top) / (winHeight + rect.height);
      const spread = Math.min(Math.max((progress - 0.4) * 120, 0), 60);

      const leftCard = spreadStage.querySelector('.card-left');
      const rightCard = spreadStage.querySelector('.card-right');
      if (leftCard) leftCard.style.transform = `translateX(calc(-34rem - ${spread}px)) translateZ(-40px) rotateY(14deg) scale(0.9)`;
      if (rightCard) rightCard.style.transform = `translateX(calc(34rem + ${spread}px)) translateZ(-40px) rotateY(-14deg) scale(0.9)`;
    }
  }, { passive: true });
}

/* 6. LIVE VIDEO GAMES CATALOG & FILTERS */
function initLiveStore() {
  const grid = document.getElementById('store-games-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || !FORGE_DATA.allGames) return;

  function renderGames(filterCategory = 'all') {
    const filtered = filterCategory === 'all' 
      ? FORGE_DATA.allGames 
      : FORGE_DATA.allGames.filter(g => g.category === filterCategory);

    grid.innerHTML = filtered.map(game => `
      <div class="store-game-card" data-game-id="${game.id}">
        <div class="game-card-img-wrap">
          <img src="${game.img}" alt="${game.title}" loading="lazy" />
          <span class="game-card-badge">${game.badge}</span>
          <span class="game-card-rating">${game.rating}</span>
        </div>
        <div class="game-card-details">
          <div>
            <h3 class="game-card-title">${game.title}</h3>
            <span class="game-card-platforms">${game.platform}</span>
          </div>
          <div class="game-card-pricing-row">
            <div class="game-price-wrap">
              <span class="game-card-current-price">${game.formattedPrice}</span>
              ${game.oldPrice ? `<span class="game-card-old-price">${game.oldPrice}</span>` : ''}
            </div>
            <button class="game-card-buy-btn add-to-cart-action" data-game-id="${game.id}">ADD TO CART</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderGames('all');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      e.target.classList.add('is-active');
      const cat = e.target.getAttribute('data-category');
      renderGames(cat);
    });
  });

  // Click card to open modal, or Buy button to add to cart
  grid.addEventListener('click', (e) => {
    const buyBtn = e.target.closest('.add-to-cart-action');
    if (buyBtn) {
      e.stopPropagation();
      const gameId = buyBtn.getAttribute('data-game-id');
      const game = FORGE_DATA.allGames.find(g => g.id === gameId);
      if (game && window.ForgeCart) {
        window.ForgeCart.addItem({
          id: game.id,
          title: game.title,
          platform: game.platform,
          price: game.price,
          img: game.img
        });
      }
      return;
    }

    const card = e.target.closest('.store-game-card');
    if (card) {
      const gameId = card.getAttribute('data-game-id');
      if (window.openGameModalById) {
        window.openGameModalById(gameId);
      }
    }
  });

  // Also bind spread Quick Buy buttons
  document.querySelectorAll('.buy-game-quick-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const gameId = e.target.getAttribute('data-game-id');
      const game = FORGE_DATA.allGames.find(g => g.id === gameId);
      if (game && window.ForgeCart) {
        window.ForgeCart.addItem({
          id: game.id,
          title: game.title,
          platform: game.platform,
          price: game.price,
          img: game.img
        });
      }
    });
  });
}

/* 7. SHOPPING CART SYSTEM */
function initCartSystem() {
  const toggleBtn = document.getElementById('cart-drawer-toggle');
  const closeBtn = document.getElementById('cart-close-btn');
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  const counterEl = document.getElementById('cart-counter');
  const itemsContainer = document.getElementById('cart-items-body');
  const totalPriceEl = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  let cart = [
    {
      id: "gta-6",
      title: "Grand Theft Auto VI",
      platform: "PS5 • Xbox • PC",
      price: 69.99,
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
    }
  ];

  function openCart() {
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
  }

  function closeCart() {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (backdrop) backdrop.addEventListener('click', closeCart);

  function renderCart() {
    counterEl.textContent = cart.length;

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <p style="text-align: center; color: rgba(255,255,255,0.4); margin-top: 4rem;">
          Your game cart is empty.<br />Select a title to begin your order.
        </p>
      `;
      totalPriceEl.textContent = '£0.00';
      return;
    }

    let total = 0;
    itemsContainer.innerHTML = cart.map((item, idx) => {
      total += item.price;
      return `
        <div class="cart-item-row">
          <img src="${item.img}" alt="${item.title}" />
          <div class="cart-item-meta">
            <div>
              <h4 class="cart-item-name">${item.title}</h4>
              <span class="cart-item-sub">${item.platform}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <span class="cart-item-price-val">£${item.price.toFixed(2)}</span>
              <button class="cart-item-remove-btn" data-remove-idx="${idx}">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    totalPriceEl.textContent = `£${total.toFixed(2)}`;

    // Remove handlers
    itemsContainer.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.getAttribute('data-remove-idx'), 10);
        cart.splice(idx, 1);
        renderCart();
      });
    });
  }

  renderCart();

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Your cart is empty. Please add a game first.");
        return;
      }
      alert("Order Confirmed! Your official game activation key(s) have been generated and dispatched to your email with instant activation codes.");
      cart = [];
      renderCart();
      closeCart();
    });
  }

  window.ForgeCart = {
    addItem: (item) => {
      cart.push(item);
      renderCart();
      openCart();
    }
  };
}

/* 8. GAME INSPECTION VIEW MODAL */
function initGameModal() {
  const modal = document.getElementById('game-view-modal');
  const closeBtn = document.getElementById('modal-close-cross');
  const coverImg = document.getElementById('modal-cover-img');
  const titleEl = document.getElementById('modal-game-name');
  const publisherEl = document.getElementById('modal-game-publisher');
  const summaryEl = document.getElementById('modal-game-summary');
  const platformsEl = document.getElementById('modal-game-platforms');
  const costEl = document.getElementById('modal-game-cost');
  const badgeEl = document.getElementById('modal-game-badge');
  const addBtn = document.getElementById('modal-add-cart-btn');

  let activeGame = null;

  window.openGameModalById = function(gameId) {
    const game = FORGE_DATA.allGames.find(g => g.id === gameId);
    if (!game) return;
    activeGame = game;

    coverImg.src = game.img;
    coverImg.alt = game.title;
    titleEl.textContent = game.title;
    publisherEl.textContent = `${game.publisher} • Official License`;
    summaryEl.textContent = game.desc;
    platformsEl.textContent = game.platform;
    costEl.textContent = game.formattedPrice;
    badgeEl.textContent = game.badge;

    modal.classList.add('is-open');
  };

  function closeModal() {
    modal.classList.remove('is-open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (activeGame && window.ForgeCart) {
        window.ForgeCart.addItem({
          id: activeGame.id,
          title: activeGame.title,
          platform: activeGame.platform,
          price: activeGame.price,
          img: activeGame.img
        });
        closeModal();
      }
    });
  }
}

/* 9. HEADER & NAVIGATION OVERLAY */
function initHeaderAndNav() {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navDrawer = document.getElementById('fullscreen-nav');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  if (menuToggle && navDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navDrawer.classList.contains('is-open');
      if (isOpen) {
        navDrawer.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
      } else {
        navDrawer.classList.add('is-open');
        menuToggle.classList.add('is-active');
      }
    });

    navDrawer.querySelectorAll('.nav-anchor').forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
      });
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
