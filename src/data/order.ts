import { Order } from "./interface";

const orders: Order[] = [
    { order_id: 1, total_item_price: 25.0, order_origin: "Online", delivery_fee: 5.0, price_discount: 0, order_status: "terkirim", customer_id: 1, payment_id: 1, seller_id: 1, store_id: 1 },
    { order_id: 2, total_item_price: 15.5, order_origin: "Offline", delivery_fee: 0.0, price_discount: 0, order_status: "terkirim", customer_id: 2, payment_id: 2, seller_id: 2, store_id: 1 },
    { order_id: 3, total_item_price: 35.75, order_origin: "Online", delivery_fee: 7.0, price_discount: 0, order_status: "belum terkirim", customer_id: 3, payment_id: 3, seller_id: 3, store_id: 1 },
    { order_id: 4, total_item_price: 20.0, order_origin: "Offline", delivery_fee: 0.0, price_discount: 0, order_status: "terkirim", customer_id: 4, payment_id: 4, seller_id: 4, store_id: 1 },
    { order_id: 5, total_item_price: 45.0, order_origin: "Online", delivery_fee: 5.0, price_discount: 0, order_status: "belum terkirim", customer_id: 5, payment_id: 5, seller_id: 5, store_id: 1 }
];
export default orders;

