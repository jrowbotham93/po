import React  from 'react';
import Loader from './components/Loader';
import Router from './Router';
import './App.css';
import { withTranslation } from "react-i18next";
import './i18n';
import {
  BrowserRouter,
  Switch,
  Redirect,
} from "react-router-dom";

function AppComp({ i18n, t, tReady, match, history }) {
  if (!tReady) return <Loader/>;

  return (
    <BrowserRouter>
      <Switch>
        <Router t={t} i18n={i18n} history={history} match={match}  />
        <Redirect to={`/${i18n.language}`}/>
      </Switch>
    </BrowserRouter>
  );
}

const App = withTranslation("routes")(AppComp);

export default App;
