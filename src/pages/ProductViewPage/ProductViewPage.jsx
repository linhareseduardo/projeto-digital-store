import React from 'react';
import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import './ProductViewPage.css';

const productImages = [
  { src: '/produc-image-1.jpeg' },
  { src: '/produc-image-2.jpeg' },
  { src: '/produc-image-3.jpeg' },
  { src: '/produc-image-4.jpeg' },
  { src: '/produc-image-5.jpeg' },
];

const sizes = ['39', '40', '41', '42', '43', '44'];
const colors = ['#000000', '#C0392B', '#2980B9', '#27AE60'];

const recommendedProducts = [
  { name: 'Tênis Esportivo Pro', image: '/product-thumb-1.jpeg', price: 299.9, priceDiscount: 199.9 },
  { name: 'Camiseta Premium', image: '/product-thumb-2.jpeg', price: 89.9 },
  { name: 'Calça Jogger', image: '/product-thumb-3.jpeg', price: 179.9, priceDiscount: 139.9 },
  { name: 'Boné Street', image: '/product-thumb-4.jpeg', price: 59.9 },
];

const ProductViewPage = () => {
  return (
    <Layout>
      <div className="product-view-page">
        {/* 7.1 - Galeria */}
        <Gallery
          images={productImages}
          width="700"
          height="570"
          radius="4px"
          showThumbs
        />

        {/* 7.3 - BuyBox com 7.2 ProductOptions como filhos */}
        <BuyBox
          name="Tênis Esportivo Performance"
          reference="REF-001-SPORT"
          stars={4.5}
          rating={128}
          price={299.9}
          priceDiscount={199.9}
          description="Tênis desenvolvido para alta performance. Solado em borracha de última geração, cabedal respirável e sistema de amortecimento superior para máximo conforto durante os treinos."
        >
          <div>
            <p className="product-view-page__option-label">Tamanho</p>
            <ProductOptions options={sizes} shape="square" type="text" radius="4px" />
          </div>
          <div>
            <p className="product-view-page__option-label">Cor</p>
            <ProductOptions options={colors} shape="circle" type="color" />
          </div>
        </BuyBox>
      </div>

      {/* 7.4 - Produtos recomendados */}
      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </Layout>
  );
};

export default ProductViewPage;
