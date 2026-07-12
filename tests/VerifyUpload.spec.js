const {test,expect} = require ('@playwright/test')

test("Verify Upload", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("/Users/Reshma/Downloads/Teddy.avif")
    await page.locator("#file-submit").click()
    const fileSuccessMsg = await page.getByText("File Uploaded!").textContent()
    console.log("fileSuccessMsg :"+ fileSuccessMsg);
    expect(fileSuccessMsg.includes("File Uploaded!")).toBeTruthy()
})