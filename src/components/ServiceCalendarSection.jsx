import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCalendarSection() {
  const calendarItems = [
    {
      num: "01",
      title: "Buffet Lunch",
      desc: "Creative Pan-Indian & Chinese selections with home-style comfort.",
      img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "02",
      title: "Event Calendar",
      desc: "Festival and theme-based food offerings aligned with your company's spirit.",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "03",
      title: "Food Court",
      desc: "Separately priced items at dedicated counters for maximum variety.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "04",
      title: "All-day Café",
      desc: "Regional options available throughout the day for non-stop energy.",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const cuisines = ["Maharashtrian", "Coastal", "Contemporary", "Pan-Asian", "Fusion", "Global"];

  return (
    <section className="py-24 bg-[#1C1613] text-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            A cafeteria that changes with the calendar.
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {calendarItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-[#221B16] p-6 rounded-[2rem] border border-stone-800 flex flex-col justify-between shadow-xl"
            >
              <div>
                <span className="text-2xl font-black text-[#FF6B00] block mb-4">{item.num}</span>
                <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cuisine Range Marquee / Ticker Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12 border-t border-stone-800 flex flex-wrap justify-center items-center gap-6 sm:gap-12"
        >
          {cuisines.map((cuisine, cIdx) => (
            <span key={cIdx} className="text-stone-400 font-bold text-sm uppercase tracking-widest hover:text-[#FF6B00] transition-colors">
              {cuisine}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}