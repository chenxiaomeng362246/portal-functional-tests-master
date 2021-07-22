import { assert } from 'console'

class UsermanagementPage {
    get appsdropdownButton() { return $("//span[text()='Apps']") }
    get myPrometheanButton() { return $("//div[text()='myPromethean']") }
    get myPrometheanlogoText() { return $("#myPrometheanLogo") }
    get getconnectedText() { return $("//h2[text()='Get Connected']") }
    get myprometheanappsdropdownButton() { return $(".appswitcher-dropdown-wrapper button") }
    get usermanagementappButton() { return $("//div[text()='User Management']") }
    get usermanagementlogoText() { return $("//span[text()='User Management']") }
    get panelmanagementappButton() { return $("//div[text()='Panel Management']") }
    get panelmanagementlogoText() { return $("//span[text()='Panel Management']") }

    switchtomyPrometheanappPage(){
        browser.waitUntil(() => this.appsdropdownButton.isClickable()===true,{timeout: 20000})
        this.appsdropdownButton.waitForClickable()
        this.appsdropdownButton.click()
        this.myPrometheanButton.click()
        let MyPrometheanurl = process.env.MyPromethean_url
        browser.switchWindow(MyPrometheanurl)
        browser.waitUntil(() => this.myPrometheanlogoText.isDisplayed()===true,{timeout: 20000})
        assert(this.myPrometheanlogoText.isDisplayed(), true);
        assert(this.getconnectedText.isDisplayed(), true);
        browser.waitUntil(() => this.myprometheanappsdropdownButton.isClickable()===true,{timeout: 20000})
        this.myprometheanappsdropdownButton.click()
        this.usermanagementappButton.click()
        let UserManagementUrl = process.env.User_management_url
        browser.switchWindow(UserManagementUrl)
        browser.waitUntil(() => this.usermanagementlogoText.isDisplayed()===true,{timeout: 20000})
        assert(this.usermanagementlogoText.isDisplayed(), true);
    }

    switchtopanelmanagementappPage(){
        browser.pause(3000)
        this.panelmanagementappButton.click()
        let PanelManagementUrl = process.env.Panel_management_url
        browser.switchWindow(PanelManagementUrl)
        browser.waitUntil(() => this.panelmanagementlogoText.isDisplayed()===true,{timeout: 20000})
        assert(this.panelmanagementlogoText.isDisplayed(), true);
        browser.waitUntil(() => this.appsdropdownButton.isClickable()===true,{timeout: 20000})
        this.appsdropdownButton.click()
        this.usermanagementappButton.click()
        let UserManagementUrl = process.env.User_management_url
        browser.switchWindow(UserManagementUrl)
        browser.waitUntil(() => this.usermanagementlogoText.isDisplayed()===true,{timeout: 20000})
        assert(this.usermanagementlogoText.isDisplayed(), true);
    }
}

export default new UsermanagementPage()