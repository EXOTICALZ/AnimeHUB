# 🎬 ANIMEHUB — Legal Anime Aggregator

Website aggregator anime legal yang menampilkan jadwal tayang dari sumber resmi: **Muse Indonesia**, **Ani-One**, dan **Bstation**. Dibangun dengan Vanilla JavaScript untuk performa maksimal dan UI premium ala Netflix/Crunchyroll.

![ANIMEHUB Preview](https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=600&fit=crop)

---

## ✨ Fitur Utama

### 🎨 **UI/UX Premium**
- **Dark Mode** dengan Deep Black & Accent Red
- **Mobile-first responsive design**
- **Smooth animations** dan hover effects
- **Modal player** yang elegan dengan episode navigation
- Typography menggunakan **Archivo Black** & **DM Sans**

### 📅 **Sistem Jadwal Pintar**
- Deteksi otomatis hari ini
- Badge **"UPDATE HARI INI"** pada anime yang rilis hari ini
- Filter berdasarkan hari tayang (Senin - Minggu)

### 🔍 **Search & Filter**
- **Real-time search** untuk judul dan genre
- Filter hari rilis yang responsif
- Sistem pencarian instan tanpa reload

### 🎥 **Player System**
- **YouTube Embed** otomatis untuk Muse Indonesia & Ani-One
- **Portal UI khusus** untuk anime dari Bstation
- **Episode navigation** dalam modal
- Autoplay pada episode baru

### 💬 **Comment System**
- Integrasi **Disqus** unik untuk setiap anime
- Thread diskusi terpisah per judul

### 🛠️ **Admin Panel**
- Generator database otomatis
- Form input yang user-friendly
- Preview anime sebelum generate
- Export ke JSON
- Copy to clipboard

---

## 🚀 Quick Start

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/animehub.git
cd animehub
```

### 2️⃣ Struktur File
```
animehub/
├── index.html      # Website utama
├── data.js         # Database anime
├── admin.html      # Admin panel untuk input data
└── README.md       # Dokumentasi
```

### 3️⃣ Jalankan Lokal
Buka `index.html` di browser Anda, atau gunakan local server:
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx http-server
```

Akses di: `http://localhost:8000`

---

## 🌐 Hosting di GitHub Pages

### Step-by-Step Guide:

