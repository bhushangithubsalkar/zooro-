import React from 'react';
import { motion } from 'framer-motion';

export default function ContactTimeline() {
  const steps = [
    { num: "01", title: "Share your requirement", desc: "Headcount, location, meal timings or the occasion — whatever you know so far. We listen before we cook." },
    { num: "02", title: "We plan and price", desc: "A custom menu, service plan and a transparent, clear quotation built specifically around your site and team needs." },
    { num: "03", title: "We confirm and serve", desc: "A trial date, a verified meal plan and a hospitality service you can count on. From menus to final invoices, we own it all." }
  ];

  return (
    <section className="py-24 bg-[#1C1613] text-white px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Timeline Steps) */}
        <div className="lg:col-span-7">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">WHAT HAPPENS NEXT</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 mb-6 tracking-tight leading-tight">
            From your first message to a menu on the table.
          </h2>
          <p className="text-stone-300 text-sm mb-12 leading-relaxed">
            One team handles the menu, the service and the event, so nothing gets lost along the way.
          </p>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#221B16] p-6 sm:p-8 rounded-3xl border border-stone-800 flex items-start gap-6"
              >
                <span className="text-2xl font-black text-[#FF6B00]">{step.num}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Card Badge) */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square bg-[#221B16] rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-800 flex items-end p-8">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
              alt="Cooked fresh"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="relative z-10 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">FRESHLY PREPARED</span>
              <h4 className="text-2xl font-black mb-4">Cooked fresh, served with care.</h4>
              <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-stone-200">
                Menus to invoices.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}