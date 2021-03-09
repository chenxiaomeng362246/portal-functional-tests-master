import { assert } from 'console'
class ActivitylogdetailPage {
    get nduserText() { return $("//div[text()='nd']") }
	get ActivitylogText() { return $("//h3[text()='Activity log']") }
	get datetimeButton() { return $("//span[text()='DATE/TIME']") }
	get datetimeText() { return $$("span[style='font-weight: 700;']")[1]} 
	get adminButton() { return $("//span[text()='ADMIN']") }
	get activitylogdetaildatetimeinfo() { return $("//tbody/tr[1]/td[1]/div") }
    get activitylogdetailactivityinfo() { return $("//tbody/tr[1]/td[3]/div") }  
    
    activityloguserpage(){
        browser.pause(12000)
        this.nduserText.click()
        browser.pause(3000)
        assert(this.ActivitylogText.isDisplayed(), true);
    }
    
    verifyactivitylogdetailtables(){
        this.datetimeButton.click()
        browser.pause(2000)
        assert(this.ActivitylogText.isDisplayed(), true);
        assert(this.datetimeText.getText(), "16 February 2021 20:50");
        this.adminButton.click()
        browser.pause(2000)
        assert(this.activitylogdetaildatetimeinfo.getText(), "19 February 2021 19:20");
        assert(this.activitylogdetailactivityinfo.getText(), "Role unassigned: Panel Administrator");
        browser.deleteCookies()
    }
}

export default new ActivitylogdetailPage()