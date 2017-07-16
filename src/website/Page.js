import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  componentDidMount(prevProps) {
      window.scrollTo(0, 0);
  }

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

class PageContent extends Component {
  render() {
    return (
      <div id={this.props.id} className="page-content">
        {this.props.children}
      </div>
    );
  }
}

export { Page, Title, PageContent };
