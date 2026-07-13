class LoginPage{

constructor(page)
{
    this.page =page
    this.userName="#email1"
    this.password="//input[@placeholder='Enter Password']"
    this.loginbutton="//button[text()='Sign in']"
}
    async loginToApplication()
    {
        await this.page.fill(this.userName,"admin@gmail.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginbutton)
    }
}

module.exports=LoginPage;