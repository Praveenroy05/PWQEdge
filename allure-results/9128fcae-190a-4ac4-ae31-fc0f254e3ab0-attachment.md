# Test info

- Name: Multiple window handling1
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\windows.spec.ts:35:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Downloads')
    - locator resolved to <span>Downloads</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\windows.spec.ts:41:42
```

# Page snapshot

```yaml
- banner:
  - link "image not displaying":
    - /url: http://www.automationtesting.in
    - img "image not displaying"
  - heading "Automation Demo Site" [level=1]
  - link "Automated testing software":
    - img
    - text: Automated testing software
  - link "Website automation tools":
    - img
    - text: Website automation tools
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: Index.html
      - listitem:
        - link "Register":
          - /url: Register.html
      - listitem:
        - link "WebTable":
          - /url: WebTable.html
      - listitem:
        - link "SwitchTo":
          - /url: SwitchTo.html
        - text: 
      - listitem:
        - link "Widgets":
          - /url: Widgets.html
        - text: 
      - listitem:
        - link "Interactions":
          - /url: Interactions.html
        - text: 
      - listitem:
        - link "Video":
          - /url: SwitchTo.html
        - text: 
      - listitem:
        - link "WYSIWYG":
          - /url: WYSIWYG.html
        - text: 
      - listitem:
        - link "More":
          - /url: "#"
        - text: 
      - listitem:
        - link "Practice Site":
          - /url: http://practice.automationtesting.in/
- list:
  - listitem:
    - link "Open New Tabbed Windows":
      - /url: "#Tabbed"
  - listitem:
    - link "Open New Seperate Windows":
      - /url: "#Seperate"
  - listitem:
    - link "Open Seperate Multiple Windows":
      - /url: "#Multiple"
- paragraph: If you set the target attribute to "_blank" , the link will open in a new browser window or a new tab
- link "click":
  - /url: http://www.selenium.dev
  - button "click"
- insertion:
  - iframe
- link "Window automation":
  - img
  - text: Window automation
- insertion:
  - iframe
- insertion:
  - iframe
- insertion:
  - iframe
- contentinfo:
  - text: "\"@ 2016\""
  - link "Automation Testing":
    - /url: "#"
  - text: "\"All Rights Reserved.\""
  - link "":
    - /url: https://www.facebook.com/automationtesting2016/
  - link "":
    - /url: https://twitter.com/krishnasakinala
  - link "":
    - /url: https://www.linkedin.com/nhome/?trk=hb_signin
  - link "":
    - /url: https://plus.google.com/105286300926085335367
  - link "":
    - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
- insertion:
  - iframe
- img
- link "Go to shopping options for Double-Hung Window Hardware": Double-Hung Window Hardware
- button "Close shopping anchor"
```

# Test source

```ts
   1 | // windows - popup events appeared on the page
   2 |
   3 | // Launch the url - page.goto()
   4 | // waitForEvent('popup') - page.waitForEvent() - without using await 
   5 | // click on the element - whichever is responsible for creating a new page/tab/window
   6 | // const newPage = await successfull message - it will return us the new page handle - newPage
   7 | // validate or click something on new page - newPage.click()
   8 | // ..........
   9 | // page.locator().click()
  10 |
  11 |
  12 | import {test, expect} from '@playwright/test'
  13 |
  14 | test("Multiple window handling", async ({page})=>{
  15 |     await page.goto("https://demo.automationtesting.in/Windows.html")
  16 |
  17 |     // We are waiting for popup event to appear on the page
  18 |     const page1 = page.waitForEvent('popup') 
  19 |     //As soon as the popup event triggered this will starting listing the event (popup) - it can return the status as pending (because new page creation can take fraction of ms or in seconds as well)
  20 |     // We have to move to the new page only when we receve the success message of new page creation
  21 |
  22 |     await page.getByRole('button', {name: 'click'}).click() // Upon clicking on this element a popup event will trigger
  23 |
  24 |     const newPage = await page1
  25 |
  26 |     await newPage.getByText("Downloads").click()
  27 |     await expect(newPage.locator("h2#bindings")).toBeVisible()
  28 |
  29 |     //await newPage.close()
  30 |
  31 |     await page.getByText("Home").click()
  32 |     await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
  33 | })
  34 |
  35 | test("Multiple window handling1", async ({page})=>{
  36 |     await page.goto("https://demo.automationtesting.in/Windows.html")
  37 |
  38 |     await page.getByRole('button', {name: 'click'}).click() 
  39 |     const newPage = await page.waitForEvent('popup')
  40 |
> 41 |     await newPage.getByText("Downloads").click()
     |                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42 |     await expect(newPage.locator("h2#bindings")).toBeVisible()
  43 |
  44 |     //await newPage.close()
  45 |
  46 |     await page.getByText("Home").click()
  47 |     await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
  48 | })
```