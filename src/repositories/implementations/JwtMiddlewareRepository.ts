import { Hash } from '../../entities/Hash';
import jwt from 'jsonwebtoken';
import { IMiddlewareRepository } from '../IMiddlewareRepository';
import { db } from '../../database/connection';

export class JwtMiddlewareRepository implements IMiddlewareRepository {
    async verifyHash(hash: Hash): Promise<Number> {
        
        const data = hash.hash;

        if (data === 'undefined')
            return 0; // No token provided
        return jwt.verify(data, process.env.SECRET_STRING, (err, decoded) => {
            if (err) 
                return 1; // Token invalid
            const hash = new Hash(decoded);

            try {    
                const content = db('User').where('id', hash.id).andWhere('email', hash.email).andWhere('password', hash.password);

                if (content) 
                    return 2;

            } catch (err) {
                return 3;
            }
            
        });
    }
}