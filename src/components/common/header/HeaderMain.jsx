
import React from 'react';
import SkinAnalysis from './SkinAnalysis';
import HeaderLogo from './HeaderLogo';
import HeaderActions from './HeaderActions';

// interface HeaderMainProps {
//   isScrolled?: boolean;
// }

const HeaderMain = ({ isScrolled }) => {
  return (
    <div className={`bg-white px-8 md:px-20 border-b border-slate-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className={`hidden lg:block w-1/3 transition-all duration-500 ${isScrolled ? 'scale-90 origin-left' : 'scale-100'}`}>
          <SkinAnalysis />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <HeaderLogo isScrolled={isScrolled} />
        </div>
        <div className="w-full lg:w-1/3 flex justify-end">
          <HeaderActions isScrolled={isScrolled} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
