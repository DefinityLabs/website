import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductListPage from './page/ProductListPage';
import NotFoundPage from './page/NotFoundPage';

const history = createHistory();

class WebsiteRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={AboutPage} />
          <Route path="/products" component={ProductListPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default WebsiteRouter;
