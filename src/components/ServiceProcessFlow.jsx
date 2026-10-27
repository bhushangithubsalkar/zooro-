import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceProcessFlow() {
  const steps = [
    {
      num: "1",
      title: "Tell us your need",
      desc: "Share your headcount, location, and desired meal plan for the team."
    },
    {
      num: "2",
      title: "We plan the menu",
      desc: "Weekly curated menus and customized meal plans created specifically for you."
    },
    {
      num: "3",
      title: "We cook and serve",
      desc: "Professional kitchen prep and clean, efficient service execution every day."
    },
    {
      num: "4",
      title: "You review",
      desc: "Transparent pricing and smooth monthly invoicing handled end-to-end."
    }
  ];

  return (
    <section className="py-24 bg-[#FCF9F2] text-[#1A1A1A] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            From first call to final invoice
          </motion.h2>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <motion.span
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-black mb-6 shadow-md shadow-orange-500/30"
                >
                  {step.num}
                </motion.span>
                <h3 className="font-bold text-base mb-2 text-[#1A1A1A]">{step.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}