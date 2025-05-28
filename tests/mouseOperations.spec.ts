// click
// double click
// right click
// mouse hover
// drag and drop
// scroll down 

import {test, expect} from '@playwright/test'

test("Mouse Operations", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    // double click - dblclick()

    await page.getByText("Double-Click Me To See Alert").dblclick()

    await page.getByText("right click me").click({button : 'right'})
    await page.getByText("Edit").click()
})