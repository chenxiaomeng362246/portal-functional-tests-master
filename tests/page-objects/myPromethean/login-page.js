class LoginPage {
    get emailButton() { return $$("//span[text()='Sign in with email']")[1]}
    get emailInput() { return $("input[type*='text']") }
    get passwordInput() { return $("input[type*='password']") }
    get signInButton() { return $("button[class*='portal-button--primary']") }
    get appButton() { return $("#command-button") }
    get cookieButton() { return $("button.portal-button--primary.cookie-got-it") }
    get createaccountButton() { return $$("//span[text()='Need a myPromethean account?']")[1] }
    get profilebutton(){return $("span[class='icon-profile dropdown-icon']")}
    
    visitLoginPage(baseUrl){
        browser.pause(3000)
        browser.deleteCookies();
        browser.url(baseUrl);
        browser.waitUntil(() => this.cookieButton.isClickable()===true,{timeout: 20000})
        if (this.cookieButton.isDisplayed){
            this.cookieButton.click();
        }
    }

    emailLoginPage(){
        browser.waitUntil(() => this.emailButton.isClickable()===true,{timeout: 20000})
        this.emailButton.waitForClickable(20000)
        if (
            this.emailButton.isExisting()){
            this.emailButton.click();
        }
    }

    emailLogin(){
        let user_account = process.env.USER_NAME
        let user_password = process.env.User_PASSWORD
        this.emailInput.setValue(user_account);
        this.passwordInput.setValue(user_password);
        this.signInButton.click();
    }

    verifyLogin(){
        browser.waitUntil(() => this.profilebutton.isClickable()===true,{timeout: 20000});
    }

    verifySignout(){
        browser.waitUntil(() => this.emailButton.isDisplayed()===true,{timeout: 20000});
        const assert = require('assert')
        assert.strictEqual(this.emailButton.isDisplayed(),true)
    }

    createaccountpage(){
        if (
            this.createaccountButton.isExisting()){
            this.createaccountButton.click();
        }
    }
}

export default new LoginPage()
