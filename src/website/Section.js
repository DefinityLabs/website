import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    let style = {};
    style['background-image'] = `url(${this.props.image})`

    return (
      <div className="section">
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    let style = {};
    style['background-image'] = `url(${this.props.image})`

    return (
      <div className="card">
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { Section, Card };
