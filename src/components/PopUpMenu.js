import React from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li>
        <Link
          onClick={close}
          activeClassName="current"
          to={`/${i18n.language}/`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={close}
          activeClassName="current"
          to={`/${i18n.language}/ourstory`}
        >
          Our Story
        </Link>
      </li>

      <li>
        <Link
          onClick={close}
          activeClassName="current"
          to={`/${i18n.language}/products`}
        >
          Our Products
        </Link>
      </li>
      <li>
        <Link
          onClick={close}
          activeClassName="current"
          to={`/${i18n.language}/services`}
        >
          Our Services
        </Link>
      </li>
      <li>
        <Link
          onClick={close}
          activeClassName="current"
          to={`/${i18n.language}/contact`}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
);
