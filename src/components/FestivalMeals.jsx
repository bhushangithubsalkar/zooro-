import { motion } from 'framer-motion';

export default function FestivalMeals() {
  const cuisines = [
    "Maharashtrian Zayka",
    "Coastal Indian",
    "Contemporary Indian",
    "Pan-Asian",
    "Fusion",
    "New World"
  ];

  return (
    <section className="py-24 bg-[#1A1412] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]"
          >
            Co-Laboratories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black mt-2 mb-6 tracking-tight leading-tight"
          >
            Festival and occasion meals for your company.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-base mb-8 max-w-xl leading-relaxed"
          >
            Make special corporate days memorable with food, style, and festive energy for any employee count.
          </motion.p>

          {/* Cuisine Checklists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            {cuisines.map((cuisine, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                <span className="text-sm font-medium text-stone-200">{cuisine}</span>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#FF6B00] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-600/30 hover:bg-[#e05d00] transition-colors"
          >
            REQUEST A QUOTE
          </motion.a>
        </div>

        {/* Right Column (Media Showcase with 50-1,000+ pax badge) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-800 group"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
              alt="Live wok cooking"
              className="w-full h-full object-cover"
            />
            
            {/* Floating Capacity Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 right-4 bg-[#FF6B00] text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm tracking-wider"
            >
              50–1,000+ PAX CAPACITY
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}