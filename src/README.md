# TypeScript basics

Practice files from the [TypeScript Tutorial for Beginners](https://www.youtube.com/watch?v=d56mG7DezGs) by Programming with Mosh and a profile validator exercise.

## src/ts-basics

- `index.ts`: the first program. Prints Hello world and declares a typed number variable.
- `tuples.ts`: tuples, which are arrays with a fixed length and a type for each position. Prints one tuple element by element and then the whole tuple.
- `function.ts`: a function with typed parameters and a default value. `calculateTax` multiplies income by 1.2 for tax years before 2022 and by 1.3 otherwise.
- `objects.ts`: an object with an inline type: a readonly id, a name and a `retire` method. The `export {};` line at the top makes the file its own module, so `employee` does not clash with the same name in `type-aliases.ts`.
- `type-aliases.ts`: an `Employee` type alias and an object built from it. Prints the object.
- `union-types.ts`: `kgToLbs` accepts a number or a string and returns the weight in pounds.
- `optional-chaining.ts`: the `?.` operator on a customer that may be null, an optional birthday and an optional function call.

## src/profile-validator.ts

Defines a `User` type where `settings` is optional and `notifications` inside it is also optional. `isNotified` returns `true` only when `notifications` is `true`. It returns `false` when `settings` or `notifications` is missing. The file prints the result for three test users.
