import { TypeOf, z } from 'zod';

export const userSignUpSchema = z.object({
	email: z.string(),
	password: z.string().min(8),
	name: z.string(),
});

export type SignUpType = z.infer<typeof userSignUpSchema>;

export const userSignInSchema = z.object({
	email: z.string(),
	password: z.string(),
});

export type SignInType = z.infer<typeof userSignInSchema>;

export const createPostSchema = z.object({
	title: z.string(),
	content: z.string(),
});

export type PostType = z.infer<typeof createPostSchema>;
