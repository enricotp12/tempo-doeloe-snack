"use client";

import React, { useState } from "react";
import { Store, X, BadgePercent, Boxes, Megaphone, LogIn } from "lucide-react";

interface SellerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function SellerModal({
  isOpen,
  onClose,
  onShowToast,
}: SellerModalProps) {
  const [email, setEmail] = useState("mitra.bandung@tempodoeloe.id");
  const [password, setPassword] = useState("••••••••••••");

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    onShowToast("Selamat datang kembali, Mitra Tempo Doeloe! Mengarahkan ke Dashboard Seller...");
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-kunyit-300 w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="turmeric-gradient p-5 flex items-center justify-between text-kunyit-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-kunyit-950 text-kunyit-300 rounded-lg">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">Portal Seller & Mitra UMKM</h3>
              <p className="text-[11px] text-kunyit-900 font-semibold">
                Tempo Doeloe Merchant Center
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-white/30 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 bg-kunyit-50 border border-kunyit-200 rounded-xl">
              <BadgePercent className="w-5 h-5 mx-auto text-kunyit-700 mb-1" />
              <p className="text-[11px] font-bold text-stone-800">Margin s/d 35%</p>
              <p className="text-[10px] text-stone-500">Keuntungan tinggi</p>
            </div>
            <div className="p-3 bg-kunyit-50 border border-kunyit-200 rounded-xl">
              <Boxes className="w-5 h-5 mx-auto text-kunyit-700 mb-1" />
              <p className="text-[11px] font-bold text-stone-800">Stok Ready</p>
              <p className="text-[10px] text-stone-500">Kirim dari dapur</p>
            </div>
            <div className="p-3 bg-kunyit-50 border border-kunyit-200 rounded-xl">
              <Megaphone className="w-5 h-5 mx-auto text-kunyit-700 mb-1" />
              <p className="text-[11px] font-bold text-stone-800">Foto & Video</p>
              <p className="text-[10px] text-stone-500">Materi promosi siap</p>
            </div>
          </div>

          {/* Form */}
          <div className="border-t border-stone-200 pt-4">
            <div className="flex gap-2 border-b border-stone-200 pb-2 mb-3 text-xs">
              <button className="font-bold text-kunyit-800 border-b-2 border-kunyit-600 pb-1 px-1">
                Masuk Seller
              </button>
              <button
                type="button"
                onClick={() => onShowToast("Pendaftaran mitra baru: Silakan hubungi CS via Email / WhatsApp!")}
                className="text-stone-400 hover:text-stone-700 pb-1 px-1"
              >
                Daftar Mitra Baru
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Email / ID Mitra Toko:
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kunyit-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Kata Sandi:</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kunyit-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-stone-900 hover:bg-kunyit-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4 text-kunyit-400" />
                Masuk Dashboard Seller
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
