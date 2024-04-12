// const a: number[] = [1, 2, 3, 4, 5];

// console.log(a);

// function maxValue(a: number[]) {
// 	let max = a[0];
// 	for (let i = 0; i < a.length; i++) {
// 		if (a[i] > max) {
// 			max = a[i];
// 		}
// 	}
// 	return max;
// }

// const b: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(maxValue(b));

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
	return users.filter((x) => x.age >= 18);
}

console.log(
	filteredUsers([
		{
			firstName: 'harkirat',
			lastName: 'Singh',
			age: 21,
		},
		{
			firstName: 'Raman',
			lastName: 'Singh',
			age: 16,
		},
	])
);
