import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactDirectAndForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const helpTags = [
    "Corporate Canteen", "Industrial Catering", "Festival & Occasion Meals",
    "Buffets & Banquets", "Healthy Meals", "Food Court", "Delivery Kitchens"
  ];

  return (
    <section id="enquiry-form" className="py-24 bg-[#FCF9F2] text-[#1A1A1A] px-6 md:px-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">DIRECT CHANNELS</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
            A few details, and we'll take it from here.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Contact Cards & Help Tags) */}
          <div className="lg:col-span-5 space-y-6">
            
            <motion.div whileHover={{ y: -3 }} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm">
              <span className="text-xs font-bold text-[#FF6B00] uppercase block mb-1">Email Us</span>
              <a href="mailto:sagar@zoorohospitality.com" className="text-lg font-black text-[#1A1A1A] hover:text-[#FF6B00] transition-colors">
                sagar@zoorohospitality.com
              </a>
              <p className="text-xs text-stone-500 mt-1">You’ll get an initial review within 24 hours.</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm">
              <span className="text-xs font-bold text-[#FF6B00] uppercase block mb-1">Call for Proposals</span>
              <div className="text-lg font-black text-[#1A1A1A] space-y-0.5">
                <div>+91 97633 72666</div>
                <div>+91 97633 75666</div>
              </div>
              <p className="text-xs text-stone-500 mt-2">Sagar Pattanshetty, Director - Built for expert proposals and site visits.[cite: 6, 12]</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm">
              <span className="text-xs font-bold text-[#FF6B00] uppercase block mb-1">Head Office</span>
              <p className="text-sm font-bold text-[#1A1A1A] leading-relaxed mb-2">
                ZOORO HOSPITALITY Pvt. Ltd., S. No. 52-3/1, Maruti Nagar, Lane No. 4, Wadgaonsheri, Pune - 411014[cite: 5, 8, 12]
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#FF6B00] hover:underline">
                Open in Google Maps ↗
              </a>
            </motion.div>

            {/* We Can Help With Tags */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">WE CAN HELP WITH:</h4>
              <div className="flex flex-wrap gap-2">
                {helpTags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-white border border-orange-100 text-xs font-bold text-stone-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Enquiry Form Box - Dark Theme) */}
          <div className="lg:col-span-7 bg-[#1C1613] text-white p-8 md:p-12 rounded-[2.5rem] border border-stone-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Send us an enquiry</h3>
            <p className="text-xs text-stone-400 mb-8">Fields marked with * are mandatory</p>

            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-900/40 text-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
                <h4 className="text-2xl font-bold mb-2">Enquiry Sent Successfully!</h4>
                <p className="text-stone-400 text-sm">Thank you. Our proposal team will review and reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Full Name *</label>
                    <input required type="text" placeholder="Your name" className="w-full px-4 py-3.5 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Company *</label>
                    <input required type="text" placeholder="Company name" className="w-full px-4 py-3.5 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Phone *</label>
                    <input required type="tel" placeholder="+91..." className="w-full px-4 py-3.5 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Email Address *</label>
                    <input required type="email" placeholder="name@company.com" className="w-full px-4 py-3.5 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-2">What do you need? *</label>
                    <select className="w-full px-4 py-3.5 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white">
                      <option>Corporate Canteen</option>
                      <option>Industrial Catering</option>
                      <option>Buffets & Banquets</option>
                      <option>Healthy Meals</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-2">People per day (approx.)</label>
                    <input type="text" placeholder="e.g. 250" className="w-full px-4 py-3.5 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Message</label>
                  <textarea rows={4} placeholder="Location, dates, occasion, etc." className="w-full px-4 py-3.5 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500"></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#FF6B00] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/30 hover:bg-[#e05d00] transition-colors"
                >
                  Send enquiry →
                </motion.button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}