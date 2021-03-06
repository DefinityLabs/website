import React, { Component } from 'react';
import ProductPage from './ProductPage';

const badges = `
[![Build Status](https://travis-ci.org/DefinityLabs/facilitator.svg?branch=master)](https://travis-ci.org/DefinityLabs/facilitator)
[![Coverage Status](https://coveralls.io/repos/github/DefinityLabs/facilitator/badge.svg?branch=master)](https://coveralls.io/github/DefinityLabs/facilitator?branch=master)
[![npm version](https://badge.fury.io/js/facilitator.svg)](http://npmjs.com/package/facilitator)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;

const info = `
Facilitator is an engine responsible for converting natural language text to programming language.
`;

const installation = `
\`\`\`bash
npm install --global facilitator
\`\`\`
`;

const gettingStarted = `
##### Hello World
Create a simple text file \`example.txt\`:
\`\`\`
let "name" as "John"
print "Hello {{name}}"
\`\`\`

Execute it:
\`\`\`bash
$ facilitator example.txt
[OUT] Hello John
\`\`\`

##### Defining Actions
Create a text file \`actions.txt\`:
\`\`\`
define:display name
print "Hello {{name}}"
\`\`\`

Create a text file \`example.txt\`:
\`\`\`
let "name" as "John"
display name
\`\`\`

Execute it:
\`\`\`bash
$ facilitator actions.txt example.txt
[OUT] Hello John
\`\`\`
`;

const skills = `
[WebDriver](#/products/webdriver-facilitator-skill) - webdriver as natural language
`;

const userGuide = `
Are you interested in discover more about this awesome tool?
The complete [Facilitator reference documentation](#/products/facilitator/docs) is available.
`;

const github = `
This product is Open Source and you can find the source code on [GitHub](https://github.com/DefinityLabs/facilitator).
`;


const bugs = `
Did you find a bug? Do you need an additional feature? Please [report the issue](https://github.com/DefinityLabs/facilitator/issues) and we will work to improve the product as soon as possible.
`;


const license = `
The \`\`facilitator\`\` is released under version 2.0 of the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).
`;

const sections = [
  {title: 'Info', icon: 'info-circle', content: info},
  {title: 'Installation', icon: 'desktop', content: installation},
  {title: 'Getting Started', icon: 'star', content: gettingStarted},
  {title: 'Skills', icon: 'cube', content: skills},
  {title: 'User Guide', icon: 'user', content: userGuide},
  {title: 'GitHub', icon: 'github', content: github},
  {title: 'Bugs & Features', icon: 'bug', content: bugs},
  {title: 'License', icon: 'certificate', content: license}
];

class FacilitatorPage extends Component {
  render() {
    return (
      <ProductPage
        emoji="speech_balloon"
        name="Facilitator"
        slogan="natural language as a programming language"
        badges={badges}
        sections={sections} />
    );
  }
}

export default FacilitatorPage;
