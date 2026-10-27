import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPartnersSection() {
  const stats = [
    { value: "10+", label: "IT MNCs" },
    { value: "15+", label: "INDUSTRIAL PLANTS" },
    { value: "2M+", label: "YEARLY MEALS" },
    { value: "100%", label: "HYGIENIC" }
  ];

  const partners = [
    "Wipro Pari", "Bajaj Electronics", "WNS Global", "Kirloskar Brothers"
  ];

  return (
    <section className="py-24 bg-white text-[#1A1A1A] px-6 md:px-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]"
        >
          OUR PARTNERS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black mt-2 mb-16 tracking-tight"
        >
          Trusted in Kitchens Across Pune.
        </motion.h2>

        {/* Partner Ticker / Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 bg-[#FCF9F2] rounded-2xl border border-orange-100 flex items-center justify-center font-bold text-stone-700 shadow-sm"
            >
              {partner}
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-stone-200">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="block text-4xl sm:text-5xl font-black text-[#FF6B00] mb-2">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest font-bold text-stone-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}