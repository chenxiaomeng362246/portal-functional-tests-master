import { assert } from 'console'
import tagmanagementPage from '../../page-objects/panel-management/tagmanagement'
import EnrolPage from '../../page-objects/panel-management/enrol-page'
class tagpanelPage {

    get devicenametext(){ return  $("//span[contains(text(),'abbasHome')]")}
    get Managetagsbutton(){ return  $("//span[contains(text(),'Manage tags')]")}
    get tagcheckboxbutton() { return $$("span[class='MuiIconButton-label']") }
    get addtagpaneltext(){return $("//span[contains(text(),'Edited tag for selected panels')]") }
    get checktaghasaddedtext(){return $(".ant-modal-body span[class = 'MuiButtonBase-root MuiIconButton-root jss2 MuiCheckbox-root MuiCheckbox-colorSecondary jss3 Mui-checked MuiIconButton-colorSecondary']")}
    get canceltagbutton() { return $("button[class='portal-button--secondary']") }
    get droptaggrouglistbutton(){ return  $("//span[contains(text(),'Tag group:  aaaa')]")}
    get droptag2(){ return $$("//span[contains(text(),'test_tag2')]")[0]}

    checkpanelinfo(){
        browser.pause(15000)
        if (this.devicenametext.isDisplayed()){
            console.log("panel is exit, no need add")
        }else{
            tagmanagementPage.dropaddButton.click()
            EnrolPage.TypemanuallyPage()
            EnrolPage.panelNameBox.setValue("abbasHome");
            EnrolPage.serialNumber.setValue("75W25-K1HL2E0760075");
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
    }

    assigntagtopanel(){
        if (this.checktaghasaddedtext.isDisplayed()){
            console.log("tag is exit, no need add it")
            this.canceltagbutton.click()
        }else{
            browser.pause(2000)
            var a = this.tagcheckboxbutton.length
            this.tagcheckboxbutton[parseInt(a)-1].click()
            browser.pause(5000)
            tagmanagementPage.savetagbutton.click()
            browser.pause(5000)
            assert(this.addtagpaneltext.isDisplayed(), true);
            browser.refresh()
        }
    }

    verifytagaddedtopaneltext(){
        browser.pause(7000)
        this.droptaggrouglistbutton.click()
        browser.pause(2000)
        this.droptag2.click()
        browser.pause(5000)
        assert(this.devicenametext.isDisplayed(), true);
    }
   
}

export default new tagpanelPage()