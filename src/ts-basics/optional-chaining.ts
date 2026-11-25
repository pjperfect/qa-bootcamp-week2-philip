// TypeScript Basics: Optional Chaining
// Demonstrates safe access to potentially missing values.

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date('2000-01-01') };
}

// 1. Optional property access.
const customer = getCustomer(1);
const missingCustomer = getCustomer(0);
const customerWithoutBirthday: Customer = {};

console.log('Existing birthday:', customer?.birthday?.getFullYear());

console.log('Missing customer:', missingCustomer?.birthday?.getFullYear());

console.log(
  'Missing birthday:',
  customerWithoutBirthday?.birthday?.getFullYear()
);

// 2. Optional element access.
function getFirstCustomer(customers: Customer[] | null) {
  return customers?.[0];
}

console.log(
  'Existing array element:',
  getFirstCustomer([customerWithoutBirthday])
);
console.log('Missing array:', getFirstCustomer(null));

// 3. Optional function call.
function runLogger(log?: (message: string) => void): void {
  log?.('Logger executed');
}

runLogger(console.log);
runLogger();

console.log('Finished without a runtime error');
