import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// async function insertUser(
// 	email: string,
// 	firstName: string,
// 	username: string,
// 	password: string
// ) {
// 	const res = await prisma.user.create({
// 		data: {
// 			email,
// 			firstName,
// 			username,
// 			password,
// 		},
// 	});
// 	console.log(res);
// }

// insertUser('newExample@gmail.com', 'Example Doe', 'exampledoe', '123456789');

interface UpdateParams {
	firstName: string;
}

async function updateUser(email: string, { firstName }: UpdateParams) {
	try {
		const updateRes = await prisma.user.update({
			where: {
				email: email,
			},
			data: {
				firstName,
			},
		});

		console.log(updateRes);
	} catch (error) {
		console.log('the error is ', error);
	}
}

updateUser('example@gmail.com', {
	firstName: 'John Doe',
});
