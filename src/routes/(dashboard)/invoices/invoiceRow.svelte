<script lang="ts">
	import ThreeDots from '$lib/components/icon/ThreeDots.svelte';
	import View from '$lib/components/icon/View.svelte';
    import Tag from '$lib/components/Tag.svelte';


    export let invoice: invoice;
</script>

<section
	class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
>
	<div class="status"><Tag className="ml-auto lg:ml-0" label="{invoice.invoiceStatus}" /></div>
	<div class="dueDate lg:text text-sm">{invoice.dueDate}</div>
	<div class="invoiceNumber lg:text text-sm">{invoice.invoiceNumber}</div>
	<div class="clientName text-base font-bold lg:text-xl">{invoice.client.name}</div>
	<div class="amount lg:text text-right font-mono text-sm font-bold">$504.00</div>
	<div class="center viewButton lg:text hidden text-sm lg:block">
		<a href="#blank" class="text-pastelPurple hover:text-daisyBush"><View /></a>
	</div>
	<div class="center moreButton lg:text hidden text-sm lg:block">
		<button class=" text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
	</div>
</section>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}

	.invoice-row {
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
