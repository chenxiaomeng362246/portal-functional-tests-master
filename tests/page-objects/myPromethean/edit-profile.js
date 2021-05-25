import homepage from '../../page-objects/myPromethean/home-page';
import Commonmethods from '../../utils/commonmethods';
import { assert } from 'console'
class editprofilePage {
    get editprofileButton() { return $("//li[contains(text(),'Edit profile')]")}
    get fristnameInput() { return $("input[name='firstName']") }
    get ITAdministratortext() { return $("input[value='IT Administrator']") }
    get UnitedKingdomcountrytext() { return $("input[value='United Kingdom']") }
    get Englishlanguagetext() { return $("input[value='English (UK)']") }
    get saveeditprofileButton() { return $$("button.portal-button--primary")[2] }
    get editprofileText() { return $("//span[contains(text(),'Profile has been successfully changed.')]")}
    get countrydropbutton() { return $$("span[class='icon-round-expand_more-24px']")[1]}
    get AustraliacountryInput() { return $("//span[contains(text(),'Australia')]")}
    get UnitedKingdomcountrytextInput() { return $("//span[contains(text(),'United Kingdom')]")}
    get languagedropbutton() { return $$("span[class='icon-round-expand_more-24px']")[2]}
    get UKlanguagecacountryInput() { return $("//span[contains(text(),'English (UK)')]")}
    get USlanguagecacountryInput() { return $("//span[contains(text(),'English (US)')]")}
    get organisationbutton() { return $$("span[class='icon-round-expand_more-24px']")[0]}
    get ITAdministratororganisationInput() { return $("//span[contains(text(),'IT Administrator')]")}
    get TeacherInput() { return $("//span[contains(text(),'Teacher')]")}
    get editUKlanguageprofileButton() { return $("//li[contains(text(),'Edit Profile')]")}

    entereditprofilepage(){
        browser.pause(15000)
        homepage.dropdownIcon.click()
        browser.pause(5000)
        this.editprofileButton.click()
    }

    editprofilepage(option){
        browser.pause(5000)
        if(option =="firstName"){
            this.fristnameInput.clearValue()
            browser.pause(2000)
            this.fristnameInput.setValue(Commonmethods.randomString())
        }else if(option =="country"){
            if(this.UnitedKingdomcountrytext.isDisplayed()){
                this.countrydropbutton.click()
                browser.pause(2000)
                this.AustraliacountryInput.click()
            }else{
                this.countrydropbutton.click()
                browser.pause(2000)
                this.UnitedKingdomcountrytextInput.click()
            }
        }else if(option =="language"){
            if(this.Englishlanguagetext.isDisplayed()){
                this.languagedropbutton.click()
                browser.pause(2000)
                this.USlanguagecacountryInput.click()
            }else{
                this.languagedropbutton.click()
                browser.pause(2000)
                this.UKlanguagecacountryInput.click()
                this.changethelanguagetoUS()
            }
        }else if(option =="organization"){
            if(this.ITAdministratortext.isExisting()){
                this.organisationbutton.click()
                browser.pause(2000)
                this.TeacherInput.click()
            }else{            
                this.organisationbutton.click()
                browser.pause(2000)
                this.ITAdministratororganisationInput.click()
            }
        }
    }
    
    verifynewpasswordpage(){
        browser.pause(5000)
        this.saveeditprofileButton.click()
        browser.pause(9000)
        const assert = require('assert')
        assert.strictEqual(this.editprofileText.isDisplayed(),true)
    }

    changethelanguagetoUS(){
        this.verifynewpasswordpage()
        browser.refresh()
        browser.pause(12000)
        homepage.dropdownIcon.click()
        browser.pause(5000)
        this.editUKlanguageprofileButton.click()
        this.languagedropbutton.click()
        browser.pause(2000)
        this.USlanguagecacountryInput.click()
    }
}
export default new editprofilePage()
