<script>
	import { dateOptions } from '$lib';
	export let data;
</script>

<div>
	<h1>{data.tag}</h1>
	{#if data.posts.length}
		<ul>
			{#each data.posts as post}
				<li>
					<h2>
						<a href={`/blog/${post.path}`}>
							{post.meta.title}
						</a>
					</h2>
					Published: {new Date(post.meta.createdDate).toLocaleDateString(undefined, dateOptions)}
				</li>
			{/each}
		</ul>
	{:else}
		<p>no posts with this tag</p>
	{/if}
</div>
