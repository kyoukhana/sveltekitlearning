import { writable }  from "svelte/store";  
export const invoices = writable<Invoice[]>([]);

import data from "../../seed.json"

export const loadInvoices = () =>{
   invoices.set(data.invoices);
}
