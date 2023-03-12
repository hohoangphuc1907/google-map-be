import { ObjectId } from "mongoose";

export class RoomDTO {
    private name: string;
    private address: string;
    private price: Number;


    constructor(name: string, address: string, price: Number) {
        this.name = name;
        this.address = address;
        this.price = price;
       
    }
    getname(): string {
        return this.name;
    }
    getaddress(): string {
        return this.address;
    }
    getprice(): Number {
        return this.price;
    }

}