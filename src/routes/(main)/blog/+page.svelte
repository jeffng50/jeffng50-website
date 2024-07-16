<script>
	import { dateOptions } from '$lib';
	export let data;
</script>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={`blog/${post.path}`}>
					{post.meta.title}
				</a>
			</h2>
			Published: {new Date(post.meta.date).toLocaleDateString(undefined, dateOptions)}
		</li>
	{/each}
</ul>
