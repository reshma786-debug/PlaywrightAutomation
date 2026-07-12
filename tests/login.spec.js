const {test,expect} = require('@playwright/test')

test("Valid login", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com")
    await page.getByPlaceholder("Username").type("Admin")
    await page.locator("input[name=password]").type("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)
    
})