class homePage {

    get dropdownIcon() { return $("span.icon-profile.dropdown-icon") }
    get signoutButton() { return $("//span[contains(text(),'Sign out')]")}


    clickSignout(){
        browser.pause(15000);
        this.dropdownIcon.click();
        browser.pause(5000);
        this.signoutButton.click();
    }
}

export default new homePage()