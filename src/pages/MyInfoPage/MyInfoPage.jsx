import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './MyInfoPage.css';

const userInfo = {
  nome: 'Francisco Antonio Pereira',
  cpf: '123485913-35',
  email: 'francisco@gmail.com',
  celular: '(85) 5555-5555',
};

const deliveryInfo = {
  endereco: 'Rua João Pessoa, 333',
  bairro: 'Centro',
  cidade: 'Fortaleza, Ceará',
  cep: '433-8800',
};

const MyInfoPage = () => {
  return (
    <Layout>
      <div className="myinfo-page">
        <div className="myinfo-page__container">
          {/* Sidebar — desktop only */}
          <aside className="myinfo-page__sidebar">
            <span className="myinfo-page__sidebar-title">Meu Perfil</span>
            <hr className="myinfo-page__sidebar-divider" />
            <NavLink to="/orders" className="myinfo-page__sidebar-link">
              Meus Pedidos
            </NavLink>
            <hr className="myinfo-page__sidebar-divider" />
            <NavLink
              to="/my-info"
              className="myinfo-page__sidebar-link myinfo-page__sidebar-link--active"
            >
              Minhas Informações
            </NavLink>
            <hr className="myinfo-page__sidebar-divider" />
            <span className="myinfo-page__sidebar-link">Métodos de Pagamento</span>
          </aside>

          {/* Info card */}
          <div className="myinfo-page__content">
            <div className="myinfo-page__header">
              <span className="myinfo-page__title">Minhas Informações</span>
              <a href="#editar" className="myinfo-page__edit-link">Editar</a>
            </div>
            <hr className="myinfo-page__divider" />

            {/* Informações Pessoais */}
            <div className="myinfo-page__section">
              <span className="myinfo-page__section-title">Informações Pessoais</span>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">Nome:</span>
                <span className="myinfo-page__value">{userInfo.nome}</span>
              </div>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">CPF:</span>
                <span className="myinfo-page__value">{userInfo.cpf}</span>
              </div>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">Email:</span>
                <span className="myinfo-page__value">{userInfo.email}</span>
              </div>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">Celular:</span>
                <span className="myinfo-page__value">{userInfo.celular}</span>
              </div>
            </div>

            <hr className="myinfo-page__divider" />

            {/* Informações de Entrega */}
            <div className="myinfo-page__section">
              <span className="myinfo-page__section-title">Informações de Entrega</span>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">Endereço:</span>
                <span className="myinfo-page__value">{deliveryInfo.endereco}</span>
              </div>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">Bairro:</span>
                <span className="myinfo-page__value">{deliveryInfo.bairro}</span>
              </div>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">Cidade:</span>
                <span className="myinfo-page__value">{deliveryInfo.cidade}</span>
              </div>
              <div className="myinfo-page__row">
                <span className="myinfo-page__label">CEP:</span>
                <span className="myinfo-page__value">{deliveryInfo.cep}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyInfoPage;
