import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'
import tagpanelPage from '../../page-objects/panel-management/tagpanel';

Given(/^I am on the panel page$/, function () {
    var baseUrl = "https://panel-management.staging.mypromethean.com/"
    LoginPage.visitLoginPage(baseUrl);
    LoginPage.emailLoginPage();
    LoginPage.emailLogin();
    LoginPage.verifyLogin();
});

Given(/^there is a panel present$/, function () {
    tagpanelPage.checkpanelinfo()
});

Given(/^I am on the panel details page$/, function () {
    tagpanelPage.Managetagspage()
});

When(/^I click and assign a tag to the panel$/, function () {
    tagpanelPage.assigntagtopanel()
});

Then(/^the tag is added to the panel$/, function () {
    tagpanelPage.verifytagaddedtopaneltext()
}); 

When(/^I remove the tag from the panel$/, function () {
    tagpanelPage.removetagtopanel()
});

Then(/^the tag is removed from the panel$/, function () {
    tagpanelPage.verifytagremovetopaneltext()
}); 


