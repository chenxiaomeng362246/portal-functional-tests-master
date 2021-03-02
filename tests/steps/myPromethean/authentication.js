import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'
import homePage from '../../page-objects/myPromethean/home-page'

Given(/^I am on the login page$/, function () {
  var baseUrl = "https://stagingportal.mypromethean.com/"
  LoginPage.visitLoginPage(baseUrl);
  });

Given(/^I am on MyPromethean home page$/, function () {
  LoginPage.emailLoginPage();
  LoginPage.emailLogin();
  });

When(/^I am on login using email page$/, function () {
    LoginPage.emailLoginPage();
  });

When(/^I click on Signout$/, function () {
  homePage.clickSignout();
  });

When(/^login using valid credenials$/, function () {
    LoginPage.emailLogin();
  });

Then(/^I am on home page$/, function () {
    LoginPage.verifyLogin();
  });

Then(/^I should Signout$/, function () {
  LoginPage.verifySignout();
  });