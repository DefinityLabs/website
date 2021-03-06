import React, { Component } from 'react';
import UserGuidePage from './UserGuidePage';

const introduction = `
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

const customSkill = `
##### Create a node.js project
First step is create a node project with suffix \`-facilitator-skill\`. e.g.: _custom-facilitator-skill_.

##### Install facilitator package
\`\`\`
npm install facilitator
\`\`\`

##### Register

\`\`\`javascript
module.exports = {
  install: (facilitator) => {
    facilitator.register("text {variableOne} {variableTwo}", (varOne, varTwo) => {
      ...
    });
  }
};
\`\`\`
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
  { title: 'Introduction', content: introduction },
  { title: 'Installation', content: installation },
  { title: 'Getting Started', content: gettingStarted },
  { title: 'Skills', content: skills },
  { title: 'Hot to build a custom skill', content: customSkill },
  { title: 'GitHub', content: github },
  { title: 'Bugs & Features', content: bugs },
  { title: 'License', content: license }
];

class FacilitatorDocsPage extends Component {
  render() {
    return <UserGuidePage emoji="speech_balloon" name="Facilitator" sections={sections} />;
  }
}

export default FacilitatorDocsPage;
