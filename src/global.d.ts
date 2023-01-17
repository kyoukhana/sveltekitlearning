import type { invoiceStatus } from "./enums"

interface Invoice{
    client: Client
    createdAt : string
    dueDate : string
    invoiceNumber : string
    invoiceStatus: invoiceStatus
    issueDate: string
    lineItems?: lineItems[]
    notes? : string
    subject? : string
    terms? : string
}


interface lineItems{
    amount  : number
    description : string
    id: string
    quantity : number
}

interface Client{
    clientStatus: clientStatus
    city : string
    email : string
    id: string
    name : string
    state : string
    street : string
    zip : string
}