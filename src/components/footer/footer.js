import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer__layout">
      <section className="footer__container">
        <div className="footer__wrapper">
          <p className="footer__items">Terms and Conditions</p>
          <p className="footer__items">Privacy Policy</p>
          <p className="footer__items">Contact Us</p>
        </div>
        <div className="footer__wrapper footer__wrapper--icons">
          <p>Follow us</p>
          <i className="footer__icon fab fa-facebook-square"></i>
          <i className="footer__icon fab fa-twitter"></i>
        </div>
      </section>
    </footer>
  );
};
