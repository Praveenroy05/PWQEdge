# Test info

- Name: page fixture
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\browserAndPageFixture.spec.ts:22:5

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('h1.post-title')
Expected: visible
Received: undefined
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('h1.post-title')

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\browserAndPageFixture.spec.ts:27:47
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | // browser and
   4 | // page
   5 |
   6 | test("browser fixture", async ({browser})=>{
   7 |
   8 |     // browserContext - instance of the browserContext
   9 |     // new Page on the context - page
  10 |
  11 |     const context = await browser.newContext() // - instance of the browserContex
  12 |     const page = await context.newPage() // Creates a new page on the browserContex
  13 |
  14 |     await page.goto('https://practicetestautomation.com/practice-test-login/')
  15 |     await page.locator("#username").fill("student")
  16 |     await page.locator("#password").fill("Password123")
  17 |     await page.locator("#submit").click()
  18 |     await expect(page.locator("h1.post-title")).toBeVisible()
  19 |
  20 | })
  21 |
  22 | test("page fixture", async ({page})=>{
  23 |   await page.goto('https://practicetestautomation.com/practice-test-login/')
  24 |   await page.locator("#username").fill("student")
  25 |   await page.locator("#password").fill("Password123")
  26 |   await page.locator("#submit").click()
> 27 |   await expect(page.locator("h1.post-title")).toBeVisible()
     |                                               ^ Error: expect(locator).toBeVisible()
  28 | })
  29 |
  30 |
```