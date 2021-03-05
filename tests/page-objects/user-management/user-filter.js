import { assert } from 'console'

class UserfilterPage {
    get filteruserdropdownButton() { return $$("div[class='ant-menu-submenu-title']")[0] }
    get siteManagerText() { return $("//span[text()='Site Manager']") }
    get chenrjuserText() { return $("//span[text()='chenrj']") }
    
    filteruser(){
        browser.pause(12000)
        this.filteruserdropdownButton.click()
        browser.pause(1000)
        this.siteManagerText.click()
    }

    verifyfilteruser(){
        browser.pause(4000)
        assert(this.chenrjuserText.isDisplayed(), true);
        browser.deleteCookies()
    }
}

export default new UserfilterPage()