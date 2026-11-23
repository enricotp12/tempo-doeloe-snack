"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Eye, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({
  product,
  onQuickView,
}: ProductCardProps) {
  // Generate WhatsApp order URL
  const waMessage = encodeURIComponent(
    `Pagi, Kak! Salam kenal dari Tempo Doeloe 👋 Lagi cari-cari produk apa nih? Yuk, kasih tahu biar kami bantu pilihkan!`
  );
  const waUrl = `https://wa.me/6289616700568?text=${waMessage}`;

  return (
    <div className="product-card bg-white rounded-2xl border border-kunyit-200 hover:border-kunyit-400 overflow-hidden flex flex-col justify-between group shadow-xs">
      <div>
        {/* Clickable Image Container to Product Detail Page */}
        <div className="relative bg-stone-100 overflow-hidden aspect-square">
          <Link href={`/produk/${product.id}`} className="block w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.discountBadge && (
              <span className="bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs uppercase tracking-wide">
                {product.discountBadge}
              </span>
            )}
            {product.badge && (
              <span className="bg-kunyit-500 text-kunyit-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                {product.badge}
              </span>
            )}
          </div>

          {/* Quick View Button */}
          <button
            type="button"
            onClick={() => onQuickView(product)}
            title="Lihat Info Cepat"
            className="absolute bottom-2.5 right-2.5 p-2 bg-white/90 hover:bg-kunyit-500 hover:text-white rounded-full text-stone-700 shadow-md backdrop-blur-sm transition z-10"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Product Details with Link */}
        <div className="p-4">
          <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1.5">
            <span className="text-kunyit-700 font-semibold uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <span className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-stone-600 font-medium">
              {product.netto}
            </span>
          </div>

          <Link href={`/produk/${product.id}`} className="block group-hover:text-kunyit-700 transition">
            <h3 className="font-bold text-stone-900 text-base leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mt-2 text-xs">
            <div className="flex items-center text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1" />
              {product.rating}
            </div>
            <span className="text-stone-300">|</span>
            <span className="text-stone-500 text-[11px]">Terjual {product.soldCount}</span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-bold text-lg text-kunyit-800">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
            <span className="text-xs text-stone-400 line-through">
              Rp {product.originalPrice.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons: WhatsApp Button + Lihat Detail (Keranjang removed) */}
      <div className="p-4 pt-0 space-y-2">
        {/* WhatsApp Direct Order Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-xs group/wa"
        >
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            width={18}
            height={18}
            className="w-4 h-4 object-contain group-hover/wa:scale-110 transition-transform shrink-0"
          />
          <span>Pesan via WhatsApp</span>
        </a>

        {/* Click to Next Page Detail */}
        <Link
          href={`/produk/${product.id}`}
          className="w-full py-2 px-3 bg-stone-100 hover:bg-kunyit-100 hover:text-kunyit-900 text-stone-700 font-semibold text-xs rounded-xl transition text-center flex items-center justify-center gap-1.5 border border-stone-200"
        >
          <span>Lihat Detail Lengkap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
