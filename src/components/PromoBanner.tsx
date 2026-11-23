"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  Percent,
  Tag,
  ShoppingCart,
  Copy,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Leaf,
  Award,
  PackageCheck,
  Handshake,
} from "lucide-react";

interface PromoBannerProps {
  onClaimCoupon: (code: string) => void;
}

export default function PromoBanner({ onClaimCoupon }: PromoBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      badge: "PROMO SPESIAL KUNYIT EMAS NUSANTARA",
      titlePrefix: "Nostalgia Rasa Gurih",
      titleHighlight: "Tempo Doeloe",
      titleSuffix: "Asli!",
      desc: "Nikmati kelezatan singkong balado renyah dan pedas mantap sambal bajak resep 1986. Diolah dengan bumbu rempah asli tanpa bahan pengawet.",
      discount: "Diskon s/d 30% Hari Ini",
      coupon: "DOELOEHEMAT",
      mainImage: "/images/singkong-balado.jpg",
      subImage1: "/images/sambal-bajak.jpg",
      subLabel1: "Sambal Bajak 1986",
      subImage2: "/images/keripik-talas.jpg",
      subLabel2: "Talas Balado",
      badgeHighlight: "HEMAT",
      badgeValue: "30%",
      badgeText: "HEMAT 30%",
    },
    {
      id: 2,
      badge: "SEGAR ALAMI PETIKAN BUAH PILIHAN",
      titlePrefix: "Segarkan Harimu Dengan",
      titleHighlight: "Sirup Jeruk Kunci",
      titleSuffix: "& Nipis Murni!",
      desc: "Sari buah jeruk kunci dan jeruk nipis asli perasan pertama kaya Vitamin C alami. Sangat cocok disajikan dingin bersama es batu di kala santai.",
      discount: "Beli 2 Lebih Hemat 20%",
      coupon: "SEGARALAMI",
      mainImage: "/images/sirup-jeruk-kunci.jpg",
      subImage1: "/images/sirup-jeruk-nipis.jpg",
      subLabel1: "Sirup Jeruk Nipis",
      subImage2: "/images/singkong-balado.jpg",
      subLabel2: "Teman Camilan",
      badgeHighlight: "VIT-C",
      badgeValue: "100%",
      badgeText: "VIT-C 100%",
    },
    {
      id: 3,
      badge: "GURIH HOMEMADE PALING FAVORIT",
      titlePrefix: "Camilan Renyah Gurih",
      titleHighlight: "Stick Bawang",
      titleSuffix: "Warisan Nenek!",
      desc: "Aroma sedap bawang merah dan seledri pilihan berpadu dalam tekstur renyah garing. Camilan wajib saat kumpul keluarga dan teman santai ngopi.",
      discount: "Harga Spesial Rp 22.000",
      coupon: "BAWANGGURIH",
      mainImage: "/images/stick-bawang.jpg",
      subImage1: "/images/keripik-talas.jpg",
      subLabel1: "Talas Balado",
      subImage2: "/images/sambal-bajak.jpg",
      subLabel2: "Cocol Sambal",
      badgeHighlight: "GURIH",
      badgeValue: "FAVORIT",
      badgeText: "FAVORIT",
    },
  ];

  // Auto sliding every 5 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-8 w-full">
      {/* Slider Box */}
      <div
        className="relative overflow-hidden rounded-2xl banner-gradient border-2 border-kunyit-300 shadow-md transition-all"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effects */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-kunyit-300/40 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-1/4 -top-8 w-48 h-48 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />

        {/* Slide Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 lg:p-10 min-h-[420px]">
          
          {/* Left Banner Copy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-kunyit-300 shadow-sm text-kunyit-900 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{active.badge}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kunyit-950 tracking-tight leading-tight">
              {active.titlePrefix} <br />
              <span className="text-kunyit-700 underline decoration-kunyit-400 decoration-wavy decoration-2">
                {active.titleHighlight}
              </span>{" "}
              {active.titleSuffix}
            </h1>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-xl">
              {active.desc}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-kunyit-300 text-xs font-semibold text-kunyit-900 shadow-xs">
                <Percent className="w-4 h-4 text-kunyit-600" />
                {active.discount}
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-kunyit-300 text-xs font-semibold text-kunyit-900 shadow-xs">
                <Tag className="w-4 h-4 text-kunyit-600" />
                Kode Kupon: <strong className="text-kunyit-800 font-mono">{active.coupon}</strong>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#katalog-produk"
                className="px-6 py-3 rounded-xl bg-kunyit-600 hover:bg-kunyit-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Belanja Sekarang
              </a>
              <button
                type="button"
                onClick={() => onClaimCoupon(active.coupon)}
                className="px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-kunyit-900 font-bold text-sm border-2 border-kunyit-400 transition flex items-center gap-2 shadow-xs"
              >
                <Copy className="w-4 h-4 text-kunyit-600" />
                Klaim Kupon Diskon
              </button>
            </div>
          </div>

          {/* Right Product Showcase Stack */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md flex items-center justify-center">
              
              {/* Circular central image */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-kunyit-400 to-yellow-200 border-4 border-white shadow-xl flex items-center justify-center p-2 relative overflow-hidden">
                <Image
                  src={active.mainImage}
                  alt={active.titleHighlight}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500"
                  key={active.mainImage}
                />
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -left-2 top-4 sm:-left-4 sm:top-2 bg-white/95 backdrop-blur-md p-2 rounded-xl border border-kunyit-300 shadow-lg flex items-center gap-2.5 max-w-[190px]">
                <Image
                  src={active.subImage1}
                  alt={active.subLabel1}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-cover border border-kunyit-200"
                />
                <div className="text-[11px] leading-tight">
                  <p className="font-bold text-stone-900">{active.subLabel1}</p>
                  <p className="text-kunyit-700 font-semibold">Cita Rasa Otentik</p>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -right-2 bottom-3 sm:-right-4 sm:bottom-4 bg-white/95 backdrop-blur-md p-2 rounded-xl border border-kunyit-300 shadow-lg flex items-center gap-2.5 max-w-[190px]">
                <Image
                  src={active.subImage2}
                  alt={active.subLabel2}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-cover border border-kunyit-200"
                />
                <div className="text-[11px] leading-tight">
                  <p className="font-bold text-stone-900">{active.subLabel2}</p>
                  <p className="text-green-700 font-semibold">100% Pilihan</p>
                </div>
              </div>

              {/* Discount Badge / Floating Stamp */}
              <div className="absolute -top-2 right-4 sm:right-6 bg-gradient-to-br from-red-500 via-red-600 to-rose-600 text-white rounded-full w-20 h-20 sm:w-22 sm:h-22 p-1 flex flex-col items-center justify-center text-center shadow-xl border-2 border-white ring-2 ring-red-400/40 transform rotate-12 hover:rotate-3 transition-transform duration-300 z-10 select-none">
                <div className="border border-dashed border-white/60 rounded-full w-full h-full flex flex-col items-center justify-center px-1 py-1">
                  <span className="text-[9px] font-black tracking-widest uppercase text-yellow-300 leading-none mb-1">
                    PROMO
                  </span>
                  <span className="text-[11px] sm:text-xs font-black tracking-tight leading-none text-white drop-shadow-xs">
                    {active.badgeHighlight}
                  </span>
                  <span className="text-sm sm:text-base font-black leading-none text-yellow-200 mt-0.5 drop-shadow-xs">
                    {active.badgeValue}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center shadow-md border border-kunyit-300 transition backdrop-blur-xs"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center shadow-md border border-kunyit-300 transition backdrop-blur-xs"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination Dots (Buletan Slider Putih) */}
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-white/30 z-10">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "w-8 bg-white shadow-sm ring-1 ring-white"
                  : "w-2.5 bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4 Value proposition badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-5">
        <div className="bg-white p-3.5 rounded-xl border border-kunyit-200 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-kunyit-100 text-kunyit-700 flex items-center justify-center shrink-0">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900">Alami & Higienis</h4>
            <p className="text-[11px] text-stone-500">Bahan pilihan tanpa pengawet</p>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-kunyit-200 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-kunyit-100 text-kunyit-700 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900">Resep Otentik</h4>
            <p className="text-[11px] text-stone-500">Cita rasa asli tempo doeloe</p>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-kunyit-200 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-kunyit-100 text-kunyit-700 flex items-center justify-center shrink-0">
            <PackageCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900">Packing Rapi & Aman</h4>
            <p className="text-[11px] text-stone-500">Double bubble wrap & kardus</p>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-kunyit-200 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-kunyit-100 text-kunyit-700 flex items-center justify-center shrink-0">
            <Handshake className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900">Mitra UMKM Terpercaya</h4>
            <p className="text-[11px] text-stone-500">Dukung produk lokal Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
