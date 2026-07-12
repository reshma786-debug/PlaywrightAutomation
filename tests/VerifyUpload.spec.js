const {test,expect} = require ('@playwright/test')

test("Verify Upload", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.getByLabel("#file-upload").setInputFiles("C:\Users\Reshma\Downloads\Teddy")
    await page.getByLabel("#Upload").click()

})