import tagmanagementPage from './tagmanagement'
import Commonmethods from '../../utils/commonmethods';
class editpaneldetailinfoPage {

    get updatepanelnameinfotext(){ return  $("//span[contains(text(),'Updated panel name')]")}
    get paneldetail(){ return  $$("div[class= 'ant-card-meta-detail']")[0]}
    get panelnameedit(){ return  $$("input[type='text']")[0]}
    get panelnameinfo(){return  $("//span[contains(text(),'Panel name')]")}
    get cobaltpanelnametext(){  
        let Panel_Serial_Number_Cobalt = '"'+process.env.Panel_Serial_Number_Cobalt+'"'
        var elementpanel = "tr[data-row-key = "+Panel_Serial_Number_Cobalt+"]"
        return  $(elementpanel)
    }

    editthepaneldetailPage(){
        browser.waitUntil(() => this.cobaltpanelnametext.isClickable()===true,{timeout: 20000})
        this.cobaltpanelnametext.click()
        browser.waitUntil(() => this.panelnameinfo.isDisplayed()===true,{timeout: 20000})
        this.paneldetail.click()
    }

    editthepaneldetail(){
        browser.pause(3000)
        this.panelnameedit.clearValue()
        browser.pause(2000)
        this.panelnameedit.setValue(Commonmethods.randomString())
        browser.pause(2000)
        tagmanagementPage.savetagbutton.click()
    }

    verifyeditpanelname(){
        browser.waitUntil(() => this.updatepanelnameinfotext.isDisplayed()===true,{timeout: 20000})
        const assert = require('assert')
        assert.strictEqual(this.updatepanelnameinfotext.isDisplayed(),true)
    }
}

export default new editpaneldetailinfoPage()