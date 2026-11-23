"use client";

import React, { useState } from "react";
import { Truck, X } from "lucide-react";

interface OrderStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function OrderStatusModal({
  isOpen,
  onClose,
  onShowToast,
}: OrderStatusModalProps) {
  const [resi, setResi] = useState("TD-882910");

  if (!isOpen) return null;

  const handleLacak = () => {
    if (!resi.trim()) {
      onShowToast("Silakan masukkan nomor resi atau ID pesanan terlebih dahulu!");
      return;
    }
    onShowToast(`Melacak resi ${resi}... Status paket terverifikasi.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-kunyit-300 w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="turmeric-gradient p-5 flex items-center justify-between text-kunyit-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/30 rounded-lg backdrop-blur-xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">Cek Status Order</h3>
              <p className="text-[11px] text-kunyit-900 font-medium">
                Lacak perjalanan paket camilan Tempo Doeloe Anda
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

        {/* Body */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              Nomor Resi / ID Pesanan:
            </label>
            <div className="relative">
              <input
                type="text"
                value={resi}
                onChange={(e) => setResi(e.target.value)}
                placeholder="Contoh: TD-882910 atau TD-DEMO"
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-kunyit-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-kunyit-500 font-mono"
              />
              <button
                type="button"
                onClick={handleLacak}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-kunyit-500 hover:bg-kunyit-600 text-kunyit-950 font-bold text-xs rounded-lg transition"
              >
                Lacak
              </button>
            </div>
            <p className="text-[11px] text-stone-400 mt-1">
              Coba nomor resi demo:{" "}
              <button
                type="button"
                onClick={() => {
                  setResi("TD-882910");
                  handleLacak();
                }}
                className="text-kunyit-700 font-mono underline"
              >
                TD-882910
              </button>
            </p>
          </div>

          {/* Tracking Result */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <div>
                <p className="text-[10px] text-stone-400 font-bold uppercase">Status Pengiriman</p>
                <p className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Paket Sedang Dikirim Kurir
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-stone-400">Ekspedisi</p>
                <p className="text-xs font-bold text-stone-800">J&T Express (Reguler)</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2.5 text-xs">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                  <div className="w-0.5 h-6 bg-emerald-300 my-0.5" />
                </div>
                <div>
                  <p className="font-bold text-stone-800">Menuju Alamat Penerima</p>
                  <p className="text-[10px] text-stone-500">Hari ini, 14:20 WIB - Dibawa kurir pengantar</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                  <div className="w-0.5 h-6 bg-stone-200 my-0.5" />
                </div>
                <div>
                  <p className="font-bold text-stone-700">Tiba di Sorting Hub Jakarta</p>
                  <p className="text-[10px] text-stone-400">Kemarin, 21:05 WIB</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                </div>
                <div>
                  <p className="font-bold text-stone-700">Paket Dibuat & Diserahkan Toko</p>
                  <p className="text-[10px] text-stone-400">Dapur Tempo Doeloe Snack, Lampung</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
