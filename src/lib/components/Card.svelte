<script lang="ts">
	export let title: string;
	export let link: string;
	export let linkLabel: string;
	export let imgSrc: string = '';
	export let description: string = '';
</script>

<div class="card card-compact bg-base-100 shadow-xl">
	{#if imgSrc != ''}
		<div class="hidden md:flex">
			<figure>
				<img class="object-cover w-[400px] h-[225px]" src={imgSrc} alt={`${title} cover`} />
			</figure>
		</div>
	{/if}
	<div class="card-body">
		<span class="card-title">{title}</span>
		<span>{description}</span>
		<div class="card-actions justify-end">
			<a target="_blank" rel="noopener noreferrer" href={link} class="btn btn-accent">{linkLabel}</a
			>
		</div>
	</div>
</div>
