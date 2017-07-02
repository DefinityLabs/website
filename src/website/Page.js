import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div className="title">
        {this.props.children}
      </div>
    );
  }
}

export { Page, Title };
