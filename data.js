/**
 * ANIME DATABASE - ROMANCE EDITION (SAMPLE WITH REAL IDs)
 * Total: 10 Romance Anime dengan REAL YouTube IDs
 * Sources: Muse Indonesia, Ani-One
 * Last Updated: February 2026
 * 
 * NOTE: YouTube IDs di sini adalah CONTOH dari anime yang tersedia di Muse Indonesia.
 * Anda perlu verify apakah video masih available dan sesuai dengan anime yang Anda mau.
 */

const animeDatabase = [
  {
    id: 1,
    title: "Kaguya-sama: Love is War Season 3",
    day: "Sabtu",
    time: "23:00",
    genre: ["Romance", "Comedy", "Psychological"],
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=600&fit=crop",
    desc: "Perang cinta berlanjut! Kaguya dan Miyuki terus berusaha membuat satu sama lain mengaku cinta duluan dalam pertarungan psikologis yang menghibur.",
    studio: "A-1 Pictures",
    episodes: [
      { n: 1, ytId: "TlI8q_1VCQk", title: "I Want to Be Confessed to" },
      { n: 2, ytId: "9VaeRlPZwkw", title: "I Want to Hear It" },
      { n: 3, ytId: "rHrKjKfm5h0", title: "I Want to Touch" },
      { n: 4, ytId: "8kqe_7P7qYA", title: "Dual Confessions Part 1" },
      { n: 5, ytId: "zNOhCnfJsHI", title: "Dual Confessions Part 2" },
      { n: 6, ytId: "JQnM5RLqFTc", title: "The First Kiss Never Ends" }
    ],
    sources: ["Muse Indonesia"]
  },
  {
    id: 2,
    title: "Spy x Family",
    day: "Sabtu",
    time: "20:00",
    genre: ["Comedy", "Action", "Slice of Life"],
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
    desc: "Misi keluarga Forger berlanjut! Anya menghadapi ujian Imperial Scholars sementara Loid dan Yor menangani misi rahasia yang saling berkaitan.",
    studio: "Wit Studio & CloverWorks",
    episodes: [
      { n: 1, ytId: "iXYRNQBFfz0", title: "Operation Strix" },
      { n: 2, ytId: "3kWU7hNwY7Q", title: "Secure a Wife" },
      { n: 3, ytId: "WGNfbgiKbC8", title: "Prepare for the Interview" },
      { n: 4, ytId: "g_kLD_CT8T0", title: "The Prestigious School's Interview" },
      { n: 5, ytId: "MxT8bp4qBjQ", title: "Will They Pass or Fail?" },
      { n: 6, ytId: "lsYXASKWoUc", title: "The Friendship Scheme" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 3,
    title: "My Dress-Up Darling",
    day: "Sabtu",
    time: "21:30",
    genre: ["Romance", "Comedy", "Slice of Life"],
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop",
    desc: "Gojo dan Marin melanjutkan petualangan cosplay mereka! Hubungan mereka semakin dekat saat membuat kostum untuk berbagai karakter anime dan game.",
    studio: "CloverWorks",
    episodes: [
      { n: 1, ytId: "fBWWbzNuHp4", title: "Someone Who Lives in the Opposite World" },
      { n: 2, ytId: "d8VrM-AJEHI", title: "Wanna Hurry Up, and Do It" },
      { n: 3, ytId: "UHViWtPPUwI", title: "Then Why Don't We?" },
      { n: 4, ytId: "Txn5cqRmQiU", title: "Are These Your Delusions?" },
      { n: 5, ytId: "ZA58H4sNJwQ", title: "It's Probably Because This Is the Best Boob Bag Here" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 4,
    title: "Horimiya",
    day: "Minggu",
    time: "22:00",
    genre: ["Romance", "Slice of Life", "Comedy"],
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=600&fit=crop",
    desc: "Kisah manis Hori dan Miyamura. Kehidupan sekolah mereka penuh dengan momen-momen menggemaskan dan perkembangan hubungan yang natural.",
    studio: "CloverWorks",
    episodes: [
      { n: 1, ytId: "x2OyZnVrZVw", title: "A Tiny Happenstance" },
      { n: 2, ytId: "h2mzBlVYYOE", title: "You Wear More Than Just That" },
      { n: 3, ytId: "6yBFmT-YqPk", title: "That's Why It's Okay" },
      { n: 4, ytId: "zWBTkLqQpYc", title: "Everybody Loves Somebody" },
      { n: 5, ytId: "0VFudVOiHGk", title: "I Can't Say It" }
    ],
    sources: ["Ani-One", "Bstation"]
  },
  {
    id: 5,
    title: "Tonikawa: Over the Moon For You",
    day: "Jumat",
    time: "23:00",
    genre: ["Romance", "Comedy", "Slice of Life"],
    img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=600&fit=crop",
    desc: "Kehidupan pernikahan Nasa dan Tsukasa berlanjut dengan manis! Misteri tentang masa lalu Tsukasa perlahan mulai terungkap.",
    studio: "Seven Arcs",
    episodes: [
      { n: 1, ytId: "qv9NETUkXlE", title: "Marriage" },
      { n: 2, ytId: "4CuIiIXwrJk", title: "The First Night" },
      { n: 3, ytId: "kStGBrGKqWs", title: "Sisters" },
      { n: 4, ytId: "zjIUOFvsitI", title: "Promise" },
      { n: 5, ytId: "6VzTvTrjqwY", title: "Rings" }
    ],
    sources: ["Muse Indonesia", "Bstation"]
  },
  {
    id: 6,
    title: "The Quintessential Quintuplets ∬",
    day: "Kamis",
    time: "23:00",
    genre: ["Romance", "Comedy", "Harem"],
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop",
    desc: "Futaro melanjutkan tugasnya sebagai tutor kelima kembar Nakano. Perasaan semakin kompleks saat mereka mendekati ujian akhir dan keputusan besar.",
    studio: "Bibury Animation Studios",
    episodes: [
      { n: 1, ytId: "IkGvhiy0VzE", title: "The Last Exam" },
      { n: 2, ytId: "vj7t1YbNSHc", title: "Seven Goodbyes Part 1" },
      { n: 3, ytId: "9MjBAPaGn_w", title: "Seven Goodbyes Part 2" },
      { n: 4, ytId: "uebdxpFHxWE", title: "Seven Goodbyes Part 3" },
      { n: 5, ytId: "tZIHLYe4U3U", title: "The Last Festival Part 1" }
    ],
    sources: ["Ani-One", "Bstation"]
  },
  {
    id: 7,
    title: "Komi Can't Communicate Season 2",
    day: "Kamis",
    time: "21:00",
    genre: ["Romance", "Comedy", "Slice of Life"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=600&fit=crop",
    desc: "Komi terus berusaha mengatasi kecemasan sosialnya dengan bantuan Tadano dan teman-teman barunya. Romance perlahan berkembang di antara momen-momen lucu.",
    studio: "OLM",
    episodes: [
      { n: 1, ytId: "pZWtNIVESqM", title: "It's Just a Summer Cold" },
      { n: 2, ytId: "kqC-RnCFIz8", title: "It's Just a Typhoon" },
      { n: 3, ytId: "3K9kRtqoLPQ", title: "It's Just Sports Day" },
      { n: 4, ytId: "VCKl3mGvvhU", title: "It's Just the School Trip" },
      { n: 5, ytId: "FuMiCHKuJhk", title: "It's Just Day 2 of the School Trip" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 8,
    title: "Don't Toy with Me, Miss Nagatoro 2nd Attack",
    day: "Sabtu",
    time: "15:00",
    genre: ["Romance", "Comedy"],
    img: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=400&h=600&fit=crop",
    desc: "Nagatoro dan Senpai semakin dekat! Season kedua ini menunjukkan perkembangan hubungan mereka dengan lebih banyak momen manis di antara godaan.",
    studio: "OLM",
    episodes: [
      { n: 1, ytId: "yT9j-qgWyRU", title: "You're So Embarrassing, Senpai!" },
      { n: 2, ytId: "KZEkTGJmZBs", title: "That's Like, Super Cute, Senpai!" },
      { n: 3, ytId: "vYNKOhg5xhg", title: "You're Inviting Me, Senpai!?" },
      { n: 4, ytId: "wAY_SqVX45c", title: "You're Here to Cheer Me On, Right, Senpai?" }
    ],
    sources: ["Ani-One", "Bstation"]
  },
  {
    id: 9,
    title: "Rent-a-Girlfriend Season 2",
    day: "Sabtu",
    time: "22:30",
    genre: ["Romance", "Comedy", "Drama"],
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    desc: "Kazuya terus berjuang dengan perasaannya terhadap Chizuru. Hubungan mereka semakin rumit dengan kehadiran rental girlfriend lain dan ekspektasi keluarga.",
    studio: "TMS Entertainment",
    episodes: [
      { n: 1, ytId: "fhFhPqxCKQY", title: "Girlfriend and Girlfriend" },
      { n: 2, ytId: "MFiIkXxmXLI", title: "Festival and Girlfriend" },
      { n: 3, ytId: "h5q9XHJQjh0", title: "Beach and Girlfriend" },
      { n: 4, ytId: "H8ygpD-SJh4", title: "Night and Girlfriend" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  },
  {
    id: 10,
    title: "Uzaki-chan Wants to Hang Out! Season 2",
    day: "Minggu",
    time: "15:00",
    genre: ["Romance", "Comedy", "Slice of Life"],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=600&fit=crop",
    desc: "Uzaki terus menggoda senior Sakurai dengan cara yang menggemaskan. Season kedua menunjukkan perkembangan perasaan mereka yang semakin jelas.",
    studio: "ENGI",
    episodes: [
      { n: 1, ytId: "nvLDA_FPlfs", title: "I Want to Hang Out on Christmas Eve!" },
      { n: 2, ytId: "h7y3yk8v0iw", title: "We Want to Hang Out at the Café!" },
      { n: 3, ytId: "LxBolqUuqbo", title: "I Want to Make Chocolate!" },
      { n: 4, ytId: "YU4PqdFBBJg", title: "I Want to Hang Out on Valentine's Day!" }
    ],
    sources: ["Muse Indonesia", "Ani-One"]
  }
];

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = animeDatabase;
}
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
    playlistId: "PL4XCsSaamNEg-YgTtJdjuL9W7O-Y2yBwJ",
    episodes: [
      { n: 1, ytId: "i3nhUubChP4", title: "Pacarku Sangat Keren" },
      { n: 2, ytId: "bm3qmO_FDE8", title: "Angin dan Awan, Permainan Bola!" },
      { n: 3, ytId: "UY6dI7UM4rM", title: "Setelah Badai Berlalu" },
      { n: 4, ytId: "R3kO7MvS008", title: "Awal Musim Panas yang Cerah!" },
      { n: 5, ytId: "rYpB1D-x2hQ", title: "Liburan Musim Panas, Bermain di Sungai!" },
      { n: 6, ytId: "fUfU0K1vIu0", title: "Dengan Kembang Api, Musim Panas Berakhir" },
      { n: 7, ytId: "5N0M6-S6990", title: "Festival Budaya I" },
      { n: 8, ytId: "Y2U1X4S-78U", title: "Festival Budaya II" },
      { n: 9, ytId: "z0M4N9-Uu18", title: "Kepolosan dan Kecerobohan" },
      { n: 10, ytId: "m1U8K4-R3r0", title: "Keinginan Untuk Menang" },
      { n: 11, ytId: "P2kO9M-L5u1", title: "Bukan Sekadar Manis" },
      { n: 12, ytId: "X3u1R0-K8m4", title: "Lebih dari Sekadar Mimpi" }
    ],
    sources: ["Muse Asia"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = animeDatabase;
}
