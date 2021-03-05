import {Given, When, Then} from 'cucumber';
import accountstatusPage from '../../page-objects/user-management/account-status';

When(/^I click on Suspend$/, function () {
    if(accountstatusPage.suspendButton.isDisplayed()){
        console.log("suspend Button is exist,don't need to activated")
    }else{
        accountstatusPage.activatedPage();
        accountstatusPage.verifyreturnhomepageButton()
        accountstatusPage.manageroledetailPage();
    }
    accountstatusPage.suspendPage();
});

Then(/^the user should be suspended$/, function () {
    accountstatusPage.verifysuspendPage();
});


