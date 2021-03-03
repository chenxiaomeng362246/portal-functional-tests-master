import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page';
import myPrometheanPage from '../../page-objects/myPromethean/header-navigation';

Given(/^I am logged in page$/, function () {
    LoginPage.emailLoginPage();
    LoginPage.emailLogin();
    LoginPage.verifyLogin();
});

When(/^I Switch app$/, function () {
    myPrometheanPage.switchtomyPrometheanappPage();
});

Then(/^I am taken to User Management app$/, function () {
    myPrometheanPage.switchtousermanagementappPage();
});

Then(/^I am taken to Panel Management app$/, function () {
    myPrometheanPage.switchtopanelmanagementappPage();
});

Then(/^I am taken to Resource Library app$/, function () {
    myPrometheanPage.switchtoresourcelibraryappPage();
});
