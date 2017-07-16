import React, { Component } from 'react';
import UserGuidePage from './UserGuidePage';

const introduction = `
\`\`aux4\`\` is a tool responsible for helping you to automate your job. In a single tool you can manage and simplify
the tasks you have to do during the development process. \`\`aux4\`\` can be used not only for developers but for
DevOps team as well.

The main goal of this tool is create a safe build environment. Unfortunately
sometimes happens that the developer push his/her changes to the repository before run the unit tests, or maybe when the developer
make a partial commit and forget to add some files and the application cannot be build.

In order to make this build safe, you can create a script that run all tests and them push the changes to the repository.
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

const license = `
The \`\`aux4\`\` is released under version 2.0 of the [Apache License](http://www.apache.org/licenses/LICENSE-2.0).
`;

const sections = [
  {title: 'Introduction', content: introduction},
  {title: 'Installation', content: installation},
  {title: 'Getting Started', content: gettingStarted},
  {title: 'GitHub', content: github},
  {title: 'Bugs & Features', content: bugs},
  {title: 'License', content: license}
];

class Aux4DocsPage extends Component {
  render() {
    return (
      <UserGuidePage
        emoji="rocket"
        name="aux4"
        sections={sections} />
    );
  }
}

export default Aux4DocsPage;
