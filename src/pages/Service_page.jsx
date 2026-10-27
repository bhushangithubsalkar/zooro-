import ServiceNavbar from '../components/Navbar';
import ServiceHeroSection from '../components/ServiceHeroSection';
import ServiceInteractiveServices from '../components/ServceInteractiveServices';
import ServiceMealStandards from '../components/ServiceMealStandards';
import ServiceCalendarSection from '../components/ServiceCalendarSection';
import ServiceProcessFlow from '../components/ServiceProcessFlow';
import ServiceContactSection from '../components/AboutContactSection';

export default function ServiceUs({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#1A1A1A] font-sans selection:bg-[#FF6B00] selection:text-white">
      <ServiceNavbar onNavigate={onNavigate} />
      <ServiceHeroSection />
      <ServiceInteractiveServices />
      <ServiceMealStandards />
      <ServiceCalendarSection />
      <ServiceProcessFlow />
      <ServiceContactSection />
    </div>
  );
}