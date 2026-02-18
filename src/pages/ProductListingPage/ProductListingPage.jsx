import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import './ProductListingPage.css';

const ALL_PRODUCTS = [
  { name: 'Tênis Esportivo Pro', image: '/product-thumb-1.jpeg', price: 299.9, priceDiscount: 199.9 },
  { name: 'Camiseta Premium', image: '/product-thumb-2.jpeg', price: 89.9 },
  { name: 'Calça Jogger', image: '/product-thumb-3.jpeg', price: 179.9, priceDiscount: 139.9 },
  { name: 'Boné Street', image: '/product-thumb-4.jpeg', price: 59.9 },
  { name: 'Jaqueta Casual', image: '/product-thumb-5.jpeg', price: 349.9, priceDiscount: 279.9 },
  { name: 'Mochila Urban', image: '/product-thumb-1.jpeg', price: 199.9, priceDiscount: 149.9 },
  { name: 'Tênis Retrô', image: '/product-thumb-2.jpeg', price: 259.9 },
  { name: 'Camiseta Oversize', image: '/product-thumb-3.jpeg', price: 99.9, priceDiscount: 79.9 },
  { name: 'Shorts Esportivo', image: '/product-thumb-4.jpeg', price: 79.9 },
  { name: 'Meias Kit 3 pares', image: '/product-thumb-5.jpeg', price: 39.9 },
];

const brandOptions = [
  { text: 'Adidas' }, { text: 'Calvin Klein' }, { text: 'Puma' }, { text: 'Nike' },
];
const categoryOptions = [
  { text: 'Camisetas' }, { text: 'Calças' }, { text: 'Tênis' }, { text: 'Acessórios' },
];
const genderOptions = [
  { text: 'Masculino', value: 'male' }, { text: 'Feminino', value: 'female' }, { text: 'Unissex', value: 'unisex' },
];
const stateOptions = [
  { text: 'Novo' }, { text: 'Usado' },
];

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter') || '';
  const [sortBy, setSortBy] = useState('');

  const filteredProducts = useMemo(() => {
    let list = filter
      ? ALL_PRODUCTS.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
      : ALL_PRODUCTS;

    if (sortBy === 'asc') list = [...list].sort((a, b) => (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price));
    if (sortBy === 'desc') list = [...list].sort((a, b) => (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price));
    return list;
  }, [filter, sortBy]);

  return (
    <Layout>
      <div className="product-listing-page">
        {/* Sidebar */}
        <aside className="product-listing-page__sidebar">
          <div className="product-listing-page__sort">
            <label className="product-listing-page__sort-label" htmlFor="sort">Ordenar por</label>
            <select
              id="sort"
              className="product-listing-page__sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>

          <div className="product-listing-page__filters">
            <h3 className="product-listing-page__filters-title">Filtrar por</h3>
            <hr className="product-listing-page__filters-divider" />
            <FilterGroup title="Marca" inputType="checkbox" options={brandOptions} />
            <FilterGroup title="Categoria" inputType="checkbox" options={categoryOptions} />
            <FilterGroup title="Gênero" inputType="radio" options={genderOptions} />
            <FilterGroup title="Estado" inputType="radio" options={stateOptions} />
          </div>
        </aside>

        {/* Products */}
        <div className="product-listing-page__content">
          <Section title={`${filteredProducts.length} produto(s) encontrado(s)`} titleAlign="left">
            <ProductListing products={filteredProducts} />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
