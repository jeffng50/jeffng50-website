<script lang="ts">
	import { dateOptions } from '$lib';
	export let data;
</script>

<div class="flex items-center justify-center">
	<article
		class="prose lg:prose-xl prose-a:text-blue-600 hover:prose-a:text-blue-800 visited:prose-a:text-purple-600 container p-6"
	>
		<h1>{data.title}</h1>
		{#each data.tags as tag}
			<div class="badge text-black bg-[#e5e7eb] mr-2">
				{tag}
			</div>
		{/each}
		<p>Published: {new Date(data.date).toLocaleDateString(undefined, dateOptions)}</p>
		<div class="divider"></div>

		<svelte:component this={data.content} />
	</article>
</div>
