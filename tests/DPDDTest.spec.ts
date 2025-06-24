import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboarPage } from '../pages/DashboardPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import datas from '../TestData/logindd.json'

//console.log(datas);




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
})
for(let data of datas){
test(`Add the product to the cart validation for ${data.productName}`,{tag: ['@smoke', '@regression']}, async ()=>{
    await loginPage.launchURL(data.url) // 3 times
    await loginPage.validLogin(data.email, data.password) // 3 times
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText("Product Added To Cart")

})

test(`Validate the product details for ${data.productName}`, async ()=>{
    await loginPage.launchURL(data.url) // 3 times
    await loginPage.validLogin(data.email, data.password) // 3 times
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchAndViewProductDetails(data.productName)
    await expect(productDetailsPage.productName).toContainText(data.productName)
})
}


/*
const array = 
[
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'ZARA COAT 3'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ADIDAS ORIGINAL'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'IPHONE 13 PRO'
  }
]

for(let ele of array){
    console.log(ele.productName);
}

*/