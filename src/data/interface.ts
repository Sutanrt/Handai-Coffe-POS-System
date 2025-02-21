export interface ProductCategory {
    category_id: number;
    category_name: string;
}
export interface Payment {
    payment_id: number;
    payment_method_name: string;
    provider_name: string;
    transaction_fee: number;
    account_number: string;
}
export interface Employee {
    employee_id: number;
    name: string;
    password: string;
    email: string;
    contact_number: string;
    position: string;
    salary: number;
}
export interface Customer {
    customer_id: number;
    name: string;
    gender: "male" | "female";
    address: string;
    contact_number: string;
    email: string;
} 
export interface Users {
    users_id: number;
    name: string;
    password: string;
    email: string;
    contact_number: string;
}
export interface Store {
    store_id: number;
    store_name: string;
    store_address: string;
    account_id: number;
}  
export interface StockCategory {
    stock_category_id: number;
    stock_category_name: string;
}
export interface Stock {
    stock_id: number;
    name: string;
    price_per_unit: number;
    unit_qty: number;
    unit_name: string;
    stock_category_id: number;
    store_id: number;
}
export interface Product {
    product_id: number;
    name: string;
    price: number;
    quantity: number;
    category_id: number;
    store_id: number;
}
export interface Order {
    order_id: number;
    total_item_price: number;
    order_origin: "Online" | "Offline";
    delivery_fee: number;
    price_discount: number;
    order_status: "terkirim" | "belum terkirim";
    customer_id: number;
    payment_id: number;
    seller_id: number;
    store_id: number;
}
export interface Invoice {
    invoice_id: number;
    product_id: number;
    order_id: number;
    quantity_bought: number;
}
export interface BillOfMaterial {
    bom_id: number;
    quantity_required: number;
    product_id: number;
    stock_id: number;
}
export interface ProductionHistory {
    production_history_id: number;
    quantity_produced: number;
    pic_id: number;
    product_id: number;
}
export interface ProductionStockUsage {
    production_stock_usage_id: number;
    production_history_id: number;
    stock_id: number;
}
export interface RndHistory {
    rnd_history_id: number;
    rnd_name: string;
    pic_id: number;
}  
export interface RndStockUsage {
    rnd_stock_usage_id: number;
    quantity_used: number;
    stock_id: number;
    rnd_id: number;
}
export interface PaymentDetails {
    payment_details_id: number;
    payment_status: "Lunas" | "Belum Lunas";
    payment_id: number;
    order_id: number;
}