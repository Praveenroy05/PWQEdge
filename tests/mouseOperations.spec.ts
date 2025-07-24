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

test("Mouse hover", async ({page})=>{
    await page.goto("https://www.spicejet.com/")

    // hover() - Mouse over on an element
    await page.getByText("Add-ons", {exact : true}).hover()
    await expect(page.getByTestId("test-id-Extra Seat")).toBeVisible()
})

test("Drag and drop", async ({page})=>{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
    // source element - draggable element
    // target element - droppable element
    const source = await page.locator("div#draggable")
    const target = page.locator("div#droppable")

    //dragTo(Locator) - Drag the source element towards the target element and drop it.
    await source.dragTo(target)
})

test("Scroll down", async ({page})=>{
    await page.goto("https://playwright.dev/docs/locators")

    // await page.locator(".pagination-nav__label").last().click()
    // await page.locator("[href='#locate-by-role']").first().click()

    await page.locator(".pagination-nav__label").last().scrollIntoViewIfNeeded()
    await page.locator(".pagination-nav__label").last().click()

})

