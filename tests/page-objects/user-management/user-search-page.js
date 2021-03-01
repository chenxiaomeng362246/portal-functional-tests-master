import { assert } from 'console'
class UsermanagementPage {
    get typeusersearch() { return $("input[placeholder='Search']") }
    get searchButton() { return $("[data-icon='search']") }
    get activitylogButton() { return $$("a[style]")[1] }
    get usermanagementappButton() { return $("//div[text()='User Management']") }
    get usermanagementlogoText() { return $("//span[text()='User Management']") }
    get panelmanagementappButton() { return $("//div[text()='Panel Management']") }
    get panelmanagementlogoText() { return $("//span[text()='Panel Management']") }
    get usernameText(){return $("div[class='portal-table-cell-wrapper ant-table-column-has-actions ant-table-column-has-sorters ant-table-column-sort']")}
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
export default new UsermanagementPage()