import React, { Component } from 'react';
import './Cover.css';

class Cover extends Component {
  render() {
    let style = {};
    style['background-image'] = `url(${this.props.image})`

    return (
      <div className="site-wrapper" style={style}>
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="inner cover">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
