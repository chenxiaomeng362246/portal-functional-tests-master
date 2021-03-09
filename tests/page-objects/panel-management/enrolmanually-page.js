import EnrolPage from '../../page-objects/panel-management/enrol-page'; 
class EnrolmanualPage {
    get TypemanuallyButton() { return $("//h3[text()='Type it in manually']") }
    get panelNameBox() { return $$("input[type='text']")[2] }
    get serialNumber() { return $$("input[type='text']")[3] }

    TypemanuallyPage(){
        EnrolPage.enrolButton.waitForClickable({ timeout: 5000 });
        EnrolPage.enrolButton.click();
        browser.pause(7000)
        this.TypemanuallyButton.waitForClickable({timeout: 20000 });
        this.TypemanuallyButton.click();
    }
    EnrolmanuallyPage(){
        this.panelNameBox.setValue("786T-J62L3R2760007-env-orstaging");
        this.serialNumber.setValue("786T-J62L3R2760007");
        browser.pause(2000)
        EnrolPage.nextuplodButton.click();
        browser.pause(2000);
    }

}

export default new EnrolmanualPage()