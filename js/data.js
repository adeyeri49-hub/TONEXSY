// GAME STORE DATABASE - FORGE GAMES ATELIER
const FORGE_DATA = {
  // Studio & Publisher Marquee
  marqueeStudios: [
    { name: "PLAYSTATION STUDIOS", sub: "Naughty Dog • Santa Monica • Insomniac" },
    { name: "ROCKSTAR GAMES", sub: "GTA VI • Red Dead Redemption" },
    { name: "FROMSOFTWARE", sub: "Elden Ring • Bloodborne • Dark Souls" },
    { name: "XBOX GAME STUDIOS", sub: "Bethesda • Activision Blizzard • Halo" },
    { name: "CD PROJEKT RED", sub: "Cyberpunk 2077 • The Witcher" },
    { name: "NINTENDO", sub: "Zelda • Mario • Metroid Prime" },
    { name: "VALVE", sub: "Steam Store • Half-Life • Counter-Strike" },
    { name: "CAPCOM", sub: "Resident Evil • Monster Hunter • Street Fighter" },
    { name: "ELECTRONIC ARTS", sub: "EA SPORTS FC • Apex Legends • Battlefield" },
    { name: "SQUARE ENIX", sub: "Final Fantasy • Kingdom Hearts" }
  ],

  // Interactive Cursor Trail Game Covers for Hero Section
  trailImages: [
    {
      title: "Grand Theft Auto VI",
      genre: "Action / Open World",
      platform: "PS5 / Xbox / PC",
      price: "£69.99",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=640&q=85"
    },
    {
      title: "Elden Ring: Shadow of the Erdtree",
      genre: "Action RPG",
      platform: "PC / PS5 / Xbox",
      price: "£49.99",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=640&q=85"
    },
    {
      title: "Cyberpunk 2077: Phantom Liberty",
      genre: "Open World RPG",
      platform: "PC / PS5 / Xbox",
      price: "£34.99",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=640&q=85"
    },
    {
      title: "Black Myth: Wukong",
      genre: "Mythology Action RPG",
      platform: "PC / PS5",
      price: "£54.99",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=640&q=85"
    },
    {
      title: "EA SPORTS FC 25",
      genre: "Sports / Football",
      platform: "All Platforms",
      price: "£64.99",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=640&q=85"
    },
    {
      title: "Call of Duty: Black Ops 6",
      genre: "First Person Shooter",
      platform: "PC / PS5 / Xbox",
      price: "£69.99",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=640&q=85"
    },
    {
      title: "Baldur's Gate 3",
      genre: "CRPG / Turn-Based",
      platform: "PC / PS5 / Xbox",
      price: "£49.99",
      img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=640&q=85"
    },
    {
      title: "Marvel's Spider-Man 2",
      genre: "Superhero Action",
      platform: "PlayStation 5",
      price: "£59.99",
      img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=640&q=85"
    }
  ],

  // Sticky Approach Chapters (01, 02, 03)
  approachSteps: [
    {
      num: "01",
      total: "03",
      title: "Instant Key Delivery & Authenticity",
      description: "Direct official publisher keys, verified authentic game discs, and zero gray-market ambiguity. Every game key is instantly dispatched directly from authorized distributor vaults with 100% lifetime activation guarantee.",
      badge: "VERIFIED PUBLISHER LICENSES",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85"
    },
    {
      num: "02",
      total: "03",
      title: "Pre-order Vault & Day-One Priority",
      description: "Never miss a global release launch. Pre-order AAA titles with guaranteed day-one pre-load keys, exclusive steelbook casing add-ons, digital deluxe soundtrack bonuses, and VIP priority server access.",
      badge: "DAY-ONE PRE-LOAD ACCESS",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85"
    },
    {
      num: "03",
      total: "03",
      title: "Collector Steelbooks & Archival Discs",
      description: "For players who cherish physical ownership. Premium limited steelbook boxes, high-density physical optical discs, serialized authenticity plaques, and protective museum acrylic sleeves.",
      badge: "PHYSICAL COLLECTOR EDITIONS",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85"
    }
  ],

  // 3-Way Centerpiece ("Ordinary Ends Here" Spread)
  spreadShowcase: {
    center: {
      id: "gta-6",
      title: "Grand Theft Auto VI",
      edition: "Day-One Vault Edition",
      subtitle: "Rockstar Games • Launch Autumn 2025",
      price: 69.99,
      formattedPrice: "£69.99",
      badge: "MOST ANTICIPATED",
      platform: "PS5 • Xbox Series X • PC",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85",
      desc: "Welcome to Leonida. GTA VI pushes open-world gaming to new evolutionary peaks. Pre-order now to secure day-one priority access, bonus in-game currency, and exclusive steelbook sleeve."
    },
    left: {
      id: "elden-ring",
      title: "Elden Ring: Shadow of the Erdtree",
      edition: "Collector Edition Box",
      subtitle: "FromSoftware • In Stock Now",
      price: 49.99,
      formattedPrice: "£49.99",
      badge: "GAME OF THE YEAR",
      platform: "PC • PS5 • Xbox",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=85",
      desc: "Guided by Empyrean Miquella, venture into the Land of Shadow. Includes base game, Shadow of the Erdtree expansion key, and 40-page digital artbook."
    },
    right: {
      id: "cod-bo6",
      title: "Call of Duty: Black Ops 6",
      edition: "Vault Cross-Gen Edition",
      subtitle: "Activision • In Stock",
      price: 69.99,
      formattedPrice: "£69.99",
      badge: "NEW RELEASE",
      platform: "PC • PS5 • Xbox",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=85",
      desc: "Developed by Treyarch and Raven, featuring a cinematic single-player campaign, best-in-class Multiplayer, and the epic return of Round-Based Zombies."
    }
  },

  // Store Categories with Sticky Clip-path Image Wipe
  storeCategories: [
    {
      id: "action-adventure",
      title: "Action & Adventure",
      subtitle: "Cinematic Narratives",
      description: "Immerse yourself in world-class storytelling, jaw-dropping visual spectacles, and pulse-pounding combat. Featuring titles like God of War Ragnarök, Marvel's Spider-Man 2, and Ghost of Tsushima.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85",
      tags: ["Story-Rich", "Single Player", "Ray Traced 4K", "Haptic Feedback"],
      priceFrom: "From £39.99"
    },
    {
      id: "rpg-epics",
      title: "RPGs & Fantasy Epics",
      subtitle: "Deep Worlds & Player Choice",
      description: "From the brutal fantasy of Elden Ring and The Witcher 3 to the boundless tabletop freedom of Baldur's Gate 3. Hundreds of hours of exploration, skill leveling, and legendary loot.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=85",
      tags: ["Open World", "Character Customization", "Branching Paths"],
      priceFrom: "From £29.99"
    },
    {
      id: "shooters-multiplayer",
      title: "Competitive FPS & Warfare",
      subtitle: "High-Tickrate Battlefields",
      description: "Dominate the arena with instant digital keys for Call of Duty: Black Ops 6, Battlefield, Apex Legends Champion Editions, and Counter-Strike 2 tournament drops.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1400&q=85",
      tags: ["120 FPS Support", "Cross-Play", "Ranked Competitive"],
      priceFrom: "From £34.99"
    },
    {
      id: "sports-racing",
      title: "Sports & High-Octane Racing",
      subtitle: "Simulations & Matchdays",
      description: "Feel the stadium atmosphere with EA SPORTS FC 25, NBA 2K25, Gran Turismo 7, and Forza Horizon 5. True-to-life physics, real-world licenses, and Ultimate Team packs.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=85",
      tags: ["Authentic Rosters", "Force Feedback Wheels", "Online Leagues"],
      priceFrom: "From £44.99"
    },
    {
      id: "horror-survival",
      title: "Survival Horror & Atmosphere",
      subtitle: "Spine-Chilling Dread",
      description: "Survive the terrifying night with Silent Hill 2, Resident Evil 4 Remake, Dead Space, and Alan Wake 2. Uncompromising tension rendered in cutting-edge Unreal Engine 5.",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=85",
      tags: ["Atmospheric Audio", "Psychological Horror", "Unreal Engine 5"],
      priceFrom: "From £39.99"
    },
    {
      id: "collector-steelbooks",
      title: "Limited Steelbook Editions",
      subtitle: "Physical Keepsakes",
      description: "Cold-forged steel cases with embossed game art, heavy cloth maps, numbered authenticity cards, and physical soundtrack discs crafted for the true game collector.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85",
      tags: ["Steelbook Packaging", "Numbered Certificates", "Physical Cartridge/Disc"],
      priceFrom: "From £79.99"
    }
  ],

  // Full Games Catalog for Instant Purchase
  allGames: [
    {
      id: "gta-6",
      title: "Grand Theft Auto VI",
      publisher: "Rockstar Games",
      platform: "PS5 • Xbox Series X • PC",
      category: "action",
      price: 69.99,
      formattedPrice: "£69.99",
      oldPrice: "£79.99",
      badge: "PRE-ORDER",
      rating: "5.0 ★",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=85",
      desc: "The next chapter in the most celebrated open-world crime saga."
    },
    {
      id: "elden-ring-erdtree",
      title: "Elden Ring: Shadow of the Erdtree",
      publisher: "FromSoftware",
      platform: "PC • PS5 • Xbox",
      category: "rpg",
      price: 49.99,
      formattedPrice: "£49.99",
      oldPrice: "£59.99",
      badge: "BESTSELLER",
      rating: "4.9 ★",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85",
      desc: "Delve into the shadowy realm ruled by Messmer the Impaler."
    },
    {
      id: "cod-bo6",
      title: "Call of Duty: Black Ops 6",
      publisher: "Activision",
      platform: "PC • PS5 • Xbox",
      category: "fps",
      price: 69.99,
      formattedPrice: "£69.99",
      oldPrice: null,
      badge: "NEW",
      rating: "4.8 ★",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=85",
      desc: "Signature Black Ops multiplayer and mind-bending spy thriller campaign."
    },
    {
      id: "fc-25",
      title: "EA SPORTS FC 25",
      publisher: "Electronic Arts",
      platform: "All Platforms",
      category: "sports",
      price: 59.99,
      formattedPrice: "£59.99",
      oldPrice: "£69.99",
      badge: "-15% OFF",
      rating: "4.7 ★",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=85",
      desc: "FC IQ tactical overhaul and 5v5 Rush mode across 19,000+ players."
    },
    {
      id: "black-myth",
      title: "Black Myth: Wukong",
      publisher: "Game Science",
      platform: "PC • PS5",
      category: "action",
      price: 54.99,
      formattedPrice: "£54.99",
      oldPrice: null,
      badge: "TOP RATED",
      rating: "4.9 ★",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=85",
      desc: "Step into the role of the Destined One in Chinese mythology."
    },
    {
      id: "cyberpunk-pl",
      title: "Cyberpunk 2077: Ultimate Edition",
      publisher: "CD Projekt Red",
      platform: "PC • PS5 • Xbox",
      category: "rpg",
      price: 44.99,
      formattedPrice: "£44.99",
      oldPrice: "£64.99",
      badge: "-30% OFF",
      rating: "4.9 ★",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85",
      desc: "Includes base game and Phantom Liberty spy thriller expansion."
    },
    {
      id: "baldurs-gate-3",
      title: "Baldur's Gate 3",
      publisher: "Larian Studios",
      platform: "PC • PS5 • Xbox",
      category: "rpg",
      price: 49.99,
      formattedPrice: "£49.99",
      oldPrice: null,
      badge: "GOTY WINNER",
      rating: "5.0 ★",
      img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=85",
      desc: "Party-based RPG set in the universe of Dungeons & Dragons."
    },
    {
      id: "spiderman-2",
      title: "Marvel's Spider-Man 2",
      publisher: "PlayStation Studios",
      platform: "PlayStation 5",
      category: "action",
      price: 59.99,
      formattedPrice: "£59.99",
      oldPrice: "£69.99",
      badge: "PS5 EXCLUSIVE",
      rating: "4.9 ★",
      img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=85",
      desc: "Peter Parker and Miles Morales battle the monstrous Venom in NYC."
    },
    {
      id: "silent-hill-2",
      title: "Silent Hill 2 Remake",
      publisher: "Konami • Bloober",
      platform: "PC • PS5",
      category: "horror",
      price: 54.99,
      formattedPrice: "£54.99",
      oldPrice: null,
      badge: "SURVIVAL HORROR",
      rating: "4.8 ★",
      img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=85",
      desc: "Experience the psychological masterpiece remade with Unreal Engine 5."
    }
  ]
};
