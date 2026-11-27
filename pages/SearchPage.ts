// Page object for C1 Search by name (UI). Searching for "pliers" returns only products with "pliers" in the name.

import { type Page, type Locator } from '@playwright/test';

export class SearchPage {
  readonly searchQuery: Locator;
  readonly searchCompleted: Locator;
  readonly productNames: Locator;

  constructor(readonly page: Page) {
    this.searchQuery = page.locator('[data-test="search-query"]');
    this.searchCompleted = page.locator('[data-test="search_completed"]');
    this.productNames = page.getByRole('heading', { level: 5 });
  }

  async goto() {
    await this.page.goto('/');
  }

  async SearchQuery() {
    await this.searchQuery.click();
  }

  async SearchFill() {
    await this.searchQuery.fill('pliers');
  }

  async SearchSubmit() {
    await this.searchQuery.press('Enter');
  }

  async ProductNames() {
    const names = await this.productNames.allTextContents();

    return names.length > 0 && names.every((name) => /pliers/i.test(name));
  }
}
