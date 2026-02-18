import React from 'react';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

const categories = [
  { label: 'Camisetas', filter: 'camisetas' },
  { label: 'Calças', filter: 'calcas' },
  { label: 'Tênis', filter: 'tenis' },
  { label: 'Acessórios', filter: 'acessorios' },
];

const sampleProducts = [
  { name: 'Tênis Esportivo Pro', image: '/product-thumb-1.jpeg', price: 299.9, priceDiscount: 199.9 },
  { name: 'Camiseta Premium', image: '/product-thumb-2.jpeg', price: 89.9 },
  { name: 'Calça Jogger', image: '/product-thumb-3.jpeg', price: 179.9, priceDiscount: 139.9 },
  { name: 'Boné Street', image: '/product-thumb-4.jpeg', price: 59.9 },
];

const CategoriesPage = () => {
  return (
    <Layout>
      {categories.map((cat) => (
        <Section
          key={cat.filter}
          title={cat.label}
          titleAlign="left"
          link={{ text: 'Ver todos', href: `/products?filter=${cat.filter}` }}
        >
          <ProductListing products={sampleProducts} />
        </Section>
      ))}
    </Layout>
  );
};

export default CategoriesPage;
