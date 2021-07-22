import { assert } from 'console'

class UserfilterPage {
    get filteruserdropdownButton() { return $$("div[class='ant-menu-submenu-title']")[0] }
    get siteManagerText() { return $("//span[text()='Site Manager']") }
    get chenrjuserText() { return $("//span[text()='chenrj']") }
    
    filteruser(){
        browser.waitUntil(() => this.filteruserdropdownButton.isClickable()===true,{timeout: 20000})
        this.filteruserdropdownButton.click()
        browser.pause(1000)
        this.siteManagerText.click()
    }

    verifyfilteruser(){
        browser.waitUntil(() => this.chenrjuserText.isDisplayed()===true,{timeout: 20000})
        assert(this.chenrjuserText.isDisplayed(), true);
        browser.deleteCookies()
    }
}

export default new UserfilterPage()