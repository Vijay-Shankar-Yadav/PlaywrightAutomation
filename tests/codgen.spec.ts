import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.getByRole('link', { name: 'Learn more' }).click();
  await page.getByRole('link', { name: 'Numbers' }).click();
  await page.getByRole('link', { name: 'IPv4 Address Space', exact: true }).click();
});