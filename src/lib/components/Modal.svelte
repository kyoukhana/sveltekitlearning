<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Portal from '$lib/components/Portal.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Cancel from './icon/Cancel.svelte';
	import { clickOutside } from '$lib/actions/ClickOutside';

	export let isVisible: boolean = false;

	const dispatch = createEventDispatcher();
</script>

<svelte:window
	on:keydown={(event) => {
		if (event.key === 'Escape') {
			dispatch('close');
		}
	}}
/>

{#if isVisible}
	<Portal>
		<Overlay className="!z-modalOverlay"/>
		<div class="center fixed inset-0 z-modal">
			<div class="relative min-h-[230px] w-full max-w-[450px] rounded-lg bg-white px-10 py-7"  use:clickOutside={() => {
				dispatch("close")
			  }}>
				<button
					on:click={() => {
						dispatch('close');
					}}
					class="absolute right-4 top-4 text-pastelPurple hover:text-daisyBush"
				>
					<Cancel />
				</button>
				<slot />
			</div>
			Í
		</div>
	</Portal>
{/if}
