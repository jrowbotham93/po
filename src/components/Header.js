import React from 'react';
// import { useTranslation } from 'react-i18next';
import "../i18n";

function Header({styleA, styleB, text, subtext}){
  // const { t } = useTranslation();
  return (
    <div className={styleA}>
      {text}
      <p className={styleB}>{t({subtext})}</p>
    </div>
  )
};

export default Header;

// "ui huge header"
// "ui large header"
// "ui medium header"
// "ui small header"
// "ui tiny header"