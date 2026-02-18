import React from 'react';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';
import './Logo.css';

const Logo = ({ variant = 'header' }) => {
  const src = variant === 'footer' ? logoFooter : logoHeader;

  return (
    <img
      src={src}
      alt="Digital Store"
      className={`logo logo--${variant}`}
      width={253}
      height={44}
    />
  );
};

export default Logo;
