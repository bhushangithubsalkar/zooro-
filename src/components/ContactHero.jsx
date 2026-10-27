import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative pt-28 pb-20 px-6 md:px-12 bg-[#FCF9F2] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Headline & Action */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#FF6B00] font-bold text-xs uppercase tracking-wider mb-4"
          >
            FOR OFFICES, PLANTS AND OCCASIONS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-7xl font-black tracking-tight mb-6 uppercase leading-tight"
          >
            Let's plan <br />
            <span className="text-[#FF6B00]">your next meal.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-700 text-sm sm:text-base max-w-xl mb-8 leading-relaxed font-medium"
          >
            Tell us about your team, your site or your occasion. We will reply with a menu and a clear quotation.
          </motion.p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="#enquiry-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B00] text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/30"
            >
              Start an enquiry →
            </motion.a>
            <motion.a
              href="mailto:sagar@zoorohospitality.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-stone-300 text-[#1A1A1A] font-bold text-xs px-8 py-4 rounded-full uppercase tracking-wider hover:border-[#FF6B00] transition-colors bg-white"
            >
              Email us ✉
            </motion.a>
          </div>

          <div className="flex gap-8 mt-10 text-xs font-bold text-stone-600">
            <span>📞 +91 97633 72666</span>
            <span>📞 +91 97633 75666</span>
          </div>
        </div>

        {/* Right Preview Card with Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative aspect-square bg-stone-200 rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center p-8"
        >
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
            alt="Hospitality and kitchen preview"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Floating Proposal Sent Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 right-6 bg-white text-[#1A1A1A] px-5 py-3 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-green-100 text-[#4CAF50] flex items-center justify-center font-bold">✓</div>
            <div>
              <span className="block text-[10px] text-stone-400 font-bold uppercase">PROPOSAL SENT</span>
              <span className="font-black text-xs text-[#1A1A1A]">Within 24 Hours</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}