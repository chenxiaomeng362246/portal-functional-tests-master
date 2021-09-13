# Portal functional tests

This repository contains functional test cases for Portal+.


## Getting started

1. Clone repository
2. Prerequisites
```Node v12.16.1``` or higher
3. Install dependencies 
```
npm install
```

4. Run tests

```
npm run test
```
5. Generate HTML report

```
npm run open-allure
```

6. Run a specific tag or a group of tags

```
$ npx wdio wdio.conf.js --cucumberOpts.tagExpression='@Tag or @AnotherTag'
```
For list of tags refer [Wiki page](https://wiki.prometheanjira.com/pages/viewpage.action?spaceKey=PANM&title=Test+Scenarios+Taxonomy).

7. Exececute in different env
Change test environment in ```config.js```

8. Boost start up speed
   At least run the code with "services: [['selenium-standalone', {skipSeleniumInstall:false }]]," in wdio.conf.js once to get the drivers installed locally in node_modules. After that, you could set "skipSeleniumInstall:true" to prevent time costing reinstall on each run.
## Contributing
To write tests, refer [Test Design Guidelines](https://wiki.prometheanjira.com/display/PANM/Test+Design+Guidelines) and [Webdriver.io](https://webdriver.io/docs/api.html) documentation.
