// Profile Validator
// Demonstrates optional properties, optional chaining and boolean validation.

type User = {
  readonly id: number;
  username: string;
  settings?: { notifications?: boolean };
};

// Scenario 1: Notifications enabled.
const user1: User = {
  id: 1,
  username: 'John',
  settings: { notifications: true },
};

// Scenario 2: Settings missing.
const user2: User = {
  id: 2,
  username: 'Jane',
};

// Scenario 3: Settings present, notifications missing.
const user3: User = {
  id: 3,
  username: 'Doe',
  settings: {},
};

// Scenario 4: Notifications explicitly disabled.
const user4: User = {
  id: 4,
  username: 'Mary',
  settings: { notifications: false },
};

// Returns true only when notifications are explicitly enabled.
function isNotified(user: User): boolean {
  return user.settings?.notifications === true;
}

// Verify all four scenarios.
console.log(user1.username, isNotified(user1)); // John true
console.log(user2.username, isNotified(user2)); // Jane false
console.log(user3.username, isNotified(user3)); // Doe false
console.log(user4.username, isNotified(user4)); // Mary false
