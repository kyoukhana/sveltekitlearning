<script lang="ts">
	import {fly} from "svelte/transition"
	import { afterNavigate, goto } from '$app/navigation';
	import Arrow from '$lib/components/icon/Arrow.svelte';
	let previousPage: string | undefined = undefined;

	afterNavigate((navigation) => {
		previousPage = navigation?.from?.url?.pathname;
	});
</script>

<svelte:window
	on:keydown={(event) => {
		if (event.key === 'Escape') {
			goto(previousPage || '/invoices'); 
		}
	}}
/>

<div class="h-full min-h-screen w-screen bg-whisper print:bg-transparent pt-16 lg:pt-12 print:pt-0 print:pb-0 pb-32">
	<main class="mx-auto min-h-screen max-w-screen-lg" transition:fly={{y:500, duration:250}}>
	  <a href={previousPage ? previousPage : '/invoices'} class="fixed top-7 left-7 text-pastelPurple print:hidden"
		><Arrow /></a
	  >
	  <slot><!-- optional fallback --></slot>
	</main>
  </div>
