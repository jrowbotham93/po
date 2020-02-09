import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Products from './pages/products';
import Services from './pages/services';
import Story from './pages/story';
import Ukraine from './pages/ukraine';
import Menu from './components/Menu';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Router = ({ i18n, t, history, match }) => {
  ScrollToTop();
  return (
    <>
      <Menu t={t} i18n={i18n} history={history} match={match} />
      <Switch i18n={i18n}>
        <Route exact path={`/:lang(en|ru)`} component={Home} />
        <Route exact path={`/:lang(en|ru)/contact`} component={Contact}></Route>
        <Route
          exact
          path={`/:lang(en|ru)/services`}
          component={Services}
        ></Route>
        <Route
          exact
          path={`/:lang(en|ru)/products`}
          component={Products}
        ></Route>
        <Route exact path={`/:lang(en|ru)/ourstory`} component={Story}></Route>
        <Route exact path={`/:lang(en|ru)/ukraine`} component={Ukraine}></Route>
      </Switch>
      <Footer i18n={i18n} />
    </>
  );
};
export default Router;
