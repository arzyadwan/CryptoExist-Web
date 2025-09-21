'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground'; // <-- 1. Impor komponen partikel

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  
  return (
    <section className="relative py-28 sm:py-36 text-center overflow-hidden">
      {/* 2. Tambahkan komponen ParticleBackground di sini */}
      <ParticleBackground />
      
      {/* Gradien background sekarang berada di atas partikel tapi di bawah konten */}
      <div className="absolute inset-0 bg-gradient-background opacity-90 z-10"></div>

      {/* Konten utama sekarang harus punya z-index lebih tinggi */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ... sisa kode tidak berubah ... */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading bg-gradient-primary bg-clip-text leading-tight">
            Stay Ahead in the Crypto Revolution
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Get the latest insights, analysis, and trends from the world of cryptocurrency and blockchain technology.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 136, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-neutral-dark font-bold py-3 px-8 rounded-full transition-all text-lg w-full sm:w-auto"
            >
              Start Reading
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded-full transition-all text-lg w-full sm:w-auto"
            >
              Join Newsletter
            </motion.button>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2">
            <span>Explore:</span>
            <TypeAnimation
              sequence={[
                'Bitcoin', 1500, 'DeFi', 1500, 'NFTs', 1500, 'Web3', 1500,
              ]}
              wrapper="span"
              speed={50}
              className="text-text-primary font-medium"
              repeat={Infinity}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;