import {Given, When, Then} from 'cucumber';
import LoginPage from '../../page-objects/myPromethean/login-page'
import tagmanagementPage from '../../page-objects/panel-management/tagmanagement';
import { CONFIG } from '../../../config'

Given(/^I am on the Tags page$/, function () {
    let PanelManagementUrl = CONFIG.Panel_management_url;
    LoginPage.visitLoginPage(PanelManagementUrl);
    LoginPage.emailLoginPage();
    LoginPage.emailLogin();
    LoginPage.verifyLogin();
    tagmanagementPage.entertagpage();
});

When(/^I create a new tag$/, function () {
    tagmanagementPage.addtagpage();
    tagmanagementPage.typenewtagname();
});

Then(/^a new tag is created$/, function () {
    tagmanagementPage.verifytagaddedtext();
}); 

Given(/^there is a Tag present$/, function () {
    if(tagmanagementPage.tagaddedname.isDisplayed()){
        console.log("tag has added, not need to add tag")
    }else{
        tagmanagementPage.addtagpage();
        tagmanagementPage.typenewtagname(); 
        tagmanagementPage.verifytagaddedtext();
        tagmanagementPage.returntagpage.click();
    }
});
  
When(/^I delete a tag$/, function () {
      tagmanagementPage.deletetagpage();
});
  
Then(/^the tag is deleted$/, function () {
      tagmanagementPage.verifytagdeletedtext();
});
