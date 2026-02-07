import { Star, ShoppingCart, ArrowRight } from 'lucide-react';

const NEW_PRODUCTS = [
  { id: '1', name: "Dermive Urea Economy Pack", price: 2250, category: "New Launch", rating: 5, reviews: 3, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600", isNew: true },
  { id: '9', name: "Vitamin C Brightening Serum", price: 1950, category: "New Launch", rating: 4.8, reviews: 12, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600", isNew: true },
];

const NewLaunch = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-24">
      <section className="relative h-[60vh] bg-slate-900 flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="New Launch Hero"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-white w-full">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#E6FF00] mb-4 block">Seasonal Drop</span>
            <h1 className="serif text-6xl md:text-7xl mb-6">The Future <br/><span className="italic font-normal text-slate-300">of Hydration</span></h1>
            <p className="text-lg text-slate-300 font-light max-w-lg mb-8">Introducing our latest clinical breakthroughs in dermal recovery and cellular luminescence.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEW_PRODUCTS.map((product) => (
            <div key={product.id} data-product-id={product.id} className="group cursor-pointer bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row gap-8 items-center transition-all hover:-translate-y-2">
              <div className="w-full md:w-1/2 aspect-square bg-slate-50 rounded-[2rem] overflow-hidden">
                <img src={product.image} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt={product.name} />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="bg-indigo-50 text-indigo-600 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest inline-block">New Arrival</div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">{product.name}</h3>
                <p className="text-xs text-slate-500 font-light">Engineered for cellular regeneration and immediate barrier support.</p>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">RS. {product.price.toLocaleString()}</span>
                  <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <ShoppingCart size={18} />
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

export default NewLaunch;
