"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Star,
  ShieldCheck,
  Truck,
  MessageCircle,
  Plus,
  Minus,
  ShoppingBag,
  Clock,
  Sparkles,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = product?.images && product.images.length > 0
    ? product.images
    : product ? [product.image] : [];
  const activeImage = selectedImage || (product ? product.image : "");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  if (!product) {
    notFound();
  }

  const totalPrice = product.price * quantity;

  // WhatsApp Order message with dynamic quantity and total
  const waMessage = encodeURIComponent(
    `Pagi, Kak! Salam kenal dari Tempo Doeloe 👋 Lagi cari-cari produk apa nih? Yuk, kasih tahu biar kami bantu pilihkan!\n\n` +
      `Saya mau pesan:\n` +
      `*Produk:* ${product.name} (${product.netto})\n` +
      `*Jumlah:* ${quantity} pcs\n` +
      `*Total Harga:* Rp ${totalPrice.toLocaleString("id-ID")}`
  );
  const waUrl = `https://wa.me/6289616700568?text=${waMessage}`;

  // Other related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col">
      {/* Top Simple Header */}
      <header className="sticky top-0 z-40 bg-white/95 border-b border-kunyit-200/80 shadow-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-kunyit-100 p-1 border border-kunyit-300 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Tempo Doeloe"
                width={36}
                height={36}
                className="logo-blend object-contain"
              />
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full">
        {/* Tombol Kembali ke Katalog (di bawah header Tempo Doeloe Snack, tepat di atas card produk) */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-700 hover:text-kunyit-900 bg-white hover:bg-kunyit-50 border border-kunyit-300 px-3.5 py-2 rounded-xl shadow-xs transition group"
          >
            <ArrowLeft className="w-4 h-4 text-kunyit-700 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Katalog</span>
          </Link>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-stone-500">
            <Link href="/" className="hover:text-kunyit-700 transition">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-kunyit-800 font-semibold">{product.categoryLabel}</span>
            <span>/</span>
            <span className="text-stone-800 font-bold truncate max-w-xs">{product.name}</span>
          </nav>
        </div>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 border border-kunyit-200 shadow-sm">
          
          {/* Left: Product Image & Gallery */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {/* Main Active Image Display */}
            <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-kunyit-300 bg-stone-50 shadow-inner group">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition duration-300"
                key={activeImage}
              />
              {product.discountBadge && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-extrabold px-2.5 py-1 rounded-md shadow-xs">
                  {product.discountBadge}
                </div>
              )}
            </div>

            {/* Gallery Thumbnails (Clickable) */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-2.5 pt-0.5">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      activeImage === img
                        ? "border-kunyit-600 ring-2 ring-kunyit-400 shadow-md scale-105"
                        : "border-stone-200 hover:border-kunyit-400 opacity-70 hover:opacity-100"
                    }`}
                    title={`Pilih foto ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - Foto ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality badges underneath */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-1">
              <div className="p-2 bg-kunyit-50 border border-kunyit-200 rounded-xl">
                <ShieldCheck className="w-4 h-4 mx-auto text-kunyit-700 mb-0.5" />
                <span className="font-bold text-stone-800">100% Halal</span>
              </div>
              <div className="p-2 bg-kunyit-50 border border-kunyit-200 rounded-xl">
                <Sparkles className="w-4 h-4 mx-auto text-kunyit-700 mb-0.5" />
                <span className="font-bold text-stone-800">Tanpa Pengawet</span>
              </div>
              <div className="p-2 bg-kunyit-50 border border-kunyit-200 rounded-xl">
                <Truck className="w-4 h-4 mx-auto text-kunyit-700 mb-0.5" />
                <span className="font-bold text-stone-800">Kirim Seluruh RI</span>
              </div>
            </div>
          </div>

          {/* Right: Product Details & WhatsApp Ordering */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & P-IRT */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-kunyit-100 text-kunyit-900 border border-kunyit-300">
                  {product.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200">
                  {product.pirt}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 leading-tight">
                {product.name}
              </h1>

              {/* Rating & Sold */}
              <div className="flex items-center gap-3 mt-3 text-sm">
                <div className="flex items-center text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500 mr-1" />
                  {product.rating}
                </div>
                <span className="text-stone-300">|</span>
                <span className="text-stone-600 text-xs font-medium">Terjual {product.soldCount}</span>
              </div>

              {/* Price Box */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-kunyit-50 to-amber-50/40 border border-kunyit-200 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-kunyit-800">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                <span className="text-sm text-stone-400 line-through">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                  Hemat Rp {(product.originalPrice - product.price).toLocaleString("id-ID")}
                </span>
              </div>

              {/* Description */}
              <div className="mt-5 space-y-3">
                <h3 className="font-bold text-sm text-stone-900 uppercase tracking-wide">
                  Deskripsi Produk
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Details table */}
              <div className="mt-4 bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Berat Bersih / Netto:</span>
                  <span className="font-bold text-stone-800">{product.netto}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Masa Simpan:</span>
                  <span className="font-bold text-stone-800">{product.shelfLife}</span>
                </div>
                <div className="flex justify-between border-t border-stone-200 pt-2">
                  <span className="text-stone-500">Komposisi Rempah:</span>
                  <span className="font-medium text-stone-800 text-right max-w-xs">
                    {product.komposisi}
                  </span>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Order Buttons */}
            <div className="pt-4 border-t border-stone-100 space-y-4">
              
              {/* Quantity */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700">Jumlah Pesanan:</span>
                <div className="flex items-center border border-kunyit-300 rounded-xl bg-white overflow-hidden shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-kunyit-100 text-stone-700 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-bold text-sm min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-kunyit-100 text-stone-700 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons: WHATSAPP BUTTON (Requested) */}
              <div className="space-y-2.5">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 text-center group/wa"
                >
                  <Image
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain group-hover/wa:scale-110 transition-transform shrink-0"
                  />
                  <span>Pesan Sekarang via WhatsApp (Rp {totalPrice.toLocaleString("id-ID")})</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Related Products Section */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Camilan Tempo Doeloe Lainnya
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Pilihan snack tradisional Nusantara yang tak kalah menggoda
              </p>
            </div>
            <Link
              href="/"
              className="text-xs font-bold text-kunyit-700 hover:text-kunyit-900 underline"
            >
              Lihat Semua
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                className="bg-white rounded-2xl border border-kunyit-200 overflow-hidden p-3.5 hover:border-kunyit-400 transition shadow-xs flex flex-col justify-between"
              >
                <Link href={`/produk/${rp.id}`} className="block">
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-stone-100 mb-3">
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      fill
                      className="object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-kunyit-700">
                    {rp.categoryLabel}
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm line-clamp-1 mt-0.5">
                    {rp.name}
                  </h4>
                  <p className="font-bold text-kunyit-800 text-sm mt-1">
                    Rp {rp.price.toLocaleString("id-ID")}
                  </p>
                </Link>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center gap-2">
                  <a
                    href={`https://wa.me/6289616700568?text=${encodeURIComponent(
                      `Halo Tempo Doeloe Snack, saya mau pesan ${rp.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-lg text-center flex items-center justify-center gap-1.5 group/wa"
                  >
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp"
                      width={16}
                      height={16}
                      className="w-3.5 h-3.5 object-contain group-hover/wa:scale-110 transition-transform shrink-0"
                    />
                    <span>WhatsApp</span>
                  </a>
                  <Link
                    href={`/produk/${rp.id}`}
                    className="py-1.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-[11px] rounded-lg text-center"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-5 z-50 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-xl border-l-4 border-kunyit-500 text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-kunyit-400 shrink-0" />
          <div className="font-medium">{toastMessage}</div>
        </div>
      )}
    </div>
  );
}
