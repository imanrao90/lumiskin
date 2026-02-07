import React from 'react'

function SecondaryButton({text, onClick}) {
    return (
        <button
            onClick={onClick}
            className="px-12 py-5 border-2 border-slate-100 text-slate-900 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-slate-50 transition-all cursor-pointer"
        >
           {text}
        </button>
    )
}

export default SecondaryButton