import {test, expect} from '@playwright/test'

test('Screenshot of a page', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.screenshot({path : "screenshot/fullpage.png"})
    await page.screenshot({path : "screenshot/completepage.png", fullPage: true})
    await page.getByPlaceholder("email@example.com").screenshot({path : "screenshot/element.png"})
})