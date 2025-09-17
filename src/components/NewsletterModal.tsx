'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Users } from 'lucide-react';

type NewsletterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-neutral-dark border border-border-color rounded-2xl p-8 sm:p-10 w-full max-w-lg text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary">
              Never Miss a Beat
            </h2>
            <p className="mt-2 text-text-secondary">
              Join our newsletter for the latest crypto news and analysis.
            </p>

            <form 
              onSubmit={(e) => { e.preventDefault(); onClose(); }} 
              className="mt-6"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-neutral-dark font-bold py-3 px-8 rounded-full text-lg w-full sm:w-auto flex-shrink-0"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
            <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-500">
              <Users size={14} />
              <span>Join 10,000+ crypto enthusiasts!</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;