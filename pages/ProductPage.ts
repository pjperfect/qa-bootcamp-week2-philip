import { type Page, type Locator } from '@playwright/test';

export class ProductPage {
  readonly increaseButton: Locator;
  readonly decreaseButton: Locator;
  readonly quantity: Locator;

  constructor(readonly page: Page) {
    this.increaseButton = page.locator('[data-test="increase-quantity"]');
    this.decreaseButton = page.locator('[data-test="decrease-quantity"]');
    this.quantity = page.locator('[data-test="quantity"]');
  }

  async goto() {
    await this.page.goto('/');
    await this.page
      .locator('a[data-test^="product-"]')
      .filter({
        hasNot: this.page.locator('[data-test="out-of-stock"]'),
      })
      .first()
      .click();
  }

  async increaseQuantity() {
    await this.increaseButton.click();
  }

  async decreaseQuantity() {
    await this.decreaseButton.click();
  }
}
