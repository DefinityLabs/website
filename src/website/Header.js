import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';

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
          <a className="navbar-brand" href=".">Navbar</a>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.children}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
