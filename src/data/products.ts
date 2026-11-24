export interface Product {
  id: string;
  name: string;
  category: "keripik" | "syrup" | "stick" | "sambal" | "gula-aren";
  categoryLabel: string;
  netto: string;
  price: number;
  originalPrice: number;
  stock: number;
  rating: number;
  soldCount: string;
  image: string;
  images?: string[];
  badge?: string;
  discountBadge?: string;
  pirt: string;
  description: string;
  komposisi: string;
  shelfLife: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "singkong-balado",
    name: "Singkong Balado Gurih Pedas Manis",
    category: "keripik",
    categoryLabel: "Keripik",
    netto: "Netto 250gr",
    price: 35000,
    originalPrice: 40000,
    stock: 100,
    rating: 4.9,
    soldCount: "1.2rb+",
    image: "/images/singkong-balado-1.jpg",
    images: [
      "/images/singkong-balado-1.jpg",
      "/images/singkong-balado-2.jpg",
      "/images/singkong-balado-3.jpg",
    ],
    badge: "⭐ Terlaris",
    discountBadge: "Diskon 12%",
    pirt: "P-IRT No: 2111871011336-30",
    description: "Keripik singkong renyah dengan balutan bumbu balado pedas manis karamel khas warisan Nusantara. Dibuat dari singkong pilihan petani lokal dan cabai asli tanpa pewarna buatan.",
    komposisi: "Singkong pilihan, Minyak kelapa, Cabai merah asli, Bawang putih, Gula pasir, Garam beryodium.",
    shelfLife: "6 Bulan dalam kemasan rapat"
  },
  {
    id: "sambal-bajak",
    name: "Sambal Bajak Asli Lampung",
    category: "sambal",
    categoryLabel: "Sambal",
    netto: "Netto 220gr",
    price: 32000,
    originalPrice: 38000,
    stock: 100,
    rating: 4.8,
    soldCount: "840+",
    image: "/images/sambal-bajak-1.jpg",
    images: [
      "/images/sambal-bajak-1.jpg",
      "/images/sambal-bajak-2.jpg",
      "/images/sambal-bajak-3.jpg",
    ],
    badge: "Resep 1986",
    pirt: "P-IRT No: 2091871041336-30",
    description: "Sambal bajak legendaris sejak tahun 1986 khas Bandar Lampung. Memiliki perpaduan rasa pedas mantap, gurih terasi matang, dan sedikit manis gula aren asli.",
    komposisi: "Tomat segar, Bawang merah, Bawang putih, Cabai rawit, Cabai merah, Terasi bakar, Gula aren, Garam.",
    shelfLife: "8 Bulan (simpan di kulkas setelah dibuka)"
  },
  {
    id: "sirup-jeruk-kunci",
    name: "Sirup Jeruk Kunci Murni",
    category: "syrup",
    categoryLabel: "Syrup",
    netto: "Isi 250ml",
    price: 35000,
    originalPrice: 42000,
    stock: 100,
    rating: 5.0,
    soldCount: "620+",
    image: "/images/sirup-jeruk-kunci.jpg",
    badge: "Segar Alami",
    pirt: "P-IRT No: 2071871071336-31",
    description: "Sirup olahan sari jeruk kunci asli kaya vitamin C alami. Sangat segar disajikan dingin dengan es batu atau sebagai perasa alami aneka hidangan penutup.",
    komposisi: "Ekstrak jeruk kunci asli 100%, Gula tebu murni, Air mineral pegunungan.",
    shelfLife: "12 Bulan"
  },
  {
    id: "sirup-jeruk-nipis",
    name: "Sirup Jeruk Nipis Tempo Doeloe",
    category: "syrup",
    categoryLabel: "Syrup",
    netto: "Isi 250ml",
    price: 29000,
    originalPrice: 35000,
    stock: 100,
    rating: 4.9,
    soldCount: "510+",
    image: "/images/sirup-jeruk-nipis.jpg",
    badge: "Kaya Vitamin C",
    discountBadge: "Diskon 17%",
    pirt: "P-IRT No: 2071871091336-31",
    description: "Sirup sari jeruk nipis asli perasan segar dengan cita rasa asam manis yang pas di lidah. Membantu menyegarkan tubuh dan cocok untuk sajian minuman keluarga.",
    komposisi: "Sari jeruk nipis pilihan, Gula pasir murni, Air mineral steril, Ekstrak pandan alami.",
    shelfLife: "12 Bulan"
  },
  {
    id: "stick-bawang",
    name: "Stick Bawang Renyah Tempo Doeloe",
    category: "stick",
    categoryLabel: "Stick Bawang",
    netto: "Netto 200gr",
    price: 28000,
    originalPrice: 34000,
    stock: 100,
    rating: 4.8,
    soldCount: "970+",
    image: "/images/stick-bawang-1.jpg",
    images: [
      "/images/stick-bawang-1.jpg",
      "/images/stick-bawang-2.jpg",
      "/images/stick-bawang-3.jpg",
    ],
    badge: "Renyah Gurih",
    pirt: "P-IRT No: 2051871051336-31",
    description: "Stick kue bawang homemade renyah dengan aroma bawang merah dan seledri asli yang menggoda selera. Tekstur empuk, gurih, dan tidak berminyak.",
    komposisi: "Tepung terigu protein sedang, Bawang merah segar, Seledri, Telur ayam, Margarin, Bumbu rempah rahasia.",
    shelfLife: "4 Bulan dalam kemasan kedap udara"
  },
  {
    id: "keripik-talas",
    name: "Keripik Talas Balado Tempo Doeloe",
    category: "keripik",
    categoryLabel: "Keripik",
    netto: "Netto 250gr",
    price: 38000,
    originalPrice: 45000,
    stock: 100,
    rating: 4.9,
    soldCount: "750+",
    image: "/images/keripik-talas.jpg",
    badge: "Pedas Mantap",
    discountBadge: "Diskon 15%",
    pirt: "P-IRT No: 2111871021336-30",
    description: "Keripik talas pilihan yang diiris tipis garing renyah dipadukan dengan bumbu balado khas Lampung. Rasa gurih manis pedas meresap sempurna di setiap gigitan.",
    komposisi: "Umbi talas pilihan, Cabai merah kering, Bawang putih, Minyak kelapa sawit, Gula, Garam halus.",
    shelfLife: "6 Bulan dalam kemasan tertutup"
  },
  {
    id: "gula-aren-cair",
    name: "Gula Aren Cair",
    category: "gula-aren",
    categoryLabel: "Gula Aren",
    netto: "Isi 250ml",
    price: 25000,
    originalPrice: 30000,
    stock: 100,
    rating: 4.9,
    soldCount: "430+",
    image: "/images/gula-aren-cair.jpg",
    badge: "100% Nira Murni",
    discountBadge: "Diskon 16%",
    pirt: "P-IRT No: 2091871010783-25",
    description: "Gula aren cair murni kualitas premium khas warisan Tempo Doeloe. Diolah secara tradisional dari nira pohon aren asli tanpa campuran pemanis buatan maupun pengawet. Memiliki aroma karamel alami yang wangi dan rasa manis legit gurih, sangat cocok untuk campuran kopi, hidangan pencuci mulut, maupun olahan kuliner nusantara.",
    komposisi: "100% Nira pohon aren murni, Air mineral steril.",
    shelfLife: "12 Bulan dalam suhu sejuk"
  }
];
