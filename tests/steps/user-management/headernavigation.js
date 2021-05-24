import {Given, When, Then} from 'cucumber';
import UsermanagementPage from '../../page-objects/user-management/header-navigation';

When(/^I switch apps from the header$/, function () {
    UsermanagementPage.switchtomyPrometheanappPage();
});

Then(/^the app is opened in new tab$/, function () {
    UsermanagementPage.switchtopanelmanagementappPage();
});
