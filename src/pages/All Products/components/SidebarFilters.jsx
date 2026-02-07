import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';

const filterOptions = {
categories: ["Skin Care", "Hair Care", "Sun Protection", "Bundles"],
concerns: ["Acne", "Dark Spots", "Dryness", "Aging", "Haircare"]
};

function SidebarFilters() {
    const navigate = useNavigate()
    const {selectedCategories, setSelectedCategories, setSelectedConcerns, selectedConcerns} = useAppContext()

    const toggleFilter = (list, setList, item) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

    return (
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-10">
            <div>
                <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-900 mb-6 pb-2 border-b border-slate-200">Category</h3>
                <div className="space-y-3">
                    {filterOptions.categories.map(cat => (
                        <label key={cat} className="flex items-center group cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden"
                                onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                                checked={selectedCategories.includes(cat)}
                            />
                            <div className={`w-4 h-4 border rounded mr-3 flex items-center justify-center transition-all 
                      ${selectedCategories.includes(cat) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 group-hover:border-indigo-400'}`}>
                                {selectedCategories.includes(cat) && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                            </div>
                            <span className={`text-sm tracking-wide transition-colors ${selectedCategories.includes(cat) ? 'text-indigo-600 font-bold' : 'text-slate-500 group-hover:text-slate-900'}`}>{cat}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-900 mb-6 pb-2 border-b border-slate-200">Skin Concern</h3>
                <div className="space-y-3">
                    {filterOptions.concerns.map(con => (
                        <label key={con} className="flex items-center group cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden"
                                onChange={() => toggleFilter(selectedConcerns, setSelectedConcerns, con)}
                                checked={selectedConcerns.includes(con)}
                            />
                            <div className={`w-4 h-4 border rounded mr-3 flex items-center justify-center transition-all 
                      ${selectedConcerns.includes(con) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 group-hover:border-indigo-400'}`}>
                                {selectedConcerns.includes(con) && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                            </div>
                            <span className={`text-sm tracking-wide transition-colors ${selectedConcerns.includes(con) ? 'text-indigo-600 font-bold' : 'text-slate-500 group-hover:text-slate-900'}`}>{con}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2">Expert Advice</p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">Not sure which clinical formula is right for your skin type?</p>
                    <button onClick={() => navigate('/skin-analysis')} className="text-[10px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-900 hover:text-indigo-600 hover:border-indigo-600 transition-all">Take Skin Quiz</button>
                </div>
            </div>
        </aside>
    )
}

export default SidebarFilters