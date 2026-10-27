import React, { useState } from 'react';
import HomePage from './pages/Home_page';
import AboutUs from './pages/AboutUs_page';
import Service from './pages/Service_page';
import Contact from './pages/Contact_page';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#1A1A1A] font-sans selection:bg-[#FF6B00] selection:text-white">
      {currentView === 'home' && <HomePage onNavigate={setCurrentView} />}
      {currentView === 'about' && <AboutUs onNavigate={setCurrentView} />}
      {currentView === 'service' && <Service onNavigate={setCurrentView} />}
      {currentView === 'contact' && <Contact onNavigate={setCurrentView} />}
    </div>
  );
}