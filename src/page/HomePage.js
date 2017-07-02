import React, { Component } from 'react';
import Cover from '../website/Cover';
import {Page} from '../website/Page';
import {Section, Card} from '../website/Section';

import coverImage from '../website/cover.jpg';

class HomePage extends Component {
  render() {
    return (
      <Page>
        <Cover image={coverImage}>
          <h1 className="cover-heading">
            Cover your page.
            Cover your page.
            Cover your page.
          </h1>
        </Cover>
        <Section>
          <Card>
            <h3>Learn</h3>
            <p>Get smart on game-changing software practices and the Definity products that increase your chance of success.</p>
          </Card>
          <Card>
            <h3>Learn</h3>
            <p>Get smart on game-changing software practices and the Definity products that increase your chance of success.</p>
          </Card>
          <Card>
            <h3>Learn</h3>
            <p>Get smart on game-changing software practices and the Definity products that increase your chance of success.</p>
          </Card>
        </Section>
      </Page>
    );
  }
}

export default HomePage;
