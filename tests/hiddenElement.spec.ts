import {test, expect} from '@playwright/test'


// launc the url
// validate if the element is displayed on the page or not - Hide/Show Example
// Click on hide button
// Validate if the element disappeared from the page

test('Hidden Element assertion', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.getByPlaceholder("Hide/Show Example")).not.toBeVisible()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()
    await page.locator("#show-textbox").click()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()

    //page.locator("#filesToUpload").setInputFiles(["TestData/excel.xlsx", "TestData\excel1.xlsx"])
})

