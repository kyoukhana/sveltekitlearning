<script lang="ts">
	import { addClient, clients, loadClients } from '$lib/stores/ClientStore';
	import { slide } from 'svelte/transition';
	import { v4 as uuidv4 } from 'uuid';
	import LineItemRows from './LineItemRows.svelte';
	import Button from '$lib/components/Button.svelte';
	import Trash from '$lib/components/Icon/Trash.svelte';
	import { provinces } from '$lib/utils/provinces';
	import { onMount } from 'svelte';
	import { today } from '$lib/utils/dateHelpers';
	import { addInvoice, updateInvoice } from '$lib/stores/InvoiceStore';
	import ConfirmDelete from './ConfirmDelete.svelte';
	import { snackbar } from '$lib/stores/SnackbarStore';
  
	const blankLineItem = {
	  id: uuidv4(),
	  description: '',
	  quantity: 0,
	  amount: 0
	};
  
	let isNewClient: boolean = false;
	export let invoice: Invoice = {
	  client: {} as Client,
	  lineItems: [{ ...blankLineItem }] as LineItem[]
	} as Invoice;
	let newClient: Partial<Client> = {};
  
	export let formState: 'create' | 'edit' = 'create';
  
	export let closePanel: () => void = () => {};
  
	let isModalShowing = false;
  
	const initialDiscount = invoice.discount || 0;
  
	const AddLineItem = () => {
	  invoice.lineItems = [...(invoice.lineItems as []), { ...blankLineItem, id: uuidv4() }];
	};
  
	const RemoveLineItem = (event: CustomEvent) => {
	  invoice.lineItems =
		invoice?.lineItems && invoice.lineItems.filter((item) => item.id !== event.detail);
	  console.log('remove line item');
	};
  
	const UpdateLineItem = () => {
	  invoice.lineItems = invoice.lineItems;
	};
  
	const handleSubmit = async () => {
	  if (isNewClient) {
		invoice.client = newClient as Client;
		const addedClient = await addClient(newClient as Client);
		invoice.client.id = addedClient?.id;	
	  }
  
	  if (formState === 'create') {
		await addInvoice(invoice);
	
	  } else {
		await updateInvoice(invoice);
	  }
  
	  closePanel();
	};
  
	const UpdateDiscount = (event: CustomEvent) => {
	  invoice.discount = event.detail.discount;
	};
  
	onMount(() => {
	  loadClients();
	});
  </script>
  

