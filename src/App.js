import es6 from 'es6-promise/auto';
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from './website/Header';
import Footer from './website/Footer';
import Social from './website/Social';
import WebsiteRouter from './WebsiteRouter';

import logo from './definity.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header image={logo}>
          <Nav navbar>
            <NavItem>
              <NavLink href="#/products">Products</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="#/about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/contributors">Contributors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://content.definitylabs.org" target="_blank">
                Content
              </NavLink>
            </NavItem>
          </Nav>
        </Header>
        <WebsiteRouter />
        <Footer>
          <div className="row">
            <div className="col-md-8">&nbsp;</div>
            <div className="col-md-4 text-right">
              <Social
                github="https://github.com/DefinityLabs"
                linkedin="https://www.linkedin.com/company/definitylabs/"
                twitter="https://twitter.com/DefinityLabs"
                medium="http://content.definitylabs.org"
              />
            </div>
          </div>
        </Footer>
      </div>
    );
  }
}

export default App;
