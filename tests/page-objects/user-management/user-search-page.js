import { assert } from 'console'
class UsersearchPage {
    get typeusersearch() { return $("input[placeholder='Search']") }
    get searchButton() { return $("[data-icon='search']") }
    get activitylogButton() { return $$("a[style]")[1] }
    get usernameText(){return $$("//span[contains(text(),'chenrj')]")[1]}
    get ndchenrjusernameText() { return $("//div[text()='nd chenrj']") }

    verifyusersearchPage(){
        browser.pause(15000)
        this.typeusersearch.click()
        this.typeusersearch.setValue("chenrj")
        this.searchButton.click()
        browser.pause(3000)
        assert(this.usernameText.getText(), "chenrj");
    }

    verifyactivitylogsearchPage(){
        this.activitylogButton.click()
        browser.pause(3000)
        this.typeusersearch.click()
        this.typeusersearch.setValue("chenrj")
        this.searchButton.click()
        browser.pause(3000)
        assert(this.ndchenrjusernameText.getText(), "nd chenrj");
    }
}
export default new UsersearchPage()