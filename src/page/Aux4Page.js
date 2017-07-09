import React, { Component } from 'react';
import ProductPage from './ProductPage';

const badges = `
[![Build Status](https://travis-ci.org/DefinityLabs/aux4.svg?branch=master)](https://travis-ci.org/DefinityLabs/aux4)
[![Coverage Status](https://coveralls.io/repos/github/DefinityLabs/aux4/badge.svg?branch=master)](https://coveralls.io/github/DefinityLabs/aux4?branch=master)
[![npm version](https://badge.fury.io/js/aux4.svg)](http://npmjs.com/package/aux4)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;

const installation = `
\`\`\`bash
npm install --global aux4
\`\`\`
`;

const gettingStarted = `
The fist step is create the configuration file. It is a regular json file and it should be called \`\`.aux4\`\`.

\`\`\`json
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "hello",
          "execute": [
            "echo 'Hello World'"
          ]
        },
        {
          "value": "bye",
          "execute": [
            "echo 'bye!'"
          ]
        }
      ]
    }
  ]
}
\`\`\`

The json structure is quite simple. It is an object with a list of profiles.
Each profile has a name and a list of commands. A command has a value and a list of instructions to be executed.

In this example, there is a single profile called \`\`main\`\` and two commands: \`\`hello\`\` and \`\`bye\`\`.

\`\`\`bash
$ aux4 hello
Hello World
\`\`\`

\`\`\`bash
$ aux4 bye
bye!
\`\`\`
`;

const github = `
This product is Open Source and you can find the source code on [GitHub](https://github.com/DefinityLabs/aux4).
`;

const bugs = `
Did you find a bug? Do you need an additional feature? Please [report the issue](https://github.com/DefinityLabs/aux4/issues) and we will work to improve the product as soon as possible.
`;

const sections = [
  {title: 'Installation', icon: 'desktop', content: installation},
  {title: 'Getting Started', icon: 'home', content: gettingStarted},
  {title: 'GitHub', icon: 'github', content: github},
  {title: 'Bugs & Features', icon: 'bug', content: bugs}
];

class Aux4Page extends Component {
  render() {
    return (
      <ProductPage
        emoji="rocket"
        name="Aux4"
        slogan="high level scripts"
        badges={badges}
        sections={sections} />
    );
  }
}

export default Aux4Page;
