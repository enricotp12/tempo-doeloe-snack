import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tempo Doeloe Snack - Cita Rasa Otentik Nusantara",
  description: "Camilan tradisional khas Nusantara berkualitas premium: Singkong Balado, Sambal Bajak 1986, dan Sirup Jeruk Kunci.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Tempo Doeloe Snack - Cita Rasa Otentik Nusantara",
    description: "Camilan tradisional khas Nusantara berkualitas premium.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col antialiased selection:bg-kunyit-300 selection:text-kunyit-900">
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
