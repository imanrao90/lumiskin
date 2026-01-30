
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface SliderControlsProps {
//   current: number;
//   total: number;
//   onPrev: () => void;
//   onNext: () => void;
//   onGoTo: (index: number) => void;
// }

const SliderControls = ({ current, total, onPrev, onNext, onGoTo }) => {
  return (
    <>
      {/* Side Arrows */}
      <div className="absolute inset-y-0 left-8 z-20 hidden md:flex items-center">
        <button 
          onClick={onPrev}
          className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-8 z-20 hidden md:flex items-center">
        <button 
          onClick={onNext}
          className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center items-center gap-4">
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className="group relative py-4 px-2"
          >
            <div className={`h-[2px] transition-all duration-500 rounded-full
              ${current === i ? 'w-12 bg-[#E6FF00]' : 'w-6 bg-white/30 group-hover:bg-white/60'}`} 
            />
            <span className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white tracking-widest transition-opacity duration-300
              ${current === i ? 'opacity-100' : 'opacity-0'}`}>
              0{i + 1}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default SliderControls;
