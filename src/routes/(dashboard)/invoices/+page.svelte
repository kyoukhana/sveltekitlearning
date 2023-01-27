<script lang="ts">
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import { onMount } from 'svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';

	import Search from '$lib/components/Search.svelte';
	import Invitation from './invoiceRow.svelte';
	import InvoiceRow from './invoiceRow.svelte';
	import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelpers';
	import BlankState from './BlankState.svelte';
	import InvoiceRowHeader from './InvoiceRowHeader.svelte';
	import Portal from '$lib/components/Portal.svelte';

	onMount(() => {
		loadInvoices($invoices);
		console.log('----------------');
		console.log($invoices);
	});
</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<section
	class="md:gap-7-4 mb-7 flex flex-col-reverse items-start justify-between gap-y-6 md:flex-row md:items-center lg:mb-16"
>
	<!-- Search Field-->
	{#if $invoices.length > 0}
		<Search />
	{:else}
		<!--Empty Div so keeps flexbox intact-->
		<div />
	{/if}
	<!--Nav invoice button-->

	<section>
		<button
			class="font-sanSerif relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover lg:px-10 lg:py-3 lg:text-xl"
			>+ Invoices</button
		>
	</section>
</section>

<!-- List of Invoices-->
<section>
	<Portal>
		<div>Invoice Form:</div>
	</Portal>

	<!-- Invoices -->

	{#if $invoices === null}
		Loading...
	{:else if $invoices.length <= 0}
		<BlankState />
	{:else}
		<InvoiceRowHeader className="text-daisyBush" />
		<section class="flex flex-col-reverse">
			{#each $invoices as invoice}
				<InvoiceRow {invoice} />
			{/each}
		</section>
		<CircledAmount label="Total" amount={`$${centsToDollars(sumInvoices($invoices))}`} />
	{/if}
</section>
