import React, { Component } from 'react';
import ProductPage from './ProductPage';

const badges = `
[![Build Status](https://travis-ci.org/DefinityLabs/cherry-pick-tool.svg?branch=master)](https://travis-ci.org/DefinityLabs/cherry-pick-tool)
[![Coverage Status](https://coveralls.io/repos/github/DefinityLabs/cherry-pick-tool/badge.svg?branch=master)](https://coveralls.io/github/DefinityLabs/cherry-pick-tool?branch=master)
[![npm version](https://badge.fury.io/js/cherry-pick-tool.svg)](http://npmjs.com/package/cherry-pick-tool)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;

const installation = `
\`\`\`bash
npm install --global cherry-pick-tool
\`\`\`

Add the .cherrypick file to the \`\`.gitignore\`\`.

\`\`\`bash
echo '.cherrypick' >> .gitignore
git add .gitignore
git commit -m "Add .cherrypick to the .gitignore"
\`\`\`
`;

const gettingStarted = `
\`\`\`
$ cherry-pick-tool

🤔  Commands:
         ? / h  Display a help message
             c  Clear the console
       <enter>  Append an empty line in the console
             o  Display the options
    <down> / n  Go to the next commit
      <up> / p  Go to the previous commit
             0  Go to the first commit
             i  Display the current commit
             f  Display the files affected by the current commit
             b  Display the body of the current commit
             v  Display the content of the cherry pick file
         + / a  Add the current commit to the cherry pick file
         - / r  Remove the current commit from the cherry pick file
             L  Load .cherrypick file if exists
             w  Save the cherry pick file as .cherrypick
             #  Clear cherry pick file it doesn't save the file
             x  Execute cherry pick
             q  Exit the application
\`\`\`
`;

const github = `
This product is Open Source and you can find the source code on [GitHub](https://github.com/DefinityLabs/cherry-pick-tool).
`;


const bugs = `
Did you find a bug? Do you need an additional feature? Please [report the issue](https://github.com/DefinityLabs/cherry-pick-tool/issues) and we will work to improve the product as soon as possible.
`;

const sections = [
  {title: 'Installation', icon: 'desktop', content: installation},
  {title: 'Getting Started', icon: 'home', content: gettingStarted},
  {title: 'GitHub', icon: 'github', content: github},
  {title: 'Bugs & Features', icon: 'bug', content: bugs}
];

class CherryPickToolPage extends Component {
  render() {
    return (
      <ProductPage
        emoji="cherries"
        name="Cherry Pick Tool"
        slogan="deploy only what matters"
        badges={badges}
        sections={sections} />
    );
  }
}

export default CherryPickToolPage;
