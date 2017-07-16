import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SidebarItem extends Component {
  goTo(id) {
    window.scroll(0, findElementPosition(document.querySelector(id)) - 40);
    return false;
  }

  render() {
    return (
      <li>
        <a onClick={this.goTo.bind(this, this.props.href)}>{this.props.children}</a>
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

export { Sidebar, SidebarItem };
