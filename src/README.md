# TypeScript Basics

Practice exercises based on the [TypeScript Tutorial for Beginners](https://www.youtube.com/watch?v=d56mG7DezGs) by Programming with Mosh, alongside a profile validator exercise.

## Learning objectives

- Understand TypeScript fundamentals and explicit type annotations.
- Write functions with typed parameters and return values.
- Define objects, tuples and reusable type aliases.
- Work with union types and type narrowing.
- Safely access optional properties using optional chaining.
- Verify behaviour using representative input scenarios.

## Practice files

Each practice file includes explanatory comments, executable examples and observable console output.

| File                   | Concept                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `index.ts`             | First TypeScript program and type annotations               |
| `tuples.ts`            | Tuple elements, mutation and readonly tuples                |
| `functions.ts`         | Typed functions, default parameters and conditional logic   |
| `objects.ts`           | Inline object types, readonly properties and methods        |
| `type-aliases.ts`      | Reusable custom types                                       |
| `union-types.ts`       | Union types, type narrowing and input limitations           |
| `optional-chaining.ts` | Optional property access, element access and function calls |

Run any practice file from the repository root using `npx tsx` followed by its file path.

For example:

`npx tsx src/ts-basics/functions.ts`

Expected output:

- 2021: 12000
- 2022: 13000
- 2023: 13000
- Default year: 13000

## Profile validator

The `src/profile-validator.ts` exercise demonstrates how to safely access optional notification settings.

The `isNotified` function returns `true` only when notifications are explicitly enabled.

| Scenario                          | Expected result |
| --------------------------------- | --------------- |
| Notifications enabled             | true            |
| Settings missing                  | false           |
| Notifications missing             | false           |
| Notifications explicitly disabled | false           |

Run:

`npx tsx src/profile-validator.ts`

Expected output:

- John true
- Jane false
- Doe false
- Mary false

## Type checking

Run `npx tsc --noEmit` to check the project for TypeScript errors without generating JavaScript files.

A successful execution produces no compiler diagnostics.

## QA considerations

The examples demonstrate normal behaviour, boundary conditions, missing data and input limitations. Type checking and runtime verification complement each other: successful type checking alone does not guarantee correct runtime behaviour.
