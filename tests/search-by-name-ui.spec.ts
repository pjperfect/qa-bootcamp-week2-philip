// C1 Search by name (UI). Searching for "pliers" returns only products with "pliers" in the name.

import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('C1 Search by name (UI)', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.goto();
  await expect(searchPage.searchQuery).toBeVisible();

  await searchPage.SearchQuery();

  await searchPage.SearchFill();

  await searchPage.SearchSubmit();
  await expect(searchPage.searchCompleted).toBeVisible();

  await expect
    .poll(async () => {
      return await searchPage.ProductNames();
    })
    .toBe(true);
});
