"use client"; // Jadikan Client Component untuk animasi

import { motion } from "framer-motion";
import { Users, Target, Eye } from "lucide-react";

// Varian animasi untuk container dan item
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-text-primary"
          >
            About Crypto Exist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-text-secondary"
          >
            Your trusted gateway to the crypto universe.
          </motion.p>
        </header>

        <main>
          <motion.section
            className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-neutral-dark rounded-xl border border-border-color"
            >
              <Target className="h-12 w-12 mx-auto text-accent mb-4" />
              <h2 className="text-2xl font-bold font-heading mb-2">
                Our Mission
              </h2>
              <p className="text-text-secondary">
                To provide clear, accurate, and timely information about the
                cryptocurrency and blockchain space.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-neutral-dark rounded-xl border border-border-color"
            >
              <Eye className="h-12 w-12 mx-auto text-accent mb-4" />
              <h2 className="text-2xl font-bold font-heading mb-2">
                Our Vision
              </h2>
              <p className="text-text-secondary">
                To be the leading digital media resource for the next generation
                of digital asset investors.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-neutral-dark rounded-xl border border-border-color"
            >
              <Users className="h-12 w-12 mx-auto text-accent mb-4" />
              <h2 className="text-2xl font-bold font-heading mb-2">Our Team</h2>
              <p className="text-text-secondary">
                A passionate group of researchers, journalists, and
                crypto-natives.
              </p>
            </motion.div>
          </motion.section>

          <section>
            <h2 className="text-3xl font-bold font-heading text-center mb-8">
              Meet the Core Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-32 h-32 rounded-full bg-neutral-dark border-2 border-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-accent">Founder & Chief Editor</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-32 h-32 rounded-full bg-neutral-dark border-2 border-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-accent">Lead Market Analyst</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-32 h-32 rounded-full bg-neutral-dark border-2 border-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Alex Ray</h3>
                <p className="text-accent">Blockchain Researcher</p>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