#### 1. **Buat Repository GitHub**
- Login ke [GitHub](https://github.com)
- Klik **New Repository**
- Nama repository: `animehub` (atau nama lain)
- Centang **Add a README file** (optional)
- Klik **Create repository**

#### 2. **Upload File**
Ada 2 cara:

**Cara A: Via GitHub Web Interface**
- Klik **Add file** → **Upload files**
- Drag & drop ketiga file: `index.html`, `data.js`, `admin.html`
- Klik **Commit changes**

**Cara B: Via Git Command Line**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/animehub.git
git push -u origin main
```

#### 3. **Aktifkan GitHub Pages**
- Buka repository → **Settings**
- Sidebar kiri → **Pages**
- Source → **Deploy from a branch**
- Branch → Pilih **main** → Folder: **/ (root)**
- Klik **Save**

#### 4. **Akses Website**
Tunggu 2-5 menit, lalu akses:
```
https://username.github.io/animehub/
```

---

## 📝 Cara Menambah Anime Baru

### Menggunakan Admin Panel (Recommended):

1. Buka `admin.html` di browser
2. Isi semua informasi anime:
   - **Judul Anime** (wajib)
   - **Hari Tayang** (wajib)
   - **Jam Tayang** (wajib)
   - **Studio Animasi** (optional)
   - **Genre** (minimal 1)
   - **URL Gambar Cover** (wajib)
   - **Deskripsi** (wajib)
   - **Sumber Legal** (minimal 1)

3. **Generate Episode Fields**:
   - Masukkan jumlah episode
   - Klik "Generate Episode Fields"
   - Isi judul dan YouTube ID untuk setiap episode

4. **Generate Code**:
   - Klik "⚡ Generate Database Code"
   - Copy kode yang dihasilkan

5. **Tambahkan ke Database**:
   - Buka `data.js`
   - Tambahkan kode baru ke array `animeDatabase`
   - Jangan lupa tambahkan **koma (,)** di antara object
   - Save file

6. **Refresh Website**:
   - Reload `index.html`
   - Anime baru akan muncul!

### Cara Manual (Edit data.js langsung):

```javascript
{
  id: 11,
  title: "Anime Baru",
  day: "Senin",
  time: "22:00",
  genre: ["Action", "Fantasy"],
  img: "https://example.com/cover.jpg",
  desc: "Deskripsi anime yang menarik...",
  studio: "Studio Name",
  episodes: [
    { n: 1, ytId: "YouTubeVideoID1", title: "Episode 1 Title" },
    { n: 2, ytId: "YouTubeVideoID2", title: "Episode 2 Title" }
  ],
  sources: ["Muse Indonesia", "Ani-One"]
}
```

---

## 🎯 Cara Mendapatkan YouTube Video ID

Contoh URL YouTube:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

YouTube ID adalah: **`dQw4w9WgXcQ`** (bagian setelah `v=`)

### Tips Mencari Video Resmi:
1. **Muse Indonesia**: https://youtube.com/@MuseIndonesia
2. **Ani-One Asia**: https://youtube.com/@AniOneAsia
3. **Bstation**: https://www.bilibili.tv

---

## 🎨 Kustomisasi

### Mengubah Warna:
Edit CSS variables di `index.html`:
```css
:root {
  --black: #0a0a0a;
  --accent-red: #ff0033;      /* Ubah ini */
  --accent-red-hover: #cc0028; /* Ubah ini */
  /* ... */
}
```

### Mengubah Font:
Edit Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

---

## 🔧 Teknologi

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript (ES6+)** — No frameworks, super lightweight
- **Google Fonts** — Archivo Black & DM Sans
- **Disqus** — Comment system

---

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ 90+  |
| Firefox | ✅ 88+  |
| Safari  | ✅ 14+  |
| Edge    | ✅ 90+  |

---

## 🐛 Troubleshooting

### **Anime tidak muncul?**
- Pastikan struktur JSON di `data.js` benar (cek koma, bracket)
- Buka Browser Console (F12) untuk melihat error

### **YouTube video tidak load?**
- Pastikan YouTube Video ID benar
- Cek apakah video masih available (tidak di-delete/private)

### **GitHub Pages tidak update?**
- Clear browser cache (Ctrl + Shift + R)
- Tunggu 5-10 menit untuk propagasi
- Cek di Settings → Pages apakah ada error

### **Image tidak muncul?**
- Pastikan URL gambar valid dan accessible
- Gunakan hosting image seperti Unsplash, Imgur, atau Cloudinary
- Format yang didukung: JPG, PNG, WebP

---

## 📱 Screenshot

### Desktop View
![Desktop](https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&h=600&fit=crop)

### Mobile View
![Mobile](https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=800&fit=crop)

### Admin Panel
![Admin](https://images.unsplash.com/photo-1611171711912-e458ba951f39?w=1200&h=600&fit=crop)

---

## 🎓 Learning Resources

### YouTube ID Finder:
- Manual: Copy dari URL (setelah `v=`)
- Tool: [YouTube ID Extractor](https://commentpicker.com/youtube-video-id.php)

### Image Hosting:
- [Unsplash](https://unsplash.com) — High-quality free images
- [Imgur](https://imgur.com) — Simple image hosting
- [Cloudinary](https://cloudinary.com) — CDN image hosting

### Disqus Setup:
1. Daftar di [Disqus](https://disqus.com)
2. Create new site
3. Ganti `animehub-legal` di `index.html` dengan Disqus shortname Anda:
```javascript
s.src = 'https://YOUR-DISQUS-SHORTNAME.disqus.com/embed.js';
```

---

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:
1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📄 License

Project ini menggunakan **MIT License** — bebas digunakan untuk personal maupun komersial.

---

## 🙏 Credits

- **Design Inspiration**: Netflix, Crunchyroll
- **Fonts**: Google Fonts (Archivo Black, DM Sans)
- **Images**: Unsplash (placeholder images)
- **Legal Sources**: 
  - [Muse Indonesia](https://youtube.com/@MuseIndonesia)
  - [Ani-One Asia](https://youtube.com/@AniOneAsia)
  - [Bstation](https://www.bilibili.tv)

---

## 📬 Contact

Punya pertanyaan atau saran? Hubungi:
- **Email**: contact@animehub.com
- **Twitter**: [@animehub](https://twitter.com/animehub)
- **Discord**: AnimehubCommunity

---

## 🔮 Future Features

- [ ] Watchlist / Favorites system
- [ ] User authentication
- [ ] MAL/AniList integration
- [ ] Advanced filters (by studio, year, rating)
- [ ] Dark/Light mode toggle
- [ ] PWA support (offline mode)
- [ ] Multi-language support
- [ ] Export schedule to calendar (ICS)

---

<div align="center">

**Made with ❤️ by AnimeFans Community**

⭐ **Star this repo jika Anda merasa terbantu!** ⭐

</div>
