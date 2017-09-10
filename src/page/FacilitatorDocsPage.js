import React, { Component } from 'react';
import UserGuidePage from './UserGuidePage';

const introduction = `

`;

const installation = `
\`\`\`bash
npm install --global facilitator
\`\`\`
`;

const gettingStarted = `

`;


const userGuide = `
Are you interested in discover more about this awesome tool?
The complete [Facilitator reference documentation](#/products/facilitator/docs) is available.
`;

const skills = `
`;

const skillWebDriver = `

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
  {title: 'Introduction', content: introduction},
  {title: 'Installation', content: installation},
  {title: 'Getting Started', content: gettingStarted},
  {title: 'Skills', content: skills},
  {title: 'GitHub', content: github},
  {title: 'Bugs & Features', content: bugs},
  {title: 'License', content: license}
];

class FacilitatorDocsPage extends Component {
  render() {
    return (
      <UserGuidePage
        emoji="speech_balloon"
        name="Facilitator"
        sections={sections} />
    );
  }
}

export default FacilitatorDocsPage;
