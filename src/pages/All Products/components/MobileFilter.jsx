import { X } from 'lucide-react';
import { useAppContext } from '../../../context/AppContext';

function MobileFilter() {
    const {selectedCategories, setSelectedCategories, selectedConcerns, setSelectedConcerns, setIsMobileFilterOpen, isMobileFilterOpen} = useAppContext()

    const filterOptions = {
        categories: ["Skin Care", "Hair Care", "Sun Protection", "Bundles"],
        concerns: ["Acne", "Dark Spots", "Dryness", "Aging", "Haircare"]
    };

    const toggleFilter = (list, setList, item) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  return (
    <div>
        {isMobileFilterOpen === true && <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="relative w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col animate-slide-left">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-sm font-black tracking-widest uppercase">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-2"><X size={20}/></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-10">
               {/* Categories */}
               <div>
                  <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-900 mb-6 pb-2 border-b border-slate-200">Category</h3>
                  <div className="space-y-4">
                    {filterOptions.categories.map(cat => (
                      <label key={cat} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 border-slate-300 rounded text-indigo-600 focus:ring-indigo-500" 
                          onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                          checked={selectedCategories.includes(cat)}
                        />
                        <span className="ml-3 text-sm text-slate-600 font-medium">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Concerns */}
                <div>
                  <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-900 mb-6 pb-2 border-b border-slate-200">Concern</h3>
                  <div className="space-y-4">
                    {filterOptions.concerns.map(con => (
                      <label key={con} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 border-slate-300 rounded text-indigo-600 focus:ring-indigo-500" 
                          onChange={() => toggleFilter(selectedConcerns, setSelectedConcerns, con)}
                          checked={selectedConcerns.includes(con)}
                        />
                        <span className="ml-3 text-sm text-slate-600 font-medium">{con}</span>
                      </label>
                    ))}
                  </div>
                </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex gap-4">
              <button 
                onClick={() => {setSelectedCategories([]); setSelectedConcerns([]);}}
                className="flex-1 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 rounded-full"
              >
                Clear
              </button>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>}
        </div>
  )
}

export default MobileFilter