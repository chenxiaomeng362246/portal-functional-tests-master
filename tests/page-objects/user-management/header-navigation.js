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
        browser.pause(12000)
        this.appsdropdownButton.waitForClickable()
        this.appsdropdownButton.click()
        this.myPrometheanButton.click()
        let MyPrometheanurl = process.env.MyPromethean_url
        browser.switchWindow(MyPrometheanurl)
        browser.pause(10000)
        assert(this.myPrometheanlogoText.isDisplayed(), true);
        assert(this.getconnectedText.isDisplayed(), true);
        this.myprometheanappsdropdownButton.click()
        this.usermanagementappButton.click()
        browser.pause(5000)
        let UserManagementUrl = process.env.User_management_url
        browser.switchWindow(UserManagementUrl)
        assert(this.usermanagementlogoText.isDisplayed(), true);
    }

    switchtopanelmanagementappPage(){
        browser.pause(5000)
        this.panelmanagementappButton.click()
        let PanelManagementUrl = process.env.Panel_management_url
        browser.switchWindow(PanelManagementUrl)
        browser.pause(10000)
        assert(this.panelmanagementlogoText.isDisplayed(), true);
        this.appsdropdownButton.click()
        this.usermanagementappButton.click()
        browser.pause(5000)
        let UserManagementUrl = process.env.User_management_url
        browser.switchWindow(UserManagementUrl)
        assert(this.usermanagementlogoText.isDisplayed(), true);
    }
}

export default new UsermanagementPage()