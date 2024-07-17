export const load = async ({ params, fetch }) => {
	const { tag } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post: any) => post.meta.tags.includes(tag));

	console.log(posts);
	return {
		tag,
		posts
	};
};
