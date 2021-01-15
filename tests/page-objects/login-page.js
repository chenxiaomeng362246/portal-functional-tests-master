class LoginPage {

    get emailButton() { return $("//div[@class='portal-button--link']/span[contains(text(),'Sign in with email')]") }
    get emailInput() { return $("input[type*='text']") }
    get passwordInput() { return $("input[type*='password']") }
    get signInButton() { return $("button[class*='portal-button--primary']") }
    get appButton() { return $("#command-button") }

    emailLoginPage(){
        this.emailButton.click();
    }

    emailLogin(){
        this.emailInput.setValue("b3vm4i99klzd29bqgvr1za154@tstmail.link");
        this.passwordInput.setValue("126Legenecy");
        // browser.debug()
        this.signInButton.click();
    }

    verifyLogin(){
        this.appButton.isClickable();
        // browser.debug()
    }

}

export default new LoginPage()