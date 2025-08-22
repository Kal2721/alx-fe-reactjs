import React from "react";
import { useQuery, useQueryClient } from "react-query";

const fetchPosts = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	if (!res.ok) {
		throw new Error("Failed to fetch posts");
	}
	return res.json();
};

const PostsComponents = () => {
	const queryClient = useQueryClient();

	const {
		data: posts,
		isLoading,
		isError,
		error,
		refetch,
		isFetching,
	} = useQuery({
		queryKey: ["posts"],
		queryFn: fetchPosts,
		staleTime: 1000 * 60,
		cacheTime: 1000 * 60 * 5,
	});

	if (isLoading) {
		return <p className="text-gray-600">Loading posts...</p>;
	}

	if (isError) {
		return <p className="text-red-500">Error: {(error as Error).message}</p>;
	}
	
	return (
		<div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-semibold">Posts</h2>
				<div className="space-x-2">
					<button
						onClick={() => refetch()}
						className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
					Refetch
					</button>
					<button>
						onClick={() => queryClient.invalidateQueries({ queryKey:["posts"] })}
						className="px-4 py-6 bg-green-600 text-white rounded hover:bg-green-700">
					Invalidate Cache
					</button>
				</div>
			</div>

			{isFetching && (
				<p className="text-sm text-gray-500 italic">Refreshing data...</p>
			)}

			<ul className="space-y-2 max-h-[400px] overflow-y-auto">
				{posts.map((post: any) => (
					<li
						key={post.id}
						className="p-3 border rounded hover:bg-gray-50 transition">
						<h3 className="font-medium">{post.title}</h3>
						<p className="text-sm text-gray-600">{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostsComponent;

