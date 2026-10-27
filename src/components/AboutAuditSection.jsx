import React from 'react';
import { motion } from 'framer-motion';

export default function AboutAuditSection() {
  const auditSteps = [
    { num: "01", title: "Pre-Audit & Trial Food", desc: "Before we sign, we invite your team for a live audit and food tasting session to ensure standards align." },
    { num: "02", title: "Tailored Kitchen Setup", desc: "We customize our service family to match your workplace culture and specific dietary preferences." },
    { num: "03", title: "Stock Tracking & Health", desc: "Advanced inventory systems ensure fresh stock only. No frozen leftovers, ever." },
    { num: "04", title: "Verified Monthly Billing", desc: "Transparent digital billing that maps every meal served to its verified timestamp." }
  ];

  return (
    <section className="py-24 bg-[#FCF9F2] text-[#1A1A1A] px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 sticky top-28">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">TRANSPARENCY</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 mb-6 tracking-tight leading-tight">
            A Kitchen You Can Audit. A Bill You Can Verify.
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
            We don’t hide behind contracts. Our operations are fully transparent, from live stock tracking to audit-friendly billing.
          </p>
          <div className="inline-flex items-center gap-3 bg-orange-100 px-4 py-2 rounded-full text-[#FF6B00] font-bold text-xs">
            <span>● Capacity: 50–1,000+ pax per session</span>
          </div>
        </div>

        {/* Right Column (Steps Stack) */}
        <div className="lg:col-span-7 space-y-6">
          {auditSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm flex items-start gap-6"
            >
              <span className="text-2xl font-black text-[#FF6B00]">{step.num}</span>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}