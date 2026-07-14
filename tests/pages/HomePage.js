
const {expect} = require('@playwright/test')

class HomePage {

    constructor(page) {
        this.page = page
        this.menu = "//img[@alt='menu']"
        this.manage = "//span[text()='Manage']"
        this.logoutoption = "//button[normalize-space()='Sign out']"
    }

    async verifyManageOption() {
        await expect(this.page.locator(this.manage)).toBeVisible()
    }

    async logoutApplication() {
        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)
    }
}

module.exports = HomePage; 