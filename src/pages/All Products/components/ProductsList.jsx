import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard/ProductCard'

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <div className="flex flex-col gap-12 w-full max-w-3xl mx-auto px-4">
      {products.map((product) => (
        <div key={product.id} className="w-full">
           <ProductCard 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
