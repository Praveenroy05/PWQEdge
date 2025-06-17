import {test, expect} from '@playwright/test'

 /*

Test case 1: Positive LogIn test
    Launch the url
    Type username student into Username field
    Type password Password123 into Password field
    Push Submit button
    Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    Verify button Log out is displayed on the new page

   */

test("Validate login with valid username and password", async function({page}){
    // Launch the url - goto() - Launching the url on the browser
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // fill the username - fill()
    await page.locator("input#username").fill("student")
    await expect(page.locator("input#username")).toHaveValue("student") // input field
    await page.locator("input#password").fill("Password123")

    // pause the execution and move forward one by one step
    // await page.pause()

    await expect(page.locator("input#password")).toHaveValue("Password123")
    // Click the submit button - click() - click on the matching element
    await page.getByRole('button', {name: 'Submit'}).click()
    await expect(page.locator("h1.post-title")).toContainText("Logged In Successfully") // validating the text value of an element
    await expect(page.getByText("Log out")).toBeVisible() // ELement Should be visible on the page

})

