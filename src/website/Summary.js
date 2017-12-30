import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <ol>{this.props.children}</ol>
      </div>
    );
  }
}

class SummaryItem extends Component {
  goTo(id) {
    window.scroll(0, findElementPosition(document.querySelector(id)) - 10);
    return false;
  }

  render() {
    return (
      <li>
        <a onClick={this.goTo.bind(this, this.props.href)}>{this.props.children}</a>
        {this.props.summary}
      </li>
    );
  }
}

function findElementPosition(obj) {
  var curtop = 0;
  let element = obj;
  while (element.offsetParent) {
    curtop += element.offsetTop;
    element = element.offsetParent;
  }
  return [curtop];
}

export { Summary, SummaryItem };
