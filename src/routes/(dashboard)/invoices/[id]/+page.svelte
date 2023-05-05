<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { convertDate } from '$lib/utils/dateHelpers';
	import LineItemRows from '../LineItemRows.svelte';
	import { settings, loadSettings } from '$lib/stores/SettingsStore';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';

	export let data: { invoice: Invoice };
	let copyLinkLabel = 'Copy Link';

	onMount(() => {
		loadSettings();
	});

	const printInvoice = () => {
		window.print();
	};

	const copyLink = () => {
		navigator.clipboard.writeText($page.url.href);
		copyLinkLabel = 'Copied!';

		setTimeout(() => {
			copyLinkLabel = 'Copy Link';
		}, 2000);
	};

	const sendInvoice = () => {
		console.log('Send Invoice');
	};

	const payInvoice = () => {
		console.log('Pay Invoice');
	};
</script>

<section
	class="fixed z-0 mb-16 flex w-full max-w-screen-lg flex-col justify-between gap-y-5 px-4 print:hidden md:flex-row lg:px-0"
>
	<h1 class="text-3xl font-bold text-daisyBush">Invoice</h1>
	<section class="grap-2 sm:flex-no-wrap flex flex-wrap items-center gap-4">
		<Button
			height="short"
			label="Print"
			style="outline"
			isAnimated={false}
			onClick={printInvoice}
		/>
		<Button
			height="short"
			label={copyLinkLabel}
			onClick={copyLink}
			className="min-w-[100px] sm:min-w-[168px] justify-center"
		/>
		<Button height="short" label="Send" onClick={sendInvoice} />
		<Button height="short" label="Pay Invoice" onClick={payInvoice} />
	</section>
</section>

<section
	class="relative top-32 z-10 grid grid-cols-6 gap-x-5 gap-y-8 bg-white py-8 px-5 shadow-invoice print:top-0 print:py-0 print:shadow-none md:py-16 md:px-32"
>
	<section class="col-span-6 print:col-span-3 sm:col-span-3">
		<img
			src="/images/logo.png"
			srcset="/images/logo@2x.png 2x, /images/logo.png 1x"
			alt="Compressed.fm"
		/>
	</section>

	<section class="col-span-6 print:col-span-3 pt-4 sm:col-span-2 sm:col-start-5">
		{#if $settings && $settings.myName}
			<section class="label">From</section>
			<p>
				{$settings.myName}<br />

				{#if $settings.address && $settings.city && $settings.postal}
					{$settings.address}<br />
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

	<section class="col-span-6 sm:col-span-3 print:col-span-3">
		<section class="label">Bill To:</section>
		<p>
			<strong>{data.invoice.client.name}</strong><br />
			{data.invoice.client.email}<br />
			{data.invoice.client.address}<br />
			{data.invoice.client.city}, {data.invoice.client.province}
			{data.invoice.client.postal}
		</p>
	</section>

	<section class="col-span-6 sm:col-span-2 sm:col-start-5">
		<section class="label">Invoice ID</section>
		<p>{data.invoice.invoiceNumber}</p>
	</section>

	<section class="col-span-3">
		<section class="label">Due Date</section>
		<p>{convertDate(data.invoice.dueDate)}</p>
	</section>

	<section class="col-span-3 sm:col-span-2 sm:col-start-5">
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
			<SvelteMarkdown source={data.invoice.notes} />
		</section>
	{/if}

	{#if data.invoice.terms}
		<section class="col-span-6">
			<section class="label">Terms and Conditions</section>
			<SvelteMarkdown source={data.invoice.terms} />
		</section>
	{/if}
</section>

<style lang="postcss">
	.label {
		@apply font-black text-monsoon;
	}
</style>
