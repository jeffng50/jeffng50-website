import type { BlogPost } from '$lib';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [{ slug: 'post-two' }, { slug: 'post-three' }];
};

export async function load({ params }): Promise<BlogPost> {
	const post = await import(`../../../../posts/${params.slug}.md`);
	const title: string = post.metadata.title;
	const createdDate: string = post.metadata.createdDate;
	const modifiedDate: string = post.metadata.modifiedDate;
	const tags: string[] = post.metadata.tags;
	const content: unknown = post.default;

	return {
		content,
		title,
		createdDate,
		modifiedDate,
		tags
	};
}
