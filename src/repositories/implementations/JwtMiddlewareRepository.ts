import { Hash } from '../../entities/Hash';
import jwt from 'jsonwebtoken';
import { IMiddlewareRepository } from '../IMiddlewareRepository';
import { db } from '../../database/connection';

export class JwtMiddlewareRepository implements IMiddlewareRepository {
    async verifyHash(hash: Hash): Promise<Number> {
        
        const data = hash.hash;

        if (data === 'undefined')
            return 0; // No token provided
        return jwt.verify(data, process.env.SECRET_STRING, async (err, decoded) => {
            if (err) 
                return 1; // Token invalid
                
            decoded.user.hash = data;

            const hash = new Hash(decoded.user);

            try {    
                console.log('------')
                console.log(decoded)
                
                const content = await db('User')
                .where('email', hash.email)
                .andWhere('password', hash.password)
                .limit(1);

                if (content.length) {
                    const response = await db('blackList')
                    .where('hash', hash.hash);

                    if (response.length)
                        return 4;
                    
                    return 2;
                }

            } catch (err) {
                return 3;
            }
            
        });
    }
}