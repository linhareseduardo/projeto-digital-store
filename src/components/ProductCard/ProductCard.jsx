import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  const formatPrice = (val) =>
    val?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          width={292}
          height={321}
        />
      </div>
      <div className="product-card__info">
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
