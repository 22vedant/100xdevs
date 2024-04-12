import getClient from './index';

async function createTable() {
	const client = await getClient();

	const result = await client.query(`
        CREATE TABLE newUsers(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
	console.log(result);
}

async function insertData(username: string, email: string, password: string) {
	const client = await getClient();

	try {
		const insertQuery = `INSERT INTO newusers (username, email, password) VALUES ($1, $2, $3)`;
		const values = [username, email, password];
		const res = await client.query(insertQuery, values);
		console.log('Insertion successful');
	} catch (error) {
		console.error('error occured', error);
	} finally {
		await client.end();
	}
}

insertData('damndaniel', 'damndaniel@gmail.com', '123456789');
