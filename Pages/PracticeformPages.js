import * as path from 'path';

exports.Practicepage = class Practicepage {
    constructor(page) {
        this.page = page;
        // Use locators here instead of page.click()
        this.formselect = page.locator("//div[@class='home-body']//div[2]//div[1]//div[2]//*[name()='svg']");
        this.expandmenu = page.locator("//span[normalize-space()='Practice Form']");
        this.practiceheading = page.locator('h1');
        
        this.firstname = page.locator("//input[@id='firstName']");
        this.lastname = page.locator("//input[@id='lastName']");
        this.email = page.locator("//input[@id='userEmail']");
        this.phonenumber = page.locator("//input[@id='userNumber']");
        this.genderm = page.locator("//label[normalize-space()='Male']");
        this.date = page.locator("//input[@id='dateOfBirthInput']");
        this.uploadfield = page.locator("//input[@id='uploadPicture']");
        this.submit = page.locator("//button[@id='submit']");
    }

    // Go to the practice form
    async go_to_practiceform() {
        // Ensure the correct page elements are clicked
        await this.formselect.click();
        await this.expandmenu.click();
        
    }

    // Enter text in the fields
    async enter_textfields(fname, lname, emails, phone, dates, filePath) {
        await this.firstname.fill(fname);
        await this.lastname.fill(lname);
        await this.email.fill(emails);
        await this.phonenumber.fill(phone);
        await this.date.fill(dates);
        
        // Upload file path
        await this.uploadfield.setInputFiles(filePath);
    }

    // Click gender and submit button
    async clickers() {
        await this.genderm.click();
        await this.submit.click();
    }
};
