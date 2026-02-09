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
const animeDatabase = [
  // --- ACTION & SHOUNEN (ID 1-10) ---
  {
    id: 1,
    title: "Jujutsu Kaisen Season 3",
    day: "Kamis",
    time: "23:00",
    genre: ["Action", "Supernatural"],
    img: "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
    desc: "Pertempuran epik di Culling Game dimulai.",
    studio: "MAPPA",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "The Culling Game" }, { n: 2, ytId: "dQw4w9WgXcQ", title: "Sakuna's Threat" }],
    sources: ["Muse Indonesia"]
  },
  {
    id: 2,
    title: "Demon Slayer: Infinity Castle",
    day: "Minggu",
    time: "22:30",
    genre: ["Action", "Historical"],
    img: "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
    desc: "Penyerbuan ke markas pusat Muzan.",
    studio: "ufotable",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Into the Castle" }],
    sources: ["Bstation"]
  },
  {
    id: 3,
    title: "One Piece",
    day: "Sabtu",
    time: "21:00",
    genre: ["Adventure", "Fantasy"],
    img: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
    desc: "Perjalanan Luffy di Pulau Elbaf.",
    studio: "Toei Animation",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "Giant's Island" }],
    sources: ["Ani-One"]
  },
  { id: 4, title: "Chainsaw Man", day: "Rabu", time: "23:00", genre: ["Action", "Gore"], img: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg", desc: "Denji sang manusia gergaji.", studio: "MAPPA", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Dog & Chainsaw"}], sources: ["Ani-One"] },
  { id: 5, title: "Solo Leveling", day: "Minggu", time: "00:00", genre: ["Action", "Fantasy"], img: "https://cdn.myanimelist.net/images/anime/1516/141014.jpg", desc: "Hunter terlemah menjadi dewa.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"I'm the Only One Leveling Up"}], sources: ["Ani-One"] },
  { id: 6, title: "Black Clover", day: "Selasa", time: "18:00", genre: ["Magic", "Action"], img: "https://cdn.myanimelist.net/images/anime/2/88336.jpg", desc: "Asta tanpa sihir ingin jadi Raja Penyihir.", studio: "Pierrot", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Asta and Yuno"}], sources: ["Bstation"] },
  { id: 7, title: "My Hero Academia", day: "Sabtu", time: "17:30", genre: ["Hero", "School"], img: "https://cdn.myanimelist.net/images/anime/1911/142363.jpg", desc: "Deku mewarisi kekuatan All Might.", studio: "Bones", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Izuku Midoriya: Origin"}], sources: ["Ani-One"] },
  { id: 8, title: "Naruto Shippuden", day: "Senin", time: "19:00", genre: ["Ninja", "Action"], img: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg", desc: "Naruto kembali setelah latihan 2 tahun.", studio: "Pierrot", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Homecoming"}], sources: ["Bstation"] },
  { id: 9, title: "Hunter x Hunter", day: "Jumat", time: "20:00", genre: ["Adventure", "Action"], img: "https://cdn.myanimelist.net/images/anime/11/33657.jpg", desc: "Gon mencari ayahnya melalui ujian Hunter.", studio: "Madhouse", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Departure"}], sources: ["Bstation"] },
  { id: 10, title: "Haikyuu!!", day: "Kamis", time: "19:00", genre: ["Sports", "Drama"], img: "https://cdn.myanimelist.net/images/anime/7/76014.jpg", desc: "Voli SMA Karasuno menuju Nasional.", studio: "Production I.G", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"End and Beginning"}], sources: ["Ani-One"] },

  // --- OREGAIRU SERIES (ID 11-13) ---
  { id: 11, title: "Oregairu Season 1", day: "Jumat", time: "00:00", genre: ["Romance", "Drama"], img: "https://cdn.myanimelist.net/images/anime/7/49631.jpg", desc: "Klub Relawan Hachiman.", studio: "Brain's Base", episodes: [{n:1, ytId:"A2WvXpW265A", title:"The Beginning"}], sources: ["Muse Indonesia"] },
  { id: 12, title: "Oregairu Season 2", day: "Jumat", time: "00:30", genre: ["Romance", "Drama"], img: "https://cdn.myanimelist.net/images/anime/3/74407.jpg", desc: "Hubungan yang mulai retak.", studio: "feel.", episodes: [{n:1, ytId:"p5H97H7fV3w", title:"Changes"}], sources: ["Muse Indonesia"] },
  { id: 13, title: "Oregairu Season 3", day: "Jumat", time: "01:00", genre: ["Romance", "Drama"], img: "https://cdn.myanimelist.net/images/anime/1530/108115.jpg", desc: "Kesimpulan masa SMA.", studio: "feel.", episodes: [{n:1, ytId:"Y_G97H7fV3w", title:"The End"}], sources: ["Muse Indonesia"] },

  // --- POPULAR SELECTIONS (ID 14-50) ---
  { id: 14, title: "Spy x Family", day: "Sabtu", time: "22:00", genre: ["Comedy", "Action"], img: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg", desc: "Keluarga mata-mata, pembunuh, dan telepatis.", studio: "Wit Studio", episodes: [{n:1, ytId:"eX2qF9kI5pU", title:"Operation Strix"}], sources: ["Muse Indonesia"] },
  { id: 15, title: "Blue Lock", day: "Minggu", time: "00:00", genre: ["Sports", "Thriller"], img: "https://cdn.myanimelist.net/images/anime/1258/126920.jpg", desc: "Menciptakan striker terbaik.", studio: "Eight Bit", episodes: [{n:1, ytId:"w_6A97G9X7A", title:"Dream"}], sources: ["Ani-One"] },
  { id: 16, title: "Classroom of the Elite", day: "Rabu", time: "21:00", genre: ["Psychological", "School"], img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", desc: "Sekolah elit yang penuh manipulasi.", studio: "Lerche", episodes: [{n:1, ytId:"8jW8uA_qFjM", title:"What is Evil?"}], sources: ["Muse Indonesia"] },
  { id: 17, title: "Lycoris Recoil", day: "Sabtu", time: "22:30", genre: ["Action", "Sci-Fi"], img: "https://cdn.myanimelist.net/images/anime/1244/124503.jpg", desc: "Gadis agen rahasia penjaga kota.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Easy Does It"}], sources: ["Ani-One"] },
  { id: 18, title: "Frieren: Beyond Journey's End", day: "Jumat", time: "23:00", genre: ["Adventure", "Fantasy"], img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", desc: "Perjalanan elf setelah raja iblis kalah.", studio: "Madhouse", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"The Journey Begins"}], sources: ["Muse Indonesia"] },
  { id: 19, title: "Oshi no Ko", day: "Rabu", time: "22:00", genre: ["Drama", "Music"], img: "https://cdn.myanimelist.net/images/anime/1812/134736.jpg", desc: "Sisi gelap dunia Idol.", studio: "Doga Kobo", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Mother and Children"}], sources: ["Ani-One"] },
  { id: 20, title: "Horimiya", day: "Minggu", time: "21:00", genre: ["Romance", "Slice of Life"], img: "https://cdn.myanimelist.net/images/anime/1103/112387.jpg", desc: "Romansa rahasia di sekolah.", studio: "CloverWorks", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Small Happenings"}], sources: ["Bstation"] },
  
  // (Ulangi pola untuk ID 21-50 dengan judul seperti:
  // Re:Zero, Dr.Stone, Tokyo Revengers, Bleach, Steins;Gate, 
  // Mushoku Tensei, Kaguya-sama, Mashle, Blue Box, dll.)
];
;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = animeDatabase;
  }
