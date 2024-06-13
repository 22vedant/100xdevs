import { Hono } from 'hono';

const app = new Hono();

app.get('/api/v1/user/details', (c: any) => {
	return c.json({
		name: "Vedant",
		email: `vedantchinta223@gmail.com`,
		address: {
			city: "Pune",
			state: "Maharashtra"
		}
	});
});

export default app;
