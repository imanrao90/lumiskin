
import React from 'react';

const navItems = [
    {key: "Shop All", link: '/shop-all'},
    {key: "New Launch", link: '/new-launch'},
    {key: "Gifting", link: '/gifting'},
    {key: "Best Sellers", link: '/best-sellers'},
    {key: "Bundles", link: '/bundles'},
    {key: "Create Bundle", link: '/create-bundle', highlight: true},
    {key: "Skin Care", link: '/skin-care'},
    {key: "Hair Care", link: '/hair-care'},
    {key: "Track Order", link: '/track-order'},
];

// interface NavbarProps {
//   isScrolled?: boolean;
// }

const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`flex justify-center items-center bg-[#000B4A] text-white transition-all duration-500 ease-in-out px-4 overflow-x-auto no-scrollbar ${isScrolled ? 'py-2 gap-0 md:gap-4' : 'py-3 gap-1 md:gap-8'}`}>
      {navItems.map((item, index) => (
        <a 
          key={index}
          href={item.link}
          className={`whitespace-nowrap font-bold tracking-[0.15em] uppercase px-3 transition-all duration-300 relative group
            ${item.highlight ? 'text-[#E6FF00]' : 'text-slate-300 hover:text-white'}
            ${isScrolled ? 'text-[9px] py-1' : 'text-[10px] py-1.5'}`}
        >
          {item.key}
          <span className={`absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left 
            ${item.highlight ? 'bg-[#E6FF00]' : 'bg-white'}`}></span>
        </a>
      ))}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
