
import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';

const INITIAL_CART = [
  { id: '1', name: "Dermive Urea Economy Pack", price: 2250, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", quantity: 1, category: "Moisturizer" },
  { id: '6', name: "Hydrating Hyaluronic Serum", price: 1850, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400", quantity: 1, category: "Serum" },
];

const Cart = () => {
  const [items, setItems] = useState(INITIAL_CART);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 3000 ? 0 : 250;
  const total = subtotal + shipping;

  const updateQty = (id, delta) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-[#fafafa] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBag size={16} className="text-slate-400" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">Clinical Cart</span>
          </div>
          <h1 className="serif text-5xl text-slate-900 leading-none">Your <span className="italic font-normal text-slate-400 text-4xl">Routine</span></h1>
        </header>

        {items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Items List */}
            <div className="flex-1 space-y-12">
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center gap-10 pb-8 border-b border-slate-100 group">
                    <div className="w-32 h-40 bg-slate-50 rounded-3xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-4 text-center sm:text-left">
                      <div>
                        <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">{item.category}</p>
                        <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-8">
                        <div className="flex items-center border border-slate-100 bg-white rounded-full p-1 w-32">
                          <button onClick={() => updateQty(item.id, -1)} className="flex-1 flex justify-center text-slate-300 hover:text-slate-900"><Minus size={14}/></button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="flex-1 flex justify-center text-slate-300 hover:text-slate-900"><Plus size={14}/></button>
                        </div>
                        <span className="text-sm font-black tracking-tighter text-slate-900 uppercase">RS. {(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-4 text-slate-200 hover:text-rose-500 transition-colors group-hover:scale-110">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Upsell Section */}
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                 <div className="flex items-center gap-3 mb-8">
                   <Sparkles size={16} className="text-amber-400" />
                   <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">Complete the Synergy</h3>
                 </div>
                 <div className="flex items-center gap-8">
                    <div className="w-20 h-24 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Sun Guard" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Sun Guard SPF 50+</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">Protect your routine results from UV-induced degradation.</p>
                    </div>
                    <button className="px-6 py-2 border border-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-slate-900 hover:text-white transition-all">Add: RS. 1,550</button>
                 </div>
              </div>
            </div>

            {/* Summary Sidebar */}
            <aside className="lg:w-[400px]">
              <div className="sticky top-32 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 space-y-8">
                <h2 className="text-sm font-black tracking-widest uppercase pb-6 border-b border-slate-50">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-900">RS. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Clinical Shipping</span>
                    <span className="font-bold text-slate-900">{shipping === 0 ? 'FREE' : `RS. ${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Est. Tax</span>
                    <span className="font-bold text-slate-900">Calculated at checkout</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-50 flex justify-between items-end">
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Due</p>
                     <p className="text-4xl font-black text-slate-900 tracking-tighter">RS. {total.toLocaleString()}</p>
                   </div>
                </div>

                <button 
                  onClick={() => window.location.href = '#checkout'}
                  className="w-full py-5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Confirm & Checkout
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-indigo-600" />
                  Secure Clinical Transaction
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="py-32 text-center space-y-8">
             <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200">
                <ShoppingBag size={40} />
             </div>
             <h2 className="serif text-3xl text-slate-900">Your routine is empty</h2>
             <p className="text-slate-500 font-light">Explore our range to find your perfect formula.</p>
             <button onClick={() => window.location.href='/shop-all'} className="px-10 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">Shop Collection</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
