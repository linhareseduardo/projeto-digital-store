import React, { useState, useEffect } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './HeroBanner.css';

const ornamentDesktopImage = '/hero-pattern-desktop.png';
const ornamentMobileImage = '/hero-pattern-mobile.png';

const slides = [
  {
    tag: 'Melhores ofertas personalizadas',
    title: 'Queima de\nstoque Nike 🔥',
    description:
      'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    btnText: 'Ver Ofertas',
    image: '/hero-shoe.png',
    imageRotation: '-19.34deg',
  },
  {
    tag: 'Melhores ofertas personalizadas',
    title: 'Super oferta\nAdventure TrailX',
    description:
      'O Mizuno Adventure TrailX é um ícone do estilo casual, com seu design clássico e materiais de alta qualidade. Perfeito para quem busca estilo e conforto.',
    btnText: 'Ver Oferta',
    image: '/hero-shoe.png',
    imageRotation: '-15deg',
  },
  {
    tag: 'Melhores ofertas personalizadas',
    title: 'Promoção\nImperdível!!!',
    description:
      'O Tênis Nike Retrô ClassicSport é conhecido por seu amortecimento responsivo, garantindo conforto e estilo para o seu dia a dia, com um toque esportivo.',
    btnText: 'Ver Oferta',
    image: '/hero-shoe.png',
    imageRotation: '-12deg',
  },
  {
    tag: 'Melhores ofertas personalizadas',
    title: 'Air Jordan\nedição especial',
    description:
      'O Air Jordan combina design lendário com conforto superior. Uma peça de coleção que une estilo e performance em cada passo.',
    btnText: 'Ver Oferta',
    image: '/hero-shoe.png',
    imageRotation: '-10deg',
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState({});

  // Pré-carrega todas as imagens ao montar
  useEffect(() => {
    slides.forEach((s, i) => {
      const img = new window.Image();
      img.onload = () => setLoaded(prev => ({ ...prev, [i]: true }));
      img.src = s.image;
    });
  }, []);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 500);
  };

  const goPrev = () => {
    const prev = current > 0 ? current - 1 : slides.length - 1;
    goTo(prev);
  };
  const goNext = () => {
    const next = current < slides.length - 1 ? current + 1 : 0;
    goTo(next);
  };

  // Autoplay com setCurrent funcional — não depende de closure estanque
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setCurrent(c => {
        setTimeout(() => setAnimating(false), 500);
        return c < slides.length - 1 ? c + 1 : 0;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero-banner">
      <img src={ornamentDesktopImage} alt="" className="hero-banner__ornament hero-banner__ornament--desktop" aria-hidden="true" />
      <img src={ornamentMobileImage} alt="" className="hero-banner__ornament hero-banner__ornament--mobile" aria-hidden="true" />

      {/* Conteúdo lado esquerdo */}
      <div className={`hero-banner__content ${animating ? 'hero-banner__content--fade' : ''}`}>
        <span className="hero-banner__tag">{slide.tag}</span>
        <h1 className="hero-banner__title">
          {slide.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < slide.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero-banner__description">{slide.description}</p>
        <button className="hero-banner__btn">{slide.btnText}</button>
      </div>

      {/* Imagem do tênis lado direito */}
      <div className="hero-banner__image-wrap">
        {/* Wrapper de rotação separado da animação */}
        <div key={current} className="hero-banner__image-rotate hero-banner__image--enter" style={{ transform: `rotate(${slide.imageRotation})` }}>
          <img
            src={slide.image}
            alt="Produto em destaque"
            className="hero-banner__image"
            style={{ opacity: loaded[current] ? 1 : 0, transition: 'opacity 0.2s' }}
          />
        </div>
      </div>

      {/* Seta esquerda */}
      <button className="hero-banner__arrow hero-banner__arrow--left" onClick={goPrev} aria-label="Anterior">
        <img src={arrowLeft} alt="Anterior" />
      </button>

      {/* Seta direita */}
      <button className="hero-banner__arrow hero-banner__arrow--right" onClick={goNext} aria-label="Próximo">
        <img src={arrowRight} alt="Próximo" />
      </button>

      {/* Dots de navegação */}
      <div className="hero-banner__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-banner__dot ${i === current ? 'hero-banner__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
