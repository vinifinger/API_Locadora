import { Hash } from "../entities/Hash";
import { User } from "../entities/User";
import { Users } from "../entities/Users";

export interface IUserRepository {
    findUserbyemail(email: string): Promise<User>;

    createUser(user: User): Promise<User>;    

    loginUser(user: User): Promise<User | number>;

    createHash(user: User): Promise<Hash>;

    deleteHash(hash: Hash): Promise<void>;
}