import React from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

function PopUpMenu({ close }) {
  const { t } = useTranslation();
  return (
    <div className="menu">
      <ul>
        <li>
          <Link
            onClick={close}
            activeClassName="current"
            to={`/${i18n.language}/`}
          >
            {t('home')}
          </Link>
        </li>
        <li>
          <Link
            onClick={close}
            activeClassName="current"
            to={`/${i18n.language}/ourstory`}
          >
            {t('ourStoryHeading')}
          </Link>
        </li>

        <li>
          <Link
            onClick={close}
            activeClassName="current"
            to={`/${i18n.language}/products`}
          >
            {t('ourProductsHeading')}
          </Link>
        </li>
        <li>
          <Link
            onClick={close}
            activeClassName="current"
            to={`/${i18n.language}/services`}
          >
            {t('ourServicesHeading')}
          </Link>
        </li>
        <li>
          <Link
            onClick={close}
            activeClassName="current"
            to={`/${i18n.language}/values`}
          >
            {t('ourValuesHeading')}
          </Link>
        </li>
        <li>
          <Link
            onClick={close}
            activeClassName="current"
            to={`/${i18n.language}/contact`}
          >
            {t('contactHeading')}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PopUpMenu;
