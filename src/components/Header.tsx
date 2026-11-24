"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, MapPin, ShieldCheck, Clock, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface HeaderProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSearch: (query: string) => void;
  searchQuery?: string;
}

export default function Header({
  selectedCategory,
  onSelectCategory,
  onSearch,
  searchQuery = "",
}: HeaderProps) {
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchInput(val);
    onSearch(val);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    onSearch("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
    setIsSearchFocused(false);
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

  // Instant matching products for live dropdown
  const queryWords = searchInput.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const matchingSuggestions = queryWords.length > 0
    ? PRODUCTS.filter((p) => {
        const text = `${p.name} ${p.categoryLabel} ${p.description} ${p.netto}`.toLowerCase();
        return queryWords.every((w) => text.includes(w));
      })
    : [];

  const categories = [
    { id: "all", label: "Semua Snack" },
    { id: "keripik", label: "Keripik" },
    { id: "syrup", label: "Syrup" },
    { id: "stick", label: "Stick Bawang" },
    { id: "sambal", label: "Sambal" },
    { id: "gula-aren", label: "Gula Aren" },
  ];

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
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
    <>
      {/* Top Notice Bar */}
      <div className="bg-kunyit-900 text-kunyit-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-kunyit-500 text-kunyit-950 px-2 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider">
              Promo Terbatas
            </span>
            <span className="hidden sm:inline">
              Gratis Ongkir Min. Belanja Rp 50.000 ke Seluruh Pulau Jawa! 🚚
            </span>
            <span className="sm:hidden">Gratis Ongkir Min. Rp 50rb! 🚚</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-kunyit-200">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-kunyit-400" /> P-IRT & 100% Halal
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-kunyit-400" /> Buka: 08.00 - 20.00 WIB
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 border-b border-kunyit-200/80 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2.5 sm:py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3 lg:gap-8">
            
            {/* BRAND LOGO */}
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-kunyit-100 p-1 sm:p-1.5 border-2 border-kunyit-400 flex items-center justify-center shadow-inner group-hover:border-kunyit-600 transition-all">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Tempo Doeloe"
                    width={48}
                    height={48}
                    className="logo-blend max-h-full max-w-full object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-kunyit-900 tracking-tight leading-none group-hover:text-kunyit-700 transition">
                      Tempo Doeloe
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-widest text-kunyit-600 bg-kunyit-100 px-1.5 py-0.5 rounded">
                      Snack
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] md:text-xs text-stone-500 font-medium">
                    Otentik & Gurih Sejak Dahulu
                  </span>
                </div>
              </Link>
            </div>

            {/* SEARCH BAR (Full Width on Mobile, Auto on Desktop) with Realtime Search & Suggestions */}
            <div ref={searchContainerRef} className="w-full md:max-w-md relative md:ml-auto">
              <form onSubmit={handleSearchSubmit} className="w-full relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleInputChange}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Cari camilan: Singkong, sambal, sirup..."
                  className="w-full pl-9 pr-20 sm:pl-10 sm:pr-24 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full bg-stone-50 border border-kunyit-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-kunyit-500 focus:border-kunyit-500 transition-all placeholder:text-stone-400"
                />
                <div className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                  <Search className="w-4 h-4" />
                </div>

                {/* Clear search button (X) */}
                {searchInput.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 rounded-full transition"
                    title="Hapus pencarian"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  type="submit"
                  className="absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2 px-3.5 sm:px-4 py-1.5 bg-kunyit-500 hover:bg-kunyit-600 text-kunyit-950 font-bold text-xs rounded-full transition shadow-sm"
                >
                  Cari
                </button>
              </form>

              {/* LIVE SEARCH SUGGESTIONS DROPDOWN */}
              {isSearchFocused && searchInput.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-kunyit-300 shadow-xl overflow-hidden z-50 animate-in fade-in duration-150">
                  <div className="p-2.5 border-b border-stone-100 bg-kunyit-50/70 flex items-center justify-between text-[11px] text-stone-600 font-semibold px-3.5">
                    <span>Hasil Pencarian: {matchingSuggestions.length} produk</span>
                    <span className="text-[10px] text-kunyit-800 font-normal">Tekan Enter untuk melihat di katalog</span>
                  </div>

                  {matchingSuggestions.length === 0 ? (
                    <div className="p-5 text-center text-xs text-stone-500">
                      Tidak ada produk yang cocok dengan &quot;<strong>{searchInput}</strong>&quot;.
                      <br />
                      <span className="text-[11px] text-stone-400 mt-1 inline-block">
                        Coba cari: <em>singkong, sambal, sirup, stick, talas</em>
                      </span>
                    </div>
                  ) : (
                    <div className="max-h-72 overflow-y-auto divide-y divide-stone-100">
                      {matchingSuggestions.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/produk/${prod.id}`}
                          onClick={() => setIsSearchFocused(false)}
                          className="flex items-center gap-3 p-3 hover:bg-kunyit-50/80 transition group text-left"
                        >
                          <div className="w-11 h-11 rounded-lg bg-stone-100 border border-kunyit-200 overflow-hidden shrink-0 relative">
                            <Image
                              src={prod.image}
                              alt={prod.name}
                              fill
                              className="object-cover group-hover:scale-105 transition"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-stone-900 truncate group-hover:text-kunyit-800 transition">
                              {prod.name}
                            </h4>
                            <div className="flex items-center gap-2 text-[10px] text-stone-500 mt-0.5">
                              <span className="bg-kunyit-100 text-kunyit-900 px-1.5 py-0.2 rounded font-semibold text-[9px] uppercase tracking-wide">
                                {prod.categoryLabel}
                              </span>
                              <span>{prod.netto}</span>
                              <span className="text-emerald-700 font-semibold">• Stok: {prod.stock}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-extrabold text-kunyit-800">
                              Rp {prod.price.toLocaleString("id-ID")}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="p-2 bg-stone-50 border-t border-stone-100 text-center">
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSearchSubmit(e);
                      }}
                      className="text-xs font-bold text-kunyit-800 hover:text-kunyit-950 transition"
                    >
                      Lihat semua hasil di katalog produk ↓
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Categories Pill Navigation: Semua Snack, Keripik, Syrup, Stick Bawang, Sambal */}
          <div className="py-2 border-t border-stone-100 flex items-center justify-between text-xs overflow-x-auto no-scrollbar gap-4 text-stone-600">
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <span className="font-bold text-kunyit-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-kunyit-600" /> Kategori:
              </span>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleCategoryClick(c.id)}
                  className={`px-3.5 py-1.5 rounded-full transition text-xs font-semibold ${
                    selectedCategory === c.id
                      ? "bg-kunyit-500 text-kunyit-950 font-bold shadow-xs"
                      : "hover:bg-kunyit-100 text-stone-700 bg-stone-50"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-2 text-stone-500 text-[11px] shrink-0">
              <MapPin className="w-3.5 h-3.5 text-kunyit-600" /> Dikirim dari:{" "}
              <strong>Bandar Lampung & Jawa</strong>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
