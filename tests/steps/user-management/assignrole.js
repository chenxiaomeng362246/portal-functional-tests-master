import {Given, When, Then} from 'cucumber';
import assignrolePage from '../../page-objects/user-management/assign-role-page';

Given(/^I am on the user details page$/, function () {
    assignrolePage.searchPage();
});

When(/^I click on Roles$/, function () {
    assignrolePage.managerolesPage();
});

When(/^add a new role$/, function () {
    if(assignrolePage.paneladministratortext.isDisplayed()){
        console.log("Panel Administrator is exist,need to delete")
        assignrolePage.unassignrolesPage();
    }else{    
        console.log("Panel Administrator role already exist,do not need to delete");
    }   
    assignrolePage.assignroles();
    assignrolePage.addnewroles();
});
    
Then(/^a new role should be added$/, function () {
    assignrolePage.verifyeditrolesPage();
});

When(/^delete a role$/, function () {
    if(assignrolePage.paneladministratortext.isDisplayed()){
        console.log("Panel Administrator role does not exist,don't need to add")
    }else{
        assignrolePage.assignroles();
        assignrolePage.addnewroles();
    }
    assignrolePage.unassignrolesPage();
});

Then(/^the role should be removed$/, function () {
    assignrolePage.verifydeleterolesPage();
});