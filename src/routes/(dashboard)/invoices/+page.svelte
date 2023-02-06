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
	import Button from '$lib/components/Button.svelte';
	import SlidePanel from '$lib/components/SlidePanel.svelte';
	import InvoiceForm from './InvoiceForm.svelte';

	let isInvoiceFormShowing: boolean = false;

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
		<!--BTN COM-->
		<Button
			label="+ Invoice"
			onClick={() => {
				isInvoiceFormShowing = true;
			}}
		/>
	</section>
</section>

<!-- List of Invoices-->
<section>
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

<!--Slide-->
{#if isInvoiceFormShowing}
	<SlidePanel
		on:closePanel={() => {
			isInvoiceFormShowing = false;
		}}><InvoiceForm></InvoiceForm>
		
		<InvoiceForm closePanel={() => (isInvoiceFormShowing = false)} />
		</SlidePanel
	>
{/if}
