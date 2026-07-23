
 const{test,expect}=require ('@playwright/test')

 test ("Handle Auto Complete",  async ({page}) =>
 {
      await page.goto("https://www.google.com")

     await page.locator("//textarea[@name='q']").fill("playwright")

     await page.waitForSelector("//li[@role='presentation']")

      const element = await page.$$("//li[@role='presentation']")

     await page.keyword.press("ArrowDown")

     await page.keyboard.press("Enter")
 })