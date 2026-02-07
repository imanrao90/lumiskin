import { Star, TrendingUp, ShieldCheck, ShoppingCart } from 'lucide-react';

const BEST_SELLING_PRODUCTS = [
  { id: '1', name: "Dermive Urea Economy Pack", price: 2250, rating: 5, reviews: 1284, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600", badge: "Rank #1" },
  { id: '2', name: "Clarevo Salicylic Acid Facewash", price: 1098, rating: 4.8, reviews: 856, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=600", badge: "Rank #2" },
  { id: '6', name: "Hydrating Hyaluronic Serum", price: 1850, rating: 4.9, reviews: 2105, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600", badge: "Rank #3" },
  { id: '5', name: "Sun Guard SPF 50+", price: 1550, rating: 4.7, reviews: 942, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600", badge: "Rank #4" },
];

const BestSellers = () => {
  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Editorial Header */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="flex justify-center items-center gap-3">
            <TrendingUp size={16} className="text-indigo-600" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-indigo-600">The Elite Edit</span>
          </div>
          <h1 className="serif text-5xl md:text-7xl text-slate-900">Most <span className="italic font-normal text-slate-400">Coveted</span></h1>
          <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            The formulas our clinical community trusts most. Proven by science, perfected by thousands of daily routines.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {BEST_SELLING_PRODUCTS.map((product) => (
            <div key={product.id} data-product-id={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-slate-50 rounded-[2.5rem] overflow-hidden mb-8 border border-slate-100 transition-all group-hover:shadow-2xl group-hover:-translate-y-4">
                <img src={product.image} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" alt={product.name} />
                
                {/* Ranking Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </div>
                </div>

                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                   <button className="w-full py-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold tracking-widest uppercase rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl">
                     <ShoppingCart size={14} /> Buy Now
                   </button>
                </div>
              </div>

              <div className="space-y-3 px-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-current" />)}
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">({product.reviews} Reviews)</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <span className="text-lg font-black text-slate-900 tracking-tighter uppercase">RS. {product.price.toLocaleString()}</span>
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-indigo-600" />
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Verified Results</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-[#000B4A] rounded-[3.5rem] p-16 text-center text-white space-y-8">
           <h2 className="serif text-4xl italic font-normal text-slate-300">Clinically Validated Since 2018</h2>
           <p className="max-w-xl mx-auto text-indigo-100/60 font-light leading-relaxed uppercase tracking-[0.1em] text-[11px]">
             Every LumiSkin formula undergoes a minimum 12-month laboratory trial before release.
           </p>
           <div className="flex justify-center gap-12 opacity-40">
              <span className="text-[10px] font-bold uppercase tracking-widest">Sulphate Free</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Paraben Free</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Cruelty Free</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
