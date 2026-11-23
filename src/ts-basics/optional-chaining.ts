type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id == 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access: if customer is null or birthday is missing,
// this prints undefined instead of crashing. Here it prints the current year.
console.log(customer?.birthday?.getFullYear());

// Optional element access: customers?.[0] gives undefined if customers is null or undefined.
// customers is not defined in this file, so this stays a comment.
// customers?.[0]

// Optional call operator
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a');
