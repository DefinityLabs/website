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

const upgrade = `
\`\`\`bash
aux4 $ upgrade
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

const configurationFile = `
**Aux4** is a simple tool, it just need a single configuration file, which is called \`\`.aux4\`\`.
It's a simple [json](http://www.json.org) file, representing an object with a list of profiles.

\`\`\`
{
  "profiles": []
}
\`\`\`

### Profile
The \`\`profile\`\` is represented by an object with a name and a list of commands. The application starts based on
the \`\`main\`\` profile.

\`\`\`
{
  "profiles": [
    {
      "name": "main",
      "commands": []
    }
  ]
}
\`\`\`

### Command
The \`\`command\`\` is represented by an object with a value and a list of instructions with should be executed.
These instructions will be executed in a terminal, it depends on the Operational System.

\`\`\`
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "hello",
          "execute": []
        }
      ]
    }
  ]
}
\`\`\`

The \`\`command\`\` also can be documented, including the \`\`help\`\` attribute,
which is represented by an object with a description and a list of variables.

\`\`\`
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "hello",
          "execute": [],
          "help": {
            "description": "...",
            "variables": []
          }
        }
      ]
    }
  ]
}
\`\`\`

The help structure is more detailed in the help chapter.
`;

const variables = `
The \`\`variables\`\` can be used in the command execute instructions. They can be predefined or parameterized.
There are two ways to represent a variable: \`\`\${name}\`\` or \`\`$name\`\`.

In the example below, there is a single command responsible for create a directory,
where the \`\`dirname\`\` variable represent the directory should be created.

\`\`\`
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "create-dir",
          "execute": [
            "mkdir \${dirname}"
          ],
          "help": {
            "description": "create a directory",
            "variables": [
              {
                "name": "dirname",
                "text": "The directory name"
              }
            ]
          }
        }
      ]
    }
  ]
}
\`\`\`

Based on this example, there are two different ways to set a value for the \`\`dirname\`\` variable:

### Parameter
The first one, is using a parameter:

\`\`\`
$ aux4 create-dir --dirname test
\`\`\`

### Prompt
The second one, is using a the prompt to ask the user to fill the value:

\`\`\`
$ aux4 create-dir
The directory name: test
\`\`\`

In this case, the prompt uses the \`\`text\`\` attribute from the variable to ask the user to fill the value.

### Default Value
There is a third option as well, using a default value for the variable. In this case, a \`\`default\`\` attribute
should be included in the variable object.

\`\`\`
...
  {
    "name": "dirname",
    "text": "The directory name",
    "default": "test"
  }
...
\`\`\`

If the default value is added to the variable, the prompt does not ask the user to fill the variable,
just assumes the default value for this one.

\`\`\`
$ aux4 create-dir
\`\`\`

Even using the default value, the user can override it using a parameterized variable.

\`\`\`
$ aux4 create-dir --dirname other
\`\`\`
`;

const logging = `
**Aux4** has a logging feature that allows the user be informed what is executing.

\`\`\`
...
  {
    "execute": [
      "log:create $dirname",
      "mkdir $dirname",
      "log:directory $dirname was created"
    ]
  }
...
\`\`\`

After execute, the logs are printed in the console:

\`\`\`
$ aux4 create-dir --dirname test
create test
directory test was created
\`\`\`
`;

const multipleProfiles = `
The \`\`profiles\`\` are responsible for group the commands in categories.

\`\`\`
{
  "profiles": [
    {
      "name": "main",
      "commands": [
        {
          "value": "test",
          "execute": [
            "profile:test"
          ]
        }
      ]
    },
    {
      "name": "test",
      "commands": [
        {
          "value": "unit",
          "execute": [
            "echo 'run unit tests'"
          ]
        },
        {
          "value": "integration",
          "execute": [
            "echo 'run integration tests'"
          ]
        }
      ]
    }
  ]
}
\`\`\`

To run the unit tests:
\`\`\`
$ aux4 test unit
run unit tests
\`\`\`

To run the integration tests:
\`\`\`
$ aux4 test integration
run integration tests
\`\`\`
`;

const help = `
The help manual is automatic generated by **aux4**.

\`\`\`
$ aux4 --help
  create-dir   create a directory
                 - dirname The directory name
\`\`\`

The user can specify the command.

\`\`\`
$ aux4 create-dir --help
  create-dir   create a directory
                 - dirname The directory name
\`\`\`

In cases where the \`\`default value\`\` is setted, it is displayed after the variable name.


\`\`\`
$ aux4 --help
  create-dir   create a directory
                 - dirname [test] The directory name
\`\`\`
`;

const security = `
**Aux4** allows the user to encrypt some information in the configuration file.

To encrypt the some value:

\`\`\`
$ aux4 $ encrypt password
0b266d4fb10dd8c0
\`\`\`

To use an encrypted value in the instruction:

\`\`\`
...
  {
    "execute": [
      "echo crypto(0b266d4fb10dd8c0)"
    ]
  }
...
\`\`\`

### Advanced
It is recommended define a token in a system variable, in order to protect the generated encrypted information
to be uncrypted in a single machine.

\`\`\`
$ export AUX4_SECURITY_KEY=C1E111867141295954C8DF64426FF
$ aux4 $ encrypt passowrd
2b146e0b0b67b9c0
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
  {title: 'Configuration File', content: configurationFile},
  {title: 'Variables', content: variables},
  {title: 'Logging', content: logging},
  {title: 'Using Multiple Profiles', content: multipleProfiles},
  {title: 'Help', content: help},
  {title: 'Security', content: security},
  {title: 'Upgrade', content: upgrade},
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
