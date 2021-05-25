import homepage from '../../page-objects/myPromethean/home-page';
class changepasswordPage {
    get changepasswordButton() { return $("//span[contains(text(),'Change password')]")}
    get previouspasswordInput() { return $("input[name='previousPassword']") }
    get newpasswordInput() { return $("input[name='newPassword']") }
    get newpasswordconfirmInput() { return $("input[name='newPasswordConfirm']") }
    get saveButton() { return $$("button.portal-button--primary")[2] }
    get changepasswordText() { return $("//span[contains(text(),'Password has been successfully changed.')]")}

    enterchangepasswordpage(){
        browser.pause(15000)
        homepage.dropdownIcon.click()
        browser.pause(5000)
        this.changepasswordButton.click()
    }

    typenewpasswordpage(){
        let emailaddres = process.env.User_PASSWORD
        browser.pause(2000)
        this.previouspasswordInput.setValue(emailaddres)
        browser.pause(1000)
        this.newpasswordInput.setValue(emailaddres)
        browser.pause(1000)
        this.newpasswordconfirmInput.setValue(emailaddres)
    }

    verifynewpasswordpage(){
        browser.pause(2000)
        this.saveButton.click()
        browser.pause(5000)
        const assert = require('assert')
        assert.strictEqual(this.changepasswordText.isDisplayed(),true)
    }
}

export default new changepasswordPage()
