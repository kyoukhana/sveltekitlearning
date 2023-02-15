<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Trash from '$lib/components/icon/Trash.svelte';
	import { twoDecimals, dollarsToCents, centsToDollars } from '$lib/utils/moneyHelpers';

	export let lineItem: LineItem;
	export let canDelete: boolean = false;

	export let isRequired: boolean = false;

	let dispatch = createEventDispatcher();
	let unitPrice: string = centsToDollars(lineItem.amount / lineItem.quantity);
	let amount: string = centsToDollars(lineItem.amount);

	$: {
		amount = twoDecimals(lineItem.quantity * Number(unitPrice));
		lineItem.amount = dollarsToCents(Number(amount));
	}
</script>

<section class="invoice-line-item border-b2 border-fog py-4 sm:py-2">
	<div class="description">
		<label for="description" class="line-item-label">Description</label>
		<input
			class="line-item"
			type="text"
			name="description"
			bind:value={lineItem.description}
			required={isRequired}
		/>
	</div>

	<div class="unitPrice">
		<label for="unitPrice" class="line-item-label text-right">Unit Price</label>
		<input
			class="line-item text-right"
			type="number"
			name="unitPrice"
			required={isRequired}
			step="0.01"
			min="0"
			bind:value={unitPrice}
			on:blur={() => {
				unitPrice = twoDecimals(Number(unitPrice));
				dispatch('updateLineItem');
			}}
		/>
	</div>

	<div class="qty">
		<label for="quantity" class="line-item-label text-center">Qty</label>
		<input
			class="line-item text-center"
			type="number"
			name="quantity"
			required={isRequired}
			min="0"
			bind:value={lineItem.quantity}
			on:blur={() => {
				dispatch('updateLineItem');
			}}
		/>
	</div>

	<div class="amount">
		<label for="amount" class="line-item-label text-right">Amount</label>
		<input
			disabled
			class="line-item text-right"
			type="number"
			name="amount"
			step="0.01"
			min="0"
			bind:value={amount}
		/>
	</div>

	<div class="trash">
		{#if canDelete}
			<button
				on:click|preventDefault={() => {
					dispatch('removeLineItem', lineItem.id);
					console.log(lineItem.id);
				}}
				class="center h-10 w-10 text-pastelPurple hover:text-lavenderIndigo"><Trash /></button
			>
		{/if}
	</div>
</section>

<style lang="postcss">
	input[type='text'],
	input[type='number'] {
		@apply h-10 w-full border-b-2 border-dashed border-stone-300;
	}

	input[type='text'] {
		@apply font-sansSerif text-xl font-bold;
	}

	input[type='number'] {
		@apply font-mono text-base;
	}

	input[type='number']:focus,
	input[type='text']:focus {
		@apply border-solid border-lavenderIndigo outline-none;
	}

	input[type='number']:disabled,
	input[type='text']:disabled {
		@apply border-b-0 bg-transparent px-0;
	}
	.line-item-label {
		@apply block sm:hidden;
	}
</style>
