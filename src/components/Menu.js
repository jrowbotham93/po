import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import Lng from './LanguageSelector.js';
import '../styles/navbar.css';
import i18n from '../i18n';

export default function Menu() {
  return(
    <nav className="navbar">
      <Link to={`/${i18n.language}/`}>
        <Image size="small" src={logo} />
      </Link>
      <ul className="main-nav" id="js-menu">
        <li className="nav-links">
          <Link to={`/${i18n.language}/services`}>
            Services
          </Link>
        </li>
        <li className="nav-links">
          <Link to={`/${i18n.language}/ourstory`}>
            About
          </Link>
        </li>
        <li className="nav-links">
          <Link to={`/${i18n.language}/contact`}>Contact</Link>
        </li>
        <li className="nav-links">
          <Lng />
        </li>
      </ul>
    </nav>
  );
};
