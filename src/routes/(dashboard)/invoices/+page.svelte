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

<section class="mb-16 flex items-center justify-between">
	<!-- Search Field-->
	<Search />

	<!--Nav invoice button-->

	<section>
		<button
			class="font-sanSerif relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 text-xl font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover"
			>+ Invoices</button
		>
	</section>
</section>

<!-- List of Invoices-->
<section>
	<!--Header-->
	<section class="table-header  invoice-table text-daisyBush">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
	</section>

	<!-- Invoices -->
	<section class="invoice-table items-center rounded-lg bg-white py-6 shadow-tableRow">
		<div class="text-lg"><Tag label="draft" /></div>
		<div class="text-lg">8 /1/2022</div>
		<div class="text-lg">12345</div>
		<div class="text-xl font-bold">Compressed.fm</div>
		<div class="font-mono text-lg font-bold">$504.00</div>
		<div class="text-lg center"><a href='#blank' class="text-pastelPurple hover:text-daisyBush"><View /></a></div>
		<div class="text-lg center"><button class=" text-pastelPurple hover:text-daisyBush"><ThreeDots /></button></div>
	</section>
</section>

<CircledAmount label="Total" amount="$1,144.00"/>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}
</style>
