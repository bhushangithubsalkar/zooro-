import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceInteractiveServices() {
  const [activeService, setActiveService] = useState(0);

  const servicesList = [
    {
      title: "Corporate Canteen",
      subtitle: "Your canteen, run by us.",
      desc: "We transform corporate dining spaces into vibrant hubs of nutrition and productivity. Our team manages everything from menu engineering to waste management, ensuring your employees stay fueled and happy.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    },
    {
      title: "Industrial Catering",
      subtitle: "Scale meets taste.",
      desc: "Operating in high-volume environments, we provide consistent, hygienic, and calorie-dense meals for industrial workforces at massive scales.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    },
    {
      title: "Festival Meals",
      subtitle: "Celebrating traditions.",
      desc: "From Diwali feasts to Christmas brunches, we bring the authentic taste of Indian festivals to your workplace with traditional recipes and festive decor.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    },
    {
      title: "Buffets & Banquets",
      subtitle: "Premium experiences.",
      desc: "Elegant setups for your corporate events, town halls, and VIP gatherings. Multi-cuisine spreads presented with high-end hospitality standards.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    },
    {
      title: "Healthy Plans",
      subtitle: "Fuel for health.",
      desc: "Nutritionist-designed meals focused on low-oil, high-protein, and balanced macros. Perfect for the modern, health-conscious employee.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    },
    {
      title: "Food Court",
      subtitle: "Retail style dining.",
      desc: "Multiple specialized counters serving fresh, made-to-order dishes. We manage the entire ecosystem from POS to kitchen operations.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    },
    {
      title: "Walk-in Ala-Carte",
      subtitle: "Order at your pace.",
      desc: "A wide-ranging menu for on-demand ordering. Freshness guaranteed for every single dish prepared by our specialized chefs.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    },
    {
      title: "Delivery Kitchens",
      subtitle: "Quality at your door.",
      desc: "Optimized for speed and safety. We deliver hot, fresh meals to satellite offices and industrial sites with military-grade precision.",
      features: ["Customized Multi-Cuisine Menus", "Digital Cafeteria Management", "Rigorous Quality Audits"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FCF9F2] px-6 md:px-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF6B00]">OUR EXPERTISE</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
            Eight services, one accountable partner.
          </h2>
          <p className="text-stone-600 text-sm mt-3">We take end-to-end accountability for your food operations, ensuring seamless quality from sourcing to the final bite.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {servicesList.map((serv, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveService(idx)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-3xl text-left border transition-all flex flex-col justify-between ${
                activeService === idx
                  ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-xl shadow-orange-500/30'
                  : 'bg-white text-[#1A1A1A] border-orange-100 shadow-sm hover:border-[#FF6B00]'
              }`}
            >
              <span className="text-xs font-bold uppercase opacity-75">0{idx + 1}</span>
              <span className="text-lg font-black mt-6">{serv.title}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1C1613] text-white p-8 md:p-12 rounded-[2.5rem] border border-stone-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-4xl font-black mb-2">{servicesList[activeService].title}:</h3>
            <h4 className="text-xl sm:text-3xl font-bold text-[#FF6B00] mb-4">{servicesList[activeService].subtitle}</h4>
            <p className="text-stone-300 text-sm leading-relaxed mb-6">{servicesList[activeService].desc}</p>
            
            <div className="space-y-2">
              {servicesList[activeService].features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-xs font-bold text-stone-200">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
              alt="Service preview"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}