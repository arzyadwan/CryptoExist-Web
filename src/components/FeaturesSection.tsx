'use client';

import { motion, Variants } from 'framer-motion'; // <-- 1. Impor 'Variants'
import { LineChart, BookOpen, Users, ShieldCheck } from 'lucide-react';

// Data untuk setiap kartu fitur
const featuresData = [
  {
    icon: LineChart,
    title: "Real-time Analysis",
    description: "Live market insights and expert opinions to keep you ahead of the curve."
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Comprehensive guides and tutorials for everyone, from beginners to advanced users."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Engage in discussions, share knowledge, and grow with our vibrant community."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Source",
    description: "Accurate, fact-checked information from industry experts and reliable sources."
  }
];

// Varian animasi untuk container dan item
const containerVariants: Variants = { // <-- 2. Terapkan tipe 'Variants'
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = { // <-- 3. Terapkan tipe 'Variants'
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};


const FeaturesSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Why Choose Crypto Exist?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            We provide the tools and insights you need to navigate the crypto world with confidence.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-0.5 rounded-xl overflow-hidden bg-gradient-primary"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-background-end h-full p-8 rounded-[11px] text-left sm:text-center">
                <feature.icon className="h-10 w-10 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;