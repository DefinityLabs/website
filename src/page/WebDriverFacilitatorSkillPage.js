import React, { Component } from 'react';
import ProductPage from './ProductPage';

const badges = `
[![Build Status](https://travis-ci.org/DefinityLabs/webdriver-facilitator-skill.svg?branch=master)](https://travis-ci.org/DefinityLabs/webdriver-facilitator-skill)
[![Coverage Status](https://coveralls.io/repos/github/DefinityLabs/webdriver-facilitator-skill/badge.svg?branch=master)](https://coveralls.io/github/DefinityLabs/webdriver-facilitator-skill?branch=master)
[![npm version](https://badge.fury.io/js/webdriver-facilitator-skill.svg)](http://npmjs.com/package/webdriver-facilitator-skill)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;

const info = `

`;

const installation = `
\`\`\`bash
npm install --global webdriver-facilitator-skill
\`\`\`
`;

const gettingStarted = `
\`\`\`
visit {website}
\`\`\`

\`\`\`
fill {field} with {value}
\`\`\`

\`\`\`
fill element by id {id} with {value}
\`\`\`

\`\`\`
fill element by css {css} with {value}
\`\`\`

\`\`\`
fill element by class {className} with {value}
\`\`\`

\`\`\`
fill element by name {name} with {value}
\`\`\`

\`\`\`
fill element by xpath {xpath} with {value}
\`\`\`

\`\`\`
check checkbox {value}
\`\`\`

\`\`\`
check checkbox with name {value}
\`\`\`

\`\`\`
check radio {value}
\`\`\`

\`\`\`
click on {button} button
\`\`\`

\`\`\`
click on {link} link [if exists]
\`\`\`

\`\`\`
webdriver done
\`\`\`
`;


const userGuide = `
Are you interested in discover more about this awesome tool?
The complete [Facilitator reference documentation](#/products/webdriver-facilitator-skill/docs) is available.
`;

const github = `
This product is Open Source and you can find the source code on [GitHub](https://github.com/DefinityLabs/webdriver-facilitator-skill).
`;


const bugs = `
Did you find a bug? Do you need an additional feature? Please [report the issue](https://github.com/DefinityLabs/webdriver-facilitator-skill/issues) and we will work to improve the product as soon as possible.
`;


const license = `
The \`\`webdriver-facilitator-skill\`\` is released under version 2.0 of the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).
`;

const sections = [
  {title: 'Info', icon: 'info-circle', content: info},
  {title: 'Installation', icon: 'desktop', content: installation},
  {title: 'Getting Started', icon: 'star', content: gettingStarted},
  {title: 'User Guide', icon: 'user', content: userGuide},
  {title: 'GitHub', icon: 'github', content: github},
  {title: 'Bugs & Features', icon: 'bug', content: bugs},
  {title: 'License', icon: 'certificate', content: license}
];

class WebDriverFacilitatorSkillPage extends Component {
  render() {
    return (
      <ProductPage
        emoji="speech_balloon"
        name="WebDriver Facilitator Skill"
        slogan="webdriver as a natural language"
        badges={badges}
        sections={sections} />
    );
  }
}

export default WebDriverFacilitatorSkillPage;
