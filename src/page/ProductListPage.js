import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
              <h2>{emoji.get('rocket')} <Link to="/products/aux4">aux4</Link></h2>
              <p>high level scripts</p>
            </Card>
            <Card>
              <h2>{emoji.get('cherries')} <Link to="/products/cherry-pick-tool">Cherry Pick Tool</Link></h2>
              <p>deploy only what matters</p>
            </Card>
            <Card>
              <h2>{emoji.get('speech_balloon')} <Link to="/products/facilitator">Facilitator</Link></h2>
              <p>natural language as a programming language</p>
            </Card>
            {/*
            <Card>
              <h2>{emoji.get('speech_balloon')} <Link to="/products/webdriver-facilitator-skill">WebDriver Facilitator Skill</Link></h2>
              <p>natural language as a programming language</p>
            </Card>
            */}
          </Section>
        </Container>
      </Page>
    );
  }
}

export default ProductListPage;
