// TypeScript Basics: Functions
// Demonstrates typed parameters, return types and default values.

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;

  return income * 1.3;
}

// Example 1: Explicit year before 2022.
console.log('2021:', calculateTax(10_000, 2021));

// Example 2: Explicit year at the boundary.
console.log('2022:', calculateTax(10_000, 2022));

// Example 3: Explicit year after the boundary.
console.log('2023:', calculateTax(10_000, 2023));

// Example 4: Default tax year (2022).
console.log('Default year:', calculateTax(10_000));
