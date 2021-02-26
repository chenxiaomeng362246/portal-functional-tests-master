class LoginPage {

    get emailButton() { return $$("//div[@class='portal-button--link']/span[contains(text(),'Sign in with email')]")[1] }
    get emailInput() { return $("input[type*='text']") }
    get passwordInput() { return $("input[type*='password']") }
    get signInButton() { return $("button[class*='portal-button--primary']") }
    get appButton() { return $("#command-button") }
    get cookieButton() { return $("button.portal-button--primary.cookie-got-it") }

    visitMPLoginPage(){
        browser.url("https://stagingportal.mypromethean.com/");
        if (this.cookieButton.isDisplayed){
            this.cookieButton.click();
        }
    }

    visitPMLoginPage(){
        browser.url("https://staging-panel-management.mypromethean.com/");
        if (this.cookieButton.isDisplayed){
            this.cookieButton.click();
        }
    }

    emailLoginPage(){
        if (
            this.emailButton.isExisting()){
            this.emailButton.click();
        }
    }

    emailLogin(){
        this.emailInput.setValue("");
        this.passwordInput.setValue("");
        this.signInButton.click();
    }

    verifyLogin(){
        this.appButton.isClickable();
    }

}

export default new LoginPage()
