const ProductImage = ({ src, alt, isFavorite, onFavoriteToggle, badge }) => {
  return (
    <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none" />

      {badge && (
        <span className="absolute top-6 left-6 px-3 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold tracking-widest uppercase rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

export default ProductImage;
