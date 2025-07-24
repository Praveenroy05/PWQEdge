# Test info

- Name: Drop down developed using select tag handling
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\dropDown.spec.ts:31:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/select-menu", waiting until "load"

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\dropDown.spec.ts:39:16
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
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- list:
  - listitem:
    - img
    - text: Accordian
  - listitem:
    - img
    - text: Auto Complete
  - listitem:
    - img
    - text: Date Picker
  - listitem:
    - img
    - text: Slider
  - listitem:
    - img
    - text: Progress Bar
  - listitem:
    - img
    - text: Tabs
  - listitem:
    - img
    - text: Tool Tips
  - listitem:
    - img
    - text: Menu
  - listitem:
    - img
    - text: Select Menu
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- iframe
- heading "Select Menu" [level=1]
- text: Select Value Select Option
- textbox
- text: Select One Select Title
- textbox
- text: Old Style Select Menu
- combobox:
  - option "Red" [selected]
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Purple"
  - option "Black"
  - option "White"
  - option "Voilet"
  - option "Indigo"
  - option "Magenta"
  - option "Aqua"
- paragraph: Multiselect drop down
- text: Select...
- textbox
- paragraph: Standard multi select
- listbox:
  - option "Volvo"
  - option "Saab"
  - option "Opel"
  - option "Audi"
- iframe
- img "Build PlayWright tests with AI"
- iframe
- iframe
- contentinfo: © 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
   1 | // Drop down
   2 |
   3 | // 2 Types of drop down
   4 | // 1. Static drop down - The value might never get changed
   5 |     // a. Single select
   6 |     // b. Multi select
   7 | // 2. Dynamic drop down - The value might get changed based on some conditions
   8 |      // a. Single select
   9 |      // b. Multi select
  10 |
  11 |
  12 |
  13 | // select tag - <select> </select>
  14 |
  15 | // non-select tag - div, span, li, ul
  16 |
  17 | // Algorithm to handle a DD that have been developed using <select>
  18 |
  19 | // 1. locate the drop down element
  20 | // 2. select the element or value from drop down using selectOption("value" or label or index)
  21 |
  22 | // Algorithm to handle a DD that have been developed using non-select(div, li, ul) tag
  23 |
  24 | // 1. locate the drop down element
  25 | // 2. click on the drop down element to open the element selection window
  26 | // 3. locate the target element from the drop down
  27 | // 4. click on the target element
  28 |
  29 | import {test, expect} from '@playwright/test'
  30 |
  31 | test('Drop down developed using select tag handling', async ({page})=>{
  32 |     await page.goto("https://practice.expandtesting.com/dropdown")
  33 |     // selectOption(param)
  34 |     await page.locator("#country").selectOption("GL") // By defualt it accepts value as an argument (Value as an attribute of an element)
  35 |     await page.locator("#country").selectOption({value: 'HK'})
  36 |     await page.locator("#country").selectOption({label: 'Kuwait'})
  37 |     await page.locator("#country").selectOption({index :10})
  38 |
> 39 |     await page.goto("https://demoqa.com/select-menu")
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  40 |     await page.locator("#cars").selectOption(["saab", "Audi"])
  41 |     await page.locator("#cars").selectOption([{label: 'Volvo'}, {label: 'Opel'}])
  42 |
  43 | })
  44 |
  45 |
  46 | test('Drop down developed using non select tag handling', async ({page})=>{
  47 |     await page.goto("https://demoqa.com/select-menu")
  48 |     await page.locator("#withOptGroup").click()
  49 |     await page.getByText('Group 1, option 2').click()
  50 |     await page.locator("div.css-2b097c-container").last().click()
  51 |     const elements = await page.locator(".css-11unzgr div").count()
  52 |     console.log(elements);
  53 |     for(let i=1; i<elements; i++){
  54 |         await page.locator(`#react-select-4-option-${i}`).click()
  55 |      //   await page.locator("#react-select-4-option-3").click()
  56 |     }
  57 | })
  58 |
```