import { get } from 'svelte/store';

import { isPersonal } from '$lib';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts;

	return {
		posts
	};
};
