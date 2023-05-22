<script lang="ts">
	import {fly} from "svelte/transition";
	import { createEventDispatcher } from 'svelte';
	import Portal from '$lib/components/Portal.svelte';
	import Overlay from './Overlay.svelte';
	import Arrow from '$lib/components/icon/Arrow.svelte';
	const dispatch = createEventDispatcher();
	import { clickOutside } from '$lib/actions/ClickOutside';
</script>

<svelte:window
  on:keydown={(event) => {
    if (event.key === 'Escape') {
      dispatch('close');
    }
  }}
/>

<Portal>
	<Overlay />
	<aside
		class="fixed overflow-y-scroll right-0 top-0 z-slidePanel h-screen w-full lg:w-3/4 bg-white lg:py-20 lg:px-32 px-5 pt-16 shadow-slidePanel"
	     transition:fly="{{ x:1000, duration:500 }}"

		 use:clickOutside={() => {
			dispatch("closePanel")
		 }}
		>
		<button class="absolute top-5 left-7 text-pastelPurple hover:text-daisyBush" on:click={() => dispatch('closePanel')}>
			<Arrow />
		</button>
		<slot />
	</aside>
</Portal>
