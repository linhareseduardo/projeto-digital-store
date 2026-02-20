import React from 'react';
import starIcon from '../../assets/star-icon.svg';
import './BuyBox.css';

const BuyBox = ({
  name,
  tags,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  descriptionTitle,
  description,
  children,
}) => {
  const formatPrice = (val) =>
    val?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="buybox">
      {name && <h1 className="buybox__name">{name}</h1>}

      {/* Tags */}
      {(tags || reference) && (
        <div className="buybox__tags">
          {tags && tags.map((tag) => (
            <span key={tag} className="buybox__tag">{tag}</span>
          ))}
          {reference && <span className="buybox__tag">{reference}</span>}
        </div>
      )}

      {/* Estrelas e avaliações */}
      {(stars !== undefined || rating !== undefined) && (
        <div className="buybox__meta">
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
      )}

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

      {(descriptionTitle || description) && (
        <div className="buybox__description-block">
          {descriptionTitle && (
            <p className="buybox__description-title">{descriptionTitle}</p>
          )}
          {description && <p className="buybox__description">{description}</p>}
        </div>
      )}

      {children && <div className="buybox__options">{children}</div>}

      <button className="buybox__buy-btn">COMPRAR</button>
    </div>
  );
};

export default BuyBox;
