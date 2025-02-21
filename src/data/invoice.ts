import { Invoice } from "./interface";
const invoices: Invoice[] = [
    { invoice_id: 1, product_id: 1, order_id: 1, quantity_bought: 2 },
    { invoice_id: 2, product_id: 2, order_id: 1, quantity_bought: 1 },
    { invoice_id: 3, product_id: 3, order_id: 2, quantity_bought: 3 },
    { invoice_id: 4, product_id: 4, order_id: 3, quantity_bought: 1 },
    { invoice_id: 5, product_id: 5, order_id: 4, quantity_bought: 4 }
];
export default invoices;