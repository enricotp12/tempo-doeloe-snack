import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Halaman Tidak Ditemukan - Tempo Doeloe Snack",
};

export default function NotFound() {
  const suggestions = PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col">
      <header className="sticky top-0 z-40 bg-white/95 border-b border-kunyit-200/80 shadow-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-kunyit-100 p-1 border border-kunyit-300 flex items-center justify-center">
              <Image src="/images/logo.png" alt="Tempo Doeloe" width={36} height={36} className="logo-blend object-contain" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-kunyit-900 group-hover:text-kunyit-700 transition">
                Tempo Doeloe
              </span>
              <span className="ml-1 text-[10px] font-extrabold uppercase text-kunyit-600 bg-kunyit-100 px-1.5 py-0.5 rounded">
                Snack
              </span>
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex-1 w-full text-center">
        <p className="font-serif font-bold text-7xl sm:text-8xl text-kunyit-500 leading-none">404</p>
        <h1 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-stone-800">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-500 max-w-md mx-auto leading-relaxed">
          Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Yuk, kembali ke katalog dan
          pilih camilan favorit Anda.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-kunyit-500 hover:bg-kunyit-600 text-kunyit-950 font-bold text-sm rounded-xl shadow-xs transition"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/#katalog-produk"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-kunyit-50 border border-kunyit-300 text-stone-700 font-bold text-sm rounded-xl shadow-xs transition group"
          >
            <ArrowLeft className="w-4 h-4 text-kunyit-700 group-hover:-translate-x-1 transition-transform" />
            Lihat Katalog
          </Link>
        </div>

        <div className="mt-14 text-left">
          <h2 className="font-serif font-bold text-lg text-stone-800 mb-4 text-center">
            Mungkin Anda Suka
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {suggestions.map((p) => (
              <Link
                key={p.id}
                href={`/produk/${p.id}`}
                className="bg-white rounded-2xl border border-kunyit-200 hover:border-kunyit-400 overflow-hidden shadow-xs transition group"
              >
                <div className="relative aspect-square bg-stone-100 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-3">
                  <span className="text-[11px] text-kunyit-700 font-semibold uppercase tracking-wider">
                    {p.categoryLabel}
                  </span>
                  <h3 className="font-bold text-sm text-stone-900 leading-snug line-clamp-2 group-hover:text-kunyit-700 transition">
                    {p.name}
                  </h3>
                  <span className="block mt-1 font-bold text-kunyit-800">
                    Rp {p.price.toLocaleString("id-ID")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
