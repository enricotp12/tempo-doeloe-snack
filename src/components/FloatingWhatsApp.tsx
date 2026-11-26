import Image from "next/image";

const waUrl = `https://wa.me/6289616700568?text=${encodeURIComponent(
  "Pagi, Kak! Salam kenal dari Tempo Doeloe 👋 Lagi cari-cari produk apa nih? Yuk, kasih tahu biar kami bantu pilihkan!"
)}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order langsung, chat WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white pl-4 pr-5 py-2.5 shadow-xl transition"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
      <Image src="/images/whatsapp.png" alt="" width={28} height={28} className="w-7 h-7 object-contain" />
      <span className="hidden sm:flex flex-col leading-tight text-left">
        <span className="text-[10px] font-medium opacity-90">Order Langsung</span>
        <span className="text-sm font-bold">Chat WhatsApp</span>
      </span>
    </a>
  );
}
