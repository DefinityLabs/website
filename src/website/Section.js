import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    let className = `section row align-items-center ${this.props.className}`;

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

class Card extends Component {
  render() {
    let style = {};
    style['background-image'] = `url(${this.props.image})`

    let className = `card col-md-4 col-sm-12 ${this.props.className}`;

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

class Billboard extends Component {
  render() {
    let style = {};
    style['background-image'] = `url(${this.props.image})`

    let className = `billboard col ${this.props.className}`;

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export { Section, Card, Billboard };
