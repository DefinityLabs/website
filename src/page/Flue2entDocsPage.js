import React, { Component } from 'react';
import UserGuidePage from './UserGuidePage';

const introduction = `

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
public class PageHeader extends PageObjectDsl<PageHeader> {
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
