<script lang="ts">
	import Button from '$lib/components/Button.svelte';

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
	class="shadow-invoice relative top-32 z-10 grid grid-cols-6 gap-x-5 gap-y-8 bg-white py-16 px-32"
>
	<section class="col-span-3">
		<img
			src="/images/logo.png"
			srcset="/images/logo@2x.png 2x, /images/logo.png 1x"
			alt="Compressed.fm"
		/>
	</section>

	<section class="col-span-2 col-start-5 pt-4">
		<section class="label">From</section>
		<p>
			Amy Dutton<br />
			123 Awesome Street<br />
			Coolville, TN 54321
		</p>
	</section>

	<section class="col-span-3">
		<section class="label">Bill To:</section>
		<p>
			<strong>ZEAL</strong><br />
			zeal@example.com<br />
			789 Stellar Street<br />
			Anywhereville, CA 56789
		</p>
	</section>

	<section class="col-span-2 col-start-5">
		<section class="label">Invoice ID</section>
		<p>12348</p>
	</section>

	<section class="col-span-3">
		<section class="label">Due Date</section>
		<p>10 / 6 / 2022</p>
	</section>

	<section class="col-span-2 col-start-5">
		<section class="label">Issue Date</section>
		<p>7 / 6 / 2022</p>
	</section>

	<section class="col-span-6">
		<section class="label">Subject</section>
		<p>Website</p>
	</section>

	<section class="col-span-6">
		<!-- Line Items -->
	</section>

	<section class="col-span-6">
		<section class="label">Notes</section>
		<p>lorem ipsum</p>
	</section>

	<section class="col-span-6">
		<section class="label">Terms and Conditions</section>
		<p>lorem ipsum</p>
	</section>
</section>

<style lang="postcss">
	.label {
		@apply font-black text-monsoon;
	}
</style>
