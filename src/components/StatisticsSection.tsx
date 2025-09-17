'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, FileText, Mic, Globe } from 'lucide-react';

// Tipe untuk properti StatCounter
type StatCounterProps = {
  to: number;
  suffix: string;
  text: string;
  icon: React.ElementType;
};

// Komponen untuk satu item statistik
function StatCounter({ to, suffix, text, icon: Icon }: StatCounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      // Animasikan dari 0 ke nilai 'to'
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          // Perbarui teks pada setiap frame animasi
          node.textContent = Math.round(value).toLocaleString();
        }
      });
      // Hentikan animasi saat komponen di-unmount
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <div className="text-center">
      <Icon className="h-12 w-12 mx-auto text-accent mb-4" />
      <div className="flex justify-center items-end">
        <p ref={nodeRef} className="text-4xl sm:text-5xl font-bold font-heading">0</p>
        <span className="text-4xl sm:text-5xl font-bold font-heading text-accent">{suffix}</span>
      </div>
      <p className="text-gray-400 mt-2">{text}</p>
    </div>
  );
}

// Data statistik
const statsData = [
  { to: 10, suffix: 'K+', text: 'Active Readers', icon: Users },
  { to: 500, suffix: '+', text: 'Articles Published', icon: FileText },
  { to: 50, suffix: '+', text: 'Expert Contributors', icon: Mic },
  { to: 24, suffix: '/7', text: 'Market Coverage', icon: Globe },
];

// Komponen utama StatisticsSection
export default function StatisticsSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle, rgba(0, 255, 136, 0.3) 1px, transparent 1px)`, backgroundSize: '2.5rem 2.5rem' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-end to-transparent z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
          {statsData.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}