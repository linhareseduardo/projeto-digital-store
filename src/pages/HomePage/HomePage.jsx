import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Section from '../../components/Section/Section';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import ProductListing from '../../components/ProductListing/ProductListing';
import './HomePage.css';

const categoryIcons = [
  {
    label: 'Camisetas',
    icon: 'https://www.figma.com/api/mcp/asset/6311ddd7-2ef4-46a2-aaa7-5fb5dfbb6b2c',
    href: '/produtos?categoria=camisetas',
  },
  {
    label: 'Calças',
    icon: 'https://www.figma.com/api/mcp/asset/b41df253-4ada-4ba0-a101-f6d1cc9bec69',
    href: '/produtos?categoria=calcas',
  },
  {
    label: 'Bonés',
    icon: 'https://www.figma.com/api/mcp/asset/b41df253-4ada-4ba0-a101-f6d1cc9bec69',
    href: '/produtos?categoria=bones',
  },
  {
    label: 'Headphones',
    icon: 'https://www.figma.com/api/mcp/asset/e128d417-96a4-4886-accc-ee05d67bd463',
    href: '/produtos?categoria=headphones',
  },
  {
    label: 'Tênis',
    icon: 'https://www.figma.com/api/mcp/asset/50ec2f93-1e25-4f6a-ae37-3f82b0817247',
    href: '/produtos?categoria=tenis',
  },
];

const collections = [
  {
    title: 'Novo drop\nSupreme',
    badge: '30% OFF',
    image: 'https://www.figma.com/api/mcp/asset/4c10f240-7fc7-4640-b1a7-4c5724df9006',
    imageTransform: 'rotate(-20.78deg)',
  },
  {
    title: 'Coleção\nAdidas',
    badge: '30% OFF',
    image: 'https://www.figma.com/api/mcp/asset/89df4132-de6e-4f74-a159-1524e08f8c34',
    imageTransform: 'scaleY(-1) rotate(170.18deg)',
  },
  {
    title: 'Novo\nBeats Bass',
    badge: '30% OFF',
    image: 'https://www.figma.com/api/mcp/asset/2c8beea0-d806-49e8-9fd2-46e6df77e347',
    imageTransform: 'rotate(30deg)',
  },
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
                <img
                  src={cat.icon}
                  alt={cat.label}
                  width={64}
                  height={64}
                  className="home__category-icon-img"
                />
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
            src="https://www.figma.com/api/mcp/asset/6938f888-9f2a-476c-86c4-48903879c62e"
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
