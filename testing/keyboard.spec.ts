import {test, expect} from '@playwright/test'

test('Press Enter key to submit form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill('Test User');
  await page.keyboard.press('Tab'); 
  await page.keyboard.type('test@example.com');
  await page.keyboard.press('Tab');
  await page.keyboard.type('Some Address');
  await page.keyboard.press('Tab');
  await page.waitForTimeout(3000)
});

test('Type text into input field', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const input = page.locator('#userName');
  await input.click();
  await page.keyboard.type('John Doe');
  await expect(input).toHaveValue('John Doe');
});

test('Use Ctrl+A and Ctrl+C/V shortcuts', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const input = page.locator('#userName');
  await input.fill('Playwright Shortcut Test');

  // Select All (Ctrl+A), Copy (Ctrl+C)
  await input.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+C');

  // Paste into another field
  const email = page.locator('#userEmail');
  await email.click();
  await page.keyboard.press('Control+V');

  await expect(email).toHaveValue('Playwright Shortcut Test');
});
