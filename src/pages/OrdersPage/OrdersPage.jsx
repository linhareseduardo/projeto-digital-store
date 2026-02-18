import React from 'react';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';

const OrdersPage = () => {
  return (
    <Layout>
      <Section title="Meus Pedidos" titleAlign="left">
        <p style={{ color: 'var(--color-dark-gray-3)', fontSize: 16 }}>
          Você ainda não possui pedidos.
        </p>
      </Section>
    </Layout>
  );
};

export default OrdersPage;
