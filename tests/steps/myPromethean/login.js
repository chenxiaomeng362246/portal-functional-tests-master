import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'

Given(/^I am on the login page$/, function () {
  LoginPage.visitLoginPage();
  });

When(/^I am on login using email page$/, function () {
    LoginPage.emailLoginPage();
  });

When(/^login using valid credenials$/, function () {
    LoginPage.emailLogin();
  });

Then(/^I am on home page$/, function () {
    LoginPage.verifyLogin();
  });