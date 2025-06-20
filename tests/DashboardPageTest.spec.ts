import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboarPage } from '../pages/DashboardPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import data from '../TestData/login.json'



// Launch the url - url
// login successfully into the application - validation - username & passsword

// object for login Page
// DashboarPage and ProductDetailsPage

let loginPage
let dashboardPage
let productDetailsPage




test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboarPage(page)
    productDetailsPage = new ProductDetailsPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.email, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()

})
test("Add the product to the cart validation", async ()=>{
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText("Product Added To Cart")

})

test("Validate the product details", async ()=>{
    await dashboardPage.searchAndViewProductDetails(data.productName)
    await expect(productDetailsPage.productName).toContainText(data.productName)
})