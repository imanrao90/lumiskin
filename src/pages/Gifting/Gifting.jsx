import { Gift, Heart, ArrowRight } from 'lucide-react';

const GIFT_SETS = [
  { id: 'gs1', name: "The Complete Recovery Vault", price: 8500, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=600", items: "5 Full-size Products" },
  { id: 'gs2', name: "Hydration Ritual Set", price: 4200, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600", items: "3 Travel-size Products" },
  { id: 'gs3', name: "Morning Radiance Duo", price: 3100, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600", items: "2 Essentials" },
];

const Gifting = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <header className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg text-rose-300">
              <Gift size={28} />
            </div>
          </div>
          <h1 className="serif text-6xl text-slate-900 leading-tight">Gifts of <br/><span className="italic font-normal text-slate-400">Clinical Radiance</span></h1>
          <p className="text-slate-500 font-light text-lg leading-relaxed">Elegantly packaged collections of our highest-performing clinical formulas. Give the gift of a transformed complexion.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
          {GIFT_SETS.map((set) => (
            <div key={set.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-8 border border-slate-100 transition-all hover:shadow-2xl">
                <img src={set.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={set.name} />
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="px-8 py-3 bg-white text-slate-900 text-[10px] font-bold tracking-widest uppercase rounded-full">Reserve Set</button>
                </div>
              </div>
              <h3 className="serif text-2xl text-slate-900 mb-1">{set.name}</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{set.items}</p>
              <p className="text-xl font-black tracking-tighter text-slate-900 uppercase">RS. {set.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-white rounded-[4rem] border border-slate-100 flex flex-col md:flex-row items-center gap-16 text-left shadow-xl shadow-slate-200/50">
           <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=1200" className="rounded-[3rem] shadow-lg" alt="Gift Wrap" />
           </div>
           <div className="md:w-1/2 space-y-6">
              <h2 className="serif text-4xl text-slate-900">Premium <span className="italic font-normal text-slate-400">Packaging</span></h2>
              <p className="text-slate-500 font-light leading-relaxed">Every gift set arrives in our signature minimalist boxes, complete with clinical instruction cards and a personalized luxury message of your choice.</p>
              <button className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-2 hover:text-rose-500 hover:border-rose-500 transition-all">
                Learn About Custom Gifting <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Gifting;
