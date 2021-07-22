import homepage from '../../page-objects/myPromethean/home-page';
class changepasswordPage {
    get changepasswordButton() { return $("//span[contains(text(),'Change password')]")}
    get previouspasswordInput() { return $("input[name='previousPassword']") }
    get newpasswordInput() { return $("input[name='newPassword']") }
    get newpasswordconfirmInput() { return $("input[name='newPasswordConfirm']") }
    get saveButton() { return $$("button.portal-button--primary")[2] }
    get changepasswordText() { return $("//span[contains(text(),'Password has been successfully changed.')]")}

    enterchangepasswordpage(){
        browser.waitUntil(() => homepage.dropdownIcon.isClickable()===true,{timeout: 20000})
        homepage.dropdownIcon.click()
        browser.waitUntil(() => this.changepasswordButton.isClickable()===true,{timeout: 20000})
        this.changepasswordButton.click()
    }

    typenewpasswordpage(){
        let emailaddres = process.env.User_PASSWORD
        browser.waitUntil(() => this.previouspasswordInput.isClickable()===true,{timeout: 20000})
        this.previouspasswordInput.setValue(emailaddres)
        this.newpasswordInput.setValue(emailaddres)
        this.newpasswordconfirmInput.setValue(emailaddres)
    }

    verifynewpasswordpage(){
        browser.waitUntil(() => this.saveButton.isClickable()===true,{timeout: 20000})
        this.saveButton.click()
        browser.waitUntil(() => this.changepasswordText.isDisplayed()===true,{timeout: 20000})
        const assert = require('assert')
        assert.strictEqual(this.changepasswordText.isDisplayed(),true)
    }
}

export default new changepasswordPage()
