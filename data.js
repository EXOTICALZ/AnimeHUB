/**
 * ANIME DATABASE
 * Total: 50 Entries
 * Last Updated: February 2026
 */

const animeDatabase = [
  // --- ACTION & SHOUNEN (1-10) ---
  {
    id: 1,
    title: "Jujutsu Kaisen Season 3",
    day: "Kamis",
    time: "23:00",
    genre: ["Action", "Supernatural"],
    img: "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
    desc: "Pertempuran epik di Culling Game dimulai.",
    studio: "MAPPA",
    episodes: [{ n: 1, ytId: "dQw4w9WgXcQ", title: "The Culling Game" }],
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
  { id: 5, title: "Solo Leveling", day: "Minggu", time: "00:00", genre: ["Action", "Fantasy"], img: "https://cdn.myanimelist.net/images/anime/1516/141014.jpg", desc: "Hunter terlemah menjadi dewa.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Arise"}], sources: ["Ani-One"] },
  { id: 6, title: "Black Clover", day: "Selasa", time: "18:00", genre: ["Magic", "Action"], img: "https://cdn.myanimelist.net/images/anime/2/88336.jpg", desc: "Asta ingin jadi Raja Penyihir.", studio: "Pierrot", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Asta and Yuno"}], sources: ["Bstation"] },
  { id: 7, title: "My Hero Academia", day: "Sabtu", time: "17:30", genre: ["Hero", "School"], img: "https://cdn.myanimelist.net/images/anime/1911/142363.jpg", desc: "Deku mewarisi One For All.", studio: "Bones", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Origin"}], sources: ["Ani-One"] },
  { id: 8, title: "Naruto Shippuden", day: "Senin", time: "19:00", genre: ["Ninja", "Action"], img: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg", desc: "Naruto kembali ke Konoha.", studio: "Pierrot", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Homecoming"}], sources: ["Bstation"] },
  { id: 9, title: "Hunter x Hunter", day: "Jumat", time: "20:00", genre: ["Adventure", "Action"], img: "https://cdn.myanimelist.net/images/anime/11/33657.jpg", desc: "Gon mencari ayahnya.", studio: "Madhouse", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Departure"}], sources: ["Bstation"] },
  { id: 10, title: "Haikyuu!!", day: "Kamis", time: "19:00", genre: ["Sports", "Drama"], img: "https://cdn.myanimelist.net/images/anime/7/76014.jpg", desc: "Voli SMA Karasuno.", studio: "Production I.G", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"End and Beginning"}], sources: ["Ani-One"] },

  // --- OREGAIRU SERIES (11-13) ---
  { id: 11, title: "Oregairu S1", day: "Jumat", time: "00:00", genre: ["Romance", "Drama"], img: "https://cdn.myanimelist.net/images/anime/7/49631.jpg", desc: "Klub Relawan.", studio: "Brain's Base", episodes: [{n:1, ytId:"A2WvXpW265A", title:"The Beginning"}], sources: ["Muse Indonesia"] },
  { id: 12, title: "Oregairu S2", day: "Jumat", time: "00:30", genre: ["Romance", "Drama"], img: "https://cdn.myanimelist.net/images/anime/3/74407.jpg", desc: "Hubungan rumit.", studio: "feel.", episodes: [{n:1, ytId:"p5H97H7fV3w", title:"Changes"}], sources: ["Muse Indonesia"] },
  { id: 13, title: "Oregairu S3", day: "Jumat", time: "01:00", genre: ["Romance", "Drama"], img: "https://cdn.myanimelist.net/images/anime/1530/108115.jpg", desc: "Akhir cerita.", studio: "feel.", episodes: [{n:1, ytId:"Y_G97H7fV3w", title:"The End"}], sources: ["Muse Indonesia"] },

  // --- OTHERS (14-50) ---
  { id: 14, title: "Spy x Family", day: "Sabtu", time: "22:00", genre: ["Comedy", "Action"], img: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg", desc: "Keluarga palsu.", studio: "Wit Studio", episodes: [{n:1, ytId:"eX2qF9kI5pU", title:"Strix"}], sources: ["Muse Indonesia"] },
  { id: 15, title: "Blue Lock", day: "Minggu", time: "00:00", genre: ["Sports", "Thriller"], img: "https://cdn.myanimelist.net/images/anime/1258/126920.jpg", desc: "Striker terbaik.", studio: "Eight Bit", episodes: [{n:1, ytId:"w_6A97G9X7A", title:"Dream"}], sources: ["Ani-One"] },
  { id: 16, title: "Classroom of the Elite", day: "Rabu", time: "21:00", genre: ["Psychological"], img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", desc: "Sekolah elit.", studio: "Lerche", episodes: [{n:1, ytId:"8jW8uA_qFjM", title:"Evil"}], sources: ["Muse Indonesia"] },
  { id: 17, title: "The Eminence in Shadow", day: "Rabu", time: "22:00", genre: ["Action", "Fantasy"], img: "https://cdn.myanimelist.net/images/anime/1623/126939.jpg", desc: "Cid Kagenou.", studio: "Nexus", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Shadow"}], sources: ["Bstation"] },
  { id: 18, title: "Frieren", day: "Jumat", time: "23:00", genre: ["Adventure", "Fantasy"], img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", desc: "Elf abadi.", studio: "Madhouse", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Journey"}], sources: ["Muse Indonesia"] },
  { id: 19, title: "Oshi no Ko", day: "Rabu", time: "22:00", genre: ["Drama", "Music"], img: "https://cdn.myanimelist.net/images/anime/1812/134736.jpg", desc: "Dunia Idol.", studio: "Doga Kobo", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Idol"}], sources: ["Ani-One"] },
  { id: 20, title: "Horimiya", day: "Minggu", time: "21:00", genre: ["Romance"], img: "https://cdn.myanimelist.net/images/anime/1103/112387.jpg", desc: "Kisah cinta manis.", studio: "CloverWorks", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Start"}], sources: ["Bstation"] },
  { id: 21, title: "Tokyo Revengers", day: "Minggu", time: "01:00", genre: ["Action"], img: "https://cdn.myanimelist.net/images/anime/1452/115527.jpg", desc: "Geng motor.", studio: "LIDENFILMS", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Takemichi"}], sources: ["Muse Indonesia"] },
  { id: 22, title: "Bleach: TYBW", day: "Sabtu", time: "23:30", genre: ["Action"], img: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg", desc: "Perang Quincy.", studio: "Pierrot", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"War"}], sources: ["Ani-One"] },
  { id: 23, title: "Steins;Gate", day: "Selasa", time: "20:00", genre: ["Sci-Fi"], img: "https://cdn.myanimelist.net/images/anime/15/31355.jpg", desc: "Perjalanan waktu.", studio: "White Fox", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"El Psy Kongroo"}], sources: ["Bstation"] },
  { id: 24, title: "Dr. Stone", day: "Kamis", time: "22:00", genre: ["Adventure", "Sci-Fi"], img: "https://cdn.myanimelist.net/images/anime/1613/102179.jpg", desc: "Membangun peradaban.", studio: "TMS", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Stone World"}], sources: ["Ani-One"] },
  { id: 25, title: "Mushoku Tensei", day: "Minggu", time: "22:00", genre: ["Isekai"], img: "https://cdn.myanimelist.net/images/anime/1530/112615.jpg", desc: "Reinkarnasi Rudy.", studio: "Studio Bind", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"New Life"}], sources: ["Muse Indonesia"] },
  { id: 26, title: "Kaguya-sama", day: "Sabtu", time: "23:00", genre: ["Comedy", "Romance"], img: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg", desc: "Perang cinta.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Love is War"}], sources: ["Bstation"] },
  { id: 27, title: "Mashle", day: "Sabtu", time: "00:00", genre: ["Comedy", "Magic"], img: "https://cdn.myanimelist.net/images/anime/1638/131438.jpg", desc: "Otot vs Sihir.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Muscle Magic"}], sources: ["Ani-One"] },
  { id: 28, title: "Blue Box", day: "Kamis", time: "23:56", genre: ["Romance", "Sports"], img: "https://cdn.myanimelist.net/images/anime/1900/144933.jpg", desc: "Badminton & Basket.", studio: "Telecom", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Practice"}], sources: ["Netflix"] },
  { id: 29, title: "Vinland Saga", day: "Senin", time: "00:00", genre: ["Action", "Seinen"], img: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg", desc: "Kisah Viking.", studio: "MAPPA", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"True Warrior"}], sources: ["Netflix"] },
  { id: 30, title: "Bungou Stray Dogs", day: "Rabu", time: "21:00", genre: ["Supernatural"], img: "https://cdn.myanimelist.net/images/anime/1505/135967.jpg", desc: "Detektif bersenjata.", studio: "Bones", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Beast"}], sources: ["Ani-One"] },
  { id: 31, title: "Mob Psycho 100", day: "Kamis", time: "22:00", genre: ["Action", "Comedy"], img: "https://cdn.myanimelist.net/images/anime/1918/127878.jpg", desc: "Kekuatan psikis Mob.", studio: "Bones", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Self-Possession"}], sources: ["Bstation"] },
  { id: 32, title: "Cyberpunk: Edgerunners", day: "Selasa", time: "19:00", genre: ["Sci-Fi", "Action"], img: "https://cdn.myanimelist.net/images/anime/1818/126435.jpg", desc: "Kota masa depan.", studio: "Trigger", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"David"}], sources: ["Netflix"] },
  { id: 33, title: "Re:Zero", day: "Rabu", time: "21:30", genre: ["Isekai", "Psychological"], img: "https://cdn.myanimelist.net/images/anime/11/79410.jpg", desc: "Mati dan kembali.", studio: "White Fox", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Subaru"}], sources: ["Muse Indonesia"] },
  { id: 34, title: "That Time I Got Reincarnated as a Slime", day: "Selasa", time: "23:00", genre: ["Isekai"], img: "https://cdn.myanimelist.net/images/anime/1506/117717.jpg", desc: "Rimuru sang Slime.", studio: "Eight Bit", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Rimuru"}], sources: ["Muse Indonesia"] },
  { id: 35, title: "Blue Exorcist", day: "Minggu", time: "00:00", genre: ["Action", "Demons"], img: "https://cdn.myanimelist.net/images/anime/10/75195.jpg", desc: "Anak Satan.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Exorcist"}], sources: ["Ani-One"] },
  { id: 36, title: "Fire Force", day: "Sabtu", time: "01:00", genre: ["Action", "Sci-Fi"], img: "https://cdn.myanimelist.net/images/anime/1410/101851.jpg", desc: "Pemadam api berkekuatan api.", studio: "David Production", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Shinra"}], sources: ["Bstation"] },
  { id: 37, title: "Shingeki no Kyojin", day: "Senin", time: "00:00", genre: ["Action", "Drama"], img: "https://cdn.myanimelist.net/images/anime/10/47347.jpg", desc: "Dunia Titan.", studio: "MAPPA", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Freedom"}], sources: ["Ani-One"] },
  { id: 38, title: "Overlord", day: "Selasa", time: "21:00", genre: ["Isekai", "Fantasy"], img: "https://cdn.myanimelist.net/images/anime/10/73215.jpg", desc: "Ainz Ooal Gown.", studio: "Madhouse", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"King"}], sources: ["Bstation"] },
  { id: 39, title: "86 Eighty-Six", day: "Minggu", time: "00:00", genre: ["Mecha", "Drama"], img: "https://cdn.myanimelist.net/images/anime/1987/117507.jpg", desc: "Perang tak berawak.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Undertaker"}], sources: ["Bstation"] },
  { id: 40, title: "Your Lie in April", day: "Jumat", time: "20:00", genre: ["Music", "Drama"], img: "https://cdn.myanimelist.net/images/anime/3/67177.jpg", desc: "Piano & Biola.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Spring"}], sources: ["Netflix"] },
  { id: 41, title: "Grand Blue", day: "Sabtu", time: "02:00", genre: ["Comedy"], img: "https://cdn.myanimelist.net/images/anime/1160/94273.jpg", desc: "Klub selam & alkohol.", studio: "Zero-G", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Diving"}], sources: ["Bstation"] },
  { id: 42, title: "Hell's Paradise", day: "Sabtu", time: "23:00", genre: ["Action"], img: "https://cdn.myanimelist.net/images/anime/1620/134449.jpg", desc: "Gabimaru sang hampa.", studio: "MAPPA", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Island"}], sources: ["Netflix"] },
  { id: 43, title: "Wind Breaker", day: "Kamis", time: "23:00", genre: ["Action"], img: "https://cdn.myanimelist.net/images/anime/1460/141708.jpg", desc: "Geng sekolah pahlawan.", studio: "CloverWorks", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Sakura"}], sources: ["Bstation"] },
  { id: 44, title: "Solo Leveling S2", day: "Minggu", time: "21:00", genre: ["Action"], img: "https://cdn.myanimelist.net/images/anime/1516/141014.jpg", desc: "Shadow Monarch.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Arise"}], sources: ["Netflix"] },
  { id: 45, title: "Food Wars!", day: "Sabtu", time: "20:00", genre: ["Ecchi", "Cooking"], img: "https://cdn.myanimelist.net/images/anime/11/74520.jpg", desc: "Masak atau telanjang.", studio: "J.C.Staff", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Soma"}], sources: ["Ani-One"] },
  { id: 46, title: "Assassination Classroom", day: "Jumat", time: "21:00", genre: ["Comedy", "Action"], img: "https://cdn.myanimelist.net/images/anime/8/70857.jpg", desc: "Membunuh guru gurita.", studio: "Lerche", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Koro-sensei"}], sources: ["Bstation"] },
  { id: 47, title: "Gintama", day: "Senin", time: "18:00", genre: ["Comedy", "Samurai"], img: "https://cdn.myanimelist.net/images/anime/10/73274.jpg", desc: "Komedi koplak.", studio: "Sunrise", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Odd Jobs"}], sources: ["Bstation"] },
  { id: 48, title: "Clannad", day: "Sabtu", time: "19:00", genre: ["Drama", "Sad"], img: "https://cdn.myanimelist.net/images/anime/10/11130.jpg", desc: "Siapkan tisu.", studio: "KyoAni", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Dango"}], sources: ["Bstation"] },
  { id: 49, title: "Sword Art Online", day: "Minggu", time: "22:00", genre: ["Action", "MMORPG"], img: "https://cdn.myanimelist.net/images/anime/11/39717.jpg", desc: "Terjebak di game.", studio: "A-1 Pictures", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Aincrad"}], sources: ["Netflix"] },
  { id: 50, title: "Violet Evergarden", day: "Kamis", time: "20:00", genre: ["Drama", "Feel Good"], img: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg", desc: "Belajar tentang cinta.", studio: "KyoAni", episodes: [{n:1, ytId:"dQw4w9WgXcQ", title:"Auto Memory Doll"}], sources: ["Netflix"] }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = animeDatabase;
}
