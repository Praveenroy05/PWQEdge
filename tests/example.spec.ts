import { test, expect } from '@playwright/test';

test('has title',  async function( {page} ) {
  await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.locator("#username").fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("#submit").click()
  await expect(page.locator("h1.post-title")).toBeVisible()


  // async-await 

  // launch the url
  // fill the username
  // fill the password
  // click on login button
  // validate if login is successful or not

  // Promise will have 3 stages:
  // 1. pending
  // 2. Successful
  // 3. Rejected

  // Architecture and flow of the test execution
  // Websocket(Playwright) and http connection



  // Difference between browser and page fixture

  

});

