import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { jwt, sign, decode, verify } from 'hono/jwt';

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const { email, password, name } = await c.req.json();

	const newUser = await prisma.user.create({
		data: {
			email,
			password,
			name,
		},
	});

	const userId = newUser.id;

	const payload = {
		email,
		userId,
		// exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
	};
	const token = await sign(payload, c.env.JWT_SECRET);
	return c.json({ email, password, name, token: 'Bearer ' + token });
});

//signin
//this route is wrong
userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const { email } = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		c.status(403);
		return c.json({ error: 'user not found' });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
});
