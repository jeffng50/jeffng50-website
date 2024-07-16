<script lang="ts">
	import type { SlidingDirectionType } from '$lib';

	export let divClass: string = '';
	export let spanClass: string = '';
	export let wordLength: number = 12;
	export let slidingDirection: SlidingDirectionType = 'forward';
</script>

<div class={`${divClass}`}>
	<div class="hidden md:flex w-full items-center overflow-hidden">
		<div class={slidingDirection == 'forward' ? 'slide-forwards' : 'slide-backwards'}>
			{#each { length: wordLength } as _}
				<div class="whitespace-nowrap inline-flex items-center justify-center text-9xl">
					<span class={spanClass}><slot /></span>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex items-center justify-center md:hidden text-5xl font-bold">
		<span><slot /></span>
	</div>
</div>
