import { motion } from 'framer-motion';

export default function AboutPurpose() {
  const values = [
    { title: "Hygiene & Sanitation", desc: "Every kitchen surface is sanitized every 4 hours. We don't just follow standards; we set them." },
    { title: "Dependable Service", desc: "Rain or shine, our delivery fleet and kitchen staff ensure your meal is never a minute late." },
    { title: "Culinary Variety", desc: "From authentic Maharashtrian to North Indian and Continental—we keep the menu exciting[cite: 7]." },
    { title: "Taste Continuity", desc: "Standardized recipes ensure that Monday's Dal Tadka tastes exactly like Friday's perfection." }
  ];

  return (
    <section id="mission" className="py-24 bg-[#FCF9F2] text-[#1A1A1A] px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column (Mission Statement) */}
        <div className="lg:col-span-5 sticky top-28">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">Our Purpose</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 mb-6 tracking-tight leading-tight">
            Good Quality at Pocket-Friendly Prices.
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-8">
            Our mission is simple: To provide hygienic, home-style food that feels good for the soul and the company bottom line[cite: 5].
          </p>

          <div className="p-6 bg-white rounded-3xl border border-orange-100 shadow-sm">
            <h4 className="font-bold text-sm mb-3 uppercase tracking-wider text-[#FF6B00]">Top Values</h4>
            <ul className="space-y-2 text-xs font-bold text-stone-700">
              <li>✓ Quality & Taste[cite: 5, 7]</li>
              <li>✓ Extreme Hygiene & Sanitation[cite: 5]</li>
              <li>✓ Unmatched Menu Variety[cite: 7]</li>
            </ul>
          </div>
        </div>

        {/* Right Column (Value Cards Grid) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-bold mb-4">✦</div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}