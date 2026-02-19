import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import './ProductListingPage.css';

const kSwissImg = 'https://www.figma.com/api/mcp/asset/30bf016e-9896-4f02-9266-ba5e42d548e4';

const ALL_PRODUCTS = [
  { name: 'K-Swiss V8 - Masculino', category: 'Tênis', image: kSwissImg, price: 200, priceDiscount: 100, brand: 'K-Swiss', categoryFilter: 'Esporte e lazer', gender: 'Masculino', state: 'Novo' },
  { name: 'K-Swiss V8 - Feminino', category: 'Tênis', image: kSwissImg, price: 200, priceDiscount: 100, brand: 'K-Swiss', categoryFilter: 'Casual', gender: 'Feminino', state: 'Novo' },
  { name: 'Adidas Ultraboost 22', category: 'Tênis', image: kSwissImg, price: 350, priceDiscount: 280, brand: 'Adidas', categoryFilter: 'Corrida', gender: 'Unisex', state: 'Novo' },
  { name: 'Nike Air Max 90', category: 'Tênis', image: kSwissImg, price: 400, priceDiscount: 320, brand: 'Nike', categoryFilter: 'Esporte e lazer', gender: 'Masculino', state: 'Novo' },
  { name: 'Puma RS-X', category: 'Tênis', image: kSwissImg, price: 299, priceDiscount: 239, brand: 'Puma', categoryFilter: 'Casual', gender: 'Unisex', state: 'Novo' },
  { name: 'Calenciaga Speed Trainer', category: 'Tênis', image: kSwissImg, price: 800, brand: 'Calenciaga', categoryFilter: 'Utilitário', gender: 'Feminino', state: 'Novo' },
  { name: 'K-Swiss Classic VN', category: 'Tênis', image: kSwissImg, price: 180, priceDiscount: 140, brand: 'K-Swiss', categoryFilter: 'Casual', gender: 'Unisex', state: 'Usado' },
  { name: 'Adidas Stan Smith', category: 'Tênis', image: kSwissImg, price: 300, brand: 'Adidas', categoryFilter: 'Casual', gender: 'Masculino', state: 'Novo' },
  { name: 'Nike Revolution 6', category: 'Tênis', image: kSwissImg, price: 250, priceDiscount: 190, brand: 'Nike', categoryFilter: 'Corrida', gender: 'Feminino', state: 'Novo' },
  { name: 'Puma Future Rider', category: 'Tênis', image: kSwissImg, price: 320, priceDiscount: 260, brand: 'Puma', categoryFilter: 'Esporte e lazer', gender: 'Masculino', state: 'Usado' },
  { name: 'K-Swiss Tubes Infinity', category: 'Tênis', image: kSwissImg, price: 240, brand: 'K-Swiss', categoryFilter: 'Corrida', gender: 'Masculino', state: 'Novo' },
  { name: 'Adidas Forum Low', category: 'Tênis', image: kSwissImg, price: 280, priceDiscount: 220, brand: 'Adidas', categoryFilter: 'Casual', gender: 'Feminino', state: 'Novo' },
];

const brandOptions     = [{ text: 'Adidas' }, { text: 'Calenciaga' }, { text: 'K-Swiss' }, { text: 'Nike' }, { text: 'Puma' }];
const categoryOptions  = [{ text: 'Esporte e lazer' }, { text: 'Casual' }, { text: 'Utilitário' }, { text: 'Corrida' }];
const genderOptions    = [{ text: 'Masculino' }, { text: 'Feminino' }, { text: 'Unisex' }];
const stateOptions     = [{ text: 'Novo' }, { text: 'Usado' }];

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('filter') || '';

  const [sortBy, setSortBy]                   = useState('');
  const [selectedBrands, setSelectedBrands]   = useState([]);
  const [selectedCats, setSelectedCats]       = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedState, setSelectedState]     = useState('');

  const filteredProducts = useMemo(() => {
    let list = ALL_PRODUCTS;

    if (searchQuery) {
      list = list.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (selectedBrands.length)  list = list.filter((p) => selectedBrands.includes(p.brand));
    if (selectedCats.length)    list = list.filter((p) => selectedCats.includes(p.categoryFilter));
    if (selectedGenders.length) list = list.filter((p) => selectedGenders.includes(p.gender));
    if (selectedState)          list = list.filter((p) => p.state === selectedState);

    if (sortBy === 'asc')  list = [...list].sort((a, b) => (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price));
    if (sortBy === 'desc') list = [...list].sort((a, b) => (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price));

    return list;
  }, [searchQuery, selectedBrands, selectedCats, selectedGenders, selectedState, sortBy]);

  const resultsLabel = searchQuery
    ? `Resultados para "${searchQuery}"`
    : 'Produtos';

  return (
    <Layout>
      <div className="product-listing-page">
        {/* Sidebar */}
        <aside className="product-listing-page__sidebar">
          <div className="product-listing-page__filters">
            <h3 className="product-listing-page__filters-title">Filtrar por</h3>
            <hr className="product-listing-page__filters-divider" />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={brandOptions}
              selected={selectedBrands}
              onChange={setSelectedBrands}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={categoryOptions}
              selected={selectedCats}
              onChange={setSelectedCats}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={genderOptions}
              selected={selectedGenders}
              onChange={setSelectedGenders}
            />
            <FilterGroup
              title="Estado"
              inputType="radio"
              options={stateOptions}
              selected={selectedState}
              onChange={setSelectedState}
            />
          </div>
        </aside>

        {/* Products */}
        <div className="product-listing-page__content">
          {/* Header: resultados + sort */}
          <div className="product-listing-page__content-header">
            <div className="product-listing-page__results-info">
              <span className="product-listing-page__results-label">{resultsLabel}</span>
              <span className="product-listing-page__results-separator">—</span>
              <span className="product-listing-page__results-count">{filteredProducts.length} produtos</span>
            </div>
            <div className="product-listing-page__sort">
              <span className="product-listing-page__sort-prefix">Ordernar por:</span>
              <select
                id="sort"
                className="product-listing-page__sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">mais relevantes</option>
                <option value="asc">menor preço</option>
                <option value="desc">maior preço</option>
              </select>
            </div>
          </div>

          <ProductListing products={filteredProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;

