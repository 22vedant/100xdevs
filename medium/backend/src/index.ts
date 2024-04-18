import { Hono } from 'hono';
import { jwt, sign, decode, verify } from 'hono/jwt';
const SECRET = 'myverysecretpassword';

const app = new Hono();

//signup
app.post('/api/v1/user/signup', async (c) => {
	const { username, password } = await c.req.json();

	const payload = {
		username,
		userId: 1,
		exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
	};
	const token = await sign(payload, SECRET);
	return c.json({ username, password, token: 'Bearer ' + token });
});
//signin
app.post('/api/v1/user/signin', async (c) => {
	const { username, password } = await c.req.json();

	return c.json({ username, password });
});
//blog creation
app.post('/api/v1/blog', async (c) => {
	const { title, content } = await c.req.json();
	return c.json({ title, content });
});
//blog updation
app.put('/api/v1/blog/:id', async (c) => {
	const { id } = c.req.param();

	return c.text(id);
});
app.get('/api/v1/blog/:id', async (c) => {
	const { id } = c.req.param();

	return c.text(id);
});

app.get('/api/v1/blog/bulk', (c) => {
	//return all blogs
	return c.text('Hello Hono!');
});

export default app;
