interface Posts {
	title: string;
	content: string;
	// email: string;
}

function NewCard({ title, content }: Posts) {
	return (
		<div className="flex flex-col justify-center h-30 p-7 w-[70%] border-b-2">
			<div className="flex flex-row  items-center">
				<span className=" bg-slate-500 text-white rounded-full flex justify-center items-center h-7 w-7 mr-3 ">
					A
				</span>
				<span>Username</span>
			</div>
			<div className="text-2xl font-bold mt-2">{title}</div>

			<div className=" mt-1">{content}</div>
		</div>
	);
}

export default NewCard;
