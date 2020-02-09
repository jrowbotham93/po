import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Products from './pages/products';
import Services from './pages/services';
import Story from './pages/story';
import Ukraine from './pages/ukraine';
import Menu from './components/Menu';
import Footer from './components/Footer';
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
      <Footer />
    </>
  );
};
export default Router;
