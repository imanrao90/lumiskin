const PriceTag = ({ price, originalPrice, className = "" }) => {
  return (
    <div className={`flex flex-col items-end ${className}`}>
      <span className="text-xl font-light text-stone-900">
        ${price.toLocaleString()}
      </span>
      {originalPrice && (
        <span className="text-xs text-stone-400 line-through">
          ${originalPrice.toLocaleString()}
        </span>
      )}
    </div>
  );
};

export default PriceTag;
