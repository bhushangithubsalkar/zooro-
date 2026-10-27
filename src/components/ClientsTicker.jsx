import { motion } from 'framer-motion';

const clients = [
  "KIRLOSKAR BROTHERS",
  "GODREJ & BOYCE",
  "WIPRO PARI",
  "BAJAJ ELECTRONICS",
  "WNS GLOBAL",
  "VODAFONE IDEA (Vi)",
  "JOHNSON CONTROLS",
  "SS&C FINTECH",
  "REDBRICK (Sangamwadi)",
  "ANGULAR MINDS"
];

export default function ClientsTicker() {
  return (
    <section id="edge" className="py-16 bg-[#1C1613] text-[#FCF9F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#FF6B00] font-bold"
        >
          Trusted across Pune & Maharashtra
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-extrabold mt-2 text-white"
        >
          Powering kitchens for industry leaders
        </motion.p>
      </div>

      {/* Infinite Marquee Ticker Container (15+ animations via staggered card reveals & smooth infinite scroll) */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-4">
        {/* Gradient Masks for fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1C1613] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1C1613] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 items-center flex-nowrap"
        >
          {clients.concat(clients).map((client, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, borderColor: '#FF6B00', backgroundColor: 'rgba(255,107,0,0.1)' }}
              className="px-8 py-5 bg-[#2D231E] border border-stone-800 rounded-2xl shadow-lg flex items-center justify-center min-w-[240px] cursor-pointer transition-colors"
            >
              <span className="font-bold tracking-wider text-stone-300 text-sm md:text-base">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}