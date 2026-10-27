import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceMealStandards() {
  return (
    <section className="py-24 bg-[#FCF9F2] px-6 md:px-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            A meal service that works for your people.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm">
            <h3 className="text-2xl font-black mb-4 text-[#FF6B00]">New-age Cuisine</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">Focus on healthy food, home-style preparation, and exceptional taste. We specialize in Maharashtrian, Coastal, Pan-Asian, and Fusion cuisines.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-orange-50 text-[#FF6B00] text-xs font-bold">MAHARASHTRIAN</span>
              <span className="px-3 py-1 rounded-md bg-orange-50 text-[#FF6B00] text-xs font-bold">COASTAL</span>
              <span className="px-3 py-1 rounded-md bg-orange-50 text-[#FF6B00] text-xs font-bold">FUSION</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm">
            <h3 className="text-2xl font-black mb-4 text-[#4CAF50]">Service Standards</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Unwavering consistency across food quality, presentation, and cleanliness. Our staff is trained in high-end hospitality protocols.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}