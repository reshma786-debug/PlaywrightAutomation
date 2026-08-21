const { test, expect } = require('@playwright/test');

test('Handle JavaScript alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator("(//button[text()='Click me'])[1]").click();
    
});