import { Guid } from "guid-typescript";

export class Package{
    constructor(
       public id?:number,
       public number?:Guid,
       public order_id?:number

    ){}
}


