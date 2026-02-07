import { Star, ShoppingCart, Zap } from 'lucide-react';

const HAIR_PRODUCTS = [
  { id: '4', name: "Zero Hairfall Duo", price: 2466, category: "Hair Care", rating: 5, reviews: 12, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=600" },
  { id: '8', name: "Scalp Revive Treatment", price: 1200, category: "Hair Care", rating: 4.5, reviews: 42, image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600" },
  { id: '10', name: "Scalp Active Serum", price: 1400, category: "Hair Care", rating: 4.7, reviews: 18, image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600" },
];

const HairCare = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="h-[70vh] relative bg-slate-950 flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Hair Hero" />
        <div className="relative max-w-7xl mx-auto px-6 w-full text-center">
          <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-white/60 mb-8 block">Trichological Precision</span>
          <h1 className="serif text-7xl md:text-8xl text-white mb-8">Root <span className="italic font-normal text-slate-400">Mastery</span></h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">Advanced scalp biology meets clinical hair restoration. Transform your density from the root up.</p>
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Zap size={16} className="text-[#E6FF00]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Active Follicle Repair</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap size={16} className="text-[#E6FF00]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Scalp Microbiome Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {HAIR_PRODUCTS.map((product) => (
            <div key={product.id} data-product-id={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl transition-all group-hover:-translate-y-4">
                <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={product.name} />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="w-full py-3 bg-white text-slate-900 text-[10px] font-bold tracking-widest uppercase rounded-xl">Quick View</button>
                </div>
              </div>
              <h3 className="serif text-2xl text-slate-900 mb-2">{product.name}</h3>
              <p className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-4">RS. {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairCare;
