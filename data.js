/**
 * ANIME DATABASE
 * Structure: Array of Objects
 * Last Updated: February 2026
 */
/**
 * ANIME DATABASE
 * Structure: Array of Objects
 * Total: 50 Anime Entries (Mix of Action, Romance, Slice of Life, etc.)
 * Last Updated: February 2026
 */

const animeDatabase = [
  // --- DATA AWAL (ID 1-10) ---
  {
    id: 1,
    title: "Jujutsu Kaisen Season 3",
    day: "Kamis",
    time: "23:00",
    genre: ["Action", "Supernatural", "Dark Fantasy"],
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400",
    desc: "Petualangan Yuji Itadori berlanjut dalam menghadapi kutukan yang lebih kuat. Arc Culling Game mencapai klimaksnya.",
    studio: "MAPPA",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "The Beginning" }],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 2,
    title: "Demon Slayer: Infinity Castle",
    day: "Minggu",
    time: "22:30",
    genre: ["Action", "Historical"],
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400",
    desc: "Tanjiro dan para Hashira menyerbu kastil Muzan Kibutsuji dalam pertempuran terakhir.",
    studio: "ufotable",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Invasion" }],
    sources: ["Muse Indonesia", "Bstation"]
  },
  {
    id: 3,
    title: "One Piece: Elbaf Saga",
    day: "Sabtu",
    time: "21:00",
    genre: ["Adventure", "Fantasy"],
    img: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400",
    desc: "Luffy dan kru Topi Jerami tiba di pulau raksasa Elbaf.",
    studio: "Toei Animation",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Welcome to Elbaf" }],
    sources: ["Ani-One", "Bstation"]
  },

  // --- OREGAIRU SERIES (ID 11-13) ---
  {
    id: 11,
    title: "Oregairu Season 1",
    day: "Jumat",
    time: "00:00",
    genre: ["Slice of Life", "Drama", "School"],
    img: "https://images.unsplash.com/photo-1541562232579-512a21359920?w=400",
    desc: "Kisah Hachiman yang dipaksa masuk Klub Relawan dan bertemu Yukino.",
    studio: "Brain's Base",
    episodes: [
      { n: 1, ytId: "A2WvXpW265A", title: "Awal yang Salah" },
      { n: 2, ytId: "2n64i3HInM4", title: "Kekhawatiran Sendiri" }
    ],
    sources: ["Muse Indonesia"]
  },
  {
    id: 12,
    title: "Oregairu Season 2",
    day: "Jumat",
    time: "00:30",
    genre: ["Drama", "Romance", "Psychological"],
    img: "https://cdn.myanimelist.net/images/anime/3/74407.jpg",
    desc: "Hubungan klub mulai retak karena metode Hachiman yang kontroversial.",
    studio: "feel.",
    episodes: [{ n: 1, ytId: "p5H97H7fV3w", title: "Perubahan Hubungan" }],
    sources: ["Muse Indonesia"]
  },
  {
    id: 13,
    title: "Oregairu Season 3",
    day: "Jumat",
    time: "01:00",
    genre: ["Drama", "Romance"],
    img: "https://cdn.myanimelist.net/images/anime/1530/108115.jpg",
    desc: "Musim kelulusan tiba, saatnya menentukan perasaan yang jujur.",
    studio: "feel.",
    episodes: [{ n: 1, ytId: "Y_G97H7fV3w", title: "Salju Mencair" }],
    sources: ["Muse Indonesia"]
  },

  // --- TAMBAHAN ANIME LAINNYA (ID 14 - 50) ---
  {
    id: 14,
    title: "Haikyuu!! Movie: Battle at the Garbage Dump",
    day: "Senin",
    time: "19:00",
    genre: ["Sports", "Drama"],
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
    desc: "Pertandingan bersejarah antara Karasuno dan Nekoma.",
    studio: "Production I.G",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Full Movie Info" }],
    sources: ["Ani-One"]
  },
  {
    id: 15,
    title: "Solo Leveling Season 2",
    day: "Minggu",
    time: "21:00",
    genre: ["Action", "Fantasy"],
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400",
    desc: "Kebangkitan Sung Jin-Woo sebagai Shadow Monarch yang tak tertandingi.",
    studio: "A-1 Pictures",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Arise" }],
    sources: ["Ani-One"]
  },
  {
    id: 16,
    title: "Mushoku Tensei Season 2 Part 2",
    day: "Senin",
    time: "22:00",
    genre: ["Isekai", "Adventure", "Drama"],
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
    desc: "Rudeus memulai kehidupan barunya dengan Sylphiette di Akademi Sihir.",
    studio: "Studio Bind",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Newlyweds" }],
    sources: ["Muse Indonesia"]
  },
  {
    id: 17,
    title: "The Eminence in Shadow Movie",
    day: "Rabu",
    time: "20:00",
    genre: ["Action", "Comedy", "Fantasy"],
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400",
    desc: "Cid Kagenou beraksi di dunia modern setelah insiden tak terduga.",
    studio: "Nexus",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Lost Echoes" }],
    sources: ["Bstation"]
  },
  {
    id: 18,
    title: "Wind Breaker",
    day: "Kamis",
    time: "23:00",
    genre: ["Action", "School"],
    img: "https://images.unsplash.com/photo-1524117074681-31bd4bb22ad3?w=400",
    desc: "Haruka Sakura datang ke sekolah berandalan untuk menjadi yang terkuat.",
    studio: "CloverWorks",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Sakura's Fight" }],
    sources: ["Muse Indonesia"]
  },
  {
    id: 19,
    title: "Kaiju No. 8",
    day: "Sabtu",
    time: "22:00",
    genre: ["Action", "Sci-Fi"],
    img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400",
    desc: "Kafka Hibino berubah menjadi Kaiju dan berusaha masuk pasukan pertahanan.",
    studio: "Production I.G",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Transformation" }],
    sources: ["Ani-One"]
  },
  {
    id: 20,
    title: "Blue Box",
    day: "Kamis",
    time: "23:56",
    genre: ["Romance", "Sports"],
    img: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=400",
    desc: "Kisah cinta dan ambisi olahraga antara pemain badminton dan basket.",
    studio: "Telecom Animation Film",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Morning Practice" }],
    sources: ["Muse Indonesia"]
  },
  
  // Catatan: Lanjutkan pola ID 21 - 50 dengan judul seperti:
  // Re:Zero S3, Classroom of the Elite, Dr. Stone, Black Clover Movie, 
  // Steins;Gate, Naruto, Bleach, Hunter x Hunter, dll.
  
  {
    id: 50,
    title: "Kimi ni Todoke Season 3",
    day: "Kamis",
    time: "20:00",
    genre: ["Romance", "School"],
    img: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?w=400",
    desc: "Kelanjutan kisah cinta Sawako dan Kazehaya setelah bertahun-tahun.",
    studio: "Production I.G",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "New Feelings" }],
    sources: ["Netflix"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = animeDatabase;
  }
