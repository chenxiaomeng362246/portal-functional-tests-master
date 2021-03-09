import {Given, When, Then} from 'cucumber';
import EnrolmanualPage from '../../page-objects/panel-management/enrolmanually-page';
import EnrolPage from '../../page-objects/panel-management/enrol-page';

When(/^I am on typemanually page$/, function () {
    EnrolmanualPage.TypemanuallyPage();
});

When(/^I am on enrolmanually page$/, function () {
    EnrolmanualPage.EnrolmanuallyPage();
});

Then(/^I am on successfullly enrol page$/, function () {
    EnrolPage.verifyenrolPage();
});