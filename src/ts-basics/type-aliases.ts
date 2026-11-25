// TypeScript Basics: Type Aliases
// Demonstrates defining and reusing a custom object type.

export {};

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const employee1: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log('Retirement date:', date.toISOString());
  },
};

// Reusing the same type for another employee.
const employee2: Employee = {
  id: 2,
  name: 'John',
  retire: (date: Date) => {
    console.log('Retirement date:', date.toISOString());
  },
};

console.log('Employee 1:', employee1.id, employee1.name);
console.log('Employee 2:', employee2.id, employee2.name);

employee1.retire(new Date('2050-01-01'));
