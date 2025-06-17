// Algorithm

// launch the url - page.goto()
// Identify the framepage using a methods known as const framePage = page.frameLocator() - Locator
// Perform the action inside the locator by using framePage as a fixture
// AGain use page fixture if you want to validate anything on the original page


import {test, expect} from '@playwright/test'

test('Frames Handling', async ({page})=>{

    // Launch the url
    // Identify the framepage using a methods known as const framePage = page.frameLocator() -
    // frameLocator() - When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe.

    await page.goto("https://demo.automationtesting.in/Frames.html")

    const framePage = page.frameLocator("#singleframe") // stored a locator to enter inside the iframe
    
    await framePage.locator("[type='text']").first().fill("This is a frame testing")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("This is a frame testing")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
    
})

