<script lang="ts">
	import { dateOptions, isPersonal } from '$lib';
	export let data;

	$: if (data.tags.includes('personal')) {
		isPersonal.set(true);
	}
</script>

<div class="flex items-center justify-center">
	<article
		class="prose lg:prose-xl prose-a:text-blue-600 hover:prose-a:text-blue-800 visited:prose-a:text-purple-600 container p-6"
	>
		<h1>{data.title}</h1>
		{#each data.tags as tag}
			<a href={`/blog/tags/${tag}`} class="badge text-black bg-[#e5e7eb] mr-2">
				{tag}
			</a>
		{/each}
		<p>Published: {new Date(data.createdDate).toLocaleDateString(undefined, dateOptions)}</p>
		{#if data.modifiedDate}
			<p>
				Last Modified: {new Date(data.modifiedDate).toLocaleDateString(undefined, dateOptions)}
			</p>
		{/if}
		<div class="divider"></div>

		<svelte:component this={data.content} />
	</article>
</div>
