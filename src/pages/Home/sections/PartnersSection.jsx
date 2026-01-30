
import React from 'react';

const partners = [
  { name: 'VOGUE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vogue_logo.svg/1280px-Vogue_logo.svg.png' },
  { name: 'ELLE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Elle_magazine_logo.svg/1280px-Elle_magazine_logo.svg.png' },
  { name: 'Harper\'s BAZAAR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Harper%27s_Bazaar_logo.svg/1280px-Harper%27s_Bazaar_logo.svg.png' },
  { name: 'COSMOPOLITAN', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cosmopolitan_logo.svg/1280px-Cosmopolitan_logo.svg.png' },
  { name: 'Allure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Allure_logo.svg/1280px-Allure_logo.svg.png' },
  { name: 'GLAMOUR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Glamour_logo.svg/1280px-Glamour_logo.svg.png' }
];

const PartnersSection = () => {
  return (
    <section className="w-full py-12 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-400 mb-10">
            Our Clinical Partners & Global Media Recognition
          </p>
          
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="group relative flex items-center justify-center w-full h-12 px-4 transition-all duration-500 hover:opacity-100"
              >
                {/* Fallback to styled text if logo image is problematic, but typically we'd use SVG icons here */}
                <span className="serif text-lg font-bold text-slate-800 tracking-tighter transition-all duration-300 group-hover:scale-105">
                  {partner.name}
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-indigo-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
