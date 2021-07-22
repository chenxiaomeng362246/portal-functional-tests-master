class homePage {

    get dropdownIcon() { return $("span.icon-profile.dropdown-icon") }
    get signoutButton() { return $("//span[contains(text(),'Sign out')]")}


    clickSignout(){
        browser.waitUntil(() => this.dropdownIcon.isDisplayedInViewport()===true,{timeout: 20000});
        this.dropdownIcon.click();
        browser.pause(2000)
        browser.waitUntil(() => this.signoutButton.isDisplayedInViewport()===true,{timeout: 20000});
        this.signoutButton.click();
    }
}

export default new homePage()