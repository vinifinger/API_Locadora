import jwt from 'jsonwebtoken';
import { User } from './User';

export class Hash implements User {
    
    public readonly id?: string;
    public readonly hash?: string;
    public readonly email?: string;
    public readonly name?: string;
    public readonly password?: string;

    constructor(props: Hash) {
        Object.assign(this, props);
    }
}