<h2 class="mb-7 font-sansSerif text-3xl font-bold text-daisyBush">
	{#if formState === 'create'}Add{:else}Edit{/if} an Invoice
</h2>

<form class="grid grid-cols-6 gap-x-2 md:gap-x-5" on:submit|preventDefault={handleSubmit}>
	<!--new Client-->
	<section class="field col-span-6 flex-wrap sm:flex-nowrap md:col-span-4">
		{#if !isNewClient}
			<label for="client">Client</label>
			<div class="flex flex-wrap items-end gap-x-2 sm:flex-nowrap md:gap-x-5">
				<select
					class="mb-2 sm:mb-0"
					name="client"
					id="client"
					required={!isNewClient}
					bind:value={invoice.client.id}
					on:change={() => {
						const selectedClient = $clients.find((client) => client.id === invoice.client.id);
						invoice.client.name = selectedClient?.name !== undefined ? selectedClient.name : '';
					}}
				>
					<option />
					{#each $clients as client}
						<option value={client.id}>{client.name}</option>
					{/each}
				</select>
				<div class="text-base font-bold leading-[2.5rem] text-monsoon lg:leading-[3.5rem]">or</div>
				<Button
					label="+ Client"
					onClick={() => {
						isNewClient = true;
						invoice.client.name = '';
						invoice.client.email = '';
					}}
					style="outline"
					isAnimated={false}
				/>
			</div>
		{:else}
			<label for="client">New Client</label>
			<div class="flex flex-wrap items-end gap-x-2 sm:flex-nowrap md:gap-x-5">
				<input
					type="text"
					name="newClient"
					required={isNewClient}
					bind:value={newClient.name}
					class="mb-2 sm:mb-0"
				/>
				<div class="text-base font-bold leading-[2.25rem] text-monsoon lg:leading-[3.5rem]">or</div>
				<Button
					label="Existing Client"
					onClick={() => {
						isNewClient = false;
						newClient = {};
					}}
					style="outline"
					isAnimated={false}
				/>
			</div>
		{/if}
	</section>

	<!--Invoice id-->
	<section class="field md:col-span-2 col-span-6 row-start-1 md:row-start-auto">
		<label for="invoiceNumber">Invoice Id</label>
		<input type="number" name="invoiceNumber" required bind:value={invoice.invoiceNumber} />
	</section>

	<!--Client information -->
	{#if isNewClient}
		<div class="field col-span-6 grid gap-x-5" transition:slide>
			<div class="field col-span-6">
				<label for="email">Client's Email</label>
				<input
					type="email"
					name="email"
					id="email"
					required={isNewClient}
					bind:value={newClient.email}
				/>
			</div>

			<div class="field col-span-6">
				<label for="address">Address</label>
				<input type="text" name="address" id="address" bind:value={newClient.address} />
			</div>

			<div class="field col-span-2">
				<label for="city">City</label>
				<input type="text" name="city" id="city" bind:value={newClient.city} />
			</div>

			<div class="field col-span-2">
				<label for="state">Province</label>
				<select name="state" id="state" bind:value={newClient.province}>
					{#each provinces as province}
						<option value={province.value}>{province.name}</option>
					{/each}
				</select>
			</div>

			<div class="field col-span-2">
				<label for="postal">postal</label>
				<input type="text" name="postal" id="postal" bind:value={newClient.postal} />
			</div>
		</div>
	{/if}

	<!--Due Date-->
	<section class="field col-span-3 sm:col-span-2">
		<label for="dueDate">Due Date</label>
		<input type="date" name="dueDate" min={today} required bind:value={invoice.dueDate} />
	</section>

	<!--Issue Date-->
	<section class="field col-span-3 md:col-span-2 md:col-start-5">
		<label for="issueDate">Issue Date</label>
		<input type="date" name="issueDate" min={today} bind:value={invoice.issueDate} />
	</section>

	<!--subject-->
	<section class="field col-span-6">
		<label for="subject">Subject</label>
		<input type="text" name="subject" bind:value={invoice.subject} />
	</section>

	<!----Line Items {lineItems} -->
	<section class="field col-span-6">
		<LineItemRows
		discount={invoice.discount}
		lineItems={invoice.lineItems}
		on:addLineItem={AddLineItem}
		on:removeLineItem={RemoveLineItem}
		on:updateLineItem={UpdateLineItem}
		on:updateDiscount={UpdateDiscount}
	  />
	</section>

	<!--Notes-->
	<section class="field col-span-6">
		<label for="notes"
			>Notes <span class="font-normal">(optional, displayed on invoice)</span></label
		>
		<textarea name="notes" id="notes" bind:value={invoice.notes} />
	</section>

	<!--Terms-->
	<section class="field col-span-6">
		<label for="terms"
			>Terms <span class="font-normal">(optional, enter your terms and conditions)</span></label
		>
		<textarea name="terms" id="terms" bind:value={invoice.terms} />
		<div class="text-xs text-gray-400">
			Formatting tips: <strong>*bold*</strong>, <em>_italics_</em>.
		</div>
	</section>
	<!--Buttons-->

	<section class="field col-span-2">
		{#if formState === 'edit'}
			<Button
				style="textOnlyDestructive"
				label="Delete"
				isAnimated={false}
				onClick={() => {
					isModalShowing = true;
				}}
				iconLeft={Trash}
			/>
		{/if}
	</section>

	<section class="field col-span-4 flex justify-end gap-x-5">
		<Button
			label="Cancel"
			style="secondary"
			isAnimated={false}
			onClick={() => {
				closePanel();
			}}
		/>
		<button
			class="button hover:shadow-coloredHover; translate-y-0 bg-lavenderIndigo text-white shadow-colored transition-all hover:-translate-y-2"
			type="submit">Save</button
		>
	</section>
</form>
<ConfirmDelete
	{invoice}
	{isModalShowing}
	on:close={() => {
		isModalShowing = false;
		closePanel();
	}}
/>
