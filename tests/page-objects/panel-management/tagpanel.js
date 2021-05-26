import tagmanagementPage from '../../page-objects/panel-management/tagmanagement'
import EnrolPage from '../../page-objects/panel-management/enrol-page'

class tagpanelPage {

    get devicenametext(){ return  $("//span[contains(text(),'abbasHome')]")}
    get Managetagsbutton(){ return  $("//span[contains(text(),'Manage tags')]")}
    get tagcheckboxbutton() { return $$("span[class='MuiIconButton-label']") }
    get addtagpaneltext(){return $("//span[contains(text(),'Edited tag for selected panels')]") }
    get checktaghasaddedtext(){ return $$("//span[contains(@class, 'MuiIconButton-colorSecondary')]")}
    get canceltagbutton() { return $("button[class='portal-button--secondary']") }
    get droptaggrouglistbutton(){ return  $("//span[contains(text(),'Tag group:  bbbb')]")}
    get droptag2(){ return $$("//span[contains(text(),'test_tag2')]")[0]}

    checkpanelinfo(){
        browser.pause(15000)

        if (this.devicenametext.isDisplayed()){
            console.log("panel is exist, no need add")
        }else{
            tagmanagementPage.dropaddButton.click()
            EnrolPage.TypemanuallyPage()
            let Panelname_Abbas = process.env.Panelname
            let Panel_Serial_Number_Abbas = process.env.Panel_Serial_Number
            EnrolPage.panelNameBox.setValue(Panelname_Abbas);
            EnrolPage.serialNumber.setValue(Panel_Serial_Number_Abbas);
            browser.pause(2000)
            EnrolPage.nextuplodButton.click();
            browser.pause(2000);
            browser.refresh()
            browser.pause(10000)
        }
        EnrolPage.clickcheckbox.click()
    }

    Managetagspage(){
        browser.pause(2000)
        tagmanagementPage.dropaddButton.click()
        browser.pause(4000)
        this.Managetagsbutton.click()
        browser.pause(6000)
    }

    assigntagtopanel(){
        if (this.checktaghasaddedtext.length==2){
            console.log("tag is exist, no need add it")
            this.canceltagbutton.click()
        }else{
            browser.pause(5000)
            var a = this.tagcheckboxbutton.length
            this.tagcheckboxbutton[parseInt(a)-1].click()
            browser.pause(5000)
            tagmanagementPage.savetagbutton.click()
            browser.pause(5000)
            const assert = require('assert');
            assert.strictEqual(this.addtagpaneltext.isDisplayed(), true);
            browser.refresh()
        }
    }

    verifytagaddedtopaneltext(){
        browser.pause(7000)
        this.droptaggrouglistbutton.click()
        browser.pause(2000)
        this.droptag2.click()
        browser.pause(5000)
        const assert = require('assert');
        assert.strictEqual(this.devicenametext.isDisplayed(),true)
    }

    removetagtopanel(){
        if (this.checktaghasaddedtext.length==2){
            browser.pause(2000)
            var a = this.tagcheckboxbutton.length
            this.tagcheckboxbutton[parseInt(a)-1].click()
            browser.pause(5000)
            tagmanagementPage.savetagbutton.click()
            browser.pause(5000)
            const assert = require('assert');
            assert.strictEqual(this.addtagpaneltext.isDisplayed(), true);
            browser.refresh()
        }else{
            console.log("tag is not exist, no need remove it")
            this.canceltagbutton.click()
        }
    }

    verifytagremovetopaneltext(){
        browser.pause(7000)
        this.droptaggrouglistbutton.click()
        browser.pause(2000)
        this.droptag2.click()
        browser.pause(5000)
        const assert = require('assert');
        assert.strictEqual(this.devicenametext.isDisplayed(),false)
    }
   
}

export default new tagpanelPage()