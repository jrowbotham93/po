import React from 'react';

import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import history from '../history';

import { supportedLanguages } from '../i18n';

function LanguageSwitcherComp(props) {
  const { i18n } = props;

  const changeLanguage = nextLang => {
    i18n.changeLanguage(nextLang, () => {
      const newUrl = `/${nextLang}${window.location.pathname.substr(
        window.location.pathname.lastIndexOf('/')
      )}`;
      history.push(newUrl);
    });
  };
  const handleClickSelectLanguage = (event, index) => {
    changeLanguage(supportedLanguages[index]);
  };
  return (
    <>
      <div className="ui compact menu">
        <div className="ui simple dropdown item">
          <i
            className={`${
              i18n.language === 'en' ? 'gb uk' : i18n.language
            } flag`}
          ></i>
          <div className="menu">
            {supportedLanguages.map((option, index) => (
              <div
                className="item"
                key={option}
                onClick={event => handleClickSelectLanguage(event, index)}
              >
                <i className={`${option === 'en' ? 'gb uk' : option} flag`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(withTranslation('routes')(LanguageSwitcherComp));
