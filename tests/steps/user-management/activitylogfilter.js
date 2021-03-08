import {Given, When, Then} from 'cucumber';
import ActivitylogfilterPage from '../../page-objects/user-management/activitylog-filter';

Given(/^I am on the activity log page$/, function () {
    ActivitylogfilterPage.changetoactivitylog();
});

When(/^I filter users by Admin and activty type$/, function () {
    ActivitylogfilterPage.filteractivitylog();
});

Then(/^the user of activty log should be displayed$/, function () {
    ActivitylogfilterPage.verifyactivitystatus();
});