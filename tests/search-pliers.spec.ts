import { test, expect } from '@playwright/test';

test('a search for "pliers" returns only products with "pliers" in the name', async ({
  page,
}) => {
  await page.goto('https://practicesoftwaretesting.com');

  await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  const productNames = page.getByRole('heading', { level: 5 });

  await expect
    .poll(async () => {
      const names = await productNames.allTextContents();

      return names.length > 0 && names.every((name) => /pliers/i.test(name));
    })
    .toBe(true);
});
