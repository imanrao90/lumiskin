function HealthScoreCard({ scores }) {
    const average = Math.round(
        (scores.hydration +
            scores.clarity +
            scores.sensitivity +
            scores.uvResistance) / 4
    )
    return (
        <div className="p-10 rounded-[3rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-white/70">Health Score</p>
            <div className="flex items-end gap-2 mb-2">
                <span className="text-8xl font-black leading-none">{average}</span>
                <span className="text-xl font-bold mb-2">/100</span>
            </div>
            <p className="text-sm font-medium text-indigo-100">Optimized Profile</p>
        </div>
    )
}

export default HealthScoreCard