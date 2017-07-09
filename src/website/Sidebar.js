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
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}

export { Sidebar, SidebarItem };
