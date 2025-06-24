import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboarPage } from '../pages/DashboardPage';


const url = "https://rahulshettyacademy.com/client"
const email = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "abcd"

test.describe.configure({mode: 'serial', timeout : 120000, retries : 1})



// pre-condition or common step - hooks

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboarPage(page)
    await loginPage.launchURL(url)
})
test.describe("Login Page Test", async ()=>{
    test(" @smoke Valid Login Test", async () => {
        test.step("Login into the application", async ()=>{
            await loginPage.validLogin(email, password)
        })
        test.step("Verify the dashboard page is displayed", async ()=>{
            await expect(dashboardPage.homePageIdentifier).toBeVisible()
        })
    })

    test(" @regression Invalid Login Test", async () => {
        await loginPage.invalidLogin(email, incorrectPassword)
        await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
    })
})

