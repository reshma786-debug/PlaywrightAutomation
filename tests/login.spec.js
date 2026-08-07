const {test,expect} = require('@playwright/test')

//const	A JavaScript keyword used to declare a variable whose reference cannot be reassigned.
//{ }	Curly braces here use object destructuring, which extracts specific properties from an object.
//test	A function provided by Playwright that is used to define a test case. 
//expect	An assertion function used to verify that something happened as expected. For example: expect(await page.title()).toBe('Home');
//=	Assignment operator. It assigns the value returned by require() to the destructured variables.
//require()	A Node.js function that imports a module into the current file (CommonJS syntax).
//'@playwright/test'	The name of the Playwright Test package installed in your project. It exports functions like test, expect, describe, beforeEach, etc.
//;	A semicolon marking the end of the JavaScript statement (optional in many cases, but commonly used).

//Simple Terms
//const → Creates variables.
//{ test, expect } → Picks only the test and expect functions from the imported module.
//require() → Loads the Playwright package.
//'@playwright/test' → Specifies which package to load.
//; → Ends the statement

test("Valid login", async ({page})=>{
//test(Calls the Playwright test function.    
//({ page }) Destructures the page object provided by Playwright. page represents a browser tab.
//async Indicates the function can perform asynchronous operations, such as opening a page or clicking a button.
    await page.goto("https://opensource-demo.orangehrmlive.com")
    await page.getByPlaceholder("Username").type("Admin")
    await page.locator("input[name=password]").type("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)
    
})