import { Item } from "./Items";

export interface Order {
    id: string;
    orderNo: string;
    contactName: string;
    orderDate: Date;
    itemsOrdered: Item[];
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
 }