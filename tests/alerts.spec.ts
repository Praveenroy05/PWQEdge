// Alerts - alerts (Ok or cancel), Confirm alert (Ok & Cancel), Prompt alert(Ok, cancel) - Enter some value on the alerts

// Launch the url
// wait for dialog event to appear on the page
// You click on any element - page.locator().click()
// ......

import {test, expect} from '@playwright/test'
import { text } from 'stream/consumers'

test("Handling alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    // wait for dialog events to appear on the page.
    // on()
    // waitForEvent()

    page.on('dialog', function (test) {
        console.log(test.message())
       // test.accept("Hello")
       test.dismiss()
    })

    await page.locator("#alertButton").click()


})

test("Handling Prompt alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    // wait for dialog events to appear on the page.
    // on()
    // waitForEvent()
    const text = "Hello"
    page.on('dialog', function (test) {
        
        console.log(test.message())
        test.accept(text)
       //test.dismiss()
    })

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText(`You entered ${text}`)


})