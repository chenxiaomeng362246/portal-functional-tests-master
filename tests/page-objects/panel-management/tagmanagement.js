import { assert } from 'console'
class tagmanagementPage {

    get tagButton() { return $$("//a")[1] }
    get dropaddButton() { return $("div[data-testid = 'command-button-large']") }
    get checkboxaddgroupButton() { return $$("span[class='MuiIconButton-label']") }
    get groupnameInput() { return $$("input[type*='text']")[1] }
    get tagnameInput() { return $$("input[type*='text']")[2] }
    get savetagbutton() { return $("button[class='portal-button--primary']") }
    get tagaddedtext() { return $("//span[contains(text(),'has been added.')]") }
    get tagaddedname(){return $("//span[contains(text(),'test_tag')]") }
    get returntagpage(){return $$("div[class='ant-modal-wrap ']")[1]}
    get checkboxbutton(){return $$("input[type = 'checkbox']")[0]}
    get deletebutton(){return $("//span[contains(text(),'Delete')]") }
    get tagdeletedtext() { return $("//p[contains(text(),'has been deleted')]") }

    entertagpage(){
        browser.pause(15000)
        this.tagButton.click()
        browser.pause(5000)
    }

    addtagpage(){
        this.dropaddButton.click()
        browser.pause(6000)
        var a = this.checkboxaddgroupButton.length
        this.checkboxaddgroupButton[parseInt(a)-1].click()
    }

    typenewtagname(){
        browser.pause(2000)
        this.groupnameInput.setValue("aaaa")
        this.tagnameInput.setValue("test_tag")
        browser.pause(2000)
    }

    verifytagaddedtext(){
        this.savetagbutton.click()
        browser.pause(5000)
        assert(this.tagaddedtext.isDisplayed(), true);
    }
    
    deletetagpage(){
        browser.pause(2000)
        this.checkboxbutton.click()
        browser.pause(2000)
        this.dropaddButton.click()
        browser.pause(3000)
        this.deletebutton.click()
        browser.pause(5000)
        this.savetagbutton.click()
    }

    verifytagdeletedtext(){
        browser.pause(5000)
        assert(this.tagdeletedtext.isDisplayed(), true);
    }

}

export default new tagmanagementPage()