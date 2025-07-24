# Test info

- Name: E2E Automation Test
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\E2Eautomation.spec.ts:10:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('section.ta-results button').nth(26)
    - locator resolved to <button type="button" _ngcontent-alo-c32="" class="ta-item list-group-item ng-star-inserted">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\E2Eautomation.spec.ts:42:34
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
      - button " Cart 2"
    - listitem:
      - button "Sign Out"
- text: "ZARA COAT 3 $ 31500 Quantity: 1"
- list:
  - listitem: Adidas Originals
- text: "IPHONE 13 PRO $ 231500 Quantity: 1"
- list:
  - listitem: iphonenew
- text: Payment Method Credit Card Paypal SEPA Invoice Personal Information Credit Card Number
- textbox: 4542 9931 9292 2293
- text: Expiry Date
- combobox:
  - option "01" [selected]
  - option "02"
  - option "03"
  - option "04"
  - option "05"
  - option "06"
  - option "07"
  - option "08"
  - option "09"
  - option "10"
  - option "11"
  - option "12"
- combobox:
  - option "01"
  - option "02"
  - option "03"
  - option "04"
  - option "05"
  - option "06"
  - option "07"
  - option "08"
  - option "09"
  - option "10"
  - option "11"
  - option "12"
  - option "13"
  - option "14"
  - option "15"
  - option "16" [selected]
  - option "17"
  - option "18"
  - option "19"
  - option "20"
  - option "21"
  - option "22"
  - option "23"
  - option "24"
  - option "25"
  - option "26"
  - option "27"
  - option "28"
  - option "29"
  - option "30"
  - option "31"
- text: CVV Code ?
- textbox
- text: Name on Card
- textbox
- text: Apply Coupon
- textbox
- button "Apply Coupon"
- text: Shipping Information test7lYM@gmail.com
- textbox: test7lYM@gmail.com
- textbox "Select Country": in
- button " Argentina"
- button " Bahrain"
- button " Benin"
- button " Bosnia and Herzegowina"
- button " British Indian Ocean Territory"
- button " Burkina Faso"
- button " China"
- button " Cocos (Keeling) Islands"
- button " Dominica"
- button " Dominican Republic"
- button " Equatorial Guinea"
- button " Falkland Islands (Malvinas)"
- button " Finland"
- button " Guinea"
- button " Guinea-Bissau"
- button " India"
- button " Indonesia"
- button " Liechtenstein"
- button " Martinique"
- button " Papua New Guinea"
- button " Philippines"
- button " Saint Kitts and Nevis"
- button " Saint Lucia"
- button " Saint Vincent and the Grenadines"
- button " San Marino"
- button " Sao Tome and Principe"
- button " Singapore"
- button " Spain"
- button " Suriname"
- button " Taiwan, Province of China"
- button " Trinidad and Tobago"
- button " Ukraine"
- button " United Kingdom"
- button " United States Minor Outlying Islands"
- button " Virgin Islands (British)"
- button " Virgin Islands (U.S.)"
- button " Palestine"
- text: Place Order
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 |
   3 |
   4 | const url = "https://rahulshettyacademy.com/client"
   5 | const email = "test7lYM@gmail.com"
   6 | const password = "Test@123"
   7 | const productName = "IPHONE 13 PRO"
   8 | const countryName = " Singapore"
   9 |
  10 | test("E2E Automation Test", async ({page}) => {
  11 |
  12 |     await page.goto(url)
  13 |     await page.getByPlaceholder("email@example.com").fill(email)
  14 |     await page.getByPlaceholder("enter your passsword").fill(password)
  15 |     await page.getByRole("button", {name: 'Login'}).click()
  16 |     await expect(page.locator(".fa-sign-out")).toBeVisible()
  17 |
  18 |     const products = page.locator("div.card-body") // This will select all the product cards on the page
  19 |     await products.last().waitFor({state: 'visible'}) // Wait for the last product card to be visible
  20 |     // count() - This will return the number matching element on the page
  21 |     const countOfProduct = await products.count()
  22 |
  23 |     for(let i=0; i<countOfProduct; i++){
  24 |         const productText = await products.nth(i).locator("b").textContent() // div.card-body b
  25 |         if(productText === productName){
  26 |             await products.nth(i).getByText("Add To Cart").click()
  27 |             break
  28 |         }
  29 |     }
  30 |
  31 |     await page.locator("[routerlink*='cart']").click()
  32 |     await page.getByRole("button", {name: 'Checkout'}).click()
  33 |     await expect(page.locator("div.user__name input[type='text']")).toHaveValue(email)
  34 |     await page.getByPlaceholder("Select Country").pressSequentially("in")
  35 |     await page.locator("section.ta-results").waitFor({state: 'visible'})
  36 |     const country = page.locator("section.ta-results button")
  37 |     const countOfCountry= await country.count()
  38 |
  39 |     for(let i=0; i<countOfCountry; i++){
  40 |          const countryText=  await country.nth(i).textContent()
  41 |         if(countryText === countryName){
> 42 |             await country.nth(i).click()
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43 |              break
  44 |         }
  45 |     }
  46 |
  47 |     await page.getByText("Place Order").click()
  48 |
  49 |     await expect(page.locator("h1.hero-primary")).toBeVisible()
  50 |     const orderID = await page.locator("td.em-spacer-1 label").last().textContent()
  51 |     console.log(orderID)
  52 |     await page.locator("[routerlink='/dashboard/myorders']").first().click()
  53 |
  54 |
  55 |     // table/tbody/tr/td
  56 |     // table - is to develop a table element
  57 |     // tbody - is to develop the table body
  58 |     // tr - table row
  59 |     // td - table data
  60 |
  61 |     await expect(page.locator("tbody")).toBeVisible()
  62 |     const rows = page.locator("tbody tr")
  63 |     const countOfRows = await rows.count()
  64 |     let orderText
  65 |     for(let i=0; i<countOfRows; i++){
  66 |         orderText = await rows.nth(i).locator("th").textContent()
  67 |         if(orderID?.includes(orderText)){
  68 |             await rows.nth(i).locator("button").first().click()
  69 |             break
  70 |         }
  71 |     }
  72 |
  73 |     await expect(page.locator("div.col-text")).toHaveText(orderText)
  74 |
  75 | })
  76 |
```