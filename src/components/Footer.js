import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';

const Footer = (props) => {
  const { i18n } = props;
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <Link to={`/${i18n.language}/`}>
          <Image size="small" src={logo} />
        </Link>

        <p className="footer-company-name">Proorganica © 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Naberezhno-Luhova Str. 12</span> Kyiv, Ukraine
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+380 67 544-93-37</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:eugene.blokhin@proorganica.com">
              eugene.blokhin@proorganica.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
