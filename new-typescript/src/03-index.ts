//record and map in typescript
type UserData = {
	name: string;
	age: number;
};

type Users = Record<string, UserData>;

const users: Users = {
	firstId: { name: 'vedant', age: 21 },
	secondId: { name: 'raj', age: 20 },
};

console.log(users);

// ---------------------
const newUsers = new Map<string, Partial<UserData>>();

newUsers.set('newfirst', { name: 'new vedant', age: 21 });
newUsers.set('newsecond', { name: 'new chinta' });

console.log(newUsers);
