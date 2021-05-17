import EnrolPage from '../../page-objects/panel-management/enrol-page'

class tagpanelPage {

    get panelnametext(){ return  $$("//span[contains(text(),'abbasHome')]")}
    get panelnameinfotext(){ return  $("//p[contains(text(),'No panels found')]")}

    searchexistedpanelPage(panelexist){
        browser.pause(15000)
        let panelname = process.env.panelname
        let Panel_Serial_Number = process.env.Panel_Serial_Number
        if (this.panelnametext[0].isDisplayed()){
            console.log("panel is exist, no need add")
        }else{
            tagmanagementPage.dropaddButton.click()
            EnrolPage.TypemanuallyPage()
            EnrolPage.panelNameBox.setValue(panelname)
            EnrolPage.serialNumber.setValue(Panel_Serial_Number)
            browser.pause(2000)
            EnrolPage.nextuplodButton.click()
            browser.pause(2000)
            browser.refresh()
            browser.pause(10000)
        }
        if (panelexist ==true){
            EnrolPage.typesearch.setValue(panelname)
        }else{
            EnrolPage.typesearch.setValue("abbasHomeqqq")
        }
        browser.pause(4000)
        EnrolPage.searchButton.click()
    }

    verifysearchpanelisexist(panelexist){
        browser.pause(10000)
        if (panelexist ==true){
            const assert = require('assert')
            assert.strictEqual(this.panelnametext.length,2)
        }else{
            const assert = require('assert')
            assert.strictEqual(this.panelnameinfotext.isDisplayed(),true)
        }
    }
}

export default new tagpanelPage()