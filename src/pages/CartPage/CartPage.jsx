import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import './CartPage.css';

const NIKE_SHOE = 'https://www.figma.com/api/mcp/asset/97a1c703-207b-4448-920b-c6d12658c6b5';
const KSWISS_IMG = 'https://www.figma.com/api/mcp/asset/a1385723-bed7-4e46-9211-501696eb7088';

const relatedProducts = [
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100, badge: '30% OFF' },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
  { category: 'Tênis', name: 'K-Swiss V8 - Masculino', image: KSWISS_IMG, price: 200, priceDiscount: 100 },
];

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState('');
  const [cep, setCep] = useState('');

  const unitPrice = 219;
  const originalPrice = 219;
  const discount = 30;
  const frete = 0;
  const subtotal = unitPrice * quantity;
  const total = subtotal - discount + frete;

  const formatPrice = (val) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  return (
    <Layout>
      <div className="cart-page">
        {/* ===== COLUNA ESQUERDA — CARRINHO ===== */}
        <div className="cart-page__left">
          <div className="cart-page__table">
            {/* Cabeçalho da tabela — desktop */}
            <div className="cart-page__table-header">
              <span className="cart-page__col-title">Meu Carrinho</span>
              <span className="cart-page__col-label">Quantidade</span>
              <span className="cart-page__col-label">Unitário</span>
              <span className="cart-page__col-label">Total</span>
            </div>

            <div className="cart-page__divider" />

            {/* Item */}
            <div className="cart-page__item">
              <div className="cart-page__item-info">
                <div className="cart-page__item-thumb">
                  <img src={NIKE_SHOE} alt="Tênis Nike" />
                </div>
                <div className="cart-page__item-details">
                  <p className="cart-page__item-name">Tênis Nike Revolution 6 Next Nature Masculino</p>
                  <p className="cart-page__item-meta">Cor: Vermelho / Branco</p>
                  <p className="cart-page__item-meta">Tamanho: 42</p>
                </div>
              </div>

              <div className="cart-page__item-qty">
                <div className="cart-page__qty-header">
                  <span className="cart-page__qty-label">QUANTIDADE</span>
                  <button className="cart-page__remove">Remover item</button>
                </div>
                <div className="cart-page__qty-controls">
                  <button className="cart-page__qty-btn" onClick={decrease}>−</button>
                  <span className="cart-page__qty-value">{quantity}</span>
                  <button className="cart-page__qty-btn" onClick={increase}>+</button>
                </div>
              </div>

              <div className="cart-page__item-unit">
                <span className="cart-page__item-col-label">UNITÁRIO</span>
                <div className="cart-page__prices">
                  <span className="cart-page__price-old">{formatPrice(originalPrice)}</span>
                  <span className="cart-page__price">{formatPrice(unitPrice)}</span>
                </div>
              </div>

              <div className="cart-page__item-total">
                <span className="cart-page__item-col-label">TOTAL</span>
                <div className="cart-page__prices">
                  <span className="cart-page__price-old">{formatPrice(originalPrice * quantity)}</span>
                  <span className="cart-page__price">{formatPrice(unitPrice * quantity)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cupom e Frete */}
          <div className="cart-page__fields">
            <div className="cart-page__field-group">
              <label className="cart-page__field-label">Cupom de desconto</label>
              <div className="cart-page__field-row">
                <input
                  className="cart-page__input"
                  placeholder="Insira seu código"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="cart-page__field-btn">OK</button>
              </div>
            </div>
            <div className="cart-page__field-group">
              <label className="cart-page__field-label">Calcular frete</label>
              <div className="cart-page__field-row">
                <input
                  className="cart-page__input"
                  placeholder="Insira seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
                <button className="cart-page__field-btn">OK</button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== COLUNA DIREITA — RESUMO ===== */}
        <div className="cart-page__summary">
          <h2 className="cart-page__summary-title">Resumo</h2>

          <div className="cart-page__summary-rows">
            <div className="cart-page__summary-row">
              <span>Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-page__summary-row">
              <span>Frete:</span>
              <span>{formatPrice(frete)}</span>
            </div>
            <div className="cart-page__summary-row">
              <span>Desconto:</span>
              <span>{formatPrice(discount)}</span>
            </div>
          </div>

          <div className="cart-page__summary-divider" />

          <div className="cart-page__summary-total">
            <span>Total</span>
            <span className="cart-page__total-value">{formatPrice(total)}</span>
          </div>
          <p className="cart-page__installments">ou 10x de R$ 21,00 sem juros</p>

          <button className="cart-page__continue-btn">Continuar</button>
        </div>
      </div>

      {/* Total mobile fixo no bottom */}
      <div className="cart-page__mobile-footer">
        <div className="cart-page__mobile-total">
          <span>Total</span>
          <div>
            <p className="cart-page__total-value">{formatPrice(total)}</p>
            <p className="cart-page__installments">ou 10x de R$ 21,00 sem juros</p>
          </div>
        </div>
        <button className="cart-page__continue-btn">Continuar</button>
      </div>

      {/* Produtos Relacionados */}
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

export default CartPage;
