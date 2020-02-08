import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import Lng from './LanguageSelector.js';
import '../styles/navbar.css';

export default () => (
  <nav className="navbar">
    <Image size="small" src={logo} />
    <ul className="main-nav" id="js-menu">
      <li className="nav-links">
        <Lng />
      </li>
      <li className="nav-links">
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);
