import React from 'react';
import { motion } from 'framer-motion';

export default function AboutServicesSection() {
  const services = [
    { num: "01", title: "Industrial Catering", desc: "Nutritionally balanced high-volume meals." },
    { num: "02", title: "Corporate Canteen", desc: "Modern office dining & cafe experiences." },
    { num: "03", title: "Festival & Occasion", desc: "Specialized theme menus for events." },
    { num: "04", title: "Buffets & Banquets", desc: "Seamless catering for corporate gatherings." },
    { num: "05", title: "Food Court", desc: "Multiple counters with diverse cuisine options." },
    { num: "06", title: "All-Day Café", desc: "Snacks and beverages round the clock." },
    { num: "07", title: "Institutional Catering", desc: "Dedicated meals for schools and hospitals." },
    { num: "08", title: "Pantry Services", desc: "Professional staff for pantry management." }
  ];

  return (
    <section className="py-24 bg-[#1C1613] text-white px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]"
          >
            OUR EXPERTISE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black mt-2 tracking-tight"
          >
            Eight Ways We Show Up For Your Team.
          </motion.h2>
        </div>

        {/* 2-Column Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((serv, idx) => {
            const isGreen = idx === 1 || idx === 3|| idx === 5 || idx === 7;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                whileHover={{ scale: 1.01, backgroundColor: '#2D231E' }}
                className="p-6 rounded-2xl bg-[#221B16] border border-stone-800 flex items-center justify-between transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[#FF6B00] font-black text-lg">{serv.num}</span>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-[#FF6B00] transition-colors">{serv.title}</h3>
                    <p className="text-xs text-stone-400 mt-0.5">{serv.desc}</p>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${isGreen ? 'bg-[#4CAF50]' : 'bg-[#FF6B00]'}`}>
                  →
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}