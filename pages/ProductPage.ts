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
      .getByRole('link', {
        name: /Combination Pliers/i,
      })
      .click();
    // await this.page
    //   .locator('[data-test="product-01M89CP1F44HC5P6D1NK2WGEX9"]')
    //   .click();
  }

  async increaseQuantity() {
    await this.increaseButton.click();
  }

  async decreaseQuantity() {
    await this.decreaseButton.click();
  }
}
