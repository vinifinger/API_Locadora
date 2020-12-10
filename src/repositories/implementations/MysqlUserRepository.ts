import { db } from "../../database/connection";
import { Hash } from "../../entities/Hash";
import { User } from "../../entities/User";
import { Users } from "../../entities/Users";
import { IUserRepository } from "../IUserRepository";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();
export class MysqlUserRepository implements IUserRepository {
    async findUserbyemail(email: string): Promise<User> {
        try {
            const result = await db('user').where('email', email);

            return new User(result[0]);
        } catch (err) {
            throw new Error(err);
        }
    }


    async createUser(user: User): Promise<User> {
    
        const {
            email,
            name,
            password
        } = user;
    
        const trx = await db.transaction();

        try {
            
            await trx('user').insert({
                email,
                name,
                password
            });

            trx.commit();

            return user;
        } catch (err) {
            throw new Error(err);
        }
    };

    async createHash(user: User): Promise<Hash> {
        const result = { hash: '' };
        console.log('-------')
        console.log(user)
         result.hash = jwt.sign({ user }, process.env.SECRET_STRING, {
            expiresIn: 28800
        });
        console.log(result)


        return new Hash(result);
    };

    async loginUser(user: User): Promise<Users | number> {

        const {
            email,
            password
        } = user;

        try {
            const data = await db('user').where('email', email).andWhere('password', password).limit(1);

            if (!data.length) 
                return 0

            const users = new Users(data);

            return users;
        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteHash(hash: Hash): Promise<void> {
        try {

            await db('blackList').insert({
                hash: hash.hash
            });

            return;
        } catch (err) {
            throw new Error(err);
        }
    };
}