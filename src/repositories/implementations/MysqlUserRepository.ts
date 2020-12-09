import { db } from "../../database/connection";
import { Hash } from "../../entities/Hash";
import { User } from "../../entities/User";
import { Users } from "../../entities/Users";
import { IUserRepository } from "../IUserRepository";

export class MysqlUserRepository implements IUserRepository {
    async createUser(user: User): Promise<User> {
    
        const { 
            id,
            email,
            name,
            password
        } = user;
    
        const trx = await db.transaction();

        try {
            
            await trx('user').insert({
                id,
                email,
                name,
                password
            });

            trx.commit();

            const data = await db('user').where('id', id);
            const users = new Users(data);

            return users;
        } catch (err) {
            return err;   
        }
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