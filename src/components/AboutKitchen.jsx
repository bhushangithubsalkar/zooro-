import React from 'react';
import { motion } from 'framer-motion';

export default function AboutKitchenSection() {
  const highlights = [
    { title: "Stainless Steel", desc: "Grade 304 food-safe prep surfaces." },
    { title: "Fresh Sourcing", desc: "Direct farm-to-table daily supply." },
    { title: "Hot Holding", desc: "Meals delivered at 65°C+ temperatures." },
    { title: "Expert Staff", desc: "FSSAI certified food handlers." }
  ];

  return (
    <section className="py-24 bg-[#FCF9F2] text-[#1A1A1A] px-6 md:px-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">OPERATIONS CENTER</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
              The Central Kitchen, Wadgaonsheri
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-8 mt-6 md:mt-0"
          >
            <div>
              <span className="block text-xs uppercase text-stone-400 font-bold">Daily Production</span>
              <span className="text-2xl font-black text-[#FF6B00]">12,000+</span>
            </div>
            <div>
              <span className="block text-xs uppercase text-stone-400 font-bold">Pune Reach</span>
              <span className="text-2xl font-black text-[#4CAF50]">City-Wide</span>
            </div>
          </motion.div>
        </div>

        {/* Kitchen Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative aspect-[16/9] bg-stone-300 rounded-3xl overflow-hidden shadow-xl flex items-end p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
              alt="Advanced Stainless Steel Lines"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 rounded-md bg-[#FF6B00] text-[10px] font-bold uppercase tracking-wider mb-2">LIVE COOKING AREA</span>
              <h3 className="text-2xl font-bold">Advanced Stainless Steel Lines</h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm flex-1 flex flex-col justify-center">
              <h4 className="font-bold text-base mb-1">Vegetable Inspection</h4>
              <p className="text-xs text-stone-500">Rigorous quality sorting prior to prep.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm flex-1 flex flex-col justify-center">
              <h4 className="font-bold text-base mb-1">Hygienic Packaging</h4>
              <p className="text-xs text-stone-500">Airtight, tamper-proof containers.</p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-orange-100/50 shadow-sm"
            >
              <h4 className="font-bold text-base mb-1 text-[#FF6B00]">{item.title}</h4>
              <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}