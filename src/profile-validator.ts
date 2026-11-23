type User = {
  readonly id: number;
  username: string;
  settings?: { notifications?: boolean };
};

const user1: User = {
  id: 1,
  username: 'John',
  settings: { notifications: true },
};

const user2: User = {
  id: 2,
  username: 'Jane',
};

const user3: User = {
  id: 3,
  username: 'Doe',
  settings: {},
};

function isNotified(user: User): boolean {
  return user.settings?.notifications === true;
}

console.log(user1.username, isNotified(user1));
console.log(user2.username, isNotified(user2));
console.log(user3.username, isNotified(user3));
