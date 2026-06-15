// Can I Run It? - Interactive Edition
// Hardware and Game Databases & Comparison Algorithm

// --- HARDWARE DATABASES ---
const cpuDatabase = [
  // Intel Core
  { name: "Intel Core i9-14900K", brand: "Intel", score: 1050, tier: "Ultra High-End" },
  { name: "Intel Core i7-14700K", brand: "Intel", score: 1000, tier: "Ultra High-End" },
  { name: "Intel Core i5-14600K", brand: "Intel", score: 950, tier: "High-End" },
  { name: "Intel Core i9-13900K", brand: "Intel", score: 980, tier: "Ultra High-End" },
  { name: "Intel Core i7-13700K", brand: "Intel", score: 940, tier: "High-End" },
  { name: "Intel Core i5-13600K", brand: "Intel", score: 900, tier: "High-End" },
  { name: "Intel Core i5-13400", brand: "Intel", score: 820, tier: "Mid-Range" },
  { name: "Intel Core i7-12700K", brand: "Intel", score: 880, tier: "High-End" },
  { name: "Intel Core i5-12600K", brand: "Intel", score: 840, tier: "Mid-Range" },
  { name: "Intel Core i5-12400", brand: "Intel", score: 780, tier: "Mid-Range" },
  { name: "Intel Core i7-11700K", brand: "Intel", score: 750, tier: "Mid-Range" },
  { name: "Intel Core i5-11400", brand: "Intel", score: 680, tier: "Mid-Range" },
  { name: "Intel Core i7-10700K", brand: "Intel", score: 720, tier: "Mid-Range" },
  { name: "Intel Core i5-10400", brand: "Intel", score: 640, tier: "Budget-Friendly" },
  { name: "Intel Core i7-9700K", brand: "Intel", score: 660, tier: "Mid-Range" },
  { name: "Intel Core i5-9400", brand: "Intel", score: 550, tier: "Budget-Friendly" },
  { name: "Intel Core i7-8700K", brand: "Intel", score: 620, tier: "Budget-Friendly" },
  { name: "Intel Core i5-8400", brand: "Intel", score: 520, tier: "Budget-Friendly" },
  { name: "Intel Core i7-7700K", brand: "Intel", score: 500, tier: "Budget-Friendly" },
  { name: "Intel Core i5-7400", brand: "Intel", score: 420, tier: "Legacy" },
  { name: "Intel Core i7-6700K", brand: "Intel", score: 480, tier: "Legacy" },
  { name: "Intel Core i7-4790K", brand: "Intel", score: 400, tier: "Legacy" },
  { name: "Intel Core i7-4770", brand: "Intel", score: 380, tier: "Legacy" },
  { name: "Intel Core i5-4590", brand: "Intel", score: 320, tier: "Legacy" },
  { name: "Intel Core i7-3770", brand: "Intel", score: 300, tier: "Legacy" },
  { name: "Intel Core i5-3570K", brand: "Intel", score: 280, tier: "Legacy" },
  { name: "Intel Core i5-2500K", brand: "Intel", score: 220, tier: "Legacy" },
  { name: "Intel Pentium G4560", brand: "Intel", score: 180, tier: "Legacy" },

  // AMD Ryzen / FX
  { name: "AMD Ryzen 7 7800X3D", brand: "AMD", score: 1060, tier: "Ultra High-End" },
  { name: "AMD Ryzen 9 7950X3D", brand: "AMD", score: 1040, tier: "Ultra High-End" },
  { name: "AMD Ryzen 9 7950X", brand: "AMD", score: 960, tier: "Ultra High-End" },
  { name: "AMD Ryzen 9 7900X", brand: "AMD", score: 930, tier: "High-End" },
  { name: "AMD Ryzen 7 7700X", brand: "AMD", score: 910, tier: "High-End" },
  { name: "AMD Ryzen 5 7600X", brand: "AMD", score: 860, tier: "Mid-Range" },
  { name: "AMD Ryzen 5 7600", brand: "AMD", score: 830, tier: "Mid-Range" },
  { name: "AMD Ryzen 7 5800X3D", brand: "AMD", score: 890, tier: "High-End" },
  { name: "AMD Ryzen 9 5900X", brand: "AMD", score: 840, tier: "Mid-Range" },
  { name: "AMD Ryzen 7 5800X", brand: "AMD", score: 810, tier: "Mid-Range" },
  { name: "AMD Ryzen 7 5700X", brand: "AMD", score: 790, tier: "Mid-Range" },
  { name: "AMD Ryzen 5 5600X", brand: "AMD", score: 760, tier: "Mid-Range" },
  { name: "AMD Ryzen 5 5600", brand: "AMD", score: 740, tier: "Mid-Range" },
  { name: "AMD Ryzen 5 5500", brand: "AMD", score: 660, tier: "Budget-Friendly" },
  { name: "AMD Ryzen 7 3700X", brand: "AMD", score: 630, tier: "Budget-Friendly" },
  { name: "AMD Ryzen 5 3600", brand: "AMD", score: 580, tier: "Budget-Friendly" },
  { name: "AMD Ryzen 5 2600", brand: "AMD", score: 460, tier: "Legacy" },
  { name: "AMD Ryzen 5 1600X", brand: "AMD", score: 400, tier: "Legacy" },
  { name: "AMD Ryzen 5 1600", brand: "AMD", score: 380, tier: "Legacy" },
  { name: "AMD Ryzen 3 3300X", brand: "AMD", score: 450, tier: "Legacy" },
  { name: "AMD Ryzen 3 3100", brand: "AMD", score: 410, tier: "Legacy" },
  { name: "AMD Ryzen 3 1200", brand: "AMD", score: 260, tier: "Legacy" },
  { name: "AMD FX-8370", brand: "AMD", score: 210, tier: "Legacy" },
  { name: "AMD FX-8350", brand: "AMD", score: 200, tier: "Legacy" },
  { name: "AMD FX-8310", brand: "AMD", score: 190, tier: "Legacy" },
  { name: "AMD FX-6300", brand: "AMD", score: 150, tier: "Legacy" }
];

