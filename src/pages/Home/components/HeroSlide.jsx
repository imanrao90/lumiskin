
import React from 'react';
import { ArrowRight } from 'lucide-react';

// interface HeroSlideProps {
//   image: string;
//   title: string;
//   subtitle: string;
//   ctaText: string;
//   isActive: boolean;
//   isPrev?: boolean;
// }

const HeroSlide = ({ image, title, subtitle, ctaText, isActive, isPrev }) => {
  return (
    <div 
      className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform
        ${isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'}
        ${isPrev ? '-translate-x-full' : ''}
      `}
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear
            ${isActive ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-8 md:px-20 flex flex-col justify-center">
        <div className={`max-w-2xl transition-all duration-1000 delay-300 transform
          ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-[#E6FF00]"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#E6FF00]">
              LumiSkin Clinical
            </span>
          </div>

          <h2 className="serif text-5xl md:text-7xl text-white leading-[1.1] mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'italic font-normal text-slate-300' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>

          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-lg">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 bg-[#E6FF00] text-slate-900 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              {ctaText}
            </button>
            <button className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white/20 transition-all">
              Clinical Studies
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
