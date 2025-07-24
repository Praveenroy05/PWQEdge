// Drop down

// 2 Types of drop down
// 1. Static drop down - The value might never get changed
    // a. Single select
    // b. Multi select
// 2. Dynamic drop down - The value might get changed based on some conditions
     // a. Single select
     // b. Multi select



// select tag - <select> </select>

// non-select tag - div, span, li, ul

// Algorithm to handle a DD that have been developed using <select>

// 1. locate the drop down element
// 2. select the element or value from drop down using selectOption("value" or label or index)

// Algorithm to handle a DD that have been developed using non-select(div, li, ul) tag

// 1. locate the drop down element
// 2. click on the drop down element to open the element selection window
// 3. locate the target element from the drop down
// 4. click on the target element

import {test, expect} from '@playwright/test'

test('Drop down developed using select tag handling', async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    // selectOption(param)
    await page.locator("#country").selectOption("GL") // By defualt it accepts value as an argument (Value as an attribute of an element)
    await page.locator("#country").selectOption({value: 'HK'})
    await page.locator("#country").selectOption({label: 'Kuwait'})
    await page.locator("#country").selectOption({index :10})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["saab", "Audi"])
    await page.locator("#cars").selectOption([{label: 'Volvo'}, {label: 'Opel'}])

})


test.skip('Drop down developed using non select tag handling', async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.getByText('Group 1, option 2').click()
    await page.locator("div.css-2b097c-container").last().click()
    const elements = await page.locator(".css-11unzgr div").count()
    console.log(elements);
    for(let i=1; i<elements; i++){
        await page.locator(`#react-select-4-option-${i}`).click()
     //   await page.locator("#react-select-4-option-3").click()
    }
})
