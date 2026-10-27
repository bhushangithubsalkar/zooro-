import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
  { name: 'Home', href: '#', view: 'home' },
  { name: 'About Us', href: '#', view: 'about' },
  { name: 'Services', href: '#', view: 'service' },
  { name: 'Contact Us', href: '#', view: 'contact' },
  ];

  const handleNavigation = (event, view) => {
    if (view && onNavigate) {
      event.preventDefault();
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pointer-events-auto w-full max-w-6xl bg-[#221B16] text-[#FCF9F2] px-6 py-3 rounded-full shadow-2xl flex items-center justify-between border border-stone-800 backdrop-blur-md bg-opacity-95"
      >
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer" onClick={() => onNavigate && onNavigate('home')}>
          <Logo variant="dark" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.view)}
              className="text-stone-300 font-medium text-sm hover:text-white transition-colors relative group py-1 cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6B00] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-orange-600/30 hover:bg-[#e05d00] transition-all"
          >
            Get a Proposal
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="text-stone-200 focus:outline-none p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-[#221B16] text-white p-6 rounded-3xl shadow-2xl border border-stone-800 pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => {
                    handleNavigation(event, link.view);
                    setMobileMenuOpen(false);
                  }}
                  className="text-stone-200 font-medium text-base hover:text-[#FF6B00] py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#FF6B00] text-white font-semibold py-3 rounded-full shadow-md text-center mt-2"
              >
                Get a Proposal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}