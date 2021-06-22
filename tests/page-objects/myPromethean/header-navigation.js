import headernavigationPage from '../../page-objects/user-management/header-navigation';

class myPrometheanPage {
    get resourcelibraryButton() { return $("//div[text()='Resource Library']") }
    get resourcelibrarylogoText() { return $("//span[text()='Resource Library']") }

    switchtomyPrometheanappPage(){
        browser.waitUntil(() => headernavigationPage.appsdropdownButton.isClickable()===true,{timeout: 20000})
        headernavigationPage.appsdropdownButton.click()
    }

    switchtousermanagementappPage(){
        browser.waitUntil(() => headernavigationPage.usermanagementappButton.isClickable()===true,{timeout: 20000})
        headernavigationPage.usermanagementappButton.click()
        browser.pause(3000)
        let UserManagementUrl = process.env.User_management_url
        browser.switchWindow(UserManagementUrl)
        browser.waitUntil(() => headernavigationPage.usermanagementlogoText.isDisplayed()===true,{timeout: 20000})
        const assert = require('assert')
        assert.strictEqual(headernavigationPage.usermanagementlogoText.isDisplayed(),true)
    }

    switchtopanelmanagementappPage(){
        browser.waitUntil(() => headernavigationPage.panelmanagementappButton.isClickable()===true,{timeout: 20000})
        headernavigationPage.panelmanagementappButton.click()
        let PanelManagementUrl = process.env.Panel_management_url
        browser.switchWindow(PanelManagementUrl)
        browser.waitUntil(() => headernavigationPage.panelmanagementlogoText.isDisplayed()===true,{timeout: 20000})
        const assert = require('assert')
        assert.strictEqual(headernavigationPage.panelmanagementlogoText.isDisplayed(),true)
    }

    switchtoresourcelibraryappPage(){
        browser.waitUntil(() => this.resourcelibraryButton.isClickable()===true,{timeout: 20000})
        this.resourcelibraryButton.click()
        let resourcelibraryUrl = process.env.Resourcelibrary_url
        browser.switchWindow(resourcelibraryUrl)
        browser.waitUntil(() => this.resourcelibrarylogoText.isDisplayed()===true,{timeout: 20000})
        const assert = require('assert')
        assert.strictEqual(this.resourcelibrarylogoText.isDisplayed(),true)
    }
}

export default new myPrometheanPage()