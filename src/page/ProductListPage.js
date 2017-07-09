import React, { Component } from 'react';
import { Container } from 'reactstrap';
import emoji from 'node-emoji';
import {Page, Title} from '../website/Page';
import {Section, Card} from '../website/Section';

class ProductListPage extends Component {
  render() {
    return (
      <Page>
        <Title>
          <div className="container">
            <h1>Products <small>are free to use & contribute</small></h1>
          </div>
        </Title>
        <Container>
          <Section>
            <Card>
              <h2>{emoji.get('rocket')} <a href="#/products/aux4">aux4</a></h2>
              <p>high level scripts</p>
            </Card>
            <Card>
              <h2>{emoji.get('cherries')} <a href="#/products/cherry-pick-tool">Cherry Pick Tool</a></h2>
              <p>deploy only what matters</p>
            </Card>
          </Section>
        </Container>
      </Page>
    );
  }
}

export default ProductListPage;
