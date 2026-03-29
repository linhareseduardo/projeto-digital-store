import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Section from '../../components/Section/Section';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import ProductListing from '../../components/ProductListing/ProductListing';
import './HomePage.css';
import categoryCamisetas from '../../assets/category-camisetas.svg';
import categoryCalcas from '../../assets/category-calcas.svg';
import categoryBones from '../../assets/category-bones.svg';
import categoryHeadphones from '../../assets/category-headphones.svg';
import categoryTenis from '../../assets/category-tenis.svg';

const categoryIcons = [
  {
    label: 'Camisetas',
    icon: categoryCamisetas,
    href: '/produtos?categoria=camisetas',
  },
  {
    label: 'Calças',
    icon: categoryCalcas,
    href: '/produtos?categoria=calcas',
  },
  {
    label: 'Bonés',
    icon: categoryBones,
    href: '/produtos?categoria=bones',
  },
  {
    label: 'Headphones',
    icon: categoryHeadphones,
    href: '/produtos?categoria=headphones',
  },
  {
    label: 'Tênis',
    icon: categoryTenis,
    href: '/produtos?categoria=tenis',
  },
];

const collections = [
  {
    title: 'Novo drop\nSupreme',
    badge: '30% OFF',
    image: '/collection-1.png',
    imageTransform: 'rotate(-20.78deg)',
  },
  {
    title: 'Coleção\nAdidas',
    badge: '30% OFF',
    image: '/collection-2.png',
    imageTransform: 'none',
  },
  {
    title: 'Novo\nBeats Bass',
    badge: '30% OFF',
    image: '/collection-3.png',
    imageTransform: 'rotate(30deg)',
  },
];

const KSWISS_IMG = '/produc-image-2.jpeg';

const featuredProducts = [
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100, badge: '30% OFF' },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100, badge: '30% OFF' },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
];

const HomePage = () => {
  return (
    <Layout>
      {/* 5.1 - Hero Banner */}
      <HeroBanner />

      {/* 5.2 - Coleções em destaque */}
      <Section title="Coleções em destaque" titleAlign="left">
        <div className="home__collections">
          {collections.map((col) => (
            <CollectionCard
              key={col.title}
              title={col.title}
              badge={col.badge}
              image={col.image}
              imageTransform={col.imageTransform}
            />
          ))}
        </div>
      </Section>

      {/* 5.2.5 - Filtro de categorias */}
      <Section title="Categorias" titleAlign="center">
        <div className="home__categories">
          {categoryIcons.map((cat) => (
            <Link key={cat.label} to={cat.href} className="home__category-item">
              <div className="home__category-icon">
                <img src={cat.icon} alt={cat.label} width={64} height={64} className="home__category-icon-img" />
              </div>
              <span className="home__category-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 5.3 - Produtos em alta */}
      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ href: '/produtos', text: 'Ver todos →' }}
      >
        <ProductListing products={featuredProducts} />
      </Section>

      {/* 5.4 - Oferta especial */}
      <section className="home__offer">
        <div className="home__offer-image">
          <div className="home__offer-circle"></div>
          <img
            src="/offer-special.png"
            alt="Air Jordan edição de colecionador"
            className="home__offer-shoe"
          />
        </div>
        <div className="home__offer-content">
          <span className="home__offer-tag">Oferta especial</span>
          <h2 className="home__offer-title">Air Jordan edição de colecionador</h2>
          <p className="home__offer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip
          </p>
          <button className="home__offer-btn">Ver Oferta</button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
