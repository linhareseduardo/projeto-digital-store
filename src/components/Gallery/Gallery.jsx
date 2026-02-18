import React, { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './Gallery.css';

const Gallery = ({ images = [], width, height, radius, showThumbs, className }) => {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    if (current < images.length - 1) setCurrent(current + 1);
  };

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const slideStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '400px',
    borderRadius: radius || '0',
  };

  return (
    <div className={`gallery ${className || ''}`}>
      <div className="gallery__slide" style={slideStyle}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Slide ${i + 1}`}
            className="gallery__image"
            style={{
              borderRadius: radius || '0',
              transform: `translateX(${(i - current) * 100}%)`,
            }}
          />
        ))}

        <button
          className="gallery__arrow gallery__arrow--left"
          onClick={goPrev}
          disabled={current === 0}
          aria-label="Anterior"
        >
          <img src={arrowLeft} alt="Anterior" />
        </button>

        <button
          className="gallery__arrow gallery__arrow--right"
          onClick={goNext}
          disabled={current === images.length - 1}
          aria-label="Próximo"
        >
          <img src={arrowRight} alt="Próximo" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Miniatura ${i + 1}`}
              className={`gallery__thumb ${i === current ? 'gallery__thumb--active' : ''}`}
              style={{ borderRadius: radius || '0' }}
              onClick={() => setCurrent(i)}
              width={117}
              height={95}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
