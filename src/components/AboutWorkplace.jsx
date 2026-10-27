import { motion } from 'framer-motion';

export default function AboutWorkplace() {
  return (
    <section id="story" className="py-24 bg-[#FCF9F2] px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">Why Choose Us</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] mt-2 mb-6 tracking-tight">
            A Food Partner Built Around Your Workplace.
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-8">
            Our approach combines taste, quality, hygiene, and sanitation. We provide dependable service standards that empower your employees and keep your production running smoothly[cite: 5].
          </p>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-3xl shadow-sm border border-orange-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-bold text-xl">🍽️</div>
              <div>
                <h3 className="font-bold text-base">Corporate Canteen Management</h3>
                <p className="text-xs text-stone-500">Professional dining solutions for modern office spaces.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-3xl shadow-sm border border-orange-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-[#4CAF50] flex items-center justify-center font-bold text-xl">🏭</div>
              <div>
                <h3 className="font-bold text-base">Industrial Bulk Catering</h3>
                <p className="text-xs text-stone-500">Mass scale high-nutrition meals for labor-intensive industries.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Image Showcase with Badge) */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/3] bg-stone-200 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
              alt="Workplace catering"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center font-bold">✓</div>
            <div>
              <span className="block text-xs text-stone-400 font-bold uppercase">Hygiene Score</span>
              <span className="font-black text-sm text-[#1A1A1A]">99.8% Perfect</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}