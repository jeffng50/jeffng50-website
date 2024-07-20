<script lang="ts">
	import { constants } from '$lib';
	import IconArrowLeft from '~icons/mdi/arrow-left';
	import IconEmail from '~icons/mdi/email';
	import IconGithub from '~icons/mdi/github';
	import IconLinkedin from '~icons/mdi/linkedin';
</script>

<div class="flex flex-col h-screen items-center justify-center gap-8">
	<a class="flex" href="/">
		<IconArrowLeft class="h-6 w-6 shrink-0 mr-2" /> to homepage
	</a>
	<div class="card bg-primary md:w-[35em] lg:w-[40em] md:h-96 shadow-xl">
		<div class="grid grid-cols-1 md:grid-cols-2 py-8 px-16 md:gap-32 h-96 whitespace-nowrap">
			<div class="flex flex-col">
				<h1 class="my-4 text-xl font-bold">Jeff Ng</h1>
				<p>Software Engineer</p>
			</div>
			<div class="flex flex-col items-end justify-end">
				<div class="mt-8 grid grid-rows-none gap-2">
					<a class="btn btn-secondary" href="https://github.com/jeffng50"
						><IconGithub class="h-6 w-6 shrink-0" />Github</a
					>
					<a class="btn btn-secondary" href="https://www.linkedin.com/in/50jeffng/"
						><IconLinkedin class="h-6 w-6 shrink-0" />LinkedIn</a
					>
					<a class="btn btn-secondary" href={`mailto:${constants.email}`}
						><IconEmail class="h-6 w-6 shrink-0" />Mail me
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
