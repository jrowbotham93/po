import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import LanguageSelector from './LanguageSelector.js';

export default ({ i18n, t, history, match }) => (
  <React.Fragment>
    <nav className="navbar">
        <Image size="small" src={logo}/>
        <ul className="main-nav" id="js-menu">
          <li className="nav-links">
            <LanguageSelector />
          </li>
          <li className="nav-links">
            <Link exact to='/'>Home</Link>
          </li>
          <li className="nav-links">
            <Link to="/contact">Contact</Link>
          </li>
      </ul>
    </nav>
  </React.Fragment>
);
