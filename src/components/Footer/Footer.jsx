import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './Footer.css';

const FooterInfo = ({ title, informations = [] }) => (
  <div className="footer-info">
    <h4 className="footer-info__title">{title}</h4>
    <ul className="footer-info__list">
      {informations.map((item, i) => (
        <li key={i}>
          <Link to={item.link} className="footer-info__link">{item.text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const informationLinks = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Política de privacidade', link: '/privacy' },
  ];

  const categoryLinks = [
    { text: 'Camisetas', link: '/products?filter=camisetas' },
    { text: 'Calças', link: '/products?filter=calcas' },
    { text: 'Tênis', link: '/products?filter=tenis' },
    { text: 'Acessórios', link: '/products?filter=acessorios' },
  ];

  const contactLinks = [
    { text: 'Fale Conosco', link: '/contact' },
    { text: 'Envios e entregas', link: '/shipping' },
    { text: 'Trocas e devoluções', link: '/returns' },
    { text: 'Suporte ao comprador', link: '/support' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <Logo variant="footer" />
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" width={24} height={24} />
            </a>
          </div>
        </div>

        <FooterInfo title="Informações" informations={informationLinks} />
        <FooterInfo title="Categorias" informations={categoryLinks} />
        <FooterInfo title="Contato" informations={contactLinks} />
      </div>

      <hr className="footer__divider" />
      <p className="footer__copyright">© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
