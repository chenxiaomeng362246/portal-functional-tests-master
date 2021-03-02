import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page';
import UsermanagementPage from '../../page-objects/user-management/assign-role-page';

Given(/^I am logged in$/, function () {
    browser.deleteCookies()
    var baseUrl = "https://staging-user-management.mypromethean.com/"
    LoginPage.visitLoginPage(baseUrl);
    LoginPage.emailLoginPage();
    LoginPage.emailLogin();
    LoginPage.verifyLogin();
});

When(/^I search for a user$/, function () {
    UsermanagementPage.verifyusersearchPage();
});

Then(/^the user is shown in search results$/, function () {
    UsermanagementPage.verifyactivitylogsearchPage();
});