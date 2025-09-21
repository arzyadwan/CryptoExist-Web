"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from 'next/navigation'; // 1. Impor useRouter


const navItems = ["Articles", "Events", "About", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-start/80 dark:bg-background-start/80 backdrop-blur-lg shadow-lg shadow-dark/10 dark:shadow-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              className=""
            />
            <span className="text-2xl font-bold font-heading text-text-primary hidden sm:block">
              Crypto Exist
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="bg-background-end border border-border-color rounded-full py-1.5 pl-4 pr-10 text-sm focus:ring-accent focus:border-accent"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-text-secondary">
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* 4. Tombol Toggle Tema */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-text-secondary hover:bg-black/10 dark:hover:bg-white/10"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-neutral-dark font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all"
            >
              Join Community
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary"
            >
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
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
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
