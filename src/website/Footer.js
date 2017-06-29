import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <footer>
        <div className="container">
          {this.props.children}
          <div className="copyright">
            <p>&copy; Copyright {year} Definity Software, Inc. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
