# Test info

- Name: Login Page Test >>  @smoke Valid Login Test
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\LoginPageTest.spec.ts:25:9

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('.fa-sign-out')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.fa-sign-out')

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\LoginPageTest.spec.ts:30:60
    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\LoginPageTest.spec.ts:29:14
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | import { LoginPage } from '../pages/LoginPage';
   3 | import { DashboarPage } from '../pages/DashboardPage';
   4 |
   5 |
   6 | const url = "https://rahulshettyacademy.com/client"
   7 | const email = "test7lYM@gmail.com"
   8 | const password = "Test@123"
   9 | const incorrectPassword = "abcd"
  10 |
  11 | test.describe.configure({mode: 'serial', timeout : 120000, retries : 1})
  12 |
  13 |
  14 |
  15 | // pre-condition or common step - hooks
  16 |
  17 | let loginPage
  18 | let dashboardPage
  19 | test.beforeEach(async ({page})=>{
  20 |     loginPage = new LoginPage(page)
  21 |     dashboardPage = new DashboarPage(page)
  22 |     await loginPage.launchURL(url)
  23 | })
  24 | test.describe("Login Page Test", async ()=>{
  25 |     test(" @smoke Valid Login Test", async () => {
  26 |         test.step("Login into the application", async ()=>{
  27 |             await loginPage.validLogin(email, password)
  28 |         })
  29 |         test.step("Verify the dashboard page is displayed", async ()=>{
> 30 |             await expect(dashboardPage.homePageIdentifier).toBeVisible()
     |                                                            ^ Error: expect(locator).toBeVisible()
  31 |         })
  32 |     })
  33 |
  34 |     test(" @regression Invalid Login Test", async () => {
  35 |         await loginPage.invalidLogin(email, incorrectPassword)
  36 |         await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
  37 |     })
  38 | })
  39 |
  40 |
```