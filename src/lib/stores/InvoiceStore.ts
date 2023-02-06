import { writable }  from "svelte/store";  
export const invoices = writable<Invoice[]>([]);

import data from "../../seed.json"

export const loadInvoices = () =>{
   invoices.set(data.invoices);
   //invoices.set([]);
}

export const addInvoice = (invoiceToAdd: Invoice) => {
   invoices.update((prev: Invoice[]) => [...prev, invoiceToAdd])
   return invoiceToAdd;
 }

export const deleteInvoice = (invoiceToDelete: Invoice) => {
   invoices.update((prev: Invoice[]) => prev.filter((cur: Invoice) => cur.id !== invoiceToDelete.id));
   return invoiceToDelete;
 }