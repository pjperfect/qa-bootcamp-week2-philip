// TypeScript Basics: Union Types
// Demonstrates accepting multiple types and narrowing them.

function kgToLbs(weight: number | string): number {
  // Type narrowing: handle numeric input.
  if (typeof weight === 'number') {
    return weight * 2.2;
  }

  // TypeScript now knows weight is a string.
  return parseInt(weight, 10) * 2.2;
}

// Example 1: Numeric input.
console.log('Number input:', kgToLbs(10));

// Example 2: String input.
console.log('String input:', kgToLbs('10kg'));

// Example 3: Invalid string input.
console.log('Invalid input:', kgToLbs('abc'));
