
import React, { useState } from 'react';
import { Lock, ArrowLeft, CheckCircle2, CreditCard, Truck } from 'lucide-react';

const Checkout = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
           <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600">
              <CheckCircle2 size={48} />
           </div>
           <h1 className="serif text-4xl text-slate-900">Order <span className="italic font-normal text-slate-400">Received</span></h1>
           <p className="text-slate-500 font-light leading-relaxed">
             Thank you for trusting LumiSkin. Your clinical routine is being prepared and will be shipped within 24 hours.
           </p>
           <div className="p-6 bg-slate-50 rounded-3xl text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Order Reference</p>
              <p className="text-sm font-bold text-slate-900">LS-99281-CONFIRMED</p>
           </div>
           <button onClick={() => window.location.href='/'} className="w-full py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Checkout Header (Minimal) */}
      <header className="py-8 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
           <button onClick={() => window.history.back()} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900">
             <ArrowLeft size={14} /> Back
           </button>
           <h1 className="serif text-2xl tracking-tight">Lumi<span className="italic text-indigo-600 font-normal">Skin</span></h1>
           <div className="flex items-center gap-2 text-emerald-600">
             <Lock size={12} />
             <span className="text-[9px] font-bold uppercase tracking-widest">Secure</span>
           </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-20">
          
          {/* Main Form Area */}
          <div className="flex-1 space-y-16">
            
            {/* Contact Section */}
            <section className="space-y-8">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">01</div>
                 <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Contact Information</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="email" placeholder="Email Address" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
                 <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
               </div>
            </section>

            {/* Shipping Section */}
            <section className="space-y-8">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">02</div>
                 <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Delivery Details</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="First Name" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" />
                 <input type="text" placeholder="Last Name" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" />
                 <div className="md:col-span-2">
                   <input type="text" placeholder="Shipping Address" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" />
                 </div>
                 <input type="text" placeholder="City" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" />
                 <input type="text" placeholder="Postal Code" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm" />
               </div>
            </section>

            {/* Payment Section */}
            <section className="space-y-8">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">03</div>
                 <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Secure Payment</h2>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-indigo-100">
                    <CreditCard size={20} className="text-indigo-600" />
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Credit / Debit Card</span>
                  </div>
                  <div className="space-y-4">
                    <input type="text" placeholder="Card Number" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-6 text-sm" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM / YY" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-6 text-sm" />
                      <input type="text" placeholder="CVV" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-6 text-sm" />
                    </div>
                  </div>
               </div>
            </section>
          </div>

          {/* Checkout Sidebar */}
          <aside className="lg:w-[400px]">
            <div className="sticky top-12 space-y-8">
              <div className="bg-slate-50 rounded-[2.5rem] p-10 space-y-8">
                <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-900">Order Summary</h3>
                <div className="space-y-4 pb-8 border-b border-slate-200">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                         <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Item" />
                      </div>
                      <div className="flex-1">
                         <p className="text-[10px] font-bold text-slate-900 uppercase truncate">Dermive Urea Pack</p>
                         <p className="text-[9px] text-slate-400 uppercase tracking-widest">QTY: 1</p>
                      </div>
                      <span className="text-xs font-bold">RS. 2,250</span>
                   </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest">
                    <span>Total Subtotal</span>
                    <span className="text-slate-900">RS. 2,250</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest">
                    <span>Clinical Shipping</span>
                    <span className="text-slate-900">FREE</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Final Amount</p>
                   <p className="text-5xl font-black text-slate-900 tracking-tighter text-center mb-10">RS. 2,250</p>
                   
                   <button type="submit" className="w-full py-6 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-indigo-600 transition-all shadow-2xl">
                     Complete Order
                   </button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 pt-4 opacity-40">
                 <div className="flex items-center gap-2">
                    <Truck size={14} className="text-slate-900" />
                    <span className="text-[8px] font-bold uppercase tracking-widest">Global Express Delivery</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Lock size={14} className="text-slate-900" />
                    <span className="text-[8px] font-bold uppercase tracking-widest">AES-256 Encrypted</span>
                 </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
