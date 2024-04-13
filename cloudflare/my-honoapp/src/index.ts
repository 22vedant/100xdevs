import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c: any) => {
	return c.json({
		ok: true,
		message: 'This is written using hono',
	});
});

export default app;
