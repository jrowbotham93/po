import React from 'react';
import "../i18n";
import { useTranslation } from 'react-i18next';

function Header({styleA, styleB, text, subtext}){
  const { t } = useTranslation();
  return (
    <div className={styleA}>
      {t(text)}
      <p className={styleB}>
      {t(subtext)}</p>
    </div>
  );
}

export default Header;
