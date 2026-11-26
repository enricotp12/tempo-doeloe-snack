"use client";

import React, { useState } from "react";
import { Mail, X, AtSign, Send } from "lucide-react";

interface EmailContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function EmailContactModal({
  isOpen,
  onClose,
  onShowToast,
}: EmailContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Tanya Produk & Stok");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    onShowToast("Pesan Anda telah berhasil terkirim ke customer care Tempo Doeloe! Kami akan segera merespons.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-kunyit-300 w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-stone-900 p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-kunyit-500 text-kunyit-950 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">Hubungi Tempo Doeloe</h3>
              <p className="text-[11px] text-stone-300">Kritik, saran, pesanan partai besar & kerjasama</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-stone-800 rounded-lg transition"
          >
            <X className="w-5 h-5 text-stone-400" />
          </button>
        </div>

        {/* Quick Email link */}
        <div className="bg-kunyit-50 p-4 border-b border-kunyit-200 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2 text-kunyit-900 font-medium">
            <AtSign className="w-4 h-4 text-kunyit-600" />
            <span>tempo.doeloe.lampung@gmail.com</span>
          </div>
          <a
            href="mailto:tempo.doeloe.lampung@gmail.com"
            className="text-kunyit-800 font-bold underline hover:text-kunyit-950"
          >
            Buka App Email
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Nama Lengkap:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kunyit-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Alamat Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@contoh.com"
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kunyit-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Subjek Pesan:</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kunyit-500 text-stone-700"
            >
              <option>Tanya Produk & Stok</option>
              <option>Pemesanan Grosir / Acara Pernikahan</option>
              <option>Kendala Pengiriman</option>
              <option>Kerjasama Reseller</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Pesan Anda:</label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan pesan atau pertanyaan Anda..."
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kunyit-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-kunyit-500 hover:bg-kunyit-600 text-kunyit-950 font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Kirim Pesan Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
