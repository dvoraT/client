import {Guid} from 'guid-typescript';
export class Order{
    constructor(
        public id?:number,
        public package_number?:Guid,
        public oredr_status?:number,
        public boxes_amount?:number,
        public deadline_date?:Date,
        public customer_id?:number,
        public route_id?:number


    ){}
}
// npm i guid-typescript --save

