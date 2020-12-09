import jwt from 'jsonwebtoken';
import { User } from './User';

export class Hash implements User {
    
    public readonly id?: string;
    public readonly hash?: string;
    public readonly email?: string;
    public readonly name?: string;
    public readonly password?: string;

    constructor(props: Omit<Hash, 'hash'>, hash?: string) {
        Object.assign(this, props);

        // if (!hash) {
        //     this.hash = generatorHash({props});
        // }
    }
}