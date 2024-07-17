import type { BlogPost } from '$lib';

export async function load({ params }): Promise<BlogPost> {
	const post = await import(`../../../../posts/${params.slug}.md`);
	const title: string = post.metadata.title;
	const date: string = post.metadata.date;
	const tags: string[] = post.metadata.tags;
	const content: unknown = post.default;

	return {
		content,
		title,
		date,
		tags
	};
}
