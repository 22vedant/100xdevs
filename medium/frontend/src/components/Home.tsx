import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import NewCard from './NewCard';

interface Post {
	id: number;
	title: string;
	content: string;
}

function Home() {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				'http://localhost:8787/api/v1/blog/bulk',
				{
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				}
			);
			setPosts(response.data);
			console.log(response.data);
		};
		fetchData();
	}, []);
	return (
		// <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
		<div className="flex justify-center items-center flex-col">
			{/* <Card title="First post" content="This is my first post" />
			<Card title="Second post" content="This is my Second post" />
			<Card title="Third post" content="This is my Third post" />
			<Card title="Fourth post" content="This is my Fourth post" /> */}
			{posts.map((post) => {
				return (
					<NewCard
						key={post.id}
						title={post.title}
						content={post.content}
					/>
				);
			})}
		</div>
	);
	return (
		<div className="flex flex-col  items-center min-h-screen w-full">
			<NewCard title="ksdjfaskdf" content="kkjfasd" />
			<NewCard title="asdfasdfasdf" content="asdfasdfasdf" />
		</div>
	);
}

export default Home;
