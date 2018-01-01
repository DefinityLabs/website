import React, { Component } from 'react';
import UserGuidePage from './UserGuidePage';

const introduction = `
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
`;

const tableElement = `
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
...
CustomTableElement table = website.findElement(By.cssSelector("div.table")).as(CustomTableElement::new);
\`\`\`
`;

const listElement = `
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

#### Custom List Element

\`\`\`
public class CustomListElement extends AbstractListElement<ListItemElement> {
    public ListElement(WebElementWrapper webElement) {
        super(webElement, By.className("list-item"));
    }

    @Override
    protected ListItemElement createListItem(WebElementWrapper webElementWrapper) {
        return new ListItemElement(this, webElementWrapper);
    }
}
...
CustomListElement listElement = website.findElement(By.className("list")).as(CustomListElement::new);
\`\`\`
`;

const selectElement = `
\`\`\`
SelectElement select = website.findElement(By.tagName("select")).as(SelectElement::new);

// returns true if select is multiple
select.isMultiple();

// returns selected items
List<SelectOptionElement> items = select.selectedItems();

// returns selected item
SelectOptionElement item = select.selectedItem();

// select item by visible text
select.selectByVisibleText("text");

// select item by index
select.selectByIndex(2);

// select item by value
select.selectByValue("MALE");
\`\`\`
`;

const customElement = `
\`\`\`
public class CustomElement extends WebElementDecorator {
    public CustomElement(WebElementWrapper webElement) {
      super(webElement);
    }

    public WebElementWrapper email() {
      return webElement.findElement(By.id("email"));
    }
}
...
CustomElement element = website.findElement(By.cssSelector("div.special")).as(CustomElement::new);
element.email().enter("johndoe@mail.com");
\`\`\`
`;

const simpleCustomElement = `
\`\`\`
public interface CustomElement extends SimpleWebElementDecorator {
    @FindElementBy(id = "email")
    WebElementWrapper email();
}
...
CustomElement element = website.findElement(By.cssSelector("div.special")).as(CustomElement.class);
element.email().enter("johndoe@mail.com");
\`\`\`
`;

const plugins = `
`;

const pagePlugin = `
Get information related to the current page.

\`\`\`
// returns the current url
website.page().getUrl();

// returns the page title
website.page().getTitle();

// returns if HTML DOM is load
website.page().isLoad();
\`\`\`
`;

const waiterPlugin = `
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
`;

const scrollPlugin = `
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
`;

const javascriptPlugin = `
Executes javascript script.

\`\`\`
String script = "...";

// execute script
website.javascript().execute(script, args);

// execute script asynchronously
website.javascript().executeAsync(script, args);
\`\`\`
`;

const screenshotPlugin = `
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
`;

const alertPlugin = `
Interacts with alert dialog.

\`\`\`
// click on "ok" button
website.alert().ok();

// dismisses the alert
website.alert().dismiss();
\`\`\`
`;

const customPlugin = `
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

const pageObject = `
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

    public CustomElement custom() {
      return website().findElement(By.cssSelector("div.special")).as(CustomElement.class);
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

    @FindElementBy(cssSelector = "div.special")
    CustomElement custom();
}
...
String header = website.at(PageHeader.class).title().text();

website.at(PageHeader.class).custom().email().enter("johndoe@mail.com");
\`\`\`
`;

const findElementBy = `
The \`@FindElementBy\` annotation can be used only in the interfaces representing Page Object or the interfaces
which extends the \`SimpleWebElementDecorator\`. It's used to the proxy know how it should find the element.

\`\`\`
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface FindElementBy {

    String id() default "";

    String className() default "";

    String tagName() default "";

    String name() default "";

    String linkText() default "";

    String partialLinkText() default "";

    String css() default "";

    String xpath() default "";

    String placeholder() default "";

    String button() default "";

    String label() default "";

    String labelContaining() default "";

    String value() default "";

    String andGetAttribute() default "";

}
\`\`\`

The usage is simple, just add the annotation to the method in the interface.

\`\`\`
public interface MyPage {
    @FindElementBy(label = "Email or Phone")
    WebElementWrapper emailOrPhone();

    @FindElementBy(label = "Email or Phone", andGetAttribute = "value")
    String getEmailOrPhoneValue();
}
\`\`\`

The return type is automatically converted, using the following rules:

* **when using \`andGetAttribute\`** the return must be String. It returns webElementWrapper.getAttribute(attributeName).
* **when return type is \`String\`** returns webElementWrapper.text().
* **when return type is a \`WebElementDecorator\`** returns webElementWrapper.as(Type::new).
* **when return type is a \`SimpleWebElementDecorator\`** returns webElementWrapper.as(Type.class).
* **otherwise** returns webElementWrapper itself.
`;

const extendedBy = `
Offers few other ways to find an element. It encapsulates few xpath selectors in order to keep the code more readable.

\`\`\`
// By.xpath("//input[@value='" + text + "']")
webElementWrapper.findElement(byValue("..."));

// By.xpath("//input[@id=(//label[text()='" + text + "']/@for)]")
webElementWrapper.findElement(byLabel("..."));

// By.xpath("//input[@id=(//label[contains(text(), '" + text + "')]/@for)]")
webElementWrapper.findElement(byLabelContaining("..."));

// By.xpath("//input[@placeholder='" + text + "']")
webElementWrapper.findElement(byPlaceholder("..."));

// By.xpath("//button[text()='" + text + "']")
webElementWrapper.findElement(byButton("..."));
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
  {
    title: 'Web Elements',
    content: webElements,
    subItems: [
      { title: 'Table', content: tableElement },
      { title: 'List', content: listElement },
      { title: 'Select', content: selectElement },
      { title: 'Custom Element', content: customElement },
      { title: 'Simple Custom Element', content: simpleCustomElement }
    ]
  },
  {
    title: 'Plugins',
    content: plugins,
    subItems: [
      { title: 'Page', content: pagePlugin },
      { title: 'Waiter', content: waiterPlugin },
      { title: 'Scroll', content: scrollPlugin },
      { title: 'JavaScript', content: javascriptPlugin },
      { title: 'Screenshot', content: screenshotPlugin },
      { title: 'Alert', content: alertPlugin },
      { title: 'Custom Plugin', content: customPlugin }
    ]
  },
  { title: 'Page Object', content: pageObject },
  { title: '@FindElementBy Annotation', content: findElementBy },
  { title: 'ExtendedBy', content: extendedBy },
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
