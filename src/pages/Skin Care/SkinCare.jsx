import { Star, ShoppingCart } from 'lucide-react';

const SKIN_PRODUCTS = [
  { id: '1', name: "Dermive Urea Economy Pack", price: 2250, category: "Skin Care", rating: 5, reviews: 3, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600" },
  { id: '2', name: "Clarevo Salicylic Acid Facewash", price: 1098, category: "Skin Care", rating: 4.8, reviews: 36, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=600" },
  { id: '3', name: "Brightening Coffee Soap", price: 480, category: "Skin Care", rating: 4.9, reviews: 133, image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&q=80&w=600" },
  { id: '6', name: "Hydrating Hyaluronic Serum", price: 1850, category: "Skin Care", rating: 4.9, reviews: 245, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600" },
];

const SkinCare = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="bg-slate-50 py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-indigo-600 block">The Dermal Edit</span>
            <h1 className="serif text-5xl md:text-6xl text-slate-900 leading-tight">Advanced <br/><span className="italic font-normal text-slate-400 text-4xl md:text-5xl">Skin Solutions</span></h1>
            <p className="text-slate-500 font-light leading-relaxed max-w-lg">Clinically-proven formulas designed to restore the skin's natural architecture. From gentle cleansers to potent serums, discover the science of clarity.</p>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200" className="rounded-[3rem] shadow-2xl" alt="Skincare" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKIN_PRODUCTS.map((product) => (
            <div key={product.id} data-product-id={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-slate-50 rounded-[2rem] overflow-hidden mb-6 border border-slate-100 transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                <img src={product.image} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors" />
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-current" />)}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">{product.name}</h3>
                <p className="text-sm font-black tracking-tighter uppercase text-slate-900">RS. {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinCare;
