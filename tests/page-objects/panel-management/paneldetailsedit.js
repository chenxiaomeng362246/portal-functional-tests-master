import tagmanagementPage from './tagmanagement'
import Commonmethods from '../../utils/commonmethods';
class editpaneldetailinfoPage {

    get updatepanelnameinfotext(){ return  $("//span[contains(text(),'Updated panel name')]")}
    get paneldetail(){ return  $$("div[class= 'ant-card-meta-detail']")[0]}
    get panelnameedit(){ return  $$("input[type='text']")[0]}
    get cobaltpanelnametext(){  
        let Panel_Serial_Number_Cobalt = '"'+process.env.Panel_Serial_Number_Cobalt+'"'
        var elementpanel = "tr[data-row-key = "+Panel_Serial_Number_Cobalt+"]"
        return  $(elementpanel)
    }

    editthepaneldetailPage(){
        browser.pause(25000)
        this.cobaltpanelnametext.click()
        browser.pause(10000)
        this.paneldetail.click()
    }

    editthepaneldetail(){
        browser.pause(3000)
        this.panelnameedit.clearValue()
        browser.pause(3000)
        this.panelnameedit.setValue(Commonmethods.randomString())
        browser.pause(3000)
        tagmanagementPage.savetagbutton.click()
    }

    verifyeditpanelname(){
        browser.pause(5000)
        const assert = require('assert')
        assert.strictEqual(this.updatepanelnameinfotext.isDisplayed(),true)
    }
}

export default new editpaneldetailinfoPage()