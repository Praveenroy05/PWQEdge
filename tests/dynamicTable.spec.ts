import { test, expect } from '@playwright/test';

test('Dynamic table handling', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows = page.locator('table#taskTable tbody tr');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const name = await rows.nth(i).locator('td').nth(0).textContent();
    const cpu = await rows.nth(i).locator('td').nth(1).textContent();
    const memory = await rows.nth(i).locator('td').nth(2).textContent();
    const disk = await rows.nth(i).locator('td').nth(3).textContent();
    const network = await rows.nth(i).locator('td').nth(4).textContent();

    console.log(`Row ${i + 1} - Name: ${name}, CPU: ${cpu}, Memory: ${memory}, Disk: ${disk}, Network: ${network}`);

    if (name!.trim() === 'Chrome') {
      expect(parseFloat(network!)).toBeGreaterThan(2); // e.g., 5 Mbps threshold
    }
  }
});
