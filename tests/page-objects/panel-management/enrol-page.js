class EnrolPage {

    get dropdownButton() { return $("//button[@class = 'ant-dropdown-trigger']") }
    get enrolButton() { return $("//span[text()='Enrol']") }
    get importCSVButton() { return $("//h3[text()='Import from CSV file']") }
    get uploadCSVButton() { return $("input[type='file']") }
    get checkenrolText() { return $("//div[text()='1 panel was enrolled successfully']") }
    get checklinebox() { return $(".ant-table-body") }
    get nextuplodButton() { return $("button.portal-button--primary")}
    get doneButton() { return $("button[class='portal-button--secondary']") }
    get clickcheckbox() { return $(".ant-table-body input") }
    get typesearch() { return $("input[placeholder='Search panels...']") }
    get searchButton() { return $("[data-icon='search']") }
    get unenrolButton() { return $("//span[text()='Unenrol']") }
    get checkunenrolButton() { return $("button.portal-button--primary")}
    get checkunenrolText() { return $("//span[text()='Successfully unenrolled panel']") }
    get TypemanuallyButton() { return $("//h3[text()='Type it in manually']") }
    get panelNameBox() { return $$("input[type='text']")[2] }
    get serialNumber() { return $$("input[type='text']")[3] }

    visitEnrolPage(){
        browser.pause(15000)
        this.typesearch.setValue("786T")
        browser.pause(2000)
        this.searchButton.click()
        browser.pause(7000)
        if(this.checklinebox.isDisplayed()){
            this.clickcheckbox.click()
            this.dropdownButton.click()
            this.unenrolButton.waitForClickable({ timeout: 10000 })
            this.unenrolButton.click()
            this.unenrolPage()
            browser.pause(10000)
            browser.refresh()
        }
        this.dropdownButton.waitForClickable({timeout: 30000 })
        this.dropdownButton.click()

    }

    clickIntoEnrolPage(){
        this.enrolButton.waitForClickable({ timeout: 5000 })
        this.enrolButton.click();
    }

    importCSVPage(){
        this.importCSVButton.waitForClickable({timeout: 3000 })
        this.importCSVButton.click();
    }

    uploadCSVPage(){
        var path = require('path')
        var file_path = path.join(__dirname, "./../../../testdata/enrol-panel.csv")
        //Relative path of enrol csv file
        browser.pause(2000)
        this.uploadCSVButton.setValue(file_path)
        this.nextuplodButton.waitForClickable({ timeout: 10000 })
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
        this.typesearch.setValue("786T")
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
        browser.pause(7000)
        assert(this.checkunenrolText.isDisplayed(), true);
        browser.deleteCookies()
    }

    TypemanuallyPage(){
        this.enrolButton.waitForClickable({ timeout: 5000 });
        this.enrolButton.click();
        browser.pause(7000)
        this.TypemanuallyButton.waitForClickable({timeout: 20000 });
        this.TypemanuallyButton.click();
    }

    EnrolmanuallyPage(){
        this.panelNameBox.setValue("786T-J62L3R2760007-env-orstaging");
        this.serialNumber.setValue("786T-J62L3R2760007");
        browser.pause(2000)
        this.nextuplodButton.click();
        browser.pause(2000);
    }

    addpaneluserexist(){
        this.TypemanuallyPage()
        this.EnrolmanuallyPage()
        browser.refresh()
        browser.pause(10000)
    }

}

export default new EnrolPage()