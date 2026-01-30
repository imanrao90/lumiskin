
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20 border-b border-slate-800">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="serif text-4xl italic tracking-tight">LumiSkin</h2>
              <p className="text-slate-400 font-light leading-relaxed max-w-md">
                Precision-engineered skincare designed for high-definition clarity. Join 50,000+ others receiving our weekly clinical insights.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-400">Join the clinical circle</h3>
            <p className="text-lg font-medium">Get 15% off your first order & early access to new launches.</p>
            <form className="relative max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 rounded-full flex items-center gap-2 transition-all duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest">Join</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Shop Range</h4>
            <ul className="space-y-4">
              {['All Products', 'Best Sellers', 'New Arrivals', 'Value Bundles', 'Gift Sets'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">The Science</h4>
            <ul className="space-y-4">
              {['Our Mission', 'Clinical Studies', 'Dermatologist Panel', 'Ingredient Glossary', 'Skin Quiz'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Customer Care</h4>
            <ul className="space-y-4">
              {['Track Order', 'Shipping Policy', 'Returns & Refunds', 'Contact Expert', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Trust & Quality</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <ShieldCheck size={18} className="text-indigo-400" />
                <span className="text-xs uppercase tracking-widest">Sulphate Free</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Globe size={18} className="text-indigo-400" />
                <span className="text-xs uppercase tracking-widest">Cruelty Free</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-indigo-400" />
                <span className="text-xs font-medium lowercase">hello@lumiskin.clinical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Payment */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              &copy; {currentYear} LumiSkin Clinical Labs.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] font-bold text-slate-600 hover:text-slate-400 uppercase tracking-widest transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-bold text-slate-600 hover:text-slate-400 uppercase tracking-widest transition-colors">Terms</a>
              <a href="#" className="text-[10px] font-bold text-slate-600 hover:text-slate-400 uppercase tracking-widest transition-colors">Accessibility</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <div className="h-6 w-10 bg-slate-700 rounded flex items-center justify-center font-bold text-[8px]">VISA</div>
            <div className="h-6 w-10 bg-slate-700 rounded flex items-center justify-center font-bold text-[8px]">MC</div>
            <div className="h-6 w-10 bg-slate-700 rounded flex items-center justify-center font-bold text-[8px]">PAYPAL</div>
            <div className="h-6 w-10 bg-slate-700 rounded flex items-center justify-center font-bold text-[8px]">AMEX</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
