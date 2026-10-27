import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#1C1613] text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-stone-800">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Contact Grid Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#221B16] p-8 lg:p-16 rounded-3xl border border-stone-800 shadow-2xl mb-16"
        >
          {/* Left Details */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6 tracking-tight leading-tight">
              Let's Feed Your Workplace.
            </h2>
            <div className="space-y-6 text-sm">
              <div>
                <span className="text-stone-400 block text-xs font-bold uppercase">CALL US</span>
                <span className="font-bold text-base text-[#FF6B00]">+91 97633 72666</span>
              </div>
              <div>
                <span className="text-stone-400 block text-xs font-bold uppercase">EMAIL US</span>
                <span className="font-medium text-stone-200">sagar@zoorohospitality.com</span>
              </div>
              <div>
                <span className="text-stone-400 block text-xs font-bold uppercase">VISIT US</span>
                <span className="font-medium text-stone-200">Wadgaonsheri, Pune 411014</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-[#1C1613] p-8 rounded-2xl border border-stone-800">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-900/40 text-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
                <h3 className="text-2xl font-bold mb-2">Inquiry Sent!</h3>
                <p className="text-stone-400 text-sm">Thank you. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Company</label>
                    <input
                      required
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-[#2D231E] border border-stone-700 focus:outline-none focus:border-[#FF6B00] text-sm text-white placeholder-stone-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#FF6B00] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/30 hover:bg-[#e05d00] transition-colors mt-2"
                >
                  Send Inquiry
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-stone-800 text-xs flex flex-col sm:flex-row justify-between items-center text-stone-400">
          <p>Aura Foods & Co. and Four Season Hospitality Services are consolidated under ZOORO HOSPITALITY PVT. LTD.[cite: 8]</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-white cursor-pointer">© 2024 ZOORO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}