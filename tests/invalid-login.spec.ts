import { test, expect } from '@playwright/test';

test('an invalid login is rejected and shows the message "Invalid email or password"', async ({
  page,
}) => {
  await page.goto('https://practicesoftwaretesting.com');

  await page.getByRole('link', { name: 'Sign in', exact: true }).click();

  await page
    .getByRole('textbox', { name: 'Email address' })
    .fill('invalid@example.com');

  await page.locator('[data-test="password"]').fill('WrongPassword123!');

  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await expect(
    page.getByText('Invalid email or password', { exact: true })
  ).toBeVisible();
});
