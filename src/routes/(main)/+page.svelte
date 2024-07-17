<script lang="ts">
	import { Card } from '$lib';
	const projects = [
		{
			title: 'My blog',
			description: 'You are seeing this now :) A responsive (mobile-friendly) Markdown-based blog',
			link: 'https://github.com/jeffng50/jeffng50-website',
			linkLabel: 'Github',
			imgSrc: 'images/jeffng50_blog.png'
		},
		{
			title: 'Shoutout Showdown',
			description: 'Educational website with interactive quizzes',
			link: 'https://github.com/jeffng50/shoutout-showdown',
			linkLabel: 'Github',
			imgSrc: 'images/shoutout_showdown_cover.png'
		}
	];
</script>

<div class="">
	<div>
		<h1>Hi my name is Jeff.</h1>
		<h2 class="text-end">And you've arrived on my site</h2>
		<h2 class="text-end">which I've made myself</h2>
		<p class="text-end">
			using <a href="https://kit.svelte.dev/">Sveltekit</a> (a frontend framework like react)
		</p>
	</div>

	<div class="divider"></div>

	<div>
		<h2>Portfolio:</h2>
		<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
			{#each projects as project}
				<Card
					title={project.title}
					description={project.description}
					link={project.link}
					linkLabel={project.linkLabel}
					imgSrc={project.imgSrc}
				/>
			{/each}
		</div>
	</div>
</div>
