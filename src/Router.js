import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Products from './pages/services';
import Services from './pages/products';
import Story from './pages/story';
import Ukraine from './pages/ukraine';
import Menu from './components/Menu';

const Router = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/ourstory" component={Story}></Route>
        <Route exact path="/ukraine" component={Ukraine}></Route>
      </Switch>
    </>
  );
};
export default Router;
