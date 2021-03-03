class LoginPage {

    get emailButton() { return $$("//div[@class='portal-button--link']/span[contains(text(),'Sign in with email')]")[1] }
    get emailInput() { return $("input[type*='text']") }
    get passwordInput() { return $("input[type*='password']") }
    get signInButton() { return $("button[class*='portal-button--primary']") }
    get appButton() { return $("#command-button") }
    get cookieButton() { return $("button.portal-button--primary.cookie-got-it") }
    get createaccountButton() { return $$("//span[text()='Need a myPromethean account?']")[1] }

    visitLoginPage(baseUrl){
        browser.deleteCookies();
        browser.url(baseUrl);
        browser.pause(18000)
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

    verifySignout(){
        browser.pause(10000);
        this.emailButton.isDisplayed();
    }

    createaccountpage(){
        if (
            this.createaccountButton.isExisting()){
            this.createaccountButton.click();
        }
    }
}

export default new LoginPage()
