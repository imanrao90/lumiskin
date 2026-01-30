
import React from 'react';

// interface HeaderPromoProps {
//   isHidden?: boolean;
// }

const HeaderPromo = ({ isHidden }) => {
  return (
    <div 
      className={`bg-[#E6FF00] overflow-hidden border-b border-black/5 transition-all duration-500 ease-in-out
        ${isHidden ? 'max-h-0 opacity-0 py-0' : 'max-h-20 opacity-100 py-2'}`}
    >
      <div className="whitespace-nowrap flex animate-marquee">
        <div className="flex shrink-0 items-center gap-8 px-4">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-[10px] font-bold tracking-[0.15em] text-slate-900 uppercase flex items-center gap-8">
              <span>New Launch: Dermive Urea Economy Pack — 10% Off</span>
              <span className="w-1 h-1 rounded-full bg-slate-900"></span>
              <span>Enjoy Free Samples & Free Shipping on all orders</span>
              <span className="w-1 h-1 rounded-full bg-slate-900"></span>
              <span className="underline cursor-pointer hover:opacity-70 transition-opacity uppercase">Shop Now</span>
              <span className="w-1 h-1 rounded-full bg-slate-900"></span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HeaderPromo;
