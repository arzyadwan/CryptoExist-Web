import type { Metadata } from 'next';
import HomePageClient from './HomePageClient'; // 1. Impor komponen client

// 2. Sekarang Anda BISA mengekspor metadata di sini
export const metadata: Metadata = {
  title: 'Home', // Hasilnya akan menjadi "Home | Crypto Exist"
  description: 'The main page for Crypto Exist, your number one source for crypto news and analysis.',
};

export default function Home() {
  // 3. Render komponen client
  return <HomePageClient />;
}