const gpuDatabase = [
  // NVIDIA RTX 40 Series
  { name: "NVIDIA GeForce RTX 4090", brand: "NVIDIA", score: 1200, vram: 24, tier: "Ultra High-End" },
  { name: "NVIDIA GeForce RTX 4080 Super", brand: "NVIDIA", score: 1080, vram: 16, tier: "Ultra High-End" },
  { name: "NVIDIA GeForce RTX 4080", brand: "NVIDIA", score: 1050, vram: 16, tier: "Ultra High-End" },
  { name: "NVIDIA GeForce RTX 4070 Ti Super", brand: "NVIDIA", score: 980, vram: 16, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 4070 Ti", brand: "NVIDIA", score: 950, vram: 12, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 4070 Super", brand: "NVIDIA", score: 910, vram: 12, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 4070", brand: "NVIDIA", score: 880, vram: 12, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 4060 Ti 16GB", brand: "NVIDIA", score: 790, vram: 16, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 4060 Ti 8GB", brand: "NVIDIA", score: 780, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 4060", brand: "NVIDIA", score: 700, vram: 8, tier: "Mid-Range" },

  // NVIDIA RTX 30 Series
  { name: "NVIDIA GeForce RTX 3090 Ti", brand: "NVIDIA", score: 940, vram: 24, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 3090", brand: "NVIDIA", score: 900, vram: 24, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 3080 Ti", brand: "NVIDIA", score: 880, vram: 12, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 3080", brand: "NVIDIA", score: 840, vram: 10, tier: "High-End" },
  { name: "NVIDIA GeForce RTX 3070 Ti", brand: "NVIDIA", score: 760, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 3070", brand: "NVIDIA", score: 720, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 3060 Ti", brand: "NVIDIA", score: 660, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 3060 12GB", brand: "NVIDIA", score: 580, vram: 12, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 3050", brand: "NVIDIA", score: 440, vram: 8, tier: "Budget-Friendly" },

  // NVIDIA RTX 20 Series
  { name: "NVIDIA GeForce RTX 2080 Ti", brand: "NVIDIA", score: 740, vram: 11, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 2080 Super", brand: "NVIDIA", score: 690, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 2080", brand: "NVIDIA", score: 650, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 2070 Super", brand: "NVIDIA", score: 610, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 2070", brand: "NVIDIA", score: 560, vram: 8, tier: "Mid-Range" },
  { name: "NVIDIA GeForce RTX 2060 Super", brand: "NVIDIA", score: 530, vram: 8, tier: "Budget-Friendly" },
  { name: "NVIDIA GeForce RTX 2060", brand: "NVIDIA", score: 480, vram: 6, tier: "Budget-Friendly" },

  // NVIDIA GTX Series
  { name: "NVIDIA GeForce GTX 1080 Ti", brand: "NVIDIA", score: 580, vram: 11, tier: "Mid-Range" },
  { name: "NVIDIA GeForce GTX 1080", brand: "NVIDIA", score: 490, vram: 8, tier: "Budget-Friendly" },
  { name: "NVIDIA GeForce GTX 1070 Ti", brand: "NVIDIA", score: 450, vram: 8, tier: "Budget-Friendly" },
  { name: "NVIDIA GeForce GTX 1070", brand: "NVIDIA", score: 410, vram: 8, tier: "Budget-Friendly" },
  { name: "NVIDIA GeForce GTX 1660 Ti", brand: "NVIDIA", score: 400, vram: 6, tier: "Budget-Friendly" },
  { name: "NVIDIA GeForce GTX 1660 Super", brand: "NVIDIA", score: 380, vram: 6, tier: "Budget-Friendly" },
  { name: "NVIDIA GeForce GTX 1660", brand: "NVIDIA", score: 350, vram: 6, tier: "Budget-Friendly" },
  { name: "NVIDIA GeForce GTX 1650 Super", brand: "NVIDIA", score: 300, vram: 4, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 1060 6GB", brand: "NVIDIA", score: 310, vram: 6, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 1060 3GB", brand: "NVIDIA", score: 270, vram: 3, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 1650", brand: "NVIDIA", score: 240, vram: 4, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 1050 Ti", brand: "NVIDIA", score: 200, vram: 4, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 1050", brand: "NVIDIA", score: 160, vram: 2, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 980 Ti", brand: "NVIDIA", score: 360, vram: 6, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 970", brand: "NVIDIA", score: 280, vram: 4, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 960", brand: "NVIDIA", score: 180, vram: 2, tier: "Legacy" },
  { name: "NVIDIA GeForce GTX 750 Ti", brand: "NVIDIA", score: 110, vram: 2, tier: "Legacy" },

  // AMD Radeon RX 7000 Series
  { name: "AMD Radeon RX 7900 XTX", brand: "AMD", score: 1080, vram: 24, tier: "Ultra High-End" },
  { name: "AMD Radeon RX 7900 XT", brand: "AMD", score: 980, vram: 20, tier: "Ultra High-End" },
  { name: "AMD Radeon RX 7800 XT", brand: "AMD", score: 870, vram: 16, tier: "High-End" },
  { name: "AMD Radeon RX 7700 XT", brand: "AMD", score: 780, vram: 12, tier: "Mid-Range" },
  { name: "AMD Radeon RX 7600 XT", brand: "AMD", score: 650, vram: 16, tier: "Mid-Range" },
  { name: "AMD Radeon RX 7600", brand: "AMD", score: 600, vram: 8, tier: "Mid-Range" },

  // AMD Radeon RX 6000 Series
  { name: "AMD Radeon RX 6950 XT", brand: "AMD", score: 920, vram: 16, tier: "High-End" },
  { name: "AMD Radeon RX 6900 XT", brand: "AMD", score: 880, vram: 16, tier: "High-End" },
  { name: "AMD Radeon RX 6800 XT", brand: "AMD", score: 820, vram: 16, tier: "High-End" },
  { name: "AMD Radeon RX 6800", brand: "AMD", score: 740, vram: 16, tier: "Mid-Range" },
  { name: "AMD Radeon RX 6750 XT", brand: "AMD", score: 700, vram: 12, tier: "Mid-Range" },
  { name: "AMD Radeon RX 6700 XT", brand: "AMD", score: 660, vram: 12, tier: "Mid-Range" },
  { name: "AMD Radeon RX 6650 XT", brand: "AMD", score: 580, vram: 8, tier: "Mid-Range" },
  { name: "AMD Radeon RX 6600 XT", brand: "AMD", score: 550, vram: 8, tier: "Budget-Friendly" },
  { name: "AMD Radeon RX 6600", brand: "AMD", score: 490, vram: 8, tier: "Budget-Friendly" },
  { name: "AMD Radeon RX 6500 XT", brand: "AMD", score: 280, vram: 4, tier: "Legacy" },

  // AMD Radeon Older
  { name: "AMD Radeon RX 5700 XT", brand: "AMD", score: 530, vram: 8, tier: "Budget-Friendly" },
  { name: "AMD Radeon RX 5700", brand: "AMD", score: 470, vram: 8, tier: "Budget-Friendly" },
  { name: "AMD Radeon RX 5600 XT", brand: "AMD", score: 410, vram: 6, tier: "Legacy" },
  { name: "AMD Radeon RX 5500 XT", brand: "AMD", score: 290, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon RX 590", brand: "AMD", score: 300, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon RX 580", brand: "AMD", score: 280, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon RX 570", brand: "AMD", score: 240, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon RX 480", brand: "AMD", score: 260, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon RX 470", brand: "AMD", score: 230, vram: 4, tier: "Legacy" },
  { name: "AMD Radeon RX Vega 64", brand: "AMD", score: 420, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon RX Vega 56", brand: "AMD", score: 370, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon R9 390", brand: "AMD", score: 250, vram: 8, tier: "Legacy" },
  { name: "AMD Radeon R9 290X", brand: "AMD", score: 230, vram: 4, tier: "Legacy" },

  // Intel Arc & Integrated
  { name: "Intel Arc A770", brand: "Intel", score: 590, vram: 16, tier: "Mid-Range" },
  { name: "Intel Arc A750", brand: "Intel", score: 540, vram: 8, tier: "Mid-Range" },
  { name: "Intel Arc A580", brand: "Intel", score: 450, vram: 8, tier: "Budget-Friendly" },
  { name: "Intel Arc A380", brand: "Intel", score: 210, vram: 6, tier: "Legacy" },
  { name: "Intel Arc Graphics (Core Ultra)", brand: "Intel", score: 150, vram: 4, tier: "Integrated" },
  { name: "Intel UHD Graphics 770", brand: "Intel", score: 40, vram: 1, tier: "Integrated" },
  { name: "Intel UHD Graphics 730", brand: "Intel", score: 30, vram: 1, tier: "Integrated" },
  { name: "Intel HD Graphics 630", brand: "Intel", score: 15, vram: 1, tier: "Integrated" },
  { name: "Intel HD Graphics 4000", brand: "Intel", score: 5, vram: 0.5, tier: "Integrated" }
];


// --- GAMES DATABASE ---
const gamesDatabase = [
  {
    id: "cyberpunk2077",
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    releaseYear: 2020,
    developer: "CD Projekt Red",
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
    description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core i7-6700 or AMD Ryzen 5 1600", score: 400 },
        gpu: { name: "NVIDIA GTX 1060 6GB or AMD Radeon RX 580", score: 280, vram: 6 },
        ram: 12,
        os: "Windows 10 64-bit",
        storage: { type: "SSD", size: 70 }
      },
      recommended: {
        cpu: { name: "Intel Core i7-12700 or AMD Ryzen 7 7800X3D", score: 850 },
        gpu: { name: "NVIDIA RTX 3060 or AMD Radeon RX 6700 XT", score: 580, vram: 12 },
        ram: 16,
        os: "Windows 10/11 64-bit",
        storage: { type: "SSD", size: 70 }
      }
    }
  },
  {
    id: "gtav",
    title: "Grand Theft Auto V",
    genre: "Action-Adventure",
    releaseYear: 2015,
    developer: "Rockstar Games",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    description: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening elements of the criminal underworld.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core 2 Quad Q6600 or AMD Phenom 9850", score: 100 },
        gpu: { name: "NVIDIA 9800 GT 1GB or AMD HD 4870 1GB", score: 50, vram: 1 },
        ram: 4,
        os: "Windows 10 64-bit",
        storage: { type: "HDD", size: 72 }
      },
      recommended: {
        cpu: { name: "Intel Core i5-3470 or AMD FX-8350", score: 240 },
        gpu: { name: "NVIDIA GTX 660 2GB or AMD HD 7870 2GB", score: 140, vram: 2 },
        ram: 8,
        os: "Windows 10 64-bit",
        storage: { type: "HDD", size: 72 }
      }
    }
  },
  {
    id: "eldenring",
    title: "Elden Ring",
    genre: "Action RPG",
    releaseYear: 2022,
    developer: "FromSoftware",
    imageUrl: "https://images.unsplash.com/photo-1655821888788-6107699e173b?w=800&auto=format&fit=crop&q=80",
    description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core i5-8400 or AMD Ryzen 3 3300X", score: 480 },
        gpu: { name: "NVIDIA GTX 1060 3GB or AMD Radeon RX 580 4GB", score: 260, vram: 3 },
        ram: 12,
        os: "Windows 10",
        storage: { type: "SSD", size: 60 }
      },
      recommended: {
        cpu: { name: "Intel Core i7-8700K or AMD Ryzen 5 3600", score: 580 },
        gpu: { name: "NVIDIA GTX 1070 8GB or AMD Radeon RX Vega 56 8GB", score: 400, vram: 8 },
        ram: 16,
        os: "Windows 10/11",
        storage: { type: "SSD", size: 60 }
      }
    }
  },
  {
    id: "hogwartslegacy",
    title: "Hogwarts Legacy",
    genre: "Action RPG",
    releaseYear: 2023,
    developer: "Avalanche Software",
    imageUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=800&auto=format&fit=crop&q=80",
    description: "Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core i5-6600 or AMD Ryzen 5 1400", score: 320 },
        gpu: { name: "NVIDIA GTX 960 4GB or AMD Radeon RX 470 4GB", score: 210, vram: 4 },
        ram: 16,
        os: "Windows 10 64-bit",
        storage: { type: "SSD", size: 85 }
      },
      recommended: {
        cpu: { name: "Intel Core i7-8700 or AMD Ryzen 5 3600", score: 560 },
        gpu: { name: "NVIDIA GTX 1080 Ti or AMD Radeon RX 5700 XT", score: 520, vram: 8 },
        ram: 16,
        os: "Windows 10 64-bit",
        storage: { type: "SSD", size: 85 }
      }
    }
  },
  {
    id: "valorant",
    title: "Valorant",
    genre: "Tactical Shooter",
    releaseYear: 2020,
    developer: "Riot Games",
    imageUrl: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&auto=format&fit=crop&q=80",
    description: "A character-based 5v5 tactical shooter set on the global stage. Outplay your opponents with precise gunplay and tactical abilities.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core 2 Duo E8400 or AMD Athlon 200GE", score: 50 },
        gpu: { name: "Intel HD 4000 or AMD Radeon R5 200", score: 5, vram: 0.5 },
        ram: 4,
        os: "Windows 10 64-bit",
        storage: { type: "HDD", size: 30 }
      },
      recommended: {
        cpu: { name: "Intel Core i5-4460 or AMD Ryzen 3 1200", score: 260 },
        gpu: { name: "NVIDIA GTX 1050 Ti or AMD Radeon R7 370", score: 200, vram: 4 },
        ram: 8,
        os: "Windows 10/11 64-bit",
        storage: { type: "SSD", size: 30 }
      }
    }
  },
  {
    id: "alanwake2",
    title: "Alan Wake 2",
    genre: "Survival Horror",
    releaseYear: 2023,
    developer: "Remedy Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    description: "A string of ritualistic murders threatens Bright Falls, an idyllic small-town community surrounded by Pacific Northwest wilderness.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core i5-7600K or AMD Ryzen 5 3600", score: 500 },
        gpu: { name: "NVIDIA RTX 2060 or AMD Radeon RX 6600 (requires Mesh Shaders)", score: 480, vram: 6 },
        ram: 16,
        os: "Windows 10/11 64-bit",
        storage: { type: "SSD", size: 90 }
      },
      recommended: {
        cpu: { name: "Intel Core i7-10700K or AMD Ryzen 7 3700X", score: 700 },
        gpu: { name: "NVIDIA RTX 3070 or AMD Radeon RX 6700 XT", score: 680, vram: 8 },
        ram: 16,
        os: "Windows 10/11 64-bit",
        storage: { type: "SSD", size: 90 }
      }
    }
  },
  {
    id: "fortnite",
    title: "Fortnite",
    genre: "Battle Royale",
    releaseYear: 2017,
    developer: "Epic Games",
    imageUrl: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=800&auto=format&fit=crop&q=80",
    description: "Grab your friends and jump into Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core i3-3225 or AMD Phenom II X4 955", score: 150 },
        gpu: { name: "Intel HD 4000 or AMD Radeon Vega 8", score: 20, vram: 1 },
        ram: 8,
        os: "Windows 10 64-bit",
        storage: { type: "HDD", size: 26 }
      },
      recommended: {
        cpu: { name: "Intel Core i5-7300U or AMD Ryzen 3 3300X", score: 400 },
        gpu: { name: "NVIDIA GTX 960 or AMD Radeon R9 280", score: 200, vram: 2 },
        ram: 16,
        os: "Windows 10/11 64-bit",
        storage: { type: "SSD", size: 26 }
      }
    }
  },
  {
    id: "starfield",
    title: "Starfield",
    genre: "Space RPG",
    releaseYear: 2023,
    developer: "Bethesda Game Studios",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    description: "In this next-generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core i7-6800K or AMD Ryzen 5 2600X", score: 450 },
        gpu: { name: "NVIDIA GTX 1070 Ti or AMD Radeon RX 5700", score: 450, vram: 8 },
        ram: 16,
        os: "Windows 10 64-bit",
        storage: { type: "SSD", size: 125 }
      },
      recommended: {
        cpu: { name: "Intel Core i5-10600K or AMD Ryzen 5 3600X", score: 640 },
        gpu: { name: "NVIDIA RTX 2080 or AMD Radeon RX 6800 XT", score: 680, vram: 8 },
        ram: 16,
        os: "Windows 10/11 64-bit",
        storage: { type: "SSD", size: 125 }
      }
    }
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    genre: "Action-Adventure",
    releaseYear: 2018,
    developer: "Rockstar Games",
    imageUrl: "https://images.unsplash.com/photo-1501534159995-5b8ad66580bc?w=800&auto=format&fit=crop&q=80",
    description: "Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters massing on their heels, the gang must rob, steal and fight.",
    requirements: {
      minimum: {
        cpu: { name: "Intel Core i5-2500K or AMD FX-6300", score: 200 },
        gpu: { name: "NVIDIA GTX 770 2GB or AMD Radeon R9 280 3GB", score: 170, vram: 3 },
        ram: 8,
        os: "Windows 10 64-bit",
        storage: { type: "HDD", size: 150 }
      },
      recommended: {
        cpu: { name: "Intel Core i7-4770K or AMD Ryzen 5 1500X", score: 380 },
        gpu: { name: "NVIDIA GTX 1060 6GB or AMD Radeon RX 480 4GB", score: 310, vram: 6 },
        ram: 12,
        os: "Windows 10 64-bit",
        storage: { type: "SSD", size: 150 }
      }
    }
  }
];


