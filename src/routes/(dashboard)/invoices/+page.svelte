<script lang="ts">
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import { onMount } from 'svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';

	import Search from '$lib/components/Search.svelte';
	import Invitation from './invoiceRow.svelte'
	import InvoiceRow from './invoiceRow.svelte';

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
	<Search />

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
	<!--Header-->
	<section class="table-header invoice-table hidden  text-daisyBush lg:grid">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3 class="text-right">Amount</h3>
		<div />
		<div />
	</section>

	<!-- Invoices -->
	{#each $invoices as invoice}
		<InvoiceRow {invoice}/>
	{/each}
</section>

<CircledAmount label="Total" amount="$1,144.00" />

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}
</style>
