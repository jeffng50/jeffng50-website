<script>
	import { isDark, constants } from '$lib';
</script>

<div class="drawer z-50">
	<input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar pt-8 text-sm md:h-48">
			<div class="navbar-start px-2 md:px-16">
				<div class="flex-none md:hidden">
					<label for="navbar-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-6 w-6 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</label>
				</div>
			</div>
			<div class="navbar-center">
				<div class="flex md:hidden">
					<div class="flex items-center justify-center text-lg"><span>Jeff Ng</span></div>
				</div>
				<div class="hidden flex-col gap-8 md:flex">
					<div class="flex items-center justify-center text-2xl"><span>Jeff Ng</span></div>
					<ul class="flex flex-row gap-4 px-4">
						{#each Object.entries(constants.navbarLinks) as [title, navbarLink], index}
							<li
								class="rounded-btn hover:bg-base-content hover:text-base-content px-4 py-2 hover:bg-opacity-10"
							>
								<a href={navbarLink}>{title}</a>
							</li>
							{#if index < Object.entries(constants.navbarLinks).length - 1}
								<li class="py-2"><span>|</span></li>
							{/if}
						{/each}
					</ul>
				</div>
			</div>
			<div class="navbar-end px-2 md:px-16">
				<input
					type="checkbox"
					checked={$isDark}
					on:change={isDark.toggle}
					value="mythemedark"
					class="theme-controller toggle"
				/>
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="navbar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4 gap-8 justify-center">
			{#each Object.entries(constants.navbarLinks) as [title, navbarLink], index}
				<li>
					<a
						on:click={() => {
							// @ts-ignore
							document.getElementById('navbar-drawer').click();
						}}
						class="btn btn-primary text-primary-content h-40"
						href={navbarLink}>{title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
