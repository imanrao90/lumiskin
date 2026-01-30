
import React, { useState, useEffect } from 'react';
import { Play, X, Star } from 'lucide-react';

// const CelebrityVideo = {
//   id: string;
//   name: string;
//   role: string;
//   youtubeId: string;
//   thumbnail: string;
// }
const video = [
    {
  id: '1',
  name: "Elena Rodriguez",
  role: "Award-winning Actress",
  youtubeId: "LW5cJMa_YVY",
  startTime: 5,
  thumbnail:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
},
]

const videos = [
   {
  id: '1',
  name: "Elena Rodriguez",
  role: "Award-winning Actress",
  youtubeId: "LW5cJMa_YVY",
  startTime: 5,
  thumbnail:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
},

  {
    id: '2',
    name: "Julian Brooks",
    role: "Fashion Model",
    youtubeId: "ScMzIvxBSi4", // Example ID
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    name: "Sophia Chen",
    role: "Lifestyle Visionary",
    youtubeId: "q7_j_Xp_O3k", // Example ID
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
  }
];

const CelebrityReviewsSection = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedVideoId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedVideoId]);

  return (
    <section className="w-full py-24 bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-20">
          <div className="flex justify-center items-center gap-3">
            <span className="w-12 h-[1px] bg-amber-400"></span>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-amber-600">
              The Spotlight Series
            </span>
            <span className="w-12 h-[1px] bg-amber-400"></span>
          </div>
          <h2 className="serif text-4xl md:text-5xl text-slate-900 leading-tight">
            Celebrity <span className="italic font-normal text-slate-400 text-3xl md:text-4xl">Masterclass</span> Reviews
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed">
            See why the world's most influential voices trust LumiSkin for their high-definition ready results.
          </p>
        </header>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedVideoId(video.youtubeId)}
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl shadow-slate-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <img 
                  src={video.thumbnail} 
                  alt={video.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay UI */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{video.name}</h3>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-widest">{video.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                +10k
              </div>
           </div>
           <p className="text-slate-400 text-sm font-light italic text-center md:text-right">
             "The most intuitive skincare routine I've ever used." — <span className="font-semibold text-slate-600">Vogue Review</span>
           </p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideoId && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/90 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedVideoId(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedVideoId(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
             <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}?start=${video.startTime}&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CelebrityReviewsSection;
