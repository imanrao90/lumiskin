
import { useState } from 'react';
import { Star, ArrowRight, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  "New Launch", "Dark Spots", "Best Sellers", "Acne", "Sun Protection", "Dryness", "Haircare"
];

const products = [
  {
    id: '1',
    name: "Dermive Urea Economy Pack",
    price: "RS. 2,250",
    category: "New Launch",
    discount: "10% Off",
    rating: 5,
    reviews: 3,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: '2',
    name: "Clarevo Salicylic Acid Facewash",
    price: "RS. 1,098",
    category: "Acne",
    discount: "Free Sticker",
    rating: 4.8,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca4f8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: '3',
    name: "Brightening Coffee Soap",
    price: "RS. 480",
    category: "Dark Spots",
    discount: "20% Off",
    rating: 4.9,
    reviews: 133,
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: '4',
    name: "Zero Hairfall Duo",
    price: "RS. 2,466",
    category: "Haircare",
    discount: "5% Off",
    rating: 5,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=600"
  }
];

const CategoryProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("New Launch");
  const navigate = useNavigate()

  return (
    <section className="w-full py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <header className="text-center space-y-4 mb-16 uppercase">
          <p className="serif text-4xl md:text-3xl text-slate-900 tracking-tight">
            Shop By <span className="italic font-normal text-slate-400">Category</span>
          </p>
          <div className="w-16 h-[2px] bg-indigo-600 mx-auto"></div>
        </header>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border
                ${activeCategory === cat 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-600 hover:text-indigo-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#E6FF00] text-slate-900 text-[9px] font-black uppercase tracking-tighter px-3 py-3 rounded-full shadow-lg flex items-center justify-center text-center leading-none aspect-square w-12 border border-black/5">
                    {product.discount}
                  </div>
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <button className="w-full py-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors">
                    <ShoppingCart size={14} />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <div className="flex justify-center items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-200"} 
                    />
                  ))}
                  <span className="text-[10px] text-slate-400 ml-1">({product.reviews})</span>
                </div>
                
                <h3 className="text-sm font-bold text-slate-800 mb-4 leading-tight min-h-[40px] px-2 uppercase tracking-wide">
                  {product.name}
                </h3>

                <button className="w-full group/btn relative overflow-hidden bg-[#000B4A] py-4 rounded-xl transition-all duration-300 active:scale-95">
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">Shop Now</span>
                    <span className="text-indigo-200 text-xs font-medium tracking-wide">{product.price}</span>
                  </div>
                  <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => navigate('/shop-all')}
            className="group px-12 py-4 border-2 border-slate-900 text-slate-900 text-[11px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-4"
          >
            View All Clinical Range
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryProductsSection;
