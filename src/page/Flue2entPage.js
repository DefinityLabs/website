import React, { Component } from 'react';
import ProductPage from './ProductPage';

const badges = `
[![Build Status](https://travis-ci.org/DefinityLabs/flue2ent.svg?branch=master)](https://travis-ci.org/DefinityLabs/flue2ent)
[![Coverage Status](https://coveralls.io/repos/github/DefinityLabs/flue2ent/badge.svg?branch=master)](https://coveralls.io/github/DefinityLabs/flue2ent?branch=master)
[![npm version](https://badge.fury.io/js/flue2ent.svg)](http://npmjs.com/package/flue2ent)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;

const info = `

`;

const installation = `

`;

const gettingStarted = `

`;

const userGuide = `
Are you interested in discover more about this awesome tool?
The complete [flue2ent reference documentation](#/products/flue2ent/docs) is available.
`;

const github = `
This product is Open Source and you can find the source code on [GitHub](https://github.com/DefinityLabs/flue2ent).
`;

const bugs = `
Did you find a bug? Do you need an additional feature? Please [report the issue](https://github.com/DefinityLabs/flue2ent/issues) and we will work to improve the product as soon as possible.
`;

const license = `
The \`\`flue2ent\`\` is released under version 2.0 of the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).
`;

const sections = [
  { title: 'Info', icon: 'info-circle', content: info },
  { title: 'Installation', icon: 'desktop', content: installation },
  { title: 'Getting Started', icon: 'star', content: gettingStarted },
  { title: 'User Guide', icon: 'user', content: userGuide },
  { title: 'GitHub', icon: 'github', content: github },
  { title: 'Bugs & Features', icon: 'bug', content: bugs },
  { title: 'License', icon: 'certificate', content: license }
];

class Flue2entPage extends Component {
  render() {
    return (
      <ProductPage
        emoji="robot_face"
        name="flue2ent"
        slogan="fluent e2e tests"
        badges={badges}
        sections={sections}
      />
    );
  }
}

export default Flue2entPage;
