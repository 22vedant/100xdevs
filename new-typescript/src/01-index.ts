interface User {
	name: string;
	age: number;
	email: string;
	password: string;
}

type userProfile = Pick<User, 'name' | 'email'>;
// type Partial =
type userProfileWPartial = Partial<User>;
function userDisplay(user: userProfileWPartial) {
	console.log("user's name is", user.name);
	console.log("user's email is", user.email);
}

userDisplay({ name: 'vedant', email: 'vedantchinta223@gmail.com' });
