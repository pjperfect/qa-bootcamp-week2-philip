import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('PO-7: TS-104 The minus button stops at the minimum quantity of 1', async ({
  page,
}) => {
  const productPage = new ProductPage(page);
  await productPage.goto();

  await expect(productPage.quantity).toHaveValue('1');

  await productPage.increaseQuantity();
  await expect(productPage.quantity).toHaveValue('2');

  await productPage.decreaseQuantity();
  await expect(productPage.quantity).toHaveValue('1');

  await productPage.decreaseQuantity();

  await expect(productPage.quantity).toHaveValue('1');
});
