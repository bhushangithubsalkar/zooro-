import React from 'react';
import AboutNavbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactDirectAndForm from '../components/ContactDirectAndForm';
import ContactTimeline from '../components/ContactTimeline';
import ServiceContactSection from '../components/AboutContactSection';

export default function ContactPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#1A1A1A] font-sans selection:bg-[#FF6B00] selection:text-white">
      <AboutNavbar onNavigate={onNavigate} />
      <ContactHero />
      <ContactDirectAndForm />
      <ContactTimeline />
      <ServiceContactSection />
    </div>
  );
}