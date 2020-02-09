import React from 'react'

import {
  useTranslation,
  withTranslation
} from "react-i18next";

import {
  withRouter,
  Link
} from "react-router-dom";

const supportedLanguages = ["en", "ru"];

function LanguageSwitcherComp(props) {
  const { children, i18n, t, history, match } = props;
  const changeLanguage = nextLang => {
    i18n.changeLanguage(nextLang, () => {
      // const newUrl = localizeLink(routeName, match.params);
      const newUrl = `/${nextLang}/${t(match.params.page)}`;
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
              Language <i className="world icon"></i>
              <div className="menu">
              {supportedLanguages.map((option, index) => (
                <div className="item" key={option} onClick={event => handleClickSelectLanguage(event, index)} data-value="en">
                  {option}
              </div>
              ))}
            </div>
          </div>
        </div>
      {children}
    </>
  );
}

export default withRouter(withTranslation("routes")(LanguageSwitcherComp));
