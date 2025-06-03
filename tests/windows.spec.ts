// windows - popup events appeared on the page

// Launch the url - page.goto()
// waitForEvent('popup') - page.waitForEvent() - without using await 
// click on the element - whichever is responsible for creating a new page/tab/window
// const newPage = await successfull message - it will return us the new page handle - newPage
// validate or click something on new page - newPage.click()
// ..........
// page.locator().click()


import {test, expect} from '@playwright/test'

test("Multiple window handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    // We are waiting for popup event to appear on the page
    const page1 = page.waitForEvent('popup') 
    //As soon as the popup event triggered this will starting listing the event (popup) - it can return the status as pending (because new page creation can take fraction of ms or in seconds as well)
    // We have to move to the new page only when we receve the success message of new page creation

    await page.getByRole('button', {name: 'click'}).click() // Upon clicking on this element a popup event will trigger

    const newPage = await page1

    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("h2#bindings")).toBeVisible()

    //await newPage.close()

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})

test("Multiple window handling1", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    await page.getByRole('button', {name: 'click'}).click() 
    const newPage = await page.waitForEvent('popup')

    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("h2#bindings")).toBeVisible()

    //await newPage.close()

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})