'use client'; // 1. Jadikan client component

import { useState, useEffect } from 'react'; // 2. Impor hooks
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection"; 
import LatestArticles from "@/components/LatestArticles";
import StatisticsSection from "@/components/StatisticsSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import NewsletterModal from '@/components/NewsletterModal'; // 3. Impor modal

export default function Home() {
  // 4. State untuk mengontrol visibilitas modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 5. Efek untuk menampilkan modal setelah 5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      // Cek local storage agar modal tidak muncul lagi jika sudah di-submit/ditutup
      const modalShown = localStorage.getItem('newsletterModalShown');
      if (!modalShown) {
        setIsModalOpen(true);
      }
    }, 5000); // 5000ms = 5 detik

    // Cleanup function untuk membersihkan timer
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Tandai di local storage bahwa modal sudah pernah ditampilkan
    localStorage.setItem('newsletterModalShown', 'true');
  };

  return (
    <>
      {/* 6. Render komponen modal */}
      <NewsletterModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <HeroSection />
      <FeaturesSection />
      <LatestArticles />
      <StatisticsSection />
      <NewsletterSignup />
    </>
  );
}