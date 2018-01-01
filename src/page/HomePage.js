import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Cover from '../website/Cover';
import Icon from '../website/Icon';
import { Page } from '../website/Page';
import Separator from '../website/Separator';
import { Section, Billboard, Card } from '../website/Section';

import coverImage from '../website/automation.png';

class HomePage extends Component {
  componentDidMount() {
    document.title = 'Definity Labs';
  }

  render() {
    return (
      <Page>
        <Cover image={coverImage}>
          <div className="cover-glass text-right">
            <div className="row">
              <div className="col-12 col-md-5 offset-md-7">
                <h1 className="cover-heading">
                  automate the <small>small things</small> that make a{' '}
                  <strong>big difference</strong>
                </h1>
              </div>
            </div>
          </div>
        </Cover>
        <Container>
          <Section>
            <Card>
              <h3>
                <Icon name="search" /> Discover
              </h3>
              <p>Which tool can help you to be more productive.</p>
            </Card>
            <Card>
              <h3>
                <Icon name="graduation-cap" /> Learn
              </h3>
              <p>How to use the tools and what they can do for you.</p>
            </Card>
            <Card>
              <h3>
                <Icon name="magic" /> Automate
              </h3>
              <p>Let the tools do the job for you while you can do what really matters.</p>
            </Card>
          </Section>
          <Separator />
          <Section>
            <Billboard>
              <h4>Our Products</h4>
              <h2>
                Open Source <Link to="/products">products</Link> can automate your job
              </h2>
            </Billboard>
          </Section>
        </Container>
      </Page>
    );
  }
}

export default HomePage;
