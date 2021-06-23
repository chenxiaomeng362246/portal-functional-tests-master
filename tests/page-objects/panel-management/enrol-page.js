
import tagpanelPage from '../../page-objects/panel-management/searchpanel'
class EnrolPage {

    get dropdownButton() { return $("span[class = 'ant-page-header-heading-extra']") }
    get enrolButton() { return $("//span[text()='Enroll']") }
    get importCSVButton() { return $("//h3[text()='Import from CSV file']") }
    get uploadCSVButton() { return $("input[type='file']") }
    get checkenrolText() { return $("//div[text()='1 panel was enrolled successfully']") }
    get checklinebox() { return $(".ant-table-body") }
    get nextuplodButton() { return $("button.portal-button--primary")}
    get doneButton() { return $("button[class='portal-button--secondary']") }
    get clickcheckbox() { return $(".ant-table-body input") }
    get typesearch() { return $("input[placeholder='Search panels...']") }
    get searchButton() { return $("[data-icon='search']") }
    get unenrolButton() { return $("//span[text()='Unenroll']") }
    get checkunenrolButton() { return $("button.portal-button--primary")}
    get checkunenrolText() { return $("//span[text()='Successfully unenrolled panel']") }
    get TypemanuallyButton() { return $("//h3[text()='Type it in manually']") }
    get panelNameBox() { return $$("input[type='text']")[1] }
    get serialNumber() { return $$("input[type='text']")[2] }
    get panelsrefreshbutton(){return $("div[class='refresh-button']")}

    visitEnrolPage(){
        browser.waitUntil(() => this.typesearch.isClickable()===true,{timeout: 20000})
        let Panel_Serial_Number_Nickel = process.env.Panel_Serial_Number_Nickel
        this.typesearch.setValue(Panel_Serial_Number_Nickel)
        browser.pause(2000)
        this.searchButton.click()
        browser.waitUntil(() => this.panelsrefreshbutton.isClickable()===true,{timeout: 20000})
        if(this.checklinebox.isDisplayed()){
            this.clickcheckbox.click()
            this.dropdownButton.click()
            this.unenrolButton.waitForClickable({ timeout: 10000 })
            this.unenrolButton.click()
            this.unenrolPage()
            browser.pause(3000)
            browser.refresh()
        }
        browser.waitUntil(() => this.dropdownButton.isClickable()===true,{timeout: 20000})
        this.dropdownButton.click()

    }

    clickIntoEnrolPage(){
        browser.waitUntil(() => this.enrolButton.isClickable()===true,{timeout: 20000})
        this.enrolButton.click();
    }

    importCSVPage(){
        browser.waitUntil(() => this.importCSVButton.isClickable()===true,{timeout: 20000})
        this.importCSVButton.click();
    }

    uploadCSVPage(){
        var path = require('path')
        var file_path = path.join(__dirname, "./../../../testdata/enrol-panel.csv")
        //Relative path of enrol csv file
        browser.pause(2000)
        this.uploadCSVButton.setValue(file_path)
        browser.waitUntil(() => this.nextuplodButton.isClickable()===true,{timeout: 20000})
        this.nextuplodButton.click()
    }

    verifyenrolPage(){
        var assert = require('assert')
        this.doneButton.waitForClickable({  timeout: 10000 })
        assert(this.checkenrolText.isDisplayed(), true);
        this.doneButton.click()
        browser.deleteCookies()
    }

    IntounenrolPage(){
        let Panel_Serial_Number_Nickel = process.env.Panel_Serial_Number_Nickel
        this.typesearch.setValue(Panel_Serial_Number_Nickel)
        this.searchButton.click()
        browser.pause(3000)
        this.clickcheckbox.click()
        this.dropdownButton.click()
        this.unenrolButton.waitForClickable({ timeout: 10000 })
        this.unenrolButton.click()
        }

    unenrolPage(){
        this.checkunenrolButton.waitForClickable({  timeout: 10000 })
        this.checkunenrolButton.click()
    }

    verifyunenrolPage(){
        var assert = require('assert')
        browser.waitUntil(() => this.checkunenrolText.isDisplayed()===true,{timeout: 20000})
        assert(this.checkunenrolText.isDisplayed(), true);
        browser.deleteCookies()
    }

    TypemanuallyPage(){
        this.enrolButton.waitForClickable({ timeout: 5000 });
        this.enrolButton.click();
        browser.waitUntil(() => this.TypemanuallyButton.isClickable()===true,{timeout: 20000})
        this.TypemanuallyButton.click();
    }

    EnrolmanuallyPage(){
        let Panel_Serial_Number_Nickel = process.env.Panel_Serial_Number_Nickel
        let Panelname_Nickel = process.env.Panelname_Nickel
        this.panelNameBox.setValue(Panelname_Nickel);
        this.serialNumber.setValue(Panel_Serial_Number_Nickel);
        browser.pause(2000)
        this.nextuplodButton.click();
        browser.pause(2000);
    }

    addpaneluserexist(){
        this.TypemanuallyPage()
        this.EnrolmanuallyPage()
        browser.refresh()
        browser.waitUntil(() => this.dropdownButton.isClickable()===true,{timeout: 20000})
    }

}

export default new EnrolPage()