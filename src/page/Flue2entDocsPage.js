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

const website = `
The \`Website\` class is the reference to the current website.
`;

const plugins = `
### Page
Get information related to the current page.

\`\`\`
// returns the current url
website.page().getUrl();

// returns the page title
website.page().getTitle();

// returns if HTML DOM is load
website.page().isLoad();
\`\`\`

### Waiter
Wait until *the condition* **is true** or **is not null**. This plugin uses [Selenium FluentWait](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/FluentWait.html).

\`\`\`
// waits until page is load
website.justWait().until(website -> website.page().isLoad());
website.justWait().until(Website.isLoad());

// defines timeout as 10s
website.justWait().upTo(10, TimeUnit.SECONDS).until(Website.isLoad());

// defines timeout as 10s polling every 1s
website.justWait().upTo(10, TimeUnit.SECONDS).pollingEvery(1, TimeUnit.SECONDS).until(Website.isLoad());

// ignores exception
website.justWait().ignoring(StaleElementReferenceException.class).until(website.hasFound(element(By.tagName("h1"))));
\`\`\`

### Scroll
Plugin responsible for scrolling the page.

\`\`\`
// scroll to the top of the page
website.scroll().top();

// scroll 250px up
website.scroll().up();

// scroll 250px down
website.scroll().down();

// scroll to the bottom of the page
website.scroll().bottom();
\`\`\`

Scroll to or by a predefined position.
\`\`\`
// javascript window.scrollTo(x, y)
website.scroll().to(x, y);

// javascript window.scrollBy(x, y)
website.scroll().by(x, y);
\`\`\`

### JavaScript
Executes javascript script.

\`\`\`
String script = "...";

// execute script
website.javascript().execute(script, args);

// execute script asynchronously
website.javascript().executeAsync(script, args);
\`\`\`

### Screenshot
Takes a screenshot

\`\`\`
// saves file at ./screenshots/screenshot_yyyyMMddHHmmssSSS.png
website.screenshot().take();

// saves file at ./screenshots/<file name>.png
String fileName = "...";
website.screenshot().take(fileName);

// take screenshot and returns a file
website.screenshot().takeAsFile(file -> {
  ...
});

// take screenshot and returns a byte array
website.screenshot().takeAsBytes(bytes -> {
  ...
});
\`\`\`

### Alert
Interacts with alert dialog.

\`\`\`
// click on "ok" button
website.alert().ok();

// dismisses the alert
website.alert().dismiss();
\`\`\`

### Custom Plugin
Website allows to use custom plugins.

#### WebDriver Plugin
The \`WebDriver Plugin\` must have a public constructor with a \`WebDriver\` or any of its interfaces as parameter.

\`\`\`
public class MyPlugin implements WebDriverPlugin {
  private final WebDriver driver;

  public MyPlugin(WebDriver driver) {
    this.driver = driver;
  }

  ...
}

MyPlugin plugin = website.driverPlugin(MyPlugin::new);
\`\`\`

#### Website Plugin
The \`Website Plugin\` must have a public constructor with a \`Website\` as parameter.

\`\`\`
public class MyPlugin implements WebsitePlugin {
  private final Website website;

  public MyPlugin(Website website) {
    this.website = website;
  }

  ...
}

MyPlugin plugin = website.plugin(MyPlugin::new);
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
  { title: 'Website', content: website },
  { title: 'Plugins', content: plugins },
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
