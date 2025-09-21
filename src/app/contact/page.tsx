"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Loader, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    // Simulasi pengiriman data
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Ganti ini dengan logika pengiriman form Anda yang sebenarnya
    // Untuk sekarang, kita akan anggap selalu berhasil
    setStatus("success");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-text-primary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            We&apos;d love to hear from you. Reach out with any questions.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-neutral-dark p-8 rounded-xl border border-border-color">
            <h2 className="text-2xl font-bold font-heading mb-6">
              Send a Message
            </h2>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <CheckCircle className="h-16 w-16 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-primary">
                  Message Sent!
                </h3>
                <p className="text-text-secondary">
                  Thank you, we&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-background-start text-text-primary px-4 py-3 rounded-md border border-border-color focus:ring-accent focus:border-accent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-background-start text-text-primary px-4 py-3 rounded-md border border-border-color focus:ring-accent focus:border-accent"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-background-start text-text-primary px-4 py-3 rounded-md border border-border-color focus:ring-accent focus:border-accent"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-accent text-neutral-dark font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center disabled:bg-opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader className="animate-spin mr-2 h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          {/* Kolom Info Kontak */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading">
              Contact Information
            </h2>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-text-primary">Email</h3>
                <p className="text-text-secondary">contact@cryptoexist.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-text-primary">Phone</h3>
                <p className="text-text-secondary">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-text-primary">Location</h3>
                <p className="text-text-secondary">
                  123 Blockchain Ave, Crypto City
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
