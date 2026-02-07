function SkinScanning({setStep}) {
  return (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6">
          <div className="relative w-full max-w-lg aspect-[3/4] rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className="w-full h-full object-cover scale-x-[-1]"
            />
            
            {/* Scan Overlays */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              {/* Oval Face Guide */}
              <div className="w-[80%] h-[75%] border-2 border-dashed border-indigo-400/50 rounded-[50%] animate-pulse" />
              
              {/* Moving Scan Bar */}
              <div 
                className="absolute left-0 right-0 h-1 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] z-20"
                style={{ top: `${scanProgress}%`, transition: 'top 0.05s linear' }}
              />

              {/* Data Points */}
              <div className="absolute top-10 left-10 space-y-2 opacity-70">
                <div className="text-[10px] text-indigo-400 font-mono">LAT: 37.7749</div>
                <div className="text-[10px] text-indigo-400 font-mono">LNG: -122.4194</div>
                <div className="text-[10px] text-indigo-400 font-mono">RECOGNITION: ACTIVE</div>
              </div>
              
              <div className="absolute bottom-10 right-10 flex items-center gap-3">
                <div className="text-[10px] text-white font-bold tracking-widest uppercase">Processing...</div>
                <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                   <div className="h-full bg-indigo-500" style={{ width: `${scanProgress}%` }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <h2 className="text-white text-xl font-medium mb-2">Analyzing Dermal Layers</h2>
             <p className="text-slate-500 text-sm">Please remain still while the AI maps your skin profile.</p>
          </div>

          <button 
            onClick={() => {stopCamera(); setStep('intro');}}
            className="mt-12 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
  )
}

export default SkinScanning