import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page';
import usersearchPage from '../../page-objects/user-management/user-search-page';

Given(/^I am logged in$/, function () {
    browser.deleteCookies()
    let UsermanagementUrl = process.env.User_management_url
    LoginPage.visitLoginPage(UsermanagementUrl);
    LoginPage.emailLoginPage();
    LoginPage.emailLogin();
    LoginPage.verifyLogin();
});

When(/^I search for a user$/, function () {
    usersearchPage.verifyusersearchPage();
});

Then(/^the user is shown in search results$/, function () {
    usersearchPage.verifyactivitylogsearchPage();
});