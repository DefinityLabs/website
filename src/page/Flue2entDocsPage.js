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

\`\`\`
WebDriver driver = ...; // get web driver

String url = "<your website>";
Website website = Website.with(driver).visit(url);
\`\`\`
`;

const webElements = `
The [Selenium WebElement](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebElement.html)
is wrapped by \`WebElementWrapper\` class in order to make it more fluent and extensible.

\`\`\`
WebElementWrapper name = website.findElement(By.id("name"));

List<WebElementWrapper> fields = website.findElements(By.cssSelector(".field"));
\`\`\`

The \`WebElementWrapper\` delegates few methods to \`Selenium WebElement\`.
\`\`\`
WebElementWrapper element = ...;

// returns Selenium WebElement
element.webElement();

// same as webElement.getText();
element.text();

// same as webElement.click();
element.click();

// same as webElement.submit();
element.submit();

// same as webElement.getAttribute(name);
element.getAttribute(name);

// same as webElement.isEnabled();
element.isEnabled();

// same as webElement.isDisplayed();
element.isDisplayed();

// same as webElement.isSelected();
element.isSelected();

// same as webElement.findElement(By);
WebElementWrapper foundElement = element.findElement(By);

// same as webElement.findElements(By);
List<WebElementWrapper> foundElements = element.findElements(By);
\`\`\`

The \`WebElementWrapper\` can be easily extended using method \`as\`.
\`\`\`
TableElement tableElement = website.findElement(By.tagName("table")).as(TableElement::new);
\`\`\`

### Table Element

\`\`\`
TableElement tableElement = website.findElement(By.tagName("table")).as(TableElement::new);

// returns all rows from the table
table.rows();

// returns row by index
table.row(index);

// returns if table contains such row
table.contains(row -> {
  ...
});

// returns the first row which the condition is true
table.find(row -> {
  ...
});

// returns all rows which the condition is true
table.findAll(row -> {
  ...
});

// returns a supplier to check if some row matches the condition
table.has(row -> {
  ...
});
\`\`\`

#### Table Filtering

\`\`\`
table.find(atColumn(1).byText("text"));

table.find(atColumn(1).byTextContaining("text"));

table.find(atColumn(1).byTextIgnoringCase("text"));

table.find(atColumn(1).matching(column -> {
  ...
}));
\`\`\`

#### Custom Table

\`\`\`
public class CustomTableElement extends AbstractTableElement<TableRowElement<TableColumnElement>, TableColumnElement> {
    public CustomTableElement(WebElementWrapper table) {
        super(table, configuration ->
                configuration.rowDefined(By.cssSelector("div.row"))
                        .headerDefined(By.cssSelector("div.header"))
                        .columnDefined(By.cssSelector("div.cell"))
        );
    }

    @Override
    protected TableRowElement<TableColumnElement> createRow(WebElementWrapper webElement) {
        return new TableRowElement<>(webElement, this);
    }

    @Override
    protected TableColumnElement createColumn(WebElementWrapper webElement) {
        return new TableColumnElement(webElement, this);
    }
}

CustomTableElement table = website.findElement(By.cssSelector("div.table")).as(CustomTableElement::new);
\`\`\`

### List Element

\`\`\`
ListElement listElement = website.findElement(By.tagName("ul")).as(ListElement::new);

// returns all items
List<ListElementItem> items = listElement.items();

// returns true if some item matches the condition
listElement.contains(item -> {
  ...
});

// returns the first item which match the condition
listElement.find(item -> {
  ...
});

// returns all items which match the condition
listElement.findAll(item -> {
  ...
});

// returns supplier to check if some item matches the condition
listElement.hasItem(item -> {
  ...
});
\`\`\`

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
  { title: 'Web Elements', content: webElements },
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
