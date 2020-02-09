import React from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';

export default function NotFound() {
  return (
    <div className="container">
      <h1>Sorry this page doesn't exist</h1>
      <Link to={`/${i18n.language}/`}>Home</Link>
    </div>
  );
}
