import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-[#f4a125] pt-32 pb-24 px-6 md:px-12 overflow-hidden min-h-[85vh] flex items-center">
      
      {/* Background Soft Glow Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column (Golden Yellow Box with Typography & CTA Buttons) */}
        <div className="lg:col-span-7 flex flex-col items-start z-20">
          
          {/* Script Welcome Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-serif italic text-[#3b2b1a] mb-2 font-normal"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Welcome to Zooro Hospitality
          </motion.span>

          {/* Heavy Block Headline with Shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black text-[#1A1A1A] leading-[0.95] tracking-tight mb-6 uppercase"
            style={{ textShadow: '3px 3px 0px rgba(59, 43, 26, 0.15)' }}
          >
            GOOD FOOD, <br />
            BETTER PEOPLE, <br />
            <span className="font-serif italic font-normal text-white lowercase tracking-normal text-3xl sm:text-5xl lg:text-6xl">
              Brighter workplaces.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xs sm:text-sm text-[#2b2b2b] max-w-md mb-8 font-semibold leading-relaxed"
          >
            Customized catering solutions for the modern Indian corporate & industrial landscape.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3b2b1a] text-white font-black text-[11px] tracking-widest px-8 py-4 rounded-full text-center shadow-lg uppercase transition-all"
            >
              START YOUR PROPOSAL
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#3b2b1a] text-[#3b2b1a] font-black text-[11px] tracking-widest px-8 py-4 rounded-full text-center uppercase transition-all hover:bg-[#3b2b1a] hover:text-white"
            >
              EXPLORE SERVICES
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column (Full Food Photography Backdrop with Rotating ISO Badge) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
          >
            {/* Food Spread Background Image */}
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=80"
              alt="Corporate meal spread with soup and almonds"
              className="w-full h-full object-cover"
            />

            {/* Rotating ISO 22000 Certified Stamp Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-4 right-4 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full border-4 border-dashed border-[#8b2500] flex items-center justify-center shadow-xl p-2"
            >
              <span className="text-[9px] sm:text-[10px] font-black text-center text-[#8b2500] leading-tight uppercase tracking-wider font-sans">
                ISO 22000 <br /> Certified
              </span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}