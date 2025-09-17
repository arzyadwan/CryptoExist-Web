'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const NewsletterSignup = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative bg-neutral-dark border border-white/10 rounded-2xl p-8 sm:p-12 text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle background element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Never Miss a Beat
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
              Subscribe to get the latest crypto news and analysis delivered straight to your inbox.
            </p>

            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="mt-8 max-w-lg mx-auto"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Gradient Border Input */}
                <div className="relative w-full p-0.5 rounded-full bg-gradient-primary">
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-neutral-dark text-white px-6 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 136, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-neutral-dark font-bold py-3 px-8 rounded-full transition-all text-lg w-full sm:w-auto flex-shrink-0"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>

            <div className="mt-6 flex justify-center items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              <span>Join 10,000+ crypto enthusiasts!</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;