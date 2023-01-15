<script lang="ts">
	import CircledAmount from '$lib/components/CircledAmount.svelte';
	import ThreeDots from '$lib/components/icon/ThreeDots.svelte';
	import View from '$lib/components/icon/View.svelte';
	import Search from '$lib/components/Search.svelte';
	import Tag from '$lib/components/Tag.svelte';
</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<section class="mb-7 gap-y-6 md:gap-7-4 lg:mb-16 flex flex-col-reverse items-start md:flex-row md:items-center justify-between">
	<!-- Search Field-->
	<Search />

	<!--Nav invoice button-->

	<section>
		<button
			class="font-sanSerif text-base relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 lg:px-10 lg:py-3 lg:text-xl font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover"
			>+ Invoices</button
		>
	</section>
</section>

<!-- List of Invoices-->
<section>
	<!--Header-->
	<section class="table-header hidden lg:grid  invoice-table text-daisyBush">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
	</section>

	<!-- Invoices -->
	<section class="invoice-table invoice-row items-center rounded-lg bg-white py-3 lg:py-6 shadow-tableRow">
		<div class="status"><Tag className='ml-auto lg:ml-0' label="draft" /></div>
		<div class="dueDate text-sm lg:text">8 /1/2022</div>
		<div class="invoiceNumber text-sm lg:text">12345</div>
		<div class="clientName text-base lg:text-xl font-bold">Compressed.fm</div>
		<div class="amount font-mono text-sm lg:text font-bold text-right">$504.00</div>
		<div class="center viewButton text-sm lg:text hidden lg:block">
			<a href="#blank" class="text-pastelPurple hover:text-daisyBush"><View /></a>
		</div>
		<div class="center moreButton text-sm lg:text hidden lg:block">
			<button class=" text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
		</div>
	</section>
</section>

<CircledAmount label="Total" amount="$1,144.00" />

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}

    .invoice-row{
       grid-template-areas:
       'invoiceNumber invoiceNumber'
       'clientName amount'
       'dueDate status';
    }

	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
		}
	}

	.invoice-row .status {
		grid-area: status;
	}

	.invoice-row .dueDate {
		grid-area: dueDate;
	}

	.invoice-row .invoiceNumber {
		grid-area: invoiceNumber;
	}

	.invoice-row .clientName {
		grid-area: clientName;
	}

	.invoice-row .amount {
		grid-area: amount;
	}

	.invoice-row .viewButton {
		grid-area: viewButton;
	}

	.invoice-row .moreButton {
		grid-area: moreButton;
	}
</style>
