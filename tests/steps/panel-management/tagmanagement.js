import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'
import tagmanagementPage from '../../page-objects/panel-management/tagmanagement';

Given(/^I am on the Tags page$/, function () {
  var baseUrl = "https://staging-panel-management.mypromethean.com/"
  LoginPage.visitLoginPage(baseUrl);
  LoginPage.emailLoginPage();
  LoginPage.emailLogin();
  LoginPage.verifyLogin();
  tagmanagementPage.entertagpage();
});

When(/^I create a new tag$/, function () {
    tagmanagementPage.addtagpage();
    tagmanagementPage.typenewtagname();
});

Then(/^a new tag is created$/, function () {
    tagmanagementPage.verifytagaddedtext();
});
