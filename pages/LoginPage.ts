import { Locator, Page } from "playwright";

export class LoginPage{

    private username : Locator
    private password : Locator
    private loginButton : Locator
    errorMessage : Locator
    private page : Page

    constructor(page) {
        this.page = page // initialise the page fixture here from the test file
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginButton = this.page.getByRole("button", {name: 'Login'})
        this.errorMessage = this.page.locator("#toast-container")
    }

    async launchURL(url :string){
        await this.page.goto(url)
    }

    async validLogin(username :string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async invalidLogin(username, incorrectPassword){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginButton.click()
    }
}