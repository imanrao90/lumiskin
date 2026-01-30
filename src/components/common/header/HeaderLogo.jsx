
import React from 'react';
import { Link } from 'react-router-dom';

// interface HeaderLogoProps {
//   isScrolled?: boolean;
// }

const HeaderLogo = ({ isScrolled }) => {
  return (
    <Link to="/" className={`flex flex-col items-center cursor-pointer group transition-all duration-500 ease-in-out ${isScrolled ? 'scale-90' : 'scale-100'}`}>
      <h1 className={`serif tracking-tight text-slate-900 leading-none transition-all duration-500 ${isScrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
        Lumi<span className="italic font-normal text-indigo-600">Skin</span>
      </h1>
      {!isScrolled && (
        <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="w-1 h-[1px] bg-indigo-600"></span>
          <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-indigo-600">Clinical Essence</span>
          <span className="w-1 h-[1px] bg-indigo-600"></span>
        </div>
      )}
    </Link>
  );
};

export default HeaderLogo;
