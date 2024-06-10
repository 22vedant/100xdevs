import { createPostSchema } from '@22vedant/common';
import { useState } from 'react';
import { Form, Link } from 'react-router-dom';

type Posts = {
	title: string;
	content: string;
};
function Create({ title, content }: Posts) {
	const [postTitle, setPostTitle] = useState('');
	const [postcontent, setPostContent] = useState('');
	return (
		<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
			{/* <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24"> */}
			<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
				<h2 className="text-center text-2xl font-bold leading-tight text-black">
					Sign in to your account
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600 ">
					Don't have an account?{' '}
					<Link
						to="/signup"
						className="font-semibold text-black transition-all duration-200 hover:underline"
					>
						Create an account
					</Link>
				</p>
				<Form action="/dashboard" method="post" className="mt-8">
					<div className="space-y-5">
						<div>
							<label
								htmlFor=""
								className="text-base font-medium text-gray-900"
							>
								{' '}
								Email address{' '}
							</label>
							<div className="mt-2">
								<input
									className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="email"
									placeholder="Email"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								></input>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor=""
									className="text-base font-medium text-gray-900"
								>
									{' '}
									Password{' '}
								</label>
							</div>
							<div className="mt-2">
								<input
									className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="password"
									placeholder="Password"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								></input>
							</div>
						</div>
						<div>
							<button
								type="button"
								className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
								onClick={async () => {
									const response = await axios.post(
										'http://localhost:8787/api/v1/user/signin',
										{
											email,
											password,
										},
										{
											headers: {
												Authorization: userToken,
											},
										}
									);
									navigate('/landing');
								}}
							>
								Get started{' '}
							</button>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Create;
