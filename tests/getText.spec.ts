
import { test, expect } from '@playwright/test';


test("Get the text value from an element", async({page})=>{
  await page.goto("https://demoqa.com/automation-practice-form")
    // textContent() - Which return us the text value from an element

  const singleText = await page.locator(".practice-form-wrapper h5").textContent()
  console.log(singleText)
  await expect(singleText).toBe("Student Registration Form")

  // allTextContents() - Returns an array of node.textContent values for all matching nodes.
  const allMatchingText = await page.locator("#userForm label").allTextContents()
  console.log(allMatchingText)

  // Get the text value from multiple elements as well - allTextContents()


  // let array = [1,2,3,4,5, "ts", true]

})