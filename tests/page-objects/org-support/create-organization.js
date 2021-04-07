import homepage from '../../page-objects/myPromethean/home-page';
import Commonmethods from '../../utils/commonmethods';
import { assert } from 'console'

class createorgPage {
    get dropdownorgazizationButton() { return $("//span[@class = 'icon-round-expand_more-24px']") }
    get PrometheanWorldText() { return $("//span[contains(text(),'Promethean World')]")}
    get createorgazizationButton() { return $("//span[@class = 'admin-button-list-default-icon icon-round-add-24px']") }
    get organizationNameInput() { return $("input[name='organizationName']") }
    get organizationDomainInput() { return $("input[name='organizationDomain']") }
    get savebutton() { return $("button[class='portal-button--primary']") }
    get existeddomainText() { return $("//div[contains(text(),'This domain is being used by another organization')]")}

    PrometheanWorldPage(){
        browser.pause(15000)
        homepage.dropdownIcon.click()
        browser.pause(1000)
        this.dropdownorgazizationButton.click()
        browser.pause(4000)
        this.PrometheanWorldText.click()
    }

    Createneworganizationbutton(){
        browser.pause(7000)
        this.createorgazizationButton.click()
    }

    Createneworganizationpage(){
        browser.pause(7000)
        this.organizationNameInput.setValue(Commonmethods.randomString())
        this.organizationDomainInput.setValue("nd.com.cn")
        browser.pause(1000)
        this.savebutton.click()
    }

    verifycreateorganization(){
        browser.pause(5000)
        assert(this.existeddomainText.isDisplayed(),true)
    }
}

export default new createorgPage()