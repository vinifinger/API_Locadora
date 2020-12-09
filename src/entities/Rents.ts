import { Rental } from "./Rental";

export class Rents implements Rental {
    public readonly id?: String;

    public email?: string;
    public idMovie?: string;    
    public idStatus?: number;
    public dateStart?: string;
    public dateEnd?: string;

    constructor(props: Rental[]) {
        Object.assign(this, props);
    }
}