import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import miniCartIcon from '../../assets/mini-cart.svg';
import './Header.css';

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/products?filter=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <header className="header">
      <div className="header__top">
        <Logo variant="header" />

        <div className="header__search">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="header__search-input"
          />
          <button className="header__search-btn" onClick={handleSearch} aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </div>

        <div className="header__actions">
          <a href="/register" className="header__register">Cadastre-se</a>
          <a href="/login" className="header__login">Entrar</a>
          <img src={miniCartIcon} alt="Carrinho" className="header__cart" width={32} height={32} />
        </div>
      </div>

      <nav className="header__nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Produtos</NavLink>
        <NavLink to="/categories" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Categorias</NavLink>
        <NavLink to="/orders" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Meus Pedidos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
