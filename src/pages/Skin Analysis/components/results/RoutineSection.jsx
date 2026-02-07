import RoutineCard from './RoutineCard'

function RoutineSection() {
    const routine = [
        { step: "01 Cleanse", name: "Mild Dermal Cleanser", reason: "Removes impurities without stripping essential lipids." },
        { step: "02 Target", name: "Vitamin C15 Serum", reason: "High-potency antioxidant protection against UV damage." },
        { step: "03 Protect", name: "Mineral SPF 50+", reason: "Essential barrier to prevent hyperpigmentation." }
    ]
    return (
        <div className="space-y-8">
            <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-900 border-b border-slate-100 pb-4">Prescribed Morning Routine</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {routine.map((item, i) => (
                    <RoutineCard key={i} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default RoutineSection