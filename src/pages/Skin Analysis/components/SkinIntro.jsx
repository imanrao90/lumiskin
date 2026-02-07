import { Camera, Droplets, Scan, Shield, Sparkles, Sun } from 'lucide-react';
import { useRef, useState } from 'react'
import Button from '../../../components/common/PrimaryButton';
import PrimaryButton from '../../../components/common/PrimaryButton';
import SecondaryButton from '../../../components/common/SecondaryButton';

function SkinIntro({ setStep }) {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCameraActive(true);
        setStep('scanning');
      }
    } catch (err) {
      console.error("Camera access denied", err);
      // Fallback to questions if camera fails
      setStep('questions');
    }
  };

  return (
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Scan size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="serif text-5xl md:text-6xl text-slate-900 mb-6">
            Clinical <span className="italic font-normal text-slate-400">Skin AI</span>
          </h1>
          <p className="text-slate-500 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Utilize our proprietary computer vision technology to analyze 14 unique markers of skin health. Receive a dermatologist-grade regimen in under 60 seconds.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Droplets />, title: "Hydration", desc: "Moisture retention levels" },
              { icon: <Sparkles />, title: "Clarity", desc: "Pore & texture analysis" },
              { icon: <Sun />, title: "UV Damage", desc: "Invisible pigmentation markers" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50">
                <div className="text-indigo-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton text="Start face scan" icon={<Camera size={16}/>} onClick={startCamera}/>
            <SecondaryButton text='Manual Assessment' onClick={() => setStep('questions')}/>
          </div>
          <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield size={12} /> Privacy Guaranteed: Photos are processed locally and never stored.
          </p>
        </div>
  )
}

export default SkinIntro