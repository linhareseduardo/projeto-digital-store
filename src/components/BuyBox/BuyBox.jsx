import React from 'react';
import starIcon from '../../assets/star-icon.svg';
import './BuyBox.css';

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  const formatPrice = (val) =>
    val?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="buybox">
      {name && <h1 className="buybox__name">{name}</h1>}

      <div className="buybox__meta">
        {reference && <span className="buybox__reference">Ref: {reference}</span>}

        {stars !== undefined && (
          <span className="buybox__stars">
            {stars}
            <img src={starIcon} alt="estrela" className="buybox__star-icon" />
          </span>
        )}

        {rating !== undefined && (
          <span className="buybox__rating">({rating} avaliações)</span>
        )}
      </div>

      <div className="buybox__pricing">
        {priceDiscount ? (
          <>
            <span className="buybox__price buybox__price--old">{formatPrice(price)}</span>
            <span className="buybox__price-discount">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="buybox__price">{formatPrice(price)}</span>
        )}
      </div>

      {description && <p className="buybox__description">{description}</p>}

      {children && <div className="buybox__options">{children}</div>}

      <button className="buybox__buy-btn">COMPRAR</button>
    </div>
  );
};

export default BuyBox;
