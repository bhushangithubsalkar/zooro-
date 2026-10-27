import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientsTicker from '../components/ClientsTicker';
import CoreServices from '../components/CoreServices';
import FestivalMeals from '../components/FestivalMeals';
import RemainingSections from '../components/RemainingSections';

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#1A1A1A] font-sans selection:bg-[#FF6B00] selection:text-white">
      <Navbar onNavigate={onNavigate} />
      <Hero />
      <ClientsTicker />
      <CoreServices />
      <FestivalMeals />
      <RemainingSections />
    </div>
  );
}