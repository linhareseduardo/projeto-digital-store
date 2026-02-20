import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import './ProductViewPage.css';

const NIKE_SHOE = 'https://www.figma.com/api/mcp/asset/97a1c703-207b-4448-920b-c6d12658c6b5';
const KSWISS_IMG = 'https://www.figma.com/api/mcp/asset/a1385723-bed7-4e46-9211-501696eb7088';

const productImages = [
  { src: NIKE_SHOE, bgColor: '#e2e3ff' },
  { src: NIKE_SHOE, bgColor: '#dec699' },
  { src: NIKE_SHOE, bgColor: '#e8dfcf' },
  { src: NIKE_SHOE, bgColor: '#ffc0bc' },
  { src: NIKE_SHOE, bgColor: '#ffe8bc' },
];

const sizes = ['39', '40', '41', '42', '43'];
const colors = ['#6BD6E1', '#C92071', '#3D3D3D', '#8C72BE'];

const relatedProducts = [
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100, badge: '30% OFF' },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100, badge: '30% OFF' },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
];

const ProductViewPage = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="product-view-page__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Produtos</Link>
        <span>/</span>
        <Link to="/products?categoria=tenis">Tênis</Link>
        <span>/</span>
        <Link to="/products?marca=nike">Nike</Link>
        <span>/</span>
        <span className="product-view-page__breadcrumb--current">
          Tênis Nike Revolution 6 Next Nature Masculino
        </span>
      </nav>

      <div className="product-view-page">
        {/* 7.1 - Galeria */}
        <Gallery
          images={productImages}
          height="571"
          radius="4px"
          showThumbs
          className="product-view-page__gallery"
        />

        {/* 7.3 - BuyBox com 7.2 ProductOptions como filhos */}
        <BuyBox
          name="Tênis Nike Revolution 6 Next Nature Masculino"
          tags={['Casual', 'Nike', 'REF: 38416711']}
          stars={4.7}
          rating={90}
          price={219}
          priceDiscount={219}
          descriptionTitle="Descrição do produto"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        >
          <div>
            <p className="product-view-page__option-label">Tamanho</p>
            <ProductOptions options={sizes} shape="square" type="text" radius="4px" defaultSelected={2} />
          </div>
          <div>
            <p className="product-view-page__option-label">Cor</p>
            <ProductOptions options={colors} shape="circle" type="color" defaultSelected={1} />
          </div>
        </BuyBox>
      </div>

      {/* 7.4 - Produtos relacionados */}
      <Section
        title="Produtos Relacionados"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={relatedProducts} />
      </Section>
    </Layout>
  );
};

export default ProductViewPage;
