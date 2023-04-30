<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Trash from '$lib/components/Icon/Trash.svelte';
	import Check from '$lib/components/Icon/Check.svelte';
	import { provinces } from '$lib/utils/provinces';
	import type { clientStatus } from '../../../enums';
	export let client: client = {} as Client;
    import { addClient } from '$lib/stores/ClientStore';

	export let closePanel: () => void = () => {};

    const handleSubmit = () => {
        addClient(client);  
        closePanel();
  };
</script>

<h2 class="mb-7 font-sansSerif text-3xl font-bold text-daisyBush">Add a Client</h2>
<form class="grid grid-cols-6 gap-x-5" on:submit|preventDefault={handleSubmit}>
	<div class="field col-span-6">
		<label for="name">Name</label>
		<input type="text" name="name" required bind:value={client.name} />
	</div>

	<div class="field col-span-6">
		<label for="email">Email Address</label>
		<input type="email" name="email" bind:value={client.email} required />
	</div>
	<div class="field col-span-6">
		<label for="street">Address</label>
		<input type="text" name="street" bind:value={client.street} />
	</div>

	<div class="field col-span-2">
		<label for="street">City</label>
		<input type="text" name="city" bind:value={client.city} />
	</div>

	<div class="field cols-span-2">
		<label for="province">Province</label>
		<select name="province" bind:value={client.province}>
			{#each provinces as province}
				<option value={province.value}>{province.name}</option>
			{/each}
		</select>
	</div>

	<div class="field cols-span-2">
		<label for="postal">Postal</label>
		<input type="text" name="postal" bind:value={client.postal} />
	</div>

	<div class="field col-span-3">
		<Button
			label="Delete"
			onClick={() => {}}
			isAnimated={false}
			style="textOnlyDestructive"
			iconLeft={Trash}
		/>
	</div>
	<div class="field col-span-3 flex justify-end gap-x-5">
		<Button label="Cancel" style="secondary" onClick={closePanel} isAnimated={false} />
		<button
			class="button flex translate-y-0 items-center justify-center gap-x-2 bg-lavenderIndigo text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover"
			type="submit"
		>
			<Check />
			Submit
		</button>
	</div>
</form>
