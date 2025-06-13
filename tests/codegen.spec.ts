// To open/start the codegen (Record and Playback tool) - npx playwright codegen

import { test, expect } from '@playwright/test';
import { LoginPage } from './class';


test('test', async function({ page }) {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await expect(page.getByRole('button', { name: 'click' })).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('"_blank"');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: 'Downloads' }).click();
  await expect(page2.getByRole('heading', { name: 'Selenium Clients and' })).toBeVisible();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).click();
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).fill('testing');
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toHaveValue('testing');
});