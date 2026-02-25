import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import './CreateAccountPage.css';

const CreateAccountPage = () => {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    complemento: '',
  });
  const [newsletter, setNewsletter] = useState(true);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create-account">
      {/* Header */}
      <header className="create-account__header">
        <Link to="/">
          <Logo variant="header" />
        </Link>
      </header>

      {/* Conteúdo principal */}
      <main className="create-account__main">
        <h1 className="create-account__title">Criar Conta</h1>

        <form className="create-account__form" onSubmit={handleSubmit}>
          {/* Card: Informações Pessoais */}
          <div className="create-account__card">
            <div className="create-account__card-title">Informações Pessoais</div>
            <hr className="create-account__divider" />

            <div className="create-account__field">
              <label className="create-account__label">Nome Completo *</label>
              <input
                type="text"
                className="create-account__input"
                placeholder="Insira seu nome"
                value={form.nome}
                onChange={handleChange('nome')}
              />
            </div>

            <div className="create-account__field">
              <label className="create-account__label">CPF *</label>
              <input
                type="text"
                className="create-account__input"
                placeholder="Insira seu CPF"
                value={form.cpf}
                onChange={handleChange('cpf')}
              />
            </div>

            <div className="create-account__field">
              <label className="create-account__label">E-mail *</label>
              <input
                type="email"
                className="create-account__input"
                placeholder="Insira seu email"
                value={form.email}
                onChange={handleChange('email')}
              />
            </div>

            <div className="create-account__field">
              <label className="create-account__label">Celular *</label>
              <input
                type="tel"
                className="create-account__input"
                placeholder="Insira seu celular"
                value={form.celular}
                onChange={handleChange('celular')}
              />
            </div>
          </div>

          {/* Card: Informações de Entrega */}
          <div className="create-account__card">
            <div className="create-account__card-title">Informações de Entrega</div>
            <hr className="create-account__divider" />

            <div className="create-account__field">
              <label className="create-account__label">Endereço *</label>
              <input
                type="text"
                className="create-account__input"
                placeholder="Insira seu endereço"
                value={form.endereco}
                onChange={handleChange('endereco')}
              />
            </div>

            <div className="create-account__field">
              <label className="create-account__label">Bairro *</label>
              <input
                type="text"
                className="create-account__input"
                placeholder="Insira seu bairro"
                value={form.bairro}
                onChange={handleChange('bairro')}
              />
            </div>

            <div className="create-account__field">
              <label className="create-account__label">Cidade *</label>
              <input
                type="text"
                className="create-account__input"
                placeholder="Insira sua cidade"
                value={form.cidade}
                onChange={handleChange('cidade')}
              />
            </div>

            <div className="create-account__field">
              <label className="create-account__label">CEP *</label>
              <input
                type="text"
                className="create-account__input"
                placeholder="Insira seu CEP"
                value={form.cep}
                onChange={handleChange('cep')}
              />
            </div>

            <div className="create-account__field">
              <label className="create-account__label">Complemento</label>
              <input
                type="text"
                className="create-account__input"
                placeholder="Insira complemento"
                value={form.complemento}
                onChange={handleChange('complemento')}
              />
            </div>
          </div>

          {/* Checkbox newsletter */}
          <label className="create-account__checkbox-row">
            <span className="create-account__checkbox-wrapper">
              <input
                type="checkbox"
                className="create-account__checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              <span className="create-account__checkmark">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                  <path d="M1 5L4.5 8.5L11.5 1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
            <span className="create-account__checkbox-text">
              Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
            </span>
          </label>

          {/* Botão Criar Conta */}
          <button type="submit" className="create-account__submit-btn">
            Criar Conta
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default CreateAccountPage;
