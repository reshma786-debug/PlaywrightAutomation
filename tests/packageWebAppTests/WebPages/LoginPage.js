
const { expect } = require('@playwright/test')

class LoginPage {

    constructor(page) {
        this.page = page
        this.userName = "#email1"
        this.password = "//input[@placeholder='Enter Password']"
        this.loginbutton = "//button[text()='Sign in']"
        this.signoutHeader = "//*[text()='Sign in']"
    }

    async signOutHeader() {
        await expect(this.page.locator(this.signoutHeader)).toBeVisible()
    }

    async loginToApplication(user,password) {
        await this.page.fill(this.userName, user)
        await this.page.fill(this.password,password)
        await this.page.click(this.loginbutton)
    }
}

module.exports = LoginPage;