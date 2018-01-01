import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Page, Title } from '../website/Page';
import Separator from '../website/Separator';
import { Section, Billboard } from '../website/Section';

class AboutPage extends Component {
  componentDidMount() {
    document.title = 'About Us | Definity Labs';
  }

  render() {
    return (
      <Page>
        <Title>
          <div className="container">
            <h1>
              Definity Labs <small>an Open Source Software organization</small>
            </h1>
          </div>
        </Title>
        <Section>
          <Billboard>
            <Container>
              <h4>Our Mission</h4>
              <h2>
                help the <span className="coding">developers</span> to keep on{' '}
                <span className="coding">coding</span>
              </h2>
              <p>We are developers and as developers we know what we do love: coding!</p>
              <p>
                But we alson know how hard is coding in our current scenario, where we need to share
                our time doing many other things, like merging, building, deploying, testing and so
                on.
              </p>
            </Container>
          </Billboard>
        </Section>
        <Separator />
        <Section>
          <Billboard>
            <Container>
              <h4>What We Do</h4>
              <h2>
                automate the <small>small things</small> that make a <strong>big difference</strong>
              </h2>
              <p>Have you realized how much time we spent doing a boring task?</p>
              <p>
                Boring tasks make us bored and not motivated to do our job, it is time to stop doing
                such tasks and start to automate them.
              </p>
            </Container>
          </Billboard>
        </Section>
        <Separator />
        <Section>
          <Billboard>
            <Container>
              <h4>How We Do It</h4>
              <h2>
                creating <small>small</small> <strong>tools</strong> to automate our lives
              </h2>
              <p>
                We believe that automating small tasks which make us waste some time can make us
                more productive!
              </p>
              <p>
                Our tools are not magic, they were build in order to resolve a single problem, they
                are easy to use and easy to understand their proposal.
              </p>
            </Container>
          </Billboard>
        </Section>
      </Page>
    );
  }
}

export default AboutPage;
