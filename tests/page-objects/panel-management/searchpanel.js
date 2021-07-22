import EnrolPage from '../../page-objects/panel-management/enrol-page'
import tagmanagementPage from '../../page-objects/panel-management/tagmanagement'

class SearchPage {

    get panelnametext(){ return  $$("//span[contains(text(),'abbasHome')]")}
    get panelnameinfotext(){ return  $("//p[contains(text(),'No panels found')]")}
    get panelinfolist(){return $("div[class='ant-table ant-table-default ant-table-fixed-header ant-table-scroll-position-left']")}
    get panellistrefreshbutton(){return $("div[class='refresh-button']")}

    searchexistedpanelPage(panelexist){
        browser.waitUntil(() => this.panelinfolist.isClickable()===true,{timeout: 20000})
        browser.pause(2000)
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
            browser.waitUntil(() => EnrolPage.typesearch.isClickable()===true,{timeout: 20000})
        }
        if (panelexist ==true){
            EnrolPage.typesearch.setValue(panelname)
        }else{
            EnrolPage.typesearch.setValue("abbasHomeqqq")
        }
        browser.waitUntil(() => EnrolPage.searchButton.isClickable()===true,{timeout: 20000})
        EnrolPage.searchButton.click()
    }

    verifysearchpanelisexist(panelexist){
        browser.waitUntil(() => this.panellistrefreshbutton.isDisplayed()===true,{timeout: 20000})
        if (panelexist ==true){
            const assert = require('assert')
            assert.strictEqual(this.panelnametext.length,2)
        }else{
            const assert = require('assert')
            assert.strictEqual(this.panelnameinfotext.isDisplayed(),true)
        }
    }
}

export default new SearchPage()