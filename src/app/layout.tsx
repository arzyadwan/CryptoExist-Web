// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

// 1. Tambahkan atau perbarui objek metadata ini
export const metadata: Metadata = {
  // title.template akan menambahkan "| Crypto Exist" ke semua judul halaman
  title: {
    template: '%s | Crypto Exist',
    default: 'Crypto Exist - Your Gateway to the Crypto Universe',
  },
  description: "Get the latest insights, analysis, and trends from the world of cryptocurrency and blockchain technology.",
  // Metadata untuk Open Graph (Facebook, LinkedIn, dll.) dan Twitter
  openGraph: {
    title: 'Crypto Exist - Your Gateway to the Crypto Universe',
    description: 'The latest insights, analysis, and trends in crypto.',
    url: 'https://cryptoexist.com', // Ganti dengan URL domain Anda nanti
    siteName: 'Crypto Exist',
    // Ganti dengan URL gambar utama untuk social sharing
    images: [
      {
        url: 'https://cryptoexist.com/logo.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Exist - Your Gateway to the Crypto Universe',
    description: 'The latest insights, analysis, and trends in crypto.',
    // Ganti dengan URL gambar utama Anda
    images: ['https://cryptoexist.com/logo.png'], 
  },
  // Untuk SEO, Anda bisa menambahkan keywords, meskipun pengaruhnya sudah berkurang
  keywords: ['cryptocurrency', 'blockchain', 'bitcoin', 'ethereum', 'defi', 'nft', 'web3'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans flex flex-col min-h-screen`}>
        {/* 2. Bungkus semua dengan ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}