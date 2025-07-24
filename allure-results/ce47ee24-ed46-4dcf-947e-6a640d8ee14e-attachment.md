# Test info

- Name: Validate the product details for ZARA COAT 3
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\DPDDTest.spec.ts:38:5

# Error details

```
Error: expect(locator).toContainText(expected)

Locator: locator('div.col-lg-6 h2')
Expected string: "ZARA COAT 3"
Received string: ""
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('div.col-lg-6 h2')

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\DPDDTest.spec.ts:43:50
```

# Page snapshot

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- link "Continue Shopping❯":
  - /url: "#/dashboard"
- heading "ZARA COAT 3" [level=2]
- heading "$ 31500" [level=3]
- button "Add to Cart"
- heading "product details" [level=6]
- paragraph: Adidas Originals
- heading "Share It" [level=6]
- list:
  - listitem: 
  - listitem: 
  - listitem: 
  - listitem: 
  - listitem: 
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | import { LoginPage } from '../pages/LoginPage';
   3 | import { DashboarPage } from '../pages/DashboardPage';
   4 | import { ProductDetailsPage } from '../pages/ProductDetailsPage';
   5 | import datas from '../TestData/logindd.json'
   6 |
   7 | //console.log(datas);
   8 |
   9 |
  10 |
  11 |
  12 | // Launch the url - url
  13 | // login successfully into the application - validation - username & passsword
  14 |
  15 | // object for login Page
  16 | // DashboarPage and ProductDetailsPage
  17 |
  18 | let loginPage
  19 | let dashboardPage
  20 | let productDetailsPage
  21 |
  22 |
  23 | test.beforeEach(async ({page})=>{
  24 |     loginPage = new LoginPage(page)
  25 |     dashboardPage = new DashboarPage(page)
  26 |     productDetailsPage = new ProductDetailsPage(page)
  27 | })
  28 | for(let data of datas){
  29 | test(`Add the product to the cart validation for ${data.productName}`,{tag: ['@smoke', '@regression']}, async ()=>{
  30 |     await loginPage.launchURL(data.url) // 3 times
  31 |     await loginPage.validLogin(data.email, data.password) // 3 times
  32 |     await expect(dashboardPage.homePageIdentifier).toBeVisible()
  33 |     await dashboardPage.searchAndAddProductToCart(data.productName)
  34 |     await expect(dashboardPage.addToCartSuccessMsg).toContainText("Product Added To Cart")
  35 |
  36 | })
  37 |
  38 | test(`Validate the product details for ${data.productName}`, async ()=>{
  39 |     await loginPage.launchURL(data.url) // 3 times
  40 |     await loginPage.validLogin(data.email, data.password) // 3 times
  41 |     await expect(dashboardPage.homePageIdentifier).toBeVisible()
  42 |     await dashboardPage.searchAndViewProductDetails(data.productName)
> 43 |     await expect(productDetailsPage.productName).toContainText(data.productName)
     |                                                  ^ Error: expect(locator).toContainText(expected)
  44 | })
  45 | }
  46 |
  47 |
  48 | /*
  49 | const array = 
  50 | [
  51 |   {
  52 |     url: 'https://rahulshettyacademy.com/client',
  53 |     email: 'test7lYM@gmail.com',
  54 |     password: 'Test@123',
  55 |     productName: 'ZARA COAT 3'
  56 |   },
  57 |   {
  58 |     url: 'https://rahulshettyacademy.com/client',
  59 |     email: 'testnHNk@gmail.com',
  60 |     password: 'Testing@1234',
  61 |     productName: 'ADIDAS ORIGINAL'
  62 |   },
  63 |   {
  64 |     url: 'https://rahulshettyacademy.com/client',
  65 |     email: 'test7lYM@gmail.com',
  66 |     password: 'Test@123',
  67 |     productName: 'IPHONE 13 PRO'
  68 |   }
  69 | ]
  70 |
  71 | for(let ele of array){
  72 |     console.log(ele.productName);
  73 | }
  74 |
  75 | */
```