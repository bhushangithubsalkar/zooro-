import { motion } from 'framer-motion';

export default function AboutManagement() {
  const leaders = [
    {
      initials: "VK",
      name: "Mr. Vijay Kasurde",
      role: "Senior Management",
      experience: "23 YEARS",
      desc: "A veteran in hospitality management, ensuring that every operational process meets international hygiene and efficiency benchmarks[cite: 5]."
    },
    {
      initials: "SP",
      name: "Mr. Sagar Pattanshetty",
      role: "Director",
      experience: "10 YEARS",
      desc: "Leading the vision of ZOORO with a focus on modernizing institutional catering and maintaining high-speed delivery networks."
    }
  ];

  return (
    <section className="py-24 bg-[#1C1613] text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">The Management</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
            Led by People Who Know the Kitchen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-[#2D231E] p-8 rounded-3xl border border-stone-800 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#FF6B00] text-white font-black text-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-600/30">
                  {leader.initials}
                </div>
                <h3 className="text-2xl font-black mb-1">{leader.name}</h3>
                <span className="text-xs uppercase tracking-wider text-[#FF6B00] font-bold block mb-4">{leader.role}</span>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">{leader.desc}</p>
              </div>

              <div className="pt-6 border-t border-stone-800 flex items-center gap-3">
                <span className="text-3xl font-black text-white">{leader.experience}</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold leading-tight">Years Food Industry Experience</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}