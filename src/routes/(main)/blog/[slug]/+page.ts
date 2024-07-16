import { redirect } from '@sveltejs/kit';
import type { BlogPost } from '$lib';

export async function load({ params }): Promise<BlogPost> {
	let post;
	try {
		post = await import(`/src/posts/${params.slug}.md`);
	} catch {
		redirect(302, '/404-page-not-found');
	}
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
