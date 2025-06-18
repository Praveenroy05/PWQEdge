import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import data from '../TestData/login.json'

// console.log("Data.url = ", data.url)

const incorrectPassword = "abcd"


// pre-condition or common step - hooks

let loginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)
})
test("Valid Login Test", async () => {
    await loginPage.validLogin(data.email, data.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async () => {
    await loginPage.invalidLogin(data.email, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})