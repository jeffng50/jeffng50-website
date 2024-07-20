<script lang="ts">
	import '../../app.css';
</script>

<main class="bg-base-100">
	<slot></slot>
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-primary;
		@apply font-sans;
	}
</style>
