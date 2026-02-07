
import React from 'react';
import RatingStars from './RatingStars';
import PriceTag from './PriceTag';

const ProductInfo = ({ product, selectedVariant, onVariantChange }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-normal text-stone-900 tracking-tight leading-tight">
            {product.name}
          </h3>
          <RatingStars rating={product.rating} count={product.reviewsCount} />
        </div>
        <PriceTag 
          price={product.price} 
          originalPrice={product.originalPrice} 
          className="shrink-0 pt-1"
        />
      </div>
      
      <p className="text-[13px] text-stone-400 leading-snug line-clamp-2">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {product.variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onVariantChange(variant)}
            className={`px-3 py-1.5 rounded text-[10px] font-medium tracking-wide border transition-all duration-200 ${
              selectedVariant.id === variant.id 
              ? 'border-stone-900 bg-stone-900 text-white' 
              : 'border-stone-100 bg-transparent text-stone-400 hover:border-stone-200'
            }`}
          >
            {variant.id === 'v1' ? 'FULL' : variant.id === 'v2' ? 'TRAVEL' : 'REFILL'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
