// TypeScript Basics: Objects
// Demonstrates inline object types, readonly properties and methods.

export {};

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log('Retirement date:', date.toISOString());
  },
};

// Accessing object properties.
console.log('Employee ID:', employee.id);
console.log('Employee name:', employee.name);

// Updating a mutable property.
employee.name = 'John';
console.log('Updated name:', employee.name);

// Invoking an object method.
employee.retire(new Date('2050-01-01'));

// The following would cause a TypeScript error:
// employee.id = 2;
