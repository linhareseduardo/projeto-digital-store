import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="section">
      <div className={`section__header section__header--${titleAlign}`}>
        {title && (
          <h2 className="section__title">{title}</h2>
        )}
        {link && (
          <Link to={link.href} className="section__link">{link.text}</Link>
        )}
      </div>
      <div className="section__content">
        {children}
      </div>
    </section>
  );
};

export default Section;
