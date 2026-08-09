const {test,expect} = require('@playwright/test')

test("Wait Load State", async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//a[@class='subLink']").click()
    await page.waitForLoadState("networkidle")
    const countOfGenderOptions = await page.locator("//input[@name='gender' and @type='radio']").count()
    expect(countOfGenderOptions).toBe(2)
})