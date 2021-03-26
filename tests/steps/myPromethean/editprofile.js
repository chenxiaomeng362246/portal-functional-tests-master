import {Given, When, Then} from 'cucumber';
import editprofilePage from '../../page-objects/myPromethean/edit-profile';

When(/^I edit the country$/, function () {
    var option = "country"
    editprofilePage.entereditprofilepage();
    editprofilePage.editprofilepage(option)
});

When(/^I edit the first name$/, function () {
    var option = "firstName"
    editprofilePage.entereditprofilepage();
    editprofilePage.editprofilepage(option)
});

When(/^I edit the organization$/, function () {
    var option = "organization"
    editprofilePage.entereditprofilepage();
    editprofilePage.editprofilepage(option)
});

When(/^I edit the language$/, function () {
    var option = "language"
    editprofilePage.entereditprofilepage();
    editprofilePage.editprofilepage(option)
});

Then(/^the country should be updated$/, function () {
    editprofilePage.verifynewpasswordpage();
});

Then(/^the first name should be updated$/, function () {
    editprofilePage.verifynewpasswordpage();
});

Then(/^the organization should be updated$/, function () {
    editprofilePage.verifynewpasswordpage();
});

Then(/^the language should be updated$/, function () {
    editprofilePage.verifynewpasswordpage();
});

