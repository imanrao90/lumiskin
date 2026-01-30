
import React from 'react';
import { Star, Quote } from 'lucide-react';

// interface Testimonial {
//   id: string;
//   name: string;
//   concern: string;
//   beforeImage: string;
//   afterImage: string;
//   quote: string;
//   duration: string;
//   rating: number;
// }

const testimonials = [
  {
    id: '1',
    name: "Sarah Jenkins",
    concern: "Severe Hyper-pigmentation",
    beforeImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=400",
    quote: "The Dermive range completely transformed my skin texture. My dark spots faded significantly within weeks.",
    duration: "12 Weeks",
    rating: 5
  },
  {
    id: '2',
    name: "Michael Chen",
    concern: "Active Acne & Scarring",
    beforeImage: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    quote: "Finally found a routine that doesn't strip my skin. The Salicylic Acid wash is a literal life changer.",
    duration: "8 Weeks",
    rating: 5
  },
  {
    id: '3',
    name: "Amara Okoro",
    concern: "Dullness & Dehydration",
    beforeImage: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=400",
    quote: "My skin has never looked more radiant. The 'glass skin' effect is actually achievable with these products.",
    duration: "6 Weeks",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="text-center space-y-4 mb-20">
          <div className="flex justify-center items-center gap-1">
            <span className="w-12 h-[1px] bg-indigo-600"></span>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-indigo-600">
              Clinical Proof
            </span>
            <span className="w-12 h-[1px] bg-indigo-600"></span>
          </div>
          <h2 className="serif text-4xl md:text-3xl text-slate-900 leading-tight">
            Real People, <span className="italic font-normal text-slate-400">Proven Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-light leading-relaxed">
            Witness the transformative power of LumiSkin formulas through our high-definition clinical case studies.
          </p>
        </header>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="group flex flex-col">
              
              {/* Before/After Comparison */}
              <div className="relative flex gap-1 mb-8 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-100 border border-slate-50 aspect-[16/10]">
                {/* Before Side */}
                <div className="relative flex-1 group/before overflow-hidden">
                  <img src={t.beforeImage} alt="Before" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-white/10">
                      Before
                    </span>
                  </div>
                </div>

                {/* After Side */}
                <div className="relative flex-1 group/after overflow-hidden">
                  <img src={t.afterImage} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-indigo-600 text-white text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full shadow-lg">
                      After
                    </span>
                  </div>
                </div>
                
                {/* Comparison Divider Overlay */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/50 backdrop-blur-sm z-10" />
              </div>

              {/* Text Content */}
              <div className="px-4 text-center lg:text-left flex-1 flex flex-col">
                <div className="flex justify-center lg:justify-start items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-4 w-12 h-12 text-slate-50 opacity-50 z-0" />
                  <p className="relative z-10 text-slate-600 italic font-light leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-auto">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">{t.name}</h4>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 mt-1">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-tighter bg-indigo-50 px-2 py-0.5 rounded">
                      {t.concern}
                    </span>
                    <span className="hidden sm:block text-slate-200">•</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Result in {t.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-24 py-12 border-y border-slate-50 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-1">98%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Customer Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-1">15k+</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Cases Resolved</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-1">2.4x</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Faster Regeneration</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-1">100%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Clinical Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
