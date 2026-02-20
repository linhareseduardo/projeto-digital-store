import React, { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ options = [], shape = 'square', type = 'text', radius, defaultSelected }) => {
  const [selected, setSelected] = useState(defaultSelected !== undefined ? defaultSelected : null);

  return (
    <div className="product-options">
      {options.map((option, i) => {
        const isSelected = selected === i;
        const isCircle = shape === 'circle';
        const isColor = type === 'color';

        const style = {
          ...(isColor ? { backgroundColor: option } : {}),
          ...((!isCircle && radius) ? { borderRadius: radius } : {}),
        };

        return (
          <button
            key={i}
            className={`product-options__item product-options__item--${shape} ${isSelected ? 'product-options__item--selected' : ''}`}
            style={style}
            onClick={() => setSelected(i)}
            aria-label={isColor ? `Cor ${option}` : option}
          >
            {!isColor && <span className="product-options__text">{option}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;
