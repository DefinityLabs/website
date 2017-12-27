import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Page, Title } from '../website/Page';
import Separator from '../website/Separator';
import Icon from '../website/Icon';
import { Section, Billboard } from '../website/Section';

import davidPicture from '../website/david.jpeg';

class ContributorPage extends Component {
  render() {
    return (
      <Page>
        <Title>
          <div className="container">
            <h1>
              Contributors <small />
            </h1>
          </div>
        </Title>
        <Section>
          <Billboard>
            <Container>
              <h4>to start making a difference</h4>
              <h2>
                a <small>small</small> step is enough
              </h2>
            </Container>
          </Billboard>
        </Section>
        <Separator />
        <Section>
          <Container>
            <div className="row">
              <div className="col-sm-12 col-md-2 text-center">
                <img src={davidPicture} alt="David Sobreira Gouvea" className="picture" />
              </div>
              <div className="col-sm-12 col-md-10">
                <div className="text-center text-md-left contributor contributor-founder">
                  <h4>founder</h4>
                  <h2>David Sobreira Gouvea</h2>
                  <ul className="references">
                    <li>
                      <Icon name="github" />{' '}
                      <a
                        href="https://github.com/dgouvea"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <Icon name="twitter" />{' '}
                      <a
                        href="https://twitter.com/DavidSGbr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <Icon name="linkedin" />{' '}
                      <a
                        href="https://linkedin.com/in/david-sobreira-gouvea"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                  <p>
                    As a Software Developer for more than 15 years, he has been worked in Brazil,
                    USA and Europe contributing to build high level software products. In order to
                    impact a large number of people, he decides to found an Open Source Software
                    organization focused on keep the developers on coding, automating the small
                    things which take us longer to do.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
        <Separator />
        <Section>
          <Billboard>
            <Container>
              <h4>Be part of our dream</h4>
              <h2>
                <a href="https://github.com/DefinityLabs" target="_blank" rel="noopener noreferrer">
                  join our team
                </a>
              </h2>
              <p>Help us to help other developers to keep on coding</p>
            </Container>
          </Billboard>
        </Section>
      </Page>
    );
  }
}

export default ContributorPage;
