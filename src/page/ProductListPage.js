import React, { Component } from 'react';
import {Page, Title} from '../website/Page';

class ProductListPage extends Component {
  render() {
    return (
      <Page>
        <Title>
          <div className="container">
            <h1>Products <small>are free to use & contribute</small></h1>
          </div>
        </Title>
      </Page>
    );
  }
}

export default ProductListPage;
