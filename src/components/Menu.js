import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import Lng from './LanguageSelector.js';
import '../styles/navbar.css';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t } = useTranslation();

  return(
    <nav className="navbar">
      <Link to={`/${i18n.language}/`}>
        <Image size="small" src={logo} />
      </Link>
      <ul className="main-nav" id="js-menu">
        <li className="nav-links">
          <Link to={`/${i18n.language}/services`}>
            {t('ourServicesHeading')}
          </Link>
        </li>
        <li className="nav-links">
          <Link to={`/${i18n.language}/ourstory`}>
            {t('ourHistoryHeading')}
          </Link>
        </li>
        <li className="nav-links">
          <Link to={`/${i18n.language}/contact`}>
            {t('contactHead')}
          </Link>
        </li>
        <li className="nav-links">
          <Lng />
        </li>
      </ul>
    </nav>
  );
};
