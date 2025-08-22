import { useParams } from "react-router-dom";

const BlogPost = () => {
	const { postId } = useParams();

	return (
		<div>
			<h2>Blog Post</h2>
			<p>Blog post with ID: {postId}</p>
		</div>
	);
};

export default BlogPost;
