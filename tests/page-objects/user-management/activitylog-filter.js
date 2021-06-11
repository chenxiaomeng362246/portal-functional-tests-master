import { assert } from 'console'
import UserfilterPage from '../../page-objects/user-management/user-filter';
class ActivitylogfilterPage {
    get activitylogButton() { return $$("a[style]")[1] }
    get checkboxndchenrjuserText() { return $("//span[text()='Matthew Christian']") }
    get filteractivitytypedropdownButton() { return $$("div[class='ant-menu-submenu-title']")[1] }
    get checkboxAccountsuspended() { return $("//span[text()='Account(s) suspended']") }
    get verifyactivitystatustext() { return $$("div[class='portal-table-cell-wrapper ant-table-row-cell-break-word']")[0] }
    
    changetoactivitylog(){
        browser.pause(12000)
        this.activitylogButton.click()
        browser.pause(1000)
    }

    filteractivitylog(){
        browser.pause(5000)
        UserfilterPage.filteruserdropdownButton.click()
        browser.pause(1000)
        this.checkboxndchenrjuserText.click()
        browser.pause(3000)
        UserfilterPage.filteruserdropdownButton.click()
        browser.pause(1000)
        this.filteractivitytypedropdownButton.click()
        browser.pause(1000)
        this.checkboxAccountsuspended.click()
    }

    verifyactivitystatus(){
        browser.pause(5000)
        assert(this.verifyactivitystatustext.getText(), "Account suspended");
        browser.deleteCookies()
    }
}

export default new ActivitylogfilterPage()