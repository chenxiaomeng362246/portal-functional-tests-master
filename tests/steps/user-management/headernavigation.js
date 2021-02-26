import {Given, When, Then} from '@cucumber/cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page';
import UsermanagementPage from '../../page-objects/user-management/header-navigation';

Given(/^I am logged in user management$/, function () {
  browser.deleteCookies()
  var baseUrl = "https://staging-user-management.mypromethean.com/"
  LoginPage.visitLoginPage(baseUrl);
  LoginPage.emailLoginPage();
  LoginPage.emailLogin();
  LoginPage.verifyLogin();
  });
When(/^I switch apps from the header$/, function () {
    UsermanagementPage.switchtomyPrometheanappPage();
});

Then(/^the app is opened in new tab$/, function () {
    UsermanagementPage.switchtopanelmanagementappPage();
});
