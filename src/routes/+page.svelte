<script lang="ts">
	import { meters } from '$lib/meters.svelte';
</script>

<svelte:head>
	<title>The Persian Meters</title>
</svelte:head>

<h1 class="mb-1 text-3xl">The Persian Meters</h1>

<p class="mb-4"><em>after Thackston’s list</em></p>

<p class="mb-5">
	Syllables should be read left to right! (There will eventually be an option to reverse this.)
</p>

<div class="space-y-6">
	{#each meters as meter, i}
		<div>
			<div class="-mb-0.5 flex items-center">
				<div class="w-9">{i + 1}.</div>

				<div class="flex space-x-2 font-gentium">
					{#each meter.feet as foot, j}
						<div class="relative top-1.5 text-3xl">{foot}</div>

						{#if j + 1 < meter.feet.length}
							<div class="text-2xl">|</div>
						{/if}
					{/each}
				</div>
			</div>

			<div class="ml-9"><em>{meter.nameLat}</em></div>

			<div class="ml-9 font-scheherazade text-xl">{meter.nameFa}</div>
		</div>
	{/each}
</div>
