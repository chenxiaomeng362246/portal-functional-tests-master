import {Given, When, Then} from 'cucumber';
import UserfilterPage from '../../page-objects/user-management/user-filter';

When(/^I filter users by Site Manager$/, function () {
    UserfilterPage.filteruser();
});

Then(/^the user with the site manager role should be displayed$/, function () {
    UserfilterPage.verifyfilteruser();
});