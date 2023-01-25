<script lang="ts">
	import ThreeDots from '$lib/components/icon/ThreeDots.svelte';
	import View from '$lib/components/icon/View.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { convertDate, isLate } from '$lib/utils/dateHelpers';
	import { sumLineItems, centsToDollars } from '$lib/utils/moneyHelpers';

	export let invoice: Invoice;

	const getInvoiceLabel = () => {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
			return 'sent';
		} else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
			return 'late';
		} else if (invoice.invoiceStatus === 'paid') {
			return 'paid';
		}
	};
</script>

<section
	class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
>
	<div class="status"><Tag className="ml-auto lg:ml-0" label={getInvoiceLabel()} /></div>
	<div class="dueDate lg:text text-sm">{convertDate(invoice.dueDate)}</div>
	<div class="invoiceNumber lg:text text-sm">{invoice.invoiceNumber}</div>
	<div class="clientName truncate whitespace-nowrap text-base font-bold lg:text-xl">
		{invoice.client.name}
	</div>
	<div class="amount lg:text text-right font-mono text-sm font-bold">
		${centsToDollars(sumLineItems(invoice.lineItems))}
	</div>
	<div class="center viewButton lg:text hidden text-sm lg:block">
		<a href="#blank" class="text-pastelPurple hover:text-daisyBush"><View /></a>
	</div>
	<div class="center moreButton lg:text hidden text-sm lg:block">
		<button class=" text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
	</div>
</section>

<style lang="postcss">
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
