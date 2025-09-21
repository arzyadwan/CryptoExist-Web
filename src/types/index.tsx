export interface StrapiImageFormat {
  url: string;
}

export interface StrapiImage {
  id: number;
  name: string;
  url: string;
  formats: {
    thumbnail: StrapiImageFormat;
    small?: StrapiImageFormat;
  };
}

export interface StrapiCategory {
  id: number;
  name: string;
  slug: string;
}

// TIPE UTAMA YANG DIPERBAIKI
export interface StrapiArticle {
  id: number;
  // Semua field berada di level atas, BUKAN di dalam 'attributes'
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover_image: StrapiImage; 
  categories: StrapiCategory[];  
}

export interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}