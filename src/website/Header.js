import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/"><img src={this.props.image} alt="definity" /></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.children}
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
