# Test info

- Name: Fill the textbox
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\example.spec.ts:38:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\example.spec.ts:39:14
```

# Page snapshot

```yaml
- img "adplus-dvertising"
- iframe
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- img
- text: Forms
- img
- list:
  - listitem:
    - img
    - text: Practice Form
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- iframe
- heading "Practice Form" [level=1]
- heading "Student Registration Form" [level=5]
- text: Name
- textbox "First Name"
- textbox "Last Name"
- text: Email
- textbox "name@example.com"
- text: Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female
- radio "Other"
- text: Other Mobile(10 Digits)
- textbox "Mobile Number"
- text: Date of Birth
- textbox: 25 Jul 2025
- text: Subjects
- textbox
- text: Hobbies
- checkbox "Sports"
- text: Sports
- checkbox "Reading"
- text: Reading
- checkbox "Music"
- text: Music Picture Select picture
- button "Select picture"
- text: Current Address
- textbox "Current Address"
- text: State and City Select State
- textbox
- text: Select City
- textbox [disabled]
- button "Submit"
- iframe
- img "Build PlayWright tests with AI"
- iframe
- iframe
- contentinfo: © 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('has title',  async function( {page} ) {
   4 |   await page.goto('https://practicetestautomation.com/practice-test-login/')
   5 |   await page.locator("#username").fill("student")
   6 |   await page.locator("#password").fill("Password123")
   7 |   await page.locator("#submit").click()
   8 |   await expect(page.locator("h1.post-title")).toBeVisible()
   9 |
  10 |  // page.getByRole('button', { name: 'Sign up' }) // Sign ups
  11 |
  12 |
  13 |   // async-await 
  14 |
  15 |   // launch the url
  16 |   // fill the username
  17 |   // fill the password
  18 |   // click on login button
  19 |   // validate if login is successful or not
  20 |
  21 |   // Promise will have 3 stages:
  22 |   // 1. pending
  23 |   // 2. Successful
  24 |   // 3. Rejected
  25 |
  26 |   // Architecture and flow of the test execution
  27 |   // Websocket(Playwright) and http connection
  28 |
  29 |
  30 |
  31 |   // Difference between browser and page fixture
  32 |
  33 |   
  34 |
  35 | });
  36 |
  37 |
  38 | test("Fill the textbox", async({page})=>{
> 39 |   await page.goto("https://demoqa.com/automation-practice-form")
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  40 |   // By using css or xpath - page.locator("css or xpath")
  41 |   await page.getByPlaceholder("First Name").fill("Testing")
  42 |   await page.getByRole('checkbox', {name: 'Sports'}).click({force: true})
  43 |
  44 |   // nth(index)
  45 |   // first()
  46 |   // last()
  47 |
  48 |   await page.waitForTimeout(5000)
  49 |
  50 | })
  51 |
  52 |
```