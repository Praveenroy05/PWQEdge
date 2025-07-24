# Test info

- Name: Get the text value from an element
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\getText.spec.ts:5:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\getText.spec.ts:6:14
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
   1 |
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 |
   5 | test("Get the text value from an element", async({page})=>{
>  6 |   await page.goto("https://demoqa.com/automation-practice-form")
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
   7 |     // textContent() - Which return us the text value from an element
   8 |
   9 |   const singleText = await page.locator(".practice-form-wrapper h5").textContent()
  10 |   console.log(singleText)
  11 |   await expect(singleText).toBe("Student Registration Form")
  12 |
  13 |   // allTextContents() - Returns an array of node.textContent values for all matching nodes.
  14 |   const allMatchingText = await page.locator("#userForm label").allTextContents()
  15 |   console.log(allMatchingText)
  16 |
  17 |   // Get the text value from multiple elements as well - allTextContents()
  18 |
  19 |
  20 |   // let array = [1,2,3,4,5, "ts", true]
  21 |
  22 | })
```