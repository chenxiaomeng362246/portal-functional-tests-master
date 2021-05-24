import {Given, When, Then} from 'cucumber';
import editpaneldetailinfoPage from '../../page-objects/panel-management/paneldetailsedit';

Given(/^I am on the panel-detail page$/, function () {
    editpaneldetailinfoPage.editthepaneldetailPage()
});

When(/^I modify panel detail$/, function () {
    editpaneldetailinfoPage.editthepaneldetail()
});

Then(/^panel detail has been modified successfully$/, function () {
    editpaneldetailinfoPage.verifyeditpanelname()
}); 