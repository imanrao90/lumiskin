import { ClipboardList, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/PrimaryButton';
import PrimaryButton from '../../../components/common/PrimaryButton';

const BundleSection = () => {
  const naviagte = useNavigate()
  return (
    <section className="w-full bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 mt-12">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Image Column (Left) */}
        <div className="flex-1 relative min-h-[400px] lg:min-h-full overflow-hidden bg-slate-50 order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1200" 
            alt="Custom Routine" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          
          {/* Expert Trust Badge */}
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-800">Dermatologist Verified</span>
          </div>
        </div>

        {/* Text Column (Right) */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-white order-1 lg:order-2">
          <div className="max-w-xl">
            <header className="space-y-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-indigo-600"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-600">
                  Precision Science
                </span>
              </div>
              <h1 className="serif text-2xl md:text-3xl text-slate-900 leading-tight">
                Your Routine, <br />
                <span className="italic font-normal text-slate-500">Perfectly Calibrated</span>
              </h1>
              <p className="text-slate-500 text-md font-light leading-relaxed">
                Take our clinical skin assessment to unlock a regimen designed exclusively for your biological needs.
              </p>
            </header>

            <div className="space-y-8 mb-12">
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100 transition-colors group-hover:bg-indigo-600">
                  <ClipboardList className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Expert Assessment</h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">Advanced quiz developed by top-tier dermatologists to identify your unique skin profile.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100 transition-colors group-hover:bg-indigo-600">
                  <Calendar className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Daily Regimen</h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">Step-by-step guidance updated seasonally to ensure your skin thrives year-round.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100 transition-colors group-hover:bg-indigo-600">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Lasting Clarity</h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">A long-term sustainable approach to achieving and maintaining radiant, clear skin.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <PrimaryButton text="Start my assessment" onClick={() => naviagte('/skin-analysis')}/>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <span>Free for members</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BundleSection;
