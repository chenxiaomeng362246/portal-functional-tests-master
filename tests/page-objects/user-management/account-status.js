import { assert } from 'console'
class accountstatusPage {
    get suspendButton() { return $("//span[text()='Suspend account']") }
    get suspendconfirmButton() { return $("button.portal-button--primary") }
    get suspenduserText() { return $("//span[text()='Successfully suspended account']") }
    get verifysuspendroleButton() { return $("//div[text()='Suspended']") }
    get activatedButton() { return $("//span[text()='Activate account']") }
    get activatedconfirmButton() { return $("button.portal-button--primary") }
    get returnhomepageButton() { return $("div[class='ant-modal-wrap ']") }
    get refreshButton() { return $("span[class='icon-round-refresh-24px']") }
    get dropdownButton() { return $(".admin-button-list-default-icon") }
    get activateduserText() { return $("//span[text()='Successfully activated account']") }
    get verifyactivatedroleButton() { return $("//div[text()='Active']") }
    
    suspendPage(){
        browser.pause(1000)
        this.suspendButton.click()
        this.suspendconfirmButton.waitForClickable({  timeout: 10000 })
        this.suspendconfirmButton.click()
    }

    manageroledetailPage(){
        browser.waitUntil(() => this.dropdownButton.isClickable()===true,{timeout: 20000})
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
        browser.waitUntil(() => this.suspenduserText.isDisplayed()===true,{timeout: 20000})
        assert(this.suspenduserText.isDisplayed(), true);
        browser.waitUntil(() => this.returnhomepageButton.isClickable()===true,{timeout: 20000})
        this.returnhomepageButton.click()
        browser.pause(3000)
        this.refreshButton.click()
        browser.pause(3000)
        assert(this.verifysuspendroleButton.isDisplayed(), true);
        browser.deleteCookies()
    }
 
    verifyreturnhomepageButton(){
        browser.waitUntil(() => this.returnhomepageButton.isClickable()===true,{timeout: 20000})
        this.returnhomepageButton.click()
        browser.pause(3000)
        this.refreshButton.click()
        browser.pause(3000)
    }

    verifyactivatedPage(){
        var assert = require('assert')
        browser.waitUntil(() => this.activateduserText.isDisplayed()===true,{timeout: 20000})
        assert(this.activateduserText.isDisplayed(), true);
        this.returnhomepageButton.click()
        browser.pause(3000)
        this.refreshButton.click()
        browser.pause(3000)
        assert(this.verifyactivatedroleButton.isDisplayed(), true);
        browser.deleteCookies()
    }
}

export default new accountstatusPage()