import { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function RemainingSections() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', serviceType: 'Corporate Cafeteria' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const processSteps = [
  {
    num: "01",
    title: "Site Survey",
    desc: "We visit your site to understand kitchen logistics, headcount, and culinary preferences.",
    activeColor: "bg-[#FF6B00] text-white shadow-lg shadow-orange-500/30"
  },
  {
    num: "02",
    title: "Menu Design",
    desc: "Customized menu cycles created specifically for your regional and dietary needs.",
    activeColor: "bg-[#4CAF50] text-white shadow-lg shadow-green-500/30"
  },
  {
    num: "03",
    title: "Mobilization",
    desc: "Onboarding of skilled chefs and service staff with intensive hygiene training.",
    activeColor: "bg-[#1A1A1A] text-white shadow-lg shadow-stone-900/30"
  },
  {
    num: "04",
    title: "Service Live",
    desc: "Continuous feedback loops and regular hygiene audits to maintain standards.",
    activeColor: "bg-[#FF6B00] text-white shadow-lg shadow-orange-500/30"
  }
];

  const advantages = [
    { title: "100% Hygiene", desc: "ISO 22000 certified processes ensuring medical-grade safety in every batch." },
    { title: "Punctual Supply", desc: "Sophisticated logistics network ensuring meals arrive hot, exactly when needed." },
    { title: "Expert Staff", desc: "Trained hospitality professionals who understand service as much as cooking." },
    { title: "Nutrition Balanced", desc: "Dietician-approved menus that keep employees energized without the afternoon slump." }
  ];

  return (
    <>
      {/* SECTION: Process ("Our Seamless Transition") */}
<section id="process" className="py-24 bg-[#FCF9F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black tracking-tight"
          >
            THE <span className="text-[#FF6B00] italic font-serif">Process.</span>
          </motion.h2>
        </div>

        {/* Alternating Process List */}
        <div className="relative flex flex-col gap-12">
          
          {/* Vertical Center Connecting Line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-stone-200 -translate-x-1/2 hidden md:block" />

          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 relative ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white rounded-3xl shadow-sm border border-orange-100 inline-block w-full max-w-md"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Center Badge & Number Node */}
                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg ${step.activeColor}`}
                  >
                    {idx + 1}
                  </motion.div>
                </div>

                {/* Ghost Number Counter Side */}
                <div className={`w-full md:w-1/2 hidden md:flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <span className="text-6xl font-black text-stone-200 select-none">
                    {step.num}
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
      {/* SECTION: Advantage Quality */}
      <section className="py-20 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold">The Zooro Advantage</span>
          <h2 className="text-3xl font-black mt-2">Obsessive about Quality.</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-[#FCF9F2] border border-orange-100/50"
            >
              <h3 className="font-bold text-lg mb-2 text-[#FF6B00]">{adv.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION: Contact & Proposal Form */}
      <section id="contact" className="py-24 bg-[#FCF9F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1C1613] text-white rounded-3xl p-8 lg:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Box */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
                Ready to elevate your cafeteria?
              </h2>
              <p className="text-stone-300 text-sm mb-8 leading-relaxed">
                Send us a brief, and we’ll come back with a customized culinary proposal within 24 hours.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-stone-400 block text-xs">CALL OUR EXPERT</span>
                  <span className="font-bold text-base text-[#FF6B00]">+91 97633 72666</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-xs">HO OFFICE</span>
                  <span className="font-medium text-stone-200">Wadgaonsheri, Pune - 411014</span>
                </div>
              </div>
            </div>

            {/* Right Form Box */}
            <div className="lg:col-span-7 bg-white text-[#1A1A1A] p-8 rounded-2xl shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Enquiry Sent!</h3>
                  <p className="text-gray-600 text-sm">Thank you. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B00] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Company</label>
                      <input
                        required
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B00] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B00] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Service Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B00] text-sm bg-white"
                    >
                      <option>Corporate Cafeteria</option>
                      <option>Industrial Catering</option>
                      <option>Events & Buffets</option>
                      <option>All-Day Café</option>
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#FF6B00] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:bg-[#e05d00] transition-colors mt-2"
                  >
                    Request Proposal →
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#120D0A] text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo variant="dark" className="mb-4" />
            <p className="text-xs text-stone-400 leading-relaxed">
              Serving excellence across Pune, Shirwal, and Mumbai industrial hubs since 2012.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#FF6B00]">Services</a></li>
              <li><a href="#edge" className="hover:text-[#FF6B00]">Our Edge</a></li>
              <li><a href="#process" className="hover:text-[#FF6B00]">Process</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>Corporate Cafeteria</li>
              <li>Industrial Catering</li>
              <li>Events & Buffets</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Contact</h4>
            <p className="text-xs mb-1 text-stone-300">sagar@zoorohospitality.com</p>
            <p className="text-xs text-stone-300">+91 97633 72666</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 text-xs flex flex-col sm:flex-row justify-between items-center">
          <p>© 2026 ZOORO HOSPITALITY PVT. LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
}