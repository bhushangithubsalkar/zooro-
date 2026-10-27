import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative bg-[#FCF9F2] pt-16 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-7xl font-black text-[#1A1A1A] tracking-tight mb-6 uppercase"
        >
          FOOD FOR A <br />
          <span className="text-[#FF6B00]">BETTER TOMORROW.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-700 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
        >
          ZOORO HOSPITALITY PVT. LTD. is a professional food-service provider focused on delivering high-quality, hygienic and home-style meals for corporate and industrial establishments[cite: 5].
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-16"
        >
          <motion.a
            href="#story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6B00] text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-lg shadow-orange-500/30 uppercase tracking-wider"
          >
            Read Story
          </motion.a>
          <motion.a
            href="#mission"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-stone-300 text-[#1A1A1A] font-bold text-xs px-8 py-3.5 rounded-full uppercase tracking-wider hover:border-[#FF6B00] transition-colors"
          >
            Our Mission
          </motion.a>
        </motion.div>

        {/* Hero Video/Image Container with Live Stat Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full aspect-[16/9] bg-stone-300 rounded-[2.5rem] overflow-hidden shadow-2xl flex items-end p-8"
        >
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
            alt="Kitchen operations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Floating Stat Cards */}
          <div className="relative z-10 flex gap-4 w-full justify-between items-end">
            <div className="flex gap-4">
              <div className="bg-black/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-white text-left">
                <span className="block text-2xl font-black text-white">3965</span>
                <span className="text-[10px] uppercase tracking-wider text-stone-300">MEALS DAILY</span>
              </div>
              <div className="bg-black/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-white text-left">
                <span className="block text-2xl font-black text-white">20</span>
                <span className="text-[10px] uppercase tracking-wider text-stone-300">CLIENT PARTNERS</span>
              </div>
            </div>

            {/* Certified Hygienic Badge */}
            <div className="bg-[#4CAF50] text-white px-6 py-4 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2">
              <span>Certified Hygienic</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}