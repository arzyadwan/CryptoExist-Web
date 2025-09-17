'use client';

import { useState, useEffect } from 'react';
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection"; 
import StatisticsSection from "@/components/StatisticsSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import NewsletterModal from '@/components/NewsletterModal';

export default function HomePageClient({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const modalShown = localStorage.getItem('newsletterModalShown');
      if (!modalShown) {
        setIsModalOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('newsletterModalShown', 'true');
  };

  return (
    <>
      <NewsletterModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <HeroSection />
      <FeaturesSection />
      
      {children}

      <StatisticsSection />
      <NewsletterSignup />
    </>
  );
}