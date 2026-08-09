
const {test,expect} = require ('@playwright/test')

    test("Keyboard Action ", async ({page}) => 
    {
       await page.goto("https://www.google.com/")
       page.locator("//textarea[@name='q']").type("Search")
       page.keyboard.press("Meta+A")
       page.keyboard.press("Backspace")
       page.keyboard.press("Meta+V")
       page.keyboard.press("Enter")
       
    })