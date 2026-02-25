import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './OrdersPage.css';

const orders = [
  {
    id: 1,
    orderNumber: '2234981932',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'transit',
    statusLabel: 'Produto em trânsito',
  },
  {
    id: 2,
    orderNumber: '4495810492',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'done',
    statusLabel: 'Finalizado',
  },
  {
    id: 3,
    orderNumber: '4495810492',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'canceled',
    statusLabel: 'Cancelado',
  },
  {
    id: 4,
    orderNumber: '4495810492',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'done',
    statusLabel: 'Finalizado',
  },
  {
    id: 5,
    orderNumber: '4495810492',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'done',
    statusLabel: 'Finalizado',
  },
];

const SneakerIcon = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 16H2C1.5 16 1 15.5 1 15V11C1 10. 1.3 9.4 1.8 9.1L12 3C12.4 2.7 12.9 2.7 13.3 3L16 5L25 2C25.5 1.8 26 2 26.3 2.3L30 6H36C37.1 6 38 6.9 38 8V15C38 15.5 37.5 16 37 16H38Z" fill="#B5B6F2" opacity="0.6"/>
    <ellipse cx="8" cy="16" rx="3" ry="2" fill="#9D9EE8"/>
    <ellipse cx="32" cy="16" rx="3" ry="2" fill="#9D9EE8"/>
  </svg>
);

const OrdersPage = () => {
  return (
    <Layout>
      <div className="orders-page">
        <div className="orders-page__container">
          {/* Sidebar — desktop only */}
          <aside className="orders-page__sidebar">
            <span className="orders-page__sidebar-title">Meu Perfil</span>
            <hr className="orders-page__sidebar-divider" />
            <NavLink
              to="/orders"
              className="orders-page__sidebar-link orders-page__sidebar-link--active"
            >
              Meus Pedidos
            </NavLink>
            <hr className="orders-page__sidebar-divider" />
            <NavLink to="/my-info" className="orders-page__sidebar-link">
              Minhas Informações
            </NavLink>
            <hr className="orders-page__sidebar-divider" />
            <span className="orders-page__sidebar-link">Métodos de Pagamento</span>
          </aside>

          {/* Orders list */}
          <div className="orders-page__content">
            <div className="orders-page__header">
              <span className="orders-page__title">Meus Pedidos</span>
              <span className="orders-page__status-label">STATUS</span>
            </div>
            <hr className="orders-page__divider" />

            {orders.map((order, index) => (
              <React.Fragment key={order.id}>
                <div className="orders-page__order">
                  <div className="orders-page__order-left">
                    <div className="orders-page__order-thumb">
                      <SneakerIcon />
                    </div>
                    <div className="orders-page__order-info">
                      <span className="orders-page__order-number">
                        Pedido nº {order.orderNumber}
                      </span>
                      <span className="orders-page__order-name">{order.name}</span>
                    </div>
                  </div>

                  {/* Desktop status */}
                  <span
                    className={`orders-page__order-status orders-page__order-status--${order.status} orders-page__order-status--desktop`}
                  >
                    {order.statusLabel}
                  </span>

                  {/* Mobile status row */}
                  <div className="orders-page__order-status-row">
                    <span className="orders-page__status-label-mobile">STATUS</span>
                    <span
                      className={`orders-page__order-status orders-page__order-status--${order.status}`}
                    >
                      {order.statusLabel}
                    </span>
                  </div>
                </div>
                {index < orders.length - 1 && <hr className="orders-page__divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrdersPage;
