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

    enterforgotpasswordPage(){
        browser.pause(1000)
        this.forgotpasswordButton.waitForClickable()
        this.forgotpasswordButton.click()
    }

    enteremailPage(emailaddres){
        browser.pause(2000)
        this.forgotpasswordemailInput.setValue(emailaddres);
        browser.pause(1000)
        this.sendemailbutton.click()
    }

    typeinformation(emailcode, newpassword){
        browser.pause(7000)
        this.verificationInput.setValue(emailcode);
        this.newpasswordInput.setValue(newpassword);
        browser.pause(1000)
        this.confirmpasswordInput.setValue(newpassword);
    }

    verifyerrorpromptPage(){
        browser.pause(1000)
        this.resetpasswordInput.click()
        browser.pause(5000)
        assert(this.erroremailcodetext.isDisplayed(), true);
    }

    verifyinvalidpromptPage(){
        browser.pause(1000)
        this.resetpasswordInput.click()
        browser.pause(5000)
        assert(this.invalidemailcodetext.isDisplayed(), true);
    }
}

export default new forgotpasswordPage()