import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ContributorPage from './page/ContributorPage';
import ProductListPage from './page/ProductListPage';
import Aux4Page from './page/Aux4Page';
import Aux4DocsPage from './page/Aux4DocsPage';
import CherryPickToolPage from './page/CherryPickToolPage';
import CherryPickToolDocsPage from './page/CherryPickToolDocsPage';
import NotFoundPage from './page/NotFoundPage';

const history = createHistory();

class WebsiteRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-us" component={AboutPage} />
          <Route exact path="/products" component={ProductListPage} />
          <Route exact path="/products/aux4" component={Aux4Page} />
          <Route exact path="/products/aux4/docs" component={Aux4DocsPage} />
          <Route exact path="/products/cherry-pick-tool" component={CherryPickToolPage} />
          <Route exact path="/products/cherry-pick-tool/docs" component={CherryPickToolDocsPage} />
          <Route exact path="/contributors" component={ContributorPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default WebsiteRouter;
