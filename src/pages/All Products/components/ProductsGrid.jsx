import { ShoppingCart, Star } from 'lucide-react';
import { useAppContext } from '../../../context/AppContext';

function ProductsGrid() {
    const {setSelectedCategories, setSelectedConcerns, filteredProducts} = useAppContext()

    return (
        <div>
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2">
                            <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                                />
                                {product.isNew && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-indigo-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-lg">New</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                    <button className="w-full py-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors">
                                        <ShoppingCart size={14} /> Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 text-center">
                                <div className="flex justify-center items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
                                    ))}
                                    <span className="text-[10px] text-slate-400 ml-1">({product.reviews})</span>
                                </div>

                                <h3 className="text-sm font-bold text-slate-800 mb-4 leading-tight min-h-[40px] px-2 uppercase tracking-wide group-hover:text-indigo-600 transition-colors">
                                    {product.name}
                                </h3>

                                <div className="relative overflow-hidden bg-slate-50 py-3 rounded-xl transition-all duration-300 group-hover:bg-[#000B4A]">
                                    <span className="text-slate-900 text-xs font-bold tracking-widest group-hover:text-white transition-colors">RS. {product.price.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-32 text-center">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Filter size={32} className="text-slate-300" />
                    </div>
                    <h3 className="serif text-2xl text-slate-900 mb-2">No matches found</h3>
                    <p className="text-slate-500 font-light mb-8">Try adjusting your filters to find what you're looking for.</p>
                    <button
                        onClick={() => { setSelectedCategories([]); setSelectedConcerns([]); }}
                        className="px-8 py-3 bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase rounded-full"
                    >
                        Reset All Filters
                    </button>
                </div>
            )
            }
        </div>
    )
}

export default ProductsGrid