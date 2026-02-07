import { ArrowRight } from 'lucide-react'
import React from 'react'

function RoutineCard({step, name, reason}) {
    return (
        <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-4 block">{step}</span>
            <h4 className="text-lg font-bold text-slate-900 mb-2">{name}</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">{reason}</p>
            <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                Shop Product <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    )
}

export default RoutineCard