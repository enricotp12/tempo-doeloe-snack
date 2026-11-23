# Tempo Doeloe Snack - Next.js (App Router)

Website UMKM **Tempo Doeloe Snack** dengan tema warna **Kuning Kunyit (Turmeric Yellow)**, dibangun menggunakan **Next.js 14 (App Router)**, **TypeScript**, dan **Tailwind CSS**.

---

## 📂 Struktur Project

```
tempo-doeloe-snack-next/
├── public/
│   └── images/
│       ├── logo.png                # Logo Tempo Doeloe
│       ├── singkong-balado.jpg     # Produk Singkong Balado 250gr
│       ├── sambal-bajak.jpg        # Produk Sambal Bajak 220gr
│       └── sirup-jeruk-kunci.jpg   # Produk Sirup Jeruk Kunci 250ml
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root Layout dengan Font Google (Plus Jakarta Sans & Playfair Display)
│   │   ├── page.tsx                # Halaman Utama (State management, filter, toast)
│   │   └── globals.css             # Konfigurasi Tailwind & Gradasi Kuning Kunyit
│   ├── components/
│   │   ├── Header.tsx              # Header (Logo, Cek Resi, Email, Akun Seller, Keranjang)
│   │   ├── PromoBanner.tsx         # Banner Promo di bawah header dengan klaim kupon
│   │   ├── ProductCard.tsx         # Komponen Kartu Produk Interaktif
│   │   ├── OrderStatusModal.tsx    # Modal Popup Cek Status Order / Lacak Resi
│   │   ├── EmailContactModal.tsx   # Modal Hubungi Layanan Pelanggan / Email
│   │   ├── SellerModal.tsx         # Modal Portal Mitra Seller UMKM
│   │   └── QuickViewModal.tsx      # Modal Detail Komposisi & Izin P-IRT
│   └── data/
│       └── products.ts             # Data mock produk & izin edar P-IRT
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.mjs
```

---

## 🚀 Cara Menjalankan Project

1. Buka terminal di folder project ini:
   ```bash
   cd C:\Users\enric\.gemini\antigravity\scratch\tempo-doeloe-snack-next
   ```

2. Pasang dependensi:
   ```bash
   npm install
   ```
   *(atau `pnpm install` / `yarn install`)*

3. Jalankan server lokal:
   ```bash
   npm run dev
   ```

4. Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 🎨 Palet Warna Kuning Kunyit

- **Kunyit Utama**: `#EAB308` (Turmeric Base)
- **Kunyit Tua / Roasted**: `#CA8A04` & `#A16207`
- **Kunyit Cerah / Golden**: `#FACC15` & `#FEF08A`
- **Cream / Lembut**: `#FAF8F5` & `#FFFDF0`
