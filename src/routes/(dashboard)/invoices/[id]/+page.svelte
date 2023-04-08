<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { convertDate } from '$lib/utils/dateHelpers';
	import LineItemRows from '../LineItemRows.svelte';
	import { settings, loadSettings } from '$lib/stores/SettingsStore';
	import { onMount } from 'svelte';
	export let data: { invoice: Invoice };
	onMount(() => {
		loadSettings();
	});

	const printInvoice = () => {
		console.log('print invoice');
	};

	const copyLink = () => {
		console.log('copy link');
	};

	const sendInvoice = () => {
		console.log('Send Invoice');
	};

	const payInvoice = () => {
		console.log('Pay Invoice');
	};
</script>

<section class="fixed z-0 mb-16 flex w-full max-w-screen-lg justify-between">
	<h1 class="text-3xl font-bold text-daisyBush">Invoice</h1>
	<section class="flex items-center gap-4">
		<Button
			height="short"
			label="Print"
			style="outline"
			isAnimated={false}
			onClick={printInvoice}
		/>
		<Button height="short" label="Copy Link" onClick={copyLink} />
		<Button height="short" label="Send" onClick={sendInvoice} />
		<Button height="short" label="Pay Invoice" onClick={payInvoice} />
	</section>
</section>

<section
	class="relative top-32 z-10 grid grid-cols-6 gap-x-5 gap-y-8 bg-white py-16 px-32 shadow-invoice"
>
	<section class="col-span-3">
		<img
			src="/images/logo.png"
			srcset="/images/logo@2x.png 2x, /images/logo.png 1x"
			alt="Compressed.fm"
		/>
	</section>

	<section class="col-span-2 col-start-5 pt-4">
		{#if $settings && $settings.myName}
			<section class="label">From</section>
			<p>
				{$settings.myName}<br />

				{#if $settings.street && $settings.city && $settings.postal}
					{$settings.street}<br />
					{$settings.city}, {$settings.postal}
				{/if}
			</p>
			{:else}
			<div class="center min-h-[68px] rounded bg-gallery">
			  <a href="#" class="text-stone-600 underline hover:no-underline"
				>Add your contact information.</a
			  >
			</div>
		{/if}
		
	</section>

	<section class="col-span-3">
		<section class="label">Bill To:</section>
		<p>
			<strong>{data.invoice.client.name}</strong><br />
			{data.invoice.client.email}<br />
			{data.invoice.client.street}<br />
			{data.invoice.client.city}, {data.invoice.client.province}
			{data.invoice.client.postal}
		</p>
	</section>

	<section class="col-span-2 col-start-5">
		<section class="label">Invoice ID</section>
		<p>{data.invoice.invoiceNumber}</p>
	</section>

	<section class="col-span-3">
		<section class="label">Due Date</section>
		<p>{convertDate(data.invoice.dueDate)}</p>
	</section>

	<section class="col-span-2 col-start-5">
		<section class="label">Issue Date</section>
		<p>{convertDate(data.invoice.issueDate)}</p>
	</section>

	<section class="col-span-6">
		<section class="label">Subject</section>
		<p>{data.invoice.subject}</p>
	</section>

	<section class="col-span-6">
		<LineItemRows
			lineItems={data.invoice.lineItems}
			isEditable={false}
			discount={data?.invoice?.discount || 0}
		/>
	</section>

	{#if data.invoice.notes}
		<section class="col-span-6">
			<section class="label">Notes</section>
			<p>{data.invoice.notes}</p>
		</section>
	{/if}

	{#if data.invoice.terms}
		<section class="col-span-6">
			<section class="label">Terms and Conditions</section>
			<p>{data.invoice.terms}</p>
		</section>
	{/if}
</section>

<style lang="postcss">
	.label {
		@apply font-black text-monsoon;
	}
</style>
