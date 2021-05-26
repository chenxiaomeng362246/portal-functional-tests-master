import headernavigationPage from '../../page-objects/user-management/header-navigation';

class myPrometheanPage {
    get resourcelibraryButton() { return $("//div[text()='Resource Library']") }
    get resourcelibrarylogoText() { return $("//span[text()='Resource Library']") }

    switchtomyPrometheanappPage(){
        browser.pause(12000)
        headernavigationPage.appsdropdownButton.waitForClickable()
        headernavigationPage.appsdropdownButton.click()
    }

    switchtousermanagementappPage(){
        headernavigationPage.usermanagementappButton.click()
        browser.pause(5000)
        let UserManagementUrl = process.env.User_management_url
        browser.switchWindow(UserManagementUrl)
        browser.pause(5000)
        const assert = require('assert')
        assert.strictEqual(headernavigationPage.usermanagementlogoText.isDisplayed(),true)
    }

    switchtopanelmanagementappPage(){
        browser.pause(5000)
        headernavigationPage.panelmanagementappButton.click()
        let PanelManagementUrl = process.env.Panel_management_url
        browser.switchWindow(PanelManagementUrl)
        browser.pause(10000)
        const assert = require('assert')
        assert.strictEqual(headernavigationPage.panelmanagementlogoText.isDisplayed(),true)
    }

    switchtoresourcelibraryappPage(){
        browser.pause(5000)
        this.resourcelibraryButton.click()
        let resourcelibraryUrl = process.env.Resourcelibrary_url
        browser.switchWindow(resourcelibraryUrl)
        browser.pause(10000)
        const assert = require('assert')
        assert.strictEqual(this.resourcelibrarylogoText.isDisplayed(),true)
    }
}

export default new myPrometheanPage()