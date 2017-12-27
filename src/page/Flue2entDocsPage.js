import React, { Component } from 'react';
import UserGuidePage from './UserGuidePage';

const introduction = `

`;

const installation = `
`;

const gettingStarted = `

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
  { title: 'Introduction', content: introduction },
  { title: 'Installation', content: installation },
  { title: 'Getting Started', content: gettingStarted },
  { title: 'GitHub', content: github },
  { title: 'Bugs & Features', content: bugs },
  { title: 'License', content: license }
];

class Flue2entDocsPage extends Component {
  render() {
    return <UserGuidePage emoji="robot_face" name="flue2ent" sections={sections} />;
  }
}

export default Flue2entDocsPage;
