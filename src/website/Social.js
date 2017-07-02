import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  render() {
    let links = [];

    let i = 0;
    let properties = Object.keys(this.props);
    properties.forEach((property) => {
      let iconClassName = `fa fa-${property}`;
      links.push(
        <li key={++i}>
          <a href={this.props[property]} target="_blank" rel="noopener noreferrer">
            <i className={iconClassName} />
          </a>
        </li>
      );
    });

    return (
      <ul className="social">
        {links}
      </ul>
    );
  }
}

export default Social;
