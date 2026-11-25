// TypeScript Basics: Tuples
// A tuple defines the expected type at each position.

export {};

let user1: [number, string] = [1, 'Mosh'];
let user2: [number, string] = [2, 'John'];
let user3: [number, string] = [3, 'Jane'];

// Accessing individual tuple elements.
console.log('User ID:', user1[0]);
console.log('Username:', user1[1]);

// Printing complete tuples.
console.log('User 1:', user1);
console.log('User 2:', user2);
console.log('User 3:', user3);

// Limitation: mutable tuples can still accept push() calls.
user1.push(1);

console.log('After push:', user1);

// A readonly tuple prevents mutation during type checking.
const readonlyUser: readonly [number, string] = [4, 'Doe'];

console.log('Readonly tuple:', readonlyUser);

// readonlyUser.push(1); // TypeScript error
