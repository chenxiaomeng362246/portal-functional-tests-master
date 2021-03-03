import { assert } from 'console'
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
        browser.switchWindow("staging-user-management")
        browser.pause(5000)
        assert(headernavigationPage.usermanagementlogoText.isDisplayed(), true);
    }

    switchtopanelmanagementappPage(){
        browser.pause(5000)
        headernavigationPage.panelmanagementappButton.click()
        browser.switchWindow("staging-panel-management")
        browser.pause(10000)
        assert(headernavigationPage.panelmanagementlogoText.isDisplayed(), true);
    }

    switchtoresourcelibraryappPage(){
        browser.pause(5000)
        this.resourcelibraryButton.click()
        browser.switchWindow("stagingresourcelibrary")
        browser.pause(10000)
        assert(this.resourcelibrarylogoText.isDisplayed(), true);
    }
}

export default new myPrometheanPage()