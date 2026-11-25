import { test, expect } from '@playwright/test';

test('write a small test that sends a GET to the products endpoint through the request fixture and checks the status and one field', async ({
  request,
}) => {
  const url = 'https://api.practicesoftwaretesting.com/products';

  const response = await request.get(url);

  expect(response.status()).toBe(200);

  const body = await response.json();
  //   const body = { data: [] };

  //   console.log(body);

  expect(body.data).toBeInstanceOf(Array);
});
