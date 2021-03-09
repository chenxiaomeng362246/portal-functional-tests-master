import {Given, When, Then} from 'cucumber';
import ActivitylogdetailPage from '../../page-objects/user-management/activitylog-detail';

When(/^I am on the user activity log detail page$/, function () {
    ActivitylogdetailPage.activityloguserpage();
});

Then(/^the user of activty log detail should be displayed$/, function () {
    ActivitylogdetailPage.verifyactivitylogdetailtables();
});