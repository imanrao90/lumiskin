import { Filter, Grid, List } from 'lucide-react'
import { useAppContext } from '../../../context/AppContext';

function Toolbar() {
    const {setIsMobileFilterOpen, sortBy, setSortBy, filteredProducts} = useAppContext()

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                    <Filter size={14} /> Filter
                </button>
                <p className="text-xs text-slate-400 font-medium tracking-wide">
                    Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> Products
                </p>
            </div>

            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sort:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-transparent border-none text-xs font-bold text-slate-900 focus:ring-0 cursor-pointer uppercase tracking-widest"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
                <div className="flex items-center border border-slate-200 rounded-full overflow-hidden">
                    <button className="p-2 bg-white text-indigo-600 border-r border-slate-100"><Grid size={14} /></button>
                    <button className="p-2 bg-white text-slate-400 hover:text-slate-600"><List size={14} /></button>
                </div>
            </div>
        </div>
    )
}

export default Toolbar