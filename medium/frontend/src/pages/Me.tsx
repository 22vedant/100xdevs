import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from '../components/Card';
import NewCard from '../components/NewCard';
import Topbar from '../components/Topbar';

interface Post {
	id: number;
	title: string;
	content: string;
}

function Me() {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				'http://localhost:8787/api/v1/blog/posts',
				{
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				}
			);
			console.log(response.data);
			setPosts(response.data);
		};
		fetchData();
	}, []);

	return (
		<div>
			<Topbar />
			<div className="flex flex-col justify-center items-center">
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
		</div>
	);
}

export default Me;
