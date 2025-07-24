# Test info

- Name: Login Page Test >>  @smoke Valid Login Test
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\LoginPageTest.spec.ts:25:9

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByPlaceholder('enter your passsword')

    at LoginPage.validLogin (C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\pages\LoginPage.ts:25:29)
    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\LoginPageTest.spec.ts:27:13
```

# Test source

```ts
   1 | import { Locator, Page } from "playwright";
   2 |
   3 | export class LoginPage{
   4 |
   5 |     private username : Locator
   6 |     private password : Locator
   7 |     private loginButton : Locator
   8 |     errorMessage : Locator
   9 |     private page : Page
  10 |
  11 |     constructor(page) {
  12 |         this.page = page // initialise the page fixture here from the test file
  13 |         this.username = this.page.getByPlaceholder("email@example.com")
  14 |         this.password = this.page.getByPlaceholder("enter your passsword")
  15 |         this.loginButton = this.page.getByRole("button", {name: 'Login'})
  16 |         this.errorMessage = this.page.locator("#toast-container")
  17 |     }
  18 |
  19 |     async launchURL(url :string){
  20 |         await this.page.goto(url)
  21 |     }
  22 |
  23 |     async validLogin(username :string, password: string){
  24 |         await this.username.fill(username)
> 25 |         await this.password.fill(password)
     |                             ^ Error: locator.fill: Test ended.
  26 |         await this.loginButton.click()
  27 |     }
  28 |
  29 |     async invalidLogin(username, incorrectPassword){
  30 |         await this.username.fill(username)
  31 |         await this.password.fill(incorrectPassword)
  32 |         await this.loginButton.click()
  33 |     }
  34 | }
```