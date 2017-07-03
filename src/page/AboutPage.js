import React, { Component } from 'react';
import {Page, Title} from '../website/Page';

class AboutPage extends Component {
  render() {
    return (
      <Page>
        <Title>
          <div className="container">
            <h1>Definity <small>a Open Source Software organization</small></h1>
          </div>
        </Title>
      </Page>
    );
  }
}

export default AboutPage;
