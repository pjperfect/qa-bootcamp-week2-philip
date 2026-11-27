# Automated Test Suite

This directory contains automated UI and API tests for the Practice Software Testing (Toolshop) application, implemented using TypeScript and Playwright.

## Test Coverage

| Test file                       | Objective                                                                                             | Type             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------- |
| `home-page-title.spec.ts`       | Verify the homepage title.                                                                            | UI               |
| `search-pliers.spec.ts`         | Verify that searching for pliers returns relevant products.                                           | UI               |
| `invalid-login.spec.ts`         | Verify that invalid login credentials are rejected with the appropriate error message.                | UI               |
| `product-quantity.spec.ts`      | Verify that the product quantity cannot be reduced below 1.                                           | UI / Page Object |
| `products-api.spec.ts`          | Verify the products endpoint response status and a response field.                                    | API              |
| `cart-operations-api.spec.ts`   | Verify cart creation, adding a product, response fields, cleanup and handling of a non-existent cart. | API              |
| `search-by-name-ui.spec.ts`     | Verify that searching for pliers returns only products containing pliers in their names.              | UI / Page Object |
| `add-to-cart-api.spec.ts`       | Verify cart creation, product addition, cart contents and cleanup.                                    | API              |
| `drill/flakiness-drill.spec.ts` | Verify that the Saved message appears using a retrying assertion.                                     | UI               |

## Test Design

- Arrange, Act, Assert (AAA) pattern.
- Page Object Model for reusable product page interactions.
- Dynamic selection of in-stock products.
- Independent API tests.
- Cart cleanup using `try/finally`.
- Positive, negative and boundary testing.

## Running Tests

Run the entire suite from the repository root:

```bash
npm test
```

Run an individual test file:

```bash
npx playwright test tests/cart-api.spec.ts
```

Record traces for failure investigation:

```bash
npx playwright test --trace on
```

For installation and environment configuration, refer to the [root README](../README.md).

## Known Limitations

The tests depend on the availability of the external Toolshop application and API, as well as the availability of suitable product data.

### NB: Optional Cucumber-js integration

The Cucumber-js scenario and corresponding step definitions were not implemented. Priority was given to completing the automated test suite, debugging test failures and verifying the setup through a fresh clone.
