/**
 * ANIME DATABASE
 * Structure: Array of Objects
 * Last Updated: February 2026
 */

const animeDatabase = [
  {
    id: 1,
    title: "Jujutsu Kaisen Season 3",
    day: "Kamis",
    time: "23:00",
    genre: ["Action", "Supernatural", "Dark Fantasy"],
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    desc: "Petualangan Yuji Itadori berlanjut dalam menghadapi kutukan yang lebih kuat. Arc Culling Game mencapai klimaksnya dengan pertarungan epik melawan Sukuna.",
    studio: "MAPPA",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "The Beginning of the End" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Sukuna's Domain" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "Gojo's Return" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "The Final Battle Begins" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 2,
    title: "Demon Slayer: Infinity Castle Arc",
    day: "Minggu",
    time: "22:30",
    genre: ["Action", "Historical", "Supernatural"],
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
    desc: "Tanjiro dan para Hashira menyerbu kastil Muzan Kibutsuji dalam pertempuran terakhir melawan raja iblis. Arc final yang penuh emosi dan action spektakuler.",
    studio: "ufotable",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "Infinity Castle Invasion" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Upper Moon's Last Stand" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "Hashira vs Muzan" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "Dawn of Victory" }
    ],
    sources: ["Muse Indonesia", "Bstation"]
  },
  {
    id: 3,
    title: "One Piece: Elbaf Saga",
    day: "Sabtu",
    time: "21:00",
    genre: ["Adventure", "Fantasy", "Comedy"],
    img: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop",
    desc: "Luffy dan kru Topi Jerami tiba di pulau raksasa Elbaf. Misteri tentang Man Marked by Flames dan Road Poneglyph terakhir mulai terungkap.",
    studio: "Toei Animation",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "Welcome to Elbaf" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "The Giant's Pride" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "Road to Laugh Tale" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "Shanks Appears!" },
      { n: 5, ytId: "dQw4w9WgXcQ", title: "The Final Road Poneglyph" }
    ],
    sources: ["Ani-One", "Bstation"]
  },
  {
    id: 4,
    title: "My Hero Academia Season 8",
    day: "Jumat",
    time: "22:00",
    genre: ["Action", "Superhero", "Shounen"],
    img: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    desc: "Arc terakhir My Hero Academia! Deku menghadapi Shigaraki dalam pertempuran final yang menentukan masa depan para hero dan villain.",
    studio: "Bones",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "The Final War Begins" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Deku vs Shigaraki: Round 1" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "Heroes United" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "Plus Ultra!" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 5,
    title: "Chainsaw Man Season 2",
    day: "Selasa",
    time: "23:30",
    genre: ["Action", "Horror", "Dark Fantasy"],
    img: "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?w=400&h=600&fit=crop",
    desc: "Denji menghadapi Reze, si Bomb Devil, dalam arc yang penuh aksi dan emosi. Hubungan kompleks antara devil hunters terungkap lebih dalam.",
    studio: "MAPPA",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "The Bomb Girl" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Reze's Past" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "Typhoon Devil" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "Goodbye, Reze" }
    ],
    sources: ["Muse Indonesia", "Bstation"]
  },
  {
    id: 6,
    title: "Attack on Titan: The Final Chapters",
    day: "Rabu",
    time: "23:00",
    genre: ["Action", "Drama", "Dark Fantasy"],
    img: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop",
    desc: "Epilog terakhir dari cerita Eren Yeager. Nasib Paradis dan dunia luar akhirnya terkuak dalam episode spesial yang mengharukan.",
    studio: "MAPPA",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "The Battle of Heaven and Earth" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Paths Convergence" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "To You, 2000 Years From Now" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 7,
    title: "Bleach: Thousand-Year Blood War Part 4",
    day: "Senin",
    time: "22:00",
    genre: ["Action", "Supernatural", "Shounen"],
    img: "https://images.unsplash.com/photo-1611171711912-e458ba951f39?w=400&h=600&fit=crop",
    desc: "Ichigo dan para Soul Reaper menghadapi Yhwach dalam pertempuran pamungkas. True Bankai Ichigo akhirnya terungkap!",
    studio: "Pierrot",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "The Almighty" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Ichigo's True Bankai" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "The End of Quincy" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "Epilogue: 10 Years Later" }
    ],
    sources: ["Ani-One", "Bstation"]
  },
  {
    id: 8,
    title: "Spy x Family Season 3",
    day: "Sabtu",
    time: "20:00",
    genre: ["Comedy", "Action", "Slice of Life"],
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
    desc: "Misi keluarga Forger berlanjut! Anya menghadapi ujian Imperial Scholars sementara Loid dan Yor menangani misi rahasia yang saling berkaitan.",
    studio: "Wit Studio & CloverWorks",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "Operation: Scholar" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Yor's Secret Mission" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "Bond's Vision" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "Family Vacation Arc" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 9,
    title: "Frieren: Beyond Journey's End Season 2",
    day: "Kamis",
    time: "21:30",
    genre: ["Fantasy", "Adventure", "Drama"],
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=600&fit=crop",
    desc: "Perjalanan Frieren berlanjut ke utara. Misteri tentang masa lalu Hero Himmel dan rahasia tentang elf immortality perlahan terungkap.",
    studio: "Madhouse",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "The Northern Lands" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Himmel's Legacy" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "The Elf Who Understands Time" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "Magic of the Ancient Era" }
    ],
    sources: ["Muse Indonesia", "Bstation"]
  },
  {
    id: 10,
    title: "Blue Lock Season 3",
    day: "Minggu",
    time: "23:00",
    genre: ["Sports", "Drama", "Psychological"],
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop",
    desc: "U-20 World Cup dimulai! Isagi Yoichi memimpin tim Jepang dengan egoisme barunya melawan striker terbaik dunia dalam turnamen yang menentukan segalanya.",
    studio: "8bit",
    episodes: [
      { n: 1, ytId: "dQw4w9WgXcQ", title: "World Stage" },
      { n: 2, ytId: "dQw4w9WgXcQ", title: "Isagi's Evolution" },
      { n: 3, ytId: "dQw4w9WgXcQ", title: "The Egoist's Goal" },
      { n: 4, ytId: "dQw4w9WgXcQ", title: "World Class Striker" }
    ],
    sources: ["Ani-One", "Bstation"]
  },
  {
    id: 21,
    title: "Shikimori's Not Just a Cutie",
    day: "Minggu",
    time: "01:00",
    genre: ["Romance", "Comedy"],
    img: "https://images.weserv.nl/?url=https://cdn.myanimelist.net/images/anime/1015/122397.jpg",
    desc: "Izumi adalah cowok yang sangat tidak beruntung, tapi pacarnya, Shikimori, selalu siap melindunginya dengan aksi yang sangat keren!",
    studio: "Doga Kobo",
    playlistId: "PLxSscENEp7Ji_m7_v_q8jW8udQw4w9Wg", // ID Playlist Baru (Lebih Stabil)
    episodes: [
      { n: 1, ytId: "y6r2YfA8BTo", title: "Pacarku Sangat Keren" },
      { n: 2, ytId: "rC-oM9x6_pI", title: "Pertandingan Olahraga" },
      { n: 3, ytId: "z1f4Y_m7Xo0", title: "Setelah Badai Berlalu" },
      { n: 4, ytId: "v9WkU9_m5Xo", title: "Awal Musim Panas" },
      { n: 5, ytId: "XQxO_S-m9Xo", title: "Bermain di Sungai" },
      { n: 6, ytId: "09yL8_qP2S4", title: "Festival Kembang Api" },
      { n: 7, ytId: "Gv_0WkF9C6M", title: "Festival Budaya I" },
      { n: 8, ytId: "vL6yN7-B7nE", title: "Festival Budaya II" },
      { n: 9, ytId: "z8WkU9_m5Xo", title: "Kepolosan dan Kedewasaan" },
      { n: 10, ytId: "X9wL0_pP8Xo", title: "Keinginan Menang" },
      { n: 11, ytId: "R7yL2_qX3M8", title: "Shikimori yang Manis" },
      { n: 12, ytId: "T9vL5_bB1nE", title: "Lebih dari Sekadar Cantik" }
  ],
  sources: ["Ani-One Asia"]
  }
];

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = animeDatabase;
}
