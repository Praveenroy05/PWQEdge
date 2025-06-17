import { test, expect } from '@playwright/test';

test('Print all table values and check all checkboxes across pages', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  // Print headers
  const headerElements = await page.locator('table#productTable th').all();
  const headers :string[] = [];
  for (const headerElement of headerElements) {
    headers.push((await headerElement.textContent())!.trim());
  }
  console.log('Headers:', headers.map(h => h.trim()).join(' | '));

    const pageCount  = await page.locator("ul.pagination li").count()


  // Loop through all pages
  for(let k =0; k<pageCount ; k++){
    const rowLocator = page.locator('table#productTable tbody tr');
    const rowCount = await rowLocator.count();

    for (let i = 0; i < rowCount; i++) {
      const row = rowLocator.nth(i);
      const cellLocator = row.locator('td');
      const cellCount = await cellLocator.count();
      const cellValues : string[]= [];

      for (let j = 0; j < cellCount - 1; j++) { // skip checkbox column for value printing
        const cellText = await cellLocator.nth(j).textContent();
        cellValues.push(cellText!.trim());
      }

      console.log(cellValues.join(' | '));

      // Check the checkbox in the last column
      const checkbox = cellLocator.nth(cellCount - 1).locator('input[type="checkbox"]');
      await checkbox.check();
      await expect(checkbox).toBeChecked()
    }
  const paginationButtons = page.locator('ul.pagination li a');

    // Try to click the next page button (›)
     if (k < pageCount - 1) {
      await paginationButtons.nth(k + 1).click(); // Go to next page
      await page.waitForTimeout(500); // Wait for data to load
    }

// 
    // Click next and wait
  }
});
