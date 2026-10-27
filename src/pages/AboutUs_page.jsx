import React from 'react';
import AboutNavbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutWorkplace from '../components/AboutWorkplace';
import AboutManagement from '../components/AboutManagement';
import AboutPurpose from '../components/AboutPurpose';
import AboutKitchenSection from '../components/AboutKitchen';
import AboutServicesSection from '../components/AboutServicesSection';
import AboutAuditSection from '../components/AboutAuditSection';
import AboutPartnersSection from '../components/AboutPartnersSection';
import AboutContactSection from '../components/AboutContactSection';

export default function AboutUs({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#1A1A1A] font-sans selection:bg-[#FF6B00] selection:text-white">
      <AboutNavbar onNavigate={onNavigate} />
      <AboutHero />
      <AboutWorkplace />
      <AboutManagement />
      <AboutPurpose />
      <AboutKitchenSection />
      <AboutServicesSection />
      <AboutAuditSection />
      <AboutPartnersSection />
      <AboutContactSection />
    </div>
  );
}