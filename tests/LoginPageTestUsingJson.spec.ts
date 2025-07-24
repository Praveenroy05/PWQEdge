import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import data from '../TestData/login.json'
import { DashboarPage } from '../pages/DashboardPage';

// console.log("Data.url = ", data.url)

const incorrectPassword = "abcd"


// pre-condition or common step - hooks
let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboarPage(page)
    await loginPage.launchURL(data.url)
})
test(" @regression Valid Login Test", async () => {
    await loginPage.validLogin(data.email, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async () => {
    await loginPage.invalidLogin(data.email, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})

// Excel - 
// Step by step procedure to work with excel

// 1. Install the package 'xlsx' - npm install xlsx
// 2. Import the package - import xlsx from 'xlsx'
// 3. Read the file  - const workbook = xlsx.readFile(pathofthefile)
// 4. Get the first sheet - const sheet = workbook.Sheets[sheetName]
// 5. Convert the excel into a json format 