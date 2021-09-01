var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./e2e/*/*.spec.js'],
  onPrepare: function() {
    browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports/htmlreport',
          fileName: 'TestReport',
        })
      );
   },
   allScriptsTimeout: 40000,
   jasmineNodeOpts: {
    showColors: true, 
    defaultTimeoutInterval: 40000
  },
  params: {
    url: 'https://qa-practical.qa.swimlane.io/'
  },
  browserName: 'chrome',
  directConnect: true
};
