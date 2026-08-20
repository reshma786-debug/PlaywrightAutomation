

const { test, expect } = require('@playwright/test')
test("Verify browser context", async ({ browser }) => {
    const context1 = await browser.newContext();
    
    const page1 = await context1.newPage();
    await page1.goto("https://www.google.com");
    
    await page1.screenshot({
        path: "screenshot.png"
    })
    
    const page2 = await context1.newPage();
    await page2.goto("https://www.google.com");
    
    await page1.close();
    await page2.close();
    await context1.close();
})
