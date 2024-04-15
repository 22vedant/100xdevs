type User1 = {
	// readonly name: string;
	// readonly age: number;
	name: string;
	age: number;
};

// const user: User1 = {
// 	name: 'vedant',
// 	age: 21,
// };
const user: Readonly<User1> = {
	name: 'vedant',
	age: 21,
};

console.log(user);
