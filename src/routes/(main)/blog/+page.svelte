<script>
	import { dateOptions, isPersonal } from '$lib';
	export let data;
</script>

{#if data.posts.length != 0}
	<ul>
		{#each data.posts as post}
			{#if $isPersonal || !post.meta.tags.includes('personal')}
				<li>
					<h2>
						<a href={`/blog/${post.path}`}>
							{post.meta.title}
						</a>
					</h2>
					Published: {new Date(post.meta.createdDate).toLocaleDateString(undefined, dateOptions)}
				</li>
			{/if}
		{/each}
	</ul>
{:else}
	<h1>oops! there are no posts</h1>
{/if}
