import React, { Component } from 'react';
import emoji from 'node-emoji';
import { Container } from 'reactstrap';
import Markdown from 'react-markdown';
import { Page, Title, PageContent } from '../website/Page';
import Icon from '../website/Icon';
import { Sidebar, SidebarItem } from '../website/Sidebar';

class ProductPage extends Component {
  componentDidMount() {
    document.title = this.props.name + ' | Definity Labs';
  }

  render() {
    let sidebarItems = [];
    let pages = [];

    this.props.sections.forEach(section => {
      let parameterizedTitle = section.title
        .toLowerCase()
        .replace('&', ' ')
        .replace(/\s+/g, '-');

      sidebarItems.push(
        <SidebarItem href={'#' + parameterizedTitle} key={section.title}>
          <Icon name={section.icon} /> {section.title}
        </SidebarItem>
      );

      pages.push(
        <PageContent id={parameterizedTitle} key={section.title}>
          <h2>
            <Icon name={section.icon} /> {section.title}
          </h2>
          <Markdown source={section.content} />
        </PageContent>
      );
    });

    let productName = this.props.name;
    if (this.props.emoji) {
      productName = emoji.get(this.props.emoji) + ' ' + productName;
    }

    return (
      <Page>
        <Title>
          <div className="container">
            <h1>
              {productName} <small>{this.props.slogan}</small>
            </h1>
          </div>
        </Title>
        <Container>
          <div className="row">
            <div className="col-md-3">
              <Sidebar>{sidebarItems}</Sidebar>
            </div>
            <div className="col-md-9">
              <div className="badges">
                <Markdown source={this.props.badges} />
              </div>
              {pages}
            </div>
          </div>
        </Container>
      </Page>
    );
  }
}

export default ProductPage;
