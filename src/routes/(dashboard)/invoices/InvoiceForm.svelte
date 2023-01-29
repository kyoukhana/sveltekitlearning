<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Trash from '$lib/components/icon/Trash.svelte';
</script>

<h2 class="mb-7 font-sansSerif text-3xl font-bold text-daisyBush">Add an Invoice</h2>

<form class="grid grid-cols-6 gap-x-5">
	<!--Client-->
	<section class="field col-span-2">
		<label for="client">Client</label>
		<select name="client" id="client">
			<option value="zeal">ZEAL</option>
		</select>
	</section>

	<section class="field col-span-2 flex items-end gap-x-5">
		<div class="text-base font-bold leading-[3.5rem] text-monsoon">or</div>
		<Button label="+ Client" onClick={() => {}} style="outline" isAnimated={false} />
	</section>

	<!--Invoice id-->
	<section class="field col-span-2">
		<label for="id">Invoice Id</label>
		<input type="number" name="id" />
	</section>
	<!--Due Date-->
	<section class="field col-span-2">
		<label for="dueDate">Due Date</label>
		<input type="date" name="dueDate" />
	</section>

	<!--Issue Date-->
	<section class="field col-span-2 col-start-5">
		<label for="issueDate">Issue Date</label>
		<input type="date" name="issueDate" />
	</section>

	<!--subject-->
	<section class="filed col-span-6">
		<label for="subject">Subject</label>
		<input type="text" name="subject" />
	</section>

	<!----Line Items-->
	<section class="field col-span-6">Line Items</section>

	<!--Notes-->
	<section class="field col-span-6">
		<label for="notes"
			>Notes <span class="font-normal">(optional, displayed on invoice)</span></label
		>
		<textarea name="notes" id="notes" />
	</section>

	<!--Terms-->
	<section class="field col-span-6">
		<label for="terms"
			>Terms <span class="font-normal">(optional, enter your terms and conditions)</span></label
		>
		<textarea name="terms" id="terms" />
		<div class="text-xs text-gray-400">
			Formatting tips: <strong>*bold*</strong>, <em>_italics_</em>.
		</div>
	</section>
	<!--Buttons-->

	<section class="field col-span-2">
		<Button
			style="textOnly"
			label="Delete"
			isAnimated={false}
			onClick={() => {}}
			iconLeft={Trash}
		/>
	</section>

	<section class="field col-span-4 gap-x-5 flex justify-end">
		<Button style="secondary" label="Cancel" isAnimated={false} onClick={() => {}} />
		<Button label="Save" isAnimated={false} onClick={() => {}} />
	</section>
</form>
