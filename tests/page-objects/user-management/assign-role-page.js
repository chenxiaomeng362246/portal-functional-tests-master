import { assert } from 'console'
class assignrolePage {
    get typeusersearch() { return $("input[placeholder='Search']") }
    get searchButton() { return $("[data-icon='search']") }
    get clickcheckbox() { return $(".ant-table-body input") }
    get managerolesButton() { return $("//span[text()='Manage roles']") }
    get paneladministratorButton() { return $("//span[text()='Panel Administrator']") }
    get saveButton() { return $("button.portal-button--primary") }
    get editedroleText() { return $("//span[text()='Successfully edited role for this user']") }
    get dropdownButton() { return $(".admin-button-list-default-icon") }
    get assignroleButton() { return $$("input[aria-invalid='false']")[1] }
    get deleteassignroleButton() { return $$("span[class='icon-round-delete-24px']")[1] }
    get returnhomepageButton() { return $("div[class='ant-modal-wrap ']") }
    get verifyeditedButton() { return $("//div[contains(text(),'Panel Administrator')]") } 
    get paneladministratortext() { return $("//div[text()='Panel Administrator']") }
    get verifydeleteroleButton() { return $("//div[text()='Site Manager, Teacher, Organisation Administrator']") }
    
    searchPage(){
        browser.pause(15000)
        this.typeusersearch.click()
        this.typeusersearch.setValue("chenrj")
        this.searchButton.click()
        browser.pause(3000)
        this.clickcheckbox.click()
        this.dropdownButton.waitForClickable({timeout: 30000 })
        this.dropdownButton.click()
        browser.pause(2000)
    }

    manageroledetailPage(){
        browser.pause(4000)
        this.dropdownButton.waitForClickable({timeout: 30000 })
        this.dropdownButton.click()
    }

    managerolesPage(){
        browser.pause(1000)
        this.managerolesButton.click()
        browser.pause(3000)
    }

    assignroles(){
        this.assignroleButton.waitForClickable({  timeout: 10000 })
        this.assignroleButton.click()
    }

    addnewroles(){
        this.paneladministratorButton.waitForClickable({  timeout: 10000 })
        this.paneladministratorButton.click()
    }

    unassignrolesPage(){
        browser.pause(1000)
        this.deleteassignroleButton.waitForClickable({  timeout: 10000 })
        this.deleteassignroleButton.click()
    }

    verifyeditrolesPage(){
        this.saveButton.waitForClickable({  timeout: 10000 })
        this.saveButton.click()
        var assert = require('assert')
        browser.pause(6000)
        assert(this.editedroleText.isDisplayed(), true);
        this.returnhomepageButton.click()
        browser.pause(6000)
        assert(this.verifyeditedButton.isDisplayed(), true);
    }

    verifydeleterolesPage(){
        this.saveButton.waitForClickable({  timeout: 10000 })
        this.saveButton.click()
        var assert = require('assert')
        browser.pause(6000)
        assert(this.editedroleText.isDisplayed(), true);
        this.returnhomepageButton.click()
        browser.pause(4000)
        assert(this.verifydeleteroleButton.isDisplayed(), true);
    }
}

export default new assignrolePage()