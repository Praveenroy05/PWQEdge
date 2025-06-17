import {test, expect} from '@playwright/test';


const url = "https://rahulshettyacademy.com/client"
const email = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "IPHONE 13 PRO"
const countryName = " Singapore"

test("E2E Automation Test", async ({page}) => {

    await page.goto(url)
    await page.getByPlaceholder("email@example.com").fill(email)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole("button", {name: 'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()

    const products = page.locator("div.card-body") // This will select all the product cards on the page
    await products.last().waitFor({state: 'visible'}) // Wait for the last product card to be visible
    // count() - This will return the number matching element on the page
    const countOfProduct = await products.count()

    for(let i=0; i<countOfProduct; i++){
        const productText = await products.nth(i).locator("b").textContent() // div.card-body b
        if(productText === productName){
            await products.nth(i).getByText("Add To Cart").click()
            break
        }
    }

    await page.locator("[routerlink*='cart']").click()
    await page.getByRole("button", {name: 'Checkout'}).click()
    await expect(page.locator("div.user__name input[type='text']")).toHaveValue(email)
    await page.getByPlaceholder("Select Country").pressSequentially("in")
    await page.locator("section.ta-results").waitFor({state: 'visible'})
    const country = page.locator("section.ta-results button")
    const countOfCountry= await country.count()

    for(let i=0; i<countOfCountry; i++){
         const countryText=  await country.nth(i).textContent()
        if(countryText === countryName){
            await country.nth(i).click()
             break
        }
    }

    await page.getByText("Place Order").click()

    await expect(page.locator("h1.hero-primary")).toBeVisible()
    const orderID = await page.locator("td.em-spacer-1 label").last().textContent()
    console.log(orderID)
    await page.locator("[routerlink='/dashboard/myorders']").first().click()


    // table/tbody/tr/td
    // table - is to develop a table element
    // tbody - is to develop the table body
    // tr - table row
    // td - table data

    await expect(page.locator("tbody")).toBeVisible()
    const rows = page.locator("tbody tr")
    const countOfRows = await rows.count()
    let orderText
    for(let i=0; i<countOfRows; i++){
        orderText = await rows.nth(i).locator("th").textContent()
        if(orderID?.includes(orderText)){
            await rows.nth(i).locator("button").first().click()
            break
        }
    }

    await expect(page.locator("div.col-text")).toHaveText(orderText)

})
