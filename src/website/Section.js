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

    return (
      <div className="card col">
        {this.props.children}
      </div>
    );
  }
}

class Billboard extends Component {
  render() {
    let style = {};
    style['background-image'] = `url(${this.props.image})`

    return (
      <div className="billboard col">
        {this.props.children}
      </div>
    );
  }
}

export { Section, Card, Billboard };
