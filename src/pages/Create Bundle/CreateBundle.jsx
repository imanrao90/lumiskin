import { useState, useMemo } from 'react';
import { Plus, Minus, ShoppingBag, Sparkles, CheckCircle2, Info, ArrowRight, X, Trash2 } from 'lucide-react';

const BUNDLE_PRODUCTS = [
  { id: '1', name: "Dermive Urea Economy Pack", price: 2250, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", category: "Moisturizer" },
  { id: '2', name: "Clarevo Salicylic Wash", price: 1098, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=400", category: "Cleanser" },
  { id: '5', name: "Sun Guard SPF 50+", price: 1550, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400", category: "Protection" },
  { id: '6', name: "Hyaluronic Serum", price: 1850, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400", category: "Serum" },
  { id: '7', name: "Retinol Recovery Cream", price: 3200, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400", category: "Moisturizer" },
  { id: '9', name: "Vitamin C Brightening", price: 1950, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", category: "Serum" },
  { id: '10', name: "Scalp Active Serum", price: 1400, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=400", category: "Haircare" },
];

const CreateBundle = () => {
  const [bundle, setBundle] = useState([]);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Cleanser', 'Moisturizer', 'Serum', 'Protection', 'Haircare'];

  const filteredProducts = useMemo(() => {
    if (activeTab === 'All') return BUNDLE_PRODUCTS;
    return BUNDLE_PRODUCTS.filter(p => p.category === activeTab);
  }, [activeTab]);

  const subtotal = useMemo(() => bundle.reduce((acc, p) => acc + p.price, 0), [bundle]);
  const isEligibleForDiscount = subtotal >= 3000;
  const discount = isEligibleForDiscount ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const addToBundle = (product) => {
    setBundle(prev => [...prev, product]);
  };

  const removeFromBundle = (index) => {
    setBundle(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Builder Section */}
          <div className="flex-1">
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-indigo-600" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-600">Bundle Builder</span>
              </div>
              <h1 className="serif text-4xl md:text-5xl text-slate-900 mb-6">Create Your <span className="italic font-normal text-slate-400">Clinical Regime</span></h1>
              <p className="text-slate-500 font-light max-w-xl leading-relaxed">
                Curate a personalized routine. Add products totaling over <span className="text-slate-900 font-bold">RS. 3,000</span> to automatically unlock 10% off your entire selection.
              </p>
            </header>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase border transition-all
                    ${activeTab === cat ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-600 hover:text-indigo-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-[2rem] p-4 border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="aspect-square rounded-2xl bg-slate-50 overflow-hidden mb-6 relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <button 
                      onClick={() => addToBundle(product)}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-lg"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <div className="px-2">
                    <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-xs font-black text-slate-900 tracking-tighter uppercase">RS. {product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:w-[400px]">
            <div className="sticky top-32">
              <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
                <div className="p-8 bg-slate-900 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-sm font-black tracking-widest uppercase">Your Selection</h2>
                    <span className="text-[10px] bg-indigo-600 px-3 py-1 rounded-full">{bundle.length} Items</span>
                  </div>
                  <p className="text-white/50 text-xs font-light tracking-wide italic">Clinically personalized for you</p>
                </div>

                <div className="p-8 min-h-[300px] max-h-[450px] overflow-y-auto no-scrollbar">
                  {bundle.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                        <ShoppingBag size={24} />
                      </div>
                      <p className="text-sm text-slate-400 font-light">Your bundle is currently empty.<br/>Start adding products to see your routine.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {bundle.map((item, idx) => (
                        <div key={`${item.id}-${idx}`} className="flex items-center gap-4 group animate-in slide-in-from-right-4 duration-300">
                          <div className="w-16 h-16 rounded-xl bg-slate-50 overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest">RS. {item.price.toLocaleString()}</p>
                          </div>
                          <button 
                            onClick={() => removeFromBundle(idx)}
                            className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-8 border-t border-slate-50 bg-slate-50/50">
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Subtotal</span>
                      <span className="font-bold text-slate-900">RS. {subtotal.toLocaleString()}</span>
                    </div>
                    {isEligibleForDiscount && (
                      <div className="flex justify-between text-xs text-emerald-600 font-bold">
                        <span>Bundle Discount (10% Off)</span>
                        <span>- RS. {discount.toLocaleString()}</span>
                      </div>
                    )}
                    {!isEligibleForDiscount && subtotal > 0 && (
                      <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 flex gap-3 items-center">
                        <Info size={16} className="text-indigo-600" />
                        <p className="text-[10px] text-indigo-700 leading-tight">
                          Add <span className="font-bold">RS. {(3000 - subtotal).toLocaleString()}</span> more to unlock 10% bundle discount.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Total Balance</p>
                      <p className="text-3xl font-black text-slate-900 tracking-tighter">RS. {total.toLocaleString()}</p>
                    </div>
                  </div>

                  <button 
                    disabled={bundle.length === 0}
                    className={`w-full py-5 rounded-full flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-xl
                      ${bundle.length > 0 ? 'bg-slate-900 text-white hover:bg-indigo-600 shadow-slate-200' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                  >
                    Complete My Order
                    <ArrowRight size={14} />
                  </button>

                  <div className="mt-6 flex justify-center items-center gap-6 opacity-40">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-indigo-600" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Clinical Labs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-indigo-600" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Secure Billing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CreateBundle;
