import { User } from "./User";

export class Users implements User {
    public readonly email?: String;

    public name?: string;    
    public password?: string;

    constructor(props: User[]) {
        Object.assign(this, props);

    }
}