const { test, expect } = require('@playwright/test');
const data = require('../../Testdata/testData.json');

test("Login Facebook", async ({ page }) => {
  await page.goto(data.url);
  await page.locator("//input[@name='email']").fill(data.username);
  await page.locator("//label[text()='Password']").fill(data.password);
});