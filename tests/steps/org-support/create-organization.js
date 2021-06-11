import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'
import createorgPage from '../../page-objects/org-support/create-organization';

Given(/^I am on the org support page$/, function () {
    let OrgsupportUrl = process.env.Org_support_url
    LoginPage.visitLoginPage(OrgsupportUrl);
    LoginPage.emailLoginPage();
    LoginPage.emailLogin();
    LoginPage.verifyLogin();
});

When(/^I am on the create Organization page$/, function () {
    createorgPage.Createneworganizationbutton();
});

When(/^I create a new Organization$/, function () {
    createorgPage.Createneworganizationpage();
});

Then(/^new organization is created$/, function () {
    createorgPage.verifycreateorganization();
});
