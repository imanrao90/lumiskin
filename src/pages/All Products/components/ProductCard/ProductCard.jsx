
import React, { useState } from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group flex flex-col h-full bg-transparent transition-all duration-300">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <ProductImage 
          src={selectedVariant.image} 
          alt={product.name}
          isFavorite={isFavorite}
          onFavoriteToggle={() => setIsFavorite(!isFavorite)}
          badge={product.originalPrice ? "SALE" : undefined}
        />
        
        {/* Quick Add overlay appearing on hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
          <button 
            onClick={() => onAddToCart(selectedVariant.id)}
            className="w-full bg-white/90 backdrop-blur text-stone-900 py-3 rounded text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-colors shadow-xl"
          >
            Quick Add
          </button>
        </div>
      </div>

      <ProductInfo 
        product={product}
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
      />
    </div>
  );
};

export default ProductCard;
