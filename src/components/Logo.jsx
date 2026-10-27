import logoImg from '../assets/logo.png';

export default function Logo({ className = "h-8 w-auto", variant = "default" }) {
  return (
    <div className={`flex items-center gap-2 cursor-pointer select-none ${className}`}>
      {/* If using an image file from the public folder, uncomment the img tag below and comment out the fallback div */}
      {/* <img src="/logo.png" alt="ZOORO" className="h-8 w-auto object-contain" /> */}
      
      <div className="flex items-center">
        <span className={`font-black text-xl tracking-wider ${variant === 'dark' ? 'text-white' : 'text-[#1A1A1A]'}`}>
          <img 
        src={logoImg} 
        alt="ZOORO CATERING & MEAL SERVICES" 
        className="h-10 w-auto object-contain"
      />
        </span>
      </div>
    </div>
  );
}