import React from 'react';
import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import './HomePage.css';

const homeSlides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
];

const featuredProducts = [
  { name: 'Tênis Esportivo', image: '/product-thumb-1.jpeg', price: 299.9, priceDiscount: 199.9 },
  { name: 'Camiseta Premium', image: '/product-thumb-2.jpeg', price: 89.9 },
  { name: 'Calça Jogger', image: '/product-thumb-3.jpeg', price: 179.9, priceDiscount: 139.9 },
  { name: 'Boné Street', image: '/product-thumb-4.jpeg', price: 59.9 },
  { name: 'Jaqueta Casual', image: '/product-thumb-5.jpeg', price: 349.9, priceDiscount: 279.9 },
  { name: 'Mochila Urban', image: '/product-thumb-1.jpeg', price: 199.9, priceDiscount: 149.9 },
  { name: 'Tênis Retrô', image: '/product-thumb-2.jpeg', price: 259.9 },
  { name: 'Camiseta Oversize', image: '/product-thumb-3.jpeg', price: 99.9, priceDiscount: 79.9 },
];

const HomePage = () => {
  return (
    <Layout>
      {/* 5.1 - Slide de imagens */}
      <Gallery images={homeSlides} width="1440" height="681" />

      {/* 5.2 - Coleções em destaque */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="home__collections">
          <img src="/collection-1.png" alt="Coleção 1" className="home__collection-img" />
          <img src="/collection-2.png" alt="Coleção 2" className="home__collection-img" />
          <img src="/collection-3.png" alt="Coleção 3" className="home__collection-img" />
        </div>
      </Section>

      {/* 5.3 - Produtos em alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={featuredProducts} />
      </Section>
    </Layout>
  );
};

export default HomePage;
