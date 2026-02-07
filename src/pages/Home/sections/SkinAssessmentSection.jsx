
import React from 'react';
import { CheckCircle2, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import Button from '../../../components/common/PrimaryButton';
import PrimaryButton from '../../../components/common/PrimaryButton';

const SkinAssessmentSection= () => {
  return (
    <section className="w-full bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Text Column */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-white">
          <div className="max-w-xl">
            <header className="space-y-4 mb-10">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-600"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600">
                  Exclusive Personalization
                </span>
              </div>
              <h1 className="serif text-2xl md:text-3xl text-slate-900 leading-tight">
                Craft Your Own <br />
                <span className="italic font-normal text-slate-500">Bespoke Bundle</span>
              </h1>
              <p className="text-slate-500 text-md leading-relaxed font-light">
                Tailor your skincare journey. Combine our high-performance formulas into a routine that is uniquely yours.
              </p>
            </header>

            <div className="space-y-8 mb-12">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                  <Sparkles className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">Full Creative Control</h3>
                  <p className="text-slate-500 text-xs mt-1">Select from our entire range of clinical skin and hair solutions.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">Precision Targeting</h3>
                  <p className="text-slate-500 text-xs mt-1">Address specific concerns like hyperpigmentation, aging, or hydration.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                  <ShoppingBag className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">Bundle Privileges</h3>
                  <p className="text-slate-500 text-xs mt-1">Flat 10% reduction applied automatically on orders above ₹3,000.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <PrimaryButton text="I want 10% off"/>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex-1 relative min-h-[400px] lg:min-h-full overflow-hidden bg-slate-50">
          <img 
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200" 
            alt="Luxe Skincare" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle overlay for professional look */}
          <div className="absolute inset-0 bg-slate-900/5 transition-opacity hover:opacity-0 duration-500" />
          
          {/* Floating Minimalist Stat/Badge */}
          <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Limited Opportunity</p>
              <p className="text-xl font-medium text-slate-800">Seasonal Tier Discount</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-slate-900">-10%</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkinAssessmentSection;
