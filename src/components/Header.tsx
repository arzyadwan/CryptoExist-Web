'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const navItems = ["Articles", "Analysis", "Events", "About", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-start/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
  <Image
    src="/logo.png"
    alt="Crypto Exist Logo"
    width={40} // Atur lebar sesuai kebutuhan
    height={40} // Atur tinggi sesuai kebutuhan
  />
  <span className="text-2xl font-bold font-heading">
    Crypto Exist
  </span>
</Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          {/* Aksi di Kanan */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-white/10">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10">
              <Sun className="h-5 w-5" /> {/* Ganti dengan Moon untuk dark mode */}
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-neutral-dark font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all"
            >
              Join Community
            </motion.button>
          </div>
          
          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item}
              </Link>
            ))}
            <button className="bg-accent text-neutral-dark font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all">
              Join Community
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;