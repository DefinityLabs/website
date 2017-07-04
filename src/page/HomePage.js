import React, { Component } from 'react';
import Cover from '../website/Cover';
import {Page} from '../website/Page';
import Separator from '../website/Separator';
import {Section, Card} from '../website/Section';

import coverImage from '../website/automation.png';

class HomePage extends Component {
  render() {
    return (
      <Page>
        <Cover image={coverImage}>
          <div className="cover-glass text-right">
            <div className="row">
              <div className="col-12 col-md-5 offset-md-7">
                <h1 className="cover-heading">
                  automate the <small>small things</small> that make a <strong>big difference</strong>
                </h1>
              </div>
            </div>
          </div>
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
        <Separator/>
        <Section>
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
