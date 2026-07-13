const {test,expect} = require('@playwright/test'); 
const LoginPage = require("../pages/loginpage")

test('Login To Application using POM', async ({ page }) =>
{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication()
});
