"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Clock } from "lucide-react";
import { StrapiArticle } from "@/types";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function ArticleCard({ article }: { article: StrapiArticle }) {
  const { title, slug, excerpt, cover_image, categories } = article;

  const imageUrl = cover_image?.formats?.small?.url
    ? `${STRAPI_URL}${cover_image.formats.small.url}`
    : cover_image?.url
    ? `${STRAPI_URL}${cover_image.url}`
    : "/images/placeholder.jpg";

  return (
    // Link utama sekarang membungkus seluruh motion.div
    <Link href={`/articles/${slug}`} className="block group">
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-neutral-dark rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-white/10"
      >
        <div className="relative w-full h-52">
          <Image
            src={imageUrl}
            alt={title || "Article Image"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Link kategori sekarang tidak dibungkus oleh link lain */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {categories &&
              categories.length > 0 &&
              categories.map((cat) => (
                <div
                  key={cat.id}
                  className="block bg-accent text-neutral-dark text-xs font-bold py-1 px-3 rounded-full"
                >
                  {cat.name}
                </div>
              ))}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-heading text-xl font-bold mb-3 transition-colors">
            {title}
          </h3>
          <p className="text-sm mb-4 flex-grow text-text-secondary">
            {excerpt}
          </p>
          <div className="border-t border-border-color pt-4 mt-auto text-xs text-gray-500 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>Crypto Exist Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