// --- COMPARISON LOGIC ENGINE ---

// Search algorithm to find standard hardware details
function findHardwareDetails(name, type) {
  const db = type === 'cpu' ? cpuDatabase : gpuDatabase;
  const cleanedSearch = name.toLowerCase().replace(/[\s\-\_\:\(\)]/g, '');

  // Exact match first
  let bestMatch = db.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (bestMatch) return bestMatch;

  // Partial match score
  let maxMatchLength = 0;
  db.forEach(item => {
    const itemNameCleaned = item.name.toLowerCase().replace(/[\s\-\_\:\(\)]/g, '');
    // Check if one contains the other or vice-versa
    if (cleanedSearch.includes(itemNameCleaned) || itemNameCleaned.includes(cleanedSearch)) {
      const commonLength = Math.min(cleanedSearch.length, itemNameCleaned.length);
      if (commonLength > maxMatchLength) {
        maxMatchLength = commonLength;
        bestMatch = item;
      }
    }
  });

  if (bestMatch) return bestMatch;

  // Smart heuristic if no database match
  // Estimate score based on generation keyword
  let estScore = 200; // default low-mid legacy
  let estBrand = name.toLowerCase().includes('amd') || name.toLowerCase().includes('ryzen') || name.toLowerCase().includes('radeon') ? 'AMD' : 'Intel';
  if (name.toLowerCase().includes('nvidia') || name.toLowerCase().includes('geforce') || name.toLowerCase().includes('gtx') || name.toLowerCase().includes('rtx')) {
    estBrand = 'NVIDIA';
  }

  // Parse generation numbers
  const numberMatches = name.match(/\d+/g);
  if (numberMatches) {
    const num = parseInt(numberMatches[0]);
    if (type === 'gpu') {
      if (name.toLowerCase().includes('rtx')) {
        if (num >= 4000) estScore = 800 + (num - 4000)/10;
        else if (num >= 3000) estScore = 600 + (num - 3000)/10;
        else if (num >= 2000) estScore = 500 + (num - 2000)/10;
      } else if (name.toLowerCase().includes('gtx')) {
        if (num >= 1600) estScore = 320;
        else if (num >= 1000) estScore = 150 + (num - 1000)/2;
        else if (num >= 900) estScore = 120 + (num - 900)*2;
      } else if (name.toLowerCase().includes('rx')) {
        if (num >= 7000) estScore = 750 + (num - 7000)/10;
        else if (num >= 6000) estScore = 550 + (num - 6000)/10;
        else if (num >= 5000) estScore = 400 + (num - 5000)/10;
        else if (num >= 500) estScore = 240 + (num - 500);
      }
    } else { // cpu
      if (name.toLowerCase().includes('ryzen')) {
        const ryzenType = name.match(/ryzen\s*([3579])/i);
        const series = ryzenType ? parseInt(ryzenType[1]) : 5;
        if (num >= 7000) estScore = 700 + series * 30;
        else if (num >= 5000) estScore = 600 + series * 30;
        else if (num >= 3000) estScore = 450 + series * 25;
        else estScore = 300 + series * 20;
      } else if (name.toLowerCase().includes('i9')) {
        estScore = num >= 13000 ? 980 : num >= 12000 ? 880 : 750;
      } else if (name.toLowerCase().includes('i7')) {
        estScore = num >= 13000 ? 900 : num >= 12000 ? 800 : num >= 10000 ? 680 : 500;
      } else if (name.toLowerCase().includes('i5')) {
        estScore = num >= 13000 ? 800 : num >= 12000 ? 700 : num >= 10000 ? 550 : 400;
      } else if (name.toLowerCase().includes('i3')) {
        estScore = num >= 12000 ? 500 : num >= 10000 ? 400 : 250;
      }
    }
  }

  return {
    name: name,
    brand: estBrand,
    score: Math.min(Math.max(estScore, 20), 1200),
    tier: "Custom Configuration",
    isHeuristic: true
  };
}

