function DiagnosisHeader() {
    return (
        <header>
            <h2 className="serif text-5xl text-slate-900 mb-6 leading-tight">Your Clinical {' '} <span className="italic font-normal text-slate-400">Diagnosis</span></h2>
            <p className="text-slate-500 font-light leading-relaxed max-w-xl">
                Based on your scan, you have <strong>Balanced to Dry skin</strong>{''} with moderate sensitivity. We recommend a barrier-supporting routine focusing on Ceramides and mild Hyaluronic Acid.
            </p>
        </header>
    )
}

export default DiagnosisHeader