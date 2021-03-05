import { assert } from 'console'
class accountstatusPage {
    get typeusersearch() { return $("input[placeholder='Search']") }
    get searchButton() { return $("[data-icon='search']") }
    get clickcheckbox() { return $(".ant-table-body input") }
    get managerolesButton() { return $("//span[text()='Manage roles']") }
    get suspendButton() { return $("//span[text()='Suspend account']") }
    get suspendconfirmButton() { return $("button.portal-button--primary") }
    get suspenduserText() { return $("//span[text()='Successfully suspended account']") }
    get verifysuspendroleButton() { return $("//div[text()='Suspended']") }
    get activatedButton() { return $("//span[text()='Activate account']") }
    get activatedconfirmButton() { return $("button.portal-button--primary") }
    get returnhomepageButton() { return $("div[class='ant-modal-wrap ']") }
    get refreshButton() { return $("span[class='icon-round-refresh-24px']") }
    get dropdownButton() { return $(".admin-button-list-default-icon") }
    
    suspendPage(){
        browser.pause(1000)
        this.suspendButton.click()
        this.suspendconfirmButton.waitForClickable({  timeout: 10000 })
        this.suspendconfirmButton.click()
    }

    manageroledetailPage(){
        browser.pause(4000)
        this.dropdownButton.waitForClickable({timeout: 30000 })
        this.dropdownButton.click()
    }

    activatedPage(){
        browser.pause(1000)
        this.activatedButton.click()
        this.activatedconfirmButton.waitForClickable({  timeout: 10000 })
        this.activatedconfirmButton.click()
    }

    verifysuspendPage(){
        var assert = require('assert')
        browser.pause(6000)
        assert(this.suspenduserText.isDisplayed(), true);
        this.returnhomepageButton.click()
        browser.pause(3000)
        this.refreshButton.click()
        browser.pause(3000)
        assert(this.verifysuspendroleButton.isDisplayed(), true);
        browser.deleteCookies()
    }
 
    verifyreturnhomepageButton(){
        browser.pause(6000)
        this.returnhomepageButton.click()
        browser.pause(3000)
        this.refreshButton.click()
        browser.pause(3000)
    }
}

export default new accountstatusPage()