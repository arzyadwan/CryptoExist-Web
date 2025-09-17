'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { User, Calendar, Clock } from 'lucide-react';

// Definisikan tipe untuk prop artikel
type Article = {
  slug: string;
  imageSrc: string;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: number;
  excerpt: string | React.ReactNode;
};

// Varian animasi untuk kartu saat di-scroll
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="bg-neutral-dark rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-white/10"
    >
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="relative w-full h-52">
          <Image
            src={article.imageSrc}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <span className="absolute top-4 left-4 bg-accent text-neutral-dark text-xs font-bold py-1 px-3 rounded-full">
            {article.category}
          </span>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold mb-3 hover:text-accent transition-colors">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {article.excerpt}
        </p>
        <div className="border-t border-white/10 pt-4 mt-auto text-xs text-gray-500 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;