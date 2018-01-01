import React, { Component } from 'react';
import emoji from 'node-emoji';
import { Container } from 'reactstrap';
import Markdown from 'react-markdown';
import { Page, Title, PageContent } from '../website/Page';
import { Summary, SummaryItem } from '../website/Summary';

class UserGuidePage extends Component {
  componentDidMount() {
    document.title = this.props.name + ' | Reference Guide | Definity Labs';
  }

  render() {
    let sidebarItems = [];
    let pages = [];

    this.props.sections.forEach(section => {
      includeSection(section, sidebarItems, pages);
    });

    let productName = this.props.name;
    if (this.props.emoji) {
      productName = emoji.get(this.props.emoji) + ' ' + productName;
    }

    return (
      <Page>
        <Title>
          <Container>
            <h1>
              {productName} <small>Reference Guide</small>
            </h1>
          </Container>
        </Title>
        <div className="full-page">
          <div className="row">
            <div className="col-md-3">
              <div className="summary-box">
                <Summary>{sidebarItems}</Summary>
              </div>
            </div>
            <div className="col-md-9">{pages}</div>
          </div>
        </div>
      </Page>
    );
  }
}

function includeSection(section, sidebarItems, pages, isSubItem = false) {
  let parameterizedTitle = section.title
    .toLowerCase()
    .replace('&', ' ')
    .replace(/\s+/g, '-');

  let sidebarSubItems = [];
  let subPages = [];

  let summary = <Summary>{sidebarSubItems}</Summary>;

  sidebarItems.push(
    <SummaryItem href={'#' + parameterizedTitle} key={section.title} summary={summary}>
      {section.title}
    </SummaryItem>
  );

  let title;

  if (isSubItem) {
    title = <h3>{section.title}</h3>;
  } else {
    title = <h2>{section.title}</h2>;
  }

  pages.push(
    <PageContent id={parameterizedTitle} key={section.title}>
      {title}
      <Markdown source={section.content} />
      {subPages}
    </PageContent>
  );

  if (section.subItems) {
    section.subItems.forEach(item => {
      includeSection(item, sidebarSubItems, subPages, true);
    });
  }
}

export default UserGuidePage;
