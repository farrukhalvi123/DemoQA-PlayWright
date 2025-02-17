exports.Practice = class Practice {
    constructor(page) {
        this.page = page
        this.firstname = page.locator("//input[@id='firstName']")
        this.lastname = page.locator("//input[@id='lastName']")
        this.email = page.locator("//input[@id='userEmail']")
        this.phone = page.locator("//input[@id='userNumber']")
        this.gender = page.locator("//label[normalize-space()='Male']")
        this.datefield = page.locator("//input[@id='dateOfBirthInput']")
        this.upload = page.locator("//input[@id='uploadPicture']")
        this.submit = page.locator("//button[@id='submit']")


    }
    async filltextfields(fname,lname,emails,ph,dt,up){
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.email.fill(emails)
        await this.phone.fill(ph)
        await this.gender.click()
        await this.datefield.fill(dt)
        await this.upload.fill(up)
        this.submit.click()

    }
}
