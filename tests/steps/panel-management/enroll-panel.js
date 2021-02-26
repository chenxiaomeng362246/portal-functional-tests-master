import {Given, When, Then} from '@cucumber/cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'
import enrolPage from '../../page-objects/panel-management/enrol-page';

Given(/^I am on Panel Management home page$/, function () {
  var baseUrl = "https://staging-panel-management.mypromethean.com/"
  LoginPage.visitLoginPage(baseUrl);
  LoginPage.emailLoginPage();
  LoginPage.emailLogin();
  LoginPage.verifyLogin();
  enrolPage.visitEnrolPage();
  });

When(/^I am on enrol page$/, function () {
    enrolPage.clickIntoEnrolPage();
  });

When(/^I importCSV file$/, function () {
    enrolPage.importCSVPage();
  });

Then(/^I enrol panel by uploadCSV file$/, function () {
    enrolPage.uploadCSVPage();
    enrolPage.verifyenrolPage();
  });