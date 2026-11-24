"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { PRODUCTS, Product } from "@/data/products";
import { BadgePercent, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("populer");
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  // Quick View Modal state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleClaimCoupon = (code: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    showToast(`Kupon diskon "${code}" berhasil disalin! Silakan gunakan saat memesan via WhatsApp.`);
  };

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (searchQuery.trim()) {
      // Prioritize live search across all product attributes (name, category, description, netto, etc.)
      const qWords = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      list = list.filter((p) => {
        const searchable = `${p.name} ${p.categoryLabel} ${p.category} ${p.description} ${p.netto} ${p.komposisi} ${p.id}`.toLowerCase();
        return qWords.every((w) => searchable.includes(w));
      });
    } else if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === "harga-rendah") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "harga-tinggi") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "terlaris") {
      list.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // Smooth scroll to products section
  const scrollToProducts = () => {
    setTimeout(() => {
      const el = document.getElementById("katalog-produk");
      if (el) {
        const headerEl = document.querySelector("header");
        const headerHeight = headerEl ? headerEl.offsetHeight : 120;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* 1. Header (Logo, Search with Live Matching, Categories) */}
      <Header
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery("");
          scrollToProducts();
        }}
        onSearch={(query) => {
          setSearchQuery(query);
          if (query.trim()) {
            setSelectedCategory("all");
          }
        }}
      />

      {/* 2. Component Card Section (Langsung Katalog Produk) */}
      <main id="katalog-produk" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 flex-1 w-full">
        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pt-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-kunyit-700 text-xs font-bold uppercase tracking-wider mb-1">
              <BadgePercent className="w-4 h-4" />
              Pilihan Terbaik Pelanggan
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-stone-900">
              {searchQuery.trim()
                ? `Hasil Pencarian: "${searchQuery}" (${filteredProducts.length} produk ditemukan)`
                : "Katalog Camilan Khas Nusantara"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {searchQuery.trim() ? (
                <span>
                  Menampilkan produk sesuai pencarian.{" "}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-kunyit-800 underline font-semibold hover:text-kunyit-950 ml-1"
                  >
                    Reset & lihat semua
                  </button>
                </span>
              ) : (
                "Klik pada produk untuk melihat halaman detail lengkap atau langsung pesan via WhatsApp."
              )}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <label htmlFor="sortSelect" className="text-xs text-stone-500 font-medium">
              Urutkan:
            </label>
            <select
              id="sortSelect"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-white border border-kunyit-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-kunyit-500 text-stone-700 font-medium"
            >
              <option value="populer">Paling Populer</option>
              <option value="terlaris">Terlaris</option>
              <option value="harga-rendah">Harga Terendah</option>
              <option value="harga-tinggi">Harga Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid (7 Products) */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-kunyit-200 p-12 text-center my-6 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-kunyit-100 text-kunyit-700 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
              🔍
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-1">
              Produk Tidak Ditemukan
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Tidak ada camilan yang cocok dengan kata kunci &quot;<strong className="text-stone-800">{searchQuery}</strong>&quot;.
              <br />
              Coba kata kunci: <em>singkong, sambal, sirup, stick bawang, keripik talas, gula aren</em>.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2.5 bg-kunyit-500 hover:bg-kunyit-600 text-kunyit-950 font-bold text-xs rounded-xl shadow-xs transition"
            >
              Tampilkan Semua Snack ({PRODUCTS.length} Produk)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modal Quick View */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Floating Toast Notifications */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-stone-900 text-white px-4 py-3 rounded-xl shadow-xl border-l-4 border-kunyit-500 text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <CheckCircle2 className="w-5 h-5 text-kunyit-400 shrink-0" />
            <div className="flex-1 font-medium">{toast.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
