import React, { Component } from 'react';
import ProductPage from './ProductPage';

const badges = `
[![Build Status](https://travis-ci.org/DefinityLabs/flue2ent.svg?branch=master)](https://travis-ci.org/DefinityLabs/flue2ent)
[![Coverage Status](https://coveralls.io/repos/github/DefinityLabs/flue2ent/badge.svg?branch=master)](https://coveralls.io/github/DefinityLabs/flue2ent?branch=master)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;

const info = `
\`flue2ent\` is an API responsible for making the end-to-end tests in Java interesting again.
The proposal of \`flue2ent\` is wraps the Selenium API making it more readable and easy to use.
\`flue2ent\` means fluent + e2e (end-to-end), fluent is a reference for Martin Fowler's [Fluent Interface](https://www.martinfowler.com/bliki/FluentInterface.html).
`;

const installation = `
### Maven
\`\`\`
<dependency>
  <groupId>org.definitylabs.flue2ent</groupId>
  <artifactId>flue2ent-core</artifactId>
  <version>1.0.0</version>
  <scope>test</scope>
</dependency>
\`\`\`

### Gradle
\`\`\`
testCompile group: 'org.definitylabs.flue2ent', name: 'flue2ent-core', version: '1.0.0'
\`\`\`
`;

const gettingStarted = `
First step is get an instance of Website based on Selenium WebDriver.
\`\`\`
WebDriver driver = ...; // get web driver

String url = "<your website>";
Website website = Website.with(driver).visit(url);
\`\`\`

After that, the website can wait for page load or maybe wait until some element has been found.
\`\`\`
website.justWait().until(Website.isLoad());
or
website.justWait().until(website.hasFound(element(By.tagName("h1"))));
\`\`\`

The Website is able find elements like WebDriver.
\`\`\`
String header = website.findElement(By.tagName("h1")).text();
\`\`\`

Need a screenshot? Why not!?
\`\`\`
website.screenshot().take();
\`\`\`
By default it saves at \`./screenshot/screenshot_yyyyMMddHHmmssSSS.png\`. Don't you like it? No problem, there are few other options available.

### Page Object
[Page Object](https://martinfowler.com/bliki/PageObject.html) is the most common pattern for e2e tests.
It can be easily implemented using flue2ent.

\`\`\`
public class PageHeader extends PageObject<PageHeader> {
    private PageHeader() {
    }

    public static PageHeader pageHeader() {
        return new PageHeader();
    }

    public WebElementWrapper title() {
        return website().findElement(By.tagName("h1"));
    }
}
...
String header = website.at(pageHeader()).title().text();
\`\`\`

Too many lines? It could be even easier.
\`\`\`
public interface PageHeader {
    @FindElementBy(tagName = "h1")
    WebElementWrapper title();
}
...
String header = website.at(PageHeader.class).title().text();
\`\`\`

There are many other interesting features. Please take a look at [User Guide](#/products/flue2ent/docs).
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
