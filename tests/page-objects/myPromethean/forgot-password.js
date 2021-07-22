import { assert } from 'console'
class forgotpasswordPage {
    get forgotpasswordButton() { return $("//span[text()='Forgot password?']") }
    get forgotpasswordemailInput() { return $$("input[type*='text']")[1] }
    get sendemailbutton() { return $$("button[class*='portal-button--primary']")[1] }
    get verificationInput() { return $$("input[type*='text']")[0] }
    get newpasswordInput() { return $$("input[type*='password']")[0] }
    get confirmpasswordInput() { return $$("input[type*='password']")[1] }
    get resetpasswordInput() { return $("button[type*='submit']") }
    get erroremailcodetext(){return $("//span[contains(text(),'We are having trouble with that code.')]")}
    get invalidemailcodetext(){return $("//div[contains(text(),'Please enter the verification code as it appears in the email.')]")}
    get returnresetpasswordpage(){return $("div[class='ant-modal-wrap ']")}

    enterforgotpasswordPage(){
        browser.waitUntil(() => this.forgotpasswordButton.isClickable()===true,{timeout: 20000})
        this.forgotpasswordButton.click()
    }

    enteremailPage(emailaddres){
        browser.waitUntil(() => this.forgotpasswordemailInput.isClickable()===true,{timeout: 20000})
        this.forgotpasswordemailInput.setValue(emailaddres);
        browser.waitUntil(() => this.sendemailbutton.isClickable()===true,{timeout: 20000})
        this.sendemailbutton.click()
    }

    typeinformation(emailcode, newpassword){
        browser.waitUntil(() => this.returnresetpasswordpage.isClickable()===true,{timeout: 20000})
        browser.pause(2000)
        this.returnresetpasswordpage.click()
        this.verificationInput.setValue(emailcode);
        this.newpasswordInput.setValue(newpassword);
        this.confirmpasswordInput.setValue(newpassword);
    }

    verifyerrorpromptPage(){
        browser.waitUntil(() => this.resetpasswordInput.isClickable()===true,{timeout: 20000})
        this.resetpasswordInput.click()
        browser.waitUntil(() => this.erroremailcodetext.isDisplayed()===true,{timeout: 20000})
        const assert = require('assert')
        assert.strictEqual(this.erroremailcodetext.isDisplayed(),true)
    }

    verifyinvalidpromptPage(){
        browser.waitUntil(() => this.resetpasswordInput.isClickable()===true,{timeout: 20000})
        this.resetpasswordInput.click()
        browser.waitUntil(() => this.invalidemailcodetext.isDisplayed()===true,{timeout: 20000})
        const assert = require('assert')
        assert.strictEqual(this.invalidemailcodetext.isDisplayed(),true)
    }
}

export default new forgotpasswordPage()