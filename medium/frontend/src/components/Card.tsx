function Card(props: { title: string; content: string }) {
	const { title, content } = props;
	return (
		<div className="m-2 rounded-md border bg-pink-300 p-4 h-80 flex flex-col items-center">
			<div className="text-3xl font-bold ">{title}</div>
			<div>{content}</div>
		</div>
	);
}

export default Card;
