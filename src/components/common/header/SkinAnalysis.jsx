
import React from 'react';
import { Scan } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SkinAnalysis = () => {
  const navigate = useNavigate()
  return (
    <button 
      onClick={() => navigate('/skin-analysis')}
      className="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 hover:border-indigo-600 transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <Scan size={16} className="text-slate-600 group-hover:text-indigo-600" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
      </div>
      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 group-hover:text-indigo-600">
        Skin AI Analysis
      </span>
    </button>
  );
};

export default SkinAnalysis;
