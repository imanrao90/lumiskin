import { useState } from 'react';
import { Package, Truck, CheckCircle2, MapPin, Calendar, ArrowRight, Search, Clock, Box } from 'lucide-react';

const TrackingState = 'idle' | 'searching' | 'results';

const TrackOrder = () => {
  const [state, setState] = useState('idle');
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    setState('searching');
    // Simulate API call
    setTimeout(() => setState('results'), 1500);
  };

  const steps = [
    { label: 'Order Placed', date: 'Oct 24, 2024', icon: <Box size={18} />, status: 'completed' },
    { label: 'Processing', date: 'Oct 25, 2024', icon: <Clock size={18} />, status: 'completed' },
    { label: 'Shipped', date: 'Oct 26, 2024', icon: <Truck size={18} />, status: 'current' },
    { label: 'Out for Delivery', date: 'Expected Oct 28', icon: <MapPin size={18} />, status: 'upcoming' },
    { label: 'Delivered', date: '-', icon: <CheckCircle2 size={18} />, status: 'upcoming' },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm">
              <Package size={28} strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="serif text-4xl md:text-5xl text-slate-900 mb-4">
            Track Your <span className="italic font-normal text-slate-400">Order</span>
          </h1>
          <p className="text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
            Enter your order details below to receive real-time updates on your LumiSkin clinical delivery.
          </p>
        </div>

        {state !== 'results' ? (
          <div className={`max-w-md mx-auto transition-all duration-500 ${state === 'searching' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            <form onSubmit={handleTrack} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Order Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. LS-99281"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-300"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="The email used at checkout"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-5 rounded-full flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200"
              >
                {state === 'searching' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Locating Order...
                  </span>
                ) : (
                  <>Track Shipment <Search size={14} /></>
                )}
              </button>
            </form>
            <p className="text-center mt-8 text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed">
              Issues with your order? <a href="#" className="text-indigo-600 border-b border-indigo-200 font-bold">Contact Support</a>
            </p>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Order Status Card */}
            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="p-10 border-b border-slate-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">In Transit</span>
                    <span className="text-xs text-slate-400 font-medium">Order #LS-99281</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Arriving by Oct 28, 2024</h2>
                </div>
                <button 
                  onClick={() => setState('idle')}
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors border-b border-slate-200 hover:border-slate-900"
                >
                  Track Another Order
                </button>
              </div>

              {/* Progress Stepper */}
              <div className="p-10">
                <div className="relative flex flex-col md:flex-row justify-between gap-10">
                  {/* Desktop Connecting Line */}
                  <div className="hidden md:block absolute top-[21px] left-0 right-0 h-[2px] bg-slate-100 z-0">
                    <div className="h-full bg-indigo-600 w-1/2" />
                  </div>

                  {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex md:flex-col items-center gap-6 md:gap-4 flex-1">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500
                        ${step.status === 'completed' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 
                          step.status === 'current' ? 'bg-white border-2 border-indigo-600 text-indigo-600' : 
                          'bg-slate-50 text-slate-300 border border-slate-100'}`}
                      >
                        {step.status === 'completed' ? <CheckCircle2 size={20} /> : step.icon}
                      </div>
                      <div className="text-left md:text-center">
                        <p className={`text-xs font-bold uppercase tracking-wide mb-1 
                          ${step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900'}`}
                        >
                          {step.label}
                        </p>
                        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Details */}
              <div className="bg-slate-50/50 p-10 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Delivery Address</h3>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="text-sm text-slate-600 font-light leading-relaxed">
                      <p className="font-bold text-slate-900">Julian Brooks</p>
                      <p>72 High Definition Avenue</p>
                      <p>Silicon Valley, CA 94025</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Latest Update</h3>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Truck size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1">Package left regional facility</p>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">Processed through San Francisco sorting center and is currently in transit to destination carrier.</p>
                      <p className="text-[10px] font-bold text-indigo-600 mt-3 uppercase tracking-widest">Today at 10:42 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Callout */}
            <div className="bg-[#000B4A] rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="text-center md:text-left">
                 <h3 className="serif text-3xl mb-2">Need <span className="italic font-normal text-slate-300">assistance</span>?</h3>
                 <p className="text-sm text-indigo-200 font-light">Our clinical care team is available 24/7 for delivery inquiries.</p>
               </div>
               <button className="px-10 py-4 bg-[#E6FF00] text-slate-900 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all whitespace-nowrap">
                  Open Support Ticket
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
