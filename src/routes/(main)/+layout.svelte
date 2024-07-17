<script>
	import '../../app.css';
	import { Navbar, Footer, SlidingText, constants } from '$lib';
	import { PUBLIC_DEPLOY_ENV } from '$env/static/public';
	import { page } from '$app/stores';
	import Alert from '$lib/components/Alert.svelte';
</script>

<Navbar />

<div class="flex flex-col justify-center items-center">
	<div class="prose m-8">
		<Alert mode="info"
			>Note: this site is still a work in progress, any issues please <a
				href={`mailto:${constants.email}`}>mail me</a
			></Alert
		>
	</div>
	{#if $page.url.pathname == '/about-me'}
		<SlidingText divClass="py-24 bg-white" spanClass="text-black">{'about me; '}</SlidingText>
	{/if}

	<main
		class="prose container max-w-[70em] my-8 mx-auto px-5 md:px-0 md:w-1/2 min-h-[calc(100vh-204px)] md:min-h-[calc(100vh-308px)]"
	>
		<slot></slot>
	</main>
</div>

{#if PUBLIC_DEPLOY_ENV == 'staging'}
	<SlidingText spanClass="text-primary-content">testing·</SlidingText>
{/if}

<Footer />

<style lang="postcss">
	:global(body) {
		@apply bg-primary;
		@apply font-sans;
	}
</style>
