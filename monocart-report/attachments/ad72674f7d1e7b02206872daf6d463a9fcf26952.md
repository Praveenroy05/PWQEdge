# Test info

- Name: Add the product to the cart validation for IPHONE 13 PRO
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\DPDDUsingExcelTest.spec.ts:32:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div.card-body').nth(2).getByText('Add To Cart')
    - locator resolved to <button _ngcontent-vdc-c34="" class="btn w-10 rounded">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

    at DashboarPage.searchAndAddProductToCart (C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\pages\DashboardPage.ts:25:69)
    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\DPDDUsingExcelTest.spec.ts:36:5
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
- paragraph: Home | Search
- heading "Filters" [level=4]
- textbox "search"
- heading "Price Range" [level=6]
- textbox "Min Price"
- textbox "Max Price"
- heading "Categories" [level=6]
- text: 
- checkbox
- text: fashion
- checkbox
- text: electronics
- checkbox
- text: household
- heading "Sub Categories" [level=6]
- text: 
- checkbox
- text: t-shirts
- checkbox
- text: shirts
- checkbox
- text: shoes
- checkbox
- text: mobiles
- checkbox
- text: laptops
- heading "Search For" [level=6]
- text: 
- checkbox
- text: men
- checkbox
- text: women Showing 3 results | User can only see maximum 9 products on a page
- img
- heading "ZARA COAT 3" [level=5]
- text: $ 31500
- button "View"
- button " Add To Cart"
- img
- heading "ADIDAS ORIGINAL" [level=5]
- text: $ 31500
- button "View"
- button " Add To Cart"
- img
- heading "IPHONE 13 PRO" [level=5]
- text: $ 231500
- button "View"
- button " Add To Cart"
- list "Pagination":
  - listitem: « Previous page
  - listitem: You're on page 1
  - listitem: Next page »
- text: Design and Developed By - Kunal Sharma
```

# Test source

```ts
   1 | import { Locator, Page } from "playwright";
   2 |
   3 | export class DashboarPage{
   4 |     
   5 |
   6 |     private products : Locator
   7 |     private page :Page
   8 |     addToCartSuccessMsg : Locator
   9 |     homePageIdentifier : Locator
  10 |
  11 |     constructor(page: Page) {
  12 |         this.page = page
  13 |         this.products = this.page.locator("div.card-body")
  14 |         this.addToCartSuccessMsg = this.page.locator("#toast-container")
  15 |         this.homePageIdentifier = this.page.locator(".fa-sign-out")
  16 |     }
  17 |
  18 |
  19 |     async searchAndAddProductToCart(productName){
  20 |         await this.products.last().waitFor({state: 'visible'})
  21 |         const countOfProduct = await this.products.count()
  22 |         for(let i=0; i<countOfProduct; i++){
  23 |             const productText = await this.products.nth(i).locator("b").textContent() 
  24 |             if(productText === productName){
> 25 |                 await this.products.nth(i).getByText("Add To Cart").click()
     |                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  26 |                 break
  27 |             }
  28 |         }
  29 |     }
  30 |
  31 |     async searchAndViewProductDetails(productName){
  32 |         await this.products.last().waitFor({state: 'visible'})
  33 |         const countOfProduct = await this.products.count()
  34 |         for(let i=0; i<countOfProduct; i++){
  35 |             const productText = await this.products.nth(i).locator("b").textContent() 
  36 |             if(productText === productName){
  37 |                 await this.products.nth(i).getByText("View").click()
  38 |                 break
  39 |             }
  40 |         }
  41 |     }
  42 |
  43 |     
  44 |
  45 |     
  46 |
  47 |
  48 |
  49 |
  50 | }
```