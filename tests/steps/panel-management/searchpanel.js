import {Given, When, Then} from 'cucumber';
import searchpanelPage from '../../page-objects/panel-management/searchpanel';

When(/^I search for a panel that doesn't exist$/, function () {
    searchpanelPage.searchexistedpanelPage(false)
});

Then(/^the result should show "No panel found"$/, function () {
    searchpanelPage.verifysearchpanelisexist(false)
}); 

When(/^I search for a panel that exist$/, function () {
    searchpanelPage.searchexistedpanelPage(true)
});

Then(/^the result should show the panel$/, function () {
    searchpanelPage.verifysearchpanelisexist(true)
}); 