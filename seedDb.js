'use strict';

import fs from 'fs';
import { createClient } from '@supabase/supabase-js'


/* ----------- ADD VARIABLES ------------------------------------------------- */
const supabaseUrl = 'https://jrskeyrnctemyrmgjohy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyc2tleXJuY3RlbXlybWdqb2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMDIxODQsImV4cCI6MjAwMjY3ODE4NH0.BBUQRgKeg6nH954D4oveXBkT37EmmY9A5EeTJnXN7eA'
const userId = '8a7a5be6-66f8-4aba-ad06-5ca53adc1da6'
/* --------------------------------------------------------------------------- */


// setup supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// read seed data
const rawdata = fs.readFileSync('./src/seed.json');
const data = JSON.parse(rawdata);

const errorMessage = (error) => {
  console.log('Error inserting settings', error);
  process.exit(1);
}

// add settings
const settingsResult = await supabase
  .from('settings')
  .insert({ userId, ...data.settings });
if (settingsResult.error) errorMessage(settingsResult.error);
console.log('⚙️ Added Settings');

// add clients
// cycle through each client
for (const client of data.clients) {
  // separate out the invoices and line items
  const { invoices, id, ...rest } = client;


  const clientResult = await supabase
    .from('client')
    .insert({ userId, ...rest })
    .select()
  if (clientResult.error) errorMessage(clientResult.error);
  console.log('👤 Added Client', clientResult.data[0].name)

  const clientId = clientResult.data[0].id;

  // loop over invoices and add them to the db
  for (const invoice of invoices) {

    // separate out the line items
    const { lineItems, id, client, ...rest } = invoice;

    const invoiceResult = await supabase
      .from('invoice')
      .insert({ userId, clientId, ...rest })
      .select();
    if (invoiceResult.error) errorMessage(invoiceResult.error);
    console.log('💰 Added Invoice', invoiceResult.data[0].invoiceNumber);

    const invoiceId = invoiceResult.data[0].id;

    // loop over line items and add them to the db
    for (const lineItem of lineItems) {
      const { id, ...rest } = lineItem;

      const lineItemResult = await supabase
        .from('lineItems')
        .insert({ userId, invoiceId, ...rest })
        .select();
      if (lineItemResult.error) errorMessage(lineItemResult.error);
      console.log('📝 Added Line Item', lineItemResult.data[0].description);
    }
  }
}