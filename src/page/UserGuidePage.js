import React, { Component } from 'react';
import emoji from 'node-emoji';
import { Container } from 'reactstrap';
import Markdown from 'react-markdown';
import {Page, Title, PageContent} from '../website/Page';
import {Summary, SummaryItem} from '../website/Summary';

class UserGuidePage extends Component {
  render() {
    let sidebarItems = [];
    let pages = [];

    this.props.sections.forEach((section) => {
      let parameterizedTitle = section.title.toLowerCase()
            .replace('&', ' ').replace(/\s+/g, '-');

      sidebarItems.push(
        <SummaryItem href={"#" + parameterizedTitle} key={section.title}>{section.title}</SummaryItem>
      );

      pages.push(
        <PageContent id={parameterizedTitle} key={section.title}>
          <h2>{section.title}</h2>
          <Markdown source={section.content} />
        </PageContent>
      );
    });

    let productName = this.props.name;
    if (this.props.emoji) {
      productName = emoji.get(this.props.emoji) + " " + productName;
    }

    return (
      <Page>
        <Title>
          <Container>
            <h1>{productName} <small>Reference Guide</small></h1>
          </Container>
        </Title>
        <div className="full-page">
          <div className="row">
            <div className="col-md-3">
              <Summary>
                {sidebarItems}
              </Summary>
            </div>
            <div className="col-md-9">
              {pages}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default UserGuidePage;
