import { Layers, CheckCircle2, ShoppingBag } from 'lucide-react';

const CURATED_BUNDLES = [
  { id: 'b1', name: "Acne Control System", price: 3450, oldPrice: 4200, items: 3, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=600", desc: "A triple-action routine targeting active breakouts and prevention." },
  { id: 'b2', name: "The Glow Regimen", price: 4100, oldPrice: 5100, items: 3, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600", desc: "Deep hydration and brightening with our flagship Vitamin C serum." },
  { id: 'b3', name: "Dermal Recovery Duo", price: 2800, oldPrice: 3500, items: 2, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600", desc: "Ultra-concentrated Urea and Ceramide support for sensitive barriers." },
];

const Bundles = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <Layers size={20} className="text-indigo-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600">Curated Synergies</span>
            </div>
            <h1 className="serif text-5xl md:text-6xl text-slate-900 leading-tight">Clinical <br/><span className="italic font-normal text-slate-400">Routines</span></h1>
            <p className="text-slate-500 font-light text-lg leading-relaxed">Optimized combinations of our formulas designed to work in synergy for accelerated results.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-6">
             <div className="text-right">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Bundle Advantage</p>
                <p className="text-xl font-black text-slate-900 uppercase tracking-tighter">Save up to 25%</p>
             </div>
             <div className="w-[1px] h-12 bg-slate-200" />
             <ShoppingBag size={24} className="text-indigo-600" />
          </div>
        </header>

        <div className="space-y-12">
          {CURATED_BUNDLES.map((bundle) => (
            <div key={bundle.id} className="group bg-white rounded-[3rem] p-4 border border-slate-100 hover:shadow-2xl transition-all duration-700 overflow-hidden flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-[450px] aspect-square rounded-[2.5rem] overflow-hidden flex-shrink-0">
                <img src={bundle.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={bundle.name} />
              </div>
              <div className="flex-1 p-8 lg:p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">Pre-Designed</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{bundle.items} Products Included</div>
                </div>
                <h2 className="serif text-4xl text-slate-900 leading-tight">{bundle.name}</h2>
                <p className="text-slate-500 font-light text-lg leading-relaxed">{bundle.desc}</p>
                
                <div className="flex flex-wrap gap-4">
                   {['Clinically Tested', 'Full Routine', 'Free Shipping'].map(feat => (
                     <div key={feat} className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-indigo-600" />
                       {feat}
                     </div>
                   ))}
                </div>

                <div className="flex items-center gap-10 pt-8 border-t border-slate-50">
                   <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Set Price</p>
                      <div className="flex items-baseline gap-3">
                         <span className="text-3xl font-black text-slate-900 uppercase tracking-tighter">RS. {bundle.price.toLocaleString()}</span>
                         <span className="text-sm text-slate-300 line-through">RS. {bundle.oldPrice.toLocaleString()}</span>
                      </div>
                   </div>
                   <button className="px-12 py-5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                      Add Routine to Cart
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bundles;
