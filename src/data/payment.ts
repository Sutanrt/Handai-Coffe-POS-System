import { Payment } from "./interface";
const payments: Payment[] = [
    { payment_id: 1, payment_method_name: "Credit Card", provider_name: "Visa", transaction_fee: 2.5, account_number: "1234567890" },
    { payment_id: 2, payment_method_name: "Debit Card", provider_name: "Mastercard", transaction_fee: 1.75, account_number: "0987654321" },
    { payment_id: 3, payment_method_name: "E-Wallet", provider_name: "PayPal", transaction_fee: 1.5, account_number: "1122334455" },
    { payment_id: 4, payment_method_name: "Bank Transfer", provider_name: "Chase", transaction_fee: 0, account_number: "6677889900" },
    { payment_id: 5, payment_method_name: "Cash", provider_name: "N/A", transaction_fee: 0, account_number: "0000000000" }
  ];
export default payments;