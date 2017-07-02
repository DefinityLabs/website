import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import Header from './website/Header';
import Footer from './website/Footer';
import Social from './website/Social';
import WebsiteRouter from './WebsiteRouter';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
        </Header>
        <WebsiteRouter />
        <Footer>
          <div className="row">
            <div className="col-md-8">
              &nbsp;
            </div>
            <div className="col-md-4 text-right">
              <Social
                github="https://github.com/DefinityLabs"
                twitter="DefinityLabs"
                facebook="DefinityLabs"
                medium="DefinityLabs"
                youtube="DefinityLabs"
              />
            </div>
          </div>
        </Footer>
      </div>
    );
  }
}

export default App;
