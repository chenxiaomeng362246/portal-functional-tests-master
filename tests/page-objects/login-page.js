class LoginPage {

    get emailButton() { return $("//div[@class='portal-button--link']/span[contains(text(),'Sign in with email')]") }
    get emailInput() { return $("input[type*='text']") }
    get passwordInput() { return $("input[type*='password']") }
    get signInButton() { return $("button[class*='portal-button--primary']") }
    get appButton() { return $("#command-button") }

    visitLoginPage(){
        browser.url("https://stagingportal.mypromethean.com/");
    }

    emailLoginPage(){
        this.emailButton.click();
    }

    emailLogin(){
        this.emailInput.setValue("");
        this.passwordInput.setValue("");
        // browser.debug()
        this.signInButton.click();
    }

    verifyLogin(){
        this.appButton.isClickable();
        // browser.debug()
    }

}

export default new LoginPage()