import React, { Suspense } from 'react';
import Loader from './components/Loader';
import Router from './Router';
import './App.css';
import {
  useTranslation,
  initReactI18next,
  withTranslation
} from "react-i18next";
import './i18n';

import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Redirect,
  Link
} from "react-router-dom";

function AppComp({ i18n, t, tReady, match, history }) {
  // manually handle not yet loaded translation case
  if (!tReady) return "loading";

  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Router t={t}  i18n={i18n} history={history} match={match}  />
          {/* <Route path={`/:lang(en|ru)${t("/hello")}`} component={Hello} /> */}
          <Redirect to={`/${i18n.language}${t("/hello")}`} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

const App = withTranslation("routes")(AppComp);

export default App;
