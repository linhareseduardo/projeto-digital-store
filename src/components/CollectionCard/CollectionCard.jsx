import React from 'react';
import './CollectionCard.css';

const CollectionCard = ({ title, badge, image, imageTransform, btnText = 'Comprar' }) => {
  return (
    <div className="collection-card">
      <div className="collection-card__content">
        {badge && (
          <span className="collection-card__badge">{badge}</span>
        )}
        <h3 className="collection-card__title">
          {title.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h3>
        <button className="collection-card__btn">{btnText}</button>
      </div>
      <div className="collection-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="collection-card__image"
          style={{ transform: imageTransform }}
        />
      </div>
    </div>
  );
};

export default CollectionCard;
