import EnrolPage from '../../page-objects/panel-management/enrol-page'
class tagpanelPage {

    get panelnametext(){ return  $$("//span[contains(text(),'abbasHome')]")}
    get panelnameinfotext(){ return  $("//p[contains(text(),'No panels found')]")}

    searchexistedpanelPage(panelexist){
        browser.pause(15000)
        if (panelexist ==true){
            EnrolPage.typesearch.setValue("abbasHome")
        }else{
            EnrolPage.typesearch.setValue("abbasHomeqqq")
        }
        browser.pause(4000)
        EnrolPage.searchButton.click()
    }

    verifysearchpanelisexist(panelexist){
        browser.debug()
        browser.pause(10000)
        if (panelexist ==true){
            const assert = require('assert');
            assert.strictEqual(this.panelnametext.length,2)
        }else{
            const assert = require('assert');
            assert.strictEqual(this.panelnameinfotext.isDisplayed(),true)
        }
    }
}

export default new tagpanelPage()