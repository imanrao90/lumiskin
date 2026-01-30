
import React from 'react';
import { Truck, Calendar, ShieldCheck, Gift } from 'lucide-react';

const CustomerServiceSection = () => {
  const benefits = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      subtitle: "On all orders above ₹500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Result in 14 Days",
      subtitle: "Clinically proven timeline"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Dermatologist Recommended",
      subtitle: "Tested for all skin types"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Free Product Samples",
      subtitle: "Complimentary with every order"
    }
  ];

  return (
    <section className="w-full bg-white border-y border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="mb-4 p-3 rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceSection;
