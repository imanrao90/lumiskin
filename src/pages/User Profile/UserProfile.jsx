
import React, { useState } from 'react';
import { 
  Settings, Package, Activity, Droplets, ArrowRight, ShieldCheck, 
  Heart, LogOut, Zap, Calendar, User, CreditCard, Clock, MapPin, ExternalLink 
} from 'lucide-react';

const ProfileTab = 'Overview' | 'My Orders' | 'Skin Profile' | 'Saved Routines' | 'Account Settings';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('Overview');

  const navItems = [
    { label: 'Overview', icon: <Activity size={16}/> },
    { label: 'My Orders' , icon: <Package size={16}/> },
    { label: 'Skin Profile' , icon: <Droplets size={16}/> },
    { label: 'Saved Routines', icon: <Heart size={16}/> },
    { label: 'Account Settings', icon: <Settings size={16}/> }
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px] animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Health Score Card */}
      <div className="md:col-span-2 row-span-2 bg-[#000B4A] rounded-[3rem] p-12 text-white flex flex-col justify-between relative overflow-hidden group">
        <div className="relative z-10 space-y-2">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-300">Skin Health Index</span>
          <h2 className="serif text-6xl italic font-normal">Optimized</h2>
        </div>
        <div className="relative z-10 flex items-end justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-400 w-[84%]" />
              </div>
              <span className="text-5xl font-black">84</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200/60 max-w-[180px]">Improvement of 12% since your last clinical scan.</p>
          </div>
          <button className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all group-hover:scale-110">
            <ArrowRight size={24} />
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Next Delivery */}
      <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group">
        <div className="space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Package size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Incoming Routine</p>
            <h3 className="text-xl font-bold text-slate-900 leading-tight">Order #LS-992</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-widest">
           <Zap size={14} /> In Transit
        </div>
      </div>

      {/* Hydration Metric */}
      <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Droplets size={20} />
          </div>
          <span className="text-xl font-black text-slate-900">72%</span>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">Dermal Hydration</p>
          <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
             <div className="h-full bg-blue-400 w-[72%]" />
          </div>
        </div>
      </div>

      {/* Active Product */}
      <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 transition-all">
         <div className="flex gap-4 items-center">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Active" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-0.5">Active Use</p>
              <p className="text-xs font-bold text-slate-900">Urea 10% Cream</p>
            </div>
         </div>
         <div className="flex items-center justify-between">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Day 14 / 30</p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900">Log Usage</button>
         </div>
      </div>

      {/* Quick Actions */}
      <div className="row-span-2 bg-slate-50 rounded-[3rem] border border-slate-100 p-8 flex flex-col gap-4">
         <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-900 mb-4">Quick Links</h4>
         {[
           { icon: <Activity size={16}/>, label: 'Full Bio-Analysis' },
           { icon: <Calendar size={16}/>, label: 'Refill Schedule' },
           { icon: <Heart size={16}/>, label: 'Clinical Wishlist' },
           { icon: <CreditCard size={16}/>, label: 'Saved Payments' },
           { icon: <User size={16}/>, label: 'Lab Consult' },
         ].map((item, idx) => (
           <button key={idx} className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-600 hover:shadow-lg transition-all text-left">
              <div className="text-slate-400">{item.icon}</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{item.label}</span>
           </button>
         ))}
      </div>

      {/* Routine Archway */}
      <div className="md:col-span-2 bg-white rounded-[3rem] border border-slate-100 p-10 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-10">
         <div className="md:w-1/3 text-center md:text-left space-y-4">
           <h3 className="serif text-3xl">Routine <span className="italic font-normal text-slate-400">Archway</span></h3>
           <p className="text-[10px] text-slate-500 font-medium leading-relaxed uppercase tracking-widest">Optimized morning and evening clinical layers.</p>
         </div>
         <div className="flex-1 flex gap-4 overflow-x-auto no-scrollbar py-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-shrink-0 w-24 h-32 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center gap-2 group hover:bg-indigo-50 transition-all">
                <span className="text-[10px] font-black text-indigo-300">Step 0{i}</span>
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                   <ShieldCheck size={18} className="text-indigo-600" />
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {[
        { id: 'LS-99281', date: 'Oct 24, 2024', status: 'In Transit', items: 2, total: 'RS. 3,450', img: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=200' },
        { id: 'LS-88120', date: 'Sep 12, 2024', status: 'Delivered', items: 1, total: 'RS. 1,098', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200' },
        { id: 'LS-77631', date: 'Aug 05, 2024', status: 'Delivered', items: 3, total: 'RS. 5,200', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=200' },
      ].map((order) => (
        <div key={order.id} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 group hover:border-indigo-200 transition-all">
          <div className="w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
            <img src={order.img} className="w-full h-full object-cover mix-blend-multiply" alt="Order" />
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
             <div className="space-y-1">
               <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Order ID</p>
               <p className="text-sm font-bold text-slate-900">{order.id}</p>
             </div>
             <div className="space-y-1">
               <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Date</p>
               <p className="text-sm font-bold text-slate-900">{order.date}</p>
             </div>
             <div className="space-y-1">
               <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Total</p>
               <p className="text-sm font-bold text-slate-900">{order.total}</p>
             </div>
             <div className="space-y-1">
               <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Status</p>
               <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${order.status === 'In Transit' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
                 {order.status}
               </span>
             </div>
          </div>
          <button className="p-4 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
             <ArrowRight size={20} />
          </button>
        </div>
      ))}
    </div>
  );

  const renderSkinProfile = () => (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
       <div className="bg-[#000B4A] rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="max-w-xl space-y-6 relative z-10">
             <h3 className="serif text-4xl">Dermal Analytics <span className="italic font-normal text-indigo-300">Report</span></h3>
             <p className="text-sm text-indigo-100/60 font-light leading-relaxed">Your profile is based on our high-resolution AI scan conducted on October 20th. We recommend a rescan every 30 days to track biological progression.</p>
             <button className="px-8 py-3 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-3">
               <Activity size={14} /> View Historical Scans
             </button>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <Droplets size={200} />
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Surface Texture', score: 91, desc: 'Pore refinement is optimal.' },
            { label: 'Hydration Depth', score: 72, desc: 'Critical moisture is localized in upper epidermis.' },
            { label: 'Elasticity', score: 84, desc: 'Collagen markers show strong structural integrity.' },
            { label: 'UV Stress', score: 15, desc: 'Minimal cellular damage from solar exposure.' },
          ].map(stat => (
            <div key={stat.label} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
               <div className="flex justify-between items-end mb-4">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">{stat.label}</h4>
                  <span className="text-2xl font-black text-indigo-600">{stat.score}%</span>
               </div>
               <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-indigo-600" style={{ width: `${stat.score}%` }} />
               </div>
               <p className="text-xs text-slate-400 font-medium italic">"{stat.desc}"</p>
            </div>
          ))}
       </div>
    </div>
  );

  const renderRoutines = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
       {[
         { name: 'Active Recovery', products: 4, date: 'Updated Yesterday', active: true },
         { name: 'Glow Architecture', products: 2, date: 'Saved Aug 12', active: false },
         { name: 'Minimalist Shield', products: 3, date: 'Saved Jul 05', active: false },
       ].map(r => (
         <div key={r.name} className={`p-10 rounded-[3rem] border transition-all ${r.active ? 'bg-white border-indigo-600 shadow-2xl shadow-indigo-100' : 'bg-slate-50 border-slate-100 hover:border-indigo-300'}`}>
            <div className="flex justify-between items-start mb-10">
               <div className="space-y-1">
                  <h3 className="serif text-3xl text-slate-900">{r.name}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.date}</p>
               </div>
               {r.active && <span className="bg-indigo-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Active</span>}
            </div>
            <div className="flex items-center gap-6">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=100`} className="w-full h-full object-cover" alt="p" />
                    </div>
                  ))}
               </div>
               <span className="text-xs font-bold text-slate-900">{r.products} Products</span>
            </div>
            <button className={`w-full mt-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${r.active ? 'bg-slate-900 text-white' : 'border border-slate-200 text-slate-400 hover:text-slate-900'}`}>
               {r.active ? 'Modify Active Routine' : 'Activate Routine'}
            </button>
         </div>
       ))}
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
       <div className="max-w-2xl space-y-12">
          <section className="space-y-8">
             <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 pb-4 border-b border-slate-50">Identity Settings</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                   <input type="text" defaultValue="Julian Brooks" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-indigo-500 outline-none" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Clinical Email</label>
                   <input type="email" defaultValue="julian.brooks@clinical.id" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-indigo-500 outline-none" />
                </div>
             </div>
          </section>

          <section className="space-y-8">
             <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 pb-4 border-b border-slate-50">Clinical Logistics</h3>
             <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <MapPin size={20} className="text-slate-400" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">Primary Delivery Address</p>
                        <p className="text-xs text-slate-400">72 High Definition Avenue, Silicon Valley, CA</p>
                      </div>
                   </div>
                   <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Edit</button>
                </div>
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <CreditCard size={20} className="text-slate-400" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">Visa ending in •••• 9920</p>
                        <p className="text-xs text-slate-400">Expires 12/26</p>
                      </div>
                   </div>
                   <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Edit</button>
                </div>
             </div>
          </section>

          <div className="flex justify-end pt-8">
             <button className="px-12 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl shadow-slate-200 hover:bg-indigo-600 transition-all">Save Profile Changes</button>
          </div>
       </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return renderOverview();
      case 'My Orders': return renderOrders();
      case 'Skin Profile': return renderSkinProfile();
      case 'Saved Routines': return renderRoutines();
      case 'Account Settings': return renderSettings();
      default: return renderOverview();
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Minimalist Profile Header */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 px-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-[2rem] bg-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                JB
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-600 rounded-full border-4 border-[#fafafa] flex items-center justify-center">
                 <ShieldCheck size={10} className="text-white" />
              </div>
            </div>
            <div>
              <h1 className="serif text-4xl text-slate-900 leading-none mb-2">Julian <span className="italic font-normal text-slate-400">Brooks</span></h1>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Premium Clinical Member since 2023</p>
            </div>
          </div>
          <div className="flex gap-4">
             <button className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                <Settings size={18} />
             </button>
             <button className="px-8 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-indigo-600 transition-all flex items-center gap-2">
                <LogOut size={14} /> Log Out
             </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-3 space-y-2">
            {navItems.map(item => (
              <button 
                key={item.label} 
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all
                ${activeTab === item.label ? 'bg-white text-indigo-600 shadow-xl shadow-slate-200/50' : 'text-slate-400 hover:text-slate-900 hover:bg-white'}`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <div className="mt-12 p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 hidden lg:block">
               <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-2">Pro Support</p>
               <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">Direct access to clinical specialists.</p>
               <button className="text-[9px] font-black uppercase tracking-widest text-indigo-600 border-b border-indigo-200">Connect Now</button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
