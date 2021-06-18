import { Bill } from "./bill";

export interface Client {
    id: number;
    nombre: string;
    billsArray: Bill[];
}
