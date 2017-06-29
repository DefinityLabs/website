import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import coverImage from './website/cover.jpg';
import Header from './website/Header';
import Cover from './website/Cover';
import Footer from './website/Footer';
import Social from './website/Social';
import {Section, Card} from './website/Section';

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
        <Cover image={coverImage}>
          <h1 className="cover-heading">
            Cover your page.
            Cover your page.
            Cover your page.
          </h1>
        </Cover>
        <Section>
          <Card>
            <h3>Learn</h3>
            <p>Get smart on game-changing software practices and the Pivotal products that increase your chance of success.</p>
          </Card>
          <Card>
            <h3>Learn</h3>
            <p>Get smart on game-changing software practices and the Pivotal products that increase your chance of success.</p>
          </Card>
          <Card>
            <h3>Learn</h3>
            <p>Get smart on game-changing software practices and the Pivotal products that increase your chance of success.</p>
          </Card>
        </Section>
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
