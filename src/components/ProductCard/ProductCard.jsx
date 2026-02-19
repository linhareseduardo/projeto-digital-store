import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, category, price, priceDiscount, badge }) => {
  const formatPrice = (val) =>
    val?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        {badge && <span className="product-card__badge">{badge}</span>}
        <img
          src={image}
          alt={name}
          className="product-card__image"
          width={292}
          height={321}
        />
      </div>
      <div className="product-card__info">
        {category && <span className="product-card__category">{category}</span>}
        <p className="product-card__name">{name}</p>
        <div className="product-card__pricing">
          <span className={`product-card__price ${priceDiscount ? 'product-card__price--old' : ''}`}>
            {formatPrice(price)}
          </span>
          {priceDiscount && (
            <span className="product-card__price-discount">{formatPrice(priceDiscount)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
