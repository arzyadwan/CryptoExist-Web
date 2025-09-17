/** @type {import('next').NextConfig} */
const nextConfig = {
  // Menambahkan ini akan membuat folder 'out' saat build
  output: 'export',

  // Tambahan: jika gambar tidak muncul, Anda mungkin perlu ini
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;