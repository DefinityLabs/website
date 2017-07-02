import React, { Component } from 'react';
import {Page, Title} from '../website/Page';

class AboutPage extends Component {
  render() {
    return (
      <Page>
        <Title>
          <div className="container">
            <h1>About</h1>
          </div>
        </Title>
      </Page>
    );
  }
}

export default AboutPage;
