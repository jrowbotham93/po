import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import Lng from './LanguageSelector.js';
import '../styles/navbar.css';

export default () => (
  <nav className="navbar">
    <Link to="/">
      <Image size="small" src={logo} />
    </Link>
    <ul className="main-nav" id="js-menu">
      <li className="nav-links">
        <Link exact to="/services">
          Services
        </Link>
      </li>
      <li className="nav-links">
        <Link exact to="/ourstory">
          About
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="nav-links">
        <Lng />
      </li>
    </ul>
  </nav>
);
