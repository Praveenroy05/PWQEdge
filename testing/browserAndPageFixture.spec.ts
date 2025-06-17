import { test, expect } from '@playwright/test';

// browser and
// page

test("browser fixture", async ({browser})=>{

    // browserContext - instance of the browserContext
    // new Page on the context - page

    const context = await browser.newContext() // - instance of the browserContex
    const page = await context.newPage() // Creates a new page on the browserContex

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator("#username").fill("student")
    await page.locator("#password").fill("Password123")
    await page.locator("#submit").click()
    await expect(page.locator("h1.post-title")).toBeVisible()

})

test("page fixture", async ({page})=>{
  await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.locator("#username").fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("#submit").click()
  await expect(page.locator("h1.post-title")).toBeVisible()
})

