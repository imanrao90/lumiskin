
import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

// interface HeaderActionsProps {
//   isScrolled?: boolean;
// }

const HeaderActions = ({ isScrolled }) => {
  const iconSize = isScrolled ? 18 : 20;

  return (
    <div className={`flex items-center transition-all duration-500 ${isScrolled ? 'gap-4' : 'gap-6'}`}>
      <button className="text-slate-600 hover:text-indigo-600 transition-colors">
        <Search size={iconSize} strokeWidth={1.5} />
      </button>
      <button className="text-slate-600 hover:text-indigo-600 transition-colors">
        <User size={iconSize} strokeWidth={1.5} />
      </button>
      <button className="relative text-slate-600 hover:text-indigo-600 transition-colors">
        <ShoppingCart size={iconSize} strokeWidth={1.5} />
        <span className={`absolute bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold transition-all duration-500 ${isScrolled ? '-top-1.5 -right-1.5 w-3.5 h-3.5 text-[8px]' : '-top-2 -right-2 w-4 h-4 text-[10px]'}`}>
          0
        </span>
      </button>
    </div>
  );
};

export default HeaderActions;
