function PrimaryButton({text, onClick, icon}) {
  return (
    <button 
        onClick={onClick}
        className={`px-12 py-5 bg-slate-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-slate-950 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200 cursor-pointer`}
    >
        {icon}{text}
    </button>
  )
}

export default PrimaryButton