import { Hash } from "../entities/Hash";
import { User } from "../entities/User";

export interface IUserRepository {
    createUser(user: User): Promise<User>;    

    readUserbyLogin(user: User): Promise<User>;
}