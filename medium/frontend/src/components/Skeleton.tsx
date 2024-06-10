function Skeleton() {
	return (
		<div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
			{/* className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3" */}
			<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
		</div>
	);
}

export default Skeleton;
