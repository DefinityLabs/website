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
            <div className="row">
              <div className="col-md-6">
                <p>&copy; Copyright {year} Definity Software, Inc. All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-right">
                <a href="/about">About</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