// Compare user component against game requirements
function compareComponent(userComponent, requiredComponent, type) {
  if (!userComponent) return { pass: false, status: 'fail', message: 'Missing hardware details' };

  // For numerical values directly (like RAM)
  if (typeof userComponent === 'number' && typeof requiredComponent === 'number') {
    if (userComponent >= requiredComponent) {
      return { pass: true, status: 'pass', message: `Have ${userComponent}GB (Required: ${requiredComponent}GB)` };
    } else {
      return { pass: false, status: 'fail', message: `Have ${userComponent}GB (Requires: ${requiredComponent}GB) - Upgrade needed!` };
    }
  }

  // Hardware comparison (CPU or GPU) using score
  const userDetails = findHardwareDetails(userComponent, type);
  const reqDetails = findHardwareDetails(requiredComponent, type);

  const diff = userDetails.score - reqDetails.score;
  const ratio = userDetails.score / reqDetails.score;

  let status = 'fail';
  let pass = false;
  let message = '';

  if (ratio >= 1.15) {
    status = 'pass';
    pass = true;
    message = `Excellent: Your ${userDetails.name} easily outperforms ${reqDetails.name}.`;
  } else if (ratio >= 0.95) {
    status = 'pass-borderline';
    pass = true;
    message = `Capable: Your ${userDetails.name} matches the required ${reqDetails.name} closely.`;
  } else if (ratio >= 0.80) {
    status = 'warning';
    pass = false; // counts as not meeting official spec but might still run
    message = `Marginal: Your ${userDetails.name} is slightly weaker than ${reqDetails.name}. Gameplay may stutter.`;
  } else {
    status = 'fail';
    pass = false;
    message = `Insufficient: Your ${userDetails.name} is significantly weaker than ${reqDetails.name}.`;
  }

  return {
    pass,
    status,
    message,
    userScore: userDetails.score,
    requiredScore: reqDetails.score,
    userTier: userDetails.tier,
    userBrand: userDetails.brand,
    realName: userDetails.name
  };
}

