
const { test, expect } = require('@playwright/test')

test.fail()
test("Handle Auto Complete", async ({ page }) => {
    await page.goto('https://www.google.com')
    const searchInput = page.locator("//textarea[@name='q']")
    await searchInput.click()
    await searchInput.fill('playwright')
    await page.waitForTimeout(2000) 
    const suggestionItem = page.locator("//li[@role='presentation' and @data-attrid='AutocompletePrediction']").first()
    await expect(suggestionItem).toBeVisible({ timeout: 100000 })
    await page.keyboard.press('ArrowDown')
    await page.waitForTimeout(3000) 
    await page.keyboard.press('Enter')
    await expect(page.locator('input[name="q"]')).toHaveValue(/playwright/i)
})