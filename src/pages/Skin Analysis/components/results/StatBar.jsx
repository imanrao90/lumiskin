function StatBar({ label, score }) {
    return (
        <div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                <span>{label}</span>
                <span>{score}%</span>
            </div>
            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${score}%` }} />
            </div>
        </div>
    )
}

export default StatBar