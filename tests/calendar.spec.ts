import {test, expect} from '@playwright/test'

test('calendar date selection in dynamic way', async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    const month = "June"
    const year = "2026"
    const date = "1"

    await page.locator(".ui-datepicker-trigger").click()
    const monthDatePicker = page.locator(".ui-datepicker-month")
    const yearDatePicker = page.locator(".ui-datepicker-year")
    
    while((await monthDatePicker.textContent() !== month) || (await yearDatePicker.textContent() !==year)){

        // June !== June  || 2030 !== 2030
            await page.getByText('Next').click()
    }

    await page.getByRole('cell', { name: `${date}`, exact: true }).click()
    await page.waitForTimeout(5000)

})



// initial
// while(condition){ // 
// logic
// ++/--
// }