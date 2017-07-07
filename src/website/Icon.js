import React, { Component } from 'react';

class Icon extends Component {
  render() {
    let className = `fa fa-${this.props.name}`;
    return (
      <i className={className}></i>
    );
  }
}

export default Icon;
