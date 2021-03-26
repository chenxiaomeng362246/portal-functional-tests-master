import homepage from '../../page-objects/myPromethean/home-page';
import { assert } from 'console'
class editprofilePage {
    get editprofileButton() { return $("//li[contains(text(),'Edit Profile')]")}
    get fristnameInput() { return $("input[name='firstName']") }
    get lnztextimtext() { return $("input[value='lnz_testim_organization']") }
    get Americacountrytext() { return $("input[value='United States of America']") }
    get Englishlanguagetext() { return $("input[value='English (UK)']") }
    get saveeditprofileButton() { return $$("button.portal-button--primary")[2] }
    get editprofileText() { return $("//span[contains(text(),'Profile has been successfully changed.')]")}
    get countrydropbutton() { return $$("span[class='icon-round-expand_more-24px']")[2]}
    get AustraliacountryInput() { return $("//span[contains(text(),'Australia')]")}
    get AmericacountryInput() { return $("//span[contains(text(),'America')]")}
    get languagedropbutton() { return $$("span[class='icon-round-expand_more-24px']")[3]}
    get UKlanguagecacountryInput() { return $("//span[contains(text(),'English (UK)')]")}
    get USlanguagecacountryInput() { return $("//span[contains(text(),'English (US)')]")}
    get organisationbutton() { return $$("span[class='icon-round-expand_more-24px']")[4]}
    get lnztestimorganisationInput() { return $("//span[contains(text(),'lnz_testim_organization')]")}
    get lnztestimInput() { return $("//span[contains(text(),'LNZ_Testim')]")}

    entereditprofilepage(){
        browser.pause(15000)
        homepage.dropdownIcon.click()
        browser.pause(5000)
        this.editprofileButton.click()
    }

    editprofilepage(option){
        const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = 2; i > 0; --i) 
          result += str[Math.floor(Math.random() * str.length)];
        browser.pause(5000)
        if(option =="firstName"){
            this.fristnameInput.clearValue()
            browser.pause(2000)
            this.fristnameInput.setValue(result)
        }else if(option =="country"){
            if(this.Americacountrytext.isDisplayed()){
                this.countrydropbutton.click()
                browser.pause(2000)
                this.AustraliacountryInput.click()
            }else{
                this.countrydropbutton.click()
                browser.pause(2000)
                this.AmericacountryInput.click()
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
            }
        }else if(option =="organization"){
            if(this.lnztextimtext.isExisting()){
                this.organisationbutton.click()
                browser.pause(2000)
                this.lnztestimInput.click()
            }else{            
                this.organisationbutton.click()
                browser.pause(2000)
                this.lnztestimorganisationInput.click()
            }
        }
    }
    
    verifynewpasswordpage(){
        browser.pause(2000)
        this.saveeditprofileButton.click()
        browser.pause(5000)
        assert(this.editprofileText.isDisplayed(), true);
    }
}
export default new editprofilePage()
