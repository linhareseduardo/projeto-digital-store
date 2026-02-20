import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import miniCartIcon from '../../assets/mini-cart.svg';
import './Header.css';

const Header = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/products?filter=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* === DESKTOP TOP === */}
      <div className="header__top">
        {/* Hamburguer — só mobile */}
        <button className="header__hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>

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
          <img src={miniCartIcon} alt="Carrinho" className="header__cart" width={32} height={32} onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }} />
        </div>

        {/* Ícones mobile — só visíveis em telas pequenas */}
        <div className="header__mobile-icons">
          <button className="header__icon-btn" onClick={handleSearch} aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <div className="header__cart-wrap" onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
            <img src={miniCartIcon} alt="Carrinho" className="header__cart" width={28} height={28} />
          </div>
        </div>
      </div>

      {/* Barra de busca mobile */}
      <div className="header__mobile-search">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="header__search-input"
        />
        <button className="header__search-btn" onClick={handleSearch} aria-label="Buscar">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
      </div>

      {/* === DESKTOP NAV === */}
      <nav className="header__nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Produtos</NavLink>
        <NavLink to="/categories" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Categorias</NavLink>
        <NavLink to="/orders" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>Meus Pedidos</NavLink>
      </nav>

      {/* === DRAWER MOBILE === */}
      {menuOpen && (
        <div className="header__drawer-overlay" onClick={closeMenu}>
          <div className="header__drawer" onClick={(e) => e.stopPropagation()}>
            <button className="header__drawer-close" onClick={closeMenu} aria-label="Fechar menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <p className="header__drawer-title">Páginas</p>
            <nav className="header__drawer-nav">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'header__drawer-link header__drawer-link--active' : 'header__drawer-link'} onClick={closeMenu}>Home</NavLink>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'header__drawer-link header__drawer-link--active' : 'header__drawer-link'} onClick={closeMenu}>Produtos</NavLink>
              <NavLink to="/categories" className={({ isActive }) => isActive ? 'header__drawer-link header__drawer-link--active' : 'header__drawer-link'} onClick={closeMenu}>Categorias</NavLink>
              <NavLink to="/orders" className={({ isActive }) => isActive ? 'header__drawer-link header__drawer-link--active' : 'header__drawer-link'} onClick={closeMenu}>Meus Pedidos</NavLink>
            </nav>

            <div className="header__drawer-footer">
              <hr className="header__drawer-divider" />
              <a href="/login" className="header__drawer-login-btn">Entrar</a>
              <a href="/register" className="header__drawer-register">Cadastre-se</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
