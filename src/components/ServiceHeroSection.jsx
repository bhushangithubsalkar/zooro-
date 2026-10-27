import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceHeroSection() {
  return (
    <section className="relative pt-24 pb-16 px-6 md:px-12 bg-[#FCF9F2]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-6 uppercase"
          >
            One kitchen. <br />
            <span className="text-[#FF6B00]">Every kind of meal.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-700 text-sm sm:text-base max-w-xl mb-8 leading-relaxed"
          >
            From daily office canteens to industrial scale, we bring you end-to-end catering solutions with taste, safety, and reliability.
          </motion.p>
          <div className="flex gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B00] text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/30"
            >
              Explore our services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-stone-300 text-[#1A1A1A] font-bold text-xs px-8 py-4 rounded-full uppercase tracking-wider hover:border-[#FF6B00] transition-colors"
            >
              Download Brochure
            </motion.a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm">
            <span className="block text-2xl font-black text-[#FF6B00]">50000</span>
            <span className="text-[10px] uppercase font-bold text-stone-400">MEALS DAILY</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm">
            <span className="block text-2xl font-black text-[#1A1A1A]">150</span>
            <span className="text-[10px] uppercase font-bold text-stone-400">CORPORATE CLIENTS</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm">
            <span className="block text-2xl font-black text-[#4CAF50]">25</span>
            <span className="text-[10px] uppercase font-bold text-stone-400">CITIES REACHED</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}