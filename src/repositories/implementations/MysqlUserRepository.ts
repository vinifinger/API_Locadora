import { db } from "../../database/connection";
import { Hash } from "../../entities/Hash";
import { User } from "../../entities/User";
import { Users } from "../../entities/Users";
import { IUserRepository } from "../IUserRepository";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { updateRentalController } from "../../useCases/Rental/UpdateRental";
dotenv.config();
export class MysqlUserRepository implements IUserRepository {
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

            const data = await db('user').where('id', email);
            const users = new Users(data);

            return users;
        } catch (err) {
            return err;   
        }
    };

    async createHash(user: User): Promise<Hash> {
        const result = { hash: '' };
         result.hash = jwt.sign( { user }, process.env.SECRET_STRING, {
            expiresIn: 28800
        });
        console.log(result)
        return new Hash(result);
    };

    async readUserbyLogin(user: User): Promise<Users> {

        const {
            email,
            password
        } = user;

        try {
            const data = await db('user').where('email', email).andWhere('password', password).limit(1);
            const users = new Users(data);

            return users;
        } catch (err) {
            return err;
        }
    }
}