import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

test('flakiness drill', async ({ page }) => {
  const filePath = path.join(__dirname, 'index.html');
  const fileURL = pathToFileURL(filePath).href;

  await page.goto(fileURL);

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('#status')).toHaveText('Saved');
});
