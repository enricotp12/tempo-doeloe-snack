"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, X, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  onClose,
}: QuickViewModalProps) {
  if (!product) return null;

  const waUrl = `https://wa.me/6289616700568?text=${encodeURIComponent(
    `Pagi, Kak! Salam kenal dari Tempo Doeloe 👋 Lagi cari-cari produk apa nih? Yuk, kasih tahu biar kami bantu pilihkan!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-kunyit-300 w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 bg-kunyit-100 flex items-center justify-between border-b border-kunyit-200">
          <span className="text-xs font-bold text-kunyit-900 uppercase tracking-wider flex items-center gap-1.5">
            <Info className="w-4 h-4 text-kunyit-700" /> Detail Informasi Produk
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-kunyit-200 rounded-md transition"
          >
            <X className="w-5 h-5 text-stone-700" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative rounded-xl overflow-hidden border border-kunyit-200 bg-stone-50 aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-kunyit-100 text-kunyit-900 px-2 py-0.5 rounded font-mono font-bold">
                  {product.pirt}
                </span>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  Stok: {product.stock} pcs
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mt-1.5 leading-snug">
                {product.name}
              </h3>
              <p className="text-xl font-extrabold text-kunyit-700 mt-1">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-3 p-2.5 bg-stone-50 rounded-lg border border-stone-200">
                <p className="text-[10px] font-bold text-stone-500 uppercase">Komposisi Alami:</p>
                <p className="text-[11px] text-stone-700 mt-0.5">{product.komposisi}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2 group/wa"
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

              <Link
                href={`/produk/${product.id}`}
                onClick={onClose}
                className="w-full py-2 bg-stone-100 hover:bg-kunyit-100 hover:text-kunyit-900 text-stone-700 font-semibold text-xs rounded-xl border border-stone-200 transition flex items-center justify-center gap-1.5"
              >
                <span>Buka Halaman Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
