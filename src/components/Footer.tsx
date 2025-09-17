import Link from 'next/link';
import { Twitter, Linkedin, Rss } from 'lucide-react'; // Ganti dengan ikon sosial media Anda

const Footer = () => {
  return (
    <footer className="bg-background-end border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-heading mb-4">
              <Link href="/">Crypto Exist</Link>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Your gateway to the crypto universe. Exploring the future of digital assets.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h4 className="font-bold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/articles" className="text-gray-400 hover:text-accent transition-colors">Articles</Link></li>
              <li><Link href="/analysis" className="text-gray-400 hover:text-accent transition-colors">Analysis</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-accent transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Company */}
          <div>
            <h4 className="font-bold font-heading mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Social Media */}
          <div>
            <h4 className="font-bold font-heading mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-accent hover:scale-110 transition-all">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent hover:scale-110 transition-all">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent hover:scale-110 transition-all">
                <Rss size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Garis Pemisah & Hak Cipta */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Crypto Exist. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;