import { uuid } from "uuidv4";

export class Rental {
    public readonly id?: String;

    public email?: string;
    public idMovie?: string;    
    public idStatus?: number;
    public dateStart?: string;
    public dateEnd?: string;

    constructor(props: Omit<Rental, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}