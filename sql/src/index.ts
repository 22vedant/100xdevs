import { Client } from 'pg';
const getClient = async () => {
	const client = new Client(
		'postgresql://vedantchinta:ln7gIb1rFRZJ@ep-ancient-dew-a1cmhr0b.ap-southeast-1.aws.neon.tech/demoDB?sslmode=require'
	);
	await client.connect();
	return client;
};

export default getClient;
