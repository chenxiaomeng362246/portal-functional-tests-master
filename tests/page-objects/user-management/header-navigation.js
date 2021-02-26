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
        browser.switchWindow("stagingportal")
        browser.pause(10000)
        assert(this.myPrometheanlogoText.isDisplayed(), true);
        assert(this.getconnectedText.isDisplayed(), true);
        this.myprometheanappsdropdownButton.click()
        this.usermanagementappButton.click()
        browser.pause(5000)
        browser.switchWindow("staging-user-management")
        assert(this.usermanagementlogoText.isDisplayed(), true);
    }

    switchtopanelmanagementappPage(){
        browser.pause(5000)
        this.panelmanagementappButton.click()
        browser.switchWindow("staging-panel-management")
        browser.pause(10000)
        assert(this.panelmanagementlogoText.isDisplayed(), true);
        this.appsdropdownButton.click()
        this.usermanagementappButton.click()
        browser.pause(5000)
        browser.switchWindow("staging-user-management")
        assert(this.usermanagementlogoText.isDisplayed(), true);
    }
}

export default new UsermanagementPage()