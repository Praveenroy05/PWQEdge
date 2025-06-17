import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


const url = "https://rahulshettyacademy.com/client"
const email = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "abcd"


// pre-condition or common step - hooks

test("Valid Login Test", async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(email, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.invalidLogin(email, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})