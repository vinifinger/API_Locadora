import { uuid } from "uuidv4";

export class User {
    public readonly email?: String;

    public name?: string;    
    public password?: string;

    constructor(props: User) {
        Object.assign(this, props);

    }
}