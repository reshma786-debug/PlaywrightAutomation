
// tests/mobile.spec.js
const { test, expect, devices } = require('@playwright/test');

// Use iPhone 13 profile for this test
test.use({ ...devices['iPhone 13'] });

test('Mobile menu opens on tap', async ({ page }) => {
 await page.goto('https://playwright.dev/');
 await expect(page).toHaveTitle(/Playwright/);
 await page.getByRole('button', { name: 'Toggle navigation bar' }).click();
 await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
});