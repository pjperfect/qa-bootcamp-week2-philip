// C4 Add to a cart (API). Creating a cart returns 201, adding a product returns 200, and the cart then contains that product.

import { test, expect } from '@playwright/test';

const API_URL = 'https://api.practicesoftwaretesting.com';

test('C4 Add to a cart (API)', async ({ request }) => {
  const productsResponse = await request.get(`${API_URL}/products`);
  expect(productsResponse.status()).toBe(200);

  const productsBody = await productsResponse.json();
  const product = productsBody.data[0];
  expect(product).toBeDefined();

  const productID = product.id;
  expect(productID).toBeDefined();

  let cartID: string | undefined;

  try {
    const cartResponse = await request.post(`${API_URL}/carts`);
    const cartBody = await cartResponse.json();
    cartID = cartBody.id;

    expect(cartResponse.status()).toBe(201);
    expect(cartID).toBeDefined();

    const addProductResponse = await request.post(
      `${API_URL}/carts/${cartID}`,
      {
        headers: {
          Accept: 'application/json',
        },
        data: {
          product_id: productID,
          quantity: 1,
        },
      }
    );
    expect(addProductResponse.status()).toBe(200);

    const addProductBody = await addProductResponse.json();
    expect(addProductBody.result).toBe('item added or updated');

    const getCartResponse = await request.get(`${API_URL}/carts/${cartID}`);
    expect(getCartResponse.status()).toBe(200);

    const getCartBody = await getCartResponse.json();
    expect(getCartBody.id).toBe(cartID);

    expect(getCartBody.cart_items).toHaveLength(1);
    expect(getCartBody.cart_items[0].product_id).toBe(productID);
    expect(getCartBody.cart_items[0].quantity).toBe(1);
  } finally {
    if (cartID) {
      const deleteResponse = await request.delete(`${API_URL}/carts/${cartID}`);
      expect(deleteResponse.status()).toBe(204);
    }
  }
});
