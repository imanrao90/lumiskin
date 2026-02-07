import PrimaryButton from "../../../../components/common/PrimaryButton"

function BundleCTA() {
    return (
        <div className="bg-[#E6FF00] p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h3 className="serif text-3xl text-slate-900 mb-2">The Diagnostics Bundle</h3>
                <p className="text-sm text-slate-800 opacity-70">All your recommended products with a 20% profile discount.</p>
            </div>
            <PrimaryButton text="Unlock Bundle Price"/>
        </div>
    )
}

export default BundleCTA