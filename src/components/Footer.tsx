import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PRODUCTS } from "@/data/products";

const WA_NUMBER = "6289616700568";
const WA_DISPLAY = "+62 896-1670-0568";
const TIKTOK_URL = "https://www.tiktok.com/@tempo_doeloe_snack";
const EMAIL = "tempo.doeloe.lampung@gmail.com";

const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const orderLinks = [
  { label: "Paket Oleh-oleh Kantor", text: "Halo Tempo Doeloe, saya tertarik dengan paket oleh-oleh kantor." },
  { label: "Peluang Keagenan / Grosir", text: "Halo Tempo Doeloe, saya ingin tanya soal keagenan / pembelian grosir." },
  { label: "Ketentuan Pengiriman Paket", text: "Halo Tempo Doeloe, saya ingin tanya ketentuan pengiriman paket." },
  { label: "Konfirmasi Pembayaran", text: "Halo Tempo Doeloe, saya ingin konfirmasi pembayaran pesanan saya." },
  { label: "Tanya Jawab (FAQ)", text: "Halo Tempo Doeloe, saya ada pertanyaan seputar produk dan pemesanan." },
];

const linkClass = "text-sm text-stone-300 hover:text-kunyit-400 transition";
const headingClass = "font-serif font-bold text-white text-base mb-4";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2h-3.4v13.4a2.9 2.9 0 1 1-2-2.8V9.6a6.3 6.3 0 1 0 5.4 6.3V9.2a8.2 8.2 0 0 0 4.8 1.5V7.3a4.8 4.8 0 0 1-1-.6z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#211915] text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="w-11 h-11 rounded-lg bg-kunyit-100 border-2 border-kunyit-400 p-1 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo Tempo Doeloe"
                  width={40}
                  height={40}
                  className="logo-blend max-h-full max-w-full object-contain"
                />
              </span>
              <span className="font-serif font-bold text-xl text-white">Tempo Doeloe</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Menyajikan aneka camilan gurih, sambal uleg tradisional, dan minuman olahan resep tempo
              dulu dengan standar mutu modern.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={waLink("Halo Tempo Doeloe!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white flex items-center justify-center transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @tempo_doeloe_snack"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className={headingClass}>Pilihan Camilan</h3>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link href={`/produk/${p.id}`} className={linkClass}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ordering & reseller */}
          <div>
            <h3 className={headingClass}>Pemesanan &amp; Reseller</h3>
            <ul className="space-y-2.5">
              {orderLinks.map((l) => (
                <li key={l.label}>
                  <a href={waLink(l.text)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={headingClass}>Dapur Produksi</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-kunyit-500 shrink-0" />
                <span>Bandar Lampung, Lampung</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-kunyit-500 shrink-0" />
                <a href={waLink("Halo Tempo Doeloe!")} target="_blank" rel="noopener noreferrer" className="hover:text-kunyit-400 transition">
                  {WA_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-kunyit-500 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-kunyit-400 transition">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <span className="inline-block mt-4 text-xs text-kunyit-500 border border-kunyit-500/40 bg-kunyit-500/10 rounded-md px-2.5 py-1">
              Dibuat Segar Tiap Hari Kerja
            </span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-stone-400">
          © {new Date().getFullYear()} Tempo Doeloe Snack. Hak Cipta Dilindungi Undang-Undang.
        </div>
      </div>
    </footer>
  );
}
