import homepage from '../../page-objects/myPromethean/home-page';
import Commonmethods from '../../utils/commonmethods';

class createorgPage {
    get createorgazizationButton() { return $(".admin-button-list-default-icon") }
    get organizationNameInput() { return $("input[name='organizationName']") }
    get organizationDomainInput() { return $("input[name='organizationDomain']") }
    get savebutton() { return $("button[class='portal-button--primary']") }
    get existeddomainText() { return $("//div[contains(text(),'This domain is being used by another organization')]")}

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
        const assert = require('assert')
        assert.strictEqual(this.existeddomainText.isDisplayed(),true)
    }
}

export default new createorgPage()