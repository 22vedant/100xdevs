import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();
export const prisma = new PrismaClient({
	datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate());
