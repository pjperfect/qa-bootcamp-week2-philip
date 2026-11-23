export {};

// let user: [number, string] = [1, 'Mosh'];

// user.push(1) is allowed by TypeScript, even though the tuple should have 2 items.
// At runtime the array becomes [1, 'Mosh', 1]. TypeScript does not catch this.

// Simple examples of tuples
let user1: [number, string] = [1, 'Mosh'];
let user2: [number, string] = [2, 'John'];
let user3: [number, string] = [3, 'Jane'];

// Accessing tuple elements
console.log(user1[0]); // Output: 1
console.log(user1[1]); // Output: Mosh

// Let's print the entire tuple
console.log(user1); // Output: [1, 'Mosh']
