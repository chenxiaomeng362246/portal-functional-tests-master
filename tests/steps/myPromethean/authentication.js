import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'
import homePage from '../../page-objects/myPromethean/home-page'
import forgotpasswordPage from '../../page-objects/myPromethean/forgot-password';
import changePassword from '../../page-objects/myPromethean/change-password';

let PanelManagementUrl = process.env.MyPromethean_url
let emailaddres = process.env.USER_NAME
var erroremailcode = ""
var newpassword = ""
var invalidemailcode = ""

Given(/^I am on the login page$/, function () {
  LoginPage.visitLoginPage(PanelManagementUrl);
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

Given(/^I click on Forgot Password$/, function () {
  LoginPage.emailLoginPage();
  forgotpasswordPage.enterforgotpasswordPage();
  forgotpasswordPage.enteremailPage(emailaddres)
});

When(/^I enter Invalid email$/, function () {
  forgotpasswordPage.typeinformation(erroremailcode,newpassword);
});

Then(/^I should get an error$/, function () {
  forgotpasswordPage.verifyerrorpromptPage();
});

When(/^I change the password$/, function () {
  changePassword.enterchangepasswordpage();
  changePassword.typenewpasswordpage();
});

Then(/^password must be changed$/, function () {
  changePassword.verifynewpasswordpage();
});

When(/^I enter an Invalid code$/, function () {
  forgotpasswordPage.typeinformation(invalidemailcode,newpassword);
});

Then(/^I should get an error information$/, function () {
  forgotpasswordPage.verifyinvalidpromptPage();
});