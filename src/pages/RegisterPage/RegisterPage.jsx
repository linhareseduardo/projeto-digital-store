import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import './RegisterPage.css';

const SHOE_IMG = 'https://www.figma.com/api/mcp/asset/b6f8c70e-9bc5-43e6-aebc-9e350bf78403';

const RegisterPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-page">
      {/* Barra do topo */}
      <header className="register-page__header">
        <Link to="/">
          <Logo variant="header" />
        </Link>
      </header>

      {/* Área central: gradiente + card + imagem */}
      <div className="register-page__hero">
        <div className="register-page__card">
          <div className="register-page__card-header">
            <h1 className="register-page__title">Crie sua conta</h1>
            <p className="register-page__subtitle">
              Já possui uma conta? Entre{' '}
              <Link to="/login" className="register-page__link">aqui</Link>.
            </p>
          </div>

          <form className="register-page__form" onSubmit={handleSubmit}>
            <div className="register-page__field">
              <label className="register-page__label">Email *</label>
              <input
                type="email"
                className="register-page__input"
                placeholder="Insira seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>

          <button
            type="submit"
            className="register-page__submit-btn"
            onClick={handleSubmit}
          >
            Criar Conta
          </button>

          <div className="register-page__social">
            <span className="register-page__social-text">Ou faça login com</span>
            <div className="register-page__social-icons">
              {/* Gmail icon */}
              <svg className="register-page__social-icon" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M22 6.25V17.75C22 18.44 21.44 19 20.75 19H18V9.71L12 13.36L6 9.71V19H3.25C2.56 19 2 18.44 2 17.75V6.25C2 4.81 3.81 4.03 4.84 5.06L6 6.25L12 10L18 6.25L19.16 5.06C20.18 4.03 22 4.81 22 6.25Z" fill="#EA4335"/>
                <path d="M22 6.25L12 13.36L2 6.25C2 4.81 3.81 4.03 4.84 5.06L6 6.25L12 10L18 6.25L19.16 5.06C20.18 4.03 22 4.81 22 6.25Z" fill="#FBBC05"/>
                <path d="M6 9.71V19H3.25C2.56 19 2 18.44 2 17.75V6.25L12 13.36" fill="#34A853"/>
                <path d="M22 6.25V17.75C22 18.44 21.44 19 20.75 19H18V9.71L12 13.36" fill="#4285F4"/>
              </svg>
              {/* Facebook icon */}
              <svg className="register-page__social-icon" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M24 12C24 5.37 18.63 0 12 0S0 5.37 0 12c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08V12h3.05V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.33l-.53 3.47h-2.8v8.38C19.61 22.95 24 17.99 24 12Z" fill="#1877F2"/>
                <path d="M16.67 15.47L17.2 12h-3.33V9.74c0-.95.46-1.87 1.95-1.87h1.51V4.92s-1.37-.23-2.68-.23c-2.74 0-4.53 1.66-4.53 4.67V12H7.08v3.47h3.05v8.38a12.1 12.1 0 003.74 0v-8.38h2.8Z" fill="#fff"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Imagem do tênis — apenas desktop */}
        <div className="register-page__shoe">
          <img src={SHOE_IMG} alt="Tênis" className="register-page__shoe-img" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