// Analyze entire system against a specific game's profile
function analyzeSystem(userSystem, game) {
  const result = {
    gameId: game.id,
    gameTitle: game.title,
    imageUrl: game.imageUrl,
    minimum: {
      overallPass: true,
      components: {}
    },
    recommended: {
      overallPass: true,
      components: {}
    }
  };

  const componentsToTest = ['cpu', 'gpu', 'ram', 'os', 'storage'];

  // 1. Analyze MINIMUM requirements
  const minReq = game.requirements.minimum;
  
  // CPU
  result.minimum.components.cpu = compareComponent(userSystem.cpu, minReq.cpu.name, 'cpu');
  // GPU
  result.minimum.components.gpu = compareComponent(userSystem.gpu, minReq.gpu.name, 'gpu');
  // RAM
  result.minimum.components.ram = compareComponent(userSystem.ram, minReq.ram);
  
  // OS (Simple match check)
  const userOSNum = userSystem.os.includes('11') ? 11 : userSystem.os.includes('10') ? 10 : userSystem.os.includes('8') ? 8 : 7;
  const reqOSNum = minReq.os.includes('11') ? 11 : minReq.os.includes('10') ? 10 : minReq.os.includes('8') ? 8 : 7;
  result.minimum.components.os = {
    pass: userOSNum >= reqOSNum,
    status: userOSNum >= reqOSNum ? 'pass' : 'fail',
    message: userOSNum >= reqOSNum ? `Windows ${userOSNum} detects OK.` : `Game requires Windows ${reqOSNum}+.`
  };

  // Storage Type & Size
  const userStoragePass = userSystem.storageFree >= minReq.storage.size;
  const storageMessage = `Need ${minReq.storage.size}GB free on ${minReq.storage.type}. You have ${userSystem.storageFree}GB available (${userSystem.storageType}).`;
  let storageStatus = 'pass';
  if (!userStoragePass) {
    storageStatus = 'fail';
  } else if (minReq.storage.type === 'SSD' && userSystem.storageType === 'HDD') {
    storageStatus = 'warning'; // warning about load times
  }
  result.minimum.components.storage = {
    pass: userStoragePass && storageStatus !== 'fail',
    status: storageStatus,
    message: storageMessage
  };

  // Overall Min Pass
  result.minimum.overallPass = 
    result.minimum.components.cpu.pass &&
    result.minimum.components.gpu.pass &&
    result.minimum.components.ram.pass &&
    result.minimum.components.os.pass &&
    result.minimum.components.storage.pass;

  // 2. Analyze RECOMMENDED requirements
  const recReq = game.requirements.recommended;
  
  // CPU
  result.recommended.components.cpu = compareComponent(userSystem.cpu, recReq.cpu.name, 'cpu');
  // GPU
  result.recommended.components.gpu = compareComponent(userSystem.gpu, recReq.gpu.name, 'gpu');
  // RAM
  result.recommended.components.ram = compareComponent(userSystem.ram, recReq.ram);
  
  // OS
  result.recommended.components.os = {
    pass: userOSNum >= reqOSNum,
    status: userOSNum >= reqOSNum ? 'pass' : 'fail',
    message: userOSNum >= reqOSNum ? `Windows ${userOSNum} detects OK.` : `Game recommendeds Windows ${reqOSNum}+.`
  };

  // Storage Type & Size
  const recStoragePass = userSystem.storageFree >= recReq.storage.size;
  const recStorageMessage = `Need ${recReq.storage.size}GB free on ${recReq.storage.type}. You have ${userSystem.storageFree}GB available (${userSystem.storageType}).`;
  let recStorageStatus = 'pass';
  if (!recStoragePass) {
    recStorageStatus = 'fail';
  } else if (recReq.storage.type === 'SSD' && userSystem.storageType === 'HDD') {
    recStorageStatus = 'warning';
  }
  result.recommended.components.storage = {
    pass: recStoragePass && recStorageStatus !== 'fail',
    status: recStorageStatus,
    message: recStorageMessage
  };

  // Overall Rec Pass
  result.recommended.overallPass = 
    result.recommended.components.cpu.pass &&
    result.recommended.components.gpu.pass &&
    result.recommended.components.ram.pass &&
    result.recommended.components.os.pass &&
    result.recommended.components.storage.pass;

  // 3. Bottleneck Analysis & Recommendations
  let bottleneck = null;
  let recommendation = "";

  const minCpuStat = result.minimum.components.cpu;
  const minGpuStat = result.minimum.components.gpu;
  const minRamStat = result.minimum.components.ram;

  if (!result.minimum.overallPass) {
    // Determine biggest bottleneck preventing running
    const deficits = [];
    if (!minCpuStat.pass) deficits.push({ name: 'CPU', val: minCpuStat.userScore / minCpuStat.requiredScore });
    if (!minGpuStat.pass) deficits.push({ name: 'GPU', val: minGpuStat.userScore / minGpuStat.requiredScore });
    if (!minRamStat.pass) deficits.push({ name: 'RAM', val: userSystem.ram / minReq.ram });
    if (!userStoragePass) deficits.push({ name: 'Storage Space', val: userSystem.storageFree / minReq.storage.size });

    // Sort by ratio ascending (most deficient first)
    deficits.sort((a, b) => a.val - b.val);
    bottleneck = deficits[0].name;

    if (bottleneck === 'GPU') {
      recommendation = `Your graphics card is too weak to run this game safely. Consider upgrading to at least a ${minReq.gpu.name} or equivalent to start playing.`;
    } else if (bottleneck === 'CPU') {
      recommendation = `Your processor does not meet the minimum demands of this game. Upgrading to a modern 6-core processor like the Intel i5-12400 or Ryzen 5 5600 will unlock this and almost any other modern title.`;
    } else if (bottleneck === 'RAM') {
      recommendation = `You are low on memory! Upgrading your RAM from ${userSystem.ram}GB to 16GB is one of the easiest, cheapest upgrades you can make and is highly recommended for modern gaming.`;
    } else {
      recommendation = `You don't have enough disk space! Free up some room on your ${userSystem.storageType} (at least ${minReq.storage.size}GB needed).`;
    }
  } else if (!result.recommended.overallPass) {
    // Can run minimum but not recommended
    const recCpuStat = result.recommended.components.cpu;
    const recGpuStat = result.recommended.components.gpu;
    const recRamStat = result.recommended.components.ram;

    const deficits = [];
    if (!recCpuStat.pass) deficits.push({ name: 'CPU', val: recCpuStat.userScore / recCpuStat.requiredScore });
    if (!recGpuStat.pass) deficits.push({ name: 'GPU', val: recGpuStat.userScore / recGpuStat.requiredScore });
    if (!recRamStat.pass) deficits.push({ name: 'RAM', val: userSystem.ram / recReq.ram });
    if (recReq.storage.type === 'SSD' && userSystem.storageType === 'HDD') deficits.push({ name: 'Storage Type', val: 0.5 });

    deficits.sort((a, b) => a.val - b.val);
    bottleneck = deficits[0].name;

    if (bottleneck === 'GPU') {
      recommendation = `Your system can run the game, but to unlock high details and 60+ FPS, we recommend upgrading your graphics card to an RTX 4060 or RX 7600.`;
    } else if (bottleneck === 'CPU') {
      recommendation = `To achieve stable frame rates and avoid stuttering in busy scenes, consider upgrading your CPU. Modern game engine physics are heavily CPU bound.`;
    } else if (bottleneck === 'RAM') {
      recommendation = `While ${userSystem.ram}GB RAM is enough for minimum specs, 16GB or 32GB RAM is the gold standard today to prevent background app stuttering.`;
    } else {
      recommendation = `This game highly recommends being installed on an Solid-State Drive (SSD). Running it from an HDD will result in extremely long loading screens and texture popping.`;
    }
  } else {
    // Pass everything
    recommendation = `Your PC is a powerhouse! You exceed all recommended requirements for ${game.title}. Crank those settings to Ultra and enjoy the adventure!`;
  }

  result.bottleneck = bottleneck;
  result.recommendation = recommendation;

  return result;
}
