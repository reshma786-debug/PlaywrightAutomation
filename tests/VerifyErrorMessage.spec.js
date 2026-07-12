const {test,expect} = require('@playwright/test')

test("Verify Error Message", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com")
    await page.getByPlaceholder("Username").type("Admin")
    await page.locator("input[name=password]").type("admin890")
    await page.locator("//button[@type='submit']").click();
    const errorMsg = await page.getByText("Invalid credentials").textContent();
    console.log("Error Message :"+ errorMsg);
    expect(errorMsg.includes("Invalid credentials")).toBeTruthy()
    
})