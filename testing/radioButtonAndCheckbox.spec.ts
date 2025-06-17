import { test, expect } from '@playwright/test';

test("Fill the textbox", async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

  // click()
  // check() - cheox and radio button only
  // toBeChecked() - 

  await page.locator("[value='radio2']").check()
  await expect(page.locator("[value='radio2']")).toBeChecked()

  await page.locator("#checkBoxOption1").check()
  await expect(page.locator("#checkBoxOption1")).toBeChecked()



})
