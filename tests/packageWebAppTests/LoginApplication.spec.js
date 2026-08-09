
const {test,expect} = require('@playwright/test'); 
const LoginPage = require('../WebPages/LoginPage');
const HomePage = require('../WebPages/HomePage');

test('Login To Application using POM', async ({ page }) =>
{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication("admin@email.com","admin@123")

    const homepage = new HomePage(page)
    await homepage.verifyManageOption()
    await homepage.logoutApplication()
    await loginPage.signOutHeader()
});
