import { motion } from 'framer-motion';

const services = [
  {
    title: "CORPORATE CANTEEN",
    desc: "Daily nutritious meals with structural cafeteria management for large workforces.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    tags: ["NUTRITION-LED", "SOP-DRIVEN"]
  },
  {
    title: "INDUSTRIAL CATERING",
    desc: "Reliable high-capacity food preparation for manufacturing and industrial plants.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    tags: ["MASS PRODUCTION", "24/7 SERVICE"]
  },
  {
    title: "EVENTS & BUFFETS",
    desc: "Corporate parties, celebrations, and custom outdoor catering orders.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    tags: ["FESTIVE MENUS", "LIVE COUNTERS"]
  }
];

export default function CoreServices() {
  return (
    <section id="services" className="py-24 bg-[#FCF9F2] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">Catering Services</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
            ONE KITCHEN PARTNER FOR <br /> EVERY KIND OF MEAL.
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-black tracking-tight mb-3 text-[#1A1A1A] group-hover:text-[#FF6B00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] font-bold px-3 py-1 rounded-md bg-[#FCF9F2] text-stone-700 border border-stone-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}