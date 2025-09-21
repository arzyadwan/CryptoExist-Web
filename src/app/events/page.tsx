"use client"; // Jadikan Client Component untuk animasi

import { motion } from "framer-motion";
import { Calendar, Ticket } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-text-primary">
            Upcoming Events
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Webinars, AMAs, and conferences from the world of crypto.
          </p>
        </header>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group bg-neutral-dark p-6 rounded-xl border border-border-color flex flex-col sm:flex-row items-start gap-6 cursor-pointer"
          >
            <div className="flex-shrink-0 text-center bg-background-start p-4 rounded-lg">
              <p className="text-accent font-bold text-sm">OCT</p>
              <p className="text-3xl font-bold text-text-primary">25</p>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-accent mb-1">Online Webinar</p>
              <h2 className="text-xl font-bold font-heading mb-2 group-hover:text-accent transition-colors">
                DeFi Security: Protecting Your Assets
              </h2>
              <p className="text-text-secondary text-sm">
                Join our experts as we discuss the best practices for securing
                your funds in the decentralized finance ecosystem.
              </p>
            </div>
            <button className="w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0 bg-accent text-neutral-dark font-bold py-2 px-5 rounded-full group-hover:bg-opacity-80 transition-all flex items-center justify-center gap-2">
              <Ticket size={16} />
              Register
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-dark p-6 rounded-xl border border-border-color flex flex-col sm:flex-row items-start gap-6 opacity-60"
          >
            {/* Contoh Kartu Acara 2 */}
            <div className="flex-shrink-0 text-center bg-background-start p-4 rounded-lg">
              <p className="text-accent font-bold text-sm">NOV</p>
              <p className="text-3xl font-bold text-text-primary">12</p>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-accent mb-1">Community AMA</p>
              <h2 className="text-xl font-bold font-heading mb-2">
                Ask Me Anything: The Future of NFTs
              </h2>
              <p className="text-text-secondary text-sm">
                Our lead researcher answers your questions live. (Event has
                passed).
              </p>
            </div>
            <button
              disabled
              className="w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0 bg-gray-500 text-gray-300 font-bold py-2 px-5 rounded-full cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Calendar size={16} />
              Event Ended
            </button>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}
