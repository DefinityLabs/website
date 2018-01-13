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
                <p>&copy; Copyright {year} Definity Labs. All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-right footer-links">
                <a href="#/about-us">About Us</a>
                <a href="#/contributors">Contributors</a>
                <a href="http://content.definitylabs.com" rel="noopener noreferrer" target="_blank">
                  Content
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
