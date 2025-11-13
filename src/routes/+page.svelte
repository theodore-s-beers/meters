<script lang="ts">
	import { asset } from "$app/paths";
	import { meters } from "$lib/meters";
</script>

<svelte:head>
	<meta
		name="description"
		content="A list of the Persian poetic meters, drawn from Wheeler M. Thackston's textbook"
	/>
	<meta property="og:image" content="https://www.theobeers.com/meters/og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Persian Meters" />
	<title>The Persian Meters</title>
</svelte:head>

<h1 class="mb-1 text-3xl">The Persian Meters</h1>

<p class="mb-4 ml-6 text-xl">after Thackston’s list</p>

<p class="mb-4">
	<em>The introduction to Wheeler Thackston’s</em> Millennium of Classical Persian Poetry,
	<em>
		which contains his primer on Persian prosody, is also available
		<a
			href={asset("/thackston-intro.pdf")}
			rel="noreferrer"
			target="_blank"
			class="text-blue-800 hover:underline">in PDF</a
		>.
	</em>
</p>

<p class="mb-4">
	<em
		>Syllables in “dashes and scoops” should be read left-to-right. The Persian notation is, of
		course, right-to-left.</em
	>
</p>

<p class="mb-5">
	<span class="font-semibold">Starts with:</span>
	<a href="#9" class="text-blue-800 hover:underline">sh-lo</a>;
	<a href="#26" class="text-blue-800 hover:underline">lo-sh</a>;
	<a href="#53" class="text-blue-800 hover:underline">lo-lo</a>
</p>

<div class="space-y-6">
	{#each meters as meter, i (meter.nameLat)}
		<div id={String(i + 1)}>
			<div class="flex items-center">
				<div class="w-9">{i + 1}.</div>

				<div class="flex space-x-2 font-gentium">
					{#each meter.feetLat as foot, j (foot)}
						<div class="relative top-1.5 text-3xl">{foot}</div>

						{#if j + 1 < meter.feetLat.length}
							<div class="text-2xl">|</div>
						{/if}
					{/each}
				</div>
			</div>

			<div class="ml-9 font-markazi text-2xl">{meter.feetFa.join(" ")}</div>

			<div class="ml-9"><em>{meter.nameLat}</em></div>

			<div class="ml-9 font-markazi text-2xl">{meter.nameFa}</div>

			{#if meter.example}
				<div class="ml-9 text-blue-800 hover:underline">
					<a href={meter.example.url} rel="noreferrer" target="_blank"
						>Example ({meter.example.author})</a
					>
				</div>
			{/if}
		</div>
	{/each}
</div